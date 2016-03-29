var App = React.createClass({
    
    render: function() {
        return (
            <div id="application">
                <Header/>
                <WeatherPanel date="Tuesday 3/29" sunrise="08:00" sunset="17:00" moonrise="09:00" moonset="18:00" />
            </div>
        );
    }
});