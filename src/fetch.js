export const fetchData = (endpoint) => {

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
}