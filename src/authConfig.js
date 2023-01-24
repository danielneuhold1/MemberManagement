export const msalConfig = {
    auth: {
      clientId: '7866248b-31ca-43fa-a804-e3e8d10cbe30',
      authority: 'https://login.microsoftonline.com/2a815f0a-87fb-4eb8-8959-4769e390d4e2',
      redirectUri: 'http://localhost:3000/',
    },
    cache: {
      cacheLocation: 'sessionStorage',
      storeAuthStateInCookie: false,
    },
  }
  
  export const apiRequest = {
    url: 'https://hundeschule.api.crm4.dynamics.com/api/data/v9.2/cre56_kurses?$filter=statecode eq 0',
    scopes: ['https://admin.services.crm.dynamics.com/user_impersonation'],
  }