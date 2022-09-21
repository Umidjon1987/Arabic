import AppInfo from '../app-info/app-info';
import AppLugat from '../app-lugat/app-lugat';
import AppFilter from '../app-filter/app-filter';
import AddForm from '../app-add-form/app-add-form';

import './app.css';

function App() {

    const data = [
        {lesson:'1', 'item':[
            {uzbek: 'китоб', arabic:'كِتَابٌ', id:1},
            {uzbek: 'сиёхдон', arabic:'مِحْبَرَةٌ', id:2},
            {uzbek: 'лавха', arabic:'لَوْحٌ', id:3},
            {uzbek: 'доска', arabic:'سَبُّورَةٌ', id:4}
        ]},
        {lesson:'2','item':[
            {uzbek: 'китоб2', arabic:'كِتَابٌ', id:5},
            {uzbek: 'сиёхдон2', arabic:'مِحْبَرَةٌ', id:6},
            {uzbek: 'лавха2', arabic:'لَوْحٌ', id:7},
            {uzbek: 'доска2', arabic:'سَبُّورَةٌ', id:8}
        ]},
    ];

    return(
        <div className="app">
            <AppInfo data={data[0]}/>
            <AppFilter/>
            <AppLugat data={data[0]}/>
            <AddForm/>
        </div>
    ); 
}

export default App;