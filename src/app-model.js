export async function fetchWeather(location) {
  const url = new URL(
    `VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}/today`,
    'https://weather.visualcrossing.com',
  );
  url.searchParams.set('unitGroup', 'metric');
  url.searchParams.set('include', 'current');

  try {
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
  } catch (err) {
    console.error(err);
  }
}
