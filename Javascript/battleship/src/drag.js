const Drag = (() => {
  let dragged = null;

  const start = (ev) => {
    dragged = ev.target;
  };

  const dragover = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.setData('text', ev.target.id);
  };

  /* TODO : allow entire ship box to be draggable */
  const drop = (ev) => {
    ev.preventDefault();
    if (ev.target.classList.contains('cell')) {
      console.log(ev.target);
      console.log(dragged);
      let { target } = ev;
      target.appendChild(dragged);
      const shipLength = dragged.dataset.length;
      for (let i = 0; i < shipLength; i += 1) {
        target.classList.add('cell-busy');
        target = target.nextSibling;
      }
    }
  };

  return {
    start,
    dragover,
    drop,
  };
})();

export default Drag;
