const { createApp, ref, reactive, computed, watch, onMounted, watchEffect, onBeforeUnmount } = Vue;
const { useQuasar, Loading, QSpinnerGears } = Quasar;

var vueObject = {
  name: 'root',
  template:
    /*html*/
    `
<!-- <div class="q-pa-md"> -->
  <div class="q-pa-md row fit" >
    
  <div v-for='item in modelc.addresses'>
    <position :cAddress='item.address' :cEmployee='item.employee' :cStatus='item.status'></position>
  </div>

    <!-- <q-field label="Адрес" stack-label :dense="true" class="q-pr-md" style="max-width: 70%;">
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{address}}</div>
      </template>
    </q-field>

    <q-field label="Исполнитель" stack-label :dense="true" class="q-pr-md">
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{employee}}</div>
      </template>
    </q-field>

    <q-field label="Статус" stack-label :dense="true" class="q-pr-md">
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{status}}</div>
      </template>
    </q-field>
  </div>

  <div class="q-pa-md row fit">
    <q-field label="Адрес" stack-label :dense="true" class="q-pr-md">
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{address}}</div>
      </template>
    </q-field>

    <q-field label="Исполнитель" stack-label :dense="true" class="q-pr-md">
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{employee}}</div>
      </template>
    </q-field>

    <q-field label="Статус" stack-label :dense="true" class="q-pr-md">
      <template v-slot:control>
        <div class="self-center full-width no-outline">{{status}}</div>
      </template>
    </q-field>
  </div> -->
</div>

`
  ,
  setup() {
    let modelc = reactive(model)

    return {
      modelc
    }
  }
}

const app = Vue.createApp(vueObject);
app.use(Quasar, {
  config: {
    notify: { /* look at QuasarConfOptions from the API card */ },
    loading: { /* look at QuasarConfOptions from the API card */ }
  }
});

Quasar.lang.set(Quasar.lang.ru);