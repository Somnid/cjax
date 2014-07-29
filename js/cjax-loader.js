document.addEventListener("DOMContentLoaded", function(){
  var script = document.createElement("script");
  script.src = chrome.extension.getURL("js/cjax.js");
  var identifier = document.createElement("span");
  identifier.style.display = "hidden";
  identifier.innerText = chrome.runtime.id;
  identifier.id = "cjax-ext-id";
  document.head.appendChild(identifier);
  document.head.appendChild(script);
});