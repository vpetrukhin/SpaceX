import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/Home/Home';

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
    company: null,
  };
  
  componentDidMount() {
    this.updateRocket();
    this.updateCompany();
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

  updateCompany = () => {
    this.fetchData.getCompany()
      .then(company => this.setState({ company }))
  }

  render() {
    return (
      <BrowserRouter>
        <Header rockets={this.state.rockets} changeRocket={this.changeRocket}/>

        <Route  exact 
        path = '/'
        render={
          () => this.state.company && < Home company = {this.state.company}/>}
        />

        <Route 
        path='/rocket'
        render={
          () => this.state.rocketFeatures && <Features {...this.state.rocketFeatures}/>}
        />

        <Route path='/calendar' component={Calendar} />
        <Route path='/details/:id' component={Details} />

        {this.state.company && <Footer {...this.state.company.links}/>}
      </BrowserRouter>
    )
  }
}

export default App;
