import httpClient from './httpClient'

// see the documentation for request config object
// https://github.com/axios/axios#request-config
const baseService = {
  item: {
    load(config) {
      // {params: {uid: ....}}
      return httpClient.get('/load', config)
    },
    save(data, config) {
      // data is stringified JSON {...}
      let cfg = config || {};
      cfg.headers = {
        // in case of JSON axios DOES NOT ALLOW to specify a charset, even if it is UTF-8.
        // this would result in broken POST requests (empty body, but data in one of the
        // request params keys)
        'Content-Type': 'application/json'
      };
      return httpClient.post('/save', data, config)
    },
    show(config) {
      return httpClient.get('/show', config)
    },
  },
};

export default baseService;