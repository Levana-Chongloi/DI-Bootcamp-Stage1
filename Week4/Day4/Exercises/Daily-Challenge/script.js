document.addEventListener("DOMContentLoaded", function () {
    const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    const listPlanets = document.querySelector(".listPlanets");

    planets.forEach(function (planet) {
        const planetDiv = document.createElement("div");
        planetDiv.className = "planet " + planet.toLowerCase();
        planetDiv.textContent = planet;
        listPlanets.appendChild(planetDiv);
    });
});
