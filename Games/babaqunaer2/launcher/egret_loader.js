//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
function setStageSize() {

    if (/iphone/i.test(navigator.userAgent)) {
        window["client"] = "iphone";
    } else {
        window["client"] = "android";
    }
    /*全屏适配*/
    var winHeight;
    var winWidth;
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    } else {
        winHeight = window.innerHeight;
        winWidth = window.innerWidth;
    }
    var GameWin = {w:640,h:960};
    var Gper = GameWin.h / GameWin.w;
    var per = winHeight / winWidth;

    if (per < Gper) {
        window["stage_width"] = GameWin.h / per;
        window["stage_height"] = GameWin.h;
    } else if (per >= Gper) {
        window["stage_width"] = GameWin.w;
        window["stage_height"] = GameWin.w * per;
    }
   /* egret.StageDelegate.getInstance().setDesignSize(window["stage_width"], window["stage_height"]);*/
    if (navigator.userAgent.match(/ipad|iphone|mac/i) != null) {
      //  egret.StageDelegate.getInstance().setDesignSize(GameWin.h/per*2, GameWin.h*2);
        egret.StageDelegate.getInstance().setDesignSize(window["stage_width"], window["stage_height"])
        document.getElementById("gameDiv").style = "width:" +window["stage_width"] + "px;height:" +window["stage_height"] + "px";
    }
    else
       /* egret.StageDelegate.getInstance().setDesignSize(GameWin.h/per, GameWin.h);*/
        egret.StageDelegate.getInstance().setDesignSize(window["stage_width"], window["stage_height"])
   /* if (window["client"] == "android") {
        window["stage_width"] *= 2;
        window["stage_height"] *= 2;
    }
*/
}

egret_h5.startGame = function () {
    var context = egret.MainContext.instance;
    context.touchContext = new egret.HTML5TouchContext();
    context.deviceContext = new egret.HTML5DeviceContext();
    context.netContext = new egret.HTML5NetContext();

    setStageSize();
  //  egret.StageDelegate.getInstance().setDesignSize(480, 800);
    context.stage = new egret.Stage();
    var scaleMode = egret.MainContext.deviceType == egret.MainContext.DEVICE_MOBILE ? egret.StageScaleMode.SHOW_ALL : egret.StageScaleMode.NO_SCALE;
    context.stage.scaleMode = scaleMode;

    //WebGL is a Egret's beta property. It's off by default.
    //WebGL是egret的Beta特性，默认关闭
    var rendererType = 0;
    if (rendererType == 1) {// egret.WebGLUtils.checkCanUseWebGL()) {
        console.log("Use WebGL mode");
        context.rendererContext = new egret.WebGLRenderer();
    }
    else {
        context.rendererContext = new egret.HTML5CanvasRenderer();
    }

    egret.MainContext.instance.rendererContext.texture_scale_factor = 1;
    context.run();

    var rootClass;
    if (document_class) {
        rootClass = egret.getDefinitionByName(document_class);
    }
    if (rootClass) {
        var rootContainer = new rootClass();
        if (rootContainer instanceof egret.DisplayObjectContainer) {
            context.stage.addChild(rootContainer);
        }
        else {
            throw new Error("Document Class must be the subclass to egret.DisplayObjectContainer!");
        }
    }
    else {
        throw new Error("Document Class is not found！");
    }

    //处理屏幕大小改变
    //implement for screen size change
    var resizeTimer = null;
    var doResize = function () {
        context.stage.changeSize();
        resizeTimer = null;
    };
    window.onresize = function () {
        if (resizeTimer == null) {
            resizeTimer = setTimeout(doResize, 300);
        }
    };
};