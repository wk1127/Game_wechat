(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{pYHx:function(t,e,a){"use strict";var n=a("g09b");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=n(a("p0pE")),s=n(a("d6i3")),r=n(a("qIgq")),o=a("Dp36"),c={namespace:"coupon",state:{unUsedList:{TotalCount:0,List:[],PageIndex:0,PageCount:0},usedList:{TotalCount:0,List:[],PageIndex:0,PageCount:0},expiredList:{TotalCount:0,List:[],PageIndex:0,PageCount:0},firstLoadStatus:!0,tabKey:""},effects:{initFetch:s.default.mark(function t(e,a){var n,u,c,d,i,p,l,f,x;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,e.callback,u=a.all,c=a.call,d=a.put,t.next=4,u([c(o.getCouponList,n[0]),c(o.getCouponList,n[1]),c(o.getCouponList,n[2])]);case 4:if(i=t.sent,p=(0,r.default)(i,3),l=p[0],f=p[1],x=p[2],1!==l.Status){t.next=12;break}return t.next=12,d({type:"saveUnUsed",payload:l.Data});case 12:if(1!==f.Status){t.next=15;break}return t.next=15,d({type:"saveUsed",payload:f.Data});case 15:if(1!==x.Status){t.next=18;break}return t.next=18,d({type:"saveExpired",payload:x.Data});case 18:case"end":return t.stop()}},t)}),fetchUnUsed:s.default.mark(function t(e,a){var n,u,r,c,d,i;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,u=e.callback,r=a.call,a.put,t.next=4,r(o.getCouponList,n);case 4:c=t.sent,d=c.Status,i=c.Data,1===d&&u&&u(i);case 7:case"end":return t.stop()}},t)}),fetchUsed:s.default.mark(function t(e,a){var n,u,r,c,d,i;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,u=e.callback,r=a.call,a.put,t.next=4,r(o.getCouponList,n);case 4:c=t.sent,d=c.Status,i=c.Data,1===d&&u&&u(i);case 7:case"end":return t.stop()}},t)}),fetchExpired:s.default.mark(function t(e,a){var n,u,r,c,d,i;return s.default.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.payload,u=e.callback,r=a.call,a.put,t.next=4,r(o.getCouponList,n);case 4:c=t.sent,d=c.Status,i=c.Data,1===d&&u&&u(i);case 7:case"end":return t.stop()}},t)})},reducers:{saveUnUsed:function(t,e){return(0,u.default)({},t,{unUsedList:e.payload})},saveUsed:function(t,e){return(0,u.default)({},t,{usedList:e.payload})},saveExpired:function(t,e){return(0,u.default)({},t,{expiredList:e.payload})},updateLoadStatus:function(t,e){return(0,u.default)({},t,{firstLoadStatus:e.payload})},updateTabKey:function(t,e){return(0,u.default)({},t,{tabKey:e.payload})}},subscriptions:{setup:function(t){t.dispatch;var e=t.history;e.listen(function(t){})}}},d=c;e.default=d}}]);