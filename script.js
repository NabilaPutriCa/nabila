async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = "5f9e8e13c1cd80abe448805d937eec2e"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      const result = `
        <h2>${data.name}</h2>
        <p>${data.weather[0].description}</p>
        <p>🌡️ Suhu: ${data.main.temp}°C</p>
        <p>💧 Kelembapan: ${data.main.humidity}%</p>
      `;
      document.getElementById('weatherResult').innerHTML = result;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>Kota tidak ditemukan 😢</p>`;
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>Gagal mengambil data cuaca</p>`;
  }
}
