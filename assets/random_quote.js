var quote = [
    "I love TV. SAY IT.",
    "A LITTLE MUSIC!!!",
    "You love TV... don't you?",
    "I'm irrelevant... I'm junk...",
    "IT'S! T.V TIME!",
    "ARE YOU THERE? ARE WE CONNECTED?",
    "I'M A SALESMAN , I WAS NEVER IN IT FOR THE MONEY!!!",
    "Want to buy a bagel? Only $80.",
]

var sel = quote[Math.floor(Math.random() * quote.length)];
console.log('quote randomly selected "' + sel + '"');
document.getElementById("random-quote").innerHTML = '<p>' + '"' + sel + '"' + '</p>';
