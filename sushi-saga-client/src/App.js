import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    index: 0,
    eatenSushi:[],
    wallet: 100
  }

  sushiFour = () => {
    return this.state.sushi.slice(this.state.index, this.state.index + 4)
  }

  moreSushi = () => {
    let newIndex = this.state.index + 4
    this.setState({
      index: newIndex
    })
  }

  ateSushi = (props) => {
    if(props.price >= this.state.wallet) {
      null
    } else {
      this.setState({
       eatenSushi: [...this.state.eatenSushi, props],
       wallet: this.state.wallet - props.price 
      })
    }
  }

  render() {

    return (
      <div className="app">
        <SushiContainer list={this.sushiFour()} moreSushi={this.moreSushi} ateSushi={this.ateSushi} eatenSushi={this.state.eatenSushi}/>/>
        <Table eatenSushi={this.state.eatenSushi} wallet={this.state.wallet}/>
      </div>
    );
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(listOfSushi => {
      this.setState({
        sushi: listOfSushi
      })
    })
  }
}

export default App;