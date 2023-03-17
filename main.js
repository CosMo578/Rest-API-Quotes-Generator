/*  Code By Raphael */
let quoteButton = document.getElementById('button'),
  quoteContent = document.getElementById('quote'),
  quoteAuthor = document.getElementById('author'),
  quoteTags = document.getElementById('tag');

function generateQuote() {
  fetch('https://api.quotable.io/random')
    .then((response) => { return response.json() })
    .then((data) => {
      quoteTags.innerText = data.tags;
      quoteContent.textContent = data.content;
      quoteAuthor.textContent = `--${data.author}`;
    })
    .catch((err) => { console.warn(err) });
};

quoteButton.addEventListener('click', () => {
  generateQuote();
});