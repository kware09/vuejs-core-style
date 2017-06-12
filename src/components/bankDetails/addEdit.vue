<template>
  <div class='fullscreen'>
    <md-toolbar>
      <md-button v-on:click.native="goBack" class="md-icon-button">
        <md-icon>keyboard_backspace</md-icon>
      </md-button>

      <h2 class="md-title" style="flex: 1">{{action}} Bank Details</h2>

    </md-toolbar>

    Form to add/edit bank details
  </div>
</template>

<script>
export default {

  props: ['action'],
  methods: { goBack (mode) {
    this.$router.go(-1)
  }

  }
}
</script>

<style lang="scss">
  .fullscreen {
    background-color: white;
    height: 100%;
  }
</style>
