import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getWeather, getWeatherDays } from "../../api";
import { Access, Loading } from "../../components/molecules";
import { CurrentWeather, Forecast, Header } from "../../components/organisms";

export default function Home() {
  const [weather, setWeather] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [confirm, setConfirm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [forecastLoading, setForecastLoading] = useState(true);
  const [forecast, setForecast] = useState();

  const successCallback = async (pos) => {
    let crd = pos.coords;
    setLatitude(crd.latitude.toString());
    setLongitude(crd.longitude.toString());
    setConfirm(true);
    setLoading(false);
  };

  const errorCallback = async (error) => {
    setConfirm(false);
    setLoading(false);
  };

  useEffect(() => {
    (async function () {
      if (confirm) {
        const weatherData = await getWeather(latitude, longitude);
        setWeather(weatherData);
        const forecastData = await getWeatherDays(latitude, longitude);
        setForecast(forecastData);
        setForecastLoading(false);
      }
    })();
  }, [confirm, latitude, longitude]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  return (
    <Container>
      <Header />
      {confirm ? (
        <Grid container>
          <CurrentWeather weather={weather} />
          {forecastLoading ? <Loading /> : <Forecast forecast={forecast} />}
        </Grid>
      ) : loading ? (
        <Loading />
      ) : (
        <Access />
      )}
    </Container>
  );
}
