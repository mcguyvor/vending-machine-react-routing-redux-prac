 import React, { Component } from 'react';
 import '../style/chip.css'
 import {connect} from 'react-redux'
 import {numberEater} from '../action/index'
 import {Link} from 'react-router-dom'
class Chip extends Component{
    renderNum(arr){
       return(arr.map(idx=> <h2>{idx.numberOfBag}</h2>)
       )
    }
    render(){
        return(
            <div className='chip'>
                <div className='box-message'>
                    <h2>Bag eaten :{this.renderNum(this.props.numberBag)}</h2>
                    <button onClick={this.props.numberEater}>Eat Eat </button>
                    
                        <h2><Link to='/' style={{textDecoration:'none',color:'white'}} activeClassName='chosen'>Click here to go back</Link></h2>
                        
                    
                </div>
            </div>
        );
    }
}
function mapStatetoProps ({numberBag}){
    console.log({numberBag})
    return({
        numberBag : numberBag
    })
}

export default connect(mapStatetoProps,{numberEater})(Chip);