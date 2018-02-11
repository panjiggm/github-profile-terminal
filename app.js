const profile = require('./profile.js');

let profiles = process.argv.slice(2);
profiles.map(user => {
    return profile.get(user);
})

