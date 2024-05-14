var rand
var rand2


var generateQuote=[{quote: "Be yourself; everyone else is already taken.", author: "--Oscar Wilde"},
                   {quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", author: "--Marilyn Monroe"},
                   {quote: "So many books, so little time.", author:"--Frank Zappa"},
                // {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein"},{quote:"It is better to be hated for what you are than to be loved for what you are not.",author:"Andre Gide"},{quote:"Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",author:"Steve Jobs"},{quote:"Live as if you were to die tomorrow. Learn as if you were to live forever.",author:"Mahatma Gandhi"},{quote:"Be the change that you wish to see in the world.",author:"Mahatma Gandhi"},{quote:"A room without books is like a body without a soul.",author:"Marcus Tullius Cicero"},{quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",author:"Bernard M. Baruch"},{quote:"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",author:"Dr. Seuss"},{quote:"You only live once, but if you do it right, once is enough.",author:"Mae West"},{quote:"In three words I can sum up everything I've learned about life: it goes on.",author:"Robert Frost"},{quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",author:"J.K. Rowling, Harry Potter and the Goblet of Fire"},{quote:"Don't walk in front of me… I may not follow.",author:"Albert Camus"},{quote:"If you tell the truth, you don't have to remember anything.",author:"Mark Twain"},{quote:"Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself",author:"C.S. Lewis, The Four Loves"},{quote:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",author:"Maya Angelou"},{quote:"A friend is someone who knows all about you and still loves you.",author:" Elbert Hubbard"}
            ];


function generatequote(){
    rand= Math.floor(Math.random() * generateQuote.length);
    if (rand2==rand){
        generatequote();
    }
    else{
    quoteOP =generateQuote[rand].quote;
    authorOP =generateQuote[rand].author;
    document.getElementById("quoteOutput").innerHTML=quoteOP;
    document.getElementById("authorOutput").innerHTML=authorOP;
    rand2=rand
    }
}



