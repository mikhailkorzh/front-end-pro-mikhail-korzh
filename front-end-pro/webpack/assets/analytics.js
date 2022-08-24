function createAnalitics() {
  let counter = 0;
  let isDestroyed = false

  const listener = () => counter++;

  document.addEventListener("click", listener);

  return {
    destroy() {
      document.addEventListener("click", listener);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return "Is destroyed";
      }
      return counter;
    },
  };
}

window.analytics = createAnalitics();
