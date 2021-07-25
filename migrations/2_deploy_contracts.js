const DexToken = artifacts.require("DexToken")
const DaiToken = artifacts.require("DaiToken")
const TokenFarm = artifacts.require("TokenFarm")

module.exports = async function(deployer, network, accounts) {
	// Deploy Mock DEX Token
	await deployer.deploy(DaiToken) 
	const daiToken = await DaiToken.deployed()

	// Deploy Dex Token
	await deployer.deploy(DexToken) 
	const dappToken = await DexToken.deployed()

	// Deploy TokenFarm
	await deployer.deploy(TokenFarm, dappToken.address, daiToken.address) 
	const tokenFarm = await TokenFarm.deployed()

	// Transfer all tokens to TokenFarm (1 million)
	await dappToken.transfer(tokenFarm.address, '1000000000000000000000000')

	// Transfer 100 Mock DEX tokens to investor
	await daiToken.transfer(accounts[1], '100000000000000000000')

}
