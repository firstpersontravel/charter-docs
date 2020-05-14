(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{115:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return j}));var n=a(2),r=a(6),b=(a(0),a(124)),c={id:"events",title:"Events",sidebar_label:"Events"},l={id:"reference/events",title:"Events",description:"Events occur over the course of your trip operation. When a trigger is associated with an event, that trigger will activate whenever a matching event occurs.",source:"@site/docs/reference/events.md",permalink:"/docs/reference/events",editUrl:"https://github.com/firstpersontravel/charter-docs/edit/master/website/docs/reference/events.md",sidebar_label:"Events",sidebar:"sidebar",previous:{title:"Actions",permalink:"/docs/reference/actions"},next:{title:"Panels",permalink:"/docs/reference/panels"}},O=[{value:"Audio received",id:"audio-received",children:[]},{value:"Button pressed",id:"button-pressed",children:[]},{value:"Call answered",id:"call-answered",children:[]},{value:"Call ended",id:"call-ended",children:[]},{value:"Call received",id:"call-received",children:[]},{value:"Clip answered",id:"clip-answered",children:[]},{value:"Cue signaled",id:"cue-signaled",children:[]},{value:"Directions arrived",id:"directions-arrived",children:[]},{value:"Geofence entered",id:"geofence-entered",children:[]},{value:"Image received",id:"image-received",children:[]},{value:"Numberpad submitted",id:"numberpad-submitted",children:[]},{value:"Scene started",id:"scene-started",children:[]},{value:"Text entry submitted",id:"text-entry-submitted",children:[]},{value:"Text received",id:"text-received",children:[]},{value:"Time occurred",id:"time-occurred",children:[]}],i={rightToc:O};function j(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Events occur over the course of your trip operation. When a trigger is associated with an event, that trigger will activate whenever a matching event occurs."),Object(b.b)("h2",{id:"audio-received"},"Audio received"),Object(b.b)("p",null,"Occurs when am audio message has been received."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"From"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The sender of the message.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The recipient of the message.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Geofence"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#geofence"}),"Geofence")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optionally, a geofence within which the message must have been sent.")))),Object(b.b)("h2",{id:"button-pressed"},"Button pressed"),Object(b.b)("p",null,"Occurs when a button has been pressed."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Button")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/panels#button"}),"Button Panel")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The button that was pressed.")))),Object(b.b)("h2",{id:"call-answered"},"Call answered"),Object(b.b)("p",null,"Occurs when a player answers a call."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"From")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The player who initiated the call.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"To")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The player who answered the call.")))),Object(b.b)("h2",{id:"call-ended"},"Call ended"),Object(b.b)("p",null,"Occurs when a player hangs up the phone."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any of the players involved in the call.")))),Object(b.b)("h2",{id:"call-received"},"Call received"),Object(b.b)("p",null,"Occurs when a player receives a call."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"From")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The player who initiated the call.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"To")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The player receiving the call.")))),Object(b.b)("h2",{id:"clip-answered"},"Clip answered"),Object(b.b)("p",null,"Occurs when a player responds to a clip over the phone."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Clip")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#clip"}),"Clip")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Allow partial"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#boolean"}),"Boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h2",{id:"cue-signaled"},"Cue signaled"),Object(b.b)("p",null,"Occurs when a cue has been signaled."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Cue")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#cue"}),"Cue")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The cue that was signaled.")))),Object(b.b)("h2",{id:"directions-arrived"},"Directions arrived"),Object(b.b)("p",null,"Occurs when a user confirms arrival at a destination."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Directions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/panels#directions"}),"Directions Panel")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The directions that were completed.")))),Object(b.b)("h2",{id:"geofence-entered"},"Geofence entered"),Object(b.b)("p",null,"Occurs when a player enters a geofenced region."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role entering the geofence.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Geofence")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#geofence"}),"Geofence")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The geofence being entered.")))),Object(b.b)("h2",{id:"image-received"},"Image received"),Object(b.b)("p",null,"Occurs when am image message has been received."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"From"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The sender of the message.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The recipient of the message.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Geofence"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#geofence"}),"Geofence")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optionally, a geofence within which the message must have been sent.")))),Object(b.b)("h2",{id:"numberpad-submitted"},"Numberpad submitted"),Object(b.b)("p",null,"Occurs when a user confirms a number on a numberpad."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Numberpad")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/panels#numberpad"}),"Numberpad Panel")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The numberpad that was submitted.")))),Object(b.b)("h2",{id:"scene-started"},"Scene started"),Object(b.b)("p",null,"Occurs when a scene has been started."),Object(b.b)("h2",{id:"text-entry-submitted"},"Text entry submitted"),Object(b.b)("p",null,"Occurs when a user confirms text on a text entry field."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Text entry")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/panels#text-entry"}),"Text entry Panel")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The text_entry that was submitted.")))),Object(b.b)("h2",{id:"text-received"},"Text received"),Object(b.b)("p",null,"Occurs when a text has been received."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"From"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The sender of the message.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"To"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The recipient of the message.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Contains"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#text"}),"Text")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optionally, a message that the message must contain.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Geofence"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#geofence"}),"Geofence")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optionally, a geofence within which the message must have been sent.")))),Object(b.b)("h2",{id:"time-occurred"},"Time occurred"),Object(b.b)("p",null,"Occurs when the current time reaches a scheduled time."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Time")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#time"}),"Time")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Offset"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#time-offset"}),"Time offset")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A time offset, e.g. 1h, 30s, 4.2m, -10s, -1.5h")))))}j.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),j=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d=function(e){var t=j(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=O(e,["components","mdxType","originalType","parentName"]),d=j(a),o=n,m=d["".concat(c,".").concat(o)]||d[o]||p[o]||b;return a?r.a.createElement(m,l({ref:t},i,{components:a})):r.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=o;var l={};for(var O in t)hasOwnProperty.call(t,O)&&(l[O]=t[O]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"}}]);