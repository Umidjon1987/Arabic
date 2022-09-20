import './app-info.css';

const AppInfo = ({data}) => {
    return (
        <div className="app-info">
            <h1>Мабдаул қироат </h1>
            <h2>{data.lesson}-дарс</h2>
        </div>
    )
}

export default AppInfo;