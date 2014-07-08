chrome.browserAction.onClicked.addListener(function(tab) {
    var url = tab.url;
    var start = url.indexOf('//') + 2;
    var dsdev = url.indexOf('.ds.dev', start);
    var middle = url.indexOf(':8080', start);
    var end = url.indexOf('/', start);

    if (dsdev != -1) {          // On local, goto staging
        chrome.tabs.update(tab.id, {url: 'http://' + url.substring(start, dsdev) + ':8080' + url.substring(end)});
    } else if (middle != -1) {  // On staging, goto live
        chrome.tabs.update(tab.id, {url: 'http://' + url.substring(start, middle) + url.substring(end)});
    } else {                    // On live, goto local
        chrome.tabs.update(tab.id, {url: 'http://' + url.substring(start, end) + '.ds.dev' + url.substring(end)});
    }   
});
