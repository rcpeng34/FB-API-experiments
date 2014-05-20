FB Graph API Experinments
=======

Uses node, express, bootstrap

NOTES
  App ID currently hardcoded, remember to fix
  Bower components located in public directory, included as part of git package as azure refuses to run bower install from the deploy script
  FB api modules can be commented out from app.js
    Each one makes a log-in call to facebook
  Follow up issue, other users are not getting the same permission requests = no data returned on module calls
    They're only getting requests/giving public response permission
  Facebook auth done as a popup automatically, should probably set it as an on click