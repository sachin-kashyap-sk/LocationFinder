/* eslint-disable no-undef */

import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import parking from "./Assets/location64.png";

class App extends Component {
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          style={{ width: "100%", height: "100%" }}
          zoom={16}
          initialCenter={{
            lat: 29.390945,
            lng: 76.963501,
          }}
        >
          <Marker
            key="marker_1"
            icon={parking}
            position={{
              lat: 29.390945,
              lng: 76.963501,
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAvNL7fuRrrRMsGhw2yKyj9o6gYudGLU80",
})(App);
