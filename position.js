app.component('position', {
  name: "position",
  template:
    /*html*/
    `
    <div class="q-pa-md row fit" >
      <q-field label="Адрес" stack-label :dense="true" class="q-pr-md" style="max-width: 70%;">
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{cAddress}}</div>
      </template>
    </q-field>
    </div>
  `
  ,
  props: {
    cAddress: String,
    cEmployee: String,
    cStatus: String
  },
  setup(props) {
    return {

    }
  }
})