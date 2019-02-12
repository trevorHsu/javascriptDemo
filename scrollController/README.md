## scroll-controller
[中文文档](https://github.com/trevorHsu/javascriptDemo/blob/master/scrollController/README-CH.md)

### Allowing horizontal scrolling when vertical scroll is moved to top or bottom

## Install

Using a script tag:
```
<script src="./scrollController.min.js"></script>
```

## API

### Init

```
var wrapperDom = document.querySelector('.wrapper');
var innerDom = document.querySelector('.inner');
var scrollController = ScrollController(wrapperDom, innerDom);
```

### Instance Functions
|Function|Description|Requires Parameters|
|-|-|-|
|setOptions|pass an options object to update the instance's configuration<br/> (for more configurations plz see below)|Yes|
|destory|destory the instance|No|

#### configurations for "setOptions"
|Name|Description|Type|Default|
|-|-|-|-|
|allowXScroll|enable to control horizontal scrolling|Boolean|true|


### Example
```
var scrollController = ScrollController(wrapperDom, innerDom);
```

```
// setOptions
scrollController.setOptions({allowXScroll: false});
```

```
// destory
scrollController.destory();
```
