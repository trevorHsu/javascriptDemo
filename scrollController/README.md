## scroll-controller
### Allowing horizontal scrolling when vertical scroll is moved to top or bottom

## Import

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

### Public Fnction
|Function|Description|Needs Paramerters|
|-|-|-|
|setOptions|pass an options object to update the instance's configuration<br/> (for more configurations plz see below)|Yes|
|despose|destory the instance|No|

#### configurations for "setOptions"
|Name|Description|Type|Default|
|-|-|-|-|
|allowXScroll|enable horizontal scrolling|Boolean|true|


### Example
```
let scrollController = ScrollController(wrapperDom, innerDom);
```

```
// setOptions
scrollController.setOptions({allowXScroll: false});
```

```
// despose
scrollController.despose();
```
