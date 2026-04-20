# Assignment 2: Polygon Deployment

## Overview

This assignment demonstrates the deployment of a Solidity smart contract on the Polygon Amoy Testnet. The contract used is a simple storage contract that allows storing and retrieving a numerical value on the blockchain.

---

## Contract Details

* **Contract Name:** SimpleStorage
* **Solidity Version:** 0.8.28
* **Purpose:**
  The contract allows the owner to store and retrieve a numeric value securely on the blockchain.

---

## Network Details

* **Network Name:** Polygon Amoy Testnet
* **RPC URL:** https://rpc-amoy.polygon.technology
* **Chain ID:** 80002
* **Currency Symbol:** MATIC

---

## Deployment Method

The contract was deployed using the Remix IDE with an injected provider connected via MetaMask.

---

## Deployment Steps

1. Open Remix IDE in the browser.
2. Create and paste the smart contract code (`contract.sol`).
3. Compile the contract using Solidity compiler version 0.8.28.
4. Connect MetaMask and switch to Polygon Amoy Testnet.
5. Select "Injected Provider - MetaMask" as the environment.
6. Deploy the contract and confirm the transaction in MetaMask.

---

## Deployment Details

* **Contract Address:**
  0xb8FE3a317E3fd03c21c40d2a04da07858fF1fcD2

* **Transaction Hash:**
  0x61796430494f68e06841e15239df46302bff4188fc171b8fb32ec1f555b62906

---

## Verification

The deployment was verified using PolygonScan.
The transaction details confirm successful contract creation on the Polygon Amoy Testnet.

---
## Test Cases

### Test Case 1: Deployment Verification

* **Action:** Deploy contract on Polygon Amoy Testnet
* **Expected Result:** Contract should be deployed successfully with a valid transaction hash
* **Actual Result:** Contract deployed successfully and verified on PolygonScan

---

### Test Case 2: Transaction Verification

* **Action:** Open transaction hash on PolygonScan
* **Expected Result:** Transaction status should be "Success"
* **Actual Result:** Transaction confirmed successfully with contract creation details

---

### Test Case 3: Contract Address Validation

* **Action:** Verify deployed contract address on PolygonScan
* **Expected Result:** Address should exist and be linked to deployment transaction
* **Actual Result:** Contract address correctly displayed and linked

---

### Test Case 4: Functional Testing

* **Action:** Interact with contract functions (`setData`, `getData`) via Remix
* **Expected Result:** Functions should execute correctly on testnet
* **Actual Result:** Data stored and retrieved successfully

---
## Screenshots Included

* Successful contract deployment in Remix IDE
* Transaction details on PolygonScan

---

## Conclusion

The smart contract was successfully deployed and verified on the Polygon Amoy Testnet. The deployment process demonstrates interaction with blockchain networks using Remix and MetaMask, along with verification through a blockchain explorer.
