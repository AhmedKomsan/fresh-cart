"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[159],{159:(b,p,r)=>{r.r(p),r.d(p,{HomeComponent:()=>H});var a=r(6814),g=r(8129),l=r(756),u=r(1120),d=r(530),_=r(95),t=r(4769),h=r(0),f=r(6286),x=r(2425),v=r(9196);function T(i,n){1&i&&t._UZ(0,"img",9)}function C(i,n){1&i&&t._UZ(0,"img",10)}function O(i,n){1&i&&t._UZ(0,"img",11)}function Z(i,n){if(1&i&&(t.TgZ(0,"div",15),t._UZ(1,"img",16),t.TgZ(2,"h3",17),t._uU(3),t.qZA()()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.image,t.LSH)("alt",e.name)("title",e.name),t.xp6(2),t.Oqu(e.name)}}function D(i,n){1&i&&(t.ynx(0,14),t.YNc(1,Z,4,4,"ng-template",4),t.BQk())}function E(i,n){if(1&i&&(t.TgZ(0,"section",12)(1,"h2"),t._uU(2,"Popular Categories"),t.qZA(),t.TgZ(3,"owl-carousel-o",3),t.YNc(4,D,2,0,"ng-container",13),t.qZA()()),2&i){const e=t.oxw();t.xp6(3),t.Q6J("options",e.categoriesOptions),t.xp6(1),t.Q6J("ngForOf",e.categories)}}function A(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"i",36),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.addProductWishList(s._id))}),t.qZA()}}function P(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"i",37),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,c=t.oxw(2);return t.KtG(c.removeProductWishList(s._id))}),t.qZA()}}function M(i,n){if(1&i&&t._UZ(0,"i",38),2&i){const e=n.$implicit,o=t.oxw().$implicit;t.ekj("rating-color",o.ratingsAverage>=e)}}const L=function(i){return["/productDetails",i]},S=function(){return[1,2,3,4,5]};function w(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"div",21)(1,"div",22),t.YNc(2,A,1,0,"i",23),t.YNc(3,P,1,0,"i",24),t.TgZ(4,"header",25),t._UZ(5,"img",26),t.TgZ(6,"h3",27),t._uU(7),t.ALo(8,"cuttext"),t.qZA(),t.TgZ(9,"h4",28),t._uU(10),t.qZA(),t.TgZ(11,"div",29)(12,"span",30),t._uU(13),t.ALo(14,"currency"),t.qZA(),t.TgZ(15,"p",31),t.YNc(16,M,1,2,"i",32),t.TgZ(17,"span",33),t._uU(18),t.qZA()()()(),t.TgZ(19,"footer")(20,"button",34,35),t.NdJ("click",function(){const c=t.CHM(e).$implicit,m=t.MAs(21),W=t.oxw(2);return t.KtG(W.addProductCart(c._id,m))}),t._uU(22,"+ Add Product"),t.qZA()()()()}if(2&i){const e=n.$implicit,o=t.oxw(2);t.xp6(2),t.Q6J("ngIf",!o.wishListData.includes(e._id)),t.xp6(1),t.Q6J("ngIf",o.wishListData.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(17,L,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("title",e.title)("alt",e.title),t.xp6(2),t.Oqu(t.xi3(8,11,e.title,3)),t.xp6(3),t.Oqu(e.category.name),t.xp6(3),t.Oqu(t.xi3(14,14,e.price," EGP ")),t.xp6(3),t.Q6J("ngForOf",t.DdM(19,S)),t.xp6(2),t.Oqu(e.ratingsAverage)}}function U(i,n){if(1&i){const e=t.EpF();t.TgZ(0,"section",12)(1,"h2"),t._uU(2,"Popular Products"),t.qZA(),t.TgZ(3,"input",18),t.NdJ("ngModelChange",function(s){t.CHM(e);const c=t.oxw();return t.KtG(c.term=s)}),t.qZA(),t.TgZ(4,"div",19),t.YNc(5,w,23,20,"div",20),t.ALo(6,"slice"),t.ALo(7,"search"),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(3),t.Q6J("ngModel",e.term),t.xp6(2),t.Q6J("ngForOf",t.Dn7(6,2,t.xi3(7,6,e.products,e.term),0,18))}}let H=(()=>{class i{constructor(e,o,s,c,m){this._ProductService=e,this._CartService=o,this._ToastrService=s,this._Renderer2=c,this._WishlistService=m,this.products=[],this.categories=[],this.wishListData=[],this.term="",this.categoriesOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,autoplay:!0,autoplayTimeout:5e3,autoplaySpeed:1e3,navText:["",""],responsive:{0:{items:2},400:{items:3},740:{items:4},940:{items:6}},nav:!1},this.mainSlideOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!0,navSpeed:700,autoplay:!0,autoplayTimeout:4e3,autoplaySpeed:1e3,navText:["",""],responsive:{0:{items:1}},nav:!1}}ngOnInit(){this._ProductService.getProducts().subscribe({next:e=>{this.products=e.data},error:e=>{console.log(e)}}),this._ProductService.getCategories().subscribe({next:e=>{this.categories=e.data},error:e=>{console.log(e)}}),this._WishlistService.getWishList().subscribe({next:e=>{const o=e.data.map(s=>s._id);this.wishListData=o},error:e=>{console.log(e)}})}addProductCart(e,o){this._Renderer2.setAttribute(o,"disabled","true"),this._CartService.addToCart(e).subscribe({next:s=>{this._ToastrService.success(s.message),this._Renderer2.removeAttribute(o,"disabled"),this._CartService.cartNumber.next(s.numOfCartItems)},error:s=>{this._Renderer2.removeAttribute(o,"disabled"),this._ToastrService.error(s.error.message)}})}addProductWishList(e){this._WishlistService.addToWishList(e).subscribe({next:o=>{this._ToastrService.success(o.message),this.wishListData=o.data,this._WishlistService.wishListNum.next(o.data)},error:o=>{this._ToastrService.success(o.error.message)}})}removeProductWishList(e){this._WishlistService.removeItemWishlist(e).subscribe({next:o=>{this._ToastrService.warning(o.message),this.wishListData=o.data,this._WishlistService.wishListNum.next(o.data)},error:o=>{this._ToastrService.remove(o.error.message)}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(h.M),t.Y36(f.N),t.Y36(x._W),t.Y36(t.Qsj),t.Y36(v.M))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:13,vars:3,consts:[[1,"py-3"],[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3"],["height","200","src","./assets/images/slide-1.jpeg","alt","slide-1",1,"w-100","img-right","object-fit-cover"],["height","200","src","./assets/images/slide-2.jpeg","alt","slide-2",1,"w-100","img-right","object-fit-cover"],["class","py-4",4,"ngIf"],["height","400","src","./assets/images/main-slider-1.jpeg","alt","slide1",1,"object-fit-fill"],["height","400","src","./assets/images/main-slider-2.jpeg","alt","slide2",1,"object-fit-fill"],["height","400","src","./assets/images/main-slider-3.jpeg","alt","slide3",1,"object-fit-fill"],[1,"py-4"],["class","overflow-hidden",4,"ngFor","ngForOf"],[1,"overflow-hidden"],[1,"cursor-pointer"],["height","300px",1,"object-fit-fill",3,"src","alt","title"],[1,"h6","text-main","text-center","mt-2"],["type","text","placeholder","Search...",1,"form-control","w-50","mx-auto","form-control-sm","my-3","p-3",3,"ngModel","ngModelChange"],[1,"row","g-4","justify-content-center"],["class"," col-md-6 col-lg-4 col-xl-3 col-xxl-2",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-4","col-xl-3","col-xxl-2"],[1,"product","overflow-hidden","cursor-pointer","h-100"],["class","fa-regular fa-heart heart",3,"click",4,"ngIf"],["class","fas fa-heart heart",3,"click",4,"ngIf"],[3,"routerLink"],[1,"w-100",3,"src","title","alt"],[1,"h6"],[1,"h6","text-main"],[1,"d-flex","justify-content-between","align-items-center","small"],[1,"fw-bolder","font-sm"],[1,"m-0"],["class","fas fa-star rating-color",3,"rating-color",4,"ngFor","ngForOf"],[1,"text-muted"],[1,"main-btn","w-100","mt-2",3,"click"],["disBtn",""],[1,"fa-regular","fa-heart","heart",3,"click"],[1,"fas","fa-heart","heart",3,"click"],[1,"fas","fa-star","rating-color"]],template:function(o,s){1&o&&(t.TgZ(0,"section",0)(1,"div")(2,"div",1)(3,"div",2)(4,"owl-carousel-o",3),t.YNc(5,T,1,0,"ng-template",4),t.YNc(6,C,1,0,"ng-template",4),t.YNc(7,O,1,0,"ng-template",4),t.qZA()(),t.TgZ(8,"div",5),t._UZ(9,"img",6)(10,"img",7),t.qZA()()()(),t.YNc(11,E,5,2,"section",8),t.YNc(12,U,8,9,"section",8)),2&o&&(t.xp6(4),t.Q6J("options",s.mainSlideOptions),t.xp6(7),t.Q6J("ngIf",s.categories.length>0),t.xp6(1),t.Q6J("ngIf",s.products.length>0))},dependencies:[a.ez,a.sg,a.O5,a.OU,a.H9,g.r,l.bB,l.Fy,l.Mp,u.rH,d.C,_.u5,_.Fj,_.JJ,_.On]})}return i})()}}]);