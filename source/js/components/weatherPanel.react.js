var WeatherPanel = React.createClass({

    render: function() {
        return (
            <div className="weather-panel">
                <h2 className="date">{this.props.date}</h2>
                <div className="panel panel-primary">
                    <div className="panel-heading">Sun</div>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Sunrise</th>
                                <td>{this.props.sunrise}</td>
                            </tr>
                            <tr>
                                <th>Sunset</th>
                                <td>{this.props.sunset}</td>
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
                                <td>{this.props.moonrise}</td>
                            </tr>
                            <tr>
                                <th>Moonset</th>
                                <td>{this.props.moonset}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
});