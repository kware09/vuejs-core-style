<template>
<div>
  <md-whiteframe md-tag="md-toolbar">
    <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title">Core HR</h2>

  </md-whiteframe>


  <div class="viewport" :style="{ height: fullHeight+'px' }">
    <router-view></router-view>

  </div>


  <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
    <md-whiteframe md-tag="md-toolbar" class="md-large">
      <div class="md-toolbar-container">
        <img src="./assets/Arcadia.png" alt="logo" style="margin:auto">
      </div>
    </md-whiteframe>
    <md-list>
      <router-link tag="md-list-item" :to="'/'+dashboard.id" v-for="dashboard in dashboards" active-class='active-side-nav'>

        <md-icon>{{dashboard.icon}}</md-icon>
        <span>{{dashboard.description}}</span>

        <md-list-expand>
          <md-list>

            <md-list-item v-for="tab in dashboard.tabs" class="md-inset">
              <router-link :to="'/'+dashboard.id+'/'+tab.id" active-class='active-side-nav'>{{tab.description}}</router-link>
            </md-list-item>

          </md-list>
        </md-list-expand>
      </router-link>

    </md-list>
  </md-sidenav>


</div>
</template>

<script>
export default {
  computed: {
    dashboards() {
      return this.$store.getters.dashboardConfig
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  data() {
    return {
      fullHeight: document.documentElement.clientHeight - 64
    }
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close()
    },
    open(ref) {
      console.log('Opened: ' + ref)
    },
    close(ref) {
      console.log('Closed: ' + ref)
      console.log('test')
    },
    handleResize(event) {
      this.fullHeight = document.documentElement.clientHeight - 64
    }
  }
}
</script>

<style lang="scss">
$white: #fff;

.viewport {
    overflow-y: scroll;
}

body {
    background-image: url('./assets/grey.jpg');
    background-size: cover;

}

.active-side-nav {
    color: #2196f3;

}

.active {
    background-color: #2196f3;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
}

.widget {
    background-color: $white;
    border-left: 8px solid #2196f3;
    height: 430px;
    border-radius: 20px;
    color: black;
    margin: 10px;
    opacity: 0.9;

    .widget-list {
        margin: auto;

        border-radius: 20px;
        height: 360px;
        overflow-y: scroll;
    }
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

.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
    from {
        transform: translateY(-30px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
@keyframes slide-out {
    from {
        transform: translateY(0px);
        opacity: 1;
    }
    to {
        transform: translateY(-30px);
        opacity: 0;
    }
}
</style>
