import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SchoolDropDown extends Component {

    renderDropDown() {
        if(this.props.isSchoolHovered && this.props.isDropDownHovered) {

        }
    }
   
    render() {        
        return (
            this.props.isSchoolHovered && this.props.isDropDownHovered? 
            <div className="drop-down" onMouseOver={this.props.handleDropDownMouseOver} onMouseLeave={this.props.handleDropDownMouseOut}>
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
                : null
        ); 
        
    }
}

export default SchoolDropDown;