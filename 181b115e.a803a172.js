(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),j=n,d=s["".concat(c,".").concat(j)]||s[j]||O[j]||b;return a?r.a.createElement(d,l({ref:t},o,{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),b=(a(0),a(137)),c={id:"conditions",title:"Conditions",sidebar_label:"Conditions"},l={id:"reference/conditions",title:"Conditions",description:"A condition is how you create logic and branching in your experience.",source:"@site/docs/reference/conditions.md",permalink:"/docs/reference/conditions",editUrl:"https://github.com/firstpersontravel/charter-docs/edit/master/website/docs/reference/conditions.md",sidebar_label:"Conditions",sidebar:"sidebar",previous:{title:"Panels",permalink:"/docs/reference/panels"},next:{title:"Field types",permalink:"/docs/reference/fieldtypes"}},i=[{value:"All",id:"all",children:[]},{value:"Any",id:"any",children:[]},{value:"Clip answer is",id:"clip-answer-is",children:[]},{value:"Current role is",id:"current-role-is",children:[]},{value:"Not",id:"not",children:[]},{value:"Role in geofence",id:"role-in-geofence",children:[]},{value:"Role page is",id:"role-page-is",children:[]},{value:"Submission contains",id:"submission-contains",children:[]},{value:"Text contains",id:"text-contains",children:[]},{value:"Text is affirmative",id:"text-is-affirmative",children:[]},{value:"Variable contains",id:"variable-contains",children:[]},{value:"Variable is present",id:"variable-is-present",children:[]},{value:"Variables are equal",id:"variables-are-equal",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"A condition is how you create logic and branching in your experience."),Object(b.b)("h2",{id:"all"},"All"),Object(b.b)("p",null,"A condition that passes only if all of its subconditions pass."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Items"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition"),"]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of subconditions, all of which must be true.")))),Object(b.b)("h2",{id:"any"},"Any"),Object(b.b)("p",null,"A condition that passes if any one of its subconditions pass."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Items"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition"),"]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of subconditions, one of which must be true.")))),Object(b.b)("h2",{id:"clip-answer-is"},"Clip answer is"),Object(b.b)("p",null,"A condition that passes if the response to the clip being answered contains any part of the 'response' parameter."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Response")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#text"}),"Text")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A simple string to check for within the clip response.")))),Object(b.b)("h2",{id:"current-role-is"},"Current role is"),Object(b.b)("p",null,"A condition that passes if the current player has a specific role."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role to check against the current player.")))),Object(b.b)("h2",{id:"not"},"Not"),Object(b.b)("p",null,"A condition that passes if the subcondition does not pass."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Item")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A subcondition, which must be false.")))),Object(b.b)("h2",{id:"role-in-geofence"},"Role in geofence"),Object(b.b)("p",null,"A condition that passes if a role is within a geofence."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role to check.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Geofence")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#geofence"}),"Geofence")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The geofence that a player with this role must be within.")))),Object(b.b)("h2",{id:"role-page-is"},"Role page is"),Object(b.b)("p",null,"A condition that passes if a role is on a specific page."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role to check.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Page")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#page"}),"Page")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The page that this role must be on.")))),Object(b.b)("h2",{id:"submission-contains"},"Submission contains"),Object(b.b)("p",null,"A condition that passes if the submission contains any part of the 'part' parameter."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Part")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#text"}),"Text")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A text fragment which must be contained by the submission.")))),Object(b.b)("h2",{id:"text-contains"},"Text contains"),Object(b.b)("p",null,"A condition that passes if the content to the text contains any part of the 'part' parameter."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Part")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#text"}),"Text")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A fragment of text to look for in the text response.")))),Object(b.b)("h2",{id:"text-is-affirmative"},"Text is affirmative"),Object(b.b)("p",null,"A condition that passes if the content to the text seems affirmitive (contains 'yes', 'ok', 'sure', etc."),Object(b.b)("h2",{id:"variable-contains"},"Variable contains"),Object(b.b)("p",null,"A condition that passes if the search variable value contains the part in the part variable. If 'string_ref' or 'part_ref' are surrounded by double quotes, or are a number, or \"true\" or \"false\", then the value in the other reference will be matched to that simple variable rather performing two lookups."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Search variable name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A variable to look up, which should contain text. In cases of a specific string, surround it with double quotes.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Part variable name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A variable to look up which should contain the fragment to check for. In cases of a specific string, surround it with double quotes.")))),Object(b.b)("h2",{id:"variable-is-present"},"Variable is present"),Object(b.b)("p",null,"A condition that passes if the variable has any value that is not false."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Variable name")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A value to look up and see if it contains any non-false value.")))),Object(b.b)("h2",{id:"variables-are-equal"},"Variables are equal"),Object(b.b)("p",null,'A condition that passes if the first value matches the second value. If "Value 1" or "Value 2" are surrounded by double quotes, or are a number, or "true" or "false", then the value in the other reference will be matched to that simple value rather performing two lookups.'),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Variable name 1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A value to look up and compare against the second.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"Variable name 2")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Another value to look up and compare against the first. In cases of a specific string, surround it with double quotes.")))))}p.isMDXComponent=!0}}]);