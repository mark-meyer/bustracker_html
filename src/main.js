// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

Vue.use(vueResource)

Vue.config.productionTip = false


Vue.directive('fit', {
  inserted: function(el){
    console.log("fit called: ")
    var css = function (el, prop) {
      return window.getComputedStyle ? getComputedStyle(el).getPropertyValue(prop) : el.currentStyle[prop];
      };
    
    var addEvent = function (el, type, fn) {
      if (el.addEventListener)
        el.addEventListener(type, fn, false);
      else
        el.attachEvent('on'+type, fn);
      };
    
    var extend = function(obj,ext){
      for(var key in ext)
        if(ext.hasOwnProperty(key))
          obj[key] = ext[key];
      return obj;
    };
    
    var options = {}
    var kompressor = .5
    var settings = extend({
      'minFontSize' : -1/0,
      'maxFontSize' : 1/0
    },options);
    
    var fit = function (el) {
      var compressor = kompressor || 1;

      var resizer = function () {
        el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
      };

      // Call once to set.
      resizer();

      // Bind events
      // If you have any js library which support Events, replace this part
      // and remove addEvent function (or use original jQuery version)
      addEvent(window, 'resize', resizer);
    };

    if (el.length)
      for(var i=0; i<el.length; i++)
        fit(el[i]);
    else
      fit(el);
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/* Fit directive adapted from */
/*!	
* FitText.js 1.0 jQuery free version
*
* Copyright 2011, Dave Rupert http://daverupert.com 
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
* Modified by Slawomir Kolodziej http://slawekk.info
*
* Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
*/

