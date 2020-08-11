export function debounce(fn, delay) {
    let timer = null;
    let self = this;
    return function (...args) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(self, args);
            console.log(1);
        }, delay);
    };
}
