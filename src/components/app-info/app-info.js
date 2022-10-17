import './app-info.css';

const AppInfo = ({lugats, selects}) => {
    return (
        <div className="app-info">
            <h1>Мабдаул қироат </h1>
            <h2>-дарс</h2>
            <h3>Лугатлар - {lugats} та</h3>
            <h4>Танланганлар - {selects} та</h4>
        </div>
    )
}

export default AppInfo;