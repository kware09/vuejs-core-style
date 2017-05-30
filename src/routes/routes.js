import employeeDashboard from '../dashboards/employee.vue'

export const routes = [
  {
    path: '/employee/:currentTab',
    component: employeeDashboard,
    alias: '/',
    props: true
  }
]
