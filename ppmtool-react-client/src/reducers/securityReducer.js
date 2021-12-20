import { SET_CURRENT_USER } from '../actions/types';

const initialState = {
  validToken: false,
  user: {},
};

const isActionPayload = (payload) => (payload ? true : false);

export default function securityReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        validToken: isActionPayload(action.payload),
        user: action.payload,
      };

    default:
      return state;
  }
}
