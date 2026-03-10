var quote = [
    "I love TV. SAY IT.",
    "A LITTLE MUSIC!!!",
    "You love TV... don't you?",
    "I'm irrelevant... I'm junk...",
    "IT'S! T.V! TIME!",
    "I'M A SALESMAN , I WAS NEVER IN IT FOR THE MONEY!!!",
    "Want to buy a bagel? Only $80.",
    "THAT'S RIGHT!! NOW'S YOUR CHANCE TO BE A [[BIG SHOT]]!!",
    "YOU WANT [[Hyperlink Blocked]], DON'T YOU.",
    "[[Hyperlink blocked.]]",
    "PRIME TIME OF YOUR LIFE..!"
]

var sel = quote[Math.floor(Math.random() * quote.length)];
console.log('Randomly selected quote is: "' + sel + '"');
document.getElementById("random-quote").innerHTML = '<p>' + '"' + sel + '"' + '</p>';
