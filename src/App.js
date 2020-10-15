import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/main';
import Features from './components/features/features';
import Footer from './components/footer/footer';
import Calendar from './components/calendar/calendar';
import Details from './components/details/details';

import FetchData from './service/FetchData';

import './style.css';


class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
    rocketFeatures: null,
    rockets: [],
  };
  
  componentDidMount() {
    this.updateRocket();
  }

  updateRocket() {
    this.fetchData.getRocket()
      .then(data => {
        this.setState({ rockets: data.map(item => item.name) });
        return data;
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {
        this.setState({ rocketFeatures })
      });
  }

  changeRocket = (rocket) => {
    this.setState({ rocket }, 
      this.updateRocket())
  }

  render() {
    return (
      <>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>
        <Main rocket={this.state.rocket} />
        <Features />
        <Footer/>
      </>
    )
  }
}

export default App;
