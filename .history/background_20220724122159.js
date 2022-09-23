chrome.browserAction.onClicked.addListener(function(tab){
  var action_url = "www.xyz.com"
  chrome.tabs.create({ url: action_url });
}