<template>
  <div>
    <v-toolbar color="white">
      <v-btn icon @click="drawer = !drawer">

      <v-img
        src="../assets/logo.png"
        max-width="50"

        v-if="$vuetify.breakpoint.lgAndUp"
        style="cursor: pointer"
      ></v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items>

      </v-toolbar-items>
    </v-toolbar>
    <section>

  <v-parallax
    dark height="300"
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
        <h4 class="subheading">Build your application today!</h4>
      </v-col>
    </v-row>
  </v-parallax>

    </section>
    <v-toolbar v-if="$vuetify.breakpoint.lgAndUp" flat>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text class="px-12" @click="introduction()">
          <v-card color="transparent" flat>회사소개</v-card>
        </v-btn>

        <v-btn text class="px-12" @click="production()">
          <v-card color="transparent" flat>제품소개</v-card>
        </v-btn>

        <v-btn text class="px-12" @click="news()">
          <v-card color="transparent" flat>새소식</v-card>
        </v-btn>
        <v-btn text class="px-12" @click="about()">
          <v-card color="transparent" flat>문의</v-card>
        </v-btn>

      </v-toolbar-items>
        <v-menu text class="px-12" open-on-hover close-on-content-click offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text v-on="on" @click="translate()" class="px-12">
              <v-card color="transparent" flat>한국어</v-card>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="setCategory(item.title)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-divider></v-divider>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-img src="../assets/logo.png"  max-width="50" @click="mainPage()" style="cursor: pointer"></v-img>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>

        <v-list-item v-for="item in drawrItems" :key="item.title" link @click="item.method">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
        <v-list-group prepend-icon="mdi-translate" no-action>
          <template v-slot:activator>
            <v-list-item-title>한국어</v-list-item-title>
          </template>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link @click="item.method"

          >
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item>
        </v-list-group>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>

export default {

  data () {
    return {

      dialog: false,

      items: [
        { title: 'English', method: this.translate },
        { title: '한국어' }

      ],
      drawrItems: [
        { title: '회사소개', icon: 'mdi-domain', method: this.introduction },
        { title: '제품소개', icon: 'mdi-gift-outline', method: this.production },
        { title: '새소식', icon: 'mdi-newspaper', method: this.news },
        {
          title: '문의',
          icon: 'mdi-contact-phone-outline',
          method: this.about
        }

      ],
      drawer: null
    }
  },
  methods: {
    mainPage () {
      this.$router.push('Home')
      this.drawer = false
    },
    introduction () {
      this.$router.push('Intro')
    },
    production () {
      this.$router.push('Product')
    },
    news () {
      this.$router.push('News')
    },
    about () {
      this.$router.push('About')
    },
    translate () {
      alert('준비중')
    }

  }
}

</script>

<style></style>
