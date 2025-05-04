const homeDiv = document.querySelector(".home");
const endDiv = document.querySelector(".end");

const dragAndDropProcess = (el, endEl) => {
  el.addEventListener("drag", (ev) => {});

  el.addEventListener("dragstart", (ev) => {});

  el.addEventListener("dragend", (ev) => {});

  endEl.addEventListener(
    "dragover",
    (ev) => {
      ev.preventDefault();
    },
    false
  );

  endEl.addEventListener("dragenter", (ev) => {});

  endEl.addEventListener("dragleave", (ev) => {});

  endEl.addEventListener("drop", (ev) => {
    ev.preventDefault();

    const elSimulation = document.createElement("div");
    elSimulation.style.cssText = `border: 1px solid black; width: ${el.offsetWidth}px; height: ${el.offsetHeight}px`;

    // insert the placeholder *before* moving
    el.parentNode.insertBefore(elSimulation, el);

    // move dragged element to the selected drop target
    ev.target.appendChild(el);
  });
};

dragAndDropProcess(homeDiv, endDiv);
