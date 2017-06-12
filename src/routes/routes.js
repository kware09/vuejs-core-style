const employeeDashboard = resolve => require(['../dashboards/employee.vue'], resolve)
const hrAdminDashboard = resolve => require(['../dashboards/hradmin.vue'], resolve)
const bankDetailsAddEdit = resolve => require(['../components/bankDetails/addEdit.vue'], resolve)

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
  },
  {
    path: '/bankDetails/:action',
    component: bankDetailsAddEdit,
    props: true
  },
  {
    path: '*',
    redirect: '/employee/pay',
    component: hrAdminDashboard,
    props: true
  }
]
