export const getWeather = async (lat, lng) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=88adc6c7d3daa4a8c57d2d903c3728dd`
  );
  const data = await response.json();
  return data;
};

function formatTime(date) {
  const format = new Date(date * 1000);
  const day = format.getDay();
  return day;
}

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    if (!acc[formatTime(key)]) {
      acc[formatTime(key)] = [];
    }
    acc[formatTime(key)].push(obj);
    return acc;
  }, {});
}

export const getWeatherDays = async (lat, lng) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=88adc6c7d3daa4a8c57d2d903c3728dd`
  );
  const data = await response.json();
  const grouped = await groupBy(data.list, "dt");
  return grouped;
};
