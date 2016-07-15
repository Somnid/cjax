window.Cjax = (function() {
    const id = document.getElementById("cjax-ext").getAttribute("ext-id");

    function formatResponse(response){
        response.text = () => response.body;
        response.json = () => JSON.parse(response.body);
        response.arrayBuffer = () => {
            let arrayBuffer = new ArrayBuffer(response.body);
    		let uInt8Array = new Uint8Array(arrayBuffer);

    		for (let i = 0; i < string.length; i++) {
    			uInt8Array[i] = response.body.charCodeAt(i);
    		}

    		return arrayBuffer;
        }
        return response;
    }

    function fetch(url, request) {
        return new Promise((resolve, reject) => {
            let data = {
                url,
                request,
                origin : window.location.href
            };
            chrome.runtime.sendMessage(id, data, response => resolve(formatResponse(response)));
        });
    }
    return {
        fetch: fetch
    };
})();
