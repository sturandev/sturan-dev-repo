import { walletConnect } from '@web3modal/wagmi'

import { sepolia } from "viem/chains";
import { createConfig } from "wagmi";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if(!projectId) throw Error("Project id is not defined");

const metadata = {
    name: 'web3modal',
    description: 'web3 modal',
    url: 'https://sturan-equity-crowdfunding.vercel.app/',
}

export const config = createConfig({
    chains: [sepolia],
    connectors: [
        walletConnect({ projectId, metadata, showQrModal: false }),
        injected({ shimDisconnect: true }),
      ]
})