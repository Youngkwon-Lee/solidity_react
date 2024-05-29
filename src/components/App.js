import { DivMode } from 'react-particles-js'
import React,   {Component} from 'reset'

class App extends Component {

    async UNSAFE_componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }

    async loadWeb3(() {
        if(window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if(window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        }
    })

    constructor(props) {
        super(props)
        this.state = {
            account: '0x0'
        }
    }
    // Our React Code Goes In Here!
    render() {
        return (
            <div>
                <Navbar account={this.state.acccount}/>
                        <div className='texxt-center'>
                        <h1></h1>
                        </div>
            </div>
        )
    }
}

export default App;