chrome.runtime.onInstalled.addListener(function() {
	chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
		var newUrl = details.url.replace('/m.', '/').replace('/mobile.', '/');
	    alert("This is a mobile site! Redirecting to standard (" + newUrl + ')');
        chrome.tabs.update({url: newUrl});
	  }, {url: [{hostPrefix : 'm.'}, {hostPrefix : 'mobile.'}]
	});
});