const PINATA_API_KEY = "68c15425e51b82043ae2";
const PINATA_SECRET = "f14c3e4bf87cc2e7642a87276afa133fa120ecf4a426de277114a4ed9dd0de8b";

let selectedFile = null;

function selectFile() {
    document.getElementById("fileInput").click();
}

document.getElementById("fileInput").addEventListener("change", (e) => {
    selectedFile = e.target.files[0];
    document.getElementById("fileName").innerText = selectedFile.name;
});

// Drag & Drop
const dropArea = document.getElementById("dropArea");

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.style.borderColor = "blue";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.style.borderColor = "#ccc";
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    selectedFile = e.dataTransfer.files[0];
    document.getElementById("fileName").innerText = selectedFile.name;
});

async function uploadFile() {
    if (!selectedFile) {
        alert("Please select a file");
        return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    document.getElementById("status").innerText = "Uploading...";

    try {
        const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
            method: "POST",
            headers: {
                pinata_api_key: PINATA_API_KEY,
                pinata_secret_api_key: PINATA_SECRET
            },
            body: formData
        });

        const data = await res.json();
        const cid = data.IpfsHash;

        document.getElementById("cid").innerText = cid;
        document.getElementById("viewLink").href = `https://gateway.pinata.cloud/ipfs/${cid}`;
        document.getElementById("viewLink").innerText = "View File";

        document.getElementById("result").classList.remove("hidden");
        document.getElementById("status").innerText = "Upload Successful";

    } catch (err) {
        console.error(err);
        document.getElementById("status").innerText = "Upload Failed";
    }
}

function copyCID() {
    const cid = document.getElementById("cid").innerText;
    navigator.clipboard.writeText(cid);
    alert("CID copied!");
}

