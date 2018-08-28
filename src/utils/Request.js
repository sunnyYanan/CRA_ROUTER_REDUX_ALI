function request(url, options) {
  const defaultOptions = {
    credentials: 'include'
  };
  const newOptions = { ...defaultOptions, ...options };
  newOptions.headers = {
    Accept: 'text/html, application/xhtml+xml, application/json, */*',
    'Content-Type': 'application/json; charset=utf-8',
    ...newOptions.headers
  };

  if (newOptions.method === 'POST') {
    if (
      newOptions.headers &&
      newOptions.headers['Content-Type'] &&
      newOptions.headers['Content-Type'].indexOf(
        'application/x-www-form-urlencoded'
      ) >= 0
    ) {
      newOptions.body = Object.keys(newOptions.body)
        .map(key => {
          return (
            encodeURIComponent(key) +
            '=' +
            encodeURIComponent(newOptions.body[key])
          );
        })
        .join('&');
    } else {
      newOptions.body = JSON.stringify(newOptions.body);
    }
  }

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(function(response) {
      console.log('response', response);
      return response.json();
    })
    .then(function(json) {
      console.log('parsed json', json);
      return json;
    })
    .catch(function(ex) {
      console.log('parsing failed', ex);
      return ex;
    });
}

export function HttpGet(url) {
  return request(url);
}
export function HttpPost(url, data) {
  return request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: data
  });
}
export function HttpPostForm(url, data) {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body: data
  });
}
