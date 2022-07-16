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
    <q-list bordered class="rounded-borders">
      <q-expansion-item :header-class="item.style" class="shadow-1 overflow-hidden q-my-xs"  style="border-radius: 30px" :dense="true" v-for="item in modelc.addresses" expand-separator icon="place" :label="item.address" expand-icon-toggle :caption="item.status">
        <position :cAddress='item.address' :cEngineer='item.engineer' cPosition='Инженер' :cMeasurer='item.measurer'></position>
        <!-- <position :cAddress='item.address' :cEngineer='item.measurer' cPosition='Обмерщик'></position> -->
      </q-expansion-item>
    </q-list>
</div>
  </q-page-container>
</q-layout>

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
setup() {
let modelc = reactive(model)
const $q = useQuasar()
// $q.screen.setSizes({ sm: 300, md: 500, lg: 1000, xl: 2000 })

function changeStatus() {
// console.log($q.platform.is.desktop)
};

return {
modelc, changeStatus, confirm: ref(), text: ref("wedwedwede")
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