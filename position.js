app.component('position', {
  name: "position",
  template:
    /*html*/
    `
<div class="q-pa-md row fit items-end" v-if="cEngineer != ''" >

  <q-field dark :label="cPosition"  stack-label borderless :dense="true" class="q-pr-md" style="width: 15%">
    <template v-slot:prepend>
      <q-icon name="person" />
    </template>
    <template v-slot:control>
      <div class="self-center full-width no-outline">{{cEngineer}}</div>
    </template>
  </q-field>

  <q-field dark label="Телефон"  stack-label borderless :dense="true" class="q-pr-md" style="width: 10%;">
    <template v-slot:prepend>
      <q-icon name="place" />
    </template>
    <a
      :href="'tel:'+engineers.phones[engineers.names.indexOf(cEngineer)]">{{engineers.phones[engineers.names.indexOf(cEngineer)]}}</a>
  </q-field>

  <q-field dark label="Email"  stack-label borderless :dense="true" class="q-pr-md" style="width: 10%;">
    <template v-slot:prepend>
      <q-icon name="email" />
    </template>
    <a
      :href="'mailto:'+engineers.emails[engineers.names.indexOf(cEngineer)]">{{engineers.emails[engineers.names.indexOf(cEngineer)]}}</a>
  </q-field>

</div>
`
  ,
  props: {
    cAddress: String,
    cEngineer: String,
    cPosition: String
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