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
                    {lesson:'1', uzbek: 'китоб', arabic:'كِتَابٌ', id:1, select: false},
                    {lesson:'1', uzbek: 'сиёхдон', arabic:'مِحْبَرَةٌ', id:2, select: false},
                    {lesson:'1', uzbek: 'лавха', arabic:'لَوْحٌ', id:3, select: false},
                    {lesson:'1', uzbek: 'доска', arabic:'سَبُّورَةٌ', id:4, select: false}
            ]
        }
        this.maxId = 5;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)        
            }

        })
    }

    addItem = (lesson, uzbek, arabic) => {
        const newItem = {
            lesson,
            uzbek,
            arabic,
            id: this.maxId++,
            select: false
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleSelect = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, select: !old.select};
        })
    }

   render() {
        return(
            <div className="app">
                <AppInfo />
                <AppFilter/>
                <AppLugat 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}/>
                <AddForm onAdd={this.addItem}/>
            </div>
            ); 
        }
    }

export default App;