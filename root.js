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

        <!-- <div class="q-pa-md">
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
        </div> -->

    <q-list bordered class="rounded-borders">
      <!-- <q-list bordered class="rounded-borders bg-grey-10" > -->

      <q-expansion-item v-for="item in modelc.addresses" expand-separator icon="place" :label="item.address" expand-icon-toggle :caption="item.status" header-class="mystyle">

        <template v-slot:header class="text-h4">
      <q-item-section >
      <div class="column  items-left q-col-gutter-xl">

        <div class="row  items-center ">
          <q-icon name="place" size="26px" color="grey"></q-icon>
          <q-field dark color="primary" label="Адрес" stack-label borderless :dense="false" >
            {{item.address}}
          </q-field>
        </div>

        <!-- </q-item-section> -->

        <!-- <q-item-section> -->
        <!-- <div class="row items-center">
          <q-icon name="info" size="26px" color="grey"></q-icon>
          <q-field dark color="primary" label="Статус" stack-label borderless :dense="false">
            {{item.status}}
          </q-field>
        </div>
      </div> -->

        </q-item-section>

        <q-item-section side>
            <q-btn flat color="primary" icon="verified" @click="confirm = true">Утвердить план</q-btn>
          </q-item-section>
        <!-- </template> -->

        <!-- <position :cAddress='item.address' :cEngineer='item.engineer' cPosition='Инженер'></position> -->
        <!-- <position :cAddress='item.address' :cEngineer='item.measurer' cPosition='Обмерщик'></position> -->

      </q-expansion-item>

    </q-list>
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