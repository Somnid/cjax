document.addEventListener("DOMContentLoaded", function(){
  chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse){
    Ajax.promiseRequest(request).then(sendResponse);
    return true; //keep channel open
  });
});