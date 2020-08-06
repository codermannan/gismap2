import React from 'react';
import { GeoJSON, FeatureGroup, Popup } from 'react-leaflet';
import "../css/GeojsonLayer.css"
import { CircleMarker } from 'react-leaflet';
import { Tooltip } from 'react-leaflet';
import { L } from 'leaflet';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { drillData, firstFetch, directorateData, directorateDataAll } from "../redux/actions/coOrdinateActions";


class GeojsonLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  myStyle = () => {
    return {
      color: "white",
      weight: 1,
      opacity: .8,
      fillColor: "green",
      dashArray: '8 5',
      fillOpacity: .7
    }
  }

  drillInside = (divId, zillaId) => () => {
    this.props.drillData(divId, zillaId);
    this.props.directorates.length && this.props.directorateData(divId, zillaId)
    this.props.directorates_all && this.props.directorateDataAll(divId, zillaId)
  };


  componentWillMount() {
    this.props.firstFetch();
  }

  componentDidMount(){

    loadDataAll = (divid) => {

      const DirectorateDivid = this.props.directorates_all.filter(el => el.divid === divid);
  
  
      this.setState({
        DirectorateDividAll: DirectorateDivid
      });
  
      console.log("all",this.state);
    }

  }
  /*
  createCircleMarker = (latlng ) => () => {
    // Change the values of these options to change the symbol's appearance
    let options = {
      radius: 8,
      fillColor: "red",
      color: "black",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }
    return L.circleMarker( latlng, options );
  }

  onEachFeature(feature, layer) {
    const popupContent = ` <Popup><p>Customizable Popups <br />with feature information.</p><pre>Borough: <br />${feature.properties.name}</pre></Popup>`
    layer.bindPopup(popupContent)
  }
  */

  

  renderPopupTableData = () => {

    return (
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
    )
    /*let dirdata = Array.from(this.props.directorateDataAll.directorates_all);
    console.log(dirdata);


    this.props.directorateDataAll.map(data => {

      console.log(data);

    })*/
    //https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg
    //https://stackoverflow.com/questions/1078118/how-do-i-iterate-over-a-json-structure
  }

  render() {
    return (
      <FeatureGroup>
        {
          this.props.coOrdData && this.props.coOrdData.map(f => {
            //console.log("f.properties", f.properties);
            if (this.props.directorates && f.properties.divid && f.properties.zillaid === undefined) {
              const found = this.props.directorates.find(element => element.divid === f.properties.divid);
              if (found !== undefined) f.properties.doctorateActive = found.totalActive;
            }
            else if (f.properties.divid && f.properties.zillaid) {
              const found = this.props.directorates.find(element => element.zillaid === f.properties.zillaid);
              if (found !== undefined) f.properties.doctorateActive = found.totalActive;
            }

            return <div>

              <GeoJSON key={f.properties.gid} data={f} style={this.myStyle} onClick={this.drillInside(f.properties.divid, f.properties.zillaid)}>
                <Tooltip
                  className='ToolTipProvince custom-component'
                  style={this.toolStyle}
                  direction="center"
                  stroke={false}
                  permanent>
                  <span className="toolTipOutSide">
                    {f.properties.divisionen ? f.properties.divisionen : f.properties.zillanamee ? f.properties.zillanamee : f.properties.upazilanam ? f.properties.upazilanam : null}

                  </span>
                </Tooltip>
                {/* <Popup>{f.properties.divisionen}</Popup> */}
              </GeoJSON>

              {
                f.properties.doctorateActive &&
                <GeoJSON key={f.properties.gid} data={f} style={this.myStyle} onClick={() => this.loadDataAll(f.properties.divid)}>
                  <Tooltip direction="bottom" permanent
                  //onClick={()=>{console.log(222222)}}

                  >
                    <span className="toolTipInside">
                      {f.properties.doctorateActive ? f.properties.doctorateActive : null}
                    </span>
                    <Popup >
                      
                        {
                             <div>
                               {console.log("ssssss",this.state.DirectorateDivid)}
                             </div>
                          

                        }

                    </Popup>
                  </Tooltip>
                </GeoJSON>
              }

            </div>

          })}
      </FeatureGroup>
    );
  }
}


const mapStateToProps = state => ({
  coOrdData: state.mapData.coordinate,
  mapPosition: state.mapData.position,
  directorates: state.mapData.directorate,
  directorates_all: state.mapData.directorate_all
});

export default connect(mapStateToProps, { firstFetch, drillData, directorateData, directorateDataAll })(GeojsonLayer);