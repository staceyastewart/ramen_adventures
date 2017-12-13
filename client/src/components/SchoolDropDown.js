import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SchoolDropDown extends Component {
   
    render() {        
        return (
            <div    className="drop-down">
                <Link to="/tokyo-school">
                    <div className="schools bottom-links" onClick={this.props.handleDropDownMouseOut}>
                        Tokyo Ramen School
                    </div>
                </Link>
                <Link to="/osaka-school">
                        <div className="schools bottom-links" onClick={this.props.handleDropDownMouseOut}>
                        Osaka Ramen School
                    </div>
                </Link>
            </div>
        ); 
        
    }
}

export default SchoolDropDown;