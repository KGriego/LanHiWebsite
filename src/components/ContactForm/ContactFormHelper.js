export const SendForm = state => {
  console.log(state);
  //don't forget to add phonenumber back in here
  const { name, email, message } = state;
  if (!name && !email && !message) {
    state.errorForName = true;
    state.errorForEmail = true;
    state.errorForMessage = true;
    state.error = true;
    return state;
  } else if (!name && !email && message) {
    state.errorForMessage = false;
    state.errorForName = true;
    state.errorForEmail = true;
    state.error = true;
    return state;
  } else if (!name && !message && email) {
    state.errorForEmail = false;
    state.errorForMessage = true;
    state.errorForName = true;
    state.error = true;
    return state;
  } else if (!email && !message && name) {
    state.errorForName = false;
    state.errorForEmail = true;
    state.errorForMessage = true;
    state.error = true;
    return state;
  } else if (!email && name) {
    state.errorForEmail = true;
    state.errorForName = false;
    state.errorForMessage = false;
    return state;
  } else if (!name && email) {
    state.errorForEmail = false;
    state.errorForName = true;
    return state;
  } else if (name && email && !message) {
    state.errorForMessage = true;
    state.errorForEmail = false;
    state.errorForName = false;
    return state;
  } else if (email && message && !name) {
    state.errorForEmail = false;
    state.errorForMessage = false;
    state.errorForName = true;
    return state;
  } else if (message && name && !email) {
    state.errorForEmail = true;
    state.errorForMessage = false;
    state.errorForName = false;
    return state;
  } else if (!message) {
    state.errorForMessage = true;
    state.error = true;
    return state;
  } else if (!email) {
    state.errorForEmail = true;
    state.error = true;
    return state;
  } else if (!name) {
    state.errorForName = true;
    state.error = true;
    return state;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    state.errorForEmail = true;
    state.error = true;
    return state;
  } else {
    state.errorForName = false;
    state.errorForMessage = false;
    state.errorForEmail = false;
    state.error = false;
    return state;
  }
};
