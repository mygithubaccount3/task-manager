(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{14:function(e,t,a){e.exports=a(33)},19:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),s=(a(19),a(8)),i=a(6);a(23);i.initializeApp({apiKey:"AIzaSyDCvvwpLsE7dr3lU4Ehxb6un1h-LNbw_fI",authDomain:"task-manager-8e28f.firebaseapp.com",databaseURL:"https://task-manager-8e28f.firebaseio.com",projectId:"task-manager-8e28f",storageBucket:"task-manager-8e28f.appspot.com",messagingSenderId:"80493297086",appId:"1:80493297086:web:46b2e630260afcab9acdef"});var o=i.firestore(),m=a(3),d=a(2),u=a(35);function p(e){var t=e.triggeredForm,a=e.closeForm;return l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n="";switch(t){case"submitOpenedTask":n="opened";break;case"submitSelectedTask":n="selected";break;case"submitRunningTask":n="running";break;case"submitEvaluatingTask":n="evaluating";break;case"submitLiveTask":n="live";break;case"menu":n=document.getElementById("addTaskForm").typeDropdown.value}var l=Object(u.a)();o.collection("tasks").doc(l).set({id:l,type:n,title:e.target.title.value,description:e.target.description.value,labels:[e.target.uiDesignLabel.checked?"UI Design":"",e.target.marketingLabel.checked?"Marketing":"",e.target.growthExperimentLabel.checked?"Growth Experiment":""]}).catch((function(e){alert("Error adding document: ",e)})),a()},id:"addTaskForm"},l.a.createElement("label",null,"Title: ",l.a.createElement("input",{type:"text",name:"title"})),l.a.createElement("label",null,"Description: ",l.a.createElement("input",{type:"text",name:"description"})),l.a.createElement("label",null,"UI Design ",l.a.createElement("input",{name:"uiDesignLabel",type:"checkbox"})),l.a.createElement("label",null,"Marketing ",l.a.createElement("input",{name:"marketingLabel",type:"checkbox"})),l.a.createElement("label",null,"Growth Experiment ",l.a.createElement("input",{name:"growthExperimentLabel",type:"checkbox"})),l.a.createElement("select",{name:"typeDropdown",style:{display:"none"}},l.a.createElement("option",null,"opened"),l.a.createElement("option",null,"selected"),l.a.createElement("option",null,"running"),l.a.createElement("option",null,"evaluating"),l.a.createElement("option",null,"live")),l.a.createElement("button",{type:"submit"},"Add"))}function E(e){var t=e.closeForm;return l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),o.collection("tasks").doc(e.target.hiddenId.value).update({description:e.target.description.value,id:e.target.hiddenId.value,labels:[e.target.growthExperimentLabel.checked,e.target.marketingLabel.checked,e.target.uiDesignLabel.checked],title:e.target.title.value,type:e.target.hiddenType.value}),t()},id:"editTaskForm"},l.a.createElement("input",{type:"hidden",id:"hiddenId",name:"hiddenId"}),l.a.createElement("input",{type:"hidden",id:"hiddenType",name:"hiddenType"}),l.a.createElement("label",null,"Title: ",l.a.createElement("input",{type:"text",name:"title"})),l.a.createElement("label",null,"Description: ",l.a.createElement("input",{type:"text",name:"description"})),l.a.createElement("label",null,"UI Design ",l.a.createElement("input",{name:"uiDesignLabel",type:"checkbox"})),l.a.createElement("label",null,"Marketing ",l.a.createElement("input",{name:"marketingLabel",type:"checkbox"})),l.a.createElement("label",null,"Growth Experiment ",l.a.createElement("input",{name:"growthExperimentLabel",type:"checkbox"})),l.a.createElement("button",{type:"submit"},"Edit"),l.a.createElement("button",{onClick:function(e){o.collection("tasks").doc(e.target.parentElement.hiddenId.value).delete()}},"Delete"))}function g(e){var t=e.type,a=e.count,n=e.svg;return l.a.createElement("div",{className:"tasks__header tasks__header--".concat(t)},l.a.createElement("div",null,l.a.createElement(m.a,{icon:n,color:"white",style:{marginRight:"10px"}}),l.a.createElement("h1",{className:"tasks__title"},t)),l.a.createElement("span",{className:"tasks__count"},a))}function k(e){e.preventDefault(),e.target.classList.contains("tasks__items")||e.target.classList.contains("item")?e.dataTransfer.dropEffect="all":e.dataTransfer.dropEffect="none"}function y(e){e.dataTransfer.setData("text/html",e.target.id)}function b(e){e.preventDefault();var t=e.dataTransfer.getData("text/html"),a=document.getElementById(t),n=a.parentElement,l=document.getElementById(e.target.id),r=l.parentElement;r.id!==n.id&&(l.className===a.className?o.collection("tasks").doc(t).update({type:r.getAttribute("id")}):o.collection("tasks").doc(t).update({type:l.getAttribute("id")}))}var h={"Growth Experiment":l.a.createElement("span",{key:1,className:"tasks__label tasks__label--red"},"Growth Experiment"),Marketing:l.a.createElement("span",{key:2,className:"tasks__label tasks__label--purple"},"Marketing"),"UI Design":l.a.createElement("span",{key:3,className:"tasks__label tasks__label--green"},"UI Design")};function v(e,t,a,n,l,r,c){return function(){document.getElementById("overlay").style.display="block",document.getElementById("editTaskForm").style.display="flex",document.getElementById("editTaskForm").hiddenId.value=e,document.getElementById("editTaskForm").hiddenType.value=t,document.getElementById("editTaskForm").title.value=a,document.getElementById("editTaskForm").description.value=n,document.getElementById("editTaskForm").growthExperimentLabel.checked=c?"checked":"",document.getElementById("editTaskForm").marketingLabel.checked=r?"checked":"",document.getElementById("editTaskForm").uiDesignLabel.checked=l?"checked":""}}function f(e){var t=e.type,a=e.tasks,n=e.openForm,r=a.map((function(e){if(e.type===t)return l.a.createElement("li",{key:e.id,id:e.id,className:"item",draggable:"true",onDragStart:y,onDrop:b,onDragOver:k},l.a.createElement("button",{onClick:v(e.id,e.type,e.title,e.description,e.labels[0],e.labels[1],e.labels[2])},l.a.createElement(m.a,{icon:d.b,color:"black"})),l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.description),l.a.createElement("div",{className:"tasks__labels"},e.labels.map((function(e){return e&&h[e]}))))}));return l.a.createElement("ul",{className:"tasks__items tasks__items--".concat(t),id:t,onDrop:b,onDragOver:k},r,l.a.createElement("li",{className:"submitButtonContainer"},l.a.createElement("button",{onClick:n,id:"submit".concat(t.charAt(0).toUpperCase()+t.slice(1),"Task")},l.a.createElement("span",null),l.a.createElement("span",null))))}a(32);var I=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(s.a)(c,2),u=i[0],k=i[1],y=0,b=0,h=0,v=0,I=0;Object(n.useEffect)((function(){o.collection("tasks").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),r(t)}))}),[]);for(var T=0;T<a.length;T++)"opened"===a[T].type&&y++,"selected"===a[T].type&&b++,"running"===a[T].type&&h++,"evaluating"===a[T].type&&v++,"live"===a[T].type&&I++;function D(e){document.getElementById("overlay").style.display="block",document.getElementById("addTaskForm").style.display="flex",console.log(e.currentTarget.parentElement.classList),e.currentTarget.parentElement.classList.contains("menu")?(document.getElementById("addTaskForm").typeDropdown.style.display="block",k(e.currentTarget.parentElement.className)):(document.getElementById("addTaskForm").typeDropdown.style.display="none",k(e.currentTarget.id))}function x(){var e=document.getElementById("addTaskForm"),t=document.getElementById("editTaskForm");e.reset(),t.reset(),e.style.display="none",t.style.display="none",document.getElementById("overlay").style.display="none"}return l.a.createElement("div",{className:"App"},l.a.createElement("div",{id:"overlay",onClick:x}),l.a.createElement(p,{triggeredForm:u,closeForm:x}),l.a.createElement(E,{closeForm:x}),l.a.createElement("div",{className:"menu"},l.a.createElement(m.a,{icon:d.e,color:"#00b8ff",style:{marginRight:"10px"},onClick:D}),l.a.createElement(m.a,{icon:d.g,color:"#00b8ff"}),l.a.createElement("input",{type:"text",id:"searchInput",placeholder:"Search...",onChange:function(){o.collection("tasks").onSnapshot((function(e){var t=[];""!==document.getElementById("searchInput").value.trim()?e.forEach((function(e){(e.data().title.includes(document.getElementById("searchInput").value.trim())||e.data().description.includes(document.getElementById("searchInput").value.trim())||e.data().labels.includes(document.getElementById("searchInput").value.trim()))&&t.push(e.data())})):e.forEach((function(e){t.push(e.data())})),r(t)}))}})),l.a.createElement("div",{className:"taskTypes"},l.a.createElement("div",{className:"tasks"},l.a.createElement(g,{type:"opened",count:y,svg:d.c}),l.a.createElement(f,{type:"opened",tasks:a,openForm:D})),l.a.createElement("div",{className:"tasks"},l.a.createElement(g,{type:"selected",count:b,svg:d.d}),l.a.createElement(f,{type:"selected",tasks:a,openForm:D})),l.a.createElement("div",{className:"tasks"},l.a.createElement(g,{type:"running",count:h,svg:d.b}),l.a.createElement(f,{type:"running",tasks:a,openForm:D})),l.a.createElement("div",{className:"tasks"},l.a.createElement(g,{type:"evaluating",count:v,svg:d.f}),l.a.createElement(f,{type:"evaluating",tasks:a,openForm:D})),l.a.createElement("div",{className:"tasks"},l.a.createElement(g,{type:"live",count:I,svg:d.a}),l.a.createElement(f,{type:"live",tasks:a,openForm:D}))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b73704a9.chunk.js.map