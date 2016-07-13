/**
 * Created by johnk on 7/8/2016.
 * Copyright Stillbright Management LLC 2015
 * Nothing important here just trying to relearn how to write modules
 * Sites that I need to learn
 * http://www.2ality.com/2014/09/es6-modules-final.html
 * http://eloquentjavascript.net/10_modules.html
 * https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.axv6bgtmw
 * https://www.sitepoint.com/understanding-module-exports-exports-node-js/
 * https://www.sitepoint.com/understanding-module-exports-exports-node-js/
 *
 */

var test = (function () {
   var myName = 'Kovach';
   return{
      sayHello:function (name) {
         return 'Hello '+name + myName;
      }
   }
})();
console.log(test.sayHello('john'));
module.exports = test;// module;