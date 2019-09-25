import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import'../style/soda.css';
import sodaImg from '../img/Soda.png';
class Soda extends Component{
    render(){
        return(
            <div className='flex-container'>
                <div className='soda'>
                    <div className='soda-img'>
                        <img src={sodaImg}/>
                    </div>
                    <div className='message'>
                        <h3 style={{fontSize:'60px'}}>
                            Soda is not good for you 
                        </h3>
                        <h3 style={{fontSize:'60px',color:'white'}}>
                        <Link to='/' style={{textDecoration:'none',color:'white'}} activeClassName='chosen'> Go back</Link>
                        </h3>
                        
                    </div>
                    <div className='soda-img'>
                    <img src={sodaImg}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Soda;