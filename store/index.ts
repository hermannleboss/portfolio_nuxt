import https from "https";
import { Store } from "vuex";

const createStore = () => {
  return new Store({
    state() {
      return {
        realisations: {}
      };
    },
    mutations: {
      SET_REALISATION(state, payload) {
        state.realisations = payload;
      }
    },
    getters: {
      getRealisations(state) {
        return state.realisations;
      }
    },
    actions: {
      async loadRealisations({ commit }) {
        // At request level
        let URL = "";
        let agent = new https.Agent({
          rejectUnauthorized: true
        });
        if (process.env.NODE_ENV !== "production") {
          URL = URL + process.env.API_URL;
          agent = new https.Agent({
            rejectUnauthorized: false
          });
          console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`);
        } else {
          URL = URL + process.env.PROD_API_URL;
        }
        const realisations = await this.$axios.$get(`${URL}/achievements`, {
          httpsAgent: agent
        });
        commit("SET_REALISATION", realisations);
      }
    }
  });
};

export default createStore;
