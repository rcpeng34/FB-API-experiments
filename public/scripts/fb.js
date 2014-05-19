define(['facebook'], function(){
  FB.init({
    appId      : '711138455590961',
  });
  FB.getLoginStatus(function(response) {
    console.log(response);
  });
});