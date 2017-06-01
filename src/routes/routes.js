const employeeDashboard = resolve => require(['../dashboards/employee.vue'], resolve)
const hrAdminDashboard = resolve => require(['../dashboards/hradmin.vue'], resolve)

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
