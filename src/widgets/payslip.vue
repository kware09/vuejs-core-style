<template>
  <md-layout  md-flex-medium="100" md-flex-large="50">
    <md-whiteframe  class="widget md-flex">
      <md-toolbar>
        <div class="md-toolbar-container">

          <h2 class="md-title" style="flex: 1;">Payslips</h2>

          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>

        </div>
      </md-toolbar>

      <hr class="md-divider"></hr>

      <md-layout md-flex>
          <md-list md-hide-xsmall>

            <md-list-item class="active">

              <span>January 2017</span>
            </md-list-item>
            <md-divider />
            <md-list-item>

              <span>December 2016</span>
            </md-list-item>
            <md-divider />
            <md-list-item>
              <span>November 2016</span>
            </md-list-item>

            <md-divider />
          </md-list>


        <div class="md-flex">
          <md-toolbar>

            <h2 class="md-title" style="flex: 1">Payment Summary</h2>

            <md-button class="md-raised md-accent">
              Full Payslip
            </md-button>
          </md-toolbar>

          <div class="total-earnings">
            <span class="md-subheading">Total Earnings</span>

            <span class="md-subheading figure">£5,234</span>
          </div>

          <div class="total-earnings">
            <span class="md-subheading">Total Deductions</span>

            <span class="md-subheading figure">£1,734</span>
          </div>
          <md-divider />
          <div class="total-earnings">
            <span class="md-title">Net Pay</span>

            <span class="md-title figure">£3,542</span>
          </div>

          <md-divider />

        </div>
      </md-layout>
    </md-whiteframe>
  </md-layout>
</template>
