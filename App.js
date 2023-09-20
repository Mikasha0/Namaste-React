    // const div = document.getElementById('root');

    // const tag = document.createElement('h1')

    // const elementWithTexxt = tag.innerHTML = "Namaste React"

    // div.appendChild(tag);

    //lets create a nested element now.

    const heading1 = React.createElement('h1', {
        className: "root", style: {
            color: "red"
        }
    }, 'Namaste React');
    const heading2 = React.createElement('h2', {
        className: "heading2", style: {
            color: "green"
        }
    }, 'Namaste JS');
    const heading3 = React.createElement('h3', {
        className: "heading3", style: {
            color: "blue"
        }
    }, 'Namaste Next');

    //This is how you can create nested element using createElement in React.
    //And this is a dynacmic way of adding nested element in React.

    const reactElement = React.createElement('div', {}, [heading1, heading2, heading3])

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(reactElement)