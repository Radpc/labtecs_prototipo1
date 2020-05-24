<template>
  <div class="p-3 myContainer w-25">
    <div class="myHeader border-bottom">
      <h3>Adicionar</h3>
    </div>
    <div class="mt-4 text-center">
      <div>
        <v-slider :color="'orange darken-3'" min="1" max="10" v-model="sliders.first" step="1">
          <template v-slot:prepend>
            <span
              class="text-white align-middle mt-1 font-weight-bolder"
              style="font-size:1.2rem;width:12px;"
            >{{sliders.first}}</span>
          </template>
        </v-slider>
        <v-slider :color="'orange darken-3'" min="1" max="10" v-model="sliders.second" step="1">
          <template v-slot:prepend>
            <span
              class="text-white align-middle mt-1 font-weight-bolder"
              style="font-size:1.2rem;width:12px;"
            >{{sliders.second}}</span>
          </template>
        </v-slider>
        <v-slider :color="'orange darken-3'" min="1" max="10" v-model="sliders.third" step="1">
          <template v-slot:prepend>
            <span
              class="text-white align-middle mt-1 font-weight-bolder"
              style="font-size:1.2rem;width:12px;"
            >{{sliders.third}}</span>
          </template>
        </v-slider>
        <v-slider :color="'orange darken-3'" min="1" max="10" v-model="sliders.fourth" step="1">
          <template v-slot:prepend>
            <span
              class="text-white align-middle mt-1 font-weight-bolder"
              style="font-size:1.2rem;width:12px;"
            >{{sliders.fourth}}</span>
          </template>
        </v-slider>
        <v-slider :color="'orange darken-3'" min="1" max="10" v-model="sliders.fifth" step="1">
          <template v-slot:prepend>
            <span
              class="text-white align-middle mt-1 font-weight-bolder"
              style="font-size:1.2rem;width:12px;"
            >{{sliders.fifth}}</span>
          </template>
        </v-slider>
      </div>
      <v-btn @click="adicionarValores()" color="orange" class="myButton w-100">
        Adicionar
        <i class="ml-2 fa fa-plus"></i>
      </v-btn>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { API_URL } from "../config/const";

export default {
  name: "AddForm",

  data() {
    return {
      sliders: {
        first: 1,
        second: 1,
        third: 1,
        fourth: 1,
        fifth: 1
      }
    };
  },
  methods: {
    adicionarValores: function() {
      var payload = {
        a: this.sliders.first,
        b: this.sliders.second,
        c: this.sliders.third,
        d: this.sliders.fourth,
        e: this.sliders.fifth
      };

      Axios.post(API_URL + "/valueset", payload).then(res => {
        console.log(res);
      });

      this.zerarValoresFormulario();
    },
    zerarValoresFormulario: function() {
      this.sliders = {
        first: 1,
        second: 1,
        third: 1,
        fourth: 1,
        fifth: 1
      };
    }
  }
};
</script>


<style lang="scss" scoped>
.myContainer {
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  color: white;
  background-color: rgba(255, 255, 255, 0.02);
}

// .myContainer:before {
//   content: "";
//   position: absolute;
//   background: inherit;
//   z-index: -1;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   box-shadow: inset 0 0px 2000px rgba(255, 255, 255, 0.2);
//   filter: blur(5px);
//   margin: -20px;
// }

.myButton {
  margin: auto;
}

.myButton:hover {
  transform: translate(0, -3px);
}
</style>