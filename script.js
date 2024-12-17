let currentUser = localStorage.getItem("currentUser");
const welcomeMessage = document.getElementById("welcomeMessage");

if (currentUser) {
  welcomeMessage.innerText = `Welcome, ${currentUser}!`;
} else {
  alert("No user loged in. Redirecting to Login.");
  window.location.href = "login.html";
}

function logout() {
  localStorage.removeItem("currentUser");
  alert("User logged out successfully");
  window.location.href = "login.html";
}

// --------------------------------------------------------------------

async function getWeather() {
  let city = document.getElementById("city").value;
  let APIKey = "f7f8d983867a6bcd56203e846a3b51bc";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

  let weatherDetails = document.getElementById("weather_details");

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      weatherDetails.innerHTML = `
        <h2 class='titles'>Weather in ${data.name} <i class='bx bxs-map'></i></h2>
        <p class='para'><i class="bi bi-thermometer-high"> </i> <strong> Temperature:</strong> ${data.main.temp}°C</p>
        <p class='para'><i class="bi bi-brightness-alt-high-fill"> </i> <strong> Weather:</strong> ${data.weather[0].description}</p>
        <p class='para'><i class="bi bi-moisture"> </i> <strong> Humidity:</strong> ${data.main.humidity}%</p>
        <p class='para'><i class="bi bi-wind"> </i> <strong> Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    } else {
      weatherDetails.innerHTML = `<p>City not found. Please enter a valid city name.</p>`;
    }
  } catch (error) {
    weatherDetails.innerHTML = `<p>There was an error fetching the data. Please try again later.</p>`;
  }
}
