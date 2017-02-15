webpackJsonp([3,1],[function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var s=o(15),n=i(s),a=o(75),r=i(a),l=o(77),u=i(l);o(60);var m=o(65),d=i(m);o(53);var c=o(67),p=i(c),I=o(13),g=i(I),f=o(69),v=i(f),h=o(1),A=function(t){o.e(0,function(){t(o(14))})};n.default.use(r.default),n.default.use(d.default),u.default.registerCustomEvent("dbltap",{type:"tap",taps:2}),n.default.use(u.default,{name:"v-touch"});var b=[{path:"/login",component:g.default,name:"login",meta:{requiresAuth:!1}},{path:"/registe",component:A,name:"registe",meta:{requiresAuth:!1}},{path:"/todo",component:v.default,name:"todo",meta:{requiresAuth:!0}},{path:"*",redirect:{path:"/login"}}],y=new r.default({routes:b});y.beforeEach(function(t,e,o){t.matched.some(function(t){return t.meta.requiresAuth})&&(h.isLogedin||o({path:"/login"})),o()}),new n.default({el:"#app",template:"<App/>",components:{App:p.default},router:y})},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(16),s="qNpVPquXEti01HpThDRcqiHl-gzGzoHsz",n="KB8jNrxQz0i7WFCH9fYbXYtt";i.init({appId:s,appKey:n});var a=e.Todo=i.Object.extend("Todo"),r=(e.requestLogin=function(t){return i.User.logIn(t.email,t.password)},e.isLogedin=function(){return!!i.User.current()},e.getCurrentUser=function(){return i.User.current()});e.logOut=function(){i.User.logOut()},e.registeUser=function(t){var e=new i.User;return e.setUsername(t.username),e.setPassword(t.password),e.setEmail(t.email),e.signUp()},e.AddTodoItem=function(t){var e=new i.ACL;e.setPublicReadAccess(!1),e.setPublicWriteAccess(!1),e.setWriteAccess(i.User.current(),!0),e.setReadAccess(i.User.current(),!0);var o=new a(t);return o.setACL(e),o.set("owner",r().id),o.save()},e.SaveTodoItem=function(t){acl.setPublicReadAccess(!1),acl.setPublicWriteAccess(!1),acl.setWriteAccess(i.User.current(),!0),acl.setReadAccess(i.User.current(),!0);var e=new a(t);return e.setACL(acl),e.save()},e.LoadServerTodos=function(){var t=r().id,e=new i.Query("Todo");e.equalTo("owner",t);var o=new i.Query("Todo");return o.equalTo("enable",!0),new i.Query.and(e,o).find()},e.addRole=function(){var t=new i.ACL;t.setPublicReadAccess(!1),t.setPublicWriteAccess(!1),t.setWriteAccess(i.User.current(),!0);var e=new i.Role("User",t);e.save().then(function(t){console.log(t)},function(t){console.log(t)})}},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.dateFormat=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in e)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[o]:("00"+e[o]).substr((""+e[o]).length)));return t},e.emailCheck=function(t){var e=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;return e.test(t)}},,,,,,,,,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAABkCAYAAADOvVhlAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAD4JJREFUeF7tnYGR5bgNRC8AJ+AEnIAT2AgcgTNwBpuCU3AMTsJZOJnzdNXhDkZREgg0JepPq+rX7swXQegRbIIUpfnlFx0iIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIi4An84+uH/3x9/us++PmfX58/C5UIiIAIiACPAAQXYvvryQff/+RVKUtvJeBH5d3//1bGK/1mt9lKX++wzeYBe5njXwOx9b5EMcb5Ox1Mbjtd17a+XI3QZ6P3nd9lO8C2oBc5xmy/T2DM5IH4zjBBBuv7ApYV/h7a+8fXz/8O5+0kvixuGV6LusK7zHrgzFGPZcsCWg06jitG+30SYwaPaOOsR0NQveheiSmWI/z5UaCfUo8ut0+KoVvawIDvKmy7+3dLI51UwuDDsPE0B6ufdS1ZOz6LvRJd89FnyMiOdziy13vka7f8Dgxu9WF3YLv7d2tjDSpj8GHYeJrDE8KLHQqe3Z8mIEBwLUtE1vz00Y2Bbvmnr//2+ncHtrt/tzdYqJDBh2HjaQ5PCK9fNshmu+anL4ttZk8f3Rjoln/6+m+vf3dgu/t3e4NJeE+Rs+IlYweCaVkrhHTm+Ksru8NyQ+Z6z66vW36G3Uecuzuw3f17OggYfBg2nubwRMbrlwsgpDOHhHeG1geeu3un292/p0OCwYdh42kOTwvv7O4ECe8uEfOQH7t3ut39e6jZfq+WwYdh42kOTwivX2rorPFqqWGX6LnRj9073e7+3dhUw6oYfBg2nubwhPD6G2RgOHP4ZQrdXJsh9yHn7t7pdvfv6TBg8GHYeJrDE8Lrt5PhJltWQONDFD82gNeNgW75DRDc68LuwHb3797W+v/asG+UwYdh40kOvm7WtWTtxMeAr9Z68X18vHgHdtnrPfK1W34HBrf6sDswln+4mfHz64OOEl/Zhzrwwe/xPc6bvUu9qtGQDcEf+OY/5jPjUU0WY2PwJGvWtWTt/MUNftYWWO+Nr3/Ez35N2M7924LAiTFjsXL1b/bdFCOXs7wWXO47Te4OrOMfgh2dwGzMvtQH5UadaHVLIyuywSHrM3ytHh3GVucurBnXgmuasTMSVD+Yx0HS2hSDPOuA2MJeJ9YlvKzWSNiZCbCEOfopFf8gAldBOBr9j0QO58Le6pdYn73P1XfkmLF3OsysyMQG3o11JV6qGZyPoewA6c/z5asdB4Lrb9SN/DjLdP2MqRNHXvCP6mMONFVe25RjBeqqC5r1D9nHaNS37BXZ5NEyAn6P74+yZNjI3kCZ4YHp6qjz4Hc/T/y1OizQZ+r0584ytrI7sq5eS2SXsVPNLqM4Vmcro3cAm3jiOwzkiOmzhMFfJ0t4jwahHbbNVfsIvVxmpBqNYB1Hzkbg+F12DXMkXia2yAoqB8qNRBgBhPoYxyjLRZ0z9u8W3p1ZZwQz024ZO9W+Y+2Vje2Rv3GgtlifiRvYZQrvUb+265TwupasjNrVEdpnaLNTs7M6IZDxOphLAzadjtPEqqAbh5ixIDArNu8U3t1ZZwSTLbzV/lD1NYpuJ9ZZwnvEdLcn9DJtf8s5K7LPK8ermcLIbtyeA9tXW3qu/Dv6HnajwFfriqI7++ST9/Eu4X0D66qYxTbP2MmccxZrlfJRdH9Wg/m3chLeJsA7ilcCZeQXyw624sQ9kbNTrVluo2n27JagKLpV8fYziGrWFaebRzzewpoVWxk7mXOYwht3T3TjJrZ9Z41XGe+skkyc3w00LxTdRsYUxmefd68f+cwDfmT3/a740y+rM943sb4zRrt1zZSvPiV31b2V8V4R2uD7mUBhjvQjW1747hZd82fWh7jZfvYdrkdMVwvv7HWuCNWsD3fGaLeumfJ+lsSMdwnvimgl25wJlJXC66dc8Gn18sLRtUQhvdpq5sWjs6Yb/VkpvG9jfWeMduuaKe9ndz+I/VrCS4S5ytRMoKwSXgSdX9edXV9ls4lrn0edwt+YAseZv8915fMq4X0j6ztjtFtXtjwG+M7Ws2xf7C7/jerRroar3pv4PhsoV6Y6dip/1fXKn+73fhp49HSOz3YZN0W8z6uE942sO7EVmV4JUbeubHk/aDOXGXC9yni7vf+G8tlAuXKlasdnYLCx+hHeq+uw7+ONj5j1ruw41nnAo3qM2uOtrKuxFdll7GTOyWabZ+f9dBkv/s88JLxMmotsdQPN3Kra8Zklc42UgevMN585srPdVcL7VtbV2NpZeH38sG7IjvriVYZf6SdaaqhQC2XuDOqRu77+XbLdUdYbs08Wt6MmXLHU8N1ZZ9oscw4j4/XLVNlti9nurow3S+rB87qB1sl4/dS3u86FG1v2DgYTLfzcveHlOwj8xeGXGVa9nYktvG9lbdk/I3PLxHrmHAnvHzcGu/32Qel7tupuoHWE169zXW3bOqMUHwaI71/oZBR+65WtxY1+V2lF7J5A4JrI4v+oA4MFW3jfyvpThZfV78AHg6q9MtXs2kDFGLBibGupodLbQxlWAFTsjLLJyiX5YPMBx9iuM8oUGdPE0Yu2We9RHYnVW1lLeM97RNz6GJMOCW9FUW4oUxHMkVsVO14Mqg9M+EwOPkAoLQvwgmzZ6ixSv9/SplXdtVIv5tYx4uDR7TCxPd7K+hOF1++YQTt1Dt+ufuC2GVMnjszG6F+9FrLTar9NaTuNY9VXhLdSJl7u2V5a1pav6GfXb39HG/7bTcX4zodOp2T7DO5PsP5E4fXJQmeN1CcF6MO4p4FlAIunbpyOkoH46teO/03penfxbuM8LbxX/l99n2k9toidZczxcd6Mf5kZyAoOsd5VdTDsZgW8W9dReYgkZjrxLXadextXiQXrWvysLGa/q24uV+P+NeW6jSPhnW/qM+Y+G9ot472KlavvM6RGNhh2Y8Z+tGe8W5cv70Vq9EcC8H1nC6WPFfyfPRDGlxh1dwhl2v/bnNMNtF2EF4Ed3/HgbzzsJGJ+CocsyB9xGaISiKM1REY7e7/vYp3NVDOcYrYZszf7ubP0FoX37K+ydB+88dczegjjbGaV4TVa+kKG7pczMnZ0zoJRkSG8CM433Fwz8fYCVPE7vg7waI23+kTTaLtP12e0c8zGbdDAv97+KPvKdL6jF8cwBg3UDz/PhHCl8JptZJFo/zjgZvjEc65211x9n6nTt2vcMWHXlLGjcwIBVlBX7DACw2dEcTsWYzvZSMS6W7PieyB8h2f47DMVm1K/lTXal+W7ia/f8+qFZZXwdmZbZ4J1NZgyHmtHVn4kvp2ZwbcX4opgjqBV7LAeRFj5AIXP8uxGCMPvmCXGTKwzDfUZtWWfDJ/R7nezjsLLyBRj/I6WB6piybR1Jk6ZLWmj2K0IHupC/PiHfRgJQsWXjylTEUyW8PqpX3dbCoJj9Mhw5+bFUae/upucDY6Rz8hSuuLiMxR7au+trMGSJSBH7cIUS6atszjKxCCzzc8Gq2y86zxH4EnhhRu+/q5Ishv2KKuIv9/J77MXbL+RNdo0IzKdtmeKJdPW2TWNZjWshCjDkqUbmbo+8hwWwKodvw7V2dO4onH89DzuV/TrjjadX+HDrE3vc9wy9VbWqwc6plgybZ21/dX6rpU9e+hlNrb8+dX+3qnzo8qyAFbt+OlQdV1tVYP44Iaf/vBZ2E5+n/n8VtbgvnKgY4ol09ZRXM/Enr/R2l3Ok/ASlaYqmNGFjh3fqXbJen3meBSwXuR2yHr9WuiRz29l7QWEPdAxxZJp66ibzw5CZ4NxVUo6/b1a50eVYwHs2PGZGO6WxuzybuBZf6IYVPb0sq4tblE72hWRvTaWX1d2ZvxZNdAxxZJpa8TOD67ZASjuG79qk8z3nf6esf/x57AAdu344ICtpx5PtHfh2naZo0dLLTDiY5VPBcyMH29lHUWHdVOTKZZMWzGW4la+7CwrDsrZcmex3O3vT/WTbeplAezaiYLHXI+age0FLDMAIMv1mdiVUM/4kj03Pgp7NWN4K2vw8KxZMcIUS6at2P4zg2ssGwct22aYjbF4Xre/V+v9mHIsgAw7cURndaxsY0XRzQZnfKb9TvGNdWezmbeyji/+ZsQIUyyZtixukbH62Kwux/ldLfAzG9+j/sPo79l++ZHnsQCy7Pg7tggwBNzqtVPYj4E9++RYzDrvEN/4Vyxm63wr63jdaLvO0hRTLJm2IDiYvfgsH31iNja9cFWTC2W8ZPlnCSbLDi4vCgJsx7dhsTDALiuwo/iuGjQgMqO6Kkw+hTXasCpITLFk2bKnGuOj5N1dP3GmA38rL2Ni9vdK3L6+DAsgy44BHQkixIZ1Q2UU2AyBj4IIm9npfyaYIC5xoOhOtz+Ftc2QZgWYJZZov64tZLiIodjGnYElxhUG7jjDm31Und3fM7H/UeewALLseLijJQDUg8BEgFaOo8BmZqcjcTQBrg4csBk7i/25lwqHWOaTWNtbsyAmyOaQ5Z1x74qlZzljC37hg4HZ3pg2em0lMza9r6M/uAo/MgPXiv7OiOPX2PAjK/5f/ax8WxECJGYA1rkgwgiUoxsF+D2+H2URZqM7fRs19kjIrD50JHQ2DAIjvyES+D1E46hDMrLzkd9vZO1fNnT0vt2zuPax2+0PM7bO3g1czd5nhQcx6G+6ef/P4lTCO0s6nD8StKuAuHqZdNOlYXEI2ShAjl7ObB3tzFfYW33j7ihTrfqN61oxUHjob2Vtry+sxnQmZrJ9o2qrO6Or9j0T4DN2fvBamWhVr+FV5aoZ7lm5lQAgCkfZa6ZTWGCvFtzIAAJ8Np288r27VFFpk7eyxrXCd8wYECvI3FbEedcm/MIHAyl8vTsmRzGBwQu+GLNMXFZiS2VeTMCvjx11LvwegoepfWffIhMTsgv4Yx1v1IHxHURjlw75VtbMdvuOtmzJ6yxevyMXXbMIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiMD3JfA/P8fhH4RFvngAAAAASUVORK5CYII="},function(t,e,o){o(54);var i=o(2)(o(19),o(70),"data-v-1f74926b",null);t.exports=i.exports},,,,function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(13),n=i(s);e.default={name:"app",components:{Login:n.default}}},function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(22),n=i(s),a=(o(1),o(3)),r=o(64),l=i(r);e.default={data:function(){return{editTodoDialog:!1,todoTempCopy:{content:"",type:"",status:!1},todoTemp:null,doneCount:0,undoneCount:0}},props:{todos:{type:Array,default:[]},type:{type:String,default:""},noTodoTipClass:{type:String},showDeleteBtn:{type:Boolean,default:!1},types:{type:Object}},computed:{todoData:function t(){var e=this,t=this.todos.filter(function(t){return t=t.toJSON(),t.status===e.showDeleteBtn&&t.enable});return this.$emit("todoDataChange",t.length),t},fadeDirection:function(){return this.showDeleteBtn?"fade-right":"fade-left"},iconType:function(){return this.showDeleteBtn?"redo":"restore"},labelClass:function(){return this.todoTempCopy.type+"Title"}},watch:{todoData:function(){this.doneCount=this.showDeleteBtn?this.todoData.length:this.todos.length-this.todoData.length,this.undoneCount=this.todos.length-this.doneCount,this.$emit("getDoneCount",this.doneCount,this.todos.length)}},methods:{toggleStatus:function(t){t.set("status",!t.get("status")),t.save()},deleteTodo:function(t){t.set("enable",!1),t.save()},editTodo:function(t){var e=this;this.todoTemp=t,t=t.toJSON(),(0,n.default)(t).forEach(function(o){e.todoTempCopy[o]=t[o]}),this.editTodoDialog=!0},closeEditTodoDialog:function(){this.editTodoDialog=!1},saveTodoChange:function(){var t=this;delete t.todoTempCopy.objectId,delete t.todoTempCopy.createdAt,delete t.todoTempCopy.updatedAt,(0,n.default)(this.todoTempCopy).forEach(function(e){t.todoTemp.set(e,t.todoTempCopy[e])}),t.todoTemp.save(),this.closeEditTodoDialog()},getUpdatedTime:function(t){Date.prototype.format=a.dateFormat;var e=new Date(t.updatedAt).format("yyyy-MM-dd hh:mm:ss");return e},toMarked:function(t){var e=new l.default.Renderer;return e.paragraph=function(t){return t},(0,l.default)(t,{renderer:e})}}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(1),s=o(3);e.default={data:function(){return{email:"",password:"",snackbar:!1,emptyMessage:"",isBtnLoading:!1,showLoginFailDialog:!1,errorLoginMsg:""}},computed:{btnText:function(){return this.isBtnLoading?"登录中...":"登录"},errorEmailMsg:function(){return this.email?(0,s.emailCheck)(this.email)?"":"邮箱格式不正确":""},errorPasswordMsg:function(){return this.password&&this.password.length<6?"密码长度必须不能小于6位":""}},methods:{login:function(){var t=this;if(!this.email)return this.emptyMessage="请填写邮箱",void this.showSnackbar();if(!this.password)return this.emptyMessage="请填写密码",void this.showSnackbar();var e={email:this.email,password:this.password};this.isBtnLoading=!0,(0,i.requestLogin)(e).then(function(e){t.isBtnLoading=!1,t.$router.push({name:"todo"})},function(e){switch(e.code){case 211:t.errorLoginMsg="用户不存在，立即注册一个吧~",t.email="",t.password="";break;case 210:t.errorLoginMsg="用户名与密码不匹配，请重新输入密码。",t.password="";break;default:t.errorLoginMsg="赶紧注册一个账号并开始使用吧~~"}t.isBtnLoading=!1,t.showLoginFailDialog=!0})},registe:function(){this.$router.push({name:"registe"})},showSnackbar:function(){var t=this;this.snackbar=!0,this.snackTimer&&clearTimeout(this.snackTimer),this.snackTimer=setTimeout(function(){t.snackbar=!1},2e3)},hideSnackbar:function(){this.snackbar=!1,this.snackTimer&&clearTimeout(this.snackTimer)},closeLoginFailDialog:function(){this.showLoginFailDialog=!1}},mounted:function(){(0,i.isLogedin)()&&this.$router.push({name:"todo"})}}},,function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(1),n=o(68),a=i(n);e.default={data:function(){return{drawer:!1,confirmLogoutDialog:!1,showAddTodoItemDialog:!1,types:{ImpEmg:"重要-紧急",ImpNotEmg:"重要-不紧急",NotImpEmg:"不重要-紧急",NotImpNotEmg:"不重要-不紧急"},type:"ImpEmg",bottomNav:!1,todos:[],content:"",doneCount:0,undoneCount:0}},computed:{user:function(){var t=(0,s.getCurrentUser)(),e=t.attributes.username;return"Hi~,"+e},text:function(){return this.types[this.type]},ImpEmgTodos:function(){return this.todos.filter(function(t){return"ImpEmg"==t.attributes.type})},ImpNotEmgTodos:function(){return this.todos.filter(function(t){return"ImpNotEmg"==t.attributes.type})},NotImpEmgTodos:function(){return this.todos.filter(function(t){return"NotImpEmg"==t.attributes.type})},NotImpNotEmgTodos:function(){return this.todos.filter(function(t){return"NotImpNotEmg"==t.attributes.type})}},methods:{showDrawer:function(){this.drawer=!0},logout:function(){(0,s.logOut)(),(0,s.isLogedin)()||(this.closeLogoutConfirmDialog(),this.$router.push("/login"))},showLogoutConfirmDialog:function(){this.confirmLogoutDialog=!0,this.drawer=!1},closeLogoutConfirmDialog:function(){this.confirmLogoutDialog=!1,this.drawer=!1},handleTabChange:function(t){this.type=t},AddTodoItemDialogShow:function(){this.radioValue=this.type,this.showAddTodoItemDialog=!0},TodoItemDialogClose:function(){this.showAddTodoItemDialog=!1},ConfirmedAddTodoItem:function(){if(this.content){var t=this,e={};e.content=this.content,e.type=this.type,e.status=!1,e.enable=!0,this.TodoItemDialogClose(),this.content="",(0,s.AddTodoItem)(e).then(function(e){t.todos.push(e),t.bottomNav=!1},function(t){alert("数据保存失败"+t.message)})}},nextTab:function(){var t=this.type;switch(t){case"ImpEmg":this.type="ImpNotEmg";break;case"ImpNotEmg":this.type="NotImpEmg";break;case"NotImpEmg":this.type="NotImpNotEmg";break;case"NotImpNotEmg":this.type="ImpEmg";break;default:this.type="ImpEmg"}},previousTab:function(){var t=this.type;switch(t){case"ImpEmg":this.type="NotImpNotEmg";break;case"ImpNotEmg":this.type="ImpEmg";break;case"NotImpEmg":this.type="ImpNotEmg";break;case"NotImpNotEmg":this.type="NotImpEmg";break;default:this.type="ImpEmg"}},toggleBottomNavStatus:function(t){this.bottomNav=t},toggleBottomNavStatusPanel:function(){this.bottomNav=!this.bottomNav},getDoneCount:function(t,e){this.doneCount=t,this.undoneCount=e-t}},components:{"z-list":a.default},mounted:function(){var t=this;(0,s.LoadServerTodos)().then(function(e){t.todos=e})}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,o){o(58);var i=o(2)(o(17),o(73),null,null);t.exports=i.exports},function(t,e,o){o(59);var i=o(2)(o(18),o(74),"data-v-d0476d9e",null);t.exports=i.exports},function(t,e,o){o(57),o(56);var i=o(2)(o(21),o(72),"data-v-4cbc66ae",null);t.exports=i.exports},function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("mu-row",{attrs:{gutter:""}},[i("mu-col",{staticClass:"center",attrs:{width:"100",tablet:"70",desktop:"33"}},[i("img",{attrs:{src:o(12),alt:""}}),t._v(" "),i("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{label:"邮箱",hintText:"请输入邮箱",type:"email",icon:"email",fullWidth:"",errorText:t.errorEmailMsg},domProps:{value:t.email},on:{input:function(e){t.email=e}}}),t._v(" "),i("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{label:"密码",hintText:"请输入密码",type:"password",icon:"lock",fullWidth:"",errorText:t.errorPasswordMsg},domProps:{value:t.password},on:{input:function(e){t.password=e}}})],1)],1),t._v(" "),i("mu-row",{attrs:{gutter:""}},[i("mu-col",{staticClass:"center",attrs:{width:"100",tablet:"70",desktop:"33"}},[i("mu-raised-button",{staticClass:"btn",attrs:{label:t.btnText,primary:"",disabled:t.isBtnLoading},nativeOn:{click:function(e){t.login(e)}}}),t._v(" "),i("p",[t._v("还没有账号？注册一个吧~\n        "),i("mu-flat-button",{attrs:{label:"立即注册",secondary:""},nativeOn:{click:function(e){t.registe(e)}}})],1)],1)],1),t._v(" "),t.snackbar?i("mu-snackbar",{attrs:{message:t.emptyMessage,action:"关闭"},on:{actionClick:t.hideSnackbar,close:t.hideSnackbar}}):t._e(),t._v(" "),i("mu-dialog",{attrs:{open:t.showLoginFailDialog,title:"登录失败"}},[i("span",[t._v(t._s(t.errorLoginMsg))]),t._v(" "),i("mu-flat-button",{attrs:{label:"确定",primary:"",secondary:""},on:{click:t.closeLoginFailDialog},slot:"actions"})],1)],1)},staticRenderFns:[]}},,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fit"},[o("mu-flexbox",{staticClass:"fit",attrs:{orient:"vertical",wrap:"",gutter:0}},[o("mu-flexbox-item",[o("mu-appbar",{attrs:{title:"TodoList"}},[o("mu-icon-button",{attrs:{icon:"menu"},on:{click:t.showDrawer},slot:"left"}),t._v(" "),o("mu-icon-button",{attrs:{icon:"add",mini:"",tooltip:"添加计划"},on:{click:t.AddTodoItemDialogShow},slot:"right"})],1)],1),t._v(" "),o("mu-flexbox-item",[o("mu-tabs",{staticClass:"tabBar",attrs:{value:t.type,lineClass:"tabHighlight"},on:{change:t.handleTabChange}},[o("mu-tab",{attrs:{value:"ImpEmg",title:t.types.ImpEmg,titleClass:"ImpEmgTitle"}}),t._v(" "),o("mu-tab",{attrs:{value:"ImpNotEmg",title:t.types.ImpNotEmg,titleClass:"ImpNotEmgTitle"}}),t._v(" "),o("mu-tab",{attrs:{value:"NotImpEmg",title:t.types.NotImpEmg,titleClass:"NotImpEmgTitle"}}),t._v(" "),o("mu-tab",{attrs:{value:"NotImpNotEmg",title:t.types.NotImpNotEmg,titleClass:"NotImpNotEmgTitle"}})],1)],1),t._v(" "),o("mu-flexbox",{staticClass:"fit",attrs:{gutter:0,justify:"center",align:"stretch",orient:"vertical",wrap:""}},[o("v-touch",{staticClass:"fit scroll",attrs:{"swipe-options":{threshold:30}},on:{swipeleft:t.nextTab,swiperight:t.previousTab,dbltap:t.AddTodoItemDialogShow}},["ImpEmg"===t.type?o("z-list",{attrs:{todos:t.ImpEmgTodos,type:"ImpEmg",noTodoTipClass:"ImpEmgTitle",showDeleteBtn:t.bottomNav,types:t.types},on:{getDoneCount:t.getDoneCount}}):t._e(),t._v(" "),"ImpNotEmg"===t.type?o("z-list",{attrs:{todos:t.ImpNotEmgTodos,type:"ImpNotEmg",noTodoTipClass:"ImpNotEmgTitle",showDeleteBtn:t.bottomNav,types:t.types}}):t._e(),t._v(" "),"NotImpEmg"===t.type?o("z-list",{attrs:{todos:t.NotImpEmgTodos,type:"NotImpEmg",noTodoTipClass:"NotImpEmgTitle",showDeleteBtn:t.bottomNav,types:t.types}}):t._e(),t._v(" "),"NotImpNotEmg"===t.type?o("z-list",{attrs:{todos:t.NotImpNotEmgTodos,type:"NotImpNotEmg",noTodoTipClass:"NotImpNotEmgTitle",showDeleteBtn:t.bottomNav,types:t.types}}):t._e()],1),t._v(" "),o("mu-paper",{staticClass:"fitWidth"},[o("v-touch",{on:{swipeleft:t.nextTab,swiperight:t.previousTab}},[o("mu-bottom-nav",{attrs:{value:t.bottomNav},on:{change:t.toggleBottomNavStatus}},[o("mu-bottom-nav-item",{attrs:{value:!1,title:"未完成("+t.undoneCount+")",icon:"restore"}}),t._v(" "),o("mu-bottom-nav-item",{attrs:{value:!0,title:"已完成("+t.doneCount+")",icon:"favorite"}})],1)],1)],1)],1)],1),t._v(" "),o("mu-drawer",{attrs:{open:t.drawer,docked:!1},on:{close:function(e){t.drawer=!1}}},[o("mu-list",[o("mu-list-item",{attrs:{title:t.user}}),t._v(" "),o("mu-list-item",{attrs:{title:"登出"},nativeOn:{click:function(e){t.showLogoutConfirmDialog(e)}}}),t._v(" "),o("mu-content-block",{staticClass:"content"},[o("span",{staticStyle:{"font-weight":"bold"}},[t._v("关于这个东西：")]),t._v("这个项目是为了学习Vue而制作，界面利用的是muse-ui框架，使用vue-router进行页面跳转，后端数据的存储使用LeanCloud的免费版。\n      ")])],1)],1),t._v(" "),o("mu-dialog",{attrs:{open:t.confirmLogoutDialog,title:"确认登出"},on:{close:t.closeLogoutConfirmDialog}},[t._v("\n    退出登录后将无法继续使用，确定退出？\n    "),o("mu-flat-button",{attrs:{label:"取消"},on:{click:t.closeLogoutConfirmDialog},slot:"actions"}),t._v(" "),o("mu-flat-button",{attrs:{label:"退出",secondary:""},on:{click:t.logout},slot:"actions"})],1),t._v(" "),o("mu-dialog",{attrs:{open:t.showAddTodoItemDialog,title:"添加Todo"}},[o("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{hintText:"添加待办事项",fullWidth:"",multiLine:"",rows:2,rowsMax:4},domProps:{value:t.content},on:{input:function(e){t.content=e}}}),t._v(" "),o("mu-flexbox",{attrs:{orient:"vertical",align:"flex-start"}},[o("mu-radio",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{label:t.types.ImpEmg,name:"type",nativeValue:"ImpEmg",labelClass:"ImpEmgTitle"},domProps:{value:t.type},on:{input:function(e){t.type=e}}}),t._v(" "),o("mu-radio",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{label:t.types.ImpNotEmg,name:"type",nativeValue:"ImpNotEmg",labelClass:"ImpNotEmgTitle"},domProps:{value:t.type},on:{input:function(e){t.type=e}}}),t._v(" "),o("mu-radio",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{label:t.types.NotImpEmg,name:"type",nativeValue:"NotImpEmg",labelClass:"NotImpEmgTitle"},domProps:{value:t.type},on:{input:function(e){t.type=e}}}),t._v(" "),o("mu-radio",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],attrs:{label:t.types.NotImpNotEmg,name:"type",nativeValue:"NotImpNotEmg",labelClass:"NotImpNotEmgTitle"},domProps:{value:t.type},on:{input:function(e){t.type=e}}})],1),t._v(" "),o("mu-flat-button",{attrs:{primary:"",label:"添加"},on:{click:t.ConfirmedAddTodoItem},slot:"actions"}),t._v(" "),o("mu-flat-button",{attrs:{primary:"",label:"取消"},on:{click:t.TodoItemDialogClose},slot:"actions"})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("router-view")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.todoData.length?o("mu-list",[o("mu-sub-header",[t._v(t._s(t.showDeleteBtn?"已完成("+t.doneCount+")":"未完成("+t.undoneCount+")"))]),t._v(" "),t._l(t.todoData,function(e,i){return o("v-touch",{on:{press:function(o){t.editTodo(e)}}},[o("mu-list-item",{key:i},[o("span",{domProps:{innerHTML:t._s(t.toMarked(e.attributes.content))},slot:"title"}),t._v(" "),o("mu-icon",{attrs:{value:t.iconType},on:{click:function(o){t.toggleStatus(e)}},slot:"left"}),t._v(" "),o("mu-icon-button",{directives:[{name:"show",rawName:"v-show",value:t.showDeleteBtn,expression:"showDeleteBtn"}],attrs:{icon:"delete",touch:""},on:{click:function(o){t.deleteTodo(e)}},slot:"right"}),t._v(" "),o("mu-icon-button",{style:{"margin-right":t.showDeleteBtn?"60px":"0px"},attrs:{icon:"mode_edit",touch:""},on:{click:function(o){t.editTodo(e)}},slot:"right"}),t._v(" "),o("span",{staticStyle:{color:"#ccc"},slot:"describe"},[t._v("更新时间："+t._s(t.getUpdatedTime(e)))])],1)],1)})],2):o("div",{staticClass:"no-todo-tip"},[t._v("\n    还没有"),o("span",{class:t.noTodoTipClass},[o("span",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(t.showDeleteBtn?"已完成":"未完成"))]),t._v("的["+t._s(t.types[t.type])+"]")]),t._v("事项，赶紧添加一个吧~\n  ")]),t._v(" "),o("mu-dialog",{attrs:{open:t.editTodoDialog,title:"修改Todo"},on:{close:t.closeEditTodoDialog}},[o("mu-flexbox",{attrs:{orient:"vertical",align:"stretch"}},[o("mu-flexbox-item",[o("mu-text-field",{directives:[{name:"model",rawName:"v-model",value:t.todoTempCopy.content,expression:"todoTempCopy.content"}],attrs:{label:"编辑内容",hintText:"输入Todo内容",fullWidth:"",multiLine:"",rows:2,rowsMax:4},domProps:{value:t.todoTempCopy.content},on:{input:function(e){t.todoTempCopy.content=e}}})],1),t._v(" "),o("mu-flexbox-item",[o("mu-select-field",{directives:[{name:"model",rawName:"v-model",value:t.todoTempCopy.type,expression:"todoTempCopy.type"}],attrs:{label:"选择类型",fullWidth:"",labelClass:t.labelClass},domProps:{value:t.todoTempCopy.type},on:{input:function(e){t.todoTempCopy.type=e}}},[o("mu-menu-item",{attrs:{value:"ImpEmg",title:"重要-紧急",titleClass:"ImpEmgTitle"}}),t._v(" "),o("mu-menu-item",{attrs:{value:"ImpNotEmg",title:"重要-不紧急",titleClass:"ImpNotEmgTitle"}}),t._v(" "),o("mu-menu-item",{attrs:{value:"NotImpEmg",title:"不重要-紧急",titleClass:"NotImpEmgTitle"}}),t._v(" "),o("mu-menu-item",{attrs:{value:"NotImpNotEmg",title:"不重要-不紧急",titleClass:"NotImpNotEmgTitle"}})],1)],1),t._v(" "),o("mu-flexbox-item",[o("mu-switch",{directives:[{name:"model",rawName:"v-model",value:t.todoTempCopy.status,expression:"todoTempCopy.status"}],attrs:{label:"已完成？",labelLeft:""},domProps:{value:t.todoTempCopy.status},on:{input:function(e){t.todoTempCopy.status=e}}})],1)],1),t._v(" "),o("mu-flat-button",{attrs:{icon:"save",label:"保存"},on:{click:t.saveTodoChange},slot:"actions"}),t._v(" "),o("mu-flat-button",{attrs:{label:"取消",secondary:""},on:{click:t.closeEditTodoDialog},slot:"actions"})],1)],1)},staticRenderFns:[]}}]);