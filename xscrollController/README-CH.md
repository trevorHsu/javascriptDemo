## scroll-controller
[English Doc](https://github.com/trevorHsu/javascriptDemo/blob/master/xscrollController/README.md)

### 当竖向滚动条移至顶部或底部时，允许横向滚动

## 安装

使用script标签：
```
<script src="./xscrollController.min.js"></script>
```

## API

### 初始化

```
var wrapperDom = document.querySelector('.wrapper');
var innerDom = document.querySelector('.inner');
var xscrollController = XscrollController(wrapperDom, innerDom);
```

### 实例方法
|方法|说明|需传参数|
|-|-|-|
|setOptions|传入一个选项对象，以更新实例配置<br/> (详细配置请见下文)|是|
|destory|销毁实例|否|

#### 关于“setOptions”传入参数的配置
|名称|描述|类型|默认值|
|-|-|-|-|
|allowXScroll|允许控制横向滚动|Boolean|true|


### 示例
```
// setOptions
xscrollController.setOptions({allowXScroll: false});
```

```
// destory
xscrollController.destory();
```
