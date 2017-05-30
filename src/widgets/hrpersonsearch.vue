<template>
  <md-layout  md-flex>
    <md-whiteframe md-flex class="widget md-flex">
      <md-toolbar>
        <div class="md-toolbar-container">

          <h2 class="md-title" style="flex: 1;">Person Search</h2>



          <md-button class="md-icon-button">
            <md-icon>person_add</md-icon>
          </md-button>

        </div>
      </md-toolbar>

      <hr class="md-divider"></hr>

      <md-list>

        <md-list-item>
          <md-avatar>
        <img src="https://placeimg.com/40/40/people/1" alt="People">
      </md-avatar>
          <div class="md-list-text-container">
       <span>Aine Buckley</span>
       <span>5000963</span>
     </div>

     <div class="md-list-text-container">
  <span>Developemnt Manager</span>
  <span>Development</span>
</div>

<div class="md-list-text-container">
<span>Reports to Manager</span>
<span>Dave Welch</span>
</div>

          <md-button class="md-button md-list-action">
            Actions
          </md-button>
        </md-list-item>
        <md-divider />



      </md-list>
    </md-whiteframe>
  </md-layout>
</template>

<style lang="scss" scoped>
  .widget{
    height: 600px;
  }
</style>
