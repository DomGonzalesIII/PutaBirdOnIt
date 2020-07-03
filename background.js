// sets a listener on the browser action button, clicking it will fire off script
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, { file: 'putABirdOnIt.js' });
});
