"use client"
import { useEffect, useState } from "react";
import { getContributors } from "../utils/contract";

const Page = () => {
    const [contributions, setContributions] = useState({})

    useEffect(() => {
        const fetchContributions = async () => {
            const contributions = await getContributors();
            setContributions(contributions)
        };

        fetchContributions()
    }, [])

    return (
        <div className="mx-11 mt-8">
            <h2 className="font-semibold text-lg">Contributors History</h2>
        </div>
    );
};

export default Page;
