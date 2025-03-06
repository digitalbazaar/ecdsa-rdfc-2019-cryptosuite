/*!
 * Copyright (c) 2023-2025 Digital Bazaar, Inc. All rights reserved.
 */
export const controller = 'https://example.edu/issuers/565049';
const publicKeyMultibase = 'zDnaekGZTbQBerwcehBSXLqAg6s55hVEBms1zFy89VHXtJSa9';
const secretKeyMultibase = 'z42tqZ5smVag3DtDhjY9YfVwTMyVHW6SCHJi2ZMrD23DGYS3';
const id = `${controller}#${publicKeyMultibase}`;

export const mockPublicEcdsaMultikey = {
  '@context': 'https://w3id.org/security/multikey/v1',
  type: 'Multikey',
  controller,
  id,
  publicKeyMultibase
};

export const ecdsaMultikeyKeyPair = {
  '@context': 'https://w3id.org/security/multikey/v1',
  type: 'Multikey',
  controller,
  id,
  publicKeyMultibase,
  secretKeyMultibase
};

export const ecdsaSecp256KeyPair = {
  type: 'EcdsaSecp256r1VerificationKey2019',
  controller,
  publicKeyMultibase,
  secretKeyMultibase
};

export const controllerDocEcdsaMultikey = {
  '@context': [
    'https://www.w3.org/ns/did/v1',
    'https://w3id.org/security/multikey/v1'
  ],
  id: 'https://example.edu/issuers/565049',
  assertionMethod: [mockPublicEcdsaMultikey]
};

export const credential = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    {
      AlumniCredential: 'https://schema.org#AlumniCredential',
      alumniOf: 'https://schema.org#alumniOf'
    },
    'https://w3id.org/security/data-integrity/v2'
  ],
  id: 'http://example.edu/credentials/1872',
  type: ['VerifiableCredential', 'AlumniCredential'],
  issuer: 'https://example.edu/issuers/565049',
  issuanceDate: '2010-01-01T19:23:24Z',
  credentialSubject: {
    id: 'https://example.edu/students/alice',
    alumniOf: 'Example University'
  }
};

