import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData =[
        {name: '0', label: 'Хамма дарслар', colored: false},
        {name: '1', label: '1-дарс', colored: true},
        {name: '2', label: '2-дарс', colored: false}
    ];

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-dark';
        const style = colored ? {color: 'red'} : null;
        return (
            <buttton type="button"
                     className={`btn ${clazz}`}
                     key={name}
                     onClick={() => props.onFilterSelect(name)}
                     style={style}>
                     {label}        
            </buttton>
        )
    })

    return(
        <div className="btn-group">
            {buttons}
        </div>

    );
}

export default AppFilter;