(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(2),r=(a(0),a(93));const b={id:"conditions",title:"Conditions",sidebar_label:"Conditions"},c={unversionedId:"reference/conditions",id:"reference/conditions",isDocsHomePage:!1,title:"Conditions",description:"A condition is how you create logic and branching in your experience.",source:"@site/docs/reference/conditions.md",permalink:"/docs/reference/conditions",editUrl:"https://github.com/firstpersontravel/charter-docs/edit/master/website/docs/reference/conditions.md",sidebar_label:"Conditions",sidebar:"sidebar",previous:{title:"Panels",permalink:"/docs/reference/panels"},next:{title:"Field types",permalink:"/docs/reference/fieldtypes"}},l=[{value:"All",id:"all",children:[]},{value:"Any",id:"any",children:[]},{value:"Clip answer is",id:"clip-answer-is",children:[]},{value:"Current role is",id:"current-role-is",children:[]},{value:"Not",id:"not",children:[]},{value:"Role in geofence",id:"role-in-geofence",children:[]},{value:"Role page is",id:"role-page-is",children:[]},{value:"Submission contains",id:"submission-contains",children:[]},{value:"Text contains",id:"text-contains",children:[]},{value:"Text is affirmative",id:"text-is-affirmative",children:[]},{value:"Variable contains",id:"variable-contains",children:[]},{value:"Variable is present",id:"variable-is-present",children:[]},{value:"Variables are equal",id:"variables-are-equal",children:[]}],i={rightToc:l};function o({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A condition is how you create logic and branching in your experience."),Object(r.b)("h2",{id:"all"},"All"),Object(r.b)("p",null,"A condition that passes only if all of its subconditions pass."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Items"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition"),"]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of subconditions, all of which must be true.")))),Object(r.b)("h2",{id:"any"},"Any"),Object(r.b)("p",null,"A condition that passes if any one of its subconditions pass."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Items"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition"),"]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of subconditions, one of which must be true.")))),Object(r.b)("h2",{id:"clip-answer-is"},"Clip answer is"),Object(r.b)("p",null,"A condition that passes if the response to the clip being answered contains any part of the 'response' parameter."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Response")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#text"}),"Text")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A simple string to check for within the clip response.")))),Object(r.b)("h2",{id:"current-role-is"},"Current role is"),Object(r.b)("p",null,"A condition that passes if the current player has a specific role."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role to check against the current player.")))),Object(r.b)("h2",{id:"not"},"Not"),Object(r.b)("p",null,"A condition that passes if the subcondition does not pass."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Item")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A subcondition, which must be false.")))),Object(r.b)("h2",{id:"role-in-geofence"},"Role in geofence"),Object(r.b)("p",null,"A condition that passes if a role is within a geofence."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role to check.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Geofence")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#geofence"}),"Geofence")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The geofence that a player with this role must be within.")))),Object(r.b)("h2",{id:"role-page-is"},"Role page is"),Object(r.b)("p",null,"A condition that passes if a role is on a specific page."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role to check.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Page")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#page"}),"Page")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The page that this role must be on.")))),Object(r.b)("h2",{id:"submission-contains"},"Submission contains"),Object(r.b)("p",null,"A condition that passes if the submission contains any part of the 'part' parameter."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Part")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#text"}),"Text")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A text fragment which must be contained by the submission.")))),Object(r.b)("h2",{id:"text-contains"},"Text contains"),Object(r.b)("p",null,"A condition that passes if the content to the text contains any part of the 'part' parameter."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Part")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#text"}),"Text")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A fragment of text to look for in the text response.")))),Object(r.b)("h2",{id:"text-is-affirmative"},"Text is affirmative"),Object(r.b)("p",null,"A condition that passes if the content to the text seems affirmitive (contains 'yes', 'ok', 'sure', etc."),Object(r.b)("h2",{id:"variable-contains"},"Variable contains"),Object(r.b)("p",null,"A condition that passes if the search variable value contains the part in the part variable. If 'string_ref' or 'part_ref' are surrounded by double quotes, or are a number, or \"true\" or \"false\", then the value in the other reference will be matched to that simple variable rather performing two lookups."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Search variable name")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A variable to look up, which should contain text. In cases of a specific string, surround it with double quotes.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Part variable name")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A variable to look up which should contain the fragment to check for. In cases of a specific string, surround it with double quotes.")))),Object(r.b)("h2",{id:"variable-is-present"},"Variable is present"),Object(r.b)("p",null,"A condition that passes if the variable has any value that is not false."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Variable name")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A value to look up and see if it contains any non-false value.")))),Object(r.b)("h2",{id:"variables-are-equal"},"Variables are equal"),Object(r.b)("p",null,'A condition that passes if the first value matches the second value. If "Value 1" or "Value 2" are surrounded by double quotes, or are a number, or "true" or "false", then the value in the other reference will be matched to that simple value rather performing two lookups.'),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Variable name 1")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A value to look up and compare against the second.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Variable name 2")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Another value to look up and compare against the first. In cases of a specific string, surround it with double quotes.")))))}o.isMDXComponent=!0},93:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=p(a),j=n,d=s["".concat(c,".").concat(j)]||s[j]||O[j]||b;return a?r.a.createElement(d,l(l({ref:t},o),{},{components:a})):r.a.createElement(d,l({ref:t},o))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);