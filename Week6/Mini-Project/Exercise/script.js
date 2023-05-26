// Array of quotes
var quotes = [
    {
      id: 0,
      author: "Author 1",
      quote: "Quote 1",
      likes: 0
    },
    {
      id: 1,
      author: "Author 2",
      quote: "Quote 2",
      likes: 0
    },
    {
      id: 2,
      author: "Author 3",
      quote: "Quote 3",
      likes: 0
    },
    // Add more quotes as needed
  ];
  
  var currentQuote = null;
  var filteredQuotes = [];
  var filteredIndex = -1;
  
  // Function to generate a random quote
  function generateQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quote = quotes[randomIndex];
    
    // Check if the generated quote is the same as the current quote
    if (quote === currentQuote) {
      // If same, recursively call the function again to generate a new quote
      generateQuote();
      return;
    }
    
    // Update the DOM with the generated quote
    var quoteTextElement = document.getElementById('quote-text');
    var quoteAuthorElement = document.getElementById('quote-author');
    
    quoteTextElement.textContent = quote.quote;
    quoteAuthorElement.textContent = '- ' + quote.author;
    
    // Update the current quote
    currentQuote = quote;
  }
  
  // Function to add a new quote
  function addQuote(event) {
    event.preventDefault();
    
    var quoteInput = document.getElementById('quote-input');
    var authorInput = document.getElementById('author-input');
    
    var newQuote = {
      id: quotes.length,
      author: authorInput.value,
      quote: quoteInput.value,
      likes: 0
    };
    
    quotes.push(newQuote);
    
    // Reset the form inputs
    quoteInput.value = '';
    authorInput.value = '';
    
    // Log the updated quotes array
    console.log(quotes);
  }
  
  // Function to calculate character count
  function getCharacterCount(withSpace) {
    var quoteText = currentQuote.quote;
    
    if (withSpace) {
      return quoteText.length;
    } else {
      // Remove spaces from the quote text
      var quoteTextWithoutSpace = quoteText.replace(/\s/g, '');
      return quoteTextWithoutSpace.length;
    }
  }
  
  // Function to calculate word count
  function getWordCount() {
    var quoteText = currentQuote.quote;
    
    // Split the quote text by spaces to get an array of words
    var words = quoteText.split(' ');
    
    // Remove any empty words from the array
    var filteredWords = words.filter(function(word) {
      return word !== '';
    });
    
    return filteredWords.length;
  }
  
  // Function to handle liking a quote
  function likeQuote() {
    currentQuote.likes++;
    console.log(currentQuote);
  }
  
  // Function to filter quotes by author
  function filterQuotes(event) {
    event.preventDefault();
    
    var authorInput = document.getElementById('author-input');
    var authorName = authorInput.value.trim();
    
    if (authorName === '') {
      filteredQuotes = [];
    } else {
      filteredQuotes = quotes.filter(function(quote) {
        return quote.author.toLowerCase() === authorName.toLowerCase();
      });
    }
    
    filteredIndex = -1;
    displayFilteredQuote();
  }
  
  // Function to display filtered quote
  function displayFilteredQuote() {
    var quoteTextElement = document.getElementById('quote-text');
    var quoteAuthorElement = document.getElementById('quote-author');
    
    if (filteredQuotes.length === 0 || filteredIndex === -1) {
      quoteTextElement.textContent = '';
      quoteAuthorElement.textContent = '';
    } else {
      var quote = filteredQuotes[filteredIndex];
      quoteTextElement.textContent = quote.quote;
      quoteAuthorElement.textContent = '- ' + quote.author;
    }
  }
  
  // Function to display previous quote
  function showPreviousQuote() {
    if (filteredIndex > 0) {
      filteredIndex--;
      displayFilteredQuote();
    }
  }
  
  // Function to display next quote
  function showNextQuote() {
    if (filteredIndex < filteredQuotes.length - 1) {
      filteredIndex++;
      displayFilteredQuote();
    }
  }
  
  // Attach event listener to the add quote form submit event
  var addQuoteForm = document.getElementById('add-quote-form');
  addQuoteForm.addEventListener('submit', addQuote);
  
  // Attach event listener to the filter form submit event
  var filterForm = document.getElementById('filter-form');
  filterForm.addEventListener('submit', filterQuotes);
  
  // Attach click event listener to the buttons
  var generateBtn = document.getElementById('generate-btn');
  generateBtn.addEventListener('click', generateQuote);
  
  var charCountBtn = document.getElementById('char-count-btn');
  charCountBtn.addEventListener('click', function() {
    var charCount = getCharacterCount(true);
    console.log('Character Count (with space):', charCount);
  });
  
  var charCountNoSpaceBtn = document.getElementById('char-count-no-space-btn');
  charCountNoSpaceBtn.addEventListener('click', function() {
    var charCountNoSpace = getCharacterCount(false);
    console.log('Character Count (without space):', charCountNoSpace);
  });
  
  var wordCountBtn = document.getElementById('word-count-btn');
  wordCountBtn.addEventListener('click', function() {
    var wordCount = getWordCount();
    console.log('Word Count:', wordCount);
  });
  
  var likeBtn = document.getElementById('like-btn');
  likeBtn.addEventListener('click', likeQuote);
  
  var prevBtn = document.getElementById('prev-btn');
  prevBtn.addEventListener('click', showPreviousQuote);
  
  var nextBtn = document.getElementById('next-btn');
  nextBtn.addEventListener('click', showNextQuote);
  
  // Initial quote generation on page load
  generateQuote();
  