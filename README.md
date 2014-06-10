FB Graph API Experinments
=======

Uses node, express, bootstrap

NOTES
  App ID currently hardcoded, remember to fix
  Bower components located in public directory, included as part of git package as azure refuses to run bower install from the deploy script
  FB api modules can be commented out from app.js
  Facebook auth done as a popup automatically, should probably set it as an on click

RE: Facebook Permissions
  Once you publicize the app, you have to request facebook to approve your permission requests for users
  Until they approve it, you will be only approved for basic info: email, public_profile, user_friends

  In the meantime, new users must be registered as developers
    Once registered, you must add them to the app and they must accept the request


To Do:
  build map display of these locations by longitude latitude
  clean words in status cloud by removing grammar
  add another ratio of photos you took vs/ other took in selfie ratio
