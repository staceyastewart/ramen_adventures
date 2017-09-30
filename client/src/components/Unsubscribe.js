import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class Unsubscribe extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <form>
                    <p className="unsubscribe">Click here to unsubsribe</p>
                </form>
            </div>
            </ BrowserRouter>
        );
    }
}

export default Unsubscribe;