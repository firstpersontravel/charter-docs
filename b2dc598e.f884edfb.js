(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return l}));var n=a(2),r=(a(0),a(95));const c={id:"behaviors",title:"Behaviors in detail",sidebar_label:"Behaviors in detail"},i={unversionedId:"concepts/behaviors",id:"concepts/behaviors",isDocsHomePage:!1,title:"Behaviors in detail",description:"Behaviors",source:"@site/docs/concepts/behaviors.md",permalink:"/docs/concepts/behaviors",sidebar_label:"Behaviors in detail",sidebar:"sidebar",previous:{title:"Scenes",permalink:"/docs/concepts/scenes"},next:{title:"Pages in detail",permalink:"/docs/concepts/pages"}},o=[{value:"Behaviors",id:"behaviors",children:[]},{value:"Triggers",id:"triggers",children:[]},{value:"Actions",id:"actions",children:[]},{value:"Branches",id:"branches",children:[]},{value:"Conditions",id:"conditions",children:[]}],s={rightToc:o};function l({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"behaviors"},"Behaviors"),Object(r.b)("p",null,"Behaviors are the heart of all interactivity in Charter. A ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#behavior"}),"Behavior")," is a sequence of actions that happens under certain circumstances within a scene."),Object(r.b)("p",null,'Every behavior belongs to a scene, and can only be activated when that scene is the current scene, or if the scene is marked as "Always active".'),Object(r.b)("p",null,"Every behavior has a trigger, which determines the events that will activate that behavior. And it has actions, which are what happens when the behavior is activated. Behaviors will also often include conditions, which allow for branching and other complex logic."),Object(r.b)("h2",{id:"triggers"},"Triggers"),Object(r.b)("p",null,"Every behavior has a single trigger, which references a type of event, and certain parameters that filter what subset of these events trigger the behavior. The full set of events are enumerated in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/events"}),"Events page"),". They include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Scene events"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#scene-started"}),"Scene started")," event occurs when a run of a project transitions from one scene to the next, or when a run is started for the very first time."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Time events"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#moment-occurred"}),"Moment occurred")," event occurs when the clock time currently associated with a given ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/resources#moment"}),"Moment")," elapses."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Message events"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#text-received"}),"Text received"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#image-received"}),"Image received"),", and ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#audio-received"}),"Audio received")," events all occur when a user messages another user or automated participant."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Interface events"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#button-pressed"}),"Button pressed"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#text-entry-submitted"}),"Text entry submitted"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#number-entry-submitted"}),"Number entry submitted"),", and ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#directions-arrived"}),"Directions arrived")," events are all triggered by players interacting with Panels on a Page."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Geolocative events"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#geofence-entered"}),"Geofence entered")," event fires when a participant enters the physical region of a Geofence."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Call events"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#call-received"}),"Call received"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#call-answered"}),"Call answered"),", and ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/events#call-clip-answered"}),"Call clip answered")," events all occur during live phone calls.")),Object(r.b)("h2",{id:"actions"},"Actions"),Object(r.b)("p",null,"Once a behavior is activated by its trigger, it runs a list of actions, each of which enacts a change in the state of the run of your experience. The full set of actions are enumerated in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/actions"}),"Actions page"),". They include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Scene actions"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#start-scene"}),"Start scene")," action transitions your run to a new scene."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Message actions"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#sent-text"}),"Send text"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#sent-image"}),"Send image"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#sent-audio"}),"Send audio")," and ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#sent-video"}),"Send video")," actions send a text or media message fromo one participant to another."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Interface actions"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#send-to-page"}),"Send to page")," actions sets a participant's focus to a new page."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Background audio actions"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#play-background-audio"}),"Play background audio")," action starts background audio on the device of one of your participants."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Phone call actions"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#initiate-call"}),"Initiate call")," action places a phone call from one participant to another."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Time delay actions")," the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#wait"}),"Wait")," action waits a predefined interval of time before proceeding to the next action in the behavior. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#wait-until-moment"}),"Wait until moment")," waits until the clock time corresponding to a Moment defined in your experience."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Variable actions"),": the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#set-variable"}),"Set variable")," action updates the value of variable. These variables can then be retrieved using conditions like ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/conditions#variables-are-equal"}),"Variables are equal"),".")),Object(r.b)("h2",{id:"branches"},"Branches"),Object(r.b)("p",null,"A special action, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/actions#branch"}),"Branch"),", can be used to take different courses of action based on the current state of your run."),Object(r.b)("p",null,'A Branch evaluates the state of your project run via Conditions, which are discussed in more detail below. Every Branch has an "If" field, which is a Condition. If the "If" condition passes, the actions in the branch\'s "Actions" field are executed. Otherwise, the actions in the branche\'s "Else" field are executed, if any are present.'),Object(r.b)("p",null,'You can also add any number of "Else If" fields to a Branch. If the conditional in the first "If" field does not past, each subsequent "Else If" conditional is evaluated, and if it passes, then the actions in the "Actions" field of that "Else If" are executed. The actions in a Branch\'s "Else" field are only executed if none of the "Else Ifs" pass.'),Object(r.b)("h2",{id:"conditions"},"Conditions"),Object(r.b)("p",null,"A condition checks a certain aspect of your run, and either passes or fails. Conditions are enumerated fully in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/conditions"}),"Conditions page"),". They include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Checking the content of messages. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/conditions#text-contains"}),"Text contains")," checks if a text message includes a certain key word. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/conditions#text-is-affirmative"}),"Text is affirmative")," checks if a text message generally seems more positive than negative."),Object(r.b)("li",{parentName:"ul"},"Checking the state of variables. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/conditions/#variable-is-present"}),"Variable is present")," checks if a variable with a certain name has any value other than ",Object(r.b)("inlineCode",{parentName:"li"},"false"),". ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/conditions/#variables-are-equal"}),"Variables are equal")," checks whether two variables are equal, and can also be used to check the content of a variable against a specific value."),Object(r.b)("li",{parentName:"ul"},"Checking panel inputs. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/conditions#submission-contains"}),"Submission contains")," compares the input from text entry and number entry panels against a known value."),Object(r.b)("li",{parentName:"ul"},"Checking location. ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/conditions#role-in-geofence"}),"Role in geofence")," checks that any participant with a certain role is physically inside a the circular radius of a Geofence.")),Object(r.b)("p",null,"Conditions can be combined. The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/conditions#all"}),"All")," condition only passes if all its subconditions pass. The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/conditions#any"}),"Any")," condition passes if at least one subcondition passes. And the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/conditions#not"}),"Not")," condition can be used to negate any subcondition, including a nested Any or All subcondition."))}l.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(a),p=n,f=d["".concat(i,".").concat(p)]||d[p]||h[p]||c;return a?r.a.createElement(f,o(o({ref:t},l),{},{components:a})):r.a.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,i=new Array(c);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);