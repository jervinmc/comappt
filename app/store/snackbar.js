export const state = () => ({
    snackbar: {
      show: false,
      text: "This is snackbar",
      color: "success",
      icon: "check-circle"
    },
    loading_overlay: false
  });
  
  export const mutations = {
    CLOSE_SNACKBAR: state => {
      state.snackbar.show = false;
    },
    SET_SNACKBAR: (state, payload) => {
      state.snackbar.show = true;
      state.snackbar.text = payload.text;
      state.snackbar.color = payload.color || "success";
      if (state.snackbar.color === "error")
        state.snackbar.icon = "alert-circle-outline";
    },
    SET_LOADING: (state, payload) => {
      state.loading_overlay = payload;
    }
  };
  
  export const actions = {
    closeSnackbar({ commit }) {
      commit("CLOSE_SNACKBAR");
    },
    setSnackbar({ commit }, payload) {
      commit("SET_SNACKBAR", payload);
    },
    setLoadingOverlay({ commit }, isLoading) {
      commit("SET_LOADING", isLoading);
    }
  };
  
  export const strict = true;
  