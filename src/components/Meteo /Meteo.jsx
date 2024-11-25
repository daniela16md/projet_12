import React, { useState, useEffect } from 'react';
import './Meteo.css'; 

const Meteo = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Paris');
  const [loading, setLoading] = useState(true);
  const [isChangingCity, setIsChangingCity] = useState(false);
  const [cityInput, setCityInput] = useState(city);

  useEffect(() => {
    const apiKey = '06086b4077c71365c8a4f5391511de44';
    const fetchWeather = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        setWeather(data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données météo:', error);
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setCityInput(e.target.value);
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    setCity(cityInput);
    setIsChangingCity(false);
  };

  return (
    <div className="meteo-widget">
      {isChangingCity ? (
        <form onSubmit={handleCitySubmit} className="city-form">
          <input
            type="text"
            value={cityInput}
            onChange={handleCityChange}
            placeholder="Entrez une ville"
            className="city-input"
          />
          <button type="submit" className="city-button">Valider</button>
        </form>
      ) : (
        <>
          <div className="city-temp-wrapper">
            {loading ? (
              <p>Chargement...</p>
            ) : weather ? (
              <>
                <p className="city-name">{weather.name}</p>
                <p className="temp">{Math.round(weather.main.temp)}°C</p>
              </>
            ) : (
              <p>Impossible de charger les données météo</p>
            )}
          </div>

          <button onClick={() => setIsChangingCity(true)} className="change-city-button">
            Changer de ville
          </button>
        </>
      )}
    </div>
  );
};

export default Meteo;
