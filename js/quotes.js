const quotes = [
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Despite the forecast, live like it’s spring.",
        author: "Lilly Pulitzer",
    },
    {
        quote: "The way to love anything is to realize that it might be lost.",
        author: "G.K. Chesterton",
    },
    {
        quote: "The supreme happiness in life is the conviction that we are loved.",
        author: "Victor Hugo",
    },
    {
        quote: "Dinosaurs are awesome!",
        author: "S.M.Ryu",
    },
    {
        quote: "The course of true love never did run smooth.",
        author: "William Shakespeare",
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value.",
        author: "Albert Einstein",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller",
    },
    {
        quote: "If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse.",
        author: "Jim Rohn",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;