const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use('/js', express.static('js'));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));

app.use(cors())

const characters ={
    'michael':{
    'role': 'Manager',
    'birthName': 'Michael Scott',
    'quote': `Make friends first, make sales second, make love third. In no particular order.`
},
    'pam':{
    'role': 'Receptionist',
    'birthName': 'Pamela Beasley',
    'quote': `And I feel God in this Chili's tonight.`
},
   'jim':{
    'role': 'Salesperson',
    'birthName': 'Jim Halpert',
    'quote': `I mean I’ve always subscribed to the idea that if you really want to impress your boss, you go in there and you do mediocre work, halfheartedly.`
},
    'dwight':{
    'role': 'Salesperson',
    'birthName': 'Dwight Schrute',
    'quote': `Whenever I'm about to do something, I think 'Would an idiot do that?' And if they would, I do not do that thing.`
},
    'oscar':{
    'role': 'Accountant',
    'birthName': 'Toby Nobody Cares',
    'quote': `Look, it doesn’t take a genius to know that every organization thrives when it has two leaders. Go ahead, name a country that doesn’t have two presidents; a boat that sets sail without two captains. Where would Catholicism be without the popes?`
},
    'creed':{
    'role': 'Quality Assurance',
    'birthName': 'Creed Bratton',
    'quote': `I’ve been involved in a number of cults, both a leader and a follower. You have more fun as a follower, but you make more money as a leader.`
},
    'angela':{
    'role': 'Accountant',
    'birthName': 'Angela Martin',
    'quote': `If you pray hard enough, you can change yourself into a cat person.`
},
    'phyllis':{
    'role': 'salesperson',
    'birthName': 'Phyllis Lapin-Vance',
    'quote': `Close your mouth, sweetie. You look like a trout.`
},
    'stanley':{
    'role': 'salesperson',
    'birthName': 'Stanley Hudson',
    'quote': `Boy, have you lost your mind? Cause I’ll help you find it!`
},
    'kelly':{
    'role': 'Customer Service',
    'birthName': 'Kelly Kapoor',
    'quote': `I don’t talk trash, I talk smack. They’re totally different. Trash talk is hypothetical, like: Your mom is so fat she can eat the internet. But smack talk is happening like right now. Like: You’re ugly and I know it for a fact ’cause I got the evidence right there.`
},
    'ryan':{
    'role': 'fired guy',
    'birthName': 'Ryan Howard',
    'quote': `Um, also, little tip, never shake the baby.`
},
    'kevin':{
    'role': 'Accountant',
    'birthName': 'Kevin Malone',
    'quote': `I got six numbers. One more and it would have been a complete phone number.`
},
    'meredith':{
    'role': 'Supplier Relations',
    'birthName': 'Meredith Palmer',
    'quote': `You should stay. I have Vienna sausages...and napkins.`
},
    'toby':{
    'role': 'HR',
    'birthName': 'Toby Nobody Cares',
    'quote': `Toby.`
},
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterQuote', (request,response)=>{
   const charactersQuote = request.params.characterQuote.toLowerCase()
    if(characters[charactersQuote]){
        response.json(characters[charactersQuote])
    }else{
        response.json(characters['toby'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it.`)
}) 