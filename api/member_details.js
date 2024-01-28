import fetch from "node-fetch";

fetch(
  "https://script.google.com/macros/s/AKfycbwsIYmcpnpEYIS-8rHNrNxsneZCm43oUjUOIggp1P0/dev"
)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
