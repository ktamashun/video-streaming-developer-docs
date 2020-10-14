(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{zYWW:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),i=a("XbGe");a("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},c={_frontmatter:r},s=i.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(s,o({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",null,"Introduction"),Object(n.b)("p",null,"Viewer Authentication API lets you implement a custom authentication process. This prevents live and recorded videos on your account from being accessed until the viewer authenticates in."),Object(n.b)("p",null,"You need the following before you start implementing viewer authentication:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Channel"),", which you can create on the Your channels page of your IBM Video Streaming dashboard"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Client id"),", which you can obtain on the API/SDK access page of your IBM Video Streaming dashboard"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Token"),", which you can obtain through the IBM Video Streaming authorization endpoint"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Secret")," key, a string that will be used to create the hash in the authentication response your service passes to the IBM Video Streaming player. This secret key needs to be provided by you.")),Object(n.b)("h2",null,"Viewer authentication flow"),Object(n.b)("p",null,"To implement the viewer authentication flow you need to create an application that includes the following:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Screens your viewers need to go through to authenticate"),Object(n.b)("li",{parentName:"ul"},"Backend code that validates these authentication requests"),Object(n.b)("li",{parentName:"ul"},"Process to pass the authentication response to the IBM Video Streaming player")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.41666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsSAAALEgHS3X78AAACJ0lEQVQ4y41TyXKcMBDl85MvSOUfknMq35BLDklsl2vGA4hFMBoJ1NoFzoOpuLzkYFVDiW5ev16LZV0XPP8O7o/vPgX+XpYlpmydBzil3PYDa/uOD3Xb121nrIPznJe3fjdwzlkbK2dKOQP8ULGyYqxpTzU7lXVZNy0fTlWjybwGC7MIHWcyo5xciD5EUIBGUZQUJEVFIe+adX3cZX0KoDA+WR+N82o2LiQbIlIwLn36dvj49e7Dl7vP3x+M35Q+poQwlxXvmBd8FkpbNs5nRRChSM6GbICbibzSXpGfjbcuQKmNf6jaY9Ucy6ZuB3IBYFPzS3+exssslJYA+dCeqR41G+nQToduYqN2Plgf1ExCTsiRrANBMShT9ZILVXbinqlyoE6FI7cHbm8Z/ar0DSNcOhnGOSFzNGXZ89/ATLiSz4OYai5PnRyVmUzQNkLIxr0iybg4ERIBOUrrQIvSbmAXwonPP+7Fz6O8rSeonouYLb+Ys7LVoP+UEvK71vAL05YzikYbyebV+a1VIaar+JDwn9o5UTypPWpWn7e40BNYi7dDt43Nsp39fu16xn3du5zyug/lJi/A1+4LHcRkUFKUV0jFRzEKiW6h1bASIo7xyvEfZvILuS2Fne0pnMXGbbrhI+YMNSr+GmytYx1nLcd6zJqem24qcay7lo9NP55YC+trMBYDC4BlEBeFaXkRERFWren4Lr0PoXj/9iIFjPhZSHBey/kXgKnSFuf+mUgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Viewer Authentication Flow",title:"Viewer Authentication Flow",src:"/static/4f1ef7ae5b2b65151ba0b41e8d41007a/3cbba/advanced-auth-2x.png",srcSet:["/static/4f1ef7ae5b2b65151ba0b41e8d41007a/7fc1e/advanced-auth-2x.png 288w","/static/4f1ef7ae5b2b65151ba0b41e8d41007a/a5df1/advanced-auth-2x.png 576w","/static/4f1ef7ae5b2b65151ba0b41e8d41007a/3cbba/advanced-auth-2x.png 1152w","/static/4f1ef7ae5b2b65151ba0b41e8d41007a/4c487/advanced-auth-2x.png 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"102.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACdElEQVQ4y3VTSY4UMRCs/yPOcIIfwA0O8AIuXNBINCDorq1r9b7bVYRdMOoZhlAq5SWXcGa62gu2bYNe17W+1H3Xd13X9z2214KmaY4TspL9BtVWcGy891prW2CMsSZr55z9CxjcJquwl1LuD3HctV2LbPfbewQf6qZOKVUIzDhP24bNdgMEbZoWbGOMj0KDXV3XMKhCTIQJhJBKLctC1mWZF8YYCAupXXjsWYjs1kUkqFJMxiXQcj4a54nwynhjPWjYsBmf9qeQ70vBdmHTyjQRhnJzau3CLZOWCStM8nH/r/O2V+Lzj/kyGG+VBHHpLJQgBG1aOaOcMUpRE57LnmufgTdrk8te9c/frl8uWMWYSwYJMSKOEIIyMa9sJYwJhTdqt8d8u/mQhA458/DiHT896AdipBjBS7qd6g1PoFx3s7q7KMLVTBSTfubeh1CNrz7w79dbZ0JoU5+/tYpZ0AkYEa2VySK1UmDtnXUhGWur8fXHR86lzSmikCZQLgp/Bu54O82aoTYzuoLMw8v37NT9O0aFf54cOI/TNM/LOE7DMGAWwFihjehz/+wNvWuedL7HMfNIKKTEbOLEZd+9kp9OtJltcEb/6UQmSYHMEOBcZC0EHgkTWzTqn523kjP9FRyBlXUuf6ps6Uz+YTjwRyNzQ8siOzdL+NrqhfBh4eMqoKeiMXDSpnvhOnDtiw5c5YUwsaIq1ld6bodzO54byPVXM/ysr9jW3dT0M/R1ZhORM5EL1RMRyDFTlZ3Rj3Hl3bD2E+1Gcp0o7A5rGI2ZDj8civBCTXIdszMI9CO55LRIPrTDguthZohyLLIsnCl/K/CE/AabIXx9B0XAogAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Viewer Authentication Flow",title:"Viewer Authentication Flow",src:"/static/910170689c1fc7180a545ad63baf873f/3cbba/advanced-auth2-2x.png",srcSet:["/static/910170689c1fc7180a545ad63baf873f/7fc1e/advanced-auth2-2x.png 288w","/static/910170689c1fc7180a545ad63baf873f/a5df1/advanced-auth2-2x.png 576w","/static/910170689c1fc7180a545ad63baf873f/3cbba/advanced-auth2-2x.png 1152w","/static/910170689c1fc7180a545ad63baf873f/0b124/advanced-auth2-2x.png 1728w","/static/910170689c1fc7180a545ad63baf873f/6a339/advanced-auth2-2x.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"When the viewer clicks the log in button in the IBM Video Streaming player the entry point of your custom authentication flow is displayed in an iframe in the player."),Object(n.b)("li",{parentName:"ol"},"When the authentication is completed your service passes an authentication response to the player."),Object(n.b)("li",{parentName:"ol"},"If the authentication was successful, the player passes the authentication response to IBM Video Streaming infrastructure in a validation request."),Object(n.b)("li",{parentName:"ol"},"The IBM Video Streaming infrastructure validates the authentication response received from your service and passes a validation response to the player. If the response is positive, the viewer can start watching the video.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-viewer-authentication-api-getting-started-mdx-3b921251327722bcefa0.js.map