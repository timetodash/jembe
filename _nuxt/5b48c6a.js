(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1769:function(t,e,n){var content=n(1773);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("41f05e23",content,!0,{sourceMap:!1})},1770:function(t,e,n){var content=n(1775);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("99771932",content,!0,{sourceMap:!1})},1771:function(t,e,n){"use strict";n(24),n(17),n(14),n(8),n(19),n(119);var o=n(4),r=(n(56),n(2)),c=(n(47),n(86)),l=n(230),h=n(479),d=n.n(h),f=n(480),m=n.n(f),v=n(476);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}d()(l),m()(l);var y={name:"Tweet",components:{ComposeJamDialog:v.a},props:{jam:{type:Object,default:function(){return{}}},totalJams:{type:Number,default:function(){return 0}}},data:function(){return{showComposeJamDialog:!1,isLiking:!1,replyToJamText:"",replyToJamId:"",opUserId:"",userName:""}},computed:x(x({},Object(c.c)(["getJams","getProfile","getiLiked","getLikesCount","getCommentsCount","getiFollow","getiBookmarked"])),{},{toThreadLink:function(){return this.$store.getters.hasSession?"/"+this.jam.userName+"/status/"+this.jam.$id:""},showThreadConnector:function(){return"profile-status-jamId"===this.$route.name&&this.$vnode.key!==this.totalJams-1}}),created:function(){console.log("linkify.find(str) :>> ",l.find(this.jam.text))},methods:x(x({},Object(c.b)(["likeJam","countLikes","followJammer","showSnackbar","sendDash","sendJamAndRefreshJams","fetchJamById","bookmarkJam","fetchBookmarks"])),{},{bookmark:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=!e.getiBookmarked(t),console.log("{ jamId, isBookmarked } :>> ",{jamId:t,isBookmarked:o}),e.showSnackbar({text:e.getiBookmarked(t)?"Removing Jam from your Bookmarks.":"Adding Jam to your Bookmarks.",color:"#989898"}),n.next=5,e.bookmarkJam({jamId:t,isBookmarked:o,userName:e.$store.state.name.label,opUserId:e.jam.userId,opUserName:e.jam.userName});case 5:return e.showSnackbar({text:e.getiBookmarked(t)?"Jam removed from your Bookmarks.":"Jam added to your Bookmarks.",color:"#008de4",link:e.getiBookmarked(t)?null:"/bookmarks"}),n.next=8,e.fetchBookmarks();case 8:case"end":return n.stop()}}),n)})))()},posted:function(t){var e=new Date(t),n=new Date(Date.now()),o=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"],r=n.getDate()===e.getDate(),c=n.getMonth()===e.getMonth(),l=n.getFullYear()===e.getFullYear();return n-e<6e4?Math.floor((n-e)/1e3)+" sec":n-e<36e5?Math.floor((n-e)/6e4)+" min":r&&c&&l?Math.floor((n-e)/36e5)+"h":c&&l?o[e.getMonth()]+" "+e.getDate():l?o[e.getMonth()]+" "+e.getFullYear():o[e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()},reJam:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.sendJamAndRefreshJams({jamText:"",replyToJamId:"",reJamId:t,opUserId:e.jam.userId,opUserName:e.jam.userName});case 2:case"end":return n.stop()}}),n)})))()},goToJamId:function(t,e){this.$router.push("/".concat(e,"/status/").concat(t))},goTo:function(t,e){console.log("event :>> ",e),console.log("href :>> ",t),"linkified"!==e.srcElement.className&&this.$router.push(t)},showLoginNag:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.getters.hasSession){e.next=3;break}return e.next=3,t.showSnackbar({color:"#008de4",text:"Please login first."});case 3:case"end":return e.stop()}}),e)})))()},tip:function(i){console.log("tipping i",i),this.sendDash({amount:1e4})},date:function(t){return new Date(t)},replyTo:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.replyToJamText=t.jam.text,t.replyToJamId=t.jam.$id,t.showComposeJamDialog=!0;case 3:case"end":return e.stop()}}),e)})))()},follow:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=!e.getiFollow(t),console.log("isFollowing :>> ",o),n.next=4,e.showSnackbar({text:"Following: ".concat(o),color:"#008de4"});case 4:return n.next=6,e.followJammer({jammerId:t,userName:e.jam.userName,isFollowing:o});case 6:e.$forceUpdate();case 7:case"end":return n.stop()}}),n)})))()},like:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLiking=!0,o=!e.getiLiked(t),console.log("{ jamId, isLiked } :>> ",{jamId:t,isLiked:o}),n.next=5,e.likeJam({jamId:t,isLiked:o,userName:e.$store.state.name.label,opUserId:e.jam.userId,opUserName:e.jam.userName});case 5:return n.next=7,e.countLikes({jamId:t});case 7:e.isLiking=!1;case 8:case"end":return n.stop()}}),n)})))()}})},k=(n(1772),n(1774),n(96)),j=n(150),O=n.n(j),C=n(458),_=n(1752),T=n(460),$=n(1762),I=n(275),A=n(1756),L=n(463),S=n(276),P=n(190),D=n(1793),J=n(1763),component=Object(k.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-0"},[n("v-card",{staticClass:"my-0 mx-0 tweetcard px-4",class:{bottomborder:!t.showThreadConnector},staticStyle:{"max-width":"600px","background-color":"inherit !important"},attrs:{elevation:"0",tile:"",ripple:!1},on:{click:function(e){return t.goTo(t.toThreadLink,e)}}},[t.jam.reJamByUsername?n("v-row",{staticClass:"metaline",staticStyle:{"margin-bottom":"2px"}},[n("v-col",{staticClass:"leftcol pa-0 pt-2"},[n("v-row",{attrs:{justify:"end","no-gutters":""}},[n("v-icon",{attrs:{small:""}},[t._v("mdi-twitter-retweet")])],1)],1),t._v(" "),n("v-col",{staticClass:"pa-0 metaline",staticStyle:{"z-index":"1"}},[n("nuxt-link",{attrs:{to:"/"+t.jam.reJamByUsername}},[n("span",{staticClass:"overline topline"},[t._v("Rejam by "+t._s(t.jam.reJamByUsername))])])],1)],1):t._e(),t._v(" "),n("v-row",{staticClass:"d-flex flex-nowrap"},[n("v-col",{staticClass:"leftcol pa-0",staticStyle:{display:"flex","flex-flow":"column"}},[n("v-row",{staticStyle:{"max-height":"50px"},attrs:{justify:"end","no-gutters":""}},[n("nuxt-link",{attrs:{to:"/"+t.jam.userName}},[n("v-avatar",{staticStyle:{"margin-top":"13px"},attrs:{color:"lightgray",size:"48"}},[n("v-img",{staticClass:"elevation-6",attrs:{src:t.getProfile(t.jam.userName).avatar}})],1)],1)],1),t._v(" "),n("v-row",{staticClass:"mb-n2 mt-4",attrs:{align:"stretch",justify:"center"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showThreadConnector,expression:"showThreadConnector"}],staticClass:"connector-line"})])],1),t._v(" "),n("v-col",{staticClass:"pa-0 mt-1"},[n("v-row",{staticClass:"pt-2 d-inline-block text-truncate",class:{mobiletitle:t.$vuetify.breakpoint.xs,notmobile:t.$vuetify.breakpoint.smAndUp},attrs:{justify:"space-between","no-gutters":""}},[n("span",[n("nuxt-link",{staticClass:"jam-name",attrs:{to:"/"+t.jam.userName}},[n("span",{staticClass:"username",attrs:{id:"username"}},[t._v(" "+t._s(t.jam.userName))]),t._v(" "),n("span",{staticClass:"handle"},[t._v(" @"+t._s(t.jam.userName)+" · ")])]),t._v(" "),n("span",{staticClass:"time-posted"},[n("nuxt-link",{attrs:{to:"/"+t.jam.userName+"/status/"+t.jam.$id}},[t._v("\n                "+t._s(t.posted(t.jam.$createdAt)))])],1)],1),t._v(" "),n("v-btn",{staticClass:"mt-n1",attrs:{align:"center",small:"",dense:"",icon:"",absolute:"",right:"",color:"#008de4"}},[n("v-icon",{attrs:{disabled:!t.$store.getters.hasSession},on:{click:function(e){return e.stopPropagation(),t.follow(t.jam.userId)}}},[t._v(t._s(t.getiFollow(t.jam.userId)?"mdi-account-plus":"mdi-account-plus-outline")+"\n            ")])],1)],1),t._v(" "),n("v-row",{class:{mobile:t.$vuetify.breakpoint.xs,notmobile:t.$vuetify.breakpoint.smAndUp},staticStyle:{display:"block"},attrs:{"no-gutters":""}},[n("div",{directives:[{name:"linkify",rawName:"v-linkify",value:t.jam.text,expression:"jam.text"}]})]),t._v(" "),n("v-row",{staticClass:"pt-2 pb-2 pr-3",staticStyle:{"justify-content":"space-between","max-width":"490px"},attrs:{"no-gutters":""},on:{click:function(e){return t.showLoginNag()}}},[n("div",{staticClass:"hoverblue ml-n2"},[n("v-btn",{attrs:{icon:"",disabled:!t.$store.getters.hasSession},on:{click:function(e){return e.stopPropagation(),t.replyTo()}}},[n("v-icon",{attrs:{size:"19px"}},[t._v("mdi-comment-outline")])],1),t._v(" "),n("span",{staticClass:"subheading ml-n1 mr-2",staticStyle:{"font-size":"14px"}},[t._v(t._s(t.$store.state.commentsCount[t.jam.$id]?t.$store.state.commentsCount[t.jam.$id].comments:"?"))])],1),t._v(" "),n("div",{staticClass:"hovergreen"},[n("v-btn",{attrs:{icon:"",disabled:!t.$store.getters.hasSession},on:{click:function(e){return e.stopPropagation(),t.reJam(t.jam.$id)}}},[n("v-icon",{staticClass:"mr-1",attrs:{size:"22px"}},[t._v("mdi-twitter-retweet")])],1),t._v(" "),n("span",{staticClass:"subheading mr-2 ml-n1",staticStyle:{"font-size":"14px"}},[t._v(t._s(t.$store.state.rejamsCount[t.jam.$id]?t.$store.state.rejamsCount[t.jam.$id].rejams:"?"))])],1),t._v(" "),n("div",{staticClass:"hoverpink"},[n("v-btn",{attrs:{icon:"",color:t.getiLiked(t.jam.$id)==!t.isLiking?"rgba(228, 68, 129, 0.911)":"",disabled:!t.$store.getters.hasSession},on:{click:function(e){return e.stopPropagation(),t.like(t.jam.$id)}}},[n("v-icon",{staticClass:"mr-1",class:{heart:t.isLiking,animate:t.isLiking},attrs:{size:"20px"}},[t._v(t._s(t.getiLiked(t.jam.$id)==!t.isLiking?"mdi-heart":"mdi-heart-outline"))])],1),t._v(" "),n("span",{staticClass:"subheading mr-2 ml-n1",class:{likecount:t.getiLiked(t.jam.$id)},staticStyle:{"font-size":"14px"}},[t._v(t._s(t.getLikesCount(t.jam.$id))+"\n            ")])],1),t._v(" "),n("div",{staticClass:"hoverblue"},[n("v-btn",{attrs:{icon:"",disabled:!t.$store.getters.hasSession},on:{click:function(e){return e.stopPropagation(),t.tip(t.jam.$id)}}},[n("v-icon",{staticClass:"mr-1 dashicon",staticStyle:{fill:"#757575"},attrs:{size:"20px",disabled:!t.$store.getters.hasSession}},[t._v("$dash\n              ")])],1),t._v(" "),n("span",{staticClass:"subheading mr-2 ml-n1",staticStyle:{"font-size":"14px"}})],1),t._v(" "),n("div",{staticClass:"hoverblue ml-n1"},[n("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:"",disabled:!t.$store.getters.hasSession}},"v-btn",r,!1),o),[n("v-icon",{staticClass:"mb-1",attrs:{size:"21px"}},[t._v("mdi-export-variant")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{on:{click:function(e){return t.bookmark(t.jam.$id)}}},[n("v-icon",{staticClass:"mr-1",attrs:{size:"20px"}},[t._v("\n                    mdi-bookmark-outline\n                  ")]),t._v(" "),n("v-list-item-title",{attrs:{size:"12px"}},[t._v("\n                    "+t._s(t.getiBookmarked(t.jam.$id)?"Remove Jam from Bookmarks":"Add Jam to Bookmarks")+"\n                  ")])],1)],1)],1)],1)])],1)],1)],1),t._v(" "),n("ComposeJamDialog",{attrs:{dialog:t.showComposeJamDialog,"reply-to-jam":t.jam},on:{close:function(e){t.showComposeJamDialog=!1}}})],1)}),[],!1,null,"5cf96cfb",null);e.a=component.exports;O()(component,{VAvatar:C.a,VBtn:_.a,VCard:T.a,VCol:$.a,VIcon:I.a,VImg:A.a,VList:L.a,VListItem:S.a,VListItemTitle:P.c,VMenu:D.a,VRow:J.a})},1772:function(t,e,n){"use strict";var o=n(1769);n.n(o).a},1773:function(t,e,n){(e=n(29)(!1)).push([t.i,".linkified{color:#000!important}span.emoji{display:-moz-inline-box;display:inline-block;vertical-align:baseline;*vertical-align:auto;*zoom:1;*display:inline;width:1em;height:1em;background-size:1em;background-repeat:no-repeat;text-indent:-9999px;background-position:50%,50%;background-size:contain}span.emoji-sizer{line-height:.81em;font-size:1em;margin:-2px 0}span.emoji-outer{display:-moz-inline-box;display:inline-block;*display:inline;height:1em;width:1em}span.emoji-inner{display:-moz-inline-box;display:inline-block;text-indent:-9999px;width:100%;height:100%;vertical-align:baseline;*vertical-align:auto;*zoom:1}img.emoji{width:1em;height:1em}",""]),t.exports=e},1774:function(t,e,n){"use strict";var o=n(1770);n.n(o).a},1775:function(t,e,n){(e=n(29)(!1)).push([t.i,".connector-line[data-v-5cf96cfb]{width:2px;background-color:rgba(202,197,197,.904);z-index:1}.leftcol[data-v-5cf96cfb]{max-width:50px;margin-right:10px}.username[data-v-5cf96cfb]{color:#000;font-size:16px;align-self:center;font-weight:600;letter-spacing:.0125em;line-height:1.1}.jam-name[data-v-5cf96cfb],.username[data-v-5cf96cfb]{text-decoration:none}.jam-name:hover .username[data-v-5cf96cfb]{text-decoration:underline}.topline[data-v-5cf96cfb]{font-size:14px;text-transform:none!important;text-decoration:none!important}.metaline[data-v-5cf96cfb]{max-height:15px!important;height:15px!important;padding-top:10px;padding-bottom:10px}.metaline a[data-v-5cf96cfb]{text-decoration:none;color:#787878!important}.metaline a[data-v-5cf96cfb]:hover{text-decoration:underline}.handle[data-v-5cf96cfb],.time-posted a[data-v-5cf96cfb]{text-decoration:none;font-size:16px;color:#787878!important}.time-posted a[data-v-5cf96cfb]:hover{text-decoration:underline}.lowercase[data-v-5cf96cfb]{text-transform:none!important}.hoverblue[data-v-5cf96cfb]{color:#757575!important;caret-color:#757575!important}.hoverblue[data-v-5cf96cfb]:hover,.hoverblue:hover .dashicon[data-v-5cf96cfb],.hoverblue:hover button[data-v-5cf96cfb]{color:#008de4!important;caret-color:#008de4!important}.hoverblue:hover .dashicon[data-v-5cf96cfb]{fill:#008de4!important}.hovergreen[data-v-5cf96cfb]{color:#757575!important;caret-color:#757575!important}.hovergreen[data-v-5cf96cfb]:hover,.hovergreen:hover button[data-v-5cf96cfb]{color:#1ca11c!important;caret-color:#1ca11c!important}.hoverpink[data-v-5cf96cfb]{color:#757575!important;caret-color:#757575!important}.hoverpink[data-v-5cf96cfb]:hover,.hoverpink:hover button[data-v-5cf96cfb]{color:rgba(228,68,129,.911)!important;caret-color:rgba(228,68,129,.911)!important}.likecount[data-v-5cf96cfb]{color:rgba(228,68,129,.911)}.tweetcard[data-v-5cf96cfb]{border-left:none;border-right:none}.bottomborder[data-v-5cf96cfb]{border-bottom:1px solid;border-color:hsla(0,4.9%,88%,.84706)}.tweetcard[data-v-5cf96cfb]:hover{background-color:#f5f8fb!important}.mobile[data-v-5cf96cfb]{max-width:290px;padding-right:12px}.mobiletitle[data-v-5cf96cfb]{max-width:250px;padding-right:12px}.notmobile[data-v-5cf96cfb]{max-width:525px;padding-right:20px}.heart[data-v-5cf96cfb]{-webkit-animation:heartbeat-data-v-5cf96cfb 1s infinite;animation:heartbeat-data-v-5cf96cfb 1s infinite}@-webkit-keyframes heartbeat-data-v-5cf96cfb{0%{transform:scale(1.25)}20%{transform:scale(1)}40%{transform:scale(1.25)}60%{transform:scale(1)}80%{transform:scale(1.25)}to{transform:scale(1.25)}}@keyframes heartbeat-data-v-5cf96cfb{0%{transform:scale(1.25)}20%{transform:scale(1)}40%{transform:scale(1.25)}60%{transform:scale(1)}80%{transform:scale(1.25)}to{transform:scale(1.25)}}.v-menu__content[data-v-5cf96cfb]{overflow:hidden}",""]),t.exports=e},1777:function(t,e,n){"use strict";var o={inserted:function(t,e){var n=e.value,o=e.options||{passive:!0};window.addEventListener("resize",n,o),t._onResize={callback:n,options:o},e.modifiers&&e.modifiers.quiet||n()},unbind:function(t){if(t._onResize){var e=t._onResize,n=e.callback,o=e.options;window.removeEventListener("resize",n,o),delete t._onResize}}};e.a=o},1782:function(t,e,n){var content=n(1783);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("1f651591",content,!0,{sourceMap:!1})},1783:function(t,e,n){(e=n(29)(!1)).push([t.i,".v-menu{display:none}.v-menu--attached{display:inline}.v-menu__content{position:absolute;display:inline-block;max-width:80%;overflow-y:auto;overflow-x:hidden;contain:content;will-change:transform;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);border-radius:4px}.v-menu__content--active{pointer-events:none}.v-menu__content--auto .v-list-item{transition-property:transform,opacity;transition-duration:.3s;transition-timing-function:cubic-bezier(.25,.8,.25,1)}.v-menu__content--fixed{position:fixed}.v-menu__content>.card{contain:content;-webkit-backface-visibility:hidden;backface-visibility:hidden}.v-menu>.v-menu__content{max-width:none}.v-menu-transition-enter .v-list-item{min-width:0;pointer-events:none}.v-menu-transition-enter-to .v-list-item{transition-delay:.1s}.v-menu-transition-leave-active,.v-menu-transition-leave-to{pointer-events:none}.v-menu-transition-enter,.v-menu-transition-leave-to{opacity:0}.v-menu-transition-enter-active,.v-menu-transition-leave-active{transition:all .3s cubic-bezier(.25,.8,.25,1)}.v-menu-transition-enter.v-menu__content--auto{transition:none!important}.v-menu-transition-enter.v-menu__content--auto .v-list-item{opacity:0;transform:translateY(-15px)}.v-menu-transition-enter.v-menu__content--auto .v-list-item--active{opacity:1;transform:none!important;pointer-events:auto}",""]),t.exports=e},1793:function(t,e,n){"use strict";n(24),n(17),n(14),n(8),n(19),n(69),n(70);var o=n(59),r=n(2),c=(n(87),n(120),n(195),n(47),n(1782),n(1748)),l=n(478),h=n(482),d=n(481),f=n(483),m=n(151),v=n(485),w=n(15),x=n(3);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=Object(w.a)(v.a,m.a,l.a).extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var a=this.dimensions.activator,t=this.dimensions.content,e=(!1!==this.attach?a.offsetLeft:a.left)||0,n=Math.max(a.width,t.width),o=0;if(o+=this.left?e-(n-a.width):e,this.offsetX){var r=isNaN(Number(this.maxWidth))?a.width:Math.min(a.width,Number(this.maxWidth));o+=this.left?-r:a.width}return this.nudgeLeft&&(o-=parseInt(this.nudgeLeft)),this.nudgeRight&&(o+=parseInt(this.nudgeRight)),o},computedTop:function(){var a=this.dimensions.activator,t=this.dimensions.content,e=0;return this.top&&(e+=a.height-t.height),!1!==this.attach?e+=a.offsetTop:e+=a.top+this.pageYOffset,this.offsetY&&(e+=this.top?-a.height:a.height),this.nudgeTop&&(e-=parseInt(this.nudgeTop)),this.nudgeBottom&&(e+=parseInt(this.nudgeBottom)),e},hasActivator:function(){return!!(this.$slots.activator||this.$scopedSlots.activator||this.activator||this.inputActivator)}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!=typeof window},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(x.f)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(x.f)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var n=t+e-this.pageWidth+12;return(t=(!this.left||this.right)&&n>0?Math.max(t-n,0):Math.max(t,12))+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),n=this.pageYOffset+e,o=this.dimensions.activator,r=this.dimensions.content.height,c=n<t+r;return c&&this.offsetOverflow&&o.top>r?t=this.pageYOffset+(o.top-r):c&&!this.allowOverflow?t=n-r-12:t<this.pageYOffset&&!this.allowOverflow&&(t=this.pageYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){for(var t=this.getActivator();t;){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=l.a.options.methods.genActivatorListeners.call(this),n=e.click;return e.click=function(e){t.openOnClick&&n&&n(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var rect=t.getBoundingClientRect();return{top:Math.round(rect.top),left:Math.round(rect.left),bottom:Math.round(rect.bottom),right:Math.round(rect.right),width:Math.round(rect.width),height:Math.round(rect.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var rect=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var style=window.getComputedStyle(t);rect.left=parseInt(style.marginLeft),rect.top=parseInt(style.marginTop)}return rect},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var n=e.$refs.content;n&&"none"===n.style.display?(n.style.display="inline-block",t(),n.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!=typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:k({},this.dimensions.activator),content:k({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var n=this.getActivator();if(!n)return;e.activator=this.measure(n),e.activator.offsetLeft=n.offsetLeft,!1!==this.attach?e.activator.offsetTop=n.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){t.$refs.content&&(e.content=t.measure(t.$refs.content)),t.dimensions=e}))}}}),O=n(484),C=n(282),_=n(76),T=n(39),$=n(281),I=n(1777),A=n(18);function L(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?L(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):L(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=Object(w.a)(d.a,h.a,f.a,j,O.a,C.a,_.a,T.a);e.a=P.extend({name:"v-menu",provide:function(){return{isInMenu:!0,theme:this.theme}},directives:{ClickOutside:$.a,Resize:I.a},props:{auto:Boolean,closeOnClick:{type:Boolean,default:!0},closeOnContentClick:{type:Boolean,default:!0},disabled:Boolean,disableKeys:Boolean,maxHeight:{type:[Number,String],default:"auto"},offsetX:Boolean,offsetY:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,origin:{type:String,default:"top left"},transition:{type:[Boolean,String],default:"v-menu-transition"}},data:function(){return{calculatedTopAuto:0,defaultOffset:8,hasJustFocused:!1,listIndex:-1,resizeTimeout:0,selectedIndex:null,tiles:[]}},computed:{activeTile:function(){return this.tiles[this.listIndex]},calculatedLeft:function(){var t=Math.max(this.dimensions.content.width,parseFloat(this.calculatedMinWidth));return this.auto?Object(x.f)(this.calcXOverflow(this.calcLeftAuto(),t))||"0":this.calcLeft(t)||"0"},calculatedMaxHeight:function(){return(this.auto?"200px":Object(x.f)(this.maxHeight))||"0"},calculatedMaxWidth:function(){return Object(x.f)(this.maxWidth)||"0"},calculatedMinWidth:function(){if(this.minWidth)return Object(x.f)(this.minWidth)||"0";var t=Math.min(this.dimensions.activator.width+Number(this.nudgeWidth)+(this.auto?16:0),Math.max(this.pageWidth-24,0)),e=isNaN(parseInt(this.calculatedMaxWidth))?t:parseInt(this.calculatedMaxWidth);return Object(x.f)(Math.min(e,t))||"0"},calculatedTop:function(){return(this.auto?Object(x.f)(this.calcYOverflow(this.calculatedTopAuto)):this.calcTop())||"0"},hasClickableTiles:function(){return Boolean(this.tiles.find((function(t){return t.tabIndex>-1})))},styles:function(){return{maxHeight:this.calculatedMaxHeight,minWidth:this.calculatedMinWidth,maxWidth:this.calculatedMaxWidth,top:this.calculatedTop,left:this.calculatedLeft,transformOrigin:this.origin,zIndex:this.zIndex||this.activeZIndex}}},watch:{isActive:function(t){t||(this.listIndex=-1)},isContentActive:function(t){this.hasJustFocused=t},listIndex:function(t,e){if(t in this.tiles){var n=this.tiles[t];n.classList.add("v-list-item--highlighted"),this.$refs.content.scrollTop=n.offsetTop-n.clientHeight}e in this.tiles&&this.tiles[e].classList.remove("v-list-item--highlighted")}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(A.e)("full-width",this)},mounted:function(){this.isActive&&this.callActivate()},methods:{activate:function(){var t=this;this.updateDimensions(),requestAnimationFrame((function(){t.startTransition().then((function(){t.$refs.content&&(t.calculatedTopAuto=t.calcTopAuto(),t.auto&&(t.$refs.content.scrollTop=t.calcScrollPosition()))}))}))},calcScrollPosition:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active"),n=t.scrollHeight-t.offsetHeight;return e?Math.min(n,Math.max(0,e.offsetTop-t.offsetHeight/2+e.offsetHeight/2)):t.scrollTop},calcLeftAuto:function(){return parseInt(this.dimensions.activator.left-2*this.defaultOffset)},calcTopAuto:function(){var t=this.$refs.content,e=t.querySelector(".v-list-item--active");if(e||(this.selectedIndex=null),this.offsetY||!e)return this.computedTop;this.selectedIndex=Array.from(this.tiles).indexOf(e);var n=e.offsetTop-this.calcScrollPosition(),o=t.querySelector(".v-list-item").offsetTop;return this.computedTop-n-o-1},changeListIndex:function(t){if(this.getTiles(),this.isActive&&this.hasClickableTiles)if(t.keyCode!==x.s.tab){if(t.keyCode===x.s.down)this.nextTile();else if(t.keyCode===x.s.up)this.prevTile();else{if(t.keyCode!==x.s.enter||-1===this.listIndex)return;this.tiles[this.listIndex].click()}t.preventDefault()}else this.isActive=!1},closeConditional:function(t){var e=t.target;return this.isActive&&!this._isDestroyed&&this.closeOnClick&&!this.$refs.content.contains(e)},genActivatorAttributes:function(){var t=l.a.options.methods.genActivatorAttributes.call(this);return this.activeTile&&this.activeTile.id?S(S({},t),{},{"aria-activedescendant":this.activeTile.id}):t},genActivatorListeners:function(){var t=j.options.methods.genActivatorListeners.call(this);return this.disableKeys||(t.keydown=this.onKeyDown),t},genTransition:function(){var content=this.genContent();return this.transition?this.$createElement("transition",{props:{name:this.transition}},[content]):content},genDirectives:function(){var t=this,e=[{name:"show",value:this.isContentActive}];return!this.openOnHover&&this.closeOnClick&&e.push({name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:function(){return[t.$el].concat(Object(o.a)(t.getOpenDependentElements()))}}}),e},genContent:function(){var t=this,e={attrs:S(S({},this.getScopeIdAttrs()),{},{role:"role"in this.$attrs?this.$attrs.role:"menu"}),staticClass:"v-menu__content",class:S(S(S({},this.rootThemeClasses),this.roundedClasses),{},Object(r.a)({"v-menu__content--auto":this.auto,"v-menu__content--fixed":this.activatorFixed,menuable__content__active:this.isActive},this.contentClass.trim(),!0)),style:this.styles,directives:this.genDirectives(),ref:"content",on:{click:function(e){e.target.getAttribute("disabled")||t.closeOnContentClick&&(t.isActive=!1)},keydown:this.onKeyDown}};return this.$listeners.scroll&&(e.on=e.on||{},e.on.scroll=this.$listeners.scroll),!this.disabled&&this.openOnHover&&(e.on=e.on||{},e.on.mouseenter=this.mouseEnterHandler),this.openOnHover&&(e.on=e.on||{},e.on.mouseleave=this.mouseLeaveHandler),this.$createElement("div",e,this.getContentSlot())},getTiles:function(){this.$refs.content&&(this.tiles=Array.from(this.$refs.content.querySelectorAll(".v-list-item")))},mouseEnterHandler:function(){var t=this;this.runDelay("open",(function(){t.hasJustFocused||(t.hasJustFocused=!0,t.isActive=!0)}))},mouseLeaveHandler:function(t){var e=this;this.runDelay("close",(function(){e.$refs.content.contains(t.relatedTarget)||requestAnimationFrame((function(){e.isActive=!1,e.callDeactivate()}))}))},nextTile:function(){var t=this.tiles[this.listIndex+1];if(!t){if(!this.tiles.length)return;return this.listIndex=-1,void this.nextTile()}this.listIndex++,-1===t.tabIndex&&this.nextTile()},prevTile:function(){var t=this.tiles[this.listIndex-1];if(!t){if(!this.tiles.length)return;return this.listIndex=this.tiles.length,void this.prevTile()}this.listIndex--,-1===t.tabIndex&&this.prevTile()},onKeyDown:function(t){var e=this;if(t.keyCode===x.s.esc){setTimeout((function(){e.isActive=!1}));var n=this.getActivator();this.$nextTick((function(){return n&&n.focus()}))}else!this.isActive&&[x.s.up,x.s.down].includes(t.keyCode)&&(this.isActive=!0);this.$nextTick((function(){return e.changeListIndex(t)}))},onResize:function(){this.isActive&&(this.$refs.content.offsetWidth,this.updateDimensions(),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.updateDimensions,100))}},render:function(t){var e=this;return t("div",{staticClass:"v-menu",class:{"v-menu--attached":""===this.attach||!0===this.attach||"attach"===this.attach},directives:[{arg:"500",name:"resize",value:this.onResize}]},[!this.activator&&this.genActivator(),this.showLazyContent((function(){return[e.$createElement(c.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.genTransition()])]}))])}})},1835:function(t,e,n){"use strict";n(24),n(17),n(14),n(8),n(19);var o=n(2),r=(n(119),n(4)),c=n(86);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h={components:{Tweet:n(1771).a},props:{mention:{type:Object,default:function(){return{}}}},data:function(){return{jam:null}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchJamById(t.mention.jamId);case 2:t.jam=e.sent,t.countLikes({jamId:t.jam.$id}),t.countComments({jamId:t.jam.$id}),t.countRejams({jamId:t.jam.$id});case 6:case"end":return e.stop()}}),e)})))()},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["fetchJamById","countLikes","countRejams","countComments"]))},d=n(96),component=Object(d.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return this.jam?e("Tweet",{attrs:{jam:this.jam}}):this._e()}),[],!1,null,null,null);e.a=component.exports},1924:function(t,e,n){"use strict";n.r(e);n(24),n(17),n(14),n(8),n(19);var o=n(2),r=n(86);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={components:{Mention:n(1835).a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)(["getNotifications"]))},h=n(96),component=Object(h.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",this._l(this.getNotifications.filter((function(t){return"mentions"===t.$type})),(function(t,i){return e("Mention",{key:i,attrs:{mention:t}})})),1)}),[],!1,null,null,null);e.default=component.exports}}]);