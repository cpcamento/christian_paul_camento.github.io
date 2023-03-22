import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Data extends Component{
    
    render() {
        return (
            <div>
                This is Data
                <Link to="/">Back</Link>
            </div>
        )
    }
}
export default Data
