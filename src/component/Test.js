import React, { Component } from 'react'
import {
    Map, TileLayer, Rectangle, GeoJSON, Circle,
    CircleMarker, Popup
} from 'react-leaflet'
import london_postcodes from "../component/division.json";

const outer = [
    [50.505, -29.09],
    [52.505, 29.09],
]
const inner = [
    [49.505, -2.09],
    [53.505, 2.09],
]

let State = {
    bounds: []
}

export default class BoundsExample extends React.Component {
    state = {
        bounds: outer,
    }

    geoJSONStyle() {
        return {
            color: '#1f2021',
            weight: 1,
            fillOpacity: 0.5,
            fillColor: '#fff2af',
        }
    }

    onClickInner = () => {
        this.setState({ bounds: inner })
    }

    onClickOuter = () => {
        this.setState({ bounds: outer })
    }

    onEachFeature(feature, layer) {
        const popupContent = ` <Popup><p>Customizable Popups <br />with feature information.</p><pre>Borough: <br />${feature.properties.name}</pre></Popup>`
        layer.bindPopup(popupContent)
    }

    render() {
        return (
            <Map bounds={this.state.bounds}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Rectangle
                    bounds={outer}
                    color={this.state.bounds === outer ? 'red' : 'white'}
                    onClick={this.onClickOuter}
                />
                <Rectangle
                    bounds={inner}
                    color={this.state.bounds === inner ? 'red' : 'white'}
                    onClick={this.onClickInner}
                />
                {console.log(london_postcodes)}
                <GeoJSON
                    data={london_postcodes}
                    style={this.geoJSONStyle}
                    onEachFeature={this.onEachFeature}
                >
                    <CircleMarker center={[23.6850, 90.3563]} color="red" radius={20} fillColor="blue">
                        <Popup>
                            <table border="1">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                                <tr>
                                    <td>mannan</td>
                                    <td>mannan@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>hannan</td>
                                    <td>hannan@gmail.com</td>
                                </tr>
                            </table>

                        </Popup>
                    </CircleMarker>


                </GeoJSON>



            </Map>
        )
    }
}