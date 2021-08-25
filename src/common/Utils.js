/**
 *
 * @param date
 * @param fmt
 * 时间戳格式化:传入data对象与所需要格式fmt
 *
 */
export function formatDate (date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

function padLeftZero (str) {
    return ('00' + str).substr(str.length);
};

/**
 * 防抖函数debounce，减少调用次数
 * @param fn
 * @param delay
 * @returns {(function(): void)|*}
 */
export function debounce(fn, delay) {
    let timer = null;
    return function () {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        },delay)
    }
}