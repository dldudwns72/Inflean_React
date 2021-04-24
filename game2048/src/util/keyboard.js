import hotkeys from "hotkeys-js";

const observerMap = {};

export function addKeyObserver(key,callback){
    if(!observerMap[key]){
        observerMap[key] = [];
        hotkeys(key,() => {excuteCallbacks(key)});
    }
    observerMap[key.pysh(callback)]
}

export function removeKeyObserver(key,callback){
    observerMap[key] = observerMap[key].filter(item => item !== callback);
}

function excuteCallbacks(key){
    for(const ob of observerMap[key]){
        ob();
    }
}