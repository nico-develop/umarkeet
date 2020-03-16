export const state = () => ({
  contentCTA: null,
  labelEmail: null,
  btn: null,
});

export const mutations = {
  setContentCTA(state, value) {
    state.contentCTA = value
  },
  setLabelEmail(state, value) {
    state.labelEmail = value
  },
  setBtn(state, value) {
    state.btn = value
  }
};

export const getters = {
  getContentCTA(state) {
    return state.contentCTA
  },
  getLabelEmail(state) {
    return state.labelEmail
  },
  getBtn(state) {
    return state.btn
  }
};
