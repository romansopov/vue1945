<template>
  <div class="home">
    <form @submit.prevent="sendData">
      <div class="form-control">
        <label for="unit">Воинское подразделение</label>
        <input v-model="unit" id="unit" type="text" />
      </div>
      <div class="form-control">
        <label for="period">Период выборки</label>
        <date-picker
          v-model="period"
          ref="datePicker"
          name="contract_period"
          range
          format="DD-MM-YYYY"
          valueType="format"
          confirm
          width="100%"
        ></date-picker>
      </div>

      <input type="submit" class="send" value="Send" />
      <div id="info">
        {{ info }}
      </div>
      <div id="tableunit">
        <tableunit></tableunit>
      </div>
    </form>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import "vue2-datepicker/locale/ru";
//import axios from "axios";
//import Vuetify from 'vuetify';


import tableunit from "@/components/TableUnit.vue";

export default {
  components: { DatePicker,tableunit },
  data() {
    return {
      //period: [new Date(String('08-01-2019')), new Date(String('08-30-2019'))],
      //period: [new Date(2019, 7, 1), new Date(2019, 7, 30)],
      period: [],
      unit: "2345",
      info: "",
      tableunit: this.tableunit
    };
  },
  methods: {
    sendData() {
      console.log(this.unit, this.period, this.tableunit);
      this.tableunit = "time";
      //this.TableUnit= TableUnit;
/*       axios
        .get("http://localhost:8000/unit/:rdf/:dd")
        .then((response) => (this.info = "response"));
 */        
    },
  },

  mounted() {
    this.$refs.datePicker.currentValue = [
      new Date(String("01-01-1939")),
      new Date(String("12-31-1946")),
    ];
  },
};
</script>

<style>
.form-control {
  padding: 5px;
}
.form-control label {
  display: block;
}
.send {
  margin: 5px;
}
</style>
