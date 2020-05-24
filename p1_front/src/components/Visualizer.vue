<template>
  <div class="p-3 myContainer w-50">
    <div class="myHeader border-bottom">
      <h3>Dados registrados</h3>
    </div>
    <div class="mt-4">
      <div v-for="(item, index) in list" :key="index">
        <h2>{{item.a}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { API_URL } from "../config/const";
import Axios from "axios";

export default {
  name: "Visualizer",
  mounted() {
    this.updateList();
  },

  data() {
    return {
      list: []
    };
  },
  methods: {
    updateList: function() {
      this.list = [];
      Axios.get(API_URL + "/valueset").then(res => {
        res.data.forEach(elem => {
          var newItem = {
            id: elem.id,
            a: elem.a,
            b: elem.b,
            c: elem.c,
            d: elem.d,
            e: elem.e
          };
          this.list.push(newItem);
        });
      });
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
</style>