# Assignment 5: DAO Smart Contract

## Project Overview

This project implements a basic Decentralized Autonomous Organization (DAO) using a smart contract written in Solidity. The DAO enables users to create proposals, vote on them, and execute decisions based on voting outcomes, demonstrating decentralized governance without a central authority.

---

## Workflow of DAO

The DAO in this project follows a structured workflow for managing proposals and decision-making:

1. **Proposal Creation**
   Any user can create a proposal by providing a description. The proposal is stored on the blockchain with initial vote counts set to zero and execution status set to false.

2. **Voting Phase**
   Users can vote on a proposal using either:

   * `true` → Yes
   * `false` → No
     Each user is allowed to vote only once per proposal. The smart contract enforces this restriction using a mapping to track voter participation.

3. **Vote Counting**
   The contract maintains separate counters for:

   * Yes votes
   * No votes
     These counts are updated dynamically as users cast their votes.

4. **Execution Phase**
   After voting, any user can execute the proposal. Execution is permitted only if the number of Yes votes exceeds the number of No votes.

5. **Final State**
   Once executed, the proposal status is updated to prevent re-execution. The final state of the proposal (description, vote counts, execution status) can be retrieved using the contract’s getter function.

This workflow ensures transparent and decentralized decision-making governed entirely by smart contract logic.

---

## Voting Mechanism

* Each proposal maintains its own voting record.
* Users can vote only once per proposal.
* Voting options:

  * `true` → Yes
  * `false` → No
* Votes are stored and tracked using:

  * `yesVotes`
  * `noVotes`
* The outcome is determined by comparing the number of Yes and No votes.

---

## Proposal Creation

* Any user can create a proposal.
* Each proposal contains:

  * Description
  * Yes vote count
  * No vote count
  * Execution status

---

## Smart Contract Functions

### createProposal(string memory _description)

Creates a new proposal with a given description.

### vote(uint proposalId, bool voteYes)

Allows a user to vote Yes or No on a specific proposal.

### executeProposal(uint proposalId)

Executes the proposal if the number of Yes votes is greater than No votes.

### getProposal(uint _id)

Returns details of a specific proposal, including description, vote counts, and execution status.

---

## How to Run

1. Open Remix IDE
2. Create a new file named `DAO.sol`
3. Paste the smart contract code
4. Compile the contract
5. Deploy using MetaMask (Injected Provider)
6. Interact with the contract:

   * Create proposal
   * Vote on proposal
   * Execute proposal
   * View proposal details

---
## Test Cases

### 1. Proposal Creation

* **Input:** Call `createProposal("Build College Website")`
* **Expected Output:** New proposal is created with initial values
* **Result:** Proposal stored successfully

---

### 2. Voting (Yes Vote)

* **Input:** Call `vote(0, true)`
* **Expected Output:** Yes vote count increases
* **Result:** Yes vote recorded successfully

---

### 3. Prevent Double Voting

* **Input:** Same user calls `vote(0, true)` again
* **Expected Output:** Transaction fails with "Already voted"
* **Result:** Double voting prevented

---

### 4. Voting (No Vote)

* **Input:** Another user calls `vote(0, false)`
* **Expected Output:** No vote count increases
* **Result:** No vote recorded successfully

---

### 5. Execution Success

* **Input:** Call `executeProposal(0)` when Yes > No
* **Expected Output:** Proposal marked as executed
* **Result:** Execution successful

---

### 6. Execution Failure

* **Input:** Call `executeProposal(0)` when Yes ≤ No
* **Expected Output:** Transaction fails
* **Result:** Execution correctly restricted

---

### 7. View Proposal

* **Input:** Call `getProposal(0)`
* **Expected Output:** Returns description, vote counts, execution status
* **Result:** Correct data displayed

---

## Screenshots

### Proposal Creation

Include screenshot showing proposal creation with input and transaction confirmation.

### Voting Process

Include screenshot showing voting interaction and transaction success.

### Execution Result

Include screenshot showing proposal execution and confirmation.

---

## Conclusion

This project demonstrates the fundamental principles of a DAO, including decentralized proposal management, voting, and execution. It provides a practical understanding of how blockchain-based governance systems operate securely and transparently without centralized control.

---
