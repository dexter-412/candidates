export function debounce(callback, delay: number) {
    let timer
    console.log(2);
    return function() {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback();
        }, delay)
    }()
}