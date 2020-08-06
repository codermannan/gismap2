import { DRILL_CO_ORD, CHANGE_POSITION, DIRECTORATE_DATA,DIRECTORATE_ALL_DATA } from '../actions/types';

const initialState = {
  coOrdData: [],
  position: {
    lat: 23.6850,
    lng: 90.3563,
    zoom: 6
  },
  directorate: [],
  directorate_all : []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DRILL_CO_ORD:
      return {
        ...state,
        coordinate: action.payload
      };
    case CHANGE_POSITION:
      return {
        ...state,
        position: action.payload
      };
    case DIRECTORATE_DATA:
      //console.log('Reducer', action)
      return {
        ...state,
        directorate: action.payload
      };
    case DIRECTORATE_ALL_DATA:
      console.log('Reducer', action.payload)
      return {
        ...state,
        directorate_all: action.payload
      };

    default:
      return state;
  }
}
