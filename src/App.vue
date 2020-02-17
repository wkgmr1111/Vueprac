<template>
  <v-app>
   <Toolbar></Toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>

</template>

<script>
export default {
  name: 'App',

  components: {
    Toolbar: () => import('@/components/Toolbar')
  },

  data: () => ({
    //
  })
}
</script>
