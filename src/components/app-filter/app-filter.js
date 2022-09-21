import { Component } from 'react';

import './app-filter.css';

class AppFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lesson: ''
        }
    }

    render() {
        return(
            <div className="btn-group">
                <buttton 
                    className="btn btn-outline-dark"
                    type="button">
                        Хамма дарслар
                </buttton>
                <buttton 
                    className="btn btn-outline-dark"
                    type="button">
                        1-дарс
                </buttton>
                <buttton 
                    className="btn btn-outline-dark"
                    type="button">
                        2-дарс
                </buttton>
            </div>
    
        );
    }
}

export default AppFilter;