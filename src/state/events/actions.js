import moment from 'moment';

import getData from '../../logics/getData';

import { indivisibleUrl } from '../constants';

import IndEvent from './model';

export const setEvents = events => ({
  type: 'SET_EVENTS',
  events,
});

export const setFeaturesHome = featuresHome => ({
  type: 'SET_FEATURES_HOME',
  featuresHome,
});

export const startSetEvents = () => (dispatch) => {
  const url = `${indivisibleUrl}/indivisible_public_events.json`;
  return getData(url).then((result) => {
    const allevents = result.body;
    const events = Object.keys(allevents)
      .map(id => new IndEvent(allevents[id]))
      .filter(evnt => moment(evnt.starts_at).isAfter())
      .sort((a, b) => moment(a.starts_at).isSameOrAfter(b.starts_at));
    return (dispatch(setEvents(events)));
  });
};