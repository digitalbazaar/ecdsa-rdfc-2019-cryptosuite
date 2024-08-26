/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
*/
import * as EcdsaMultikey from '@digitalbazaar/ecdsa-multikey';
import {canonize} from './canonize.js';
import {createVerifier} from './createVerifier.js';
import {name} from './name.js';
import {requiredAlgorithm} from './requiredAlgorithm.js';
import {sha} from './sha.js';

export const cryptosuite = {
  canonize,
  createVerifier,
  createVerifyData: _createVerifyData,
  name,
  requiredAlgorithm
};

async function _createVerifyData({
  cryptosuite, document, proof, documentLoader, dataIntegrityProof,
  verificationMethod
} = {}) {
  // determine digest algorithm from key algorithm
  let keyAlgorithm;
  if(verificationMethod) {
    const key = await EcdsaMultikey.from(verificationMethod);
    const verifier = key.verifier();
    keyAlgorithm = verifier.algorithm;
  } else if(dataIntegrityProof.signer?.algorithm) {
    keyAlgorithm = dataIntegrityProof.signer.algorithm;
  }
  if(!keyAlgorithm) {
    throw new Error(
      'Either "verificationMethod" or "signer" with "algorithm" must be ' +
      'passed to cryptosuite to determine hash algorithm.');
  }
  const algorithm = keyAlgorithm === 'P-256' ? 'SHA-256' : 'SHA-384';

  const c14nOptions = {
    documentLoader,
    safe: true,
    base: null,
    skipExpansion: false,
    messageDigestAlgorithm: algorithm
  };

  // await both c14n proof hash and c14n document hash
  const [proofHash, docHash] = await Promise.all([
    // canonize and hash proof
    _canonizeProof(proof, {
      document, cryptosuite, dataIntegrityProof, c14nOptions
    }).then(c14nProofOptions => sha({algorithm, string: c14nProofOptions})),
    // canonize and hash document
    cryptosuite.canonize(document, c14nOptions).then(
      c14nDocument => sha({algorithm, string: c14nDocument}))
  ]);
  // concatenate hash of c14n proof options and hash of c14n document
  return _concat(proofHash, docHash);
}

async function _canonizeProof(proof, {
  document, cryptosuite, dataIntegrityProof, c14nOptions
}) {
  // `proofValue` must not be included in the proof options
  proof = {
    '@context': document['@context'],
    ...proof
  };
  dataIntegrityProof.ensureSuiteContext({
    document: proof, addSuiteContext: true
  });
  delete proof.proofValue;
  return cryptosuite.canonize(proof, c14nOptions);
}

function _concat(b1, b2) {
  const rval = new Uint8Array(b1.length + b2.length);
  rval.set(b1, 0);
  rval.set(b2, b1.length);
  return rval;
}
