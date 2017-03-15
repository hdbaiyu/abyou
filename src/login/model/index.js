'use strict';
/**
 * model
 */
// export default class extends think.model.base {
  /**
   * author  baiyu
   * date 2017-3-9
   * other user add
   * body {username,password}
   */
  export function addUser(body) {
    if (!body || !body.username) {
      return new Error('not username')
    }
    console.log('body',body)
    // body.hint = new Date().getTime()
    return this.model('use').add(body.config)
  }

// }