import { createContractInstance } from "./contract";

export const fetchCrowdfundingData = async () => {
    try {
        const contract = await createContractInstance();
        const [name, description, goal, totalFunds, isGoalReached, isClosed] = await contract.methods.getDetails().call();

        return {
            name,
            description,
            goal: Number(goal),
            totalFunds: Number(totalFunds),
            isGoalReached,
            isClosed
        };
    } catch (error) {
        console.error("Error fetching crowdfunding data:", error);
        return null;
    }
}
