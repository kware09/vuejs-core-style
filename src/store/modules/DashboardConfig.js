
const state = {
  dashboardConfig: [{
    id: 'employee',
    icon: 'home',
    description: 'Employee Dashboard',
    tabs: [{
      id: 'pay',
      description: 'Pay',
      widgets: [{
        id: 'p60',
        description: 'P60'
      },
      {
        id: 'payslip',
        description: 'Payslips'
      },
      {
        id: 'taxDetails',
        description: 'Tax Details'
      }]
    },
    {
      id: 'expense',
      description: 'Expense',
      widgets: [{
        id: 'expenses',
        description: 'Expenses'
      }]
    }]
  },
  {
    id: 'Manager',
    icon: 'group',
    description: 'Manger Dashboard',
    tabs: [{
      id: 'myteam',
      description: 'My Team',
      widgets: [{
        id: 'myteam',
        description: 'My Team'
      },
      {
        id: 'approvals',
        description: 'Approvals'
      }]
    }]
  }]
}

const mutations = {
  'SET_DASH' (state, dashConfig) {
    state.dashConfig = dashConfig
  }
}

const getters = {
  dashboardConfig: (state) => {
    return state.dashboardConfig
  }
}

export default {
  state,
  mutations,
  getters
}
