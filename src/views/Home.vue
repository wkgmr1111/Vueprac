<template>
<v-container>
<v-layout justify-center>
  <v-flex xs2>

  <v-card class="mx-auto" max-width="200" tile flat >

    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="80px" ></v-img>

    <v-card-title>Top western road trips</v-card-title>
    <v-card-actions>
      <v-btn height="10px" block icon @click="show = !show">
        <v-icon class="bn">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>

  </v-flex>
  <v-flex xs2>

  <v-card class="mx-auto" max-width="200" tile flat >

    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="80px" ></v-img>

    <v-card-title>Top western road trips</v-card-title>
    <v-card-actions>
      <v-btn height="10px" block icon @click="show1 = !show1">
        <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show1">
        <v-divider></v-divider>
        <v-card-text>      1  </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>

  </v-flex>
  <v-flex xs2>

  <v-card class="mx-auto" max-width="200" tile flat >

    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="80px" ></v-img>

    <v-card-title>Top western road trips</v-card-title>
    <v-card-actions>
      <v-btn height="10px" block icon @click="show2 = !show2">
        <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show2">
        <v-divider></v-divider>
        <v-card-text>
                2
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>

  </v-flex>
  <v-flex xs2>

  <v-card class="mx-auto" max-width="200" tile flat >

    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="80px" ></v-img>

    <v-card-title>Top western road trips</v-card-title>
    <v-card-actions>
      <v-btn height="10px" block icon @click="show3 = !show3">
        <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show3">
        <v-divider></v-divider>
        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>

  </v-card>

  </v-flex>
</v-layout>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    show: false,
    show1: false,
    show2: false,
    show3: false
  })
}
</script>
<style scoped>
 bn{
   line-height: 20%

 }
</style>
