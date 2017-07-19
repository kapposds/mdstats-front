app.service('HelperService', function($ionicPopup, $state)
{
this.connectionErrorPopup = function ()
    {
      $ionicPopup.show({ //show error popup
          title: "Connection Error",
          content: "You are disconnected. Please check your connection.",
    buttons: [
      { text: 'ΟΚ',
        type: 'button-positive',},
      {
        text: 'Kill',
        type: 'button-positive',
        onTap: function() {
            ionic.Platform.exitApp();
        }
      }
    ]          
      })
    };	

    this.serverErrorPopup = function ()
    {
      $ionicPopup.show({ //show error popup
          title: "Server Error",
          content: "Cannot connect to the server. Please check your configuration.",
    buttons: [
      { text: 'ΟΚ',
        type: 'button-positive',},
      {
        text: 'Configuration',
        type: 'button-positive',
        onTap: function() {
            $state.go('app.configuration');        }
      }
    ]          
      })
    };	

    this.reconnectPopup = function ()
    {
      $ionicPopup.show({ //show popup
          title: "Connection Success",
          content: "You have reconnected. If page is not loaded properly, return to the 'Home' page",
    buttons: [
      { text: 'ΟΚ',
        type: 'button-positive',},
      {
        text: 'Home',
        type: 'button-positive',
        onTap: function() {
			$state.go('app.home');
        }
      }
    ]          
      })
    };	 
});