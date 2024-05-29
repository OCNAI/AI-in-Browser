chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'createResponse',
    title: 'Generate Response',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'createResponse' && info.selectionText) {
    const webhookUrl = 'https://hook.eu2.make.com/xxx'; // Replace with your actual webhook URL

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: info.selectionText })
    })
    .then(response => response.text())
    .then(text => {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (text) => {
          navigator.clipboard.writeText(text).then(() => {
            alert('Response copied to clipboard!');
          }).catch(err => {
            console.error('Failed to copy response to clipboard:', err);
          });
        },
        args: [text]
      });
    })
    .catch(err => {
      console.error('Error fetching response from webhook:', err);
    });
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateContextMenu' && request.selectedText) {
    chrome.contextMenus.update('createResponse', {
      title: `Generate Response for "${request.selectedText.substring(0, 15)}..."`
    });
  }
});