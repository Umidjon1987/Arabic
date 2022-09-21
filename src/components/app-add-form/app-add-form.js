import { Component } from "react";
import './app-add-form.css';

class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            uzbek: '',
            arabic: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    render() {
        const {uzbek, arabic} = this.state;
        return(
            <div className="app-add-form">
                <h4>Добавьте новое слово</h4>
                <form className="add-form d-flex">
                    <input 
                        type="text" 
                        className="form-uzbek"
                        name="uzbek"
                        value={uzbek}
                        onChange={this.onValueChange} />
                    <input 
                        type="text" 
                        className="form-arabic"
                        name="arabic"
                        value={arabic}
                        onChange={this.onValueChange} />
                    <button 
                        type="submit" 
                        className="btn btn-outline-dark">Добавить</button>
                </form>
            </div>
        )
    }
}

export default AddForm;