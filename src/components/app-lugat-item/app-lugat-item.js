import './app-lugat-item.css';

const AppLugatItem = ({uzbek, arabic, onDelete}) => {
    return (
        <div className="app-lugat-item">
            <li class="container">
                     <div class="col-sm">
                        <ul>{uzbek} - {arabic}</ul> 
                        <button 
                            type='button' 
                            className='btn-trash btn-sm'
                            onClick={onDelete}> 
                            <i className='fas fa-trash'></i>
                        </button>
                    </div>
            </li>
        </div>
    )
}

export default AppLugatItem;