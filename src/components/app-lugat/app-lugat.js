import AppLugatItem from '../app-lugat-item/app-lugat-item';
import './app-lugat.css';

const AppLugat = ({data, onDelete, onToggleSelect}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return(
            <AppLugatItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleSelect={() => onToggleSelect(id)}/>
        )
    })

    return (
        <div className="app-lugat">
            <h3>Луғатлар</h3>
            <ul className="app-list list-group">
                {elements}

            </ul>
        </div>
    )
}

export default AppLugat;