import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import Form from './Form';
import Result from './Result';

const APIKey = '059fc2bde23efaa5a72e210b4d5fe2cc';

const App = () => {

  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [temp, setTemp] = useState("");
  const [feelTemp, setFeelTemp] = useState("");
  const [tempMin, setTempMin] = useState("");
  const [tempMax, setTempMax] = useState("");
  const [wind, setWind] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  const [clouds, setClouds] = useState("");
  // const [icon, setIcon] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = e => {
    setValue(e.target.value);
  }  

  useEffect(() => {
    if(value.length === 0) return;
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKey}&units=metric`;  
    fetch(API)
    .then(res => {
      if (res.ok) {
        return res
      }
      throw Error()
    })
    .then(res => res.json())
    .then(data => {
      setError(false);
      setCity(value);
      setSunrise(data.sys.sunrise);
      setSunset(data.sys.sunset);
      setTemp(data.main.temp);
      setFeelTemp(data.main.feels_like);
      setTempMin(data.main.temp_min);
      setTempMax(data.main.temp_max);
      setWind(data.wind.speed);
      setPressure(data.main.pressure);
      setHumidity(data.main.humidity);
      setClouds(data.clouds.all);
      // setIcon(data.weather[0].icon);
    })
    .catch(err => {
      setError(true);
      setCity(value)
    })
  },[value])

  const state = {city, sunrise, sunset, temp, feelTemp, tempMin, tempMax, wind, pressure, humidity, clouds, error}

  return (
    <div className="wrapper">
      <h1>Aplikacja pogodowa</h1>
      <Form value={value} handleInputChange={handleInputChange} />
      <hr/>
      <Result state={state} />
    </div>
  );
}

export default App;