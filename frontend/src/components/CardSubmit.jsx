"use client"
import { X } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { getConnectedAccount, getTokenBalance } from "@/app/utils/contract";
import { fundCrowdfunding, approveToken } from "@/app/utils/fundCrowdfunding";
import contractJson from "../contracts/Xtr.json";
import Web3 from "web3";

const contractAbi = contractJson.abi;
const XTRAddress = "0xB2c86ccFBfbE235657a5d2556f2B3B1156A23283";

const CardSubmit = ({ onClose }) => {
    const [inputValue, setInputValue] = useState('');
    const [account, setAccount] = useState(null);
    const [XTRBalance, setXTRBalance] = useState(0);

    useEffect(() => {
        const initializeAccount = async () => {
            try {
                const connectedAccount = await getConnectedAccount();
                setAccount(connectedAccount);
            } catch (error) {
                console.error("Error initializing account", error);
            }
        };

        initializeAccount();
    }, []);

    const getUserInfo = async () => {
        try {
            if (!account) {
                const connectedAccount = await getConnectedAccount();
                setAccount(connectedAccount);
            }

            const balance = await getTokenBalance(account, contractAbi, XTRAddress);
            setXTRBalance(balance);
        } catch (error) {
            console.error("Error getting user info", error);
        }
    };

    const handleChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setInputValue(value);
        }
    };

    const handleSubmit = async () => {
        if (inputValue === '') {
          console.log('Input value is empty');
          return;
        }
      
        const contributionAmount = parseFloat(inputValue);
        const crowdfundingAddress = "0xE50E8b9c3c0922fC9AB58b95d043d41c39682174";

        const contributorAmountInWei = Web3.utils.toWei(contributionAmount.toString(), "ether")
      
        try {
            await approveToken(crowdfundingAddress, contributorAmountInWei)
          await fundCrowdfunding(contributionAmount);
          onClose()
        } catch (error) {
          console.error("Error submitting error:", error);
        }
      };
      

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                <div className="relative bg-color-primary max-w-sm rounded overflow-hidden shadow-lg bg-white backdrop-filter-none">
                    <button onClick={onClose} className="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white rounded-full px-2 py-1">
                        <X size={32} />
                    </button>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Enter your XTR Amount</div>
                        <button onClick={getUserInfo} className="p-1 hover:shadow-lg rounded-lg">See My balance </button>
                        <p className="text-gray-700 text-base">XTR Balance: {XTRBalance}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <input
                            type="number"
                            className="border-[2px] rounded-full border-opacity-20 border-color-gray p-1"
                            placeholder="Input Number"
                            value={inputValue}
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit} className="ml-3 p-2 bg-color-typography rounded-full font-semibold">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardSubmit;
