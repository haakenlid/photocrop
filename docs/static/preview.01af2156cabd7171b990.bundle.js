(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{583:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();var o=t.round=function(e){return Number(e.toPrecision(4))},a=function(e){return(100*e).toFixed(1)+"%"},i=t.normalize=function(e){var t=e.x,r=e.y,n=e.left,o=e.top,a=e.right,i=e.bottom,s=function(e,t){return e-t},l=[0,0,n,a,1,1].sort(s),u=[0,0,o,i,1,1].sort(s);return{x:[0,t,1].sort(s)[1],y:[0,r,1].sort(s)[1],left:l[2],top:u[2],right:l[3],bottom:u[3]}};t.minsize=function(e){return function(t){var r=t.left,n=t.right,o=t.top,a=t.bottom,s=t.x,l=t.y;if(n-r<e){var u=(r+n)/2;r=u-e/2,n=u+e/2}if(a-o<e){var c=(o+a)/2;o=c-e/2,a=c+e/2}return i({x:s,y:l,left:r,right:n,top:o,bottom:a})}},t.getStyles=function(e,t,r,o){var i=function(e,t,r,o,a,i,s){var l=o-r,u=i-a,c=l/u,f=.5*Math.min(s,1,c>s?l:u*s),d=f/s,g=[2*f>l?[f,(r+o)/2,1-f]:[r+f,e,o-f],2*d>u?[d,(a+i)/2,1-d]:[a+d,t,i-d]].map(function(e){return e.sort(function(e,t){return e-t})[1]}),p=n(g,2),v=p[0],h=p[1];return{left:v-f,right:v+f,top:h-d,bottom:h+d}}(t.x,t.y,t.left,t.right,t.top,t.bottom,o/r),s=i.left,l=i.top,u=i.right,c=i.bottom,f=u-s;return{backgroundImage:'url("'+e+'")',backgroundPosition:[[f,u,1],[c-l,c,1]].map(function(e){return function(e,t,r){return r===e?.5:(t-e)/(r-e)}.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e))}).map(a).join(" "),backgroundRepeat:"no-repeat",backgroundSize:a(1/f)+" auto"}},t.getImageSize=function(e){return new Promise(function(t,r){var n=new Image;n.onload=function(){return t([n.width,n.height])},n.onerror=r,n.src=e})},t.getRelativePosition=function(e){return function(t){var r=e.getBoundingClientRect(),n=r.left,a=r.top,i=r.width,s=r.height;return[(t.clientX-n)/i,(t.clientY-a)/s].map(function(e,t){return function(r){return Math.max(e,Math.min(r,t))}}(0,1)).map(o)}}},758:function(e,t,r){r(249),r(759),e.exports=r(760)},760:function(e,t,r){"use strict";(function(e){var t=r(577),n=r(773);(0,t.configure)(function(){n.keys().forEach(function(e){return n(e)})},e)}).call(this,r(74)(e))},773:function(e,t,r){var n={"./index.stories.js":774};function o(e){var t=a(e);return r(t)}function a(e){var t=n[e];if(!(t+1)){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}return t}o.keys=function(){return Object.keys(n)},o.resolve=a,e.exports=o,o.id=773},774:function(e,t,r){"use strict";(function(e){var t=f(r(1)),n=r(577),o=r(775),a=r(236),i=f(r(780)),s=f(r(791)),l=f(r(792)),u=f(r(793)),c=f(r(794));function f(e){return e&&e.__esModule?e:{default:e}}(0,a.configureActions)({depth:100,limit:10,clearOnStoryChange:!0});var d=function(){return(0,o.select)("Image",{newton:s.default,dragon:l.default,nebuchadnezzar:u.default,urizen:c.default,"no image":"","not found":"404.jpg"},s.default)||void 0},g={x:.5,y:.5,top:.1,bottom:.9,left:.1,right:.9};(0,n.storiesOf)("CropBox",e).addDecorator(o.withKnobs).addDecorator(function(e){return t.default.createElement("div",{style:{height:"100vh"}},e())}).add("crop",function(){return t.default.createElement(i.default,{src:d(),value:(0,o.object)("value",g),onChange:(0,a.action)("onChange"),onChanging:(0,a.action)("onChanging")})}).add("previews",function(){return t.default.createElement(i.default,{src:d(),previews:(0,o.object)("previews",[.5,1,2]),value:(0,o.object)("value",g),onChange:(0,a.action)("onChange"),onChanging:(0,a.action)("onChanging")})})}).call(this,r(74)(e))},780:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=i(r(1)),a=i(r(781));function i(e){return e&&e.__esModule?e:{default:e}}r(786),t.default=function(e){var t=e.src,r=void 0===t?null:t,i=e.size,s=void 0===i?null:i,l=JSON.stringify({src:r,size:s});return o.default.createElement(a.default,n({},e,{key:l}))}},781:function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=d(r(1)),l=r(583),u=d(r(782)),c=d(r(784)),f=d(r(785));function d(e){return e&&e.__esModule?e:{default:e}}var g=function(){return null},p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":n(t))&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.setImageSize=function(){r.setState({size:null}),(0,l.getImageSize)(r.props.src).then(function(e){return r.setState({size:e})}).catch(function(e){return r.setState({error:!0})})},r.state={dragging:null,size:e.size,cropBox:(0,l.normalize)(e.value)},r.elementRef=function(e){return r.element=e},r.imageRef=function(e){return r.getRelativePosition=(0,l.getRelativePosition)(e)},r.onChange=function(){return r.props.onChange(r.state.cropBox)},r.onChanging=function(){return r.props.onChanging(r.state.cropBox)},r.startDragHandleFactory=r.startDragHandleFactory.bind(r),r.eventHandlers={startNewCrop:r.startNewCrop.bind(r),startMoveCross:r.startMoveCross.bind(r),startMoveCropBox:r.startMoveCropBox.bind(r),moveDragHandle:r.moveDragHandle.bind(r),endDragHandle:r.endDragHandle.bind(r)},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":n(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.Component),i(t,[{key:"componentDidMount",value:function(){this.setImageSize()}},{key:"componentDidUpdate",value:function(e){e.value!=this.props.value&&this.setState({cropBox:(0,l.normalize)(this.props.value)})}},{key:"moveDragHandle",value:function(e){var t,r,n=this.state,i=n.cropBox,s=n.dragging,u=n.click;if(s&&e.pointerId==s.pointerId){var c=this.getRelativePosition(e),f=a(c,2),d=f[0],g=f[1],p=(s.dragMask,a(s.initialPosition,2)),v=p[0],h=p[1],y=s.initialCrop,m=i.x,b=i.y,x=i.left,w=i.top,C=i.right,M=i.bottom,I=a(s.dragMask,5),O=I[0],P=I[1],k=I[2],j=I[3],z=I[4],A=d-v,D=g-h;if(z&&(m=d),z&&(b=g),O&&(x=d),P&&(w=g),k&&(C=d),j&&(M=g),O&&k&&P&&j&&(x=y.left+A,w=y.top+D,C=y.right+A,M=y.bottom+D),w>M&&(P=(t=[j,P])[0],j=t[1]),x>C&&(O=(r=[k,O])[0],k=r[1]),u==e.pointerId){if(!(Math.abs(A)+Math.abs(D)>.03))return;this.setState({click:null})}this.setState({dragging:o({},this.state.dragging,{dragMask:[O,P,k,j,z]}),cropBox:(0,l.normalize)({x:m,y:b,left:x,top:w,right:C,bottom:M})}),this.onChanging()}}},{key:"startDragHandleFactory",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"move";return function(n){var o=n.pointerId;t.element.setPointerCapture(o);var a={dragging:{cursor:r,dragMask:e,initialCrop:t.state.cropBox,initialPosition:t.getRelativePosition(n),pointerId:o}};setTimeout(function(){return t.setState(a)})}}},{key:"endDragHandle",value:function(e){var t=this.state,r=t.click,n=t.dragging;if(n&&e.pointerId==n.pointerId){var i=this.state.cropBox;if(r==e.pointerId){var s=this.getRelativePosition(e),u=a(s,2),c=u[0],f=u[1];i=o({},i,{x:c,y:f})}var d={cropBox:(0,l.minsize)(.1)(i),dragging:null,click:null};this.setState(d),this.onChange()}}},{key:"startMoveCropBox",value:function(e){var t=this,r=e.pointerId;this.setState({click:r});setTimeout(function(){return t.state.click==r&&t.setState({click:null})},300),this.startDragHandleFactory([1,1,1,1,0])(e)}},{key:"startMoveCross",value:function(e){this.startDragHandleFactory([0,0,0,0,1])(e)}},{key:"startNewCrop",value:function(e){var t=this.getRelativePosition(e),r=a(t,2),n=r[0],i=r[1],s={left:n,right:n,top:i,bottom:i};this.setState({cropBox:o({},this.state.cropBox,s)}),this.startDragHandleFactory([1,1,0,0,0],"move")(e)}},{key:"render",value:function(){var e=this.props,t=e.src,r=e.previews,n=e.Loader,a=this.state,i=a.error,l=a.size,f=a.dragging,d=a.cropBox,g=o({src:t,size:l,dragging:f,cropBox:d,imageRef:this.imageRef,elementRef:this.elementRef,startDragHandleFactory:this.startDragHandleFactory},this.eventHandlers);return l?s.default.createElement("div",{className:"CropBoxContainer"},r.length>0&&s.default.createElement(c.default,{aspects:r,size:l,src:t,cropBox:d}),s.default.createElement(u.default,g)):s.default.createElement("div",{className:"CropBoxContainer"},i&&s.default.createElement(n,{error:!0}))}}]),t}();p.defaultProps={Loader:function(e){var t=e.error;return s.default.createElement("img",{style:{background:t?"red":"black"},src:f.default})},value:{left:.1,right:.9,top:.1,bottom:.9,x:.5,y:.5},src:f.default,previews:[],onChange:g,onChanging:g},t.default=p},782:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(r(1)),o=a(r(783));function a(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.src,r=e.imageRef,a=e.elementRef,i=(e.error,e.size),s=e.dragging,l=e.cropBox,u=e.moveDragHandle,c=e.endDragHandle,f=e.startNewCrop,d=e.startMoveCross,g=e.startMoveCropBox,p=e.startDragHandleFactory;return n.default.createElement("div",{ref:a,onPointerMove:u,onLostPointerCapture:c,className:"CropBox"},n.default.createElement("svg",{height:"100%",preserveAspectRatio:"xMidYMin",viewBox:"0 0 "+i[0]+" "+i[1]},n.default.createElement("image",{className:"masterImg",xlinkHref:t,ref:r,width:"100%",height:"100%"}),n.default.createElement(o.default,{cropBox:l,size:i,dragging:s,startNewCrop:f,startMoveCross:d,startMoveCropBox:g,startDragHandleFactory:p})))}},783:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=function(e){return e&&e.__esModule?e:{default:e}}(r(1));var i=new Map([["1000","ew-resize"],["0010","ew-resize"],["0100","ns-resize"],["0001","ns-resize"],["1100","nw-resize"],["0110","ne-resize"],["0011","se-resize"],["1001","sw-resize"]]),s=function(e){var t=e.name,r=e.cursor,n=e.startDragHandleFactory,o=t.split("").map(parseFloat);return a.default.createElement("rect",{className:"Handle",onPointerDown:n(o,r),width:1-o[0]-o[2]+.2,height:1-o[1]-o[3]+.2,x:o[2]-.1,y:o[3]-.1,style:{cursor:r}})},l=function(e){var t=e.x,r=e.y;return a.default.createElement("path",{className:"cross",d:"M0, "+r+"H1M"+t+", 0V1"})};t.default=function(e){var t=e.size,r=e.pending,u=e.cropBox,c=e.startDragHandleFactory,f=e.startMoveCross,d=e.startMoveCropBox,g=e.startNewCrop,p=e.dragging,v=u.left,h=u.x,y=u.right,m=u.top,b=u.y,x=u.bottom,w="M"+v+", "+m+"V"+x+"H"+y+"V"+m+"Z",C=p?{cursor:p.cursor}:{};return a.default.createElement("svg",{style:C},a.default.createElement("svg",{className:"Overlay",viewBox:"0 0 1 1",preserveAspectRatio:"none",height:"100%",width:"100%"},a.default.createElement("path",{className:"outside",fillRule:"evenodd",d:"M0, 0H1V1H0Z"+w,onPointerDown:g}),a.default.createElement("g",{className:"inside"+(r?" pending":"")},a.default.createElement("path",{onPointerDown:d,className:"box",d:w}),p?null:a.default.createElement("svg",{className:"handles",viewBox:"0 0 1 1",preserveAspectRatio:"none",height:x-m,width:y-v,x:v,y:m},Array.from(i).map(function(e){var t=o(e,2),r=t[0],n=t[1];return a.default.createElement(s,{key:r,name:r,cursor:n,startDragHandleFactory:c})}))),a.default.createElement("g",{className:"centerPoint"},p?null:a.default.createElement("ellipse",n({className:"Handle",onPointerDown:f,cx:h,cy:b},function(e){return{rx:e,ry:e*t[0]/t[1]||e}}(.05))),a.default.createElement(l,{x:h,y:b}))))}},784:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(e){return e&&e.__esModule?e:{default:e}}(r(1)),a=r(583);var i=function(e){var t=e.src,r=e.cropBox,n=e.size,i=e.aspect,s=e.style,l=void 0===s?{}:s,u=(0,a.getStyles)(t,r,n[0]/n[1],i);u.backgroundPosition,u.backgroundSize;return o.default.createElement("div",{className:"PreviewImg",style:l},o.default.createElement("svg",{style:u,viewBox:"0 0 "+2*i+" 2"}))};t.default=function(e){var t=e.aspects,r=void 0===t?[2]:t,a=e.flexDirection,s=void 0===a?"row":a,l=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["aspects","flexDirection"]),u=Math.min.apply(Math,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(r));return o.default.createElement("div",{className:"CropPreview",key:r,style:{flexDirection:s}},r.map(function(e,t){return o.default.createElement(i,n({key:t,aspect:e,style:{flexGrow:e/u}},l))}))}},785:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjAwcHgiIGhlaWdodD0iNDAwcHgiIHZpZXdCb3g9IjAgMCA2MDAgNDAwIiA+CiAgPHN2ZyB3aWR0aD0iNTAlIiB4PSI1MCUiIG92ZXJmbG93PSJ2aXNpYmxlIiB2aWV3Qm94PSIwIDAgMTAwIDgwIiA+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTAgMCkiIGZpbGw9ImJsYWNrIiBvcGFjaXR5PSIwLjQiPiAKICAgICA8cGF0aCAgZD0ibTAgMHY4MGgxMDB2LTgwem05MS45IDcxLjNoLTgzLjR2LTYyLjZoODMuNHoiLz4KICAgICA8cGF0aCAgZD0ibTU2LjEgMjguOWwtMjAuMyAyMS44LTYuOC0zLTE3LjMgMTguOGg3Ni43bC0yMC4zLTMwLTMuOCAyLjItOC4yLTkuOHoiLz4KICAgICA8Y2lyY2xlIHI9IjcuNSIgY3k9IjI0LjUiIGN4PSIzMi44Ii8+IAogICAgPC9nPgogIDwvc3ZnPgo8L3N2Zz4K"},786:function(e,t,r){var n=r(787);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(789)(n,o);n.locals&&(e.exports=n.locals)},787:function(e,t,r){(e.exports=r(788)(!1)).push([e.i,"body {\n  margin: 0; }\n\n@keyframes marching_ants {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 12; } }\n\n.Overlay .inside.pending .box {\n  animation: marching_ants 0.5s steps(10) infinite;\n  stroke-dasharray: 6; }\n\n.Overlay {\n  touch-action: none;\n  overflow: visible;\n  height: 100%;\n  z-index: 10;\n  shape-rendering: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n  .Overlay path,\n  .Overlay rect,\n  .Overlay ellipse {\n    vector-effect: non-scaling-stroke;\n    fill: transparent; }\n  .Overlay .outside {\n    fill: rgba(0, 0, 0, 0.5); }\n  .Overlay .centerPoint {\n    position: relative; }\n    .Overlay .centerPoint .Handle {\n      cursor: crosshair; }\n      .Overlay .centerPoint .Handle:hover + .cross {\n        stroke: yellow; }\n    .Overlay .centerPoint .cross {\n      pointer-events: none;\n      vector-effect: non-scaling-stroke;\n      stroke: rgba(255, 255, 0, 0.5); }\n  .Overlay .inside .box {\n    stroke: rgba(255, 255, 255, 0.3); }\n  .Overlay .inside:hover .box {\n    stroke: rgba(255, 255, 255, 0.8); }\n  .Overlay .inside.pending .box {\n    stroke: white;\n    stroke-width: 2px; }\n  .Overlay .inside .handles {\n    overflow: visible; }\n  .Overlay .Handle {\n    stroke: blue;\n    stroke-width: 0;\n    fill: red;\n    opacity: 0; }\n    @media (hover: none) {\n      .Overlay .Handle {\n        stroke-width: 1rem; } }\n\n.CropBoxContainer {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%; }\n  .CropBoxContainer .CropBox {\n    display: flex;\n    flex-direction: column; }\n  .CropBoxContainer .CropPreview {\n    flex-shrink: 0;\n    max-height: 50%; }\n\n.CropPreview {\n  display: flex;\n  margin-left: -0.4rem;\n  margin-bottom: 0.4rem; }\n  .CropPreview .PreviewImg {\n    margin-left: 0.4rem; }\n    .CropPreview .PreviewImg > svg {\n      margin: 0 auto;\n      display: block;\n      height: 100%; }\n",""])},791:function(e,t,r){e.exports=r.p+"27d60e6889bf32b93deef9f34b036f75.jpg"},792:function(e,t,r){e.exports=r.p+"24eeeeac275dfaaeda2fb568201201d5.jpg"},793:function(e,t,r){e.exports=r.p+"11f5bb8a6d7d568fb34f2c3565f7bf59.jpg"},794:function(e,t,r){e.exports=r.p+"0021942a19bee31f8ba0dec411e747ac.jpg"}},[[758,3,2]]]);
//# sourceMappingURL=preview.01af2156cabd7171b990.bundle.js.map