app.component('position', {
  name: "position",
  template:
    /*html*/
    `
<!-- <div class="q-pa-md row fit items-end" v-if="cEngineer != ''" > -->
<!-- <q-item-section side>
  <q-btn flat color="primary" icon="verified" @click="confirm=true">Утвердить</q-btn>
</q-item-section> -->

<div class="q-pa-md row">
  <!-- <div class="q-gutter-md" style="max-width: 300px"> -->
  <div v-if="cEngineer != ''">

    <q-field label="Инженер" stack-label borderless :dense="true" class="q-pr-md">
      <template v-slot:prepend>
        <q-icon name="person" />
      </template>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{cEngineer}}</div>
      </template>
    </q-field>

    <q-field label="Телефон" stack-label borderless :dense="true" class="q-pr-md">
      <template v-slot:prepend>
        <q-icon name="phone" />
      </template>
      <a
        :href="'tel:'+engineers.phones[engineers.names.indexOf(cEngineer)]">{{engineers.phones[engineers.names.indexOf(cEngineer)]}}</a>
    </q-field>

    <q-field label="Email" stack-label borderless :dense="true" class="q-pr-md">
      <template v-slot:prepend>
        <q-icon name="email" />
      </template>
      <a
        :href="'mailto:'+engineers.emails[engineers.names.indexOf(cEngineer)]">{{engineers.emails[engineers.names.indexOf(cEngineer)]}}</a>
    </q-field>

    <!-- </div> -->
  </div>


  <div v-if="cMeasurer != ''">

    <q-field label="Обмерщик" stack-label borderless :dense="true" class="q-pr-md">
      <template v-slot:prepend>
        <q-icon name="person" />
      </template>
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{cMeasurer}}</div>
      </template>
    </q-field>

    <q-field label="Телефон" stack-label borderless :dense="true" class="q-pr-md">
      <template v-slot:prepend>
        <q-icon name="phone" />
      </template>
      <a
        :href="'tel:'+measurers.phones[measurers.names.indexOf(cMeasurer)]">{{measurers.phones[measurers.names.indexOf(cMeasurer)]}}</a>
    </q-field>

    <q-field label="Email" stack-label borderless :dense="true" class="q-pr-md">
      <template v-slot:prepend>
        <q-icon name="email" />
      </template>
      <a
        :href="'mailto:'+measurers.emails[measurers.names.indexOf(cMeasurer)]">{{measurers.emails[measurers.names.indexOf(cMeasurer)]}}</a>
    </q-field>

    <!-- </div> -->
  </div>

</div>

<q-dialog v-model="confirm" persistent>
  <q-card>
    <q-card-section class="row items-center">
      <q-avatar icon="contact_support" color="primary" text-color="white" />
      <span class="q-ml-sm">Вы уверены?</span>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Да" color="primary" v-close-popup @click="changeStatus()"></q-btn>
      <q-btn flat label="Нет" color="primary" v-close-popup></q-btn>
    </q-card-actions>
  </q-card>
</q-dialog>

`
  ,
  props: {
    cAddress: String,
    cEngineer: String,
    cMeasurer: String,
    cPosition: String
  },
  setup(props) {
    let engineers = reactive(model.engineers);
    let measurers = reactive(model.measurers);
    function changeStatus() {
      console.log(props.cAddress);
      // console.log($q.platform.is.desktop)
    };
    return {
      confirm: ref(),
      engineers,
      measurers,
      changeStatus
    }
  }
})