let provider;
let signer;

async function connectWallet() {
    try {
        if (window.ethereum) {
            provider = new ethers.providers.Web3Provider(window.ethereum);

            await provider.send("eth_requestAccounts", []);

            signer = provider.getSigner();
            const address = await signer.getAddress();

            document.getElementById("account").innerText = address;

            console.log("Connected:", address);
        } else {
            alert("MetaMask not installed!");
        }
    } catch (err) {
        console.error(err);
    }
}

async function sendTransaction() {
    try {
        const tx = await signer.sendTransaction({
            to: "0x000000000000000000000000000000000000dead", // dummy
            value: ethers.utils.parseEther("0.001")
        });

        console.log(tx);
        alert("Transaction Sent!");
    } catch (err) {
        console.error(err);
    }
}

window.connectWallet = connectWallet;
window.sendTransaction = sendTransaction;