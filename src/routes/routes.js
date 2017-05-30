import employeeDashboard from '../dashboards/employee.vue'
import hrAdminDashboard from '../dashboards/hradmin.vue'

export const routes = [
  {
    path: '/employee/:currentTab',
    component: employeeDashboard,
    props: true
  },
  {
    path: '/hradmin/:currentTab',
    component: hrAdminDashboard,
    props: true
  }
]
