const { createApp, ref, reactive, computed, watch, onMounted, watchEffect, onBeforeUnmount } = Vue;
const { Platform, useQuasar, Loading, Screen } = Quasar;

var vueObject = {
name: 'root',
template:
/*html*/
`
<q-layout view="hHh lpR fFf">
  <q-page-container>

      <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Account settings"
            caption="John Doe"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
    
          <q-expansion-item
            expand-separator
            icon="signal_wifi_off"
            label="Wifi settings"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
    
          <q-expansion-item
            expand-separator
            icon="drafts"
            label="Drafts"
            header-class="text-purple"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
    
          <q-expansion-item icon="assessment" label="Disabled" disable>
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
                commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
                eveniet doloribus ullam aliquid.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>

  </q-page-container>
</q-layout>

`
,
setup() {
let modelc = reactive(model)
const $q = useQuasar()
// $q.screen.setSizes({ sm: 300, md: 600, lg: 1000, xl: 3000 })

onMounted(() => {
//$q.screen.setSizes({ sm: 150, md: 900, lg: 1000, xl: 3000 })
// $q.screen.setDebounce(200)
})

function changeStatus() {
console.log($q.screen.sizes);
// console.log($q.platform.is.desktop)
};

return {
modelc, changeStatus, confirm: ref(), text: ref('some')
}
}
}

const app = Vue.createApp(vueObject);
app.use(Quasar, {
config: {
// screen: {
// bodyClasses: true
// },
notify: { /* look at QuasarConfOptions from the API card */ },
loading: { /* look at QuasarConfOptions from the API card */ },
plugins: [
'Meta'
]
}
});

Quasar.lang.set(Quasar.lang.ru);