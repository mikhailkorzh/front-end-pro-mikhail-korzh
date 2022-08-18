function createAnalitics() {
  let counter = 0;
  let isDestroyed = false

  const listener = () => counter++;

  document.addEventListener("click", listener);

  return {
    destroy() {
      document.addEventListener("click", listener);
      isDestroyed = true;
      console.log("total clicks", counter)
    },

    getClicks() {
      if (isDestroyed) {
        return `Is destroyed. Total clicks = ${counter}`
      }
      return counter;
    },
  };
}

window.analytics = createAnalitics();
