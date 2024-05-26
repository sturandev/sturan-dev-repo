// import{ useWeb }
import { Web3 } from "web3"
let web3;
const setSepoliaNetwork = async () => {
    const networkName = "SepoliaETH";
    const rpcUrl = process.env.INFURA_API_KEY;

    try {
        await ethereum.request({
            method: "wallet_addEthereumChain",
            params:[
                {
                    chainId: "0xaa36a7",
                    chainName: networkName,
                    nativeCurrency: {
                        name: "SepoliaEth",
                        symbol: "SETH",
                        decimals: 18
                    },
                    rpcUrl: [rpcUrl],
                    blockExplorerUrls: ["https://sepolia.etherscan.io/"]
                }
            ]
        })
    } catch (error) {
        // alert("Gagal mengatur jaringan")
    }
}

export const connectWeb3 = async () => {
    return new Promise(async(resolve, reject) => {
        if (window.ethereum) {
            try {
                await setSepoliaNetwork();
                await window.ethereum.request({ method: "eth_requestAccounts" });
                web3 = new Web3(window.ethereum);
                resolve(web3);
            } catch (error) {
                console.log(error);
                reject(error)
            }
        }else{
            reject(new Error("Metamask Tidak Tersedia"))
        }
    })
}

export const getWeb3 = () => {
    if (!web3) {
        throw new Error("Web3 belum terhubung. Silakan hubungkan MetaMask terlebih dahulu.");
    }
    return web3;
};

export { web3 }