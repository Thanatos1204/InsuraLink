# Firestore Database Setup Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Client Schema](#client-schema)
   - [Fields](#fields)
   - [Document Creation](#document-creation)
3. [Broker Schema](#broker-schema)
   - [Fields](#fields-1)
   - [Clients Collection](#clients-collection)
   - [Document Creation](#document-creation-1)
4. [Insurance Agent Schema](#insurance-agent-schema)
   - [Fields](#fields-2)
   - [Document Creation](#document-creation-2)
5. [Screenshots](#screenshots)

## Introduction

This documentation provides detailed steps for setting up the Firestore database for a project involving three major entities - Client, Broker, and Insurance Agent. Additionally, Firebase authentication is integrated with the project.

## Client Schema

### Fields

1. **brokerId**: ID of the associated broker.
2. **clientId**: ID of the client, identical to the document ID.
3. **key**: Private key generated using the Fernet library.

### Document Creation

When a client logs in, a new document is created in the "Client" collection using the `setDoc` method, with the authentication user ID as the document ID.

```javascript
// Example code for creating a new client document
const clientDoc = {
  brokerId: "010", // Default brokerId for all clients
  clientId: "user123", // Authentication user ID
  key: "generated_private_key",
};

// Firestore setDoc method
setDoc(doc(db, "Client", "user123"), clientDoc);
```

## Broker Schema

### Fields

1. **brokerId**: ID of the broker.
2. **clients**: Collection containing client documents.

### Clients Collection

Within the "clients" collection, each document contains the following fields:

1. **clientName**: Name of the client.
2. **clientDocument**: Document associated with the client.
3. **clientDocumentType**: Type of client document.
4. **clientEmail**: Email of the client.
5. **clientPhone**: Phone number of the client.

### Document Creation

During the registration of a broker, a new document is created in the "Broker" collection, and the brokerId is assigned. Additionally, within the "clients" collection, documents are created for each client associated with the broker.

```javascript
// Example code for creating a new broker document
const brokerDoc = {
  brokerId: "broker123", // Assigned broker ID
};

// Firestore setDoc method
setDoc(doc(db, "Broker", "broker123"), brokerDoc);

// Example code for creating a new client document within the broker's collection
const clientDocWithinBroker = {
  clientName: "Client Name",
  clientDocument: "Client Document",
  clientDocumentType: "Document Type",
  clientEmail: "client@example.com",
  clientPhone: "123-456-7890",
};

// Firestore setDoc method
setDoc(doc(db, "Broker/broker123/clients", "user123"), clientDocWithinBroker);
```

## Insurance Agent Schema

### Fields

1. **agentId**: ID of the insurance agent (same as user ID).
2. **brokerId**: ID of the associated broker.

### Document Creation

For each insurance agent, a new document is created in the "InsuranceAgent" collection, containing the agentId and brokerId.

```javascript
// Example code for creating a new insurance agent document
const agentDoc = {
  agentId: "user456", // Authentication user ID
  brokerId: "broker123", // ID of the associated broker
};

// Firestore setDoc method
setDoc(doc(db, "InsuranceAgent", "user456"), agentDoc);
```

## Screenshots

- Screenshot 1: Client Schema
  ![Client Schema](![Alt text](image-1.png))

- Screenshot 2: Broker Schema
  ![Broker Schema](![Alt text](image-2.png))

- Screenshot 3: Insurance Agent Schema
  ![Insurance Agent Schema](![Alt text](image-3.png))

  ![Alt text](image-4.png)

Include actual screenshots of your Firestore dashboard or relevant code execution outputs in the designated spaces above.