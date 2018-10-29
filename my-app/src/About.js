import React, { Component } from 'react';
import Menu from './Menu';

class About extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div>
                    This is an about page.
                </div>
            </div>
        )
    }
}

export default About;