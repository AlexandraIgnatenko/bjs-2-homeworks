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
  
    function wrapper(...args) {
      wrapper.allCount++;
      
      if (wrapper.allCount === 1) {
        wrapper.count++
        func(...args);
      } 

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        wrapper.count++;
        func(...args);
      }, delay);
    }

    wrapper.allCount = 0;
    wrapper.count = 0;
  
    return wrapper;
  }