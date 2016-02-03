angular.module("notes").factory("tokenFatory", function ($window) {
  var store = $window.localStorage;
  var key = "auth-token";
  return{
    getToken: getToken,
    setToken: setToken,
    clearToken: clearToken
  };
  function getToken(key) {
    return store.getItem(key);
  }
  function setToken(token) {
    if (token) {
      store.setItem(key, token);
    } else {
      store.removeItem(key);
    }
  }
  function clearToken() {
    store.removeItem(key);
  }
});

angular.module("notes").factory("tokenInterceptor", function (tokenFatory) {
  console.log("test");
  return{
    request: addToken
  };
  function addToken(config) {
    var token = tokenFatory.getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = "bearer " + token;
    }
    return config;
  }
});
