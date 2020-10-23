import React, {Component} from 'react';
import './App.css';
import ButtonRow from "./components/ButtonRow"

class App extends Component {
  render() {
    return(
      <div className="body">
        <header className="header">
          <h2>Home</h2>
        </header>

        <main className= "main">
          <div className="ButtonRow">
            <ButtonRow />
          </div>
        </main>
      </div>
    )
  }
}
  

export default App;
