export default (state = false, action) => {
  switch (action.type) {
    case "SIDE_BAR_ACTIVE":
      return action.bool;
    default:
      return state;
  }
};
