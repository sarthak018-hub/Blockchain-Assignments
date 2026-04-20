# Assignment 3: Web Interface with MetaMask Integration

## Project Overview

This project demonstrates how a web-based frontend can connect to the Ethereum blockchain using MetaMask. It enables users to connect their wallet, view their account address, and execute a transaction through a simple interface.

---

## Technologies Used

* HTML, CSS, JavaScript
* Ethers.js
* MetaMask

---

## How the Frontend Connects to the Blockchain

The connection between the frontend and the blockchain is established using Ethers.js and MetaMask as a provider.

### Process:

1. The application checks for MetaMask using `window.ethereum`.
2. A provider is initialized:

   ```js
   const provider = new ethers.providers.Web3Provider(window.ethereum);
   ```
3. The user is prompted to connect their wallet:

   ```js
   await provider.send("eth_requestAccounts", []);
   ```
4. A signer object is obtained to authorize transactions:

   ```js
   const signer = provider.getSigner();
   ```
5. The application can now interact with the blockchain (e.g., send transactions or call smart contracts).

---

## Role of MetaMask

MetaMask acts as a secure interface between the user and the Ethereum blockchain.

### Responsibilities:

* Provides access to the user’s Ethereum account
* Requests user permission before connecting
* Signs transactions securely
* Broadcasts transactions to the blockchain network

---

## Features Implemented

* Wallet connection using MetaMask
* Display of connected account address
* Transaction execution from the frontend
* Real-time transaction status updates
* Clean and user-friendly interface

---

## How to Run the Project

1. Install MetaMask browser extension
2. Open the project folder
3. Run using Live Server or open `index.html` in a browser
4. Click on "Connect Wallet"
5. Approve the connection request in MetaMask
6. Click on "Send Transaction"
7. Approve the transaction in MetaMask

---

## Network Configuration

* Ethereum Test Network (Sepolia recommended)
* Ensure the wallet is connected to a test network
* Use test ETH from a faucet for transactions

---
## Test Cases

### 1. Wallet Connection

* **Input:** Click "Connect Wallet"
* **Expected Output:** MetaMask prompts for connection and displays user wallet address
* **Result:** Successfully connected and address displayed

---

### 2. Transaction Execution

* **Input:** Click "Send Transaction"
* **Expected Output:** MetaMask prompts for transaction confirmation
* **Result:** Transaction successfully sent and confirmed

---

### 3. Without Wallet Connection

* **Input:** Click "Send Transaction" without connecting wallet
* **Expected Output:** Error or alert message prompting user to connect wallet
* **Result:** Proper validation message displayed

---

### 4. MetaMask Not Installed

* **Input:** Open application without MetaMask
* **Expected Output:** Alert indicating MetaMask is required
* **Result:** Correct error message shown
---
## Screenshots

### Wallet Connection

Include a screenshot showing the MetaMask connection request and the connected account address displayed on the interface.

### Transaction Execution

Include a screenshot showing the MetaMask transaction confirmation and successful execution.

---
---

## Important Notes

* MetaMask must be installed for the application to function
* The wallet must be connected before initiating transactions
* Always use a test network to avoid real financial transactions
* Ensure the correct network is selected in MetaMask

---

## Conclusion

This project demonstrates the integration of a web interface with the Ethereum blockchain using MetaMask and Ethers.js. It provides a foundational understanding of how decentralized applications interact with users and securely execute blockchain transactions.

---
