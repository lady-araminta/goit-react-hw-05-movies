"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{631:function(n,e,r){r.r(e),r.d(e,{default:function(){return S}});var t,o,c,i,a,s,l,u=r(439),d=r(86),h=r(689),f=r(791),p=r(14),x=r(33),m=r(168),g=r(87),j=r(444),v=j.ZP.section(t||(t=(0,m.Z)(["\n  padding: 16px;\n"]))),w=(0,j.ZP)(g.rU)(o||(o=(0,m.Z)(["\n  display: block;\n  margin-bottom: 16px;\n  color: #fff;\n  background-color: navy;\n  padding: 8px;\n  border-radius: 4px;\n  width: 96px;\n  text-align: center;\n  &:hover,\n  &:focus {\n    color: navy;\n    background-color: #fff;\n  }\n"]))),k=j.ZP.div(c||(c=(0,m.Z)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),y=j.ZP.div(i||(i=(0,m.Z)(["\n  padding-left: 24px;\n"]))),b=j.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n"]))),P=j.ZP.ul(s||(s=(0,m.Z)(["\n  display: flex;\n  gap: 16px;\n"]))),Z=(0,j.ZP)(g.rU)(l||(l=(0,m.Z)(["\n  display: block;\n  color: #fff;\n  background-color: navy;\n  padding: 8px;\n  border-radius: 4px;\n  width: 96px;\n  text-align: center;\n  &:hover,\n  &:focus {\n    color: navy;\n    background-color: #fff;\n  }\n"]))),_=r(184),S=function(){var n,e,r=(0,f.useState)({}),t=(0,u.Z)(r,2),o=t[0],c=t[1],i=(0,f.useState)([]),a=(0,u.Z)(i,2),s=a[0],l=a[1],m=(0,f.useState)(!1),g=(0,u.Z)(m,2),j=g[0],S=g[1],E=(0,h.UO)().movieId,H=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,f.useEffect)((function(){(0,d.Y5)(E).then((function(n){c(n);var e=[];n.genres.forEach((function(n){var r=n.name;return e.push(r)})),l(e),S(!1)})).catch((function(n){return S(!1),(0,p.ZP)("Something went wrong! Please retry!")}))}),[E]);var U=new Date(o.release_date);return(0,_.jsxs)(v,{children:[(0,_.jsx)(w,{to:H,children:"Go back"}),o&&!j&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(k,{children:[(0,_.jsx)("img",{src:o.poster_path?"".concat(d.MH).concat(o.poster_path):"https://i.imgur.com/brJrHsa.jpg",alt:o.title,width:"320"}),(0,_.jsxs)(y,{children:[(0,_.jsx)(b,{children:(0,_.jsxs)("h3",{children:[o.title," (",U.getFullYear(),")"]})}),(0,_.jsxs)(b,{children:[(0,_.jsx)("h5",{children:"User score:"}),(0,_.jsxs)("p",{children:[o.vote_average,"/",o.vote_count]})]}),(0,_.jsxs)(b,{children:[(0,_.jsx)("h5",{children:"Overview"}),(0,_.jsx)("p",{children:o.overview})]}),(0,_.jsxs)(b,{children:[(0,_.jsx)("h5",{children:"Genres"}),(0,_.jsx)("p",{children:s.join(", ")})]})]})]}),(0,_.jsxs)(P,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(Z,{to:"cast",state:{from:H},children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(Z,{to:"reviews",state:{from:H},children:"Reviews"})})]}),(0,_.jsx)(f.Suspense,{fallback:(0,_.jsx)(x.a,{}),children:(0,_.jsx)(h.j3,{})})]})]})}},86:function(n,e,r){r.d(e,{Hx:function(){return u},MH:function(){return c},Pv:function(){return a},Y5:function(){return s},uV:function(){return l},wr:function(){return i}});var t="b59a60e3d4b462ae9c6c6d62e7fdcb56",o="https://api.themoviedb.org/3/",c="https://image.tmdb.org/t/p/w500",i=function(){return fetch("".concat(o,"trending/movie/day?api_key=").concat(t)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong! Please retry"))}))},a=function(n){return fetch("".concat(o,"search/movie?api_key=").concat(t,"&query=").concat(n,"&page=1&include_adult=false")).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong! Please retry"))}))},s=function(n){return fetch("".concat(o,"movie/").concat(n,"?api_key=").concat(t)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong! Please retry"))}))},l=function(n){return fetch("".concat(o,"movie/").concat(n,"/credits?api_key=").concat(t)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong! Please retry"))}))},u=function(n){return fetch("".concat(o,"movie/").concat(n,"/reviews?api_key=").concat(t)).then((function(n){return n.ok?n.json():Promise.reject(new Error("Something went wrong! Please retry"))}))}}}]);
//# sourceMappingURL=631.a0ffbe5f.chunk.js.map