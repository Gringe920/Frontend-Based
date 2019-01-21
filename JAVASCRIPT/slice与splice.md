- slice

> `slice()`方法返回一个新的数组对象，这一对象是一个由 `begin`和 `end`（不包括`end`）决定的原数组的浅拷贝。原始数组不会被改变

  ###### 语法
  
> `arr.slice()`
> `arr.slice(begin)`
> `arr.slice(begin, end)`
> 
```js
var arr = ['apple', 'pag', 'jack', 'tom', 'cherry'];
console.log(arr.slice()) //对原数组进行了浅拷贝 ['apple', 'pag', 'jack', 'tom', 'cherry']
console.log(arr.slice(1)) // ['pag', 'jack', 'tom','cherry']
console.log(arr.slice(1,2)) // ['pag']
console.log(arr.slice(-2))
```

`slice` 做的事情就是要 for 这个数组然后截取返回一个新数组，如果不传参数的话，相当于 copy 了这个数组，所以也经常用来 copy 一个数组

`slice()`方法可以用来讲一个类数组对象/集合转换成一个新数组，你只需将改方法绑定到这个对象上。

```js
function list(){
    return Array.prototype.slice.call(arguments)
}
var lista = list(1, 2, 3) // [1, 2, 3]
console.log(lista)
```

用这串代码来理解`slice()`在上面的实现

```ES6
class ArrayLike {
    constructor(arr){
        this.arr = arr;
    }
    slice(begin, end){
        let newArr = [];
        for(let i = begin; i < end; i++){
            newArr.push(this.arr[i])
        }
        return newArr;
    }
}
const a = new ArrayLike([1, 2, 3]);
console.log(a.slice(0,1)) // 1
const b = {arr: [1, 2, 3]}
console.log(a.slice.call(b, 0, 1)) // 1
const c = {arr: {0:1, 1:2, 2:3}}
console.log(a.slice.call(c, 0, 1)) // 1
```

用`bind`简化上面流程

```js
var unboundSlice = Array.protoType.silce;
var slice = Function.prototype.bind(unboundSlice);

function list(){
    return slice(arguments)
}
var lista = list(1, 2, 3) // [1, 2, 3]
```

- splice
> `splice()`方法通过删除现有元素和/或添加新元素来修改数组,并以数组返回原数组中被修改的内容。

  ###### 语法
> array.splice(start[, deleteCount[, item1[, item2[, ...]]]])


```js
// 从第2位开始删除0个元素，添加n
var arr = [1, 2, 'a', 'b', 'c']
var delectArr = arr.splice(2, 0, 'n')
var delectArr1 = arr.splice(2, -1, 'n')
console.log(delectArr) // []
console.log(delectArr1)// []
console.log(arr) // [ 1, 2, 'n', 'a', 'b', 'c' ]

// 从第3位开始删除1个元素
var arr = [1, 2, 'a', 'b', 'c']
var delectArr = arr.splice(3, 1)
console.log(delectArr) // [ 'b' ]
console.log(arr) //[ 1, 2, 'a', 'c' ]

// 从第3位开始删除所有元素
var arr = [1, 2, 'a', 'b', 'c']
var delectArr = arr.splice(3)
console.log(delectArr) // [ 'b', 'c' ]
console.log(arr) //[ 1, 2, 'a' ]

var arr = [1, 2, 'a', 'b', 'c']
var delectArr = arr.splice(3, 4)
console.log(delectArr) // [ 'b', 'c' ]
console.log(arr) //[ 1, 2, 'a' ]

```