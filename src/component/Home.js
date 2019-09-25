import React, { Component } from 'react';
import Nav from './Nav';
import '../style/home.css'
import vendingMachineImg from '../img/VendingMachine.png'
import {Link} from 'react-router-dom'
class Home extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <div style={{backgroundImage:`url(${vendingMachineImg})`,height:'100vh',width:'100vw',backgroundSize:'cover'}}>
                    <div className='flex-container'>
                    <div className='home-message'>
                        <div className='message'>
                        <h1>This is vending machine, please select any product from this machine </h1>
                        </div>
                    </div>
                    <div className='home-option'>
                        <div className='option'>
                            <ul><h3>
                                <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/soda'activeClassName='chosen'>Soda</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/chip'activeClassName='chosen'>Chip</Link></li>
                                <li><Link style={{ textDecoration: 'none', color: 'white' }} to='/sadine'activeClassName='chosen'>Sadine</Link></li>
                                </h3>
                            </ul>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;