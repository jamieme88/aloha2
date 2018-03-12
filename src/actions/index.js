export const actionInput = (user) => {
  return {
      type: 'USER_SELECTED',
      payload: user
  }
};

export const selectAction = (v) => {
  console.log('v', v);
  return {
    type: 'SELECT',
    value: v
  }
}

export const generateAction = (v) => {
  console.log('v', v);
  return {
    type: 'GENERATE',
    value: v
  }
}

export const changetextAction = (v) => {
  return {
    type: 'CHANGETEXT',
    value: v
  }
}