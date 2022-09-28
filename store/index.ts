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
      /*
            async loadUpdate() {
              // At request level
              const URL = "https://api-hr-symfony.herokuapp.com/media_objects";
              let agent = new https.Agent({
                rejectUnauthorized: true
              });
              if (process.env.NODE_ENV !== "production") {
                agent = new https.Agent({
                  rejectUnauthorized: false
                });
                console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`);
              }
              const tab = ["ch-2000", "sa", "vileatis", "w3-frame"];
              const tab2 = ["", "hero", "hero-2", "preview", "preview-2"];
              let i = 0;
              for (const item of tab) {
                for (const sufix of tab2) {
                  i++;
                  if (sufix !== "") {
                    await this.$axios.$put(`${URL}/${i}`, {
                      httpsAgent: agent,
                      filePath: `${item}-${sufix}.png`
                    });
                  } else {
                    await this.$axios.$put(`${URL}/${i}`, {
                      httpsAgent: agent,
                      filePath: `${item}.png`
                    });
                  }
                }
              }
            } */
    }

  });
};

export default createStore;
