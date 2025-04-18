const initialUIState = {
  darkMode: false,
  sidebarCollapsed: false,
};

function uiReducer(state = initialUIState, action) {
  switch (action.type) {
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarCollapsed: !state.sidebarCollapsed };
    default:
      return state;
  }
}

const initialDataState = {
  userActivity: [],
  salesData: [],
  userDemographics: [],
  recentActivity: [],
  loading: false,
  error: null,
};

function dataReducer(state = initialDataState, action) {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, ...action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

const rootReducer = {
  ui: uiReducer,
  data: dataReducer,
};

export default rootReducer;
