(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5449:function(e,t,n){e.exports=n(5686)},5454:function(e,t,n){},5456:function(e,t,n){},5686:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),s=n.n(r),l=(n(5454),n(12)),i=(n(5456),n(141)),d=n(32),c=n(142),h=n(143),p=n(153),g=n(144),m=n(154),u=n(6),f=n.n(u),b=n(3),E=n(17),w=n(152),j=n(5688),y=Object(l.withStyles)(function(e){return{fileList:{paddingLeft:"2em"},progressBar:{width:"3em",height:"1em",backgroundColor:"#eee"},progressVerified:{height:"100%",backgroundColor:"#aaa",float:"left"},progressTranslated:{height:"100%",backgroundColor:"#ccc",float:"left"}}})(function(e){var t=e.classes,n=e.filename,a=e.selected,r=e.percentTranslated,s=e.percentVerified;return o.a.createElement(b.i,{button:!0,selected:a,className:t.fileList},o.a.createElement(b.j,null,o.a.createElement(E.f,null)),o.a.createElement(b.k,{primary:n}),o.a.createElement(j.a,{className:t.progressBar},o.a.createElement(j.a,{className:t.progressVerified,now:s}),o.a.createElement(j.a,{className:t.progressTranslated,now:r-s})))}),v=Object(l.withStyles)(function(e){return{files:{height:"100%"},fileList:{height:"100%",overflowY:"auto"},fileListItem:{paddingLeft:"1em"}}})(function(e){var t=e.classes,n=e.filenames,a=e.selected,r=n?n.map(function(e,t){return o.a.createElement(y,{key:t,filename:e+".md",selected:e+""===a,percentTranslated:100-e,percentVerified:100-2*e})}):[];return o.a.createElement("div",{className:t.files},o.a.createElement(b.h,{className:t.files,component:"nav",dense:!0},o.a.createElement("div",{className:t.fileList},o.a.createElement(b.i,{className:t.fileListItem},o.a.createElement(b.j,null,o.a.createElement(E.d,null)),o.a.createElement(b.k,{inset:!0,primary:"content/"}),o.a.createElement(E.c,null)),o.a.createElement(b.c,{in:!0,timeout:"auto",unmountOnExit:!0},o.a.createElement(b.h,{dense:!0},r,o.a.createElement(b.i,null),o.a.createElement(b.i,null),o.a.createElement(b.i,null),o.a.createElement(b.i,null),o.a.createElement(b.i,null))))))}),I=Object(w.a)(Array(50).keys()).map(function(e){return e+1}),O=function(e){return o.a.createElement(v,Object.assign({},e,{filenames:I,selected:"10"}))},x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={open:!0},n.handleDrawerOpen=function(){n.setState({open:!0})},n.handleDrawerClose=function(){n.setState({open:!1})},n}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e,t=this.props.classes,n=this.state.open,a=o.a.createElement(b.e,{variant:"persistent",anchor:"left",open:n,classes:{paper:t.drawerPaper}},o.a.createElement("div",{className:t.drawerHeader},o.a.createElement(b.n,{variant:"subheading"},"Files"),o.a.createElement(b.g,{onClick:this.handleDrawerClose},o.a.createElement(E.b,null))),o.a.createElement(b.d,null),o.a.createElement(O,null));return o.a.createElement("div",null,o.a.createElement(b.a,{className:f()(t.appBar,(e={},Object(d.a)(e,t.appBarShift,n),Object(d.a)(e,t["appBarShift-left"],n),e))},o.a.createElement(b.m,{className:t.toolbar,disableGutters:!n},o.a.createElement(b.g,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:f()(t.menuButton,n&&t.hide)},o.a.createElement(E.e,null)),o.a.createElement(b.n,{variant:"title",color:"inherit",noWrap:!0},"translateMarkdown"))),a)}}]),t}(o.a.Component),B=Object(l.withStyles)(function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},drawerPaper:{width:240,overflowY:"unset"},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawerHeader:Object(i.a)({display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 8px 0 1em"},e.mixins.toolbar),toolbar:{width:"100%"}}},{withTheme:!0})(x),S=function(e){return o.a.createElement(B,e)},k=n(151),P=n.n(k),N=Object(l.withStyles)(function(e){return{root:{border:"1px solid #ccc"},buttons:{width:"auto",marginTop:"-1.7em",textAlign:"right"}}})(function(e){var t=e.classes,n=e.markdown,a=e.editable,r=e.reverse;return o.a.createElement(b.l,{className:t.root,style:{background:a?"transparent":"#eee"}},o.a.createElement("div",{contentEditable:a,style:{padding:"0 1em",transform:r?"rotateY(180deg)":""}},o.a.createElement(P.a,{className:"markdown",source:n})),a?o.a.createElement("div",{className:t.buttons},o.a.createElement(b.g,{"aria-label":"Complete"},o.a.createElement(E.a,{fontSize:"small"}))):o.a.createElement("div",null))}),G=function(e){var t=e.sources,n=e.target,a=t[0].map(function(e,t){return o.a.createElement(b.f,{container:!0,wrap:"nowrap",key:t,spacing:16},o.a.createElement(b.f,{component:"div",item:!0,xs:4},o.a.createElement(N,{markdown:e,reverse:!0})),o.a.createElement(b.f,{item:!0,xs:4},o.a.createElement(N,{markdown:e})),o.a.createElement(b.f,{item:!0,xs:4},o.a.createElement(N,{markdown:n[t],editable:!0})))});return o.a.createElement("div",null,o.a.createElement(b.f,{container:!0,wrap:"nowrap",spacing:16},o.a.createElement(b.f,{component:"div",item:!0,xs:4},o.a.createElement(b.b,{icon:o.a.createElement(E.h,null),label:"(NE) Hsilgne",onDelete:function(){},variant:"outlined",style:{justifyContent:"space-between",width:"100%",background:"#eee"}})),o.a.createElement(b.f,{item:!0,xs:4},o.a.createElement(b.b,{icon:o.a.createElement(E.h,null),label:"(EN) English",onDelete:function(){},variant:"outlined",style:{justifyContent:"space-between",width:"100%",background:"#eee"}})),o.a.createElement(b.f,{item:!0,xs:4},o.a.createElement(b.b,{icon:o.a.createElement(E.h,null),label:"(HI) Hindi",onDelete:function(){},deleteIcon:o.a.createElement(E.g,null),variant:"outlined",style:{justifyContent:"space-between",width:"100%"}}))),a)},T="\n# 10. \u0926\u0938 \u0935\u093f\u092a\u0924\u094d\u0924\u093f\u092f\u093e\u0901\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-01.jpg)\n\n\u092e\u0942\u0938\u093e \u0914\u0930 \u0939\u093e\u0930\u0942\u0928 \u095e\u093f\u0930\u094c\u0928 \u0915\u0947 \u092a\u093e\u0938 \u0917\u092f\u0947 | \u0909\u0928\u094d\u0939\u094b\u0902\u0928\u0947 \u0915\u0939\u093e, \u201c\u0907\u0938\u094d\u0930\u093e\u090f\u0932 \u0915\u093e \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u092f\u094b\u0902 \u0915\u0939\u0924\u093e \u0939\u0948,\u201d \u092e\u0947\u0930\u0940 \u092a\u094d\u0930\u091c\u093e \u0915\u0947 \u0932\u094b\u0917\u094b\u0902 \u0915\u094b \u091c\u093e\u0928\u0947 \u0926\u0947 !\u2019 \u095e\u093f\u0930\u094c\u0928 \u0909\u0928 \u092a\u0930 \u0939\u0901\u0938\u093e | \u0909\u0938\u0928\u0947 \u0915\u0939\u093e \u0915\u093f \u092e\u0948\u0902 \u0907\u0938\u094d\u0930\u093e\u090f\u0932\u093f\u092f\u094b\u0902 \u0915\u094b \u0928\u0939\u0940\u0902 \u091c\u093e\u0928\u0947 \u0926\u0942\u0901\u0917\u093e, \u0909\u0938\u0928\u0947 \u0909\u0928\u094d\u0939\u0947\u0902 \u0914\u0930 \u092d\u0940 \u0915\u0920\u093f\u0928 \u0915\u093e\u0930\u094d\u092f \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u092f\u0947 \u0935\u093f\u0935\u0936 \u0915\u093f\u092f\u093e !\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-02.jpg)\n\n\u095e\u093f\u0930\u094c\u0928 \u0915\u093e \u092e\u0928 \u0915\u0920\u094b\u0930 \u0939\u094b \u0917\u092f\u093e \u0914\u0930 \u0935\u0939 \u092a\u094d\u0930\u091c\u093e \u0915\u094b \u091c\u093e\u0928\u0947 \u0928\u0939\u0940\u0902 \u0926\u0947 \u0930\u0939\u093e \u0925\u093e, \u0907\u0938\u0932\u093f\u092f\u0947 \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u092e\u093f\u0938\u094d\u0930 \u0926\u0947\u0936 \u092a\u0930 \u0926\u0938 \u092d\u092f\u093e\u0928\u0915 \u0935\u093f\u092a\u0924\u094d\u0924\u093f\u092f\u093e\u0901 \u092d\u0947\u091c\u0940 (\u0935\u093f\u092a\u0924\u094d\u0924\u093f \u090f\u0915 \u092d\u092f\u093e\u0928\u0915 \u0906\u092a\u0926\u093e \u0939\u0948 |) \u0907\u0928 \u092d\u092f\u093e\u0928\u0915 \u0935\u093f\u092a\u0924\u094d\u0924\u093f\u092f\u094b\u0902 \u0915\u0947 \u0926\u094d\u0935\u093e\u0930\u093e \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u092f\u0939 \u0926\u093f\u0916\u093e\u0928\u093e \u091a\u093e\u0939\u0924\u093e \u0925\u093e ,\u0915\u093f \u0935\u0939 \u095e\u093f\u0930\u094c\u0928 \u0935 \u092e\u093f\u0938\u094d\u0930 \u0915\u0947 \u0926\u0947\u0935\u0924\u093e\u0913 \u0938\u0947 \u0915\u0908 \u0905\u0927\u093f\u0915 \u0936\u0915\u094d\u0924\u093f\u0936\u093e\u0932\u0940 \u0939\u0948 |\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-03.jpg)\n\n\u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u0928\u0940\u0932 \u0928\u0926\u0940 \u0915\u094b \u0932\u0939\u0942 \u0938\u0947 \u092d\u0930 \u0926\u093f\u092f\u093e, \u0924\u092c \u092d\u0940 \u095e\u093f\u0930\u094c\u0928 \u0915\u093e \u092e\u0928 \u0939\u0920\u0940\u0932\u093e \u0930\u0939\u093e \u0914\u0930 \u0909\u0938\u0928\u0947 \u0907\u0938\u094d\u0930\u093e\u090f\u0932\u093f\u092f\u094b\u0902 \u0915\u094b \u0928\u0939\u0940\u0902 \u091c\u093e\u0928\u0947 \u0926\u093f\u092f\u093e |\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-04.jpg)\n\n\u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u0938\u093e\u0930\u0947 \u092e\u093f\u0938\u094d\u0930 \u0926\u0947\u0936 \u092e\u0947\u0902 \u092e\u0947\u0902\u0922\u0915\u094b\u0902 \u0915\u094b \u092d\u0947\u091c \u0926\u093f\u092f\u093e | \u095e\u093f\u0930\u094c\u0928 \u0928\u0947 \u092e\u0947\u0902\u0922\u0915\u094b\u0902 \u0915\u094b \u0926\u0942\u0930 \u0932\u0947 \u091c\u093e\u0928\u0947 \u0915\u0947 \u0932\u093f\u092f\u0947 \u092e\u0942\u0938\u093e \u0938\u0947 \u0935\u093f\u0928\u0924\u0940 \u0915\u0940 | \u091c\u092c \u095e\u093f\u0930\u094c\u0928 \u0928\u0947 \u0926\u0947\u0916\u093e \u0915\u093f \u0938\u092c \u092e\u0947\u0902\u0922\u0915 \u092e\u0930 \u0917\u090f \u0939\u0948, \u0924\u092c \u095e\u093f\u0930\u094c\u0928 \u0928\u0947 \u0905\u092a\u0928\u0947 \u092e\u0928 \u0915\u094b \u0914\u0930 \u0915\u0920\u094b\u0930 \u0915\u0930 \u0932\u093f\u092f\u093e \u0914\u0930 \u0907\u0938\u094d\u0930\u093e\u090f\u0932\u093f\u092f\u094b\u0902 \u0915\u094b \u0928\u0939\u0940\u0902 \u091c\u093e\u0928\u0947 \u0926\u093f\u092f\u093e |\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-05.jpg)\n\n\u0905\u0924: \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u0921\u093e\u0902\u0938\u094b\u0902 \u0915\u0947 \u091d\u0941\u0923\u094d\u0921 \u0915\u094b \u092d\u0947\u091c\u093e \u0914\u0930 \u092b\u093f\u0930 \u092e\u0915\u094d\u0916\u093f\u092f\u094b\u0902 \u0915\u0940 \u092e\u0939\u093e\u092e\u093e\u0930\u0940 \u0915\u094b \u092d\u0947\u091c\u093e | \u095e\u093f\u0930\u094c\u0928 \u0928\u0947 \u092e\u0942\u0938\u093e \u0914\u0930 \u0939\u093e\u0930\u0942\u0928 \u0915\u094b \u092c\u0941\u0932\u0935\u093e\u0915\u0930 \u0915\u0939\u093e \u0915\u093f \u092f\u0926\u093f \u0935\u0939 \u0907\u0938 \u092e\u0939\u093e\u092e\u093e\u0930\u0940 \u0915\u094b \u0938\u092e\u093e\u092a\u094d\u0924 \u0915\u0930 \u0926\u0947, \u0924\u094b \u095e\u093f\u0930\u094c\u0928 \u092e\u093f\u0938\u094d\u0930 \u0938\u0947 \u0907\u0938\u094d\u0930\u093e\u090f\u0932\u093f\u092f\u094b\u0902 \u0915\u094b \u092e\u0941\u0915\u094d\u0924 \u0915\u0930 \u0926\u0947\u0902\u0917\u093e | \u0924\u092c \u092e\u0942\u0938\u093e \u0928\u0947 \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0938\u0947 \u0935\u093f\u0928\u0924\u0940 \u0915\u0940, \u0914\u0930 \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u0921\u093e\u0902\u0938\u094b\u0902 \u0915\u0947 \u091d\u0941\u0923\u094d\u0921 \u0915\u094b \u092e\u093f\u0938\u094d\u0930 \u0938\u0947 \u0926\u0942\u0930 \u0915\u0930 \u0926\u093f\u092f\u093e, \u0924\u092c \u095e\u093f\u0930\u094c\u0928 \u0928\u0947 \u0907\u0938 \u092c\u093e\u0930 \u092d\u0940 \u0905\u092a\u0928\u0947 \u092e\u0928 \u0915\u094b \u0915\u0920\u094b\u0930 \u0915\u093f\u092f\u093e \u0914\u0930 \u0909\u0928 \u0932\u094b\u0917\u094b\u0902 \u0915\u094b \u091c\u093e\u0928\u0947 \u0928 \u0926\u093f\u092f\u093e |\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-06.jpg)\n\n\u0907\u0938\u0915\u0947 \u092c\u093e\u0926, \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u092e\u093f\u0938\u094d\u0930\u093f\u092f\u094b \u0915\u0947 \u0938\u092d\u0940 \u092a\u0936\u0941\u0913 \u0915\u094b \u0930\u094b\u0917\u0940 \u0915\u093f\u092f\u093e \u0935 \u0909\u0928\u094d\u0939\u0947\u0902 \u092e\u093e\u0930 \u0926\u093f\u092f\u093e | \u0924\u094c\u092d\u0940 \u095e\u093f\u0930\u094c\u0928 \u0915\u093e \u092e\u0928 \u0915\u0920\u094b\u0930 \u0939\u094b \u0917\u092f\u093e \u0914\u0930 \u0909\u0938\u0928\u0947 \u0907\u0938\u094d\u0930\u093e\u090f\u0932\u093f\u092f\u094b\u0902 \u0915\u094b \u091c\u093e\u0928\u0947 \u0928 \u0926\u093f\u092f\u093e |\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-07.jpg)\n\n\u0924\u092c \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u092e\u0942\u0938\u093e \u0938\u0947 \u0915\u0939\u093e \u0915\u093f \u092e\u0941\u091f\u094d\u0920\u0940 \u092e\u0947\u0902 \u0930\u093e\u0916 \u092d\u0930 \u0932\u0947 \u0914\u0930 \u0909\u0938\u0947 \u095e\u093f\u0930\u094c\u0928 \u0915\u0947 \u0938\u093e\u092e\u0928\u0947 \u0906\u0915\u093e\u0936 \u092e\u0947\u0902 \u0909\u095c\u093e \u0926\u0947 | \u0924\u092c \u0935\u0939 \u0927\u0942\u0932 \u0939\u094b\u0915\u0930 \u0938\u093e\u0930\u0947 \u092e\u093f\u0938\u094d\u0930 \u0926\u0947\u0936 \u092e\u0947\u0902 \u092e\u0928\u0941\u0937\u094d\u092f\u094b\u0902 \u0914\u0930 \u092a\u0936\u0941\u0913 \u0926\u094b\u0928\u094b\u0902 \u092a\u0930 \u092b\u092b\u094b\u0932\u0947 \u0914\u0930 \u092b\u094b\u095c\u0947 \u092c\u0928 \u091c\u093e\u090f\u0917\u0940 \u092a\u0930\u0928\u094d\u0924\u0941 \u0907\u0938\u094d\u0930\u093e\u0932\u093f\u092f\u094b \u092a\u0930 \u0928\u0939\u0940\u0902 | \u0924\u092c \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u095e\u093f\u0930\u094c\u0928 \u0915\u0947 \u092e\u0928 \u0915\u094b \u0915\u0920\u094b\u0930 \u0915\u0930 \u0926\u093f\u092f\u093e, \u0914\u0930 \u095e\u093f\u0930\u094c\u0928 \u0928\u0947 \u0907\u0938\u094d\u0930\u093e\u090f\u0932\u093f\u092f\u094b\u0902 \u0915\u094b \u0928 \u091c\u093e\u0928\u0947 \u0926\u093f\u092f\u093e |\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-08.jpg)\n\n\u0907\u0938\u0915\u0947 \u092c\u093e\u0926, \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u092e\u093f\u0938\u094d\u0930 \u0926\u0947\u0936 \u092a\u0930 \u0913\u0932\u0947 \u092c\u0930\u0938\u093e\u090f, \u0914\u0930 \u0913\u0932\u094b\u0902 \u0938\u0947 \u0916\u0947\u0924 \u0915\u0940 \u0938\u093e\u0930\u0940 \u0909\u092a\u091c \u0928\u0937\u094d\u091f \u0939\u094b \u0917\u092f\u0940, \u0914\u0930 \u092e\u0948\u0926\u093e\u0928 \u092e\u0947\u0902 \u091c\u094b \u092d\u0940 \u0925\u0947 \u0938\u092c \u092e\u093e\u0930\u0947 \u0917\u092f\u0947 | \u095e\u093f\u0930\u094c\u0928 \u0928\u0947 \u092e\u0942\u0938\u093e \u0914\u0930 \u0939\u093e\u0930\u0942\u0928 \u0915\u094b \u092c\u0941\u0932\u0935\u093e \u092d\u0947\u091c\u093e \u0914\u0930 \u0909\u0928\u0938\u0947 \u0915\u0939\u093e, \u201c\u092e\u0948\u0902\u0928\u0947 \u092a\u093e\u092a \u0915\u093f\u092f\u093e \u0939\u0948 \u0924\u0941\u092e \u091c\u093e \u0938\u0915\u0924\u0947 \u0939\u094b\u0964\u201d \u092e\u0942\u0938\u093e \u0928\u0947 \u092a\u094d\u0930\u093e\u0930\u094d\u0925\u0928\u093e \u0915\u0940 \u0914\u0930 \u0906\u0915\u093e\u0936 \u0938\u0947 \u0913\u0932\u094b\u0902 \u0915\u093e \u092c\u0930\u0938\u0928\u093e \u092c\u0928\u094d\u0926 \u0939\u0941\u0906 |\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-09.jpg)\n\n\u0932\u0947\u0915\u093f\u0928 \u095e\u093f\u0930\u094c\u0928 \u0928\u0947 \u092b\u093f\u0930 \u0905\u092a\u0928\u0947 \u092e\u0928 \u0915\u094b \u0915\u0920\u094b\u0930 \u0915\u0930\u0915\u0947 \u092a\u093e\u092a \u0915\u093f\u092f\u093e \u0914\u0930 \u0909\u0938\u0928\u0947 \u0907\u0938\u094d\u0930\u093e\u090f\u0932\u093f\u092f\u094b\u0902 \u0915\u094b \u091c\u093e\u0928\u0947 \u0928 \u0926\u093f\u092f\u093e |\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-10.jpg)\n\n\u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u092e\u093f\u0938\u094d\u0930 \u0915\u094b \u091f\u093f\u0921\u094d\u0921\u093f\u092f\u094b\u0902 \u0938\u0947 \u092d\u0930 \u0926\u093f\u092f\u093e | \u092f\u0939 \u091f\u093f\u0921\u094d\u0921\u093f\u092f\u093e\u0901 \u0924\u0941\u092e\u094d\u0939\u093e\u0930\u0947\u0902 \u0916\u0947\u0924 \u0915\u0940 \u0938\u093e\u0930\u0940 \u0909\u092a\u091c \u0915\u094b \u0916\u093e \u091c\u093e\u090f\u0901\u0917\u0940 |\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-11.jpg)\n\n\u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u0924\u0940\u0928 \u0926\u093f\u0928 \u0915\u0947 \u0932\u093f\u092f\u0947 \u092e\u093f\u0938\u094d\u0930 \u092e\u0947\u0902 \u0905\u0902\u0927\u0915\u093e\u0930 \u0915\u0930 \u0926\u093f\u092f\u093e | \u092e\u093f\u0938\u094d\u0930 \u092e\u0947\u0902 \u0907\u0924\u0928\u093e \u0905\u0902\u0927\u0915\u093e\u0930 \u0915\u0930 \u0926\u093f\u092f\u093e \u0915\u093f \u092e\u093f\u0938\u094d\u0930\u0940 \u0905\u092a\u0928\u0947 \u0918\u0930\u094b\u0902 \u0938\u0947 \u092c\u093e\u0939\u0930 \u0928\u093f\u0915\u0932 \u0928 \u0938\u0915\u0947\u0902 | \u092a\u0930\u0928\u094d\u0924\u0941 \u0938\u093e\u0930\u0947 \u0907\u0938\u094d\u0930\u093e\u090f\u0932\u093f\u092f\u094b\u0902 \u0915\u0947 \u0918\u0930\u094b\u0902 \u092e\u0947\u0902 \u0909\u091c\u093f\u092f\u093e\u0932\u093e \u0930\u0939\u093e |\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-12.jpg)\n\n\u0907\u0928 \u0928\u094c \u092e\u0939\u093e\u092e\u093e\u0930\u093f\u092f\u094b\u0902 \u0915\u0947 \u092c\u093e\u0935\u091c\u0942\u0926, \u095e\u093f\u0930\u094c\u0928 \u0928\u0947 \u0907\u0938\u094d\u0930\u093e\u090f\u0932\u093f\u092f\u094b\u0902 \u0915\u094b \u0928\u0939\u0940\u0902 \u091c\u093e\u0928\u0947 \u0926\u093f\u092f\u093e | \u095e\u093f\u0930\u094c\u0928 \u0928\u0947 \u091c\u092c \u0928 \u0938\u0941\u0928\u093e, \u0924\u092c \u092a\u0930\u092e\u0947\u0936\u094d\u0935\u0930 \u0928\u0947 \u0906\u0916\u093f\u0930\u0940 \u092e\u0939\u093e\u092e\u093e\u0930\u0940 \u092d\u0947\u091c\u0928\u0947 \u0915\u0940 \u092f\u094b\u091c\u0928\u093e \u092c\u0928\u093e\u0908 | \u0907\u0938\u0938\u0947 \u095e\u093f\u0930\u094c\u0928 \u0915\u093e \u092e\u0928 \u092c\u0926\u0932 \u0917\u092f\u093e |\n\n_\u092c\u093e\u0907\u092c\u093f\u0932 \u0915\u0940 \u0915\u0939\u093e\u0928\u0940 \u092e\u0947\u0902 : \u0928\u093f\u0930\u094d\u0917\u092e\u0928 5-10_\n",C="\n# 10. The Ten Plagues\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-01.jpg)\n\nGod warned Moses and Aaron that Pharaoh would be stubborn. When they went to Pharaoh, they said, \"This is what the God of Israel says, 'Let my people go!'\" But Pharaoh did not listen to them. Instead of letting the Israelites go free, he forced them to work even harder!\n\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-02.jpg)\n\nPharaoh kept refusing to let the people go, so God sent ten terrible plagues on Egypt. Through these plagues, God showed Pharaoh that he is more powerful than Pharaoh and all of Egypt's gods.\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-03.jpg)\n\nGod turned the Nile River into blood, but Pharaoh still would not let the Israelites go.\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-04.jpg)\n\nGod sent frogs all over Egypt. Pharaoh begged Moses to take away the frogs. But after all the frogs died, Pharaoh hardened his heart and would not let the Israelites leave Egypt.\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-05.jpg)\n\nSo God sent a plague of gnats. Then he sent a plague of flies. Pharaoh called Moses and Aaron and told them that if they stopped the plague, the Israelites could leave Egypt. When Moses prayed, God removed all the flies from Egypt. But Pharaoh hardened his heart and would not let the people go free.\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-06.jpg)\n\nNext, God caused all the farm animals that belonged to the Egyptians to get sick and die. But Pharaoh's heart was hardened, and he would not let the Israelites go.\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-07.jpg)\n\nThen God told Moses to throw ashes into the air in front of Pharaoh. When he did, painful skin sores appeared on the Egyptians, but not on the Israelites. God hardened Pharaoh's heart, and Pharaoh would not let the Israelites go free.\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-08.jpg)\n\nAfter that, God sent hail that destroyed most of the crops in Egypt and killed anybody who went outside. Pharaoh called Moses and Aaron and told them, \"I have sinned. You may go.\" So Moses prayed, and the hail stopped falling from the sky.\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-09.jpg)\n\nBut Pharaoh sinned again and hardened his heart. He would not let the Israelites go free.\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-10.jpg)\n\nSo God caused swarms of locusts to come over Egypt. These locusts ate all the crops that the hail had not destroyed.\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-11.jpg)\n\nThen God sent darkness that lasted for three days. It was so dark that the Egyptians could not leave their houses. But there was light where the Israelites lived.\n\n![OBS Image](https://cdn.door43.org/obs/jpg/360px/obs-en-10-12.jpg)\n\nEven after these nine plagues, Pharaoh still refused to let the Israelites go free. Since Pharaoh would not listen, God planned to send one last plague. This would change Pharaoh's mind.\n\n_A Bible story from: Exodus 5-10_\n".split(/\n/).filter(function(e){return""!==e}),L=T.split(/\n/).filter(function(e){return""!==e}),A=function(e){return o.a.createElement(G,Object.assign({},e,{sources:[C],target:L}))},M=Object(l.withStyles)(function(e){return{root:{flexGrow:1},appFrame:{zIndex:1,overflow:"hidden",position:"relative",display:"flex",width:"100%"},main:{padding:"5em 1em 1em 1em"}}})(function(e){var t=e.classes;return o.a.createElement("div",{className:t.root},o.a.createElement("div",{className:t.appFrame},o.a.createElement(S,null),o.a.createElement("main",{className:t.main},o.a.createElement(A,null))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5449,2,1]]]);
//# sourceMappingURL=main.758d7e97.chunk.js.map