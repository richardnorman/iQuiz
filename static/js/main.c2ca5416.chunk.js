(this.webpackJsonpiquiz=this.webpackJsonpiquiz||[]).push([[0],{44:function(e,t,a){e.exports=a(64)},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=(a(49),a(31)),l=a(32),s=a(37),u=a(36),m=(a(50),a(90)),d=a(65),h=a(92),f=(a(51),function(e){var t=60;return e.quizStarted&&setInterval((function(){if(!e.quizComplete){0===(t-=1)&&e.timerDoneHandler();var a=document.querySelector(".timer");null!=a&&(a.innerHTML="".concat(t," seconds remaining"))}}),1e3),r.a.createElement("h3",{className:"timer"},t," seconds remaining")}),E=(a(52),function(e){var t=function(t){return e.quizStarted&&!e.quizComplete?r.a.createElement(f,{timerDoneHandler:e.timerDoneHandler,quizStarted:e.quizStarted,quizComplete:e.quizComplete}):null};return r.a.createElement(m.a,{position:"fixed"},r.a.createElement(h.a,null,r.a.createElement(d.a,{variant:"h4"},"iQuiz"),r.a.createElement(t,null)))}),v=(a(57),a(93)),w=a(94),q=a(98),g=a(95),p=a(97),z=a(4),b=(a(58),function(e){var t=Object(z.a)({root:{color:"#default","&$checked":{color:"#3f51b5"}},checked:{}})((function(e){return r.a.createElement(p.a,Object.assign({color:"default"},e))}));return r.a.createElement(v.a,{className:"question-card"},r.a.createElement(w.a,null,r.a.createElement(d.a,null,e.question),r.a.createElement(q.a,{onChange:e.radioChangeHandler},e.questionAnswers.map((function(a,n){return r.a.createElement(g.a,{key:"answer"+n,value:e.cardNumber+("*"===a[0]?"Correct":"Incorrect")+n,control:r.a.createElement(t,null),label:a.replace("*","")})})))))}),k=function(e){var t=e.questions,a=e.answers,n=(e.radioHandler,e.radioChangeHandler);return r.a.createElement("div",{className:"card-list"},t.map((function(e,t){return r.a.createElement(b,{key:t,cardNumber:t,question:e,questionAnswers:a[t],radioChangeHandler:n})})))},y=(a(59),a(96)),C=function(e){return r.a.createElement("div",{className:"start-menu"},r.a.createElement("h1",{className:"start-title"},"Ready to take the quiz?"),r.a.createElement("p",{className:"start-description"},"This quiz is a timed 1 minute test of cognitive ability. It was found that only 17% of university students get all three questions correct."),r.a.createElement(y.a,{className:"start-button",size:"large",variant:"outlined",color:"primary",onClick:e.handler},"START"))},N=(a(60),function(e){return r.a.createElement(y.a,{onClick:e.handler,className:"submit-button",variant:"contained",size:"large",color:"primary"},"SUBMIT")}),H=(a(61),a(99)),A=(a(62),a(34)),S=a.n(A),I=a(35),$=a.n(I),T=function(e){return r.a.createElement("div",{className:"answer-container"},"Correct"===e.answer?r.a.createElement(S.a,{style:{color:"green"}}):r.a.createElement($.a,{color:"secondary"}),r.a.createElement("h4",{className:"answer-result"},e.index+1,".",""===e.answer?" Incorrect":" "+e.answer))},j=function(e){return r.a.createElement("div",{className:"results-menu"},r.a.createElement("h1",{className:"results-title"},"You scored ",Math.round(e.correctAnswers/3*100)+"%"),r.a.createElement(H.a,{className:"linear-results",variant:"determinate",value:e.correctAnswers/3*100}),r.a.createElement("div",{className:"results-user-answers"},e.userAnswersArray.map((function(e,t){return r.a.createElement(T,{key:t,index:t,answer:e})}))),r.a.createElement(y.a,{className:"take-again-button",size:"large",variant:"outlined",color:"primary",onClick:function(e){window.location.reload(!0)}},"TAKE AGAIN"))},O=["A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?","If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?","In a lake, there is a patch of lily pads. Every day, the patch doubles in size. If it takes 48 days for the patch to cover the entire lake, how long would it take for the patch to cover half of the lake?"],x=[["$1.00","$1.10","*$1.05","$0.10"],["60 minutes","100 minutes","20 minutes","*5 minutes"],["24 days","*47 days","2 days","12 days"]],D=["","",""],M=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).quizStartHandler=function(){n.setState({quizStarted:!0})},n.submitClickedHandler=function(){var e=0;D.forEach((function(t){"Correct"===t&&e++})),n.setState({correctAnswers:e,quizComplete:!0})},n.radioChangeHandler=function(e){var t=e.target.value[0];D[t]=e.target.value.substring(1,e.target.value.length-1)},n.state={quizStarted:!1,quizComplete:!1,correctAnswers:0},n}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(E,{timerDoneHandler:this.submitClickedHandler,quizStarted:this.state.quizStarted,quizComplete:this.state.quizComplete}),this.state.quizComplete?r.a.createElement(j,{correctAnswers:this.state.correctAnswers,userAnswersArray:D}):r.a.createElement(n.Fragment,null,this.state.quizStarted?r.a.createElement("div",null,r.a.createElement(k,{questions:O,answers:x,radioChangeHandler:this.radioChangeHandler}),r.a.createElement(N,{handler:this.submitClickedHandler})):r.a.createElement(C,{handler:this.quizStartHandler})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.c2ca5416.chunk.js.map