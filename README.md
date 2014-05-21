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
  Location info requires, in addition to user_photos and user_status, friend_status and friend_photos
    These somehow on scope inclusion generates an authentication error
    /user/locations has been depreciated for Graph v2.0 but is still there in the documentation
      Let the record reflect that facebook graph has **HORRIBLE** documentation

RE: Facebook Permissions
  Once you publicize the app, you have to request facebook to approve your permission requests for users
  Until they approve it, you will be only approved for basic info: email, public_profile, user_friends

  In the meantime, new users must be registered as developers
    Once registered, you must add them to the app and they must accept the request



To Do:
  build map display of these locations by longitude latitude
  clean up code by moving the fb login and init to app.js
  bug - login pops up twice and loggin into one fails the other for the first try.

