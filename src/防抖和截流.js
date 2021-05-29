/**
 * 防抖 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
 * @param {Function} fn 
 * @param {Number} time 
 * @returns {Function}
 */
export const debounce = (fn, time = 300) => {
  let timer = null
  return (...args) => {
      timer !== null && clearTimeout(timer)
      timer = setTimeout(() => {
          fn.call(this, ...args)
      }, time)
      timer = null
      
  }
}
