(this["webpackJsonpday8-lesson"]=this["webpackJsonpday8-lesson"]||[]).push([[0],{18:function(e,t,a){e.exports={movie_section:"moviecard_movie_section__3WPfD",img_holder:"moviecard_img_holder__112pn",details_holder:"moviecard_details_holder__BRiiN"}},19:function(e,t,a){e.exports={real_section:"details_real_section__3y24C",details_section:"details_details_section__2O7RG",item_desc:"details_item_desc__n4cNn"}},21:function(e,t,a){e.exports={home_section:"home_home_section__w5x28",wrap_section:"home_wrap_section__2xCfA"}},40:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(16),s=a.n(r),o=(a(40),a(2)),c=a(8),d=a(9),l=a(12),u=a(11),h=a(21),p=a.n(h),j=a(10),b="FETCH_MOVIE",m="FETCH_MOVIE_SUCCESS",v="FETCH_MOVIE_FAIL",_="FETCH_MOVIE_DETAILS",O="FETCH_MOVIE_DETAILS_SUCCESS",f="FETCH_MOVIE_DETAILS_FAIL",y=a(23),x=a.n(y),g=a(18),D=a.n(g),E=a(7),L=a(1),C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.poster,a=e.title,i=e.year,n=e.type;return Object(L.jsxs)(E.b,{className:D.a.movie_section,to:{pathname:"/ReactDay8/details/".concat(this.props.id)},children:[Object(L.jsx)("img",{src:t,alt:"",className:D.a.img_holder}),Object(L.jsxs)("div",{className:D.a.details_holder,children:[Object(L.jsx)("h3",{children:a}),Object(L.jsxs)("p",{children:["Year: ",i]}),Object(L.jsxs)("p",{children:["Type: ",n]})]})]})}}]),a}(n.a.Component),S=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(c.a)(this,a),(i=t.call(this,e)).state={movieList:[]},i}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.movieData;Object.keys(e).length>0&&this.setState({movieList:e.data.Search})}},{key:"componentDidUpdate",value:function(e){var t=this.props.movieData;e.movieData.isLoading&&!t.isLoading&&this.setState({movieList:t.data.Search})}},{key:"movieSubmit",value:function(){var e=this._inputEle.value;""!==e&&(this.props.onFetchMovie(e),this._inputEle.value="")}},{key:"render",value:function(){var e=this;return Object(L.jsxs)("div",{className:p.a.home_section,children:[Object(L.jsxs)("header",{children:[Object(L.jsx)("input",{type:"text",placeholder:"Search Movie",ref:function(t){return e._inputEle=t}}),Object(L.jsx)("button",{onClick:function(){return e.movieSubmit()},children:"Search"})]}),Object(L.jsx)("div",{className:p.a.wrap_section,children:this.state.movieList.map((function(e){return Object(L.jsx)(C,{id:e.imdbID,poster:e.Poster,title:e.Title,year:e.Year,type:e.Type})}))})]})}}]),a}(n.a.Component),T={onFetchMovie:function(e){return function(t){t({type:b,payload:e});try{x.a.get("http://www.omdbapi.com/?apikey=bbc511a7&s=".concat(e,"&page=1")).then((function(e){200===e.status&&"True"===e.data.Response?t({type:m,payload:e.data}):alert(e.data.Error)})).catch((function(e){t({type:v,error:e.response.data.Error})}))}catch(a){t({type:v,error:a.response.data.Error})}}}},k=Object(j.b)((function(e){return{movieData:e.movie}}),T)(S),w=a(19),F=a.n(w),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var i;Object(c.a)(this,a),i=t.call(this,e);var n=window.location.href.split("/"),r=n[n.length-1];return i.state={movieID:r,data:{}},i}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.props.onFetchMovieDetails(this.state.movieID),console.log(this.props)}},{key:"componentDidUpdate",value:function(e){var t=this.props.movieDetailsData;e.movieDetailsData.isLoading&&!t.isLoading&&this.setState({data:t.data})}},{key:"render",value:function(){return Object(L.jsxs)("div",{className:F.a.real_section,children:[Object(L.jsx)("h1",{children:"This is Details "}),this.props.movieDetailsData.isLoading?Object(L.jsx)("h4",{children:"Loading...."}):Object(L.jsxs)("div",{className:F.a.details_section,children:[Object(L.jsxs)("div",{children:[" ",Object(L.jsx)("img",{src:this.state.data.Poster,alt:""})]}),Object(L.jsxs)("div",{className:F.a.item_desc,children:[Object(L.jsx)("h2",{children:this.state.data.Title}),Object(L.jsx)("p",{children:this.state.data.Plot}),Object(L.jsxs)("p",{children:["Type: ",this.state.data.Type]}),Object(L.jsx)(E.b,{to:"/ReactDay8",children:Object(L.jsx)("button",{children:"Go Back"})})]})]})]})}}]),a}(n.a.Component),M={onFetchMovieDetails:function(e){return function(t){t({type:_});try{x.a.get("http://www.omdbapi.com/?apikey=bbc511a7&i=".concat(e)).then((function(e){200===e.status?t({type:O,payload:e.data}):alert(e.data.Error)})).catch((function(e){console.log("err 1....",e),t({type:f,error:e.response.data})}))}catch(a){console.log("err 2....",a),t({type:f,error:a.response.data})}}}},N=Object(j.b)((function(e){return{movieDetailsData:e.movieDetails}}),M)(I);var A=function(){return Object(L.jsxs)(o.c,{children:[Object(L.jsx)(o.a,{path:"/ReactDay8/details/:id",exact:!0,element:Object(L.jsx)(N,{})}),Object(L.jsx)(o.a,{path:"/ReactDay8",exact:!0,element:Object(L.jsx)(k,{})})]})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),r(e),s(e)}))},H=a(35),P=a(6),V=a(33),B=a.n(V),U=a(3),G=function(e,t){if(void 0===e)return{isLoading:!1,data:{},error:null};switch(t.type){case _:return{isLoading:!0,data:{},error:null};case O:return{isLoading:!1,data:t.payload,error:null};case f:return{isLoading:!1,data:{},error:t.error};default:return e}},J=function(e,t){if(void 0===e)return{isLoading:!1,data:{},error:null};switch(t.type){case b:return{isLoading:!0,data:{},error:null};case m:return{isLoading:!1,data:t.payload,error:null};case v:return{isLoading:!1,data:{},error:t.error};default:return e}},Y=Object(U.b)({movie:J,movieDetails:G}),z={key:"root",version:1,storage:B.a},W=Object(P.g)(z,Y),q=Object(H.a)({reducer:W,middleware:function(e){return e({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}})}}),K=Object(P.h)(q),Q=a(34);s.a.render(Object(L.jsx)(n.a.StrictMode,{children:Object(L.jsx)(j.a,{store:q,children:Object(L.jsx)(Q.a,{loading:null,persistor:K,children:Object(L.jsx)(E.a,{children:Object(L.jsx)(A,{})})})})}),document.getElementById("root")),R()}},[[68,1,2]]]);
//# sourceMappingURL=main.0475f408.chunk.js.map