export async function fetchWeather(location) {
  const url = new URL(
    `VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/today`,
    'https://weather.visualcrossing.com',
  );
  url.searchParams.set('unitGroup', 'metric');
  url.searchParams.set('include', 'current');

  const response = await fetch(url);
  console.log(response);
  if (!response.ok) {
    throw new Error(
      `Response status: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();
  console.log(data);
  return data;
}

export function processWeather(data) {
  const {conditions, icon, temp, feelslike, humidity, windspeed, precipprob} =
    data.currentConditions;
  return {conditions, icon, temp, feelslike, humidity, windspeed, precipprob};
}
