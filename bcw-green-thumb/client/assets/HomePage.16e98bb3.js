import{j as e,c as a,p as t,e as s,o as r,a as l,b as o,g as n,m as d,t as i,w as c}from"./vendor.d3d28184.js";import{a as m}from"./ArticlesService.e6a09274.js";import{P as u,A as g}from"./index.cab4335e.js";const h={name:"Home",setup:()=>(e((async()=>{try{await m.getAll()}catch(e){u.toast(e,"error")}})),{gardens:a((()=>g.gardens)),gardenPlants:a((()=>g.gardenPlants)),user:a((()=>g.user)),random:Math.floor(20*Math.random()),articles:a((()=>g.articles)),formatDate(e){const a=e.slice(0,10).split("-");return`${a[1]} / ${a[2]} / ${a[0]}`}})},f=c();t("data-v-43a048c5");const b={class:"home container-fluid pl-5"},p={class:"row"},v=o("div",{class:"col-md-6 d-flex flex-column vh100"},[o("h1",{class:"text-light text-center mt-3 border-bottom"},[d(" Welcome to "),o("span",{class:"text-success"},"Green"),d("Thumb ")]),o("h4",{class:"text-light text-center"}," Your single destination for garden mastery! "),o("img",{class:"shadow border-top border-left rounded mx-auto my-auto mb-3",src:"/assets/Home1.96f5f8d8.jpg",alt:"Planting a garden",width:"501",height:"751"})],-1),x={class:"col-md-6 d-flex flex-column vh100"},y={class:"m-auto"},w={class:"text-light text-center"},A={key:0},P=o("i",{class:"mdi mdi-account-question"},null,-1),j=o("br",null,null,-1),k=d(" Sign up/login to manage your garden online! "),H={key:1},S={key:0},$=d(" you have: "),_=o("br",null,null,-1),D={class:"text-info"},I=d(" Plants in your garden!"),M=o("img",{class:" shadow mx-auto border-top border-left rounded mb-3",src:"/assets/Home2.8ff7fc81.jpg",alt:"Seedlings",width:"550",height:"334"},null,-1),T={class:"Article my-2 row border-top border-left rounded shadow border-light"},W={class:"col-md-3 d-flex px-0 align-items-center bg-dark"},q={class:"col-md-8 p-2"},G={class:"border-bottom border-light"},Y={class:"text-info"};s();const z=f(((e,a,t,s,c,m)=>(r(),l("div",b,[o("div",p,[v,o("div",x,[o("div",y,[o("h3",w,[s.user.isAuthenticated?n("",!0):(r(),l("div",A,[P,j,k])),s.user.isAuthenticated?(r(),l("div",H,[d(" Welcome, "+i(s.user.email.split("@")[0])+" ",1),0!==s.gardenPlants.length?(r(),l("span",S,[$,_,o("span",D,i(s.gardenPlants.length),1),I])):n("",!0)])):n("",!0)]),M]),s.articles[s.random]?(r(),l("a",{key:0,class:"awhite mb-auto",href:s.articles[s.random].url,target:"_blank"},[o("div",T,[o("div",W,[o("img",{src:s.articles[s.random].urlToImage,class:"auto",alt:"article picture"},null,8,["src"])]),o("div",q,[o("div",G,[o("b",null,i(s.articles[s.random].title),1)]),o("div",null,i(s.articles[s.random].description),1),o("div",Y,i(s.formatDate(s.articles[s.random].publishedAt))+" "+i(s.articles[s.random].source.name),1)])])],8,["href"])):n("",!0)])])]))));h.render=z,h.__scopeId="data-v-43a048c5";export default h;
