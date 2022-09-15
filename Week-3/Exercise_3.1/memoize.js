
// memoize function
function memoize(fn) {
  const cache = new Map();

  return function(...args){
    const key = args.toString();

    console.log('fn called with ' + key);
    console.log(cache);

    if(cache.has(key)) {
      return cache.get(key);
    }
    cache.set(key, fn(...args));
    return cache.get(key);
  };
}

// add function
function add(a,b){
  return a+b;
}

// console time function
function time(fn){
  console.time();
  fn();
  console.timeEnd();
  console.log();
}

const addM = memoize(add);

time(() => addM(10, 10));
time(() => addM(10, 10));
time(() => addM(10, 10));
time(() => addM(13, 10));
time(() => addM(13, 10));
time(() => addM(13, 10));
time(() => addM(100, 100));
time(() => addM(100, 100));
time(() => addM(100, 100));