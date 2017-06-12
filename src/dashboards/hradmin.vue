<template>
  <md-layout md-align="end">



    <div v-for="widget in widgets" :is="widget.id" :key="widget.id">

    </div>

  </md-layout>
</template>



<script>

import hrpersonsearch from '../widgets/hrpersonsearch.vue'

export default {
  props: ['currentTab'],
  components: {
    hrpersonsearch: hrpersonsearch
  },
  computed: {
    dashboards () {
      return this.$store.getters.dashboardConfig
    }, widgets () {
      var dashboardConfig = this.$store.getters.dashboardConfig
      var dashboard = dashboardConfig.find(dashboard => {
        if (dashboard.id === 'hradmin') {
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
