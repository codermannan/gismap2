import React from "react";
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import Basemap from './Basemaps';
import GeojsonLayer from './GeojsonLayer';
import CoordInsert from './CoordInsert';
import '../css/Map.css';
import { connect } from "react-redux";


L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";


class MapComponent extends React.Component {
  state = {
    basemap: 'osm',
    geojsonvisible: true,
    visibleModal: true,
  };

  handleCoOrdinates = () => {
    this.setState(this.props.mapPosition);
  }

  onCoordInsertChange = (lat, long, z) => {
    this.setState({
      lat: lat,
      lng: long,
      zoom: z,
    });
  }

  onBMChange = (bm) => {
    this.setState({
      basemap: bm
    });
  }

  onGeojsonToggle = (e) => {
    this.setState({
      geojsonvisible: e.currentTarget.checked,
      lat: 23.6850,
      lng: 90.3563,
      zoom: 7
    });
  }

  render() {
    var center = [this.props.mapPosition.lat, this.props.mapPosition.lng];
    var z = this.props.mapPosition.zoom;

    const basemapsDict = {
      osm: "",
      hot: "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      dark: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
      cycle: "https://dev.{s}.tile.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
    }

    return (
      <Map zoom={z} center={center}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={basemapsDict[this.state.basemap]}
        />
        <Basemap basemap={this.state.basemap} onChange={this.onBMChange} />

        <div className="geojson-toggle">
          <label htmlFor="layertoggle">
            Toggle
          </label>
          <input type="checkbox"
            name="layertoggle" id="layertoggle"
            value={this.state.geojsonvisible} onChange={this.onGeojsonToggle} />
        </div>

        {this.state.geojsonvisible &&
          <GeojsonLayer url={this.state.divisionCoOrdinates} centerCoOrd={this.handleCoOrdinates} />
        }

        <CoordInsert onllzChange={this.onCoordInsertChange} />

        <Marker position={center} opacity={.1}>
          <Popup keepInView>
            Bangladesh
          </Popup>
        </Marker>
      </Map>
    );
  }
};

const mapStateToProps = state => ({
  mapPosition: state.mapData.position
});

export default connect(mapStateToProps, {}) (MapComponent);