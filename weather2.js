let request = require('request');

let apiKey = 'fed7fe32a3f5d94c3b2a3082e904a472';
let location = 'delhi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
if(err){
    console.log('error:', err);
} else {
    console.log('body:',JSON.parse(body));
}
});