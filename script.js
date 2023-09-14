const nextBtn = document.querySelector(".flex .next-quote");

function getRandomColor() {
  let minimum = 50;
  return Math.random() * (255 - minimum) + minimum;
}
function showQuote(data) {
  const quote = data[Math.floor(Math.random() * data.length - 1)];
  document.querySelector(".quote-text").textContent = quote.text;
  document.querySelector(".quote .author").textContent = `-${quote.author}`;
  const color = `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
  document.body.style.background = color;
  document.querySelector(".next-quote").style.background = color;
  document.querySelector(".fa-quote-left").style.color = color;
  document.querySelector(".quote-text").style.color = color;
  document.querySelector(".author").style.color = color;
  document.querySelector(".fa-twitter").style.color = color;
}
async function fetchQuote() {
  try {
    const response = await fetch("./db/data.json");
    if (!response.ok) {
      throw new Error(`Fetch failed with status: ${response.status}`);
    }
    const data = await response.json();
    showQuote(data);
  } catch (err) {
    console.error(err);
  }
}
fetchQuote();
nextBtn.addEventListener("click", fetchQuote);

const twitterBtn = document.querySelector('.fa-twitter')
twitterBtn.addEventListener('click', () => {
  let quote = document.querySelector(".quote-text").textContent;
  // console.log(quote);
  window.location.href = `https://twitter.com/intent/tweet?text=${quote}`
})