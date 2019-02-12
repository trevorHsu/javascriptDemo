## xscroll-controller
[????](https://github.com/trevorHsu/javascriptDemo/blob/master/xscrollController/README-CH.md)

### Allowing horizontal scrolling when vertical scroll is moved to top or bottom

## Install
Using npm:
```
npm install xscroll-controller --save
```

Using a script tag:
```
<script src="./xscrollController.min.js"></script>
```

## API

### Init

```
var wrapperDom = document.querySelector('.wrapper');
var innerDom = document.querySelector('.inner');
var xscrollController = XscrollController(wrapperDom, innerDom);
```

### Instance Functions
|Function|Description|Require Parameters|
|-|-|-|
|setOptions|pass an options object to update the instance's configuration<br/> (for more configurations plz see below)|Yes|
|destory|destory the instance|No|

#### configurations for "setOptions"
|Name|Description|Type|Default|
|-|-|-|-|
|allowXScroll|enable to control horizontal scrolling|Boolean|true|


### Example
```
// setOptions
xscrollController.setOptions({allowXScroll: false});
```

```
// destory
xscrollController.destory();
```
