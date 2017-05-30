<template>
  <md-layout md-align="end" class="viewport">



    <div v-for="widget in widgets" :is="widget.id" :key="widget.id">

    </div>

  </md-layout>
</template>



<script>

import p60 from '../widgets/p60.vue'
import payslip from '../widgets/payslip.vue'
import taxDetails from '../widgets/taxDetails.vue'
import myExpenses from '../widgets/expenses.vue'

export default {
  props: ['currentTab'],
  components: {
    p60: p60,
    payslip: payslip,
    taxDetails: taxDetails,
    myExpenses: myExpenses
  },
  computed: {
    dashboards () {
      return this.$store.getters.dashboardConfig
    }, widgets () {
      var dashboardConfig = this.$store.getters.dashboardConfig
      var dashboard = dashboardConfig.find(dashboard => {
        if (dashboard.id === 'employee') {
          return dashboard
        }
      })
      var tab = dashboard.tabs.find(tab => {
        if (tab.id === this.currentTab) {
          return tab
        }
      })
      return tab.widgets
    }
  }
}
</script>
