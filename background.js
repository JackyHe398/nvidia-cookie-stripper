chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    // Remove any Cookie header before sending
    const filtered = details.requestHeaders.filter(h => h.name.toLowerCase() !== 'cookie');
    return {requestHeaders: filtered};
  },
  { urls: ["*://marketplace.nvidia.com/*"] },
  ["blocking", "requestHeaders"]
);
