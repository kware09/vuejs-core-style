<template>
  <div>
    <md-whiteframe md-tag="md-toolbar">
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">People Point</h2>

    </md-whiteframe>

    <md-layout md-align="end" class="viewport">

      <p60 />

      <payslip />

      <taxDetails />

    </md-layout>




    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-whiteframe md-tag="md-toolbar" class="md-large">
        <div class="md-toolbar-container">
          <img src="./assets/Arcadia.png" alt="logo" style="margin:auto">
        </div>
      </md-whiteframe>
      <md-list>
       <md-list-item v-for="dashboard in dashboards">
         <md-icon>{{dashboard.icon}}</md-icon>
         <span>{{dashboard.description}}</span>

         <md-list-expand>
           <md-list>
             <md-list-item v-for="tab in dashboard.tabs" class="md-inset">{{tab.description}}</md-list-item>
           </md-list>
         </md-list-expand>
       </md-list-item>

     </md-list>
    </md-sidenav>


  </div>
</template>

<script>

import p60 from './widgets/p60.vue'
import payslip from './widgets/payslip.vue'
import taxDetails from './widgets/taxDetails.vue'

export default {
  components: {
    p60: p60,
    payslip: payslip,
    taxDetails: taxDetails
  },
  computed: {
    dashboards () {
      return this.$store.getters.dashboardConfig
    }
  },
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav () {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav () {
      this.$refs.rightSidenav.close()
    },
    open (ref) {
      console.log('Opened: ' + ref)
    },
    close (ref) {
      console.log('Closed: ' + ref)
      console.log('test')
    }
  }
}
</script>

<style lang="scss">

$white: #fff;

body {
  background-image: url(https://s3-eu-west-1.amazonaws.com/craft-web-s3-2617/careers-home-hero.jpg);

  background-size: cover;
}

.active {
  background-color: #ffeb3b;
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;
}
.widget {
  background-color: $white;
  border-left: 8px solid #ffeb3b;
  border-radius: 20px;
  color: black;
  height: 430px;
  margin: 10px;
  opacity: .8;

  .md-toolbar {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  .figure {
    float: right;
  }

  .total-earnings {
    padding: 16px;
  }


  }

</style>
