import './app-filter.css';

const AppFilter = () => {
    return(
        <div className="btn-group">
            <buttton 
                className="btn btn-outline-dark"
                type="button">
                    Хамма дарслар
            </buttton>
            <buttton 
                className="btn btn-outline-dark"
                type="button">
                    1-дарс
            </buttton>
            <buttton 
                className="btn btn-outline-dark"
                type="button">
                    2-дарс
            </buttton>
        </div>

    );
}

export default AppFilter;