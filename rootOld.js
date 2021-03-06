const { createApp, ref, reactive, computed, watch, onMounted, watchEffect, onBeforeUnmount } = Vue;
const { Platform, useQuasar, Loading } = Quasar;

var vueObject = {
  name: 'root',
  template:
    /*html*/
    `
<q-list bordered class="rounded-borders bg-grey-10" separator >
  <q-expansion-item  v-for="item in modelc.addresses" expand-separator icon="place" :label="item.address" expand-icon-toggle :caption="item.status">

    <template v-slot:header>
      <q-item-section>
        <div class="row fit items-center">
          <q-icon name="place" size="26px" color="grey"></q-icon>
          <q-field dark color="primary" label="Адрес" stack-label borderless :dense="false">
            {{item.address}}
          </q-field>
        </div>
      </q-item-section>

      <q-item-section>
        <div class="row fit items-center">
          <q-icon name="info" size="26px" color="grey"></q-icon>
          <q-field dark color="primary" label="Статус" stack-label borderless :dense="false">
            {{item.status}}
          </q-field>
        </div>
      </q-item-section>

      <q-item-section side>
        <q-btn flat color="primary" icon="verified" @click="confirm = true">Утвердить план</q-btn>
      </q-item-section>
    </template>

    <position :cAddress='item.address' :cEngineer='item.engineer' cPosition='Инженер'></position>
    <position :cAddress='item.address' :cEngineer='item.measurer' cPosition='Обмерщик'></position>

  </q-expansion-item>
</q-list>

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
    function changeStatus() {
      // console.log($q.platform.is.desktop)
    };

    return {
      modelc, changeStatus, confirm: ref()
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