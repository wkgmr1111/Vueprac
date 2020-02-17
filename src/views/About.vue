<template>
<v-container>
    <v-col align="center">
      <v-card width="1200" tile flat>

        <v-layout column="column">
            <v-row justify="center">

             <v-col cols="12" md="5">
                <v-text-field
            v-model="name"
            :rules="nameRules"

            label="이름"
            required
               ></v-text-field>
             </v-col>

           </v-row>

          <v-row justify="center">

        <v-col cols="10" md="5">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="이메일"
            required
          ></v-text-field>
        </v-col>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" sm="4" md="5"  xl="5">

              <v-text-field v-model="title"
            :rules="titleRules"
            label="제목"
            required></v-text-field>

            </v-col>

          </v-row>

          <v-row justify="center">

            <v-col cols="12" md="5" xl="5">
        <v-textarea
          outlined
          name="input-7-4"
          label="Outlined textarea"
          no-resize="no-resize"

        ></v-textarea>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
              <v-btn>문의</v-btn>

            </v-col>
          </v-row>

        </v-layout>
      </v-card>
    </v-col>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      v => !!v || '필수 입력 항목입니다.',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    title: '',
    titleRules: [
      // v => !!v || 'Title is required',
      v => v.length > 0 || '한 글자 이상 입력해주세요.'
    ],
    email: '',
    emailRules: [
      v => !!v || '필수 입력 항목입니다.',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || '이메일 형식에 맞게 입력해주세요'

    ]
  })
}
</script>
