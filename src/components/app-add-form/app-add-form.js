import { Component } from "react";
import './app-add-form.css';

class AddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            lesson: '',
            uzbek: '',
            arabic: ''

        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.lesson, this.state.uzbek, this.state.arabic);
        this.setState({
            lesson: '',
            uzbek: '',
            arabic: ''
        })
    }

    render() {
        const {lesson, uzbek, arabic} = this.state;
        return(
            <div className="app-add-form">
                <h4>Добавьте новое слово</h4>
                <form 
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        className="form-lesson"
                        name="lesson"
                        value={lesson}
                        onChange={this.onValueChange} />
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