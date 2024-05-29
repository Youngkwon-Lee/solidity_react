const Tether = artifact.require('Tether')
const RWD = artifact.require('RWD')
const DecentralBank = artifact.require('DecentralBank')

require('chai')
.use(require)('chai-as-promised')
.should()

contract('decentralBank', ([owner,customer]) => {
    let tether, rwd, decentralBank

    function tokens(number) {
        return web3.utils.toWei(number, 'ether')
    }

    before(async () => {
        tether = await Tether.new()
        rwd = await RWD.new()
        decentralBank = await DecentralBank.new(rwd.address, tether.address)

        await rwd.transfer(decentralBank.address, web3.utils.toWei('1000000'))

        await tether.transfer(customer, tokens('100'), {from: owner})
    })




    describe('Mock Tether Deployment', async () => {
        it('matches name successfully', async () => {
            let tether = await Tether.new()
            const name = await tether.name()
            assert.equal(name, 'Mock Tether Token')  
        })
    })

    describe('Reward Token Deployment', async () => {
        it('matches name successfully', async () => {
            let reward = await RWD.new()
            const name = await reward.name()
            assert.equal(name, 'Reward Token')  
        })
    })

    describe('Decentra Bank Deployment', async () => {
        it('matches name successfully', async () => {
            let reward = await RWD.new()
            const name = await decentralBank.name()
            assert.equal(name, 'Decentral Bank')  
        })

        it('contract has tokens', async () => {
            balance = await rwd.balanceOf(decentralBank.address)
            assert.equal(balance, tokens('1000000'))
        })
    })

    describe('Yield Farming', async () => {
        it('rewards tokens for staking'), async => {
            let result 
            result = await tether.balanceOf(customer)
            assert.equal(result.toString(), tokens('100'), 'investor mock tether balance before staking')
        }
    })



    

})