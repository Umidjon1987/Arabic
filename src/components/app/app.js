import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppLugat from '../app-lugat/app-lugat';
import AppFilter from '../app-filter/app-filter';
import AddForm from '../app-add-form/app-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {uzbek: 'китоб', arabic:'كِتَابٌ', id:1},
                    {uzbek: 'сиёхдон', arabic:'مِحْبَرَةٌ', id:2},
                    {uzbek: 'лавха', arabic:'لَوْحٌ', id:3},
                    {uzbek: 'доска', arabic:'سَبُّورَةٌ', id:4}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)        
            }

        })
    }

    render() {
        return(
            <div className="app">
                <AppInfo />
                <AppFilter/>
                <AppLugat 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <AddForm/>
            </div>
            ); 
        }
    }

export default App;