import { createContractInstance } from "./contract";
import { connectWeb3 } from "./web3";
import xtrContractJson from "../../contracts/Xtr.json";
const xtrAbi = xtrContractJson.abi;
const xtrAddress = "0xB2c86ccFBfbE235657a5d2556f2B3B1156A23283";

export const approveToken = async (crowdfundingAddress, amount) => {
   try {
     const web3 = await connectWeb3();
     const tokenContract = new web3.eth.Contract(xtrAbi, xtrAddress);
 
     const accounts = await web3.eth.getAccounts();
     const sender = accounts[0];
 
     await tokenContract.methods.approve(crowdfundingAddress, amount).send({
       from: sender,
     });
     console.log("Token approved for crowdfunding contract");
   } catch (error) {
     console.error("Error approving token:", error);
   }
 };

 export const fundCrowdfunding = async (amount) => {
   try {
     const web3 = await connectWeb3();
     const contract = await createContractInstance();
 
     const accounts = await web3.eth.getAccounts();
     const sender = accounts[0];
 
     const receipt = await contract.methods.fund(amount).send({
       from: sender,
     });
     console.log("Transaction receipt:", receipt);
     return receipt.transactionHash;
   } catch (error) {
     console.error("Error funding crowdfunding:", error);
     return null;
   }
 };
