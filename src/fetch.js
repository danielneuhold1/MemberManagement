import { apiRequest } from './authConfig'
import { msalInstance } from './index'

export async function bearerToken() {
  const account = msalInstance.getActiveAccount()
  if (!account) {
    throw Error(
      'No active account! Verify a user has been signed in and setActiveAccount has been called.'
    )
  }

  const response = await msalInstance.acquireTokenSilent({
    ...apiRequest,
    account: account,
  })

  return response.accessToken
}

export async function fetchData(endpoint) {
  const token = await bearerToken();
  console.log(token)

  const headers = new Headers()
  const bearer = `Bearer ${token}`

  headers.append('Authorization', bearer)

  const options = {
    method: 'GET',
    headers: headers,
  }

  return fetch(endpoint, options)
    .then(response => response.json())
    .catch(error => console.log(error))
}


/* export const fetchData = (endpoint) => {

  const headers = new Headers();
  headers.append("OData-MaxVersion", "4.0");
	headers.append("OData-Version", "4.0");
	headers.append("Content-Type", "application/json; charset=utf-8");
	headers.append("Accept", "application/json");
	headers.append("Prefer", "odata.include-annotations=*");

  //headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers
  };

  return fetch(endpoint, options)
    .then(response => console.log(response))
    .catch(error => console.log(error));
} */