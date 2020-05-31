(this.webpackJsonptic_tac_toe=this.webpackJsonptic_tac_toe||[]).push([[0],{21:function(n,t,e){n.exports=e(41)},26:function(n,t,e){},41:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),i=e(7),o=e.n(i),c=(e(26),e(1)),u=e(2),l=e(3),s="not_started",f="in_progress",p="over",d={easy:"easy",medium:"medium",difficult:"difficult"},m={1:1,0:0,2:-1},h=function(n,t){return n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n},b=function(n){return 1===n?2:1},x=e(15),g=function n(t){var e=this;Object(x.a)(this,n),this.makeMove=function(n,t){null===e.grid[n]&&(e.grid[n]=t)},this.getEmptySquares=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid,t=[];return n.forEach((function(n,e){null===n&&t.push(e)})),t},this.isEmpty=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid;return e.getEmptySquares(n).length===Math.pow(3,2)},this.getWinner=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.grid,t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=null;return t.forEach((function(t,a){null!==n[t[0]]&&n[t[0]]===n[t[1]]&&n[t[0]]===n[t[2]]?(r=n[t[0]],e.winningIndex=a):null===r&&0===e.getEmptySquares(n).length&&(r=0,e.winningIndex=null)})),r},this.clone=function(){return new n(e.grid.concat())},this.getStrikethroughStyles=function(){switch(e.winningIndex){case 0:return"\n          transform: none;\n          top: 41px;\n          left: 15px;\n          width: ".concat(285,"px;\n        ");case 1:return"\n          transform: none;\n          top: 140px;\n          left: 15px;\n          width: ".concat(285,"px;\n        ");case 2:return"\n          transform: none;\n          top: 242px;\n          left: 15px;\n          width: ".concat(285,"px;\n        ");case 3:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: -86px;\n          width: ".concat(285,"px;\n        ");case 4:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: 15px;\n          width: ".concat(285,"px;\n        ");case 5:return"\n          transform: rotate(90deg);\n          top: 145px;\n          left: 115px;\n          width: ".concat(285,"px;\n        ");case 6:return"\n          transform: rotate(45deg);\n          top: 145px;\n          left: -44px;\n          width: ".concat(400,"px;\n        ");case 7:return"\n          transform: rotate(-45deg);\n          top: 145px;\n          left: -46px;\n          width: ".concat(400,"px;\n        ");default:return null}},this.grid=t||new Array(Math.pow(3,2)).fill(null),this.winningIndex=null},v=e(16),w=function n(t,e){var r,a=m[e],i=-1,o=null;if(null!==t.getWinner())return[m[t.getWinner()],0];var c,u=Object(v.a)(t.getEmptySquares());try{for(u.s();!(c=u.n()).done;){var l=c.value,s=t.clone();s.makeMove(l,e),(r=a*n(s,b(e))[0])>=i&&(i=r,o=l)}}catch(f){u.e(f)}finally{u.f()}return[a*i,o]},y=e(17),O=e.n(y),j="\n  border-bottom-left-radius: 15px 255px;\n  border-bottom-right-radius: 225px 15px;\n  border-top-left-radius: 255px 15px;\n  border-top-right-radius: 15px 225px;\n  border: 2px solid #41403e;\n";function E(){var n=Object(c.a)(["\n  font-size: 16px;\n"]);return E=function(){return n},n}function k(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  flex: 0 0 auto;\n  width: 100%;\n"]);return k=function(){return n},n}function S(){var n=Object(c.a)(["\n  flex: 1 1 auto;\n  text-align: center;\n"]);return S=function(){return n},n}function C(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n  font-size: 24px;\n  font-weight: bold;\n  text-transform: uppercase;\n"]);return C=function(){return n},n}function M(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: #fff;\n  max-height: 100%;\n  height: 100%;\n  align-items: center;\n  backface-visibility: hidden;\n  padding: 1.25rem;\n  ","; // Adding new border styles\n"]);return M=function(){return n},n}function q(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n  position: relative;\n  margin: 0 auto;\n  top: 10%;\n  right: auto;\n  bottom: auto;\n  width: 320px;\n"]);return q=function(){return n},n}var I={overlay:{backgroundColor:"rgba(0,0,0, 0.6)"}},W=function(n){var t=n.isOpen,e=n.close,r=n.startNewGame,i=n.winner;return a.a.createElement(_,{isOpen:t,onRequestClose:e,style:I},a.a.createElement(A,null,a.a.createElement(z,null,"Game over"),a.a.createElement(G,null,i),a.a.createElement(T,null,a.a.createElement(X,{onClick:e},"Close"),a.a.createElement(X,{onClick:r},"Start over"))))},_=Object(u.a)(O.a)(q()),A=u.a.div(M(),j),z=u.a.p(C()),G=u.a.p(S()),T=u.a.div(k()),X=u.a.button(E());function B(){var n=Object(c.a)(["\n  position: absolute;\n  ","\n  background-color: indianred;\n  height: 5px;\n  width: ",";\n"]);return B=function(){return n},n}function J(){var n=Object(c.a)(["\n  font-size: 68px;\n"]);return J=function(){return n},n}function N(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ","px;\n  height: ","px;\n  ","; // Adding new border styles\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return N=function(){return n},n}function P(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  width: ",";\n  flex-flow: wrap;\n  position: relative;\n"]);return P=function(){return n},n}function R(){var n=Object(c.a)([""]);return R=function(){return n},n}function $(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 30px;\n"]);return $=function(){return n},n}function D(){var n=Object(c.a)([""]);return D=function(){return n},n}function F(){var n=Object(c.a)(["\n  display: flex;\n  width: 150px;\n  justify-content: space-between;\n"]);return F=function(){return n},n}var H=new Array(Math.pow(3,2)).fill(null),K=new g,L=u.a.div(F()),Q=u.a.div(D()),U=u.a.div($()),V=u.a.p(R()),Y=u.a.div(P(),(function(n){var t=n.dims;return"".concat(105*t,"px")})),Z=u.a.div(N(),100,100,j),nn=u.a.p(J()),tn=u.a.div(B(),(function(n){return n.styles}),(function(n){return!n.styles&&"0px"})),en=function(){var n=Object(r.useState)(H),t=Object(l.a)(n,2),e=t[0],i=t[1],o=Object(r.useState)({human:null,computer:null}),c=Object(l.a)(o,2),u=c[0],m=c[1],x=Object(r.useState)(s),v=Object(l.a)(x,2),y=v[0],O=v[1],j=Object(r.useState)(null),E=Object(l.a)(j,2),k=E[0],S=E[1],C=Object(r.useState)(null),M=Object(l.a)(C,2),q=M[0],I=M[1],_=Object(r.useState)(d.medium),A=Object(l.a)(_,2),z=A[0],G=A[1],T=Object(r.useState)(!1),X=Object(l.a)(T,2),B=X[0],J=X[1],N=Object(r.useCallback)((function(n,t){t&&y===f&&i((function(e){var r=e.concat();return r[n]=t,r}))}),[y]),P=Object(r.useCallback)((function(){var n,t=new g(e.concat()),r=t.getEmptySquares(e);switch(z){case d.easy:for(n=h(0,8);!r.includes(n);)n=h(0,8);break;case d.medium:if(!t.isEmpty(e)&&Math.random()<.5)n=w(t,u.computer)[1];else for(n=h(0,8);!r.includes(n);)n=h(0,8);break;case d.difficult:default:n=t.isEmpty(e)?h(0,8):w(t,u.computer)[1]}e[n]||(N(n,u.computer),S(u.human))}),[N,e,u,z]);Object(r.useEffect)((function(){var n;return null!==k&&k===u.computer&&y!==p&&(n=setTimeout((function(){P()}),500)),function(){return n&&clearTimeout(n)}}),[k,P,u.computer,y]),Object(r.useEffect)((function(){var n=K.getWinner(e);null!==n&&y!==p&&function(n){var t;switch(n){case 1:t="Player X wins!";break;case 2:t="Player O wins!";break;case 0:default:t="It's a draw"}O(p),I(t),setTimeout((function(){return J(!0)}),300)}(n)}),[y,e,k]);var R=function(n){m({human:n,computer:b(n)}),O(f),S(1)};return y===s?a.a.createElement(Q,null,a.a.createElement(U,null,a.a.createElement(V,null,"Select difficulty"),a.a.createElement("select",{onChange:function(n){G(n.target.value)},value:z},Object.keys(d).map((function(n){var t=d[n];return a.a.createElement("option",{key:t,value:t},n)})))),a.a.createElement(U,null,a.a.createElement(V,null,"Choose your player"),a.a.createElement(L,null,a.a.createElement("button",{onClick:function(){return R(1)}},"X"),a.a.createElement("p",null,"or"),a.a.createElement("button",{onClick:function(){return R(2)}},"O")))):a.a.createElement(Y,{dims:3},e.map((function(n,t){var r=null!==n;return a.a.createElement(Z,{key:t,onClick:function(){return function(n){e[n]||k!==u.human||(N(n,u.human),S(u.computer))}(t)}},r&&a.a.createElement(nn,null,1===n?"X":"O"))})),a.a.createElement(tn,{styles:y===p&&K.getStrikethroughStyles()}),a.a.createElement(W,{isOpen:B,winner:q,close:function(){return J(!1)},startNewGame:function(){O(s),i(H),J(!1)}}))};e(40);function rn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return rn=function(){return n},n}var an=u.a.main(rn()),on=function(){return a.a.createElement(an,null,a.a.createElement(en,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(on,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.661676d8.chunk.js.map