const baseURL = `https://whispering-ocean-93586.herokuapp.com/users/`;

export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const UPDATE_MESSAGES = "UPDATE_MESSAGES";
export const GET_MESSAGES = "GET_MESSAGES";
export const UPLOAD_AVATAR = "UPLOAD_AVATAR";

export const receiveCurrentUser = currentUser => ({
  type: GET_CURRENT_USER,
  currentUser
});

export const getCurrentUser = _id => async dispatch => {
  return fetch(baseURL + `find-current?_id=${_id}`)
    .then(response => response.json())
    .then(currentUser => {
      dispatch(receiveCurrentUser(currentUser));
    })
    .catch(err => console.log("An error occurred.", err));
};

export const updateUser = (_id, update) => dispatch => {
  return fetch(baseURL + `update-current?_id=${_id}`, {
    method: "PUT",
    body: JSON.stringify(update),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(currentUser => {
      console.log(currentUser);
      dispatch(receiveCurrentUser(currentUser));
    })
    .catch(err => console.log("An error occurred.", err));
};
