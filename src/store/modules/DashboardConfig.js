
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
      },
      {
        id: 'bankDetails',
        description: 'Bank Details'
      }]
    },
    {
      id: 'expense',
      description: 'Expense',
      widgets: [{
        id: 'myExpenses',
        description: 'My Expenses'
      }]
    }]
  },
  {
    id: 'hradmin',
    icon: 'group',
    description: 'HR Admin',
    tabs: [{
      id: 'search',
      description: 'Search',
      widgets: [{
        id: 'hrpersonsearch',
        description: 'Employee Search'
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
