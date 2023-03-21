const SET_VISIBLE_MODAL = 'SHOPPING_CART/SET_VISIBLE_MODAL';

const setVisibleModal = (payload: boolean) => {
  return {
    type: SET_VISIBLE_MODAL,
    payload,
  };
};

const shoppingCartReducer = (
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

export { SET_VISIBLE_MODAL, setVisibleModal, shoppingCartReducer };
