<template>
  <div>
    <md-whiteframe md-tag="md-toolbar">
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Core Hr</h2>
    </md-whiteframe>




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
