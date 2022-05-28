app.component('position', {
  name: "position",
  template:
    /*html*/
    `
<div class="q-pa-md row fit items-end" v-if="cEmployee != ''">

  <!-- <div v-if="cEmployee != ''"> -->
  <q-field label="Исполнитель" dark stack-label borderless :dense="true" class="q-pr-md" style="width: 15%;">
    <template v-slot:prepend>
      <q-icon name="person" />
    </template>
    <template v-slot:control >
      <div class="self-center full-width no-outline">{{cEmployee}}</div>
    </template>
  </q-field>

  <q-field label="Телефон" dark stack-label borderless :dense="true" class="q-pr-md" style="width: 10%;">
    <template v-slot:prepend>
      <q-icon name="place" />
    </template>
    <a :href="'tel:'+engineers.phones[engineers.names.indexOf(cEmployee)]">{{engineers.phones[engineers.names.indexOf(cEmployee)]}}</a>
  </q-field>

  <q-field label="Email" dark stack-label borderless :dense="true" class="q-pr-md" style="width: 10%;">
    <template v-slot:prepend>
      <q-icon name="email" />
    </template>
    <a :href="'mailto:'+engineers.emails[engineers.names.indexOf(cEmployee)]">{{engineers.emails[engineers.names.indexOf(cEmployee)]}}</a>
  </q-field>
  
  <!-- </div> -->

</div>
`
  ,
  props: {
    cAddress: String,
    cEmployee: String,
    cStatus: String
  },
  setup(props) {
    let engineers = reactive(model.engineers);
    let measurers = reactive(model.measurers);
    return {
      engineers,
      measurers
    }
  }
})