/*
export const someMutation = (state) => {}
 */
export const ADD_EVENTS = (state, obj) => {
  state.events.push(...obj);
};
