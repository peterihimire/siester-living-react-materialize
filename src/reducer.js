import { GET_DATA, GET_SINGLE_PROPERTY } from "./actions";

const reducer = (state, action) => {
  console.log({ state, action });

  switch (action.type) {
    case GET_DATA:
      return { ...state, properties: [] };
    default:
      return state;
  }
};
export default reducer;
