import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppLugat from '../app-lugat/app-lugat';
import AppFilter from '../app-filter/app-filter';
import AddForm from '../app-add-form/app-add-form';
import AppSearch from '../app-search/app-search';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {lesson:'1', uzbek: 'китоб', arabic:'كِتَابٌ', id:1, select: true},
                    {lesson:'1', uzbek: 'сиёхдон', arabic:'مِحْبَرَةٌ', id:2, select: false},
                    {lesson:'2', uzbek: 'лавха', arabic:'لَوْحٌ', id:3, select: true},
                    {lesson:'2', uzbek: 'доска', arabic:'سَبُّورَةٌ', id:4, select: false}
            ],
            term: '',
            filter: '0'
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
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, select:!item.select}
                }
                return item;
            })
        }))
    }

    searchLugat = (items, term) => {
        if(term.length ===0) {
            return items;
        }

        return items.filter(item => {
            return item.uzbek.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        if (filter == 0) {
            return items
        } else { 
            return items.filter(item => item.lesson === filter)
        };
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    } 

   render() {
        const {data, term, filter} = this.state;
        const lugats = this.state.data.length;
        const selects = this.state.data.filter(item => item.select).length;
        const visibleData = this.filterPost(this.searchLugat(data, term), filter);
        return(
            <div className="app">
                <AppInfo 
                    lugats={lugats}
                    selects={selects}/>
                <AppSearch 
                    onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter
                    filter={filter} 
                    onFilterSelect={this.onFilterSelect}/>
                <AppLugat 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleSelect={this.onToggleSelect}
                    onToggleRise={this.onToggleRise}/>
                <AddForm onAdd={this.addItem}/>
            </div>
            ); 
        }
    }

export default App;