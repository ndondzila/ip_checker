import React, {Component} from 'react';
import logo from './ft-logo.png';
import './App.css';
import Auxiliary from './hoc/Auxiliary';
import GeoIP from './containers/GeoIP';
import WhoIs from './containers/WhoIs';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user_input:"0.0.0.0 || http://www.domain.url",
      geoIp_data: null,
      whoIs_data: null,
      showButton: true
    };
  }
  
  inputFocusHandler = (event) => {
    this.setState({
      user_input: ''
    })
  }

  inputChangeHandler = (event) => {
    this.setState({
      user_input: event.target.value
    })
  }

validateIPorDomainHandler = (event) => {
    let user_input = this.state.user_input;
    user_input.replace('https://', '');

    if (/^(?:(?:(?:[a-zA-z\-]+)\:\/{1,3})?(?:[a-zA-Z0-9])(?:[a-zA-Z0-9-\.]){1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+|\[(?:(?:(?:[a-fA-F0-9]){1,4})(?::(?:[a-fA-F0-9]){1,4}){7}|::1|::)\]|(?:(?:[0-9]{1,3})(?:\.[0-9]{1,3}){3}))(?:\:[0-9]{1,5})?$/.test(user_input)){
      this.geoSearchHandler();
      this.whoIsSearchHandler();
      this.setState({showButton: false});
    } else {
      this.setState({
        user_input: "0.0.0.0 || http://www.domain.url"
      });
      alert("Please enter a valid IP address or website domain.");
    }
  }

  whoIsSearchHandler = () => {
    if(this.state.user_input === "0.0.0.0 || http://www.domain.url") {
        return alert("Please enter a valid IP address or website domain.");
    } else {
        axios({
            method: 'POST',
            url: "/WhoIs", 
            data: this.state.user_input
        
        }).then(response => {
            this.setState({
              whoIs_data: response
            });
            console.log(response);
        });
    }
  }
  geoSearchHandler = () => {
    if(this.state.user_input === "0.0.0.0") {
        return alert("Please enter an IP address");
    } else {
        axios({
            method: 'POST',
            url: "/GeoIP", 
            data: this.state.user_input
        
        }).then(response => {
            this.setState({
                geoIp_data: response.data
            });
        });
      }
    }

  beginAgainHandler = () => {
      this.setState({
          user_input:"0.0.0.0 || http://www.domain.url",
          geoIp_data: null,
          whoIs_data: null,
          showButton: true
      });
  }  
  
  render() {

      let style;

      if(this.state.showButton){
          style = {display: "flex"};
      } else {
        style = {display: "none"}
      }
    
    return (
      <div className="App">
        <Auxiliary>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>**A demo project not created/deployed by company**</p>
            </header>
        </Auxiliary>
        <br />
        <Auxiliary>
            <label className="App-label">Please enter an IP address or domain to check:</label>
            <br />
            <hr/>
            <input
                type='text'
                className="App-input"
                value={this.state.user_input}
                onFocus={this.inputFocusHandler}
                onChange={this.inputChangeHandler}></input>
            <br />
            <div className="App-container"><button 
              className="App-unit"
              style={style}
              onClick={this.validateIPorDomainHandler}><strong>Check data</strong></button>
              <button 
                className="App-unit"
                onClick={this.beginAgainHandler}><strong>Reset</strong></button></div>
            
              <div className="App-container">
                <td className="App-unit">
                  <GeoIP
                    geoIp_data = {this.state.geoIp_data}
                    ></GeoIP></td>
                <td className="App-unit">
                  <WhoIs
                    whoIs_data = {this.state.whoIs_data}
                    ></WhoIs></td>
              </div>
          </Auxiliary>
      </div>
    );
  };
  
}

export default App;
