"use strict"

function cachingDecoratorNew(func) {
    let cache = [];

    return function(...args) {
        const hash = md5(args);
        let objectInCache = cache.find((objectInCache) => objectInCache.hash === hash);

        if(objectInCache) {
            console.log("Из кэша: " + objectInCache.value);
            return "Из кэша: " + objectInCache.value;
        }

        let value = func(...args);
        cache.push({hash, value});

        if(cache.length > 5) {
            cache.shift();
        }

        console.log("Вычисляем: " + value);
        return "Вычисляем: " + value;
    }
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeout;
    if (timeout === undefined) {
            return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                console.log(func(...args));
                timeoutId = null;
            }, delay);
        }
    } 

    function wrapper(...arg) {
        wrapper.count.push(args);
        return func(...args);
      }
      wrapper.count = 0;
      wrapper.allCount = 0;
      
      return wrapper; 
}
