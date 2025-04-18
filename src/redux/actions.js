export const toggleDarkMode = () => ({
  type: 'TOGGLE_DARK_MODE',
});

export const toggleSidebar = () => ({
  type: 'TOGGLE_SIDEBAR',
});

export const fetchData = () => async (dispatch) => {
  dispatch({ type: 'FETCH_DATA_REQUEST' });
  try {
    // Simulate API call with timeout
    const mockData = {
      userActivity: [
        { date: '2024-01-01', value: 30 },
        { date: '2024-01-02', value: 45 },
        { date: '2024-01-03', value: 28 },
        { date: '2024-01-04', value: 60 },
        { date: '2024-01-05', value: 50 },
      ],
      salesData: [
        { month: 'Jan', sales: 400 },
        { month: 'Feb', sales: 300 },
        { month: 'Mar', sales: 500 },
        { month: 'Apr', sales: 700 },
        { month: 'May', sales: 600 },
      ],
      userDemographics: [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
      ],
      recentActivity: [
        { id: 1, activity: 'User John logged in', time: '2 mins ago' },
        { id: 2, activity: 'User Jane updated settings', time: '10 mins ago' },
        { id: 3, activity: 'New user registered', time: '1 hour ago' },
      ],
    };
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
    dispatch({ type: 'FETCH_DATA_SUCCESS', payload: mockData });
  } catch (error) {
    dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
  }
};
