/**
 * Author: Trevor Hsu
 * Email: t-revor@foxmail.com
 */

;((function(name, definition){
    if (typeof module != 'undefined') {
        module.exports = definition();
    } else if(typeof define == 'function' && typeof define.amd == 'object') {
        define(definition);
    } else {
        let globalObj = this || window;
        globalObj[name] = definition();
    }
})('XscrollController', function() {
    function XscrollController (wrapperDom, innerDom, options) {
        let isDOM = ( typeof HTMLElement === 'object' ) ?
                function(obj){
                    return obj instanceof HTMLElement;
                } :
                function(obj){
                    return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
                }
        
        if (!isDOM(wrapperDom) || !isDOM(innerDom)) {
            throw new Error('[XscrollController]: parameters should be DOM Node');
        }
    
        return new XscrollControllerClass(wrapperDom, innerDom, options);
    };

    function XscrollControllerClass (wrapperDom, innerDom, options = {}) {
        let self = this;
        self.wrapperDom = wrapperDom;
        self.innerDom = innerDom;

        function attachProperties(options) {
            self.id = `xscrollController_${Date.now()}`;
            self.setOptions(options);
        }

        function addListeners(wrapperDom) {
            on(wrapperDom, 'mousewheel', mousewheelHandler);
            on(wrapperDom, 'DOMMouseScroll', mousewheelHandler);
        }

        function mousewheelHandler(e) {
            let wrapperDom = self.wrapperDom;
            let innerDom = self.innerDom;
            let maxScrollTop = innerDom.clientHeight - wrapperDom.clientHeight;
            e = e || window.event;

            e.stopPropagation();
            e.cancelBubble = true;

            if ( (wrapperDom.scrollTop < maxScrollTop) && (wrapperDom.scrollTop > 0) ) return; // vertical scroll on middle
        
            let deltaY = scrollDelta(e);
        
            if (self.allowXScroll && wrapperDom.scrollTop === 0 && deltaY < 0) { // vertical scroll on the top
                if (wrapperDom.scrollLeft !== 0) {
                    preventDefault(e);
                    for (let i=0; i<20; i++) wrapperDom.scrollLeft -= 1;
                }
            } else if (self.allowXScroll && wrapperDom.scrollTop === maxScrollTop && deltaY > 0) { // vertical scroll on the bottom
                if (wrapperDom.scrollLeft < innerDom.clientWidth - wrapperDom.clientWidth) {
                    preventDefault(e);
                    for (let i=0; i<20; i++) wrapperDom.scrollLeft += 1;
                }
            }
        }

        self.destory = function() {
            let handler = {
                removeListeners: ()=>{
                    let wrapperDom = self.wrapperDom;

                    if (wrapperDom) {
                        off(wrapperDom, 'mousewheel', mousewheelHandler);
                        off(wrapperDom, 'DOMMouseScroll', mousewheelHandler);
                    }
                },
                clearObjs: ()=>{
                    self.wrapperDom = null;
                    self.innerDom = null;
                },
            };
        
            handler.removeListeners();
            handler.clearObjs();
            handler = null;
        }
    
        attachProperties(options);
        addListeners(wrapperDom);
    }

    XscrollControllerClass.prototype = {
        constructor: XscrollControllerClass,
        setOptions: function(options) {
            let {allowXScroll} = options;
    
            if (allowXScroll === undefined ) {
                this.allowXScroll === undefined && (this.allowXScroll = true);
            } else {
                this.allowXScroll = allowXScroll;
            }
        },
    };

// utils
    function on(dom, event, fn) {
        if (window.addEventListener) {
            dom.addEventListener(event, fn);            
        }
        else if (window.attachEvent) {
            dom.attachEvent("on" + event, fn);            
        }
    }

    function off(dom, event, fn) {
        if (window.addEventListener) {
            dom.removeEventListener(event, fn);            
        }
        else if (window.attachEvent) {
            dom.detachEvent("on" + event, fn);            
        }
    }

    function preventDefault(e) {
        e = e || window.event;
        e.preventDefault(); 
        e.returnValue = false; 
    }

    function scrollDelta(e) {
        e = e || window.event;
        let delta = e.wheelDelta ? -e.wheelDelta : e.detail;

        return delta > 0 ? 1 : (delta < 0 ? -1 : 0);
    }

//
    return XscrollController;
}));
