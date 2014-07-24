(function(){
  var script = document.createElement("script");
  script.src = chrome.extension.getURL("js/cjax.js");
  var identifier = document.createElement("span");
  identifier.style.display = "hidden";
  identifier.innerText = chrome.runtime.id;
  identifier.id = "cjax-ext-id";
  document.body.appendChild(identifier);
  document.body.appendChild(script);
})();