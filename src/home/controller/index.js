'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    const result = await this.model('article').select()
    // console.log('arrtf',Article)
    // let result = 'test'
    this.assign({title:'wello come', result})
    return this.display();
  }
}