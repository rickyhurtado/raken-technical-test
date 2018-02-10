export function watchForHover() {
  let lastTouchTime = 0;
  let hasHoverClass = false;
  const container = document.body;

  function enableHover() {
    if (new Date() - lastTouchTime < 500) {
      return;
    }

    if (hasHoverClass) {
      return;
    }

    container.className = 'has-hover';
    hasHoverClass = true;
  }

  function disableHover() {
    if (!hasHoverClass) {
      return;
    }

    container.className = container.className.replace('has-hover', '');
    hasHoverClass = false;
  }

  function updateLastTouchTime() {
    lastTouchTime = new Date();
  }

  document.addEventListener('touchstart', updateLastTouchTime, true);
  document.addEventListener('touchstart', disableHover, true);
  document.addEventListener('mousemove', enableHover, true);

  enableHover();
}