// https://w3id.org/citizenship/v4rc1
/* eslint-disable */
export const citizenshipV4RC1Context = {
  "@context": {
    "@protected": true,

    "image": {"@id": "https://schema.org/image", "@type": "@id"},

    "QuantitativeValue": {
      "@id": "https://schema.org/QuantitativeValue",
      "@context": {
        "@protected": true,

        "unitCode": "https://schema.org/unitCode",
        "value": "https://schema.org/value"
      }
    },

    "PostalAddress": {
      "@id": "https://schema.org/PostalAddress",
      "@context": {
        "@protected": true,

        "addressCountry": "https://schema.org/addressCountry",
        "addressLocality": "https://schema.org/addressLocality",
        "addressRegion": "https://schema.org/addressRegion"
      }
    },

    "Person": {
      "@id": "https://schema.org/Person",

      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "additionalName": "https://schema.org/additionalName",
        "birthCountry": "https://w3id.org/citizenship#birthCountry",
        "birthDate": {"@id": "https://schema.org/birthDate", "@type": "http://www.w3.org/2001/XMLSchema#dateTime"},
        "familyName": "https://schema.org/familyName",
        "gender": "https://schema.org/gender",
        "givenName": "https://schema.org/givenName",
        "height": "https://schema.org/height",
        "image": {"@id": "https://schema.org/image", "@type": "@id"},
        "maritalStatus": "https://w3id.org/citizenship#maritalStatus",
        "marriageCertificateNumber": "https://w3id.org/citizenship#marriageCertificateNumber",
        "marriageLocation": {"@id": "https://w3id.org/citizenship#marriageLocation", "@type": "@id"}
      }
    },

    "PermanentResident": {
      "@id": "https://w3id.org/citizenship#PermanentResident",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "commuterClassification": "https://w3id.org/citizenship#commuterClassification",
        "formerNationality": "https://w3id.org/citizenship#formerNationality",
        "permanentResidentCard": {"@id": "https://w3id.org/citizenship#permanentResidentCard", "@type": "@id"},
        "residence": {"@id": "https://w3id.org/citizenship#residence", "@type": "@id"},
        "residentSince": {"@id": "https://w3id.org/citizenship#residentSince", "@type": "http://www.w3.org/2001/XMLSchema#dateTime"}
      }
    },

    "PermanentResidentCard": {
      "@id": "https://w3id.org/citizenship#PermanentResidentCard",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "filingLocation": {"@id": "https://w3id.org/citizenship#filingLocation", "@type": "@id"},
        "identifier": "https://schema.org/identifier",
        "lprCategory": "https://w3id.org/citizenship#lprCategory",
        "lprNumber": "https://w3id.org/citizenship#lprNumber",
        "mrzHash": {
          "@id": "https://w3id.org/citizenship#mrzHash",
          "@type": "https://w3id.org/security#multibase"
        }
      }
    },

    "PermanentResidentCardCredential": "https://w3id.org/citizenship#PermanentResidentCardCredential",

    "EmployablePerson": {
      "@id": "https://w3id.org/citizenship#EmployablePerson",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "commuterClassification": "https://w3id.org/citizenship#commuterClassification",
        "employmentAuthorizationDocument": {"@id": "https://w3id.org/citizenship#employmentAuthorizationDocument", "@type": "@id"},
        "formerNationality": "https://w3id.org/citizenship#formerNationality",
        "residence": {"@id": "https://w3id.org/citizenship#residence", "@type": "@id"},
        "residentSince": {"@id": "https://w3id.org/citizenship#residentSince", "@type": "http://www.w3.org/2001/XMLSchema#dateTime"}
      }
    },

    "EmploymentAuthorizationDocument": {
      "@id": "https://w3id.org/citizenship#EmploymentAuthorizationDocument",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "filingLocation": {"@id": "https://w3id.org/citizenship#filingLocation", "@type": "@id"},
        "identifier": "https://schema.org/identifier",
        "lprCategory": "https://w3id.org/citizenship#lprCategory",
        "lprNumber": "https://w3id.org/citizenship#lprNumber",
        "mrzHash": {
          "@id": "https://w3id.org/citizenship#mrzHash",
          "@type": "https://w3id.org/security#multibase"
        }
      }
    },

    "EmploymentAuthorizationDocumentCredential": "https://w3id.org/citizenship#EmploymentAuthorizationDocumentCredential",

    "NaturalizedPerson": {
      "@id": "https://w3id.org/citizenship#NaturalizedPerson",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "formerNationality": "https://w3id.org/citizenship#formerNationality",
        "certificateOfNaturalization": {"@id": "https://w3id.org/citizenship#certificateOfNaturalization", "@type": "@id"},
        "residence": {"@id": "https://w3id.org/citizenship#residence", "@type": "@id"},
        "residentSince": {"@id": "https://w3id.org/citizenship#residentSince", "@type": "http://www.w3.org/2001/XMLSchema#dateTime"},
        "commuterClassification": "https://w3id.org/citizenship#commuterClassification"
      }
    },

    "CertificateOfNaturalization": {
      "@id": "https://w3id.org/citizenship#CertificateOfNaturalization",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "ceremonyDate": {"@id": "https://w3id.org/citizenship#ceremonyDate", "@type": "http://www.w3.org/2001/XMLSchema#dateTime"},
        "ceremonyLocation": {"@id": "https://w3id.org/citizenship#ceremonyLocation", "@type": "@id"},
        "filingLocation": {"@id": "https://w3id.org/citizenship#filingLocation", "@type": "@id"},
        "naturalizationLocation": {"@id": "https://w3id.org/citizenship#naturalizationLocation", "@type": "@id"},
        "naturalizedBy": "https://w3id.org/citizenship#naturalizedBy",
        "identifier": "https://schema.org/identifier",
        "insRegistrationNumber": "https://w3id.org/citizenship#insRegistrationNumber"
      }
    },

    "CertificateOfNaturalizationCredential": "https://w3id.org/citizenship#CertificateOfNaturalizationCredential",

    "Citizen": {
      "@id": "https://w3id.org/citizenship#Citizen",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "certificateOfCitizenship": {"@id": "https://w3id.org/citizenship#certificateOfCitizenship", "@type": "@id"}
      }
    },

    "CertificateOfCitizenship": {
      "@id": "https://w3id.org/citizenship#CertificateOfCitizenship",
      "@context": {
        "@protected": true,

        "id": "@id",
        "type": "@type",

        "filingLocation": {"@id": "https://w3id.org/citizenship#filingLocation", "@type": "@id"},
        "identifier": "https://schema.org/identifier",
        "ceremonyDate": {"@id": "https://w3id.org/citizenship#ceremonyDate", "@type": "http://www.w3.org/2001/XMLSchema#dateTime"},
        "ceremonyLocation": {"@id": "https://w3id.org/citizenship#ceremonyLocation", "@type": "@id"},
        "cisRegistrationNumber": "https://w3id.org/citizenship#cisRegistrationNumber"
      }
    },

    "CertificateOfCitizenshipCredential": "https://w3id.org/citizenship#CertificateOfCitizenshipCredential"
  }
}
/* eslint-enable */
