chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
	if (details.url.indexOf('stripe') < 0) {
		var newUrl = details.url.replace('.m.', '.').replace('/m.', '/').replace('/mobile.', '/');
	    alert("This is a mobile site! Redirecting to standard (" + newUrl + ')');
	    chrome.tabs.update({url: newUrl});
    }},
  	{url: [
	  	{hostPrefix : 'm.'},
	  	{hostPrefix : 'mobile.'},
	  	{hostPrefix : 'en.m.'},
	  	{hostContains : '.m.'},
	  	{hostContains : '.en.m.'},
	  	{hostContains : '.mobile.'}
  	]}
);