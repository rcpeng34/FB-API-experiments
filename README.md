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

To Do:
  other uses can't get their permissions to work
  build map display of these locations by longitude latitude