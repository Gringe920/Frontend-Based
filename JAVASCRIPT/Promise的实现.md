```js
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(executor){
    this.status = PENDING;
    this.onFulfilled = [];
    this.onRejected = [];

    function resolve(value){
        if(this.status === PENDING){
            this.status = FULFILLED;
            this.value = value;
            this.onFulfilled.forEach(fn = < fn());
        }
    }

    function reject(reason){
        if(this.status === RENDING){
            this.status = REJECTED;
            this.reason = reason;
            this.onRejected.forEach(fn => fn())
        }
    }

    try{
        executor(resolve, reject);
    }catch(e){
        reject(e)
    }
}


```