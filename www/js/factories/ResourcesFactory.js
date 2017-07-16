app.factory('CPUResource', function($resource, ApiEndpoint){
	return $resource(ApiEndpoint.url+"/api/cpu", null,
	  {
	      'get': { method:'GET' , isArray: false },
	  });
});

app.factory('ConfigResource', function($resource, ApiEndpoint){
	return $resource(ApiEndpoint.url+"/api/config", null,
	  {
	      'get': { method:'GET' , isArray: false },
	      'post': {method:'POST'}	      
	  });
});