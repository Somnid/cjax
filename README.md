cjax
====

Cjax is a Chrome extension that allows webpages to have access to cross-domain requests.  This is opens up many powerful uses for the web platform that do not currently exist due to security restrictions.  This extension is not completely safe and should only be installed by users who understand the risks and challenges of allowing cross-domain requests.

This extension adds a window.Cjax API to dropbox-user-content pages.  This is a limitation of Chrome's security model and I am working on methods that will allow it to be accessed by all pages.

To Use:

Cjax.request({
  url : "Url of thing to request",
  method : "POST|GET etc",
  data : "data that will be sent as the payload"
});

This will return a promise with the data.