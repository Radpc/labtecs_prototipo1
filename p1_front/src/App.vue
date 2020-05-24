<template>
  <v-app id="entireApp">
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>



<style lang="scss" >
#entireApp {
  background-image: url("assets/img/bg_main.jpg");
  background-attachment: fixed;
  background-size: cover;
  overflow: hidden;
}

html {
  overflow-y: hidden;
}
</style>