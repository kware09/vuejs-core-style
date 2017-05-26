<template>
  <div>
    <md-whiteframe md-tag="md-toolbar">
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">People Point</h2>

    </md-whiteframe>

    <md-layout md-align="end" class="viewport">
        <md-layout  md-flex="50">
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
              <md-layout md-flex="33">
                <md-list class="md-flex">

                  <md-list-item>

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
              </md-layout>

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

        <md-layout  md-flex="25">
          <md-whiteframe md-flex class="widget md-flex">
            <md-toolbar>
              <div class="md-toolbar-container">

                <h2 class="md-title" style="flex: 1;">P60</h2>



                <md-button class="md-icon-button">
                  <md-icon>search</md-icon>
                </md-button>

              </div>
            </md-toolbar>

            <hr class="md-divider"></hr>

            <md-list>

              <md-list-item>

                <span>2017</span>

                <md-button class="md-button md-list-action">
                  View
                </md-button>
              </md-list-item>
              <md-divider />
              <md-list-item>

                <span>2016</span>

                <md-button class="md-button md-list-action">
                  View
                </md-button>
              </md-list-item>
              <md-divider />
              <md-list-item>

                <span>2015</span>

                <md-button class="md-button md-list-action">
                  View
                </md-button>
              </md-list-item>

              <md-divider />

              <md-list-item>

                <span>2015</span>

                <md-button class="md-button md-list-action">
                  View
                </md-button>
              </md-list-item>

              <md-divider />

              <md-list-item>

                <span>2015</span>

                <md-button class="md-button md-list-action">
                  View
                </md-button>
              </md-list-item>

              <md-divider />

              <md-list-item>

                <span>2015</span>

                <md-button class="md-button md-list-action">
                  View
                </md-button>
              </md-list-item>

              <md-divider />

            </md-list>
          </md-whiteframe>
        </md-layout>

        <md-layout  md-flex="25">
          <md-whiteframe md-flex class="widget md-flex">
            <md-toolbar>
              <div class="md-toolbar-container">

                <h2 class="md-title" style="flex: 1;">Tax Details</h2>




              </div>
            </md-toolbar>

            <hr class="md-divider"></hr>

            <md-list>

              <md-list-item>

                <span class="key">PPS No</span>

                <span class="value">12344333</span>


              </md-list-item>
              <md-divider />
              <md-list-item>

                <span class="key">PRSI Class</span>

                <span class="value">A1</span>


              </md-list-item>

                <md-divider />
              <md-list-item>

                <span class="key">Tax Credit</span>

                <span class="value">£18,000</span>


              </md-list-item>

              <md-divider />

              <md-list-item>

                <span class="key">Tax Basis</span>

                <span class="value">Cumulative</span>


              </md-list-item>

              <md-divider />

              <md-list-item>

                <span class="key">Cut Off</span>

                <span class="value">£18,000</span>


              </md-list-item>

              <md-divider />

            </md-list>
          </md-whiteframe>
        </md-layout>




    </md-layout>




    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-whiteframe md-tag="md-toolbar" class="md-large">
        <div class="md-toolbar-container">
          <img src="./assets/Arcadia.png" alt="logo" style="margin:auto">
        </div>
      </md-whiteframe>
      <md-list>
       <md-list-item>
         <md-icon>home</md-icon>
         <span>Employee</span>

         <md-list-expand>
           <md-list>
             <md-list-item class="md-inset">Pay</md-list-item>
             <md-list-item class="md-inset">Time</md-list-item>
             <md-list-item class="md-inset">Expenses</md-list-item>
           </md-list>
         </md-list-expand>
       </md-list-item>

       <md-list-item>
         <md-icon>contacts</md-icon>
         <span>Manager</span>

         <md-list-expand>
           <md-list>
             <md-list-item class="md-inset">My Team</md-list-item>
             <md-list-item class="md-inset">Approvals</md-list-item>
           </md-list>
         </md-list-expand>
       </md-list-item>

       <md-list-item>
         <md-icon>monetization_on</md-icon>
         <span>Payroll</span>

         <md-list-expand>
           <md-list>
             <md-list-item class="md-inset">Pay Groups</md-list-item>
             <md-list-item class="md-inset">Mange Payroll</md-list-item>
             <md-list-item class="md-inset">Employees</md-list-item>
             <md-list-item class="md-inset">Enquiry</md-list-item>
             <md-list-item class="md-inset">Settings</md-list-item>
           </md-list>
         </md-list-expand>
       </md-list-item>

       <md-list-item>
         <md-icon>shopping_basket</md-icon>
         <span>Hr Admin</span>

         <md-list-expand>
           <md-list>
             <md-list-item class="md-inset">Command Centre</md-list-item>
             <md-list-item class="md-inset">Search</md-list-item>
             <md-list-item class="md-inset">Settings</md-list-item>
           </md-list>
         </md-list-expand>
       </md-list-item>
     </md-list>
    </md-sidenav>


  </div>
</template>

<script>
export default {
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
