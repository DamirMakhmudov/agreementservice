const { createApp, ref, reactive, computed, watch, onMounted, watchEffect, onBeforeUnmount } = Vue;
const { Platform, useQuasar, Loading, Screen } = Quasar;
Screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })

var vueObject = {
name: 'root',
template:
/*html*/
`
<q-layout view="hHh lpR fFf">
  <q-page-container>
    <div>
      <q-toggle v-model="expanded" :label="expanded_text" class="q-mb-md" />
      <q-list bordered class="rounded-borders">
        <q-expansion-item v-model="expanded_model[item.address]" :header-class="item.style"
          class="shadow-1 overflow-hidden q-my-xs" style="border-radius: 30px" :dense="false"
          v-for="item in modelc.addresses" dense-toggle icon="place" :label="item.address" :caption="item.status"
          default-opened>
          
          <position :cAddress='item.address' :cEngineer='item.engineer' cPosition='Инженер' :cMeasurer='item.measurer'></position>
        </q-expansion-item>

        <!-- <q-item-section side> -->
        <!-- <q-btn flat color="primary" icon="verified" @click="confirm=true">Утвердить</q-btn> -->
        <!-- </q-item-section> -->
      </q-list>
    </div>

  </q-page-container>
</q-layout>
`
,
setup() {
let modelc = reactive(model)
const $q = useQuasar()
// $q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })

let expanded = ref(false);
let expanded_model = ref({});
let expanded_text = ref('Развернуть все');

/* global collapse */
watch(expanded, (val) => {
if (Object.keys(expanded_model.value).length) {
expanded_model.value = {};
expanded_text.value = 'Развернуть все';
} else {
modelc.addresses.forEach(item => {
expanded_model.value[item.address] = true
});
expanded_text.value = 'Свернуть все';
}
})

return {
modelc,
confirm: ref(),
expanded,
expanded_model,
expanded_text
}
}
}

const app = Vue.createApp(vueObject);
app.use(Quasar, {
config: {
notify: { /* look at QuasarConfOptions from the API card */ },
loading: { /* look at QuasarConfOptions from the API card */ },
plugins: [
'Meta'
]
}
});

Quasar.lang.set(Quasar.lang.ru);