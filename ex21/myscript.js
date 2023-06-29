function GreetingsFunctional() {
    return <h1>Hello from the functional component!</h1>;
  }
  
  class GreetingsClass extends React.Component {
    render() {
      return <h1>Hello from the class component!</h1>;
    }
  }
  
  // Render the components into their respective containers
  ReactDOM.render(
    <div>
      <GreetingsFunctional />
      <GreetingsClass />
    </div>,
    document.getElementById('root')
  );