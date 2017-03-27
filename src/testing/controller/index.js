'use strict'
import http from 'http'

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  indexAction() {
    let target = 'hello'
    console.log('http.query-20',this.http.query)
    if (this.http.query && this.http.query.target) {
      target = this.http.query.target
    }
    this.assign({target})
    this.display()
  }
}