export default (state = false, action) => {
  switch (action.type) {
    case "POP_UP_ACTIVE":
      return action.bool;
    default:
      return state;
  }
};
