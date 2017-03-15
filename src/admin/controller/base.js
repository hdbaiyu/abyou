'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  /**
   * 前置魔术方法
   * @return {Promise} []
   */
  *__before(){
    let userInfo = yield this.session('userInfo');
    //如果没有登录，则跳转到登录页面
    console.log('userInfo __after', userInfo)
    if(think.isEmpty(userInfo)){
      console.log('isEmpty', userInfo)
      return this.redirect('/login');
    }
    this.assign('userInfo', userInfo)
  }
}
