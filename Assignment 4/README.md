# Assignment 4: IPFS Integration

## Project Overview

This project demonstrates the integration of a web-based interface with the InterPlanetary File System (IPFS). It enables users to upload files to IPFS and retrieve them using a unique Content Identifier (CID). The application is built using HTML, CSS, and JavaScript, and utilizes an external IPFS pinning service for storage.

---

## IPFS Service Used

This project uses Pinata as the IPFS pinning service.

Pinata allows files to be uploaded and permanently stored (“pinned”) on IPFS, ensuring availability through public gateways.

---

## System Workflow

1. The user selects a file either through the file input or drag-and-drop interface.
2. The selected file is stored temporarily in the browser.
3. On clicking the upload button, the file is sent to the Pinata API using an HTTP POST request.
4. Pinata uploads the file to IPFS and returns a CID (Content Identifier).
5. The application displays the CID and generates a gateway URL.
6. The user can access the uploaded file using the generated link.

---

## How Files Are Stored

* Files are uploaded using the `pinFileToIPFS` API endpoint provided by Pinata.
* The file is transmitted using `FormData` in a POST request.
* Once uploaded, IPFS generates a unique CID based on the file content.
* This CID acts as the permanent address of the file on IPFS.

---

## How Files Are Retrieved

Files are retrieved using an IPFS gateway by appending the CID to the gateway URL:

```
https://gateway.pinata.cloud/ipfs/<CID>
```

This allows access to the file from any browser without requiring a local IPFS node.

---

## Features Implemented

* File selection via input and drag-and-drop
* Upload to IPFS using Pinata API
* CID generation and display
* Copy CID functionality
* Direct file access via IPFS gateway
* Upload status handling and UI feedback

---

## Explanation of Functions and Logic

### 1. `selectFile()`

Triggers the hidden file input element when the user clicks the "Choose File" button.

### 2. File Input Event Listener

```javascript
fileInput.addEventListener("change", ...)
```

Captures the selected file and stores it in a variable for further processing.

---

### 3. Drag and Drop Handlers

* `dragover` → Prevents default behavior and highlights the drop area
* `dragleave` → Restores original styling
* `drop` → Captures the dropped file and stores it

---

### 4. `showFile()`

Displays the selected file name and type in the UI.

---

### 5. `uploadFile()`

Core function responsible for uploading the file to IPFS.

**Logic:**

* Validates if a file is selected
* Disables the upload button to prevent multiple submissions
* Creates a `FormData` object and appends the file
* Sends a POST request to Pinata API
* Receives response and extracts CID
* Updates UI with CID and file access link
* Handles success and error states

---

### 6. `copyCID()`

Copies the generated CID to the clipboard using the browser clipboard API.

---

## Example CID

```
QmSK43vVCqieADssUoATdAUquBH3gR9q5W8AL8zrmGtwb4
```

---

## How to Run the Project

1. Create an account on Pinata
2. Generate API Key and Secret Key
3. Replace credentials in `app.js`
4. Open `index.html` in a browser or run using Live Server
5. Select or drag and drop a file
6. Click "Upload to IPFS"
7. View the generated CID and open the file

---
## Test Cases

### 1. File Upload Success

* **Input:** Select a valid file and click "Upload"
* **Expected Output:** File is uploaded and CID is generated
* **Result:** CID displayed with working file link

---

### 2. File Retrieval

* **Input:** Open generated IPFS gateway link
* **Expected Output:** Uploaded file is displayed
* **Result:** File successfully retrieved

---

### 3. No File Selected

* **Input:** Click "Upload" without selecting a file
* **Expected Output:** Alert prompting user to select a file
* **Result:** Validation message displayed

---

### 4. Invalid API Key

* **Input:** Use incorrect Pinata API credentials
* **Expected Output:** Upload fails with error response
* **Result:** Error handled and "Upload Failed" message displayed

---

### 5. Large File Handling

* **Input:** Upload a large file
* **Expected Output:** Upload takes longer but completes or fails gracefully
* **Result:** System handles request without crashing

---

## Screenshots

### File Upload Success and CID Link

Include a screenshot showing:

* Selected file
* Upload success message
* Generated CID
* Working file access link

---

## Important Notes

* API keys are used for authentication with Pinata
* Keys are exposed in frontend for demonstration purposes only
* For production use, API calls should be handled through a backend server
* Files uploaded to IPFS are content-addressed and immutable

---

## Conclusion

This project demonstrates decentralized file storage using IPFS and highlights how files can be securely uploaded, stored, and retrieved using content-based addressing. It provides a foundational understanding of IPFS integration in web applications.

---
