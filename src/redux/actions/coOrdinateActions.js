import { DRILL_CO_ORD, CHANGE_POSITION, DIRECTORATE_DATA,DIRECTORATE_ALL_DATA } from './types';
import axios from "axios";

import division from "../../demo/division.json";
import zilla from "../../demo/zilla.json";




//First time load
export const firstFetch = () => async dispatch => {
  let drillUrl = `http://mchdrhis.icddrb.org:8085/rhis-charts/api.maps.php?action=getDivision`;
  const response = await axios.get(drillUrl); //console.log("response",response);
  dispatch({
    type: DRILL_CO_ORD,
    payload: response.data.features
  })
};

//Drill Down Co-ordinates
export const drillData = (divId = 40, zillaId) => async dispatch => {
  let drillUrl = null;
  if (zillaId === undefined) drillUrl = `http://mchdrhis.icddrb.org:8085/rhis-charts/api.maps.php?action=getZilla&divid=${divId}&zillaid=&upazilaid=&unionid=`;
  else drillUrl = `http://mchdrhis.icddrb.org:8085/rhis-charts/api.maps.php?action=getUpazila&divid=${divId}&zillaid=${zillaId}&upazilaid=&unionid=`;
  const response = await axios.get(drillUrl);
  dispatch({
    type: DRILL_CO_ORD,
    payload: response.data.features
  })

  //Set Position
  let { lat, lng, zoom } = {
    lat: 23.6850,
    lng: 90.3563,
    zoom: 7
  };

  if (response.data.features[0].properties.upazilanam !== undefined) {
    let coOrds = response.data.features[Math.floor(response.data.features.length / 2)].geometry.coordinates[0][0][0];
    lat = coOrds[1];
    lng = coOrds[0];
    zoom = 9
  } else {
    let coOrds = response.data.features[Math.floor(response.data.features.length / 2)].geometry.coordinates[0][0][0];
    lat = coOrds[1];
    lng = coOrds[0];
    zoom = 8
  }
  let currentCenter = { lat, lng, zoom }


  dispatch({
    type: CHANGE_POSITION,
    payload: currentCenter
  })

};


//First time load
export const directorateData = (divId = '', zillaId = '') => async dispatch => {

  //Comment Out
  // let drillUrl = `http://mchdrhis.icddrb.org:8085/rhis-charts/api.maps.php?action=getProviderdb&directorate=DGFP&divid=${divId}&zillaid=${zillaId}&upazilaid=&unionid=`;
  // const response = await axios.get(drillUrl);
  // let allData = response.data;

  let allData = [];
  let type = 'divid'

  if (divId === '') {
    allData = division; //Comment In
    type = 'divid'
  }
  else if (divId) {
    allData = zilla; //Comment In
    type = 'zillaid'
  }

  
  let hashMap = [];
  let finalArray = []

  for (let j = 0; j < allData.length; j++) {
    let filtered = allData.filter(element => element[type] === allData[j][type]).reduce((total, elem) => total + elem.active, 0);
    let tempObj = {
      [type]: allData[j][type],
      totalActive: filtered
    }
    hashMap.push(tempObj)
    finalArray = Array.from(new Set(hashMap.map(a => a[type])))
      .map(id => {
        return hashMap.find(a => a[type] === id)
      })
  }

 // console.log('Action Working', finalArray)
  dispatch({
    type: DIRECTORATE_DATA,
    payload: finalArray
  })
};

//Tooltip Table
export const directorateDataAll = (divId = '', zillaId = '') => async dispatch => {

  //Comment Out
  // let drillUrl = `http://mchdrhis.icddrb.org:8085/rhis-charts/api.maps.php?action=getProviderdb&directorate=DGFP&divid=${divId}&zillaid=${zillaId}&upazilaid=&unionid=`;
  // const response = await axios.get(drillUrl);
  // let allData = response.data;

  let allData = [];
  let type = 'divid'

  if (divId === '') {
    allData = division; //Comment In
    type = 'divid'
  }
  else if (divId) {
    allData = zilla; //Comment In
    type = 'zillaid'
  }

  /*
  let hashMap = [];
  let finalArray = []

  for (let j = 0; j < allData.length; j++) {
    let filtered = allData.filter(element => element[type] === allData[j][type]).reduce((total, elem) => total + elem.active, 0);
    let tempObj = {
      [type]: allData[j][type],
      totalActive: filtered
    }
    hashMap.push(tempObj)
    finalArray = Array.from(new Set(hashMap.map(a => a[type])))
      .map(id => {
        return hashMap.find(a => a[type] === id)
      })
  }*/

  //console.log('Action Working', allData)
  dispatch({
    type: DIRECTORATE_ALL_DATA,
    payload: allData //finalArray
  })
};




