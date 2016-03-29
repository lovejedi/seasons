var WeatherPanel = React.createClass({

    render: function() {
        return (
            <div className="weather-panel">
            <div className="panel panel-primary">
                <div className="panel-heading">Sun</div>
                <div className="panel-body">{ Date() }</div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Sunrise</th>
                            <td>00:00</td>
                        </tr>
                        <tr>
                            <th>Sunset</th>
                            <td>00:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="panel panel-primary">
                <div className="panel-heading">Moon</div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Moonrise</th>
                            <td>00:00</td>
                        </tr>
                        <tr>
                            <th>Moonset</th>
                            <td>00:00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
});