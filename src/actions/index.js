export const actionInput = (user) => {
  return {
      type: 'USER_SELECTED',
      payload: user
  }
};

export const selectMenuAction = (key) => {
  console.log('key', key);
  return {
    type: 'SELECT',
    key,
  }
}

export const generateAction = (v) => {
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