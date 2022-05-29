const { createApp, ref, reactive, computed, watch, onMounted, watchEffect, onBeforeUnmount } = Vue;
const { Platform, useQuasar, Loading, Screen } = Quasar;
<!-- Screen.setSizes({ sm: 300, md: 500, lg: 1500, xl: 2000 }) -->

var vueObject = {
  name: 'root',
  template:
    /*html*/
    `

<!-- <q-list bordered class="rounded-borders bg-grey-10 gt-lg"  separator> -->
  <div class="column fit">

    <!-- <q-list bordered class="rounded-borders bg-grey-10" :dense="$q.screen.lt.xl" separator> -->
    <q-list bordered class="rounded-borders bg-grey-10 column fit" separator>
      <q-expansion-item v-for="item in modelc.addresses" class="column fit" expand-separator icon="place" :label="item.address" expand-icon-toggle :caption="item.status">
  
        <template v-slot:header>
          <q-item-section>
            <div class="column fit items-left">
  
              <!-- <div class="row  fit items-center "> -->
                <q-icon name="place" size="26px" color="grey"></q-icon>
                <q-field dark color="primary" label="Адрес" stack-label borderless :dense="false">
                  {{item.address}}
                </q-field>
              <!-- </div> -->
  
              <!-- </q-item-section> -->
  
              <!-- <q-item-section> -->
              <!-- <div class="row fit items-center"> -->
                <q-icon name="info" size="26px" color="grey"></q-icon>
                <q-field dark color="primary" label="Статус" stack-label borderless :dense="false">
                  {{item.status}}
                </q-field>
              <!-- </div> -->
            </div>
  
          </q-item-section>
  
          <!-- <q-item-section side>
                  <q-btn flat color="primary" icon="verified" @click="confirm = true">Утвердить план</q-btn>
                </q-item-section> -->
        </template>
  
        <position :cAddress='item.address' :cEngineer='item.engineer' cPosition='Инженер'></position>
        <position :cAddress='item.address' :cEngineer='item.measurer' cPosition='Обмерщик'></position>
  
      </q-expansion-item>
    </q-list>
  </div>
  
`
  ,
  setup() {
    let modelc = reactive(model)
    const $q = useQuasar()
    $q.screen.setSizes({ sm: 300, md: 600, lg: 1000, xl: 3000 })

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
    screen: {
      bodyClasses: true // <<< add this
    },
    notify: { /* look at QuasarConfOptions from the API card */ },
    loading: { /* look at QuasarConfOptions from the API card */ },
    plugins: [
      'Meta'
    ]
  }
});

Quasar.lang.set(Quasar.lang.ru);