(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return d})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),i=(r(0),r(124)),o={id:"fieldtypes",title:"Field Types",sidebar_label:"Field Types"},l={id:"reference/fieldtypes",title:"Field Types",description:"Fields are the underlying data elements of each object in your script. Each is validated in a different way.",source:"@site/docs/reference/fieldtypes.md",permalink:"/docs/reference/fieldtypes",editUrl:"https://github.com/firstpersontravel/charter-docs/edit/master/website/docs/reference/fieldtypes.md",sidebar_label:"Field Types",sidebar:"sidebar",previous:{title:"Conditions",permalink:"/docs/reference/conditions"}},d=[{value:"Address",id:"address",children:[]},{value:"Boolean",id:"boolean",children:[]},{value:"Coords",id:"coords",children:[]},{value:"Email",id:"email",children:[]},{value:"Enumeration",id:"enumeration",children:[]},{value:"Integer",id:"integer",children:[]},{value:"Lookup",id:"lookup",children:[]},{value:"Markdown",id:"markdown",children:[]},{value:"Media",id:"media",children:[]},{value:"Name",id:"name",children:[]},{value:"Number",id:"number",children:[]},{value:"Simple attribute",id:"simple-attribute",children:[]},{value:"Simple value",id:"simple-value",children:[]},{value:"Text",id:"text",children:[]},{value:"Time offset",id:"time-offset",children:[]},{value:"Time shorthand",id:"time-shorthand",children:[]}],c={rightToc:d};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Fields are the underlying data elements of each object in your script. Each is validated in a different way."),Object(i.b)("h2",{id:"address"},"Address"),Object(i.b)("p",null,'A geocodable address, including city, state and ZIP/postal code. For example: "111 Main Street, San Francisco CA 94110".'),Object(i.b)("h2",{id:"boolean"},"Boolean"),Object(i.b)("p",null,"A simple true or false value."),Object(i.b)("h2",{id:"coords"},"Coords"),Object(i.b)("p",null,"Latitude/longitude coordinates."),Object(i.b)("h2",{id:"email"},"Email"),Object(i.b)("p",null,'An email address. For example, "',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:agency@firstperson.travel"}),"agency@firstperson.travel"),'".'),Object(i.b)("h2",{id:"enumeration"},"Enumeration"),Object(i.b)("p",null,"A field allowing a choice between a limited set of values. The specific set of options will be different for each field and documented in that field."),Object(i.b)("h2",{id:"integer"},"Integer"),Object(i.b)("p",null,"A simple integer value: 0, 100, -50, etc."),Object(i.b)("h2",{id:"lookup"},"Lookup"),Object(i.b)("p",null,'A machine-readable name used for looking up variables. Only letters, numbers, dashes or underscores are allowed. Periods may be used to look up children of data dictionaries: for example, "inductee.link" or "current.directive".'),Object(i.b)("h2",{id:"markdown"},"Markdown"),Object(i.b)("p",null,"Text styled with markdown. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/"}),"https://www.markdownguide.org/basic-syntax/")," for help on how to use markdown."),Object(i.b)("h2",{id:"media"},"Media"),Object(i.b)("p",null,"Uploaded media: an image, video, or audio clip."),Object(i.b)("h2",{id:"name"},"Name"),Object(i.b)("p",null,"A machine-readable name used for naming variables. Only letters, numbers, dashes or underscores are allowed."),Object(i.b)("h2",{id:"number"},"Number"),Object(i.b)("p",null,"An integer or number with a decimal."),Object(i.b)("h2",{id:"simple-attribute"},"Simple attribute"),Object(i.b)("p",null,"A machine-readable name used for naming variables. Only letters, numbers, or underscores are allowed."),Object(i.b)("h2",{id:"simple-value"},"Simple value"),Object(i.b)("p",null,'A field that can be a string, number, or "true" or "false".'),Object(i.b)("h2",{id:"text"},"Text"),Object(i.b)("p",null,"Arbitrary text, usually for display to a participant."),Object(i.b)("h2",{id:"time-offset"},"Time offset"),Object(i.b)("p",null,'An offset of time indicated in a brief shorthand of number and unit. For instance, "10s" for ten seconds, "3.5h" for three and a half hours, or "-40m" for minus forty minutes. Negative offsets indicate a period prior to another time.'),Object(i.b)("h2",{id:"time-shorthand"},"Time shorthand"),Object(i.b)("p",null,'A shorthand clock time, as defined in days relative to the start of the experience. For instance, "3:00pm" means 3pm the day of the experience. "5:30am" means 5:30am the day of the experience. "+1d 4:15pm" means 4:15pm the day after the day the experience started.'))}s.isMDXComponent=!0},124:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(r),p=n,m=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return r?a.a.createElement(m,l({ref:t},c,{components:r})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);