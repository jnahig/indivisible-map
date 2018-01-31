const initialState = {
  allEvents: [],
  featuresHome: {},
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EVENTS':
      return {
        ...state,
        allEvents: action.events,
      };
    case 'SET_FEATURES_HOME':
      return {
        ...state,
        featuresHome: action.featuresHome,
      };
    default:
      return state;
  }
};

export default eventsReducer;
