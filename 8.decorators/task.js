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
    let timeoutId;
    let firstCall = true;
  
    function wrapper(...args) {
      wrapper.allCount++;
      if (firstCall) {
        firstCall = false
        wrapper.count = 1;
        func(...args);
      } 

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        timeoutId = null;
        wrapper.count++;
        func(...args);
      }, delay);
    }

    wrapper.allCount = 0;
    wrapper.count = 0;
  
    return wrapper;
  }