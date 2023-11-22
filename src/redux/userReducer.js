import {SET_USERNAME} from "./userAction";

const initialState = {
  username: "user",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
