import AppLugatItem from '../app-lugat-item/app-lugat-item';
import './app-lugat.css';

const AppLugat = ({data}) => {
    const elements = data.item.map(item => {
        const {id, ...itemProps} = item;
        return(
            <AppLugatItem key={id} {...itemProps}/>
        )
    });

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