/* 
* @Author: leeZ
* @Date:   2018-06-13 21:30:19
* @Last Modified by:   leeZ
* @Last Modified time: 2018-06-13 21:54:55
*/

class FastCache {
  constructor() {
    this.list = {}
  }
  set(key, value) {
    this.list[key] = value
  }
  get(key) {
    return this.list[key]
  }
  clean() {
    this.list = {}
  }
}

window.FastCache = FastCache