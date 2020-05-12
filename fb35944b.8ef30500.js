(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{118:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var n=a(2),b=a(6),r=(a(0),a(124)),c={id:"resources",title:"Resources",sidebar_label:"Resources"},l={id:"reference/resources",title:"Resources",description:"Resources are the primary objects in your script.",source:"@site/docs/reference/resources.md",permalink:"/docs/reference/resources",editUrl:"https://github.com/firstpersontravel/charter-docs/edit/master/website/docs/reference/resources.md",sidebar_label:"Resources",sidebar:"someSidebar",previous:{title:"Tutorials",permalink:"/docs/tutorials"},next:{title:"Actions",permalink:"/docs/reference/actions"}},i=[{value:"Achievement",id:"achievement",children:[]},{value:"Checkpoint",id:"checkpoint",children:[]},{value:"Clip",id:"clip",children:[]},{value:"Content page",id:"content-page",children:[]},{value:"Cue",id:"cue",children:[]},{value:"Geofence",id:"geofence",children:[]},{value:"Inbox",id:"inbox",children:[]},{value:"Interface",id:"interface",children:[]},{value:"Page",id:"page",children:[]},{value:"Qr code",id:"qr-code",children:[]},{value:"Relay",id:"relay",children:[]},{value:"Role",id:"role",children:[]},{value:"Route",id:"route",children:[]},{value:"Scene",id:"scene",children:[]},{value:"Time",id:"time",children:[]},{value:"Trigger",id:"trigger",children:[]},{value:"Variant",id:"variant",children:[]},{value:"Waypoint",id:"waypoint",children:[]}],O={rightToc:i};function j(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Resources are the primary objects in your script."),Object(r.b)("h2",{id:"achievement"},"Achievement"),Object(r.b)("p",null,"A description of one aspect of the trip outcome. A use is to easily summarize player choices and progress from an overview screen. For instance, you can quickly see which branches they experienced, how many areas were unlocked, or other metrics."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#scene"}),"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The scene at which the outcome of this achievement is expected to be known. Before this scene, the achivement will be listed as 'pending'.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Style")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"completion")," or ",Object(r.b)("inlineCode",{parentName:"td"},"choice")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"Completion" achievements are active if the test resolves to true. "Choice" achievements can have multiple titles based on the evaluation of the test.')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Test"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The value to test for to determine if this achievement has been activated.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Titles")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#string"}),"String")," to ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#string"}),"String")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Text values to display based on the result of the achievement test.")))),Object(r.b)("h2",{id:"checkpoint"},"Checkpoint"),Object(r.b)("p",null,"A saved place marker for quickly resetting a trip while testing."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#scene"}),"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The scene that this checkpoint will restore the trip to.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pages"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")," to ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#page"}),"Page")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Pages to start each role at.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Values"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#name"}),"Name")," to ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#simple-value"}),"Simple value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Values to pre-set.")))),Object(r.b)("h2",{id:"clip"},"Clip"),Object(r.b)("p",null,"A unit of text or audio that can be played as part of phone calls. A clip can expect an answer, which will fire a ",Object(r.b)("inlineCode",{parentName:"p"},"clip_answered")," event when it comes in."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#scene"}),"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The scene at which this clip will be played.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transcript"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#string"}),"String")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The text transcript used to generate audio via speech-to-text. Only required if there is not a media path.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Voice"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"alice"),", ",Object(r.b)("inlineCode",{parentName:"td"},"man")," or ",Object(r.b)("inlineCode",{parentName:"td"},"woman")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The voice used to generate audio via speech-to-text. Only required if there is not a media path.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Path"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#media"}),"Media")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Media path for an audio clip to play.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Answer expected"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Is an answer expected for this clip?")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Answer hints"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#string"}),"String"),"]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of suggestions for decoding the voice of the answer.")))),Object(r.b)("h2",{id:"content-page"},"Content page"),Object(r.b)("p",null,"A section of static text or media that can be displayed in a user interface."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Interface")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#interface"}),"Interface")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The parent interface in which this content page is displayed.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Section")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#string"}),"String")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A string indicating which a grouping for this content page. The the ",Object(r.b)("inlineCode",{parentName:"td"},"content_browse")," panel will show all visible content pages grouped by section.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Active if"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An optional test to determine if the panel is visible or not.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Panels")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/panels"}),"Panel"),"]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of user interface panels.")))),Object(r.b)("h2",{id:"cue"},"Cue"),Object(r.b)("p",null,"A signal that can be fired by button presses or other game actions. In and of itself, a cue does nothing, but most commonly it will be used to fire triggers that launch other game actions."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#scene"}),"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The scene during which this cue may be signaled. If this scene is not active, the cue will not be signaled.")))),Object(r.b)("h2",{id:"geofence"},"Geofence"),Object(r.b)("p",null,"A circular region around a waypoint. It can be used to trigger events when players enter or leave a region, or when messages are sent from within that region."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Center")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#waypoint"}),"Waypoint")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Center of the geofence.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Distance")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#number"}),"Number")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Distance in meters around the center that is counted as within the geofence.")))),Object(r.b)("h2",{id:"inbox"},"Inbox"),Object(r.b)("p",null,"An email inbox that you have access to. (This requires some custom setup.)"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Role this inbox belongs to.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Address")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#email"}),"Email")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Email address to send from. Currently must be from @firstperson.travel.")))),Object(r.b)("h2",{id:"interface"},"Interface"),Object(r.b)("p",null,"A combination of panels that create a user interface for a tablet, phone, or device."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"simple")," or ",Object(r.b)("inlineCode",{parentName:"td"},"tabs")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"What type of interface to show. Currently just simple or tabs.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Section"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#string"}),"String")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Section of content pages to use as subpages.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Header panels"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/panels"}),"Panel"),"]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of user interface panels to display at the top.")))),Object(r.b)("h2",{id:"page"},"Page"),Object(r.b)("p",null,"A user interface that can be displayed to a player when the corresponding scene and state is active."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#scene"}),"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The scene during which this page is active. If this scene is not the current scene, the page may still be displayed, but no user action may be taken.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Interface")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#interface"}),"Interface")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The interface that this page is a part of.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Directive"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#string"}),"String")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A high-level directive for the player, that will be displayed in large font at the top of the interface.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Waypoint"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#waypoint"}),"Waypoint")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An optional location for the activity corresponding to this page. This is only visible on the operations page, not to players.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Route"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#route"}),"Route")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An optional route corresponding to this page. This is only visible on the operations page, not to players.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Panels"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/panels"}),"Panel"),"]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List of user interface panels.")))),Object(r.b)("h2",{id:"qr-code"},"Qr code"),Object(r.b)("p",null,"A QR code that can be scanned elsewhere."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role that is expected to scan this code.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Page"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#page"}),"Page")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The page that this QR code will direct you to after scanning.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Cue"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#cue"}),"Cue")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The cue that this QR code will signal if scanned. This cue will only fire if its scene and trip are currently active.")))),Object(r.b)("h2",{id:"relay"},"Relay"),Object(r.b)("p",null,"A phone number by which one player can contact another via text or phone calls."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"For")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role who will be sending or receiving messages through this relay")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"As")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'The role whose messages are received and sent. This will usually be the same as the "for" role, except when you want the "for" role to be impersonating somebody else. In that case, the "as" role is the role being impersonated.')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"With")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#role"}),"Role")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The role that is being messaged with.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Entryway"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If this value is true, the relay will be assigned a universal number. New players can text this number to start a new trip.")))),Object(r.b)("h2",{id:"role"},"Role"),Object(r.b)("p",null,"A participant in the experience. This participant can be a player, an actor, or a scripted automaton."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Type")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"traveler"),", ",Object(r.b)("inlineCode",{parentName:"td"},"performer")," or ",Object(r.b)("inlineCode",{parentName:"td"},"scripted")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'Type of role. "Traveler" refers to the audience, "performer" can be used for actors or internal staff, and "scripted" is for automated roles that are not assigned users.')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Max players"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#integer"}),"Integer")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The maximum number of players who may be a part of this trip as this role. This can be used to support groups of more than one player and device, all sharing the same trip state.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Active if"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If this is specified, the role will not be allowed to be assigned a user if this condition does not pass.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starting page"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#page"}),"Page")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The page that this role will start the trip open.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Required values"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#simple-attribute"}),"Simple attribute"),"]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"(Advanced) Indicates a list of special values that can be supplied for each user account that may play this role. This could be used to specify a custom image for each actor, or custom text associated with a certain role.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interface"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#interface"}),"Interface")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h2",{id:"route"},"Route"),Object(r.b)("p",null,"A path between one waypoint and another, including walking/driving directions. If one of the waypoints has multiple options, then multiple paths will be fetched."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"From")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#waypoint"}),"Waypoint")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The starting waypoint.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"To")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#waypoint"}),"Waypoint")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ending waypoint")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Mode"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"driving"),", ",Object(r.b)("inlineCode",{parentName:"td"},"walking")," or ",Object(r.b)("inlineCode",{parentName:"td"},"cycling")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The method of transit for directions.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Via"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#coords"}),"Coords"),"]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An optional list of coordinates through through which the route must pass.")))),Object(r.b)("h2",{id:"scene"},"Scene"),Object(r.b)("p",null,"A temporal unit of experience. Usually only one scene is active at a time."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Global"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Enable if this scene is always active.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Active if"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Global scenes can be activated or deactived by a conditional.")))),Object(r.b)("h2",{id:"time"},"Time"),Object(r.b)("p",null,"A time at which things happen over the trip. The specific schedule is determined by a variant."),Object(r.b)("h2",{id:"trigger"},"Trigger"),Object(r.b)("p",null,"A fires when a defined event occurs. Once fired, it will apply a set of actions, which change the trip state."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#scene"}),"Scene")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Event"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/events"}),"Event")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Repeatable"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Active if"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/conditions"}),"Condition")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Actions"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/actions"}),"Action"),"]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h2",{id:"variant"},"Variant"),Object(r.b)("p",null,"A variation in trip values, including timing, values, and waypoint options."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#boolean"}),"Boolean")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Section"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#string"}),"String")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Initial values"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#simple-attribute"}),"Simple attribute")," to ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#simple-value"}),"Simple value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Customizations"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#simple-attribute"}),"Simple attribute")," to ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#simple-value"}),"Simple value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Waypoint options"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#waypoint"}),"Waypoint")," to ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#name"}),"Name")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Schedule"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/resources#time"}),"Time")," to ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#time-shorthand"}),"Time shorthand")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h2",{id:"waypoint"},"Waypoint"),Object(r.b)("p",null,'A location used by the trip. Each waypoint can have multiple options that can be set for each trip. For instance, a "lunch" waypoint can have two options, each a different restaurant.'),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"List"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of locations that this waypoint could refer to.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Options \u2192 Address")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#address"}),"Address")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The address of the location.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options \u2192 Title"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#string"}),"String")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options \u2192 Values"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#simple-attribute"}),"Simple attribute")," to ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/reference/fieldtypes#simple-value"}),"Simple value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))))}j.isMDXComponent=!0}}]);