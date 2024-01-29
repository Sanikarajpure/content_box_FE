import { SET_UPLOADED_CONTENT, CLEAN_USER_DATA } from "../actions/types";
let initState = {
  uploadedContent: {},
};
const contentReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_UPLOADED_CONTENT:
      return {
        ...state,
        uploadedContent: action.payload,
      };
    case CLEAN_USER_DATA:
      return {
        ...(state.uploadedContent = initState),
      };
    default:
      return state;
  }
};

export default contentReducer;
