const statusEl = document.getElementById("status");
const todayCard = document.getElementById("today-card");
const tomorrowCard = document.getElementById("tomorrow-card");

document.getElementById("use-select").addEventListener("click", () => {
    const sel = document.getElementById("location-select");
    const opt = sel.options[sel.selectedIndex];
    if (!opt.value) {
        showError("Please select a location first.");
        return;
    }
    const lat = opt.dataset.lat;
    const lng = opt.dataset.lng;
    fetchData(lat, lng);
});

document.getElementById("manual-submit").addEventListener("click", () => {
    const lat = document.getElementById("lat").value;
    const lng = document.getElementById("lng").value;

    if (!lat || !lng) {
        showError("Latitude and Longitude are mandatory.");
        return;
    }
    fetchData(lat, lng);
});

function showError(msg) {
    statusEl.innerHTML = `<span class="error">${msg}</span>`;
}

async function fetchData(lat, lng) {
    statusEl.textContent = "Loading…";

    try {
        const url = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&timezone=auto&date=today`;
        const urlTomorrow = `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&timezone=auto&date=tomorrow`;

        const [todayRes, tomorrowRes] = await Promise.all([
            fetch(url),
            fetch(urlTomorrow)
        ]);

        const todayJson = await todayRes.json();
        const tomorrowJson = await tomorrowRes.json();

        if (todayJson.status !== "OK") {
            showError("API Error (Today): " + todayJson.status);
            return;
        }

        if (tomorrowJson.status !== "OK") {
            showError("API Error (Tomorrow): " + tomorrowJson.status);
            return;
        }

        updateCard(todayCard, todayJson.results);
        updateCard(tomorrowCard, tomorrowJson.results);

        statusEl.textContent = `Showing results for ${lat}, ${lng} — Timezone: ${todayJson.results.timezone}`;
    } catch (err) {
        showError("Network Error: " + err.message);
    }
}

function updateCard(card, data) {
    card.innerHTML = `
        <h3>${card.id === "today-card" ? "Today" : "Tomorrow"}</h3>
        <div class="data-row"><span>Sunrise:</span><span>${data.sunrise}</span></div>
        <div class="data-row"><span>Sunset:</span><span>${data.sunset}</span></div>
        <div class="data-row"><span>Dawn:</span><span>${data.dawn}</span></div>
        <div class="data-row"><span>Dusk:</span><span>${data.dusk}</span></div>
        <div class="data-row"><span>Day Length:</span><span>${data.day_length}</span></div>
        <div class="data-row"><span>Solar Noon:</span><span>${data.solar_noon}</span></div>
        <div class="data-row"><span>Timezone:</span><span>${data.timezone}</span></div>
    `;
}
