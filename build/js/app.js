!function n(e,t,o){function i(a,u){if(!t[a]){if(!e[a]){var p="function"==typeof require&&require;if(!u&&p)return p(a,!0);if(r)return r(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var c=t[a]={exports:{}};e[a][0].call(c.exports,function(n){var t=e[a][1][n];return i(t||n)},c,c.exports,n,e,t,o)}return t[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(n,e,t){t.apiKey="3cd9353e5a1fe51e7565fa314b08c5d6"},{}],2:[function(n,e,t){function o(n){this.skin=n}o.prototype.pingPong=function(n){for(var e=[],t=1;t<=n;t++)t%15==0?e.push("ping-pong"):t%3==0?e.push("ping"):t%5==0?e.push("pong"):e.push(t);return e},t.calculatorModule=o},{}],3:[function(n,e,t){var o=function(){var n=moment().format("HH:mm:ss");$("#time").text(n),setInterval(o,1e3)};t.displayTimeModule=o},{}],4:[function(n,e,t){function o(){}var i=n("./../.env").apiKey;o.prototype.getWeather=function(n,e){$.get("http://api.openweathermap.org/data/2.5/weather?q="+n+"&appid="+i).then(function(t){e(n,t.main.humidity)}).fail(function(n){$(".showWeather").text(n.responseJSON.message)})},t.weatherModule=o},{"./../.env":1}],5:[function(n,e,t){var o=n("./../js/pingpong.js").calculatorModule;$(document).ready(function(){$("#ping-pong-form").submit(function(n){n.preventDefault();var e=$("#goal").val();new o("hot pink").pingPong(e).forEach(function(n){$("#solution").append("<li>"+n+"</li>")})})}),$(document).ready(function(){$("form#signup").submit(function(n){n.preventDefault();var e=$("input#email").val();$("form#signup").hide(),$("#solution").prepend("<p>Thank you "+e+" has been added to our list!</p>")})});var i=n("./../js/time.js").displayTimeModule;$(document).ready(function(){i()});var r=n("./../js/weather.js").weatherModule,a=function(n,e){$(".showWeather").text("The humidity in "+n+" is "+e+"%")};$(document).ready(function(){var n=new r;$("#weatherLocation").click(function(){var e=$("#location").val();$("#location").val(""),n.getWeather(e,a)})})},{"./../js/pingpong.js":2,"./../js/time.js":3,"./../js/weather.js":4}]},{},[5]);