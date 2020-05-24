<template>
  <div style="height:100%;">
    <h2
      style="font-size:4rem;padding-top:2rem; margin-bottom:0"
      class="text-center text-white"
    >Protótipo</h2>
    <h5
      style="font-size:1rem"
      class="mt--3 text-center font-italic text-white"
    >Feito com Vue, Express e Mongoose</h5>
    <div class="page">
      <div class="p-3 myContainer w-25">
        <div class="myHeader border-bottom">
          <h3>Adicionar</h3>
        </div>
        <div class="text-center d-flex flex-column">
          <div class="mt-10">
            <v-slider :color="'orange darken-3'" min="1" max="10" v-model="sliders.a" step="1">
              <template v-slot:prepend>
                <span
                  class="text-white align-middle mt-1 font-weight-bolder"
                  style="font-size:1.2rem;width:12px;"
                >{{sliders.a}}</span>
              </template>
            </v-slider>
            <v-slider :color="'orange darken-3'" min="1" max="10" v-model="sliders.b" step="1">
              <template v-slot:prepend>
                <span
                  class="text-white align-middle mt-1 font-weight-bolder"
                  style="font-size:1.2rem;width:12px;"
                >{{sliders.b}}</span>
              </template>
            </v-slider>
            <v-slider :color="'orange darken-3'" min="1" max="10" v-model="sliders.c" step="1">
              <template v-slot:prepend>
                <span
                  class="text-white align-middle mt-1 font-weight-bolder"
                  style="font-size:1.2rem;width:12px;"
                >{{sliders.c}}</span>
              </template>
            </v-slider>
            <v-slider :color="'orange darken-3'" min="1" max="10" v-model="sliders.d" step="1">
              <template v-slot:prepend>
                <span
                  class="text-white align-middle mt-1 font-weight-bolder"
                  style="font-size:1.2rem;width:12px;"
                >{{sliders.d}}</span>
              </template>
            </v-slider>
            <v-slider :color="'orange darken-3'" min="1" max="10" v-model="sliders.e" step="1">
              <template v-slot:prepend>
                <span
                  class="text-white align-middle mt-1 font-weight-bolder"
                  style="font-size:1.2rem;width:12px;"
                >{{sliders.e}}</span>
              </template>
            </v-slider>
          </div>
          <v-btn @click="adicionarValores()" color="orange" class="myButton w-100">
            Adicionar
            <i class="ml-2 fa fa-plus"></i>
          </v-btn>
          <div class="mt-5">
            <span style="font-size:2rem;">{{getUrgency(soma(sliders))}}</span>
          </div>
        </div>
      </div>
      <div class="p-3 myContainer w-50">
        <div class="myHeader border-bottom">
          <h3>Dados registrados</h3>
        </div>
        <div class="mt-4 myOverflow">
          <div class="justify-content-center d-flex h-100" v-if="list.length == 0">
            <div class="align-self-center" v-if="carregado">Nenhum item adicionado</div>
            <div class="align-self-center" v-else>Carregando..</div>
          </div>
          <div
            v-else
            style="margin-bottom:0.4rem;"
            class="align-content-center justify-content-center"
            v-for="(item, index) in list"
            :key="index"
          >
            <div
              class="row m-0 rounded text-center"
              style="background-color:rgba(255,255,255,0.1);"
            >
              <span
                style="font-size:1.5rem;background-color:orange;"
                class="align-middle align-self-center col-2 rounded-left text-center"
              >Nº {{index+1}}</span>
              <span
                v-for="(item, index) in item.values"
                :key="index"
                class="align-middle align-self-center col font-weight-bolder"
                style="font-size:1.3rem;"
                v-bind:style="getColorAlert(item)"
              >{{item}}</span>
              <span
                class="col-2 p-0 align-middle align-self-center"
              >{{getUrgency(soma(item.values))}}</span>
              <span
                @click="deleteValueSet(item.id)"
                class="myHover col-1 text-center align-self-center"
              >
                <span @click="deleteValueSet(item.id)" class="fa fa-trash align-self-center" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { API_URL } from "../config/const";

export default {
  name: "Home",
  mounted() {
    this.updateList();
  },
  data() {
    return {
      carregado: false,
      list: [],
      sliders: {
        a: 1,
        b: 1,
        c: 1,
        d: 1,
        e: 1
      }
    };
  },
  methods: {
    adicionarValores: function() {
      var payload = {
        a: this.sliders.a,
        b: this.sliders.b,
        c: this.sliders.c,
        d: this.sliders.d,
        e: this.sliders.e
      };

      Axios.post(API_URL + "/valueset", payload).then(res => {
        console.log(res);
        this.updateList();
      });

      this.zerarValoresFormulario();
    },
    deleteValueSet: function(id) {
      console.log(id);
      Axios.delete(API_URL + "/valueset/" + id).then(res => {
        console.log(res);
        this.updateList();
      });
    },
    zerarValoresFormulario: function() {
      this.sliders = {
        a: 1,
        b: 1,
        c: 1,
        d: 1,
        e: 1
      };
    },
    soma: function(item) {
      var soma = item.a + item.b + item.c + item.d + item.e;
      return soma;
    },
    updateList: function() {
      this.carregado = false;
      this.list = [];
      Axios.get(API_URL + "/valueset")
        .then(res => {
          res.data.forEach(elem => {
            var newItem = {
              id: elem._id,
              values: {
                a: elem.a,
                b: elem.b,
                c: elem.c,
                d: elem.d,
                e: elem.e
              }
            };
            this.list.push(newItem);
          });
          this.carregado = true;
        })
        .catch(() => {
          this.carregado = true;
        });
    },
    getColorAlert(number) {
      if (number < 2) {
        return "color:white";
      } else {
        if (number < 5) {
          return "color:#ffff00";
        } else {
          if (number < 8) {
            return "color:orange";
          } else {
            return "color:#ff5050";
          }
        }
      }
    },
    getUrgency(number) {
      if (number < 10) {
        return "Não Urgência";
      } else {
        if (number < 20) {
          return "Pouca Urgência";
        } else {
          if (number < 30) {
            return "Urgência Média";
          } else {
            if (number < 40) {
              return "Urgência Alta";
            } else {
              return "Emergência";
            }
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.myOverflow {
  overflow-y: auto !important;
  height: 85%;
  padding-right: 0.3rem;
}

.myHover {
  cursor: pointer;
}

.page {
  height: 100%;

  display: flex;
  justify-content: center;
  align-self: center;
}

.myForm {
  align-self: center;
}
.myContainer {
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.4);
  height: 70vh;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  color: white;
  background-color: rgba(255, 255, 255, 0.02);
  margin: 1rem;
  overflow: auto;
  overflow-x: hidden;
}

.myButton {
  margin: auto;
}

.myButton:hover {
  transform: translate(0, -3px);
}
</style>
