document.addEventListener("DOMContentLoaded", function(){
  var script = document.createElement("script");
  script.src = chrome.extension.getURL("js/cjax.js");
  script.id = "cjax-ext";
  script.setAttribute("ext-id", chrome.runtime.id);
  document.head.appendChild(script);
});
