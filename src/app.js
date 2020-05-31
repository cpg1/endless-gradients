import Ethereal from "ethereal-color";
import lodash from "lodash";

window.addEventListener("DOMContentLoaded", async () => {
  const { Color, Palette, Gradient } = Ethereal;

  const startColor = Color();
  const endColor = Color();

  let lastColor = null;

  const gradientPerViewport = window.innerHeight / 50;

  function getRandomGradient() {
    lastColor ? startColor.set(lastColor) : startColor.random();

    endColor.random();

    const palette = Palette([startColor, endColor]);

    const gradient = Gradient(palette, { count: gradientPerViewport });

    lastColor = endColor.get("rgb").string;

    const completeGradient = gradient.toStringArray("rgb");

    return lastColor ? completeGradient.slice(1) : completeGradient;
  }

  function hasScroll() {
    const { body } = document;
    return body.scrollHeight > body.clientHeight * 2;
  }

  function isTimeToRender() {
    if (!hasScroll()) return;

    const { documentElement: doc } = document;

    const value = (100 * doc.scrollTop) / (doc.scrollHeight - doc.clientHeight);

    return value >= 50;
  }

  function renderGradient() {
    const gradient = getRandomGradient();

    gradient.forEach((color) => {
      const styles = `
        background-color: ${color};
      `;

      const child = `<div style="${styles};"></div>`;

      document.body.innerHTML += child;
    });
  }

  while (!hasScroll()) {
    renderGradient();
  }

  function onScroll() {
    if (!hasScroll()) return;

    if (isTimeToRender()) renderGradient();
  }

  window.addEventListener("scroll", lodash.throttle(onScroll, 200));
});
