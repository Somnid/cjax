window.Cjax = (function(){
  var id = document.getElementById("cjax-ext-id").textContent;
  
  function request(data){
    return new Promise(function(resolve, reject){
      chrome.runtime.sendMessage(id, data, function(response){
        resolve(response);
      });
    });
  }
  return {
    request : request
  };
})();