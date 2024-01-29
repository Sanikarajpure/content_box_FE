import { LOGIN_USER, SIGNOUT_USER } from "../actions/types";
let userDefault = {
  user: {
    firstname: null,
    lastname: null,
    email: null,
    id: null,
  },
};

const userReducer = (state = userDefault, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: { ...action.payload },
      };

    case SIGNOUT_USER:
      return {
        ...(state.user = userDefault),
      };

    default:
      return state;
  }
};

export default userReducer;
