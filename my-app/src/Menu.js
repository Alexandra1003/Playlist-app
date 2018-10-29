import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Tracks</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
            </div>
        )
    }
}

export default Menu;