# Blockchain Technology Lab – Assignments

## Student Details

* **Name:** Sarthak Shivaji Bagul
* **Roll Number:** 124B2B021
* **Course Name:** Blockchain Technology
* **Course Code:** BCE26PE02

---

## Overview

This repository contains a series of assignments covering core concepts of blockchain technology, including smart contract development, deployment on test networks, frontend integration with MetaMask, IPFS-based storage, and DAO implementation.

---

## Assignments Summary

### Assignment 1: Smart Contract Development

Introduction to Solidity programming, including creating, deploying, and interacting with a basic smart contract.

### Assignment 2: Polygon Deployment

Deployment of smart contracts on the Polygon Amoy Testnet using MetaMask and verification using PolygonScan.

### Assignment 3: Web Interface with MetaMask

A frontend application that connects to Ethereum via MetaMask, allowing wallet connection and transaction execution.

### Assignment 4: IPFS Integration

A web application that uploads files to IPFS using Pinata and retrieves them via CID links.

### Assignment 5: DAO Smart Contract

Implementation of a DAO with proposal creation, voting, and execution using Solidity.

---

## Tech Stack Used

* **Solidity** – Smart contract development
* **JavaScript (Vanilla JS)** – Frontend logic
* **HTML, CSS** – UI design
* **MetaMask** – Wallet integration
* **Remix IDE** – Smart contract development & deployment
* **Polygon Amoy Testnet** – Blockchain deployment network
* **IPFS (Pinata)** – Decentralized file storage

---

## How to Run Each Assignment

### Assignment 1: Smart Contract Development

1. Open Remix IDE
2. Create file `contract.sol` and paste contract code
3. Compile the contract
4. Deploy using **Remix VM**
5. Interact with functions:

   * Call `owner` to check deployer address
   * Call `setData` and enter a value
   * Call `getData` to verify stored value

---

### Assignment 2: Polygon Deployment

1. Open Remix IDE
2. Create file `contract.sol` and paste contract code
3. Compile the contract
4. Install and open MetaMask
5. Switch network to **Polygon Amoy Testnet**
6. Deploy using **Injected Provider - MetaMask**
7. Confirm transaction in MetaMask
8. Copy transaction hash from Remix
9. Open PolygonScan
10. Paste transaction hash to verify deployment
11. Copy deployed contract address

---

### Assignment 3: Web Interface + MetaMask

1. Install MetaMask browser extension
2. Open the `assignment-3` folder
3. Run using Live Server or open `index.html`
4. Click **Connect Wallet** and approve in MetaMask
5. Click **Send Transaction** and confirm

---

### Assignment 4: IPFS Integration

1. Create an account on Pinata
2. Generate API Key and Secret Key
3. Replace keys in `app.js`
4. Open the `assignment-4` folder
5. Run `index.html` in browser
6. Select a file and click **Upload to IPFS**
7. Copy CID or open file using generated link

---

### Assignment 5: DAO Smart Contract

1. Open Remix IDE
2. Create file `DAO.sol` and paste contract code
3. Compile the contract
4. Deploy using **Injected Provider - MetaMask**
5. Interact with functions:

   * Create proposal
   * Vote on proposal
   * Execute proposal
   * View proposal using getter function

---

