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

function debounceDecoratorNew(func, delay) {
    let timeout;
    let timeoutId;
  
    function wrapper(...args) {
      wrapper.allCount++;

      if (timeoutId !== undefined) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
            wrapper.count++; 
        }, delay);
      } else {
        wrapper.count = 1;
        func(...args);
      }
    }

    wrapper.allCount = 0;
    wrapper.count = 0;
  
    return wrapper;
  }
