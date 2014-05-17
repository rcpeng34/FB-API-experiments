var githubapi = require('github');

var github = new githubapi({
    // required
    version: '3.0.0',
    // optional
    debug: true,
    protocol: 'https',
    host: 'github.my-GHE-enabled-company.com',
    pathPrefix: '/api/v3', // for some GHEs
    timeout: 5000
});

github.user.getFollowingFromUser({
  user: 'rcpeng34'
}, function(err, res) {
  console.log(JSON.stringify(res));
});