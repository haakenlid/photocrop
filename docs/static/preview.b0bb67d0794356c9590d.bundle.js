(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{516:function(e,t,n){e.exports=n.p+"static/media/blake_newton.27d60e68.jpg"},517:function(e,t,n){"use strict";var r=n(3),o=n.n(r),a=n(24),i=n.n(a),s=n(11),c=n.n(s),l=n(4),u=n.n(l),d=n(5),p=n.n(d),m=n(6),g=n.n(m),f=n(7),v=n.n(f),h=n(0),x=n.n(h),y=n(140),b=n.n(y),C=n(69),w=n.n(C),k=function(e){return+e.toPrecision(4)},_=function(e){return(100*e).toFixed(1)+"%"},E=function(e){var t=e.x,n=e.y,r=e.left,o=e.top,a=e.right,i=e.bottom,s=function(e,t){return e-t},c=[0,0,r,a,1,1].sort(s),l=[0,0,o,i,1,1].sort(s);return{x:[0,t,1].sort(s)[1],y:[0,n,1].sort(s)[1],left:c[2],top:l[2],right:c[3],bottom:l[3]}},O=function(e,t,n,r){var o=function(e,t,n,r,o,a,s){var c=r-n,l=a-o,u=.5*Math.min(s,1,c/l>s?c:l*s),d=u/s,p=[2*u>c?[u,(n+r)/2,1-u]:[n+u,e,r-u],2*d>l?[d,(o+a)/2,1-d]:[o+d,t,a-d]].map(function(e){return e.sort(function(e,t){return e-t})[1]}),m=i()(p,2),g=m[0],f=m[1];return{left:g-u,right:g+u,top:f-d,bottom:f+d}}(t.x,t.y,t.left,t.right,t.top,t.bottom,r/n),a=o.left,s=o.top,c=o.right,l=o.bottom,u=c-a;return{backgroundImage:'url("'+e+'")',backgroundPosition:[[u,c,1],[l-s,l,1]].map(function(e){return function(e,t,n){return n===e?.5:(t-e)/(n-e)}.apply(void 0,w()(e))}).map(_).join(" "),backgroundRepeat:"no-repeat",backgroundSize:_(1/u)+" auto"}},S=function(e){return new b.a(function(t,n){var r=new Image;r.onload=function(){return t([r.width,r.height])},r.onerror=n,r.src=e})},P=function(e){return function(t){var n=e.getBoundingClientRect(),r=n.left,o=n.top,a=n.width,i=n.height;return[(t.clientX-r)/a,(t.clientY-o)/i].map(function(e,t){return function(n){return Math.max(e,Math.min(n,t))}}(0,1)).map(k)}},B=n(131),D=n.n(B),H=n(141),R=new(n.n(H).a)([["1000","ew-resize"],["0010","ew-resize"],["0100","ns-resize"],["0001","ns-resize"],["1100","nw-resize"],["0110","ne-resize"],["0011","se-resize"],["1001","sw-resize"]]),z=function(e){var t=e.name,n=e.cursor,r=e.startDragHandleFactory,o=t.split("").map(parseFloat);return x.a.createElement("rect",{className:"Handle",onPointerDown:r(o,n),width:1-o[0]-o[2]+.2,height:1-o[1]-o[3]+.2,x:o[2]-.1,y:o[3]-.1,style:{cursor:n}})},M=function(e){var t=e.x,n=e.y;return x.a.createElement("path",{className:"cross",d:"M0, "+n+"H1M"+t+", 0V1"})},N=function(e){var t=e.size,n=e.pending,r=e.crop_box,a=e.startDragHandleFactory,s=e.startMoveCross,c=e.startMoveCropBox,l=e.startNewCrop,u=e.dragging,d=r.left,p=r.x,m=r.right,g=r.top,f=r.y,v=r.bottom,h="M"+d+", "+g+"V"+v+"H"+m+"V"+g+"Z",y=u?{cursor:u.cursor}:{};return x.a.createElement("svg",{style:y},x.a.createElement("svg",{className:"Overlay",viewBox:"0 0 1 1",preserveAspectRatio:"none",height:"100%",width:"100%"},x.a.createElement("path",{className:"outside",fillRule:"evenodd",d:"M0, 0H1V1H0Z"+h,onPointerDown:l}),x.a.createElement("g",{className:"inside"+(n?" pending":"")},x.a.createElement("path",{onPointerDown:c,className:"box",d:h}),u?null:x.a.createElement("svg",{className:"handles",viewBox:"0 0 1 1",preserveAspectRatio:"none",height:v-g,width:m-d,x:d,y:g},D()(R).map(function(e){var t=i()(e,2),n=t[0],r=t[1];return x.a.createElement(z,{key:n,name:n,cursor:r,startDragHandleFactory:a})}))),x.a.createElement("g",{className:"centerPoint"},u?null:x.a.createElement("ellipse",o()({className:"Handle",onPointerDown:s,cx:p,cy:f},function(e){return{rx:e,ry:e*t[0]/t[1]||e}}(.05))),x.a.createElement(M,{x:p,y:f}))))},I=N;N.__docgenInfo={description:"",methods:[],displayName:"Overlay"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Overlay.js"]={name:"Overlay",docgenInfo:N.__docgenInfo,path:"src/components/Overlay.js"});var j=function(e){var t=e.src,n=e.imageRef,r=e.elementRef,o=(e.error,e.size),a=e.dragging,i=e.crop_box,s=e.moveDragHandle,c=e.endDragHandle,l=e.startNewCrop,u=e.startMoveCross,d=e.startMoveCropBox,p=e.startDragHandleFactory;return x.a.createElement("div",{ref:r,onPointerMove:s,onPointerUp:c,onLostPointerCapture:c,className:"CropBox"},x.a.createElement("svg",{height:"100%",preserveAspectRatio:"xMidYMin",viewBox:"0 0 "+o[0]+" "+o[1]},x.a.createElement("image",{className:"masterImg",xlinkHref:t,ref:n,width:"100%",height:"100%"}),x.a.createElement(I,{crop_box:i,size:o,dragging:a,startNewCrop:l,startMoveCross:u,startMoveCropBox:d,startDragHandleFactory:p})))},A=j;j.__docgenInfo={description:"",methods:[],displayName:"CropBox"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CropBox.js"]={name:"CropBox",docgenInfo:j.__docgenInfo,path:"src/components/CropBox.js"});var T=n(34),F=n.n(T),L=function(e){var t=e.src,n=e.crop_box,r=e.size,o=e.aspect,a=e.style,i=void 0===a?{}:a,s=O(t,n,r[0]/r[1],o);s.backgroundPosition,s.backgroundSize;return x.a.createElement("div",{className:"PreviewImg",style:i},x.a.createElement("svg",{style:s,viewBox:"0 0 "+2*o+" 2"}))},V=function(e){var t=e.aspects,n=void 0===t?[2]:t,r=e.flexDirection,a=void 0===r?"row":r,i=F()(e,["aspects","flexDirection"]);return x.a.createElement("div",{className:"CropPreview",style:{flexDirection:a}},n.map(function(e,t){return x.a.createElement(L,o()({key:t,aspect:e,style:{flex:"row"===a?e:1/e}},i))}))},Y=V;V.__docgenInfo={description:"",methods:[],displayName:"CropPreview",props:{aspects:{defaultValue:{value:"[2]",computed:!1},required:!1},flexDirection:{defaultValue:{value:"'row'",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CropPreview.js"]={name:"CropPreview",docgenInfo:V.__docgenInfo,path:"src/components/CropPreview.js"});var K=n(698),q=n.n(K),J=JSON.parse(q.a),U=function(e){function t(e){u()(this,t);var n=g()(this,(t.__proto__||c()(t)).call(this,e));return n.setImageSize=function(){n.setState({size:null}),S(n.props.src).then(function(e){return n.setState({size:e})}).catch(function(){return n.setState({error:!0})})},n.state={dragging:null,crop_box:e.crop_box,click:!1},n.elementRef=function(e){return n.element=e},n.imageRef=function(e){return n.getRelativePosition=P(e)},n.startDragHandleFactory=n.startDragHandleFactory.bind(n),n.eventHandlers={startNewCrop:n.startNewCrop.bind(n),startMoveCross:n.startMoveCross.bind(n),startMoveCropBox:n.startMoveCropBox.bind(n),moveDragHandle:n.moveDragHandle.bind(n),endDragHandle:n.endDragHandle.bind(n)},n}return v()(t,e),p()(t,[{key:"componentDidMount",value:function(){this.setImageSize()}},{key:"componentDidUpdate",value:function(e){e.src!=this.props.src&&this.setImageSize()}},{key:"startNewCrop",value:function(e){this.element.setPointerCapture(e.pointerId);var t=this.getRelativePosition(e),n=i()(t,2),r=n[0],a=n[1],s=this.state.crop_box;this.setState({crop_box:o()({},s,{left:r,top:a,right:r,bottom:a}),dragging:{cursor:"move",dragMask:[1,1,0,0,0],initialPosition:[r,a],initialCrop:s}})}},{key:"moveDragHandle",value:function(e){var t,n,r=Math.abs,a=this.state,s=a.click,c=a.crop_box,l=a.dragging;if(l){var u=this.getRelativePosition(e),d=i()(u,2),p=d[0],m=d[1],g=(l.dragMask,i()(l.initialPosition,2)),f=g[0],v=g[1],h=l.initialCrop,x=c.x,y=c.y,b=c.left,C=c.top,w=c.right,k=c.bottom,_=i()(l.dragMask,5),O=_[0],S=_[1],P=_[2],B=_[3],D=_[4],H=p-f,R=m-v;if(D&&(x=p),D&&(y=m),O&&(b=p),S&&(C=m),P&&(w=p),B&&(k=m),O&&P&&S&&B&&(b=h.left+H,C=h.top+R,w=h.right+H,k=h.bottom+R),C>k&&(S=(t=[B,S])[0],B=t[1]),b>w&&(O=(n=[P,O])[0],P=n[1]),s){if(!(.05<r(H)+r(R)))return;this.setState({click:!1})}this.setState({dragging:o()({},this.state.dragging,{dragMask:[O,S,P,B,D]}),crop_box:E({x:x,y:y,left:b,top:C,right:w,bottom:k})})}}},{key:"startDragHandleFactory",value:function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"move";return function(r){t.element.setPointerCapture(r.pointerId);var o={dragging:{cursor:n,dragMask:e,initialCrop:t.state.crop_box,initialPosition:t.getRelativePosition(r)}};setTimeout(function(){return t.setState(o)},0)}}},{key:"startMoveCropBox",value:function(e){var t=this;this.startDragHandleFactory([1,1,1,1,0])(e),this.setState({click:!0}),setTimeout(function(){return t.setState({click:!1})},200)}},{key:"startMoveCross",value:function(e){this.startDragHandleFactory([0,0,0,0,1])(e)}},{key:"endDragHandle",value:function(){var e=this.state,t=e.click,n=e.crop_box,r=e.dragging;if(r){var a;if(t){var s=r.initialCrop,c=i()(r.initialPosition,2),l=c[0],u=c[1];a=o()({},s,{x:l,y:u})}else a=function(e){return function(t){var n=t.left,r=t.right,o=t.top,a=t.bottom,i=t.x,s=t.y;if(r-n<e){var c=(n+r)/2;n=c-e/2,r=c+e/2}if(a-o<e){var l=(o+a)/2;o=l-e/2,a=l+e/2}return E({x:i,y:s,left:n,right:r,top:o,bottom:a})}}(.1)(n);this.setState({crop_box:a,dragging:null,click:!1})}}},{key:"render",value:function(){var e=this.props,t=e.src,n=e.previews,r=e.Loader,a=this.state,i=a.error,s=a.size,c=a.dragging,l=a.crop_box,u=o()({src:t,size:s,dragging:c,crop_box:l,imageRef:this.imageRef,elementRef:this.elementRef,startDragHandleFactory:this.startDragHandleFactory},this.eventHandlers);return s?x.a.createElement("div",{className:"CropBoxContainer"},0<n.length&&x.a.createElement(Y,{aspects:n,size:s,src:t,crop_box:l}),x.a.createElement(A,u)):x.a.createElement("div",{className:"CropBoxContainer"},i?x.a.createElement(r,{error:!0}):x.a.createElement(r,null))}}]),t}(x.a.Component);U.defaultProps={Loader:function(e){var t=e.error;return x.a.createElement("img",{style:{background:t?"red":"black"},src:J})},crop_box:{left:.1,right:.9,top:.1,bottom:.9,x:.5,y:.5},src:J,previews:[]};var W=U;U.__docgenInfo={description:"",methods:[{name:"setImageSize",docblock:null,modifiers:[],params:[],returns:null},{name:"startNewCrop",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"moveDragHandle",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"startDragHandleFactory",docblock:null,modifiers:[],params:[{name:"dragMask",type:null},{name:"cursor",type:null}],returns:null},{name:"startMoveCropBox",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"startMoveCross",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null},{name:"endDragHandle",docblock:null,modifiers:[],params:[{name:"e",type:null}],returns:null}],displayName:"CropBoxWrapper",props:{Loader:{defaultValue:{value:"({ error }) => (\n  <img style={{ background: error ? 'red' : 'black' }} src={placeholder} />\n)",computed:!1},required:!1},crop_box:{defaultValue:{value:"{\n  left: 0.1,\n  right: 0.9,\n  top: 0.1,\n  bottom: 0.9,\n  x: 0.5,\n  y: 0.5,\n}",computed:!1},required:!1},src:{defaultValue:{value:"JSON.parse(p)",computed:!0},required:!1},previews:{defaultValue:{value:"[]",computed:!1},required:!1}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/CropBoxContainer.js"]={name:"CropBoxWrapper",docgenInfo:U.__docgenInfo,path:"src/components/CropBoxContainer.js"});n(722),t.a=W},698:function(e,t){e.exports="\"data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='600px' height='400px' viewBox='0 0 600 400' %3E %3Csvg width='50%25' x='50%25' overflow='visible' viewBox='0 0 100 80' %3E %3Cg transform='translate(-50 0)' fill='black' opacity='0.4'%3E %3Cpath d='m0 0v80h100v-80zm91.9 71.3h-83.4v-62.6h83.4z'/%3E %3Cpath d='m56.1 28.9l-20.3 21.8-6.8-3-17.3 18.8h76.7l-20.3-30-3.8 2.2-8.2-9.8z'/%3E %3Ccircle r='7.5' cy='24.5' cx='32.8'/%3E %3C/g%3E %3C/svg%3E %3C/svg%3E\""},699:function(e,t,n){e.exports=n.p+"static/media/dragon.24eeeeac.jpg"},700:function(e,t,n){e.exports=n.p+"static/media/nebuchadnezzar.11f5bb8a.jpg"},701:function(e,t,n){e.exports=n.p+"static/media/urizen.0021942a.jpg"},702:function(e,t,n){n(230),n(703),e.exports=n(704)},704:function(e,t,n){"use strict";n.r(t),function(e){var t=n(228),r=n(716);Object(t.configure)(function(){r.keys().forEach(function(e){return r(e)})},e)}.call(this,n(330)(e))},716:function(e,t,n){var r={"./index.stories.js":717};function o(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=716},717:function(e,t,n){"use strict";n.r(t),function(e){var t=n(0),r=n.n(t),o=n(228),a=n(229),i=n(517),s=n(516),c=n.n(s),l=n(699),u=n.n(l),d=n(700),p=n.n(d),m=n(701),g=n.n(m),f=function(){return Object(a.select)("Image",{newton:c.a,dragon:u.a,nebuchadnezzar:p.a,urizen:g.a,"no image":"","not found":"404.jpg"},c.a)||void 0};Object(o.storiesOf)("CropBox",e).addDecorator(a.withKnobs).addDecorator(function(e){return r.a.createElement("div",{style:{height:"100vh"}},e())}).add("crop",function(){return r.a.createElement(i.a,{src:f()})}).add("previews",function(){return r.a.createElement(i.a,{src:f(),previews:Object(a.object)("Previews",[.5,1,2])})})}.call(this,n(330)(e))},722:function(e,t,n){var r=n(723);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(725)(r,o);r.locals&&(e.exports=r.locals)},723:function(e,t,n){(e.exports=n(724)(!1)).push([e.i,"body {\n  margin: 0; }\n\n@-webkit-keyframes marching_ants {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 12; } }\n\n@keyframes marching_ants {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 12; } }\n.Overlay .inside.pending .box {\n  -webkit-animation: marching_ants 0.5s steps(10) infinite;\n          animation: marching_ants 0.5s steps(10) infinite;\n  stroke-dasharray: 6; }\n\n.Overlay {\n  touch-action: none;\n  overflow: visible;\n  height: 100%;\n  z-index: 10;\n  shape-rendering: auto;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0; }\n  .Overlay path,\n  .Overlay rect,\n  .Overlay ellipse {\n    vector-effect: non-scaling-stroke;\n    fill: transparent; }\n  .Overlay .outside {\n    fill: rgba(0, 0, 0, 0.5); }\n  .Overlay .centerPoint {\n    position: relative; }\n    .Overlay .centerPoint .Handle {\n      cursor: crosshair; }\n      .Overlay .centerPoint .Handle:hover + .cross {\n        stroke: yellow; }\n    .Overlay .centerPoint .cross {\n      pointer-events: none;\n      vector-effect: non-scaling-stroke;\n      stroke: rgba(255, 255, 0, 0.5); }\n  .Overlay .inside .box {\n    stroke: rgba(255, 255, 255, 0.3); }\n  .Overlay .inside:hover .box {\n    stroke: rgba(255, 255, 255, 0.8); }\n  .Overlay .inside.pending .box {\n    stroke: white;\n    stroke-width: 2px; }\n  .Overlay .inside .handles {\n    overflow: visible; }\n  .Overlay .Handle {\n    stroke: blue;\n    stroke-width: 0;\n    fill: red;\n    opacity: 0; }\n    @media (hover: none) {\n      .Overlay .Handle {\n        stroke-width: 1rem; } }\n\n.CropBoxContainer {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%; }\n  .CropBoxContainer .CropBox {\n    display: flex;\n    flex: 1 1;\n    flex-direction: column; }\n  .CropBoxContainer .CropPreview {\n    flex-shrink: 0; }\n\n.CropPreview {\n  display: flex;\n  margin-left: -0.4rem;\n  margin-bottom: 0.4rem; }\n  .CropPreview .PreviewImg {\n    margin-left: 0.4rem; }\n    .CropPreview .PreviewImg svg {\n      display: block;\n      max-height: 100%; }\n",""])}},[[702,3,2]]]);
//# sourceMappingURL=preview.b0bb67d0794356c9590d.bundle.js.map