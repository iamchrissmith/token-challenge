import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sampleAction, getSampleText } from './reducers/sample';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const { dispatchSampleAction, sampleActionText} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pangea Token Challenge</h1>
        </header>
        <p className="App-intro">
          <button onClick={dispatchSampleAction} style={{cursor: 'pointer'}}>Dispatch Sample Action</button>
        </p>
        {sampleActionText && <div>{sampleActionText}</div>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sampleActionText: getSampleText(state)
})

const mapDispatchToProps = dispatch => ({
  dispatchSampleAction: () => dispatch(sampleAction.action('sampleActionFired'))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
