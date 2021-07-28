import React, { Component } from 'react';
import './styles/App.css';
import { APP_ID } from './token';
import {connect} from 'react-redux';
import {getPhotos,loadingFinished,searchPhotos} from './actions';
import loader from './loader.gif'

const Loader = () => (
  <div style={{position: 'fixed', top: 0, left: 0, bottom: 0, right: 0, zIndex: 10, background: 'rgba(0, 0, 0, 0.2)'}}>
    <img src={loader} style={{ marginTop: '50vh'}} alt="loader"/>
  </div>
)

class App extends Component {
  componentDidMount = () => {
    fetch(`https://api.unsplash.com/photos/?client_id=${APP_ID}`)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      this.props.getPhotosAsProp(json)
      this.props.loadingFinishedAsProp()
    })
  }
  handleSubmit(event){
    event.preventDefault();
    const whatWasTyped = this.text.value;
    this.props.searchPhotosAsProp(whatWasTyped);
  }
  render() {
    return (
      <div className="App">
        {this.props.isLoading && <Loader />}
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h2>Unsplash API Photo Search</h2>
        </div>
        <p className="App-intro">
          There are {this.props.photos.length} photos.
        </p>
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input placeholder="Search for images" typeof='text' ref={element => this.text =element} className="image_input"/>
          <button className="image_button">Submit</button>
        </form>
        <div className="search_results">
          {this.props.photos.map(photo => <div><img className="search_img" src={photo.urls.small} alt="pic" /></div>)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    photos:state.photos,
    isLoading:state.isLoading
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
  getPhotosAsProp:(photosTheParamater)=>
  dispatch(getPhotos(photosTheParamater)),
  loadingFinishedAsProp:()=> dispatch(loadingFinished()),
  searchPhotosAsProp:(searchTerm)=>dispatch(searchPhotos(searchTerm))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


