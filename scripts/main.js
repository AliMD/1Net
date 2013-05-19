/*jshint strict:true, es5:true, forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, nonew:true, browser:true, devel:true, indent:2, boss:true, curly:false, immed:false, latedef:true, newcap:true, plusplus:false, trailing:true, maxerr:100, debug:false, asi:false, evil:false, expr:true, eqnull:false, esnext:false, funcscope:false, globalstrict:false, loopfunc:false */
(function($,undefined){
  "use strict";
  console.group("%c1Net %o","color:darkmagenta; padding-left:15px","http://ali.md/1net");
  console.group('main.js');

  var
    initTime = Date.now(),

    log = function (msg) {
      console.log(arguments.length>1?arguments:msg);
    },

    init = function () {
      log("Initialize @ "+initTime);
    };

  init();

  console.groupEnd();
  console.groupEnd();
})(window.jQuery);