(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return j}));var b=a(2),n=(a(0),a(96));const r={id:"actions",title:"Actions",sidebar_label:"Actions"},l={unversionedId:"reference/actions",id:"reference/actions",isDocsHomePage:!1,title:"Actions",description:"Every action makes a change in the state of your running trip.",source:"@site/docs/reference/actions.md",permalink:"/docs/reference/actions",sidebar_label:"Actions",sidebar:"sidebar",previous:{title:"Resources",permalink:"/docs/reference/resources"},next:{title:"Events",permalink:"/docs/reference/events"}},c=[{value:"Add to call",id:"add-to-call",children:[]},{value:"Branch",id:"branch",children:[]},{value:"Change role",id:"change-role",children:[]},{value:"Focus tab",id:"focus-tab",children:[]},{value:"Increment variable",id:"increment-variable",children:[]},{value:"Initiate call",id:"initiate-call",children:[]},{value:"Pause background audio",id:"pause-background-audio",children:[]},{value:"Play background audio",id:"play-background-audio",children:[]},{value:"Play call clip",id:"play-call-clip",children:[]},{value:"Resume background audio",id:"resume-background-audio",children:[]},{value:"Send audio",id:"send-audio",children:[]},{value:"Send email",id:"send-email",children:[]},{value:"Send image",id:"send-image",children:[]},{value:"Send text",id:"send-text",children:[]},{value:"Send to page",id:"send-to-page",children:[]},{value:"Set variable",id:"set-variable",children:[]},{value:"Signal cue",id:"signal-cue",children:[]},{value:"Start scene",id:"start-scene",children:[]},{value:"Stop background audio",id:"stop-background-audio",children:[]},{value:"Wait",id:"wait",children:[]},{value:"Wait before moment",id:"wait-before-moment",children:[]},{value:"Wait until moment",id:"wait-until-moment",children:[]}],O={rightToc:c};function j({components:e,...t}){return Object(n.b)("wrapper",Object(b.a)({},O,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Every action makes a change in the state of your running trip."),Object(n.b)("h2",{id:"add-to-call"},"Add to call"),Object(n.b)("p",null,"Add a player to a conference call."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to add to the call.")))),Object(n.b)("h2",{id:"branch"},"Branch"),Object(n.b)("p",null,"A branch performs certain actions if an associated condition passes, and others if it does not."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"If"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The primary condition evaluated first.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Actions"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/actions"}),"Action"),"]"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Actions executed if the primary condition passes.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Elseifs"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"List"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"A list of conditions and actions that are evaluated in order if the primary condition fails.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Elseifs \u2192 If"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"A condition to evaluate.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Elseifs \u2192 Actions"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/actions"}),"Action"),"]"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Actions to execute if the condition of this Else If field passes.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Else"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"[",Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/actions"}),"Action"),"]"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Actions executed if the primary condition and all Else If conditions fail.")))),Object(n.b)("h2",{id:"change-role"},"Change role"),Object(n.b)("p",null,"Change the current player from one role to another."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"To")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to change the player to.")))),Object(n.b)("h2",{id:"focus-tab"},"Focus tab"),Object(n.b)("p",null,"Bring up a specific tab on an interface."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to apply the change to.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"New value")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#text"}),"Text")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The title of the tab to focus.")))),Object(n.b)("h2",{id:"increment-variable"},"Increment variable"),Object(n.b)("p",null,"Increment the numerical value of a value by reference."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Name")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#variable-name"}),"Variable name")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Delta"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#number"}),"Number")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}))))),Object(n.b)("h2",{id:"initiate-call"},"Initiate call"),Object(n.b)("p",null,"Initiate a call from Charter to a user."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"To")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The player to initiate a call to.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"As")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The player from whom the call originates.")))),Object(n.b)("h2",{id:"pause-background-audio"},"Pause background audio"),Object(n.b)("p",null,"Pause currently playing audio."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to pause the audio for.")))),Object(n.b)("h2",{id:"play-background-audio"},"Play background audio"),Object(n.b)("p",null,"Start playing audio for a certain role."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to play the audio for.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Audio"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#media"}),"Media")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The audio file to play.")))),Object(n.b)("h2",{id:"play-call-clip"},"Play call clip"),Object(n.b)("p",null,"Play a call clip on an active phone call."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Clip")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#clip"}),"Call clip")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The clip to play.")))),Object(n.b)("h2",{id:"resume-background-audio"},"Resume background audio"),Object(n.b)("p",null,"Resume currently paused audio."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to resume the audio for.")))),Object(n.b)("h2",{id:"send-audio"},"Send audio"),Object(n.b)("p",null,"Send an audio message from one player to another."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"From")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to send the message from.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"To")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to send the message to.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Audio"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#media"}),"Media")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The content of the message to send.")))),Object(n.b)("h2",{id:"send-email"},"Send email"),Object(n.b)("p",null,"Send an email from one player to another."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"From")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#inbox"}),"Email account")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Inbox to send from.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"To")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Role to send to.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Subject")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#text"}),"Text")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Subject line for the email.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Body")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#markdown"}),"Markdown")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Body of the email.")))),Object(n.b)("h2",{id:"send-image"},"Send image"),Object(n.b)("p",null,"Send an image from one player to another."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"From")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to send the message from.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"To")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to send the message to.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Image"),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#media"}),"Media")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The content of the message to send.")))),Object(n.b)("h2",{id:"send-text"},"Send text"),Object(n.b)("p",null,"Send a text message from one player to another."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"From")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to send the message from.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"To")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to send the message to.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Content")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#text"}),"Text")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The content of the message to send.")))),Object(n.b)("h2",{id:"send-to-page"},"Send to page"),Object(n.b)("p",null,"Set a role to a page."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to send to a page.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Page")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#page"}),"Page")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The page to send the matching players to.")))),Object(n.b)("h2",{id:"set-variable"},"Set variable"),Object(n.b)("p",null,"Update a variable in the trip state to either a constant number or string, or to match another variable by reference."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Name")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#variable-name"}),"Variable name")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The name of the variable to set.")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"To")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#lookup"}),"Lookup")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The name of a variable, the value of which we want to look up and use for the value to set. Or a specific number, true, false, or text surrounded by double quotes.")))),Object(n.b)("h2",{id:"signal-cue"},"Signal cue"),Object(n.b)("p",null,"Signal a cue. A cue does nothing on its own, but usually will have triggers attached, which fire actions."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Cue")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#cue"}),"Cue")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The cue to signal.")))),Object(n.b)("h2",{id:"start-scene"},"Start scene"),Object(n.b)("p",null,"Start a new scene."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Scene")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#scene"}),"Scene")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The scene to start.")))),Object(n.b)("h2",{id:"stop-background-audio"},"Stop background audio"),Object(n.b)("p",null,"Stop audio and reset audio state."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"The role to stop the audio for.")))),Object(n.b)("h2",{id:"wait"},"Wait"),Object(n.b)("p",null,"Wait a fixed period of time."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Duration")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#duration"}),"Duration")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"A duration, i.e. 1h, 30s, 4.2m")))),Object(n.b)("h2",{id:"wait-before-moment"},"Wait before moment"),Object(n.b)("p",null,"Wait a fixed period of time before a scheduled moment."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Until")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#time"}),"Moment")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Before")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#duration"}),"Duration")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"A time offset, i.e. 1h, 30s, 4.2m")))),Object(n.b)("h2",{id:"wait-until-moment"},"Wait until moment"),Object(n.b)("p",null,"Wait for a moment to arrive."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Field"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("strong",{parentName:"td"},"Until")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(b.a)({parentName:"td"},{href:"/docs/reference/resources#time"}),"Moment")),Object(n.b)("td",Object(b.a)({parentName:"tr"},{align:null}))))))}j.isMDXComponent=!0},96:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var j=n.a.createContext({}),i=function(e){var t=n.a.useContext(j),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},o=function(e){var t=i(e.components);return n.a.createElement(j.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=n.a.forwardRef((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,l=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),o=i(a),p=b,m=o["".concat(l,".").concat(p)]||o[p]||d[p]||r;return a?n.a.createElement(m,c(c({ref:t},j),{},{components:a})):n.a.createElement(m,c({ref:t},j))}));function m(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,l=new Array(r);l[0]=p;var c={};for(var O in t)hasOwnProperty.call(t,O)&&(c[O]=t[O]);c.originalType=e,c.mdxType="string"==typeof e?e:b,l[1]=c;for(var j=2;j<r;j++)l[j]=a[j];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);