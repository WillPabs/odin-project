const Drag = (() => {
  let dragged = null;

  const start = (ev) => {
    dragged = ev.target;
  };

  const dragover = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.setData('text', ev.target.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    if (ev.target.classList.contains('cell')) {
      console.log(ev.target);
      console.log(dragged);
      ev.target.appendChild(dragged);
    }
  };

  return {
    start,
    dragover,
    drop,
  };
})();

export default Drag;
