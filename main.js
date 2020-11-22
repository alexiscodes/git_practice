//Generate an Array of messages
const messages = ["You can do it", 'This is a test', "Don't ask me", 'Perhaps, yes', "A whole lotta love"]

//Randomly select a message and show to the user
const randomSelect = (array) => {
    const randomNumber = Math.floor(Math.random()*array.length)
    console.log(messages[randomNumber])
}

randomSelect(messages);