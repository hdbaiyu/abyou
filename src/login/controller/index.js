'use strict';

import Base from './base.js';
export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction() {
    //auto render template file index_index.html
    let title = 'login'
    this.assign({
      title:title,
      ip: this.ip()
    })
    const userInfo = await this.session('userInfo')
    if (userInfo) {
      return this.redirect('/admin')
    }
    if(this.isGet()){
      return this.display();
    }

    //这里可以通过post方法获取所有的数据，数据已经在logic里做了校验
    let data = this.post();
    if(think.isEmpty(data)){
      this.status(400)
      return this.fail(400,'data is empty');
    }
    //用户名去匹配数据库中对应的条目
    let promise = await this.model('user').where({username: data.username,password:data.password}).select();
  
    if (promise.length >0 ) {
    //获取到用户信息后，将用户信息写入session
      this.session('userInfo',promise[0].username);
      this.status(200)
      return this.redirect('/admin')

    }
    console.log('post result is fail: ',promise)
    this.status(400)
    return this.fail(400,'password error or username error');

  }

  async logoutAction() {
    this.session()
    return this.redirect('/')
  }
}