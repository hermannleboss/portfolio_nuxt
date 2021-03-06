import https from "https";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
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
          let agent = new https.Agent({
            rejectUnauthorized: true
          });
          if (process.env.NODE_ENV !== "production") {
            agent = new https.Agent({
              rejectUnauthorized: false
            });
            console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`);
          }
          const realisations = await this.$axios.$get(`${process.env.API_URL}/achievements`, { httpsAgent: agent });
          commit("SET_REALISATION", realisations);
        }
      }
    }
  );
};

export default createStore;
