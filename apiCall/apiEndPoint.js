const API_BASE_URL = "https://sattamatka-nu.vercel.app";

const apiEndPoint = Object.freeze({
  //all users
  userRegister: `${API_BASE_URL}/api/auth/user`,
  userLogin: `${API_BASE_URL}/api/auth/login`,
  getUserId: (id) => `api/auth/user?id=${id}`,
  getUserAll: (skip, limit, type) =>
    `/api/auth/user?skip=${skip}&limit=${limit}&type=${type}`,

  //market
  getMarket: `${API_BASE_URL}/api/market`,

  //bet
  bet: `/api/bet`,
  getBet: (skip, limit) => `/api/bet?skip=${skip}&limit=${limit}`,
  getBetId: (id) => `/api/bet?id=${id}`,
  getBetIdUser: (skip, limit, customerId) =>
    `/api/bet?skip=${skip}&limit=${limit}&customerId=${customerId}`,

  //club
  getClub: `${API_BASE_URL}/api/club`,
  getClubId: (id) => `/api/club?id=${id}`,

  //panelChart
  getPanelChart: (id) => `/api/panelchart?id=${id}`,

  //cronjob
  activeCron: `${API_BASE_URL}/api/cron`,

  //request
  request: `/api/request`,
  getReqCustomerId: (skip, limit, id) =>
    `/api/request?skip=${skip}&limit=${limit}&customerId=${id}`,

  //siteSeting
  siteSeting: `/api/siteSetting`,

  //verify token
  verifyToken: `/api/auth/verifytoken`,
});

module.exports = { apiEndPoint };
