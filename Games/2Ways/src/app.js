var Z2e1={'Z50':0,'t2':function(b,a){return b==a;},'m2':function(b,a,c){return b-a-c;},'O50':null,'V50':2,'M50':false,'T50':"lockPause",'z2':function(b,a){return b<a;},'C2':function(b,a){return b<a;},'q2':function(b,a){return b<a;},'O2':function(b,a){return b<a;},'N1':function(b,a){return b-a;},'Q1':function(b,a){return b/a;},'L2':function(b,a){return b==a;},'G50':0.5,'R2':function(b,a){return b==a;},'I50':1.5,'J50':0.2,'f2':function(b,a){return b/a;},'I2':function(b,a){return b==a;},'i2':function(b,a,c){return b-a-c;},'c2':function(b,a){return b/a;},'w2':function(b,a){return b<a;},'U2':function(b,a){return b==a;},'X50':1,'T1':function(b,a,c){return b-a-c;},'F2':function(b,a){return b<a;},'K1':function(b,a){return b/a;},'X1':function(b,a,c){return b-a-c;},'H1':function(b,a){return b/a;},'S50':true};var GameLayer=cc.Layer.extend({sprite:Z2e1.O50,ctor:function(){var b="lets_try_again",a="resume_level",c="pause_game",d="start_level",e="game_over_reach_end",f=((6.30E1,129)>(10.81E2,0x86)?42.1E1:57.40E1>=(0x60,116.)?(66.,640):(5.89E2,114)),h="blue",l=((63,52.)>25.?(0x90,182):(1.166E3,9.94E2)),j=((94.30E1,4.04E2)<=(22.90E1,79)?(0x0,180):20.<(85.4E1,96.5E1)?(14.94E2,60):(0x63,95.)>0x72?(127,180):(46.30E1,0xA0)),g=(1.32E3<=(0xE7,0x200)?'G':(0x136,9.)<(20.,11)?(9.09E2,75):(0x1BB,8.15E2)<(95.,126.)?0x174:(0x1D6,79)),m="yellow",u=((0x12D,142.)>=0xA4?(0x212,15):(117.,0xDA)<=(9.450E2,1.41E3)?(77.,8):(5.41E2,67));this._super();this.scheduleUpdate();var q=cc.winSize,o=new cc.Sprite.create(res.back_png);o.setAnchorPoint(cc.p(Z2e1.G50,Z2e1.Z50));o.setPosition(cc.p(Z2e1.H1(q.width,2),0));this.addChild(o);var s=new cc.Sprite.create(res.back_png);s.setAnchorPoint(cc.p(Z2e1.G50,Z2e1.Z50));s.setPosition(cc.p(Z2e1.K1(q.width,2),Z2e1.N1(q.height,1)));this.addChild(s);this.backs=[o,s];var t=Z2e1.Q1(q.width,u);this.active=Z2e1.M50;this.score=Z2e1.Z50;this.levelLeft=new Level(m,g+j,g+l);this.addChild(this.levelLeft);this.levelRight=new Level(h,Z2e1.T1(f,g,l),Z2e1.X1(f,g,j));this.addChild(this.levelRight);this.leftCar=new Car(Z2e1.c2(q.height,5),"yellow",75+60,75+182,1);this.addChild(this.leftCar);this.rightCar=new Car(Z2e1.f2(q.height,5),"blue",Z2e1.i2(640,75,182),Z2e1.m2(640,75,60),2);this.addChild(this.rightCar);cc.eventManager.addListener(cc.EventListener.create({event:cc.EventListener.TOUCH_ONE_BY_ONE,swallowTouches:Z2e1.S50,onTouchBegan:this.onTouchBegan}),this);cc.eventManager.addListener(cc.EventListener.create({event:cc.EventListener.CUSTOM,eventName:e,callback:this.gameOverEvent}),this);cc.eventManager.addListener(cc.EventListener.create({event:cc.EventListener.CUSTOM,eventName:d,callback:this.startGame}),this);cc.eventManager.addListener(cc.EventListener.create({event:cc.EventListener.CUSTOM,eventName:c,callback:this.pauseGame}),this);cc.eventManager.addListener(cc.EventListener.create({event:cc.EventListener.CUSTOM,eventName:a,callback:this.resumeGame}),this);cc.eventManager.addListener(cc.EventListener.create({event:cc.EventListener.CUSTOM,eventName:b,callback:this.resetGame}),this);this.debug=Z2e1.M50;if(this.debug){this.debugNode=new cc.DrawNode();this.addChild(this.debugNode);}return Z2e1.S50;},startGame:function(a){var c=function(b){d.active=b;};SG_Hooks.start();var d=a.getCurrentTarget();c(Z2e1.S50);d.levelLeft.scheduleOnce(d.levelLeft.start,Z2e1.I50);d.levelRight.scheduleOnce(d.levelRight.start,Z2e1.I50);sndEngine.play();},resetGame:function(a){var c=function(b){e.score=b;},d=function(b){e.active=b;};SG_Hooks.start();sndEngine.play();var e=a.getCurrentTarget();d(Z2e1.S50);c(Z2e1.Z50);e.updateScore();e.levelLeft.reset();e.levelRight.reset();e.levelLeft.scheduleOnce(e.levelLeft.start,Z2e1.I50);e.levelRight.scheduleOnce(e.levelRight.start,Z2e1.I50);e.leftCar.reset();e.rightCar.reset();},pauseGame:function(a){var c=function(b){f.levelLeft.active=b;},d=function(b){f.levelRight.active=b;},e=function(b){f.active=b;},f=a.getCurrentTarget();e(Z2e1.M50);c(Z2e1.M50);d(Z2e1.M50);f.leftCar.pause();f.rightCar.pause();f.levelLeft.pause();f.levelRight.pause();},resumeGame:function(a){var c=function(b){f.active=b;},d=function(b){f.levelLeft.active=b;},e=function(b){f.levelRight.active=b;},f=a.getCurrentTarget();c(Z2e1.S50);d(Z2e1.S50);e(Z2e1.S50);f.leftCar.resume();f.rightCar.resume();f.levelLeft.resume();f.levelRight.resume();},onTouchBegan:function(b,a){var c=a.getCurrentTarget();if(!c.active)return Z2e1.S50;if(Z2e1.q2(b.getLocationX(),cc.winSize.width/Z2e1.V50)){c.leftCar.turn();}else{c.rightCar.turn();}return Z2e1.S50;},gameOverEvent:function(a){var c=function(b){f.active=b;},d=function(b){f.levelLeft.activa=b;},e=function(b){f.levelRight.activa=b;};sndEngine.stop();sndError.play();var f=a.getCurrentTarget(),h=a.getUserData(),l=new cc.EventCustom(Z2e1.T50);cc.eventManager.dispatchEvent(l);f.leftCar.stopAllActions();f.rightCar.stopAllActions();f.leftCar.sprite.stopAllActions();f.rightCar.sprite.stopAllActions();d(Z2e1.M50);e(Z2e1.M50);c(Z2e1.M50);var j=Z2e1.J50,g=cc.sequence(cc.sequence([cc.fadeOut(j),cc.fadeIn(j),cc.fadeOut(j),cc.fadeIn(j),cc.fadeOut(j),cc.fadeIn(j)]),cc.callFunc(f.gameOver,f));h.sprite.runAction(g);SG_Hooks.gameOver(Z2e1.X50,this.score);},gameOverWall:function(b){var a='left';if(!this.active)return ;sndEngine.stop();sndCrash.play();var c=new cc.EventCustom(Z2e1.T50);cc.eventManager.dispatchEvent(c);this.leftCar.stopAllActions();this.rightCar.stopAllActions();this.leftCar.sprite.stopAllActions();this.rightCar.sprite.stopAllActions();this.levelLeft.activa=Z2e1.M50;this.levelRight.activa=Z2e1.M50;this.active=Z2e1.M50;var d=Z2e1.J50,e=cc.sequence(cc.sequence([cc.fadeOut(d),cc.fadeIn(d),cc.fadeOut(d),cc.fadeIn(d),cc.fadeOut(d),cc.fadeIn(d)]),cc.callFunc(this.gameOver,this));if(Z2e1.t2(b,a))this.leftCar.sprite.runAction(e);else this.rightCar.sprite.runAction(e);},gameOver:function(){var b="game_over";SG_Hooks.gameOver(Z2e1.X50,this.score);var a=new cc.EventCustom(b);a.setUserData(this.score.toString());cc.eventManager.dispatchEvent(a);},updateScore:function(){var b="update_score",a=new cc.EventCustom(b);a.setUserData(this.score.toString());cc.eventManager.dispatchEvent(a);},update:function(a){var c="right",d=((5.88E2,0x68)<7.8E2?(84.0E1,3):0x111>=(1.6E1,3.81E2)?(0x119,75.9E1):(141.0E1,0x197)<(125.,58)?54.:(122.9E1,0x13C)),e="left",f='wall',h='coin';if(this.debug){this.debugNode.clear();var l=[this.leftCar,this.rightCar];for(var j=Z2e1.Z50;Z2e1.w2(j,this.levelLeft.obstacles.length);j++){l.push(this.levelLeft.obstacles[j]);}for(var j=Z2e1.Z50;Z2e1.z2(j,this.levelRight.obstacles.length);j++){l.push(this.levelRight.obstacles[j]);}for(var j=Z2e1.Z50;Z2e1.C2(j,l.length);j++){var g=l[j].getBoundingBoxToWorld();this.debugNode.drawRect(cc.p(g.x,g.y),cc.p(g.x+g.width,g.y+g.height));}}if(this.active){this.backs[0].y-=this.levelLeft.speed;this.backs[1].y-=this.levelLeft.speed;if(this.backs[Z2e1.Z50].y<-this.backs[Z2e1.Z50].height){this.backs[0].y=this.backs[1].y+this.backs[1].height-1;var m=this.backs[Z2e1.Z50];this.backs[Z2e1.Z50]=this.backs[Z2e1.X50];this.backs[Z2e1.X50]=m;}for(var j=Z2e1.Z50;Z2e1.F2(j,this.levelLeft.obstacles.length);j++){if(Z2e1.I2(this.levelLeft.obstacles[j].name,h)&&!this.levelLeft.obstacles[j].active)continue;var u=this.levelLeft.obstacles[j].getBoundingBoxToWorld();if(cc.rectIntersectsRect(this.leftCar.getBoundingBoxToWorld(),u)){var q=function(b){o.active=b;};if(Z2e1.L2(this.levelLeft.obstacles[j].name,f)){this.gameOverWall(e);return ;}sndPickup.play();var o=this.levelLeft.obstacles[j];this.score++;this.updateScore();o.removeFromParent();this.addChild(o);q(Z2e1.M50);o.sprite.stopAllActions();o.sprite.runAction(cc.fadeOut(Z2e1.G50));o.spriteSheet.runAction(cc.scaleTo(Z2e1.G50,d,d));}}for(var j=Z2e1.Z50;Z2e1.O2(j,this.levelRight.obstacles.length);j++){if(Z2e1.R2(this.levelRight.obstacles[j].name,h)&&!this.levelRight.obstacles[j].active)continue;var u=this.levelRight.obstacles[j].getBoundingBoxToWorld();if(cc.rectIntersectsRect(this.rightCar.getBoundingBoxToWorld(),u)){var s=function(b){o.active=b;};if(Z2e1.U2(this.levelRight.obstacles[j].name,f)){this.gameOverWall(c);return ;}sndPickup.play();var o=this.levelRight.obstacles[j];this.score++;this.updateScore();o.removeFromParent();this.addChild(o);s(Z2e1.M50);o.sprite.stopAllActions();o.sprite.runAction(cc.fadeOut(Z2e1.G50));o.spriteSheet.runAction(cc.scaleTo(Z2e1.G50,d,d));}}}}}),MainScene=cc.Scene.extend({onEnter:function(){this._super();var b=new GameLayer();var a=new UILayer();this.addChild(b);this.addChild(a);}});