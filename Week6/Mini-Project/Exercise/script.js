const quotes = [
  {
    id: 0,
    author: "Albert Einstein",
    quote: "Strive not to be a success, but rather to be of value.",
    likes: 0
  },
  {
    id: 1,
    author: "Steve Jobs",
    quote: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    likes: 0
  },
  {
    id: 2,
    author: "Maya Angelou",
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    likes: 0
  },
  {
    id: 3,
    author: "Nelson Mandela",
    quote: "Education is the most powerful weapon which you can use to change the world.",
    likes: 0
  }
  
];

let currentQuoteIndex = null;

function generateRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  while (randomIndex === currentQuoteIndex) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }
  currentQuoteIndex = randomIndex;
  displayQuote();
}

function displayQuote() {
  const quoteElement = document.getElementById("quote");
  const likeCountElement = document.getElementById("likeCount");
  const quote = quotes[currentQuoteIndex];

  quoteElement.textContent = `"${quote.quote}" - ${quote.author}`;
  likeCountElement.textContent = `Likes: ${quote.likes}`;
}

function likeQuote() {
  const quote = quotes[currentQuoteIndex];
  quote.likes++;
  displayQuote();
}

function addQuote(event) {
  event.preventDefault();
  const quoteInput = document.getElementById("quoteInput");
  const authorInput = document.getElementById("authorInput");

  if (quoteInput.value.trim() !== "" && authorInput.value.trim() !== "") {
    const newQuote = {
      id: quotes.length,
      author: authorInput.value.trim(),
      quote: quoteInput.value.trim(),
      likes: 0
    };
    quotes.push(newQuote);
    quoteInput.value = "";
    authorInput.value = "";
    console.log("New quote added:", newQuote);
  } else {
    console.log("Please fill in both fields.");
  }
}

function filterQuotes() {
  const authorFilterInput = document.getElementById("authorFilterInput");
  const filteredQuotes = quotes.filter(quote =>
    quote.author.toLowerCase().includes(authorFilterInput.value.toLowerCase())
  );
  if (filteredQuotes.length > 0) {
    currentQuoteIndex = 0;
    displayQuote();
  } else {
    currentQuoteIndex = null;
    document.getElementById("quote").textContent = "No quotes found for this author.";
  }
}

function navigateToPreviousQuote() {
  if (currentQuoteIndex !== null) {
    currentQuoteIndex--;
    if (currentQuoteIndex < 0) {
      currentQuoteIndex = quotes.length - 1;
    }
    displayQuote();
  }
}

function navigateToNextQuote() {
  if (currentQuoteIndex !== null) {
    currentQuoteIndex++;
    if (currentQuoteIndex >= quotes.length) {
      currentQuoteIndex = 0;
    }
    displayQuote();
  }
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateRandomQuote);

const likeBtn = document.getElementById("likeBtn");
likeBtn.addEventListener("click", likeQuote);

const addQuoteForm = document.getElementById("addQuoteForm");
addQuoteForm.addEventListener("submit", addQuote);

const filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", filterQuotes);

const previousBtn = document.getElementById("previousBtn");
previousBtn.addEventListener("click", navigateToPreviousQuote);

const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", navigateToNextQuote);
