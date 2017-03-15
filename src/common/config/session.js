'use strict';

/**
 * session configs
 */
export default {
  name: 'userInfo',
  type: 'memory',
  secret: '@WFBG9UH',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.RUNTIME_PATH + '/session',
    }
  }
};