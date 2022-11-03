import { getBaseUrl } from './base-url';

const baseUrl = (url) => {
  return getBaseUrl() + url;
}

const onSuccess = (resp) => {
  return resp.json();
}

const onError = (err) => {
  // eslint-disable-next-line no-console
  console.log(err);
}

export const get = (url) => {
  return fetch(baseUrl(url)).then(onSuccess, onError);
}

export const del = (url) => {
  const request = new Request(baseUrl(url), {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError)
}
