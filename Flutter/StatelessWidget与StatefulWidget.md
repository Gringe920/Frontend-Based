# StatelessWidget

继承`Widget`函数，重写了`createElement()`方法。
用于不维护状态的场景，通常在build方法中通过嵌套其他`Widget`来构建UI。

# StatefulWidget

继承`Widget`函数，重写了`createElement()`方法，返回不同的`Element`对象，新增一个`createState()`接口。
一个`StatefulWidget`对应的有`state`类

# state类

## state的生命周期

- initState

每个widget只调用一次，这里可以做一些初始化动作、订阅子树的事件通知

- didChangeDependencies

当state对象的依赖发生变化时候调用的（state对象的依赖是个什么鬼东西 T=T）

- build

用于构建Widget子树的，在`initState`、`didUpdateWidget`、`setState`、`didChangeDependencies`。
还有在移除的情况下会被调用。

- reassemble

在热重载(hot reload)时被调用 

- didUpdateWidget

widget重新构建时，判断是否要重新调用

- deactivate

移除时会调用

- dispose

永久移除时会被调用