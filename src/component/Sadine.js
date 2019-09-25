import React, { Component } from 'react';
import '../style/sadine.css'
import {Link} from 'react-router-dom'
class Sadine extends Component{
    render(){
        return(
            <div
                className='Sardine'
                style={{
                backgroundImage:
                "url(https://media.giphy.com/media/tVk4w6EZ7eGNq/giphy.gif)"
                         }}>
                <div className='flex-item'>
                         <div style={{textAlign:'center'}}>
                         <h1 style={{color:'white'}}>Don't eat Sadine</h1><br/>
                         <h1><Link to='/' style={{textDecoration:'none',color:'white'}}activeClassName='chosen'>Click here to go back</Link></h1>
                        </div>
                </div>
            </div>
            
                );

    
        }
}
export default Sadine;