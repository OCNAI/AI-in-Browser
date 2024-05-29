document.addEventListener('mouseup', (event) => {
  const selection = window.getSelection();
  const selectedText = selection.toString();

  if (selectedText.length > 0) {
      chrome.runtime.sendMessage({ action: 'updateContextMenu', selectedText: selectedText });
  }
});