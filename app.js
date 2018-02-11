const https = require('https');

const options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/users/panjiggm',
    method: 'GET',
    headers: {
        'user-agent': 'nodejs'
    }
}
// TODO: [x] Read the data
let request = https.request(options, (response) => {
    let body = '';
    response.on('data', (data) => {
        body = body + data;
    })
    response.on('end', () => {
        // TODO: [x] Parse the data
        // Convert String to JSON
        let profile = JSON.parse(body)
        // TODO: [x] Print the data out
        console.log(`${profile.login} owns ${profile.public_repos} repo(s) and has ${profile.followers} follower(s)`);
    })
})

request.end();
request.on('error', (e) => {
    console.log(e);
})