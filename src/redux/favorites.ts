const SET_VISIBLE_MODAL = 'FAVORITES/SET_VISIBLE_MODAL';

const setVisibleModal = (payload: boolean) => {
  return {
    type: SET_VISIBLE_MODAL,
    payload,
  };
};

const favoritesReducer = (
  state = {
    isVisibleModal: false,
  },
  action: any
) => {
  switch (action.type) {
    case SET_VISIBLE_MODAL:
      return { ...state, isVisibleModal: action.payload };
    default:
      return state;
  }
};

export { SET_VISIBLE_MODAL, setVisibleModal, favoritesReducer };
