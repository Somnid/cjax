var Cjax = (function(){
  function request(data){
    return new Promise(function(reject, resolve){
      chrome.runtime.sendMessage(chrome.runtime.id, data, function(response){
        resolve(response);
      });
    });
  }
  return {
    request : request
  };
});