const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
}

class App extends React.Component {
    handleTitleClick() {
        alert("You clicked the title.");
    }
    render(){
        return React.createElement("div", { onClick: this.handleTitleClick }, [
            React.createElement('h1', {}, 'Adopt Me!'),
            React.createElement(Pet, {
                name: 'Luna',
                animal: 'Cat',
                breed: 'Mixed'
            }),
            React.createElement(Pet, {
                name: 'Negra',
                animal: 'Dog',
                breed: 'Creole'
            }),
            React.createElement(Pet, {
                name: 'Lucky',
                animal: 'Bird',
                breed: 'Macaw'
            })
        ])
    }
}


ReactDOM.render(React.createElement(App), document.getElementById('root'))