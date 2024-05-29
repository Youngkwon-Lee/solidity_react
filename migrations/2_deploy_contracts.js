    const Tether = artifact.require('Tether')
    const RWD = artifact.require('RWD')
    const DecentralBank = artifact.require('DecentralBank')


module.exports = async function(deployer, network, accouts) {
    await deployer.deploy(Tether)
    const tether = await tether.deployed()

    await deployer.deploy(RWD)
    const rwd = await RWD.deployed()

    await deployer.deploy(DecentralBank, rwd.address, tether.address)
    const decentralBank = await decentralBank.deployed()

    await rwd.transfer(DecentralBank.address, '1000000000000000000')

    await tether.transfer(accounts[1], '1000000000000000000')



};