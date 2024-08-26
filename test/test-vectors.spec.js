/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
import * as EcdsaMultikey from '@digitalbazaar/ecdsa-multikey';
import {cryptosuite} from '../lib/index.js';
import {DataIntegrityProof} from '@digitalbazaar/data-integrity';
import {expect} from 'chai';
import jsigs from 'jsonld-signatures';
import {loader} from './documentLoader.js';

import * as testVectors from './test-vectors.js';

const {purposes: {AssertionProofPurpose}} = jsigs;

const documentLoader = loader.build();

describe('test vectors', () => {
  const {curveFixtures} = testVectors;
  for(const curveFixture of curveFixtures) {
    addTests(curveFixture);
  }
});

function addTests({curve, keyMaterial, signedFixture}) {
  let keyPair;
  before(async () => {
    keyPair = await EcdsaMultikey.from(keyMaterial);
    keyPair.controller = `did:key:${keyPair.publicKeyMultibase}`;
    keyPair.id = `${keyPair.controller}#${keyPair.publicKeyMultibase}`;
  });

  it(`should create ${curve} proof`, async () => {
    const unsigned = {...signedFixture};
    delete unsigned.proof;

    const signer = keyPair.signer();
    const date = new Date(signedFixture.proof.created);

    let error;
    let signed;
    try {
      signed = await jsigs.sign(unsigned, {
        suite: new DataIntegrityProof({cryptosuite, signer, date}),
        purpose: new AssertionProofPurpose(),
        documentLoader
      });
    } catch(e) {
      error = e;
    }

    expect(error).to.not.exist;
    // ECDSA implementation is pseudorandom, so proof value will not match
    const modified = {...signedFixture};
    modified.proof = {
      ...signedFixture.proof,
      proofValue: signed.proof.proofValue
    };
    expect(signed).to.deep.equal(modified);

    // ensure generated signed document verifies
    const result = await jsigs.verify(signed, {
      suite: new DataIntegrityProof({cryptosuite}),
      purpose: new AssertionProofPurpose(),
      documentLoader
    });
    expect(result.verified).to.be.true;
  });

  it(`should verify ${curve} signed fixture`, async () => {
    const result = await jsigs.verify(signedFixture, {
      suite: new DataIntegrityProof({cryptosuite}),
      purpose: new AssertionProofPurpose(),
      documentLoader
    });

    expect(result.verified).to.be.true;
  });
}
