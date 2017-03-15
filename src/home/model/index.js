'use strict';
/**
 * model
 */
export default class extends think.model.base {
  async articleList (self) {
    return await self.modal('article').limit(10)
  }

}