(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(95)),c={id:"text-convo",title:"Text conversation",sidebar_label:"Text conversation"},i={unversionedId:"tutorials/text-convo",id:"tutorials/text-convo",isDocsHomePage:!1,title:"Text conversation",description:"In this example, we will create a scripted conversation with a fictional character. We will cover sending and receiving text and media messages over SMS/MMS, and using logic and conditions to play out differently based on the responses from the player.",source:"@site/docs/tutorials/text-convo.md",permalink:"/docs/tutorials/text-convo",sidebar_label:"Text conversation",sidebar:"sidebar",previous:{title:"Starter project",permalink:"/docs/tutorials/starter"},next:{title:"Video rooms",permalink:"/docs/tutorials/video-rooms"}},l=[{value:"1. Start a project",id:"1-start-a-project",children:[]},{value:"2. Create a role for our character",id:"2-create-a-role-for-our-character",children:[]},{value:"3. Create a role for our player",id:"3-create-a-role-for-our-player",children:[]},{value:"4. Create a phone line for the player",id:"4-create-a-phone-line-for-the-player",children:[]},{value:"5. Assign a phone number",id:"5-assign-a-phone-number",children:[]},{value:"6. Respond to incoming texts",id:"6-respond-to-incoming-texts",children:[]},{value:"7. Add a time delay",id:"7-add-a-time-delay",children:[]},{value:"8. Add a conditional response",id:"8-add-a-conditional-response",children:[]},{value:"9. Add fallback branch",id:"9-add-fallback-branch",children:[]},{value:"10. Test your experience!",id:"10-test-your-experience",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this example, we will create a scripted conversation with a fictional character. We will cover sending and receiving text and media messages over SMS/MMS, and using logic and conditions to play out differently based on the responses from the player."),Object(o.b)("h2",{id:"1-start-a-project"},"1. Start a project"),Object(o.b)("p",null,"From the Charter home page, click on ",Object(o.b)("strong",{parentName:"p"},"Create blank"),' to create a new project from the "Blank" template.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/hello-world/home-1.png",alt:"Add a new interface"}))),Object(o.b)("p",null,"Name your project and click ",Object(o.b)("strong",{parentName:"p"},"Create"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/hello-world/home-2.png",alt:"Add a new interface"}))),Object(o.b)("p",null,"You now have a new project!"),Object(o.b)("h2",{id:"2-create-a-role-for-our-character"},"2. Create a role for our character"),Object(o.b)("p",null,"First off, let's make a role for the character our player is going to talk to. We'll name them \"Penpal\". The role won't be backed by a real person; instead it will respond in scripted ways to messages from the player."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Navigate to Roles > Add role"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/role-1.png",alt:"Add a new role"}))),Object(o.b)("p",null,'Click the default "New role" title to change the title of this role to "Penpal".'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/role-2.png",alt:"Add a new role"}))),Object(o.b)("h2",{id:"3-create-a-role-for-our-player"},"3. Create a role for our player"),Object(o.b)("p",null,"Now let's add a second role for our player. This role will be played by our actual audience."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Navigate to Roles > Add role"),' again, and set the title of this new role to "Player".'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/role-3.png",alt:"Add a new role"}))),Object(o.b)("h2",{id:"4-create-a-phone-line-for-the-player"},"4. Create a phone line for the player"),Object(o.b)("p",null,"We'll add a phone line for our player role, which will let the user playing this role receive messages from the character via text message, and respond via text message as well."),Object(o.b)("p",null,"Click ",Object(o.b)("strong",{parentName:"p"},"Add phone line")," under the Player role."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/phone-1.png",alt:"Add a new role"}))),Object(o.b)("p",null,"Set the ",Object(o.b)("strong",{parentName:"p"},"Counterpart"),' of your new role to "Penpal". This means that the user playing the "Player" role will receive any messages from the "Penpal" role as a text message.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/phone-2.png",alt:"Set a counterpart"}))),Object(o.b)("p",null,"Once you've selected a counterpart, the remaining optional fields appear. Click the ",Object(o.b)("strong",{parentName:"p"},"Entryway")," checkbox to make this phone line an entryway."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/phone-3.png",alt:"Enable entryway"}))),Object(o.b)("p",null,"Making a phone line an entryway means that new participants can text that number, and if they aren't already participating in a run of your project, a new run will be created for them. Entryway phone lines also have dedicated phone numbers that are only for your experience, so you could share that number on a website or business card. Non-entry phone lines have numbers allocated dynamically, so they may not always be the same."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/phone-4.png",alt:"Add a new phone line"}))),Object(o.b)("h2",{id:"5-assign-a-phone-number"},"5. Assign a phone number"),Object(o.b)("p",null,"We can now allocate a unique phone number just for your own experience. Click on ",Object(o.b)("strong",{parentName:"p"},"Schedule")," in the top nav bar, and then click ",Object(o.b)("strong",{parentName:"p"},"Allocate phone numbers")," to assign a phone number to your line."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/entryway-1.png",alt:"Assign a phone number"}))),Object(o.b)("p",null,"You now have a phone number just for your experience!"),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/entryway-2.png",alt:"Assign a phone number"}))),Object(o.b)("p",null,"If you text that number right now, a new run of your project will be created, but nothing will happen because you haven't created any behaviors. Let's change that!"),Object(o.b)("h2",{id:"6-respond-to-incoming-texts"},"6. Respond to incoming texts"),Object(o.b)("p",null,"First, let's make our first scene. Navigate to ",Object(o.b)("strong",{parentName:"p"},"Scene list > Add scene")," and choose a name."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/scene-1.png",alt:"Add a scene"}))),Object(o.b)("p",null,"Now that we have a scene, let's navigate to that scene in the ",Object(o.b)("strong",{parentName:"p"},"Scenes")," menu, and click ",Object(o.b)("strong",{parentName:"p"},"Add behavior"),". Behaviors are how all activity occurs inside a Charter experience. Every behavior has a ",Object(o.b)("strong",{parentName:"p"},"Trigger"),", which defines the circumstances under which the behavior will activate, and a list of ",Object(o.b)("strong",{parentName:"p"},"Actions"),", which define what happens once the behavior activates. Click on the ",Object(o.b)("strong",{parentName:"p"},"Trigger add button")," to set this behavior's triggering conditions."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-1.png",alt:"Add a behavior"}))),Object(o.b)("p",null,'Select "Text received" from the dropdown box, and click on the check to confirm.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-2.png",alt:"Choose trigger type"}))),Object(o.b)("p",null,'Select "Player" for the ',Object(o.b)("strong",{parentName:"p"},"From"),' field and "Penpal" for the ',Object(o.b)("strong",{parentName:"p"},"To"),' field. This means that this behavior will activate when the user playing the "Player" sends a text message to the "Penpal" role.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-3.png",alt:"Set trigger params"}))),Object(o.b)("p",null,"Now let's add an action! Click the ",Object(o.b)("strong",{parentName:"p"},"Actions add button"),"."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-4.png",alt:"Add an action"}))),Object(o.b)("p",null,'Select "Send text" as the action type, and click the check button.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-5.png",alt:"Add an action"}))),Object(o.b)("p",null,'Select "Penpal" for the ',Object(o.b)("strong",{parentName:"p"},"From"),' field, "Player" for the ',Object(o.b)("strong",{parentName:"p"},"To"),' field, and the text "Hey there, thanks for writing." for the ',Object(o.b)("strong",{parentName:"p"},"Content")," field."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-6.png",alt:"Add an action"}))),Object(o.b)("p",null,'You now have a fully functional behavior. Now, if you send a text message to the number visible at the top of the "Schedule" tab in your project, you should get a response back saying "Hey there, thanks for writing". Try it out!'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/text-1.png",alt:"Test texting"}))),Object(o.b)("h2",{id:"7-add-a-time-delay"},"7. Add a time delay"),Object(o.b)("p",null,"Let's add a new message after a time delay. Add two new actions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'A "Wait" action with a duration of "5s" (five seconds).'),Object(o.b)("li",{parentName:"ul"},'A "Send text" action from "Penpal" to "Player" with the ',Object(o.b)("strong",{parentName:"li"},"Content"),' "What\'s your favorite color?"')),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-7.png",alt:"Add a delay"}))),Object(o.b)("p",null,'You can use "Wait" actions to add time delays, large and small, between your actions.'),Object(o.b)("h2",{id:"8-add-a-conditional-response"},"8. Add a conditional response"),Object(o.b)("p",null,"Let's add a conditional response that depends on the message received from the player."),Object(o.b)("p",null,"The simplest way to know that we've already asked the question about favorite color, and therefore that we are waiting for an answer to that question, is to add a new Scene, and start that scene. Let's do that."),Object(o.b)("p",null,"Navigate to ",Object(o.b)("strong",{parentName:"p"},"Scene list > Add scene"),', and set the title of your new scene to "Second scene".'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/scene-2.png",alt:"Add a second scene"}))),Object(o.b)("p",null,"Scenes are sorted alphabetically, so if you have many scenes in your project, you'll probably want to add a numerical ordering at the start of each of their names."),Object(o.b)("p",null,"Now we'll want to start this second scene after sending the color question. Navigate to ",Object(o.b)("strong",{parentName:"p"},"First scene")," and select your ",Object(o.b)("strong",{parentName:"p"},"On text"),' behavior. Add a new action with the "Start scene" type, and select "Second scene" as the scene to start.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-8.png",alt:"Start next scene"}))),Object(o.b)("p",null,"Now, after having asked what color is the player's favorite, the second scene will start, where we can respond to this query."),Object(o.b)("p",null,"Navigate to ",Object(o.b)("strong",{parentName:"p"},"Scene list > Second scene")," and select ",Object(o.b)("strong",{parentName:"p"},"Add behavior"),'. Select "Text received" for the ',Object(o.b)("strong",{parentName:"p"},"Trigger")," field, and ",Object(o.b)("strong",{parentName:"p"},"From"),' the "Player" role and ',Object(o.b)("strong",{parentName:"p"},"To"),' the "Penpal" role.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-9.png",alt:"Add a new behavior"}))),Object(o.b)("p",null,'Now let\'s add some conditional logic. Add an action with the "Branch" type.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-10.png",alt:"Add a new behavior"}))),Object(o.b)("p",null,"Branch actions do different things based on Conditions. The ",Object(o.b)("strong",{parentName:"p"},"If")," field of this Branch is a Condition. There are many different kinds of conditions, used to evaluate the state of your experience."),Object(o.b)("p",null,"Click the ",Object(o.b)("strong",{parentName:"p"},"Add If"),' button, and select "Text contains" as the condition, then click the check button.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-11.png",alt:"Add condition"}))),Object(o.b)("p",null,"Set the field of the ",Object(o.b)("strong",{parentName:"p"},"Text contains"),' condition to "red".'),Object(o.b)("p",null,"Now let's add a conditional action. The actions in the ",Object(o.b)("strong",{parentName:"p"},"Actions"),' field of this condition will only be executed if the player\'s response to this query contains the word "red".'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-12.png",alt:"Add conditional actions"}))),Object(o.b)("p",null,'Add a new "Send text" action under this condition, from "Penpal" to "Player" with the content "Oh, red, my favorite as well. The color of love, life, and danger".'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-13.png",alt:"See results"}))),Object(o.b)("h2",{id:"9-add-fallback-branch"},"9. Add fallback branch"),Object(o.b)("p",null,"In the ",Object(o.b)("strong",{parentName:"p"},"Else")," field, you can define actions that take place if none of the conditions specified in the ",Object(o.b)("strong",{parentName:"p"},"If")," or ",Object(o.b)("strong",{parentName:"p"},"Elseifs")," fields pass."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-14.png",alt:"Add an else"}))),Object(o.b)("p",null,'Add a "Send text" action in the ',Object(o.b)("strong",{parentName:"p"},"Else"),' field, from "Penpal" to "Player" with the ',Object(o.b)("strong",{parentName:"p"},"Content"),' field "The color {{event.content}}, not my personal choice, but not without its charms.".'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/behavior-15.png",alt:"Add an else"}))),Object(o.b)("p",null,'This "{{event.content}}" indicator is a text insertion, which inserts the content of the message that triggered this behavior. You can read more about text insertions on ',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/concepts/textinsertions"}),"its page in the Concepts section"),"."),Object(o.b)("h2",{id:"10-test-your-experience"},"10. Test your experience!"),Object(o.b)("p",null,"You can now test your total experience by texting the number allocated to your experience in the ",Object(o.b)("strong",{parentName:"p"},"Schedule"),' tab. You can see that if you respond to the message with "Red", the first reply is sent, but if you respond with a different color, the different reply is sent, with the text insertion filled in with the color you replied with.'),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/img/tutorials/text-convo/text-2.png",alt:"See results"}))))}b.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),h=a,u=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?r.a.createElement(u,i(i({ref:t},s),{},{components:n})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);