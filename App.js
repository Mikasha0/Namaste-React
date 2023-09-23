import React from "react";
import ReactDOM from "react-dom/client";

// const div = document.getElementById('root');

// const tag = document.createElement('h1')

// const elementWithTexxt = tag.innerHTML = "Namaste React"

// div.appendChild(tag);

//lets create a nested element now.

// const heading1 = React.createElement('h1', {
//     key:'h1',
//     className: "root", style: {
//         color: "red"
//     }
// }, 'Namaste React');
// const heading2 = React.createElement('h2', {
//     key:'h2',
//     className: "heading2", style: {
//         color: "green"
//     }
// }, 'Namaste JS');
// const heading3 = React.createElement('h3', {
//     key:'h3',
//     className: "heading3", style: {
//         color: "blue"
//     }
// }, 'Namaste Next');

// const header = React.createElement("div", { className: "header" }, [
//   React.createElement("h1", { key: "h1" }, "Namaste React"),
//   React.createElement("ul", { key: "items" }, [
//     React.createElement("li", { key: "Home" }, "Home"),
//     React.createElement("li", { key: "About" }, "About Us"),
//   ]),
// ]);

//This is how you can create nested element using createElement in React.
//And this is a dynacmic way of adding nested element in React.

// const reactElement = React.createElement("div", {}, [
//   heading1,
//   heading2,
//   heading3,
// ]);

const heading = React.createElement('h1', {}, 'Namaste React');

const HeaderComponent = () => (
  <React.Fragment>
    <div>
        {heading}
      <h2>Introduction to functional component</h2>
    </div>
    <h3>React Fragment</h3>
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent></HeaderComponent>);
//three ways of rendering functional components and they are
/*HeaderComponent()
<HeaderComponent/>
<HeaderComoponent></HeaderComponent/>*/
