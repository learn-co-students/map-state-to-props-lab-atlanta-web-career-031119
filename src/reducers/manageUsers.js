export default function manageUsers(state = {
  users: [],
}, action){
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action.user);
      console.log(state.users)
      return {
        ...state,
        users: [...state.users, action.user]
      }

    default:
      return state;
  }
};
