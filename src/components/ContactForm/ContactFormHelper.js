export const SendForm = state => {
  const { name, email } = state;
  // if (!name) {
  //   state.errorForName = true;
  // }
  // if (!email) {
  //   state.errorForEmail = true;
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
  //   state.errorForEmail = true;
  // }
  // if (state.errorForEmail || state.errorForMessage || state.errorForName) {
  //   state.error = true;
  // }
  return state;
};
