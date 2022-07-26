const Content = (content) => {
  let main = document.querySelector('main');
  if (!main) {
    main = document.createElement('main');
    main.appendChild(content);
    return main;
  }
  switchContent(content);
};

const switchContent = (content) => {
  const container = document.querySelector('main');
  container.replaceChildren(content);
};

export default Content;
