function customRender(reactElemnent, mainContainer) {
  /* 
    const domElement=document.createElement(reactElemnent.type);
    document.innerHTML=reactElemnent.children;
    document.setAttribute('href',reactElemnent.props.href);
    document.setAttribute('target',reactElemnent.props.target);
    container.appendChild(domElement);
    */

  const domElement = document.createElement(reactElemnent.type);
  domElement.innerHTML = reactElemnent.children;
  for (const prop in reactElemnent.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElemnent.props[prop]);
  }
  mainContainer.appendChild(domElement);
}

const reactElemnent = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Clickme to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElemnent, mainContainer);
