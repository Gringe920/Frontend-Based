```Html
<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
<div>Dolorem corrupti commodi veniam quisquam ea quaerat sit.</div>
<div>Nesciunt est ratione omnis ut in eaque illum!</div>
<div>Ex velit distinctio similique delectus odit perspiciatis qui.</div>
<div>Necessitatibus vel porro nulla debitis odio sunt esse.</div>
<div>Dolor eum minima praesentium dicta suscipit eveniet dolorem.</div>
<div>Harum animi placeat cupiditate vel temporibus iste molestiae.</div>
<div>Odio nobis similique quaerat error accusantium aliquid autem.</div>
<div>Quod dolorem tempore eveniet eligendi sequi perspiciatis labore.</div>
<div>Reiciendis debitis ab deleniti nulla enim cumque est?</div>
```

```css
div {
    width: 100px;
    height: auto;
    border: 1px solid red;
    margin: 0;
    padding: 0;
    display: inline-block;
}
```

这是我们实际业务操作中可能会遇到的情况，对元素的`display`设置了`inline-block`属性，会使元素从块元素变成视觉上的“行内元素”，但是我们总是忽略了其中的`space`空间。在一些UI比较严格的公司可能会扣你的细节。下面找到了几种解决方式。


- 通过利用`float：left`，但是会对高度产生影响

```css
div {
    width: 100px;
    height: auto;
    border: 1px solid red;
    margin: 0;
    padding: 0; 
    display: inline-block;
    float: left;
}
```

- 删除HTML中的实际空间

```html
<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div><div>Dolorem corrupti commodi veniam quisquam ea quaerat sit.</div><div>Nesciunt est ratione omnis ut in eaque illum!</div><div>Ex velit distinctio similique delectus odit perspiciatis qui.</div><div>Necessitatibus vel porro nulla debitis odio sunt esse.</div><div>Dolor eum minima praesentium dicta suscipit eveniet dolorem.</div><div>Harum animi placeat cupiditate vel temporibus iste molestiae.</div><div>Odio nobis similique quaerat error accusantium aliquid autem.</div><div>Quod dolorem tempore eveniet eligendi sequi perspiciatis labore.</div><div>Reiciendis debitis ab deleniti nulla enim cumque est?</div>
```

- 对其父元素设置`font-size: 0`，但是这里不能利用那些相对元素单位，比如百分比，em/rem等

```css
div {
    width: 100px;
    height: auto;
    border: 1px solid red;
    margin: 0;
    padding: 0; 
    display: inline-block;
    font-size: 12px;
}
body {
    font-size: 0;
}
```

- 可以使用`margin-left：4px`来消除间隙，可能需要根据父元素的字体大小来调整这个值。
  
```css
  div {
    width: 100px;
    height: auto;
    border: 1px solid red;
    margin: 0;
    padding: 0; 
    display: inline-block;
    font-size: 12px;
    margin-left: 4px;
}
```

- 通过添加html注释解决
  
  ```css
  <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div><!--
  --><div>Dolorem corrupti commodi veniam quisquam ea quaerat sit.</div><div>Nesciunt est ratione omnis ut in eaque illum!</div><!--
  --><div>Dolorem corrupti commodi veniam quisquam ea quaerat sit.</div><div>Nesciunt est ratione omnis ut in eaque illum!</div>
  ```

- 利用`flexbox`来解决
  ```css
  div {
      width: 100px;
      height: auto;
      border: 1px solid red;
      outline: 1px solid blue;
      margin: 0;
      padding: 0; 
      display: inline-block;
  }
  body{
    display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
    display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
    display: -ms-flexbox;      /* TWEENER - IE 10 */
    display: -webkit-flex;     /* NEW - Chrome */
    display: flex;             /* NEW, Spec - Opera 12.1, Firefox 20+ */
  }
  ```


    [参考文档](https://css-tricks.com/fighting-the-space-between-inline-block-elements/)