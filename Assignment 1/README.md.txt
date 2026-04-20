# Smart Contract Development - Assignment 1

##  Contract Purpose
This smart contract is a simple storage system that allows only the contract owner to store and update a numerical value on the blockchain.

---

##  Functions and Logic

### 1. Constructor
- Initializes the contract.
- Sets the deployer as the owner.

### 2. setData(uint _data)
- Allows only the owner to update the stored value.
- Uses `require()` for access control.
- Emits an event when data is updated.

### 3. getData()
- Returns the stored value.
- Read-only function (view).

---

## Compilation & Deployment Steps

### Using Remix IDE

1. Open Remix IDE: https://remix.ethereum.org
2. Create a new file → `contract.sol`
3. Paste the smart contract code
4. Select compiler version `0.8.0` or above
5. Click **Compile contract.sol**

### Deployment

1. Go to "Deploy & Run Transactions"
2. Select Environment:
   - JavaScript VM (for local testing)
   - OR Injected Provider (MetaMask for testnet)
3. Click **Deploy**
4. Copy deployed contract address

---
## Test Cases

### Test Case 1: Verify Owner Address

* **Action:** Call `owner()` function
* **Expected Result:** Returns the address of the contract deployer
* **Actual Result:** Correct owner address displayed

---

### Test Case 2: Store Data

* **Action:** Call `setData(10)`
* **Expected Result:** Value should be stored successfully
* **Actual Result:** Transaction executed successfully and event emitted

---

### Test Case 3: Retrieve Data

* **Action:** Call `getData()`
* **Expected Result:** Returns previously stored value (10)
* **Actual Result:** Correct value (10) returned

---

### Test Case 4: Access Control Check

* **Action:** Attempt to call `setData()` from a non-owner account
* **Expected Result:** Transaction should fail with access restriction
* **Actual Result:** Transaction reverted with error message

---
##  Screenshots Required

### 1. Successful Compilation
- Show green checkmark in Remix compiler tab

### 2. Contract Deployment
- Show deployed contract in Remix
- Include contract address and available functions

