<template>
  <md-layout  md-flex-medium="100" md-flex-large="25">
    <md-whiteframe md-flex class="widget md-flex">
      <md-toolbar>
        <div class="md-toolbar-container">

          <h2 class="md-title" style="flex: 1;">My Expenses</h2>



          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>

        </div>
      </md-toolbar>

      <hr class="md-divider"></hr>

      <md-list>

        <md-list-item>

          <span>Jan 2017</span>

          <span>410.55</span>

          <md-button class="md-button md-list-action">
            View
          </md-button>
        </md-list-item>
        <md-divider />
        <md-list-item>

          <span>Dec 2016</span>

          <span>410.55</span>

          <md-button class="md-button md-list-action">
            View
          </md-button>
        </md-list-item>
        <md-divider />
      

      </md-list>
    </md-whiteframe>
  </md-layout>
</template>
