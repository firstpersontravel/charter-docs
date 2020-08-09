(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(6),i=(n(0),n(93)),o={id:"fieldtypes",title:"Field types",sidebar_label:"Field types"},l={unversionedId:"reference/fieldtypes",id:"reference/fieldtypes",isDocsHomePage:!1,title:"Field types",description:"Fields are the underlying data elements of each object in your script. Each is validated in a different way.",source:"@site/docs/reference/fieldtypes.md",permalink:"/docs/reference/fieldtypes",editUrl:"https://github.com/firstpersontravel/charter-docs/edit/master/website/docs/reference/fieldtypes.md",sidebar_label:"Field types",sidebar:"sidebar",previous:{title:"Conditions",permalink:"/docs/reference/conditions"}},c=[{value:"Boolean",id:"boolean",children:[]},{value:"Color",id:"color",children:[]},{value:"Coords",id:"coords",children:[]},{value:"Duration",id:"duration",children:[]},{value:"Email",id:"email",children:[]},{value:"Enumeration",id:"enumeration",children:[]},{value:"Integer",id:"integer",children:[]},{value:"Location",id:"location",children:[]},{value:"Lookup",id:"lookup",children:[]},{value:"Markdown",id:"markdown",children:[]},{value:"Media",id:"media",children:[]},{value:"Number",id:"number",children:[]},{value:"Reference",id:"reference",children:[]},{value:"Text",id:"text",children:[]},{value:"Time",id:"time",children:[]},{value:"Value",id:"value",children:[]},{value:"Variable name",id:"variable-name",children:[]}],d={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Fields are the underlying data elements of each object in your script. Each is validated in a different way."),Object(i.b)("h2",{id:"boolean"},"Boolean"),Object(i.b)("p",null,"A simple true or false value."),Object(i.b)("h2",{id:"color"},"Color"),Object(i.b)("p",null,"A color, in hexadecimal format. (i.e. #FFFFFF)"),Object(i.b)("h2",{id:"coords"},"Coords"),Object(i.b)("p",null,"Latitude/longitude coordinates."),Object(i.b)("h2",{id:"duration"},"Duration"),Object(i.b)("p",null,'An offset of time indicated in a brief shorthand of number and unit. For instance, "10s" for ten seconds, "3.5h" for three and a half hours, or "-40m" for minus forty minutes. Negative offsets indicate a period prior to another time.'),Object(i.b)("h2",{id:"email"},"Email"),Object(i.b)("p",null,'An email address. For example, "',Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:agency@firstperson.travel"}),"agency@firstperson.travel"),'".'),Object(i.b)("h2",{id:"enumeration"},"Enumeration"),Object(i.b)("p",null,"A field allowing a choice between a limited set of values. The specific set of options will be different for each field and documented in that field."),Object(i.b)("h2",{id:"integer"},"Integer"),Object(i.b)("p",null,"A simple integer value: 0, 100, -50, etc."),Object(i.b)("h2",{id:"location"},"Location"),Object(i.b)("p",null,"A geocodable address, including city, state and ZIP/postal code."),Object(i.b)("h2",{id:"lookup"},"Lookup"),Object(i.b)("p",null,"A machine-readable name used for looking up variables. Only letters, numbers, dashes or underscores are allowed. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"date"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"num_points"),". Periods may be used to look up children of data dictionaries: for example, ",Object(i.b)("inlineCode",{parentName:"p"},"inductee.link")," or ",Object(i.b)("inlineCode",{parentName:"p"},"current.directive"),". Specific values can also be specified here by including the text in double quotes: the lookup ",Object(i.b)("inlineCode",{parentName:"p"},"red"),' will look up the contents of the variable "red", whereas the lookup ',Object(i.b)("inlineCode",{parentName:"p"},'"red"'),' will return the text value "red". Numbers like ',Object(i.b)("inlineCode",{parentName:"p"},"1"),", ",Object(i.b)("inlineCode",{parentName:"p"},"400"),", etc, can be used, as can the values ",Object(i.b)("inlineCode",{parentName:"p"},"true")," and ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"."),Object(i.b)("h2",{id:"markdown"},"Markdown"),Object(i.b)("p",null,"Text styled with markdown. See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/"}),"https://www.markdownguide.org/basic-syntax/")," for help on how to use markdown."),Object(i.b)("h2",{id:"media"},"Media"),Object(i.b)("p",null,"Uploaded media: an image, video, or audio clip."),Object(i.b)("h2",{id:"number"},"Number"),Object(i.b)("p",null,"An integer or number with a decimal."),Object(i.b)("h2",{id:"reference"},"Reference"),Object(i.b)("p",null,"A reference to the name of an element in the script."),Object(i.b)("h2",{id:"text"},"Text"),Object(i.b)("p",null,"Arbitrary text, usually for display to a participant."),Object(i.b)("h2",{id:"time"},"Time"),Object(i.b)("p",null,"A shorthand clock time, as defined in days relative to the start of the experience. For instance, ",Object(i.b)("inlineCode",{parentName:"p"},"3:00pm")," means 3pm the day of the experience. ",Object(i.b)("inlineCode",{parentName:"p"},"5:30am")," means 5:30am the day of the experience. ",Object(i.b)("inlineCode",{parentName:"p"},"+1d 4:15pm")," means 4:15pm the day after the day the experience started."),Object(i.b)("h2",{id:"value"},"Value"),Object(i.b)("p",null,'A field that can be a string, number, or "true" or "false".'),Object(i.b)("h2",{id:"variable-name"},"Variable name"),Object(i.b)("p",null,"A machine-readable name used for naming variables. Only letters, numbers, or underscores are allowed. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"date"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"num_points")," are valid variable names."))}b.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),b=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=b(n),s=r,m=u["".concat(o,".").concat(s)]||u[s]||p[s]||i;return n?a.a.createElement(m,l(l({ref:t},d),{},{components:n})):a.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);