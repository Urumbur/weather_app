import React from 'react';
import '../styles/Result.css';

const Result = (props) => {

    const {city, sunrise, sunset, temp, feelTemp, tempMin, tempMax, wind, pressure, humidity, clouds, error} = props.state;

    let content = null;

    if(!error && city) {
        // change display data
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        const windFormat = (wind * 3.6).toFixed();
        const tempFormat = Math.floor(temp);
        const feelTempFormat = Math.floor(feelTemp);
        const tempMinFormat = Math.floor(tempMin);
        const tempMaxFormat = Math.floor(tempMax);
        
        content = (
            <div>
                <h2 className="city">{city}</h2>
                <ul>
                    <li>Temperatura: {tempFormat}&deg;C</li>
                    <li>{tempMaxFormat}&deg;C / {tempMinFormat}&deg;C odczuwalna: {feelTempFormat}&deg;C</li>
                    <li>Ciśnienie: {pressure} hPa</li>
                    <li>Wiatr: {windFormat} km/h</li>
                    <li>Wilgotność: {humidity} %</li>                    
                    <li>Zachmurzenie: {clouds} %</li>
                    <li>Wschód: {sunriseTime}</li>
                    <li>Zachód: {sunsetTime}</li>
                </ul>
            </div>
        );
    }


    return (
        <div className="result">
            {error ? <span className="failed">Nie ma w bazie miasta: <strong>{city}</strong></span> : content}
        </div>
    );
}

export default Result;