import { INITIAL_LOAD, SET_SEARCH_LOCATION, CHANGE_SYSTEM } from './dispatchTypes';

const stateReducer = (state, action) => {
	const { type, payload } = action;
   // console.log('type : ',type, 'payload : ', payload)
	switch (type) {
      case CHANGE_SYSTEM: {
         return {...state, currentCity: payload};
      }

		case INITIAL_LOAD: {
			return {...state, currentCity: payload};
		}

		case SET_SEARCH_LOCATION: {
         return {
            
         };
		}
	}
};

export default stateReducer;
