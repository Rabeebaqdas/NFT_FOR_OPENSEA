const {ethers} = require("hardhat");

const cryptoBeetlesJSON = require("../artifacts/contracts/CryptoBeetles.sol/CryptoBeetles.json");

const main = async() => {
    const abi = cryptoBeetlesJSON.abi
    const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.RINKEBY_KEY)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY,provider)
    const signer = wallet.connect(provider)
    const cryptoBeetles = new ethers.Contract(process.env.CONTRACT_ADDRESS,abi,signer)
    await cryptoBeetles.mint("https://ipfs.io/ipfs/QmPcCEmEnBtJJCpd2tBLqMdTdhz3TPWz4UKBnLBvcEN35G")
    console.log("NFT Minted!");
}

main();