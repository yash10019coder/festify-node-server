const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const ip = '127.0.0.1';

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

var eventSchema = mongoose.Schema({
    eventName: { type: String, default: 'equinox' },
    eventDate: { type: String, default: '19 Dec' },
    eventTime: { type: String, default: '12:30 PM' },
    eventLocation: { type: String, default: 'Lucknow' },
    eventDescription: { type: String, default: 'kldjf alskdfj lkasd jflksadflk aldksjflkdsjlfksdj' },
    eventImage: { type: String, default: 'kkkkk' }
});

app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.headers);
    res.send("hello world!");
})

app.post('/post', (req, res) => {
    res.send("post");
    var data = eventSchema({eventName: 'codeforces div 3',eventData: '19 Dec',eventTime: '12:30 PM',eventLocation: 'Lucknow',eventDescription: 'kldjf alskdfj lkasd jflksadflk aldksjflkdsjlfksdj',eventImage: 'kkkkk'});
    var eventSchema = mongoose.model('Event', eventSchema);
})
app.listen(port, ip, () => {
    console.log(`Server running at http://${ip}:${port}/`);
});
