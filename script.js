var quotes = [
  "Success isn't about being the best. It's about always getting better.",
  "Life must have ups and downs.",
  "You Must pursue what you like."
];

function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById('quote').innerHTML = '"' + randomQuote() + '"';
