define("dist/app/index/index",["$","helper","../../lib/util/dom/action"],function(a){var b=a("$"),c=(a("helper"),a("../../lib/util/dom/action"));b(function(){c.listen({})})}),define("dist/lib/util/dom/action",["$"],function(a){var b=a("$"),c={dom:[],eventType:[],action:[]},d="data-action",e={setActionKey:function(a){d=a,e.setActionKey=null},listen:function(a,e,f){a=a||{},e=b(e?e:document),f=f||"click";var g=b.inArray(e[0],c.dom);if(-1!==g&&c.eventType[g]!==f&&(g=-1),-1===g)c.dom.push(e[0]),c.eventType.push(f),c.action.push(a),g=c.action.length-1,e[f](function(a){var e=b(a.target),f=e.attr(d),h=e;f||(h=e.closest("["+d+"]"),f=h.attr(d));var i=!0,j=c.action[g],k=j[f];if(k)if(b.isFunction(k.not)&&(k.node&&k.node[0]!==h[0]&&k.not.call(k.scope||e,a,k.node,f),k.node=h,k.using=!0),b.isFunction(k))i=k.call(e,a,h,f);else if(b.isFunction(k.is)||b.isFunction(k.action)){var l=k.is||k.action;i=l.call(k.scope||e,a,h,f)}for(var m=0,n=c.action.length;n>m;m++){var o=c.action[m];for(var p in o)p!==f&&o[p]&&o[p].not&&b.isFunction(o[p].not)&&o[p].using&&(o[p].using=!!o[p].not.call(o[p].scope||e,a,o[p].node,f))}if(-1===i)a.stopPropagation();else{if(i===!0)return!0;if(i===!1)return!1;"A"===a.target.tagName.toUpperCase()&&a.preventDefault()}});else{var h=c.action[g];for(var i in a)h[i]=a[i]}return e}};return e});