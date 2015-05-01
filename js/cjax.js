var Cjax = (function(){
  function request(data){
    var id = document.getElementById("cjax-ext-id").textContent;
    
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