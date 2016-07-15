document.addEventListener("DOMContentLoaded", function() {
    function askForPermission(originUrl, requestUrl, callback){
        chromep.storage.local.set({ [`${originUrl}:${requestUrl}`] : true });
        callback(true);
    }

    function checkIfHasPermission(originUrl, requestUrl, callback){
        callback(true);
        //return chromep.storage.local.get(`${originUrl}:${requestUrl}`);
    }

    function checkPermission(originUrl, requestUrl, callback){
        checkIfHasPermission(originUrl, requestUrl, x => {
            if(x === true){
                callback(true);
            }else if(x === false){
                callback("You have been denied access to this resource.");
            }else{
                askForPermission(originUrl, requestUrl, result => {
                    if(result === true){
                        callback(true);
                    }else{
                        callback("You have been denied access to this resource.");
                    }
                });
            }
        });
    }
    function makeResponse(response){
        return response.text()
            .then(text => {
                console.log(response);
                return {
                    body : text,
                    headers : response.headers,
                    status : response.status,
                    statusText : response.statusText,
                    type : response.type,
                    url : response.url
                };
            });
    }
    chrome.runtime.onMessageExternal.addListener(function(data, sender, sendResponse) {
        let { url, request, origin } = data;
        checkPermission(origin, url, result => {
            if(result){
                fetch(url, request)
                    .then(x => makeResponse(x))
                    .then(x => sendResponse(x));

            }else{
                sendResponse("You are not allowed to access this resource.");
            }
        });

        return true; //keep channel open
    });
});
