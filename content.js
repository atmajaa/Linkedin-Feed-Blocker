function removeFeed() {
    const feed = document.getElementsByClassName("scaffold-finite-scroll")[0];
    if (feed) {
      feed.remove();
      console.log("Feed removed");
    }
  }
  
  // Initial removal
  removeFeed();
  
  // Watch for changes in the body (or a container element)
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      // Check if new nodes are added
      if (mutation.addedNodes.length > 0) {
        removeFeed();
      }
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  