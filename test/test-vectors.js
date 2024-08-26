/*!
 * Copyright (c) 2023-2024 Digital Bazaar, Inc. All rights reserved.
 */
/* Note: This file contains data generated from the vc-di-ecdsa specification
test vectors. */

/* eslint-disable max-len */
/* eslint-disable quote-props */
/* eslint-disable quotes */
export const curveFixtures = [{
  curve: 'P-256',
  keyMaterial: {
    "publicKeyMultibase": "zDnaepBuvsQ8cpsWrVKw8fbpGpvPeNSjVPTWoq6cRqaYzBKVP",
    "secretKeyMultibase": "z42twTcNeSYcnqg1FLuSFs2bsGH3ZqbRHFmvS9XMsYhjxvHN"
  },
  signedFixture: {
    "@context": [
      "https://www.w3.org/ns/credentials/v2",
      "https://www.w3.org/ns/credentials/examples/v2"
    ],
    "id": "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
    "type": [
      "VerifiableCredential",
      "AlumniCredential"
    ],
    "name": "Alumni Credential",
    "description": "A minimum viable example of an Alumni Credential.",
    "issuer": "https://vc.example/issuers/5678",
    "validFrom": "2023-01-01T00:00:00Z",
    "credentialSubject": {
      "id": "did:example:abcdefgh",
      "alumniOf": "The School of Examples"
    },
    "proof": {
      "type": "DataIntegrityProof",
      "cryptosuite": "ecdsa-rdfc-2019",
      "created": "2023-02-24T23:36:38Z",
      "verificationMethod": "did:key:zDnaepBuvsQ8cpsWrVKw8fbpGpvPeNSjVPTWoq6cRqaYzBKVP#zDnaepBuvsQ8cpsWrVKw8fbpGpvPeNSjVPTWoq6cRqaYzBKVP",
      "proofPurpose": "assertionMethod",
      "proofValue": "zaHXrr7AQdydBk3ahpCDpWbxfLokDqmCToYm2dyWvpcFVyWooC2he63w1f7UNQoAMKdhaRtcnaE2KTo5o5vTCcfw"
    }
  }
}, {
  curve: 'P-384',
  keyMaterial: {
    "publicKeyMultibase": "z82LkuBieyGShVBhvtE2zoiD6Kma4tJGFtkAhxR5pfkp5QPw4LutoYWhvQCnGjdVn14kujQ",
    "secretKeyMultibase": "z2fanyY7zgwNpZGxX5fXXibvScNaUWNprHU9dKx7qpVj7mws9J8LLt4mDB5TyH2GLHWkUc"
  },
  signedFixture: {
    "@context": [
      "https://www.w3.org/ns/credentials/v2",
      "https://www.w3.org/ns/credentials/examples/v2"
    ],
    "id": "urn:uuid:58172aac-d8ba-11ed-83dd-0b3aef56cc33",
    "type": [
      "VerifiableCredential",
      "AlumniCredential"
    ],
    "name": "Alumni Credential",
    "description": "A minimum viable example of an Alumni Credential.",
    "issuer": "https://vc.example/issuers/5678",
    "validFrom": "2023-01-01T00:00:00Z",
    "credentialSubject": {
      "id": "did:example:abcdefgh",
      "alumniOf": "The School of Examples"
    },
    "proof": {
      "type": "DataIntegrityProof",
      "cryptosuite": "ecdsa-rdfc-2019",
      "created": "2023-02-24T23:36:38Z",
      "verificationMethod": "did:key:z82LkuBieyGShVBhvtE2zoiD6Kma4tJGFtkAhxR5pfkp5QPw4LutoYWhvQCnGjdVn14kujQ#z82LkuBieyGShVBhvtE2zoiD6Kma4tJGFtkAhxR5pfkp5QPw4LutoYWhvQCnGjdVn14kujQ",
      "proofPurpose": "assertionMethod",
      "proofValue": "z967Mvv5bxtmLNqTzPZ8KmJjFmFXaAKeQNzq7GWnQkMcLtaGSSmuozE5WtJ8PipMe178B1tE28K1vsJur9bGVJhz6jgSJsRHFSQeqgH8hhjcg8gZDFJC1b9FsR5ggNmDBqHv"
    }
  }
}];
/* eslint-enable quotes */
/* eslint-enable quote-props */
/* eslint-enable max-len */
