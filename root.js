const { createApp, ref, reactive, computed, watch } = Vue;
const { Platform, useQuasar, copyToClipboard } = Quasar;

var vueObject = {
  name: 'root',
  template:
    /*html*/
    `
<q-layout view="hHh lpR fFf">
  <q-page-container >
    <q-toggle v-model="expanded" :label="expanded_text" class="q-mb-md"></q-toggle>

    <q-list bordered >

      <div v-for="item in modelc.addresses" class="q-mb-xs"  >

        <!-- <q-expansion-item v-model="expanded_model[item.address]" :header-class="item.style" expand-icon-toggle class="shadow-3 overflow-hidden q-my-xs" style="border-radius: 20px" :dense="true" v-for="item in modelc.addresses" icon="place" :label="item.address" :caption="item.status"> -->
        <!-- <q-slide-item @right="onRight();curAddress = item.address" right-color="green" style="background-color: tranparent"> -->
        <q-slide-item @right="opt => onRight(opt, item.address)" right-color="green" style="background-color: tranparent">
          
          <template v-slot:right>
            <div class="row items-center" font-style="black">
              <q-icon right name="done"></q-icon>
              УТВЕРДИТЬ
            </div>
          </template>

          <q-expansion-item v-model="expanded_model[item.address]" :header-class="item.style" class="shadow-3 overflow-hidden" style="border-radius: 0px" icon="place" :label="item.address" :caption="item.status">

            <template v-slot:header>

              <div class="column fit no-wrap">

                <div class="row fit no-wrap content-start">

                  <q-avatar icon="place" size="md" @click="clip(item.address);showing=true"></q-avatar>
                  <q-item-section>
                    <!-- <q-scroll-area fit no-wrap style="height:20px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis" :visible="false"> -->
                    {{item.address}}
                    <!-- </q-scroll-area> -->
                  </q-item-section>
                  <!-- <q-btn round color="primary" icon="verified" @click="clip(item.address)"></q-btn> -->
                </div>

                <q-separator inset />

                <div class="row fit content-start">
                  <q-avatar icon="warning" size="md"></q-avatar>
                  <q-item-section style="font-size: smaller">
                    {{item.status}}
                  </q-item-section>
                </div>

              </div>

            </template>

            <position :cAddress='item.address' :cEngineer='item.engineer' cPosition='Инженер' :cMeasurer='item.measurer'></position>

          </q-expansion-item>

        </q-slide-item>

      </div>

      <!-- <q-item-section side>
      <q-btn flat color="primary" icon="verified" @click="confirm=true">Утвердить</q-btn>
      </q-item-section> -->

    </q-list>

  <q-dialog v-model="confirm" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="contact_support" color="primary" text-color="white" />
        <span class="q-ml-sm">Вы уверены?</span>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Да" color="primary" v-close-popup @click="changeStatus"></q-btn>
        <q-btn flat label="Нет" color="primary" v-close-popup></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>

  </q-page-container>
  <!-- <q-tooltip v-model="showing" :no-parent-event="true" :transition-duration=500>{{addr}}</q-tooltip> -->
</q-layout>
`
  ,
  setup() {
    let modelc = reactive(model)
    const $q = useQuasar()

    let expanded = ref(false);
    let expanded_model = ref({});
    let expanded_text = ref('Развернуть все');
    let showing = ref(false);
    let confirm = ref(false);
    let curAddress = ref('');

    function clip(text) {
      copyToClipboard(text);
      $q.notify('Адрес скопирован');
    }

    function hideTooltip() {
      showing.value = false
    }

    function finalize(reset) {
      timer = setTimeout(() => {
        reset()
      }, 1000)
    }

    function changeStatus() {
      console.log(curAddress);
      $q.notify('Статус объекта изменен');
    };

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
      showing,
      addr: ref(''),
      confirm,
      expanded,
      expanded_model,
      expanded_text,
      curAddress,
      clip,
      changeStatus,
      onRight({ reset }, address) {
        curAddress.value = address;
        confirm.value = true;
        finalize(reset)
      },
      finalize
    }
  }
}

const app = Vue.createApp(vueObject);
app.use(Quasar, {
  config: {
    notify: { timeout : 500 },
    loading: { /* look at QuasarConfOptions from the API card */ },
    plugins: ['Meta']
  }
});

Quasar.lang.set(Quasar.lang.ru);