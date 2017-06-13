<template>
<md-layout md-flex>
  <md-whiteframe md-flex class="widget md-flex">
    <md-toolbar class="md-accent">
      <div class="md-toolbar-container">
        <h2 class="md-title" style="flex: 1;">Person Search</h2>
        <md-button class="md-icon-button">
          <md-icon>person_add</md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <hr class="md-divider"></hr>
    <md-list>

      <md-list-item v-for="employee in employees">
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="People">
        </md-avatar>
        <div class="md-list-text-container">
          <span>{{employee.name}}</span>
          <span>{{employee.personnelNo}}</span>
        </div>

        <div class="md-list-text-container">
          <span>{{employee.jobTitle}}</span>
          <span>{{employee.department}}</span>
        </div>

        <div class="md-list-text-container">
          <span>Reports to: {{employee.reportsTo}}</span>
          <span>Start Date: {{employee.startDate}}</span>
        </div>

        <md-menu md-align-trigger>
          <md-button md-menu-trigger>Actions</md-button>

          <md-menu-content>
            <md-menu-item>View Dashboard</md-menu-item>
            <md-menu-item>Amend Salary</md-menu-item>
            <md-menu-item>Update Contracts</md-menu-item>
            <md-menu-item>End Person</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-divider />
      </md-list-item>




    </md-list>
  </md-whiteframe>
</md-layout>
</template>


<script>
export default {
  data() {
    return {
      employees: [{
        name: 'Aine Buckley',
        personelNo: '1002039',
        jobTitle: 'Development Manager',
        department: 'Development',
        reportsTo: 'Dave Welch',
        startDate: '02/Jan/2012'
      }, {
        name: 'Aine Buckley',
        personelNo: '1002039',
        jobTitle: 'Development Manager',
        department: 'Development',
        reportsTo: 'Dave Welch',
        startDate: '02/Jan/2012'
      }, {
        name: 'Aine Buckley',
        personelNo: '1002039',
        jobTitle: 'Development Manager',
        department: 'Development',
        reportsTo: 'Dave Welch',
        startDate: '02/Jan/2012'
      }, {
        name: 'Aine Buckley',
        personelNo: '1002039',
        jobTitle: 'Development Manager',
        department: 'Development',
        reportsTo: 'Dave Welch',
        startDate: '02/Jan/2012'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.widget {
    height: 600px;
}
</style>
