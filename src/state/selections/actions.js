import superagent from 'superagent';

import { firebaseUrl } from '../constants';

const setLatLng = payload => ({
  type: 'SET_LAT_LNG',
  payload,
});

export const setTextFilter = (payload = '') => ({
  type: 'SET_TEXT_FILTER',
  payload,
});

export const setDistance = (payload = 80467.2) => ({
  type: 'SET_DISTANCE',
  payload,
});

export const sortByChange = payload => ({
  type: 'SORT_BY',
  payload,
});

export const getLatLngFromZip = payload => dispatch =>
  superagent.get(`${firebaseUrl}/zips/${payload.zipcode}.json`)
    .then((res) => {
      dispatch(setLatLng(res.body));
    })
    .catch();
