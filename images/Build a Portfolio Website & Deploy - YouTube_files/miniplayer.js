(function(g){var window=this;'use strict';var B6=function(a){g.W.call(this,{G:"div",L:"ytp-miniplayer-ui"});this.pe=!1;this.player=a;this.T(a,"minimized",this.wg);this.T(a,"onStateChange",this.xG)},C6=function(a){g.PM.call(this,a);
this.i=new B6(this.player);this.i.hide();g.CM(this.player,this.i.element,4);a.Ke()&&(this.load(),g.M(a.getRootNode(),"ytp-player-minimized",!0))};
g.v(B6,g.W);g.k=B6.prototype;
g.k.wE=function(){this.tooltip=new g.pQ(this.player,this);g.H(this,this.tooltip);g.CM(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.uc=new g.IN(this.player);g.H(this,this.uc);this.Bg=new g.W({G:"div",L:"ytp-miniplayer-scrim"});g.H(this,this.Bg);this.Bg.Ea(this.element);this.T(this.Bg.element,"click",this.oA);var a=new g.W({G:"button",Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.JK()]});g.H(this,a);a.Ea(this.Bg.element);this.T(a.element,"click",this.Gi);
a=new g.V1(this.player,this);g.H(this,a);a.Ea(this.Bg.element);this.wp=new g.W({G:"div",L:"ytp-miniplayer-controls"});g.H(this,this.wp);this.wp.Ea(this.Bg.element);this.T(this.wp.element,"click",this.oA);var b=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,b);b.Ea(this.wp.element);a=new g.W({G:"div",L:"ytp-miniplayer-play-button-container"});g.H(this,a);a.Ea(this.wp.element);var c=new g.W({G:"div",L:"ytp-miniplayer-button-container"});g.H(this,c);c.Ea(this.wp.element);this.dN=new g.gP(this.player,
this,!1);g.H(this,this.dN);this.dN.Ea(b.element);b=new g.eP(this.player,this);g.H(this,b);b.Ea(a.element);this.nextButton=new g.gP(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.Ea(c.element);this.Eg=new g.aQ(this.player,this);g.H(this,this.Eg);this.Eg.Ea(this.Bg.element);this.Fc=new g.nP(this.player,this);g.H(this,this.Fc);g.CM(this.player,this.Fc.element,4);this.cA=new g.W({G:"div",L:"ytp-miniplayer-buttons"});g.H(this,this.cA);g.CM(this.player,this.cA.element,4);a=new g.W({G:"button",
Ga:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},U:[g.JK()]});g.H(this,a);a.Ea(this.cA.element);this.T(a.element,"click",this.Gi);a=new g.W({G:"button",Ga:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},U:[g.OK()]});g.H(this,a);a.Ea(this.cA.element);this.T(a.element,"click",this.mV);this.T(this.player,"presentingplayerstatechange",this.Mc);this.T(this.player,"appresize",this.xb);this.T(this.player,"fullscreentoggled",this.xb);this.xb()};
g.k.show=function(){this.Ld=new g.br(this.lq,null,this);this.Ld.start();this.pe||(this.wE(),this.pe=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Fc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Ld&&(this.Ld.dispose(),this.Ld=void 0);g.W.prototype.hide.call(this);this.player.Ke()||(this.pe&&this.Fc.hide(),this.player.loadModule("annotations_module"))};
g.k.va=function(){this.Ld&&(this.Ld.dispose(),this.Ld=void 0);g.W.prototype.va.call(this)};
g.k.Gi=function(){this.player.stopVideo();this.player.Ma("onCloseMiniplayer")};
g.k.mV=function(){this.player.playVideo()};
g.k.oA=function(a){if(a.target===this.Bg.element||a.target===this.wp.element)this.player.V().N("kevlar_miniplayer_play_pause_on_scrim")?g.MJ(this.player.zb())?this.player.pauseVideo():this.player.playVideo():this.player.Ma("onExpandMiniplayer")};
g.k.wg=function(){g.M(this.player.getRootNode(),"ytp-player-minimized",this.player.Ke())};
g.k.pd=function(){this.Fc.Xb();this.Eg.Xb()};
g.k.lq=function(){this.pd();this.Ld&&this.Ld.start()};
g.k.Mc=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.xb=function(){g.AP(this.Fc,0,this.player.eb().getPlayerSize().width,!1);g.oP(this.Fc)};
g.k.xG=function(a){this.player.Ke()&&(0===a?this.hide():this.show())};
g.k.fc=function(){return this.tooltip};
g.k.Se=function(){return!1};
g.k.uf=function(){return!1};
g.k.Ai=function(){return!1};
g.k.bB=function(){};
g.k.fn=function(){};
g.k.ds=function(){};
g.k.En=function(){return null};
g.k.qj=function(){return new g.fm(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.uq=function(a,b,c,d,e){var f=0,h=d=0,l=g.ym(a);if(b){c=g.mr(b,"ytp-prev-button")||g.mr(b,"ytp-next-button");var m=g.mr(b,"ytp-play-button"),n=g.mr(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.wm(b,this.element),h=b.x,f=b.y-12):n&&(h=g.mr(b,"ytp-miniplayer-button-top-left"),f=g.wm(b,this.element),b=g.ym(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.eb().getPlayerSize().width;e=f+(e||0);l=g.eg(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Zk=function(){};
g.k.Bk=function(){return!1};g.v(C6,g.PM);C6.prototype.create=function(){};
C6.prototype.Qi=function(){return!1};
C6.prototype.load=function(){this.player.hideControls();this.i.show()};
C6.prototype.unload=function(){this.player.showControls();this.i.hide()};g.OM("miniplayer",C6);})(_yt_player);
