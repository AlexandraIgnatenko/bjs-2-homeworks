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
    const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
    const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
    
}
