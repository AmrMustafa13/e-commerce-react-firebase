export const INITIAL_STATE = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const formReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case "CLEAR_FORM":
      return INITIAL_STATE;
    default:
      return state;
  }
};
