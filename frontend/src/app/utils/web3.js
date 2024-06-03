// import{ useWeb }
import Web3  from "web3"
let web3;
const setInfuraSepoliaNetwork = async () => {
    const networkName = "Sepolia Sturan Network"; // Nama jaringan yang ingin diatur
    const rpcUrl = process.env.INFURA_API_KEY; // RPC URL Infura Sepolia
  
    try {
      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: "0xaa36a7", // ID jaringan, gunakan ID yang sesuai
            chainName: networkName,
            nativeCurrency: {
              name: "SepoliaETH", // Nama mata uang jaringan
              symbol: "SETH", // Simbol mata uang jaringan
              decimals: 18,
            },
            rpcUrls: [rpcUrl],
            blockExplorerUrls: ["https://sepolia.etherscan.io/"], // URL explorer block jaringan
          },
        ],
      });
    } catch (error) {
    //   console.error("Gagal mengatur jaringan di Metamask:", error);
    }
  };
export const connectWeb3 = async () => {
    return new Promise(async (resolve, reject) => {
      if (window.ethereum) {
        try {
          await setInfuraSepoliaNetwork();
          await window.ethereum.request({ method: "eth_requestAccounts" });
          web3 = new Web3(window.ethereum);
          resolve(web3);
        } catch (error) {
          console.log(error);
          reject(error);
        }
      } else {
        reject(new Error("Mohon gunakan dompet MetaMask untuk terhubung."));
      }
    });
  };

export const getWeb3 = () => {
    if (!web3) {
        throw new Error("Web3 belum terhubung. Silakan hubungkan MetaMask terlebih dahulu.");
    }
    return web3;
};

export { web3 }