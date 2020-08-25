(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(95)),i={id:"global",title:"Global elements",sidebar_label:"Global elements"},c={unversionedId:"concepts/global",id:"concepts/global",isDocsHomePage:!1,title:"Global elements",description:"Global elements are all elements in your experience that are shared across the entire experience and all scenes.",source:"@site/docs/concepts/global.md",permalink:"/docs/concepts/global",sidebar_label:"Global elements",sidebar:"sidebar",previous:{title:"Creating projects",permalink:"/docs/concepts/creating"},next:{title:"Scenes",permalink:"/docs/concepts/scenes"}},l=[{value:"Roles",id:"roles",children:[{value:"Roles",id:"roles-1",children:[]},{value:"Interfaces",id:"interfaces",children:[]},{value:"Phone lines",id:"phone-lines",children:[]},{value:"Email accounts",id:"email-accounts",children:[]}]},{value:"Places",id:"places",children:[{value:"Places",id:"places-1",children:[]},{value:"Geofences",id:"geofences",children:[]},{value:"Routes",id:"routes",children:[]}]},{value:"Defaults",id:"defaults",children:[{value:"Moments",id:"moments",children:[]},{value:"Variants",id:"variants",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Global elements are all elements in your experience that are shared across the entire experience and all scenes."),Object(o.b)("h2",{id:"roles"},"Roles"),Object(o.b)("p",null,'The "Roles" section of the project creation tool is dedicated to defining the participants in your experience and how they communicate and interact with your experience.'),Object(o.b)("h3",{id:"roles-1"},"Roles"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#role"}),"Role")," is a specific part for a character in your experience. These could be participants: players or teams, actors, crew, or staff members. Or these could be automated characters like NPCs or chatbots."),Object(o.b)("p",null,"State in your experiences is tracked by role, not by individual participant. So, for instance, if you want a team of several players to all progress in your experience in lockstep, then they should share a single role. If, however, you want different players to progress independently within a single run of your experience, there should be a different role for each type of player."),Object(o.b)("p",null,"Some example experience designs that will have different role setups:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A single-player experience might have one role for the player."),Object(o.b)("li",{parentName:"ul"},'A competitive experience with two teams might have two roles, "Team A" and "Team B". You can increase the "Max users" of each role to allow multiple participants on each team -- but those participants will progress in lockstep.'),Object(o.b)("li",{parentName:"ul"},"An immersive theater type experience will have one role for each actor participant, and one or many roles for the audience."),Object(o.b)("li",{parentName:"ul"},"A digital remote game might have one role for the player, and a role for each automated simulated character.")),Object(o.b)("h3",{id:"interfaces"},"Interfaces"),Object(o.b)("p",null,"If you want a role to be able to interact with your experience using a webpage, you need to add an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#interface"}),"Interface"),". An Interface creates the frame for viewing a web UI for your participants, and all aspects of this interface that will stay consistent over the entire experience, including color and styling."),Object(o.b)("p",null,"Over the course of your experience, you'll navigate participants between their various pages, each with different content. All of the pages that a participant can possibly see will be created within the interface associated with that participant's role."),Object(o.b)("p",null,"The simple default interface just shows a role's current page. If you want, you can make a more complex interface by adding tabs, and then your participant will be able to switch between the tabs at-will. For instance, you might have one tab that is the current page, one for browsing messages, and another that's simple help text."),Object(o.b)("p",null,'You can also set an interface as an "Entryway" if you like. If checked, Charter will make a web form available where new participants can join your experience.'),Object(o.b)("p",null,"An interface can be shared across multiple roles. For instance, if you have four subgroups of participants that are in different places in the story, you can let them share the same Interface. Then each subgroup or role will be viewing a different slide in the deck, but they will share the deck, so you won't need to duplicate your work."),Object(o.b)("h3",{id:"phone-lines"},"Phone lines"),Object(o.b)("p",null,"Once you've created a role, if you want users with that role to text message or have phone calls with another participant, you'll need to add a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#phone-line"}),"Phone line"),". Roles can have multiple phone lines with different other roles: in this case a different phone number will be assigned to each counterpart."),Object(o.b)("p",null,"Each phone line belongs to a certain role: that is the role who will be sending and receiving texts over SMS, or making or receiving phone calls."),Object(o.b)("p",null,'Each phone line also has a "Counterpart": that is the role who messages and phone calls will be exchanged with.'),Object(o.b)("p",null,'Say, for instance, if there is a phone line for the "Player" role with a "Guide" role as its counterpart. If the Guide sends a message to the Player, it will be sent to the user in the Player role\'s phone number if present. And if that user responds, the incoming message will be sent back to the "Guide" role, and a ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/events#text-received"}),"Text received")," event will occur."),Object(o.b)("p",null,'Optionally, a phone line can have an "Impersonating" value. For instance, you could have a phone line for your "StageManager" role, with a counterpart of the "Player", and impersonating an "Actor" role. In that case, if the stage manager user texts that phone line, the message will be sent to the player ',Object(o.b)("em",{parentName:"p"},"as if")," the actor user had texted it."),Object(o.b)("p",null,'Normally, phone lines are allocated dynamically and may be different for each participant. If you want a public phone number for your experience that will always be the same, you may configure a phone as an "Entryway" by checking that option. Entryway phone lines will always be the same, and can be used to start new runs of your experience. Any user who texts or calls the number of an entryway phone line will start a new run of your experience, and will be added as a new player.'),Object(o.b)("h3",{id:"email-accounts"},"Email accounts"),Object(o.b)("p",null,"If you want a role to be able to send and receive emails, you can add an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#email-account"}),"Email account"),". The specific email address cannot be customized at the moment, but that ability is on our roadmap."),Object(o.b)("h2",{id:"places"},"Places"),Object(o.b)("p",null,"The Places section of the interface is where you define locations for real-world, site specific experiences, if those are used by your experience."),Object(o.b)("h3",{id:"places-1"},"Places"),Object(o.b)("p",null,"You'll define a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#place"}),"Place"),' for each part of your experience that can happen on a specific site. Most places will have only one "Location", or physical address.'),Object(o.b)("p",null,'Some experiences may want to have multiple locations for a single place. For instance, if you want to send your players to different restaurants for a snack break, you would define one Place, called "Snack" (the name of what happens in this place), and several Locations, one for each restaurant. You can then specify the specific location for the "Snack" place uniquely for each run of your experience.'),Object(o.b)("h3",{id:"geofences"},"Geofences"),Object(o.b)("p",null,"Each place can have an associated ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#geofence"}),"Geofence"),", which is a circular radius around that location. When a participant enters that geofence, a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/events#geofence-entered"}),"Geofence entered")," event will occur."),Object(o.b)("h3",{id:"routes"},"Routes"),Object(o.b)("p",null,"You can define ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#route"}),"Routes")," between Places. These routes are used to provide walking or driving directions between those places. These directions will be calculated for every possible location for both of those places."),Object(o.b)("h2",{id:"defaults"},"Defaults"),Object(o.b)("p",null,"When creating your projects, you'll create behaviors matching the abstract definition of many variables in your experience: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#moment"}),"Moments")," instead of clock times, ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#place"}),"Places")," instead of physical locations, and variables instead of specific values."),Object(o.b)("p",null,"The Defaults section of the project creation tool is where you attach specific values to those abstract identifiers."),Object(o.b)("h3",{id:"moments"},"Moments"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#moment"}),"Moment"),' indicates that there is a certain time that will happen in each the runs of your experience. For instance, "Dinner time" might be a moment, or "Start of experience", or "Ferry departure".'),Object(o.b)("p",null,"You do not define the clock time of the moment when creating the moment, because that clock time might be different for different schedules of your experience. Clock times are defined in Variants, defined below."),Object(o.b)("h3",{id:"variants"},"Variants"),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/reference/resources#variant"}),"Variant"),' is a set of default values for your project for its Moments, Places, and variables. Each project has an initial variant called "Defaults", and if you are only running one version of your experience, this single default variant should be enough.'),Object(o.b)("p",null,"Each variant has a few sections."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Variable defaults")," define initial values for variables, which can then be read using conditionals like ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/conditions#variable-contains"}),"Variable contains"),", inserted into displays or messages using ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/concepts/textinsertions"}),"Text insertions"),", and updated using actions like ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/reference/actions#set_value"}),"Set variable"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Customization defaults")," allow you to define default values for customizations. Customizations are for text values that you want to be able to set and edit as experience administrators in the Operations view. For instance, you could use a customization to enter the food preferences of a guest, or their license plate number. Customizations can be inserted into displays or messages using ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/concepts/textinsertions"}),"Text insertions"),", but cannot be updated within the experience itself."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Moment schedule")," defines clock times for each Moment in your experience, relative to the start date and time zone of each run. So you would specify ",Object(o.b)("inlineCode",{parentName:"li"},"3:00pm")," or ",Object(o.b)("inlineCode",{parentName:"li"},"12:45am"),", which would be interpreted as that time on the day of the experience. You can specify clock times in subsequent days by using a value such as ",Object(o.b)("inlineCode",{parentName:"li"},"+1d 3:00pm"),", or ",Object(o.b)("inlineCode",{parentName:"li"},"+2d 7:15am"),".")))}p.isMDXComponent=!0},95:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=n,d=u["".concat(i,".").concat(h)]||u[h]||b[h]||o;return a?r.a.createElement(d,c(c({ref:t},s),{},{components:a})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);