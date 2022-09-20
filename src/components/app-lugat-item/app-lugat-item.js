import './app-lugat-item.css';

const AppLugatItem = ({uzbek, arabic}) => {
    return (
        <div className="app-lugat-item">
            <li class="container">
                     <div class="col-sm">
                        <ul>{uzbek} - {arabic}</ul> 
                    </div>
            </li>
        </div>
    )
}

export default AppLugatItem;