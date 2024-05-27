import { connectWeb3 } from "@/app/utils/web3";
import Web3 from "web3";
import contractABI from "../../contracts/Crowdfunding.json"

export const getConnectedAccount = async () => {
    try {
        const web3Instance = await connectWeb3();
        const accounts = await web3Instance.eth.getAccounts();
        if (accounts.length > 0) {
            return accounts[0];
        }
        throw new Error("No accounts found");
    } catch (error) {
        console.error("Error getting connected account", error);
        throw error;
    }
};

export const getTokenBalance = async (account, contractAbi, contractAddress) => {
    try {
        const web3Instance = await connectWeb3();
        const contract = new web3Instance.eth.Contract(contractAbi, contractAddress);
        const balance = await contract.methods.balanceOf(account).call();
        return Number(balance);
    } catch (error) {
        console.error("Error getting token balance", error);
        throw error;
    }
};

export const createContractInstance = async() => {
    try {
        const web3 = await connectWeb3();

        const contract = new web3.eth.Contract(
            contractABI.abi,
            "0xE50E8b9c3c0922fC9AB58b95d043d41c39682174"
        );
        return contract
    } catch (error) {
        console.log(error);
        return null;
    }
}