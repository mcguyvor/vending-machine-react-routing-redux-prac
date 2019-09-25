import React, { Component } from 'react';
import '../style/nav.css'
import {Link,NavLink} from 'react-router-dom'
class Nav extends Component{
    render(){
        return(
            <div className='nav'>
            <h3>
                <ul>
                    <li><NavLink style={{ textDecoration: 'none', color: 'white' }} to='/soda' activeClassName='chosen'><strong>Soda</strong></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none', color: 'white' }} to='/chip'   activeClassName='chosen'><strong>Chip</strong></NavLink></li>
                    <li><NavLink style={{ textDecoration: 'none', color: 'white' }} to='/sadine' activeClassName='chosen'><strong>Sadine</strong></NavLink></li>
                </ul>
            </h3>
            </div>
        );
    }
}
export default Nav;