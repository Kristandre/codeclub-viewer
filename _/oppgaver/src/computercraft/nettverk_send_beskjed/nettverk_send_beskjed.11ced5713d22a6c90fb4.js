webpackJsonp([49,236],{

/***/ 503:
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/computercraft/nettverk_send_beskjed/nettverk_send_beskjed.md ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/computercraft/nettverk_send_beskjed/nettverk_send_beskjed.md */ 504),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/computercraft/nettverk_send_beskjed/nettverk_send_beskjed.md */ 505)}

/***/ },

/***/ 505:
/*!************************************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/computercraft/nettverk_send_beskjed/nettverk_send_beskjed.md ***!
  \************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>Vi har tidligere kjørt kode på én og én datamaskin i ComputerCraft. Nå skal vi få flere datamaskiner til å snakke sammen.</p>\n</section>\n<section class=\"activity\" id=\"steg-1-maskinvaren-vi-trenger\">\n<h1 class=\"activity\" id=\"steg-1-maskinvaren-vi-trenger\">Steg 1: Maskinvaren vi trenger!</h1>\n<p>Et modem var det vi i gamle dager brukte for å koble oss til internett. I ComputerCraft bruker vi modem for å koble oss til <em>Rednet</em> -- Internett for datamaskiner i Minecraft.</p>\n<p>Siden trådløse datamaskiner er dyre, er det kjekt å bruke en <em>Creative-verden</em>.</p>\n<ul>\n<li>\n<p>Vi bygger en <strong>Advanced Wireless Pocket Computer</strong> og en <strong>Advanced Ender Turtle</strong></p>\n<figure><img src=\"" + __webpack_require__(/*! ./build_advanced_wireless_pocket_computer.png */ 506) + "\" alt=\"\" /></figure>\n<figure><img src=\"" + __webpack_require__(/*! ./build_advanced_ender_turtle.png */ 507) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Vi kaller tableten for <em>Sendulf</em> med <code>label set Sendulf</code> og roboten for <em>MaxMottak</em> med <code>label set MaxMottak</code>.</p>\n</li>\n</ul>\n<section class=\"tip\" id=\"server-og-klient\">\n<h3 class=\"tip\" id=\"server-og-klient\">Server og klient</h3>\n<figure>Vi trenger ofte å sende beskjeder fra en datamaskin til en annen. Vi pleier å\ngi datamaskinene to roller: server og klient.</figure>\n<ul>\n<li><strong>Serveren</strong> venter pent på å få beskjed</li>\n<li><strong>Klienten</strong> sender meldinger til serveren når den ønsker</li>\n</ul>\n<p>Vet du om noen eksempler på servere og klienter?</p>\n</section>\n<section class=\"tip\" id=\"rednet\">\n<h3 class=\"tip\" id=\"rednet\">Rednet</h3>\n<p>Vi skal bruke <code>rednet</code> til å la datamaskinene snakke sammen. For en kjapp oversikt over hva <code>rednet</code> kan gjøre, bruk kommandoen <code>help rednet</code>.</p>\n<p>For mer detaljert informasjon, se på wikien til <a href=\"http://computercraft.info/wiki/Rednet_%28API%29\">ComputerCraft</a>.</p>\n</section>\n<section class=\"check\" id=\"steg-2-klar-til-a-motta-beskjed\">\n<h2 class=\"check\" id=\"steg-2-klar-til-a-motta-beskjed\">Steg 2: Klar til å motta beskjed</h2>\n<p>Nå skal vi bruke <em>Sendulf</em> og <em>MaxMottak</em> til å sende beskjeder. Siden kontrolleren aktivt skal sende beskjeder, blir <em>Sendulf</em> klienten vår, mens <em>MaxMottak</em> er serveren.</p>\n<ul>\n<li>\n<p>Sjekk id på <em>MaxMottak</em>. Min <em>MaxMottak</em> svarte følgende:</p>\n<pre><code>&gt; <span class=\"hljs-property\">id</span>\nThis <span class=\"hljs-keyword\">is</span> computer <span class=\"hljs-comment\">#5</span>\nThis computer <span class=\"hljs-keyword\">is</span> labelled <span class=\"hljs-string\">\"MaxMottak\"</span>\n</code></pre>\n</li>\n<li>\n<p>Sjekk plassering av modem på <em>MaxMottak</em>. Min svarte:</p>\n<pre><code>&gt; peripherals\nleft <span class=\"hljs-list\">(<span class=\"hljs-keyword\">modem</span>)</span>\n</code></pre>\n</li>\n<li>\n<p>Start lua-tolkeren:</p>\n<pre><code>&gt; <span class=\"hljs-keyword\">lua</span>\nInteractive Lua prompt.\n<span class=\"hljs-built_in\">call</span> <span class=\"hljs-keyword\">exit</span>() <span class=\"hljs-keyword\">to</span> <span class=\"hljs-keyword\">exit</span>.\n<span class=\"hljs-keyword\">lua</span>&gt;\n</code></pre>\n</li>\n<li>\n<figure>Koble til <code>rednet</code> og vent på beskjed. Husker du hvor modemet var plassert?</figure>\n<pre><code class=\"language-lua\">lua&gt; rednet.open(<span class=\"hljs-string\">\"left\"</span>)\nlua&gt; rednet.receive(<span class=\"hljs-number\">100</span>)\n</code></pre>\n</li>\n</ul>\n<section class=\"challenge\" id=\"nott\">\n<h3 class=\"challenge\" id=\"nott\">Nøtt</h3>\n<figure>Hva er tallet som går inn i <code>receive</code>-funksjonen? Hva skjer når du putter inn 1? 5? 10?</figure>\n</section>\n</section>\n<section id=\"steg-3-send-beskjed\">\n<h2 id=\"steg-3-send-beskjed\">Steg 3: Send beskjed</h2>\n<ul>\n<li>\n<p>Sjekk hvor modemet var plassert på <em>Sendulf</em></p>\n</li>\n<li>\n<p>Start lua-tolkeren på <em>Sendulf</em>. Hvor var modemet? Må du kalle <code>rednet.open(&quot;left&quot;)</code>, <code>rednet.open(&quot;right&quot;)</code> eller <code>rednet.open(&quot;back&quot;)</code>?</p>\n</li>\n<li>\n<p>Hva var id-en til din <em>MaxMottak</em>? Denne trenger vi når vi skal sende informasjon. Min var 5. Jeg bruker derfor 5 når jeg sender beskjeden min:</p>\n<pre><code class=\"language-lua\">rednet.send(<span class=\"hljs-number\">5</span>, <span class=\"hljs-string\">\"Hello, MaxMottak! Dette er Sendulf! Kan du høre meg?\"</span>)\n</code></pre>\n<figure><img src=\"" + __webpack_require__(/*! ./melding_sendulf.png */ 508) + "\" alt=\"\" /></figure>\n<figure><img src=\"" + __webpack_require__(/*! ./melding_maxmottak.png */ 509) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-selv\">\n<h2 class=\"flag\" id=\"test-selv\">Test selv!</h2>\n<ul>\n<li>Ser du beskjeden du har sendt på <em>MaxMottak</em>?</li>\n<li>Hva må du gjøre for å sende flere beskjeder etter hverandre?</li>\n<li>Worker viser et tall i tillegg til beskjeden du sendte. Hva er tallet?</li>\n</ul>\n</section>\n</section>\n";

/***/ },

/***/ 506:
/*!*******************************************************************************************************!*\
  !*** ../oppgaver/src/computercraft/nettverk_send_beskjed/build_advanced_wireless_pocket_computer.png ***!
  \*******************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/nettverk_send_beskjed/build_advanced_wireless_pocket_computer.31386d.png";

/***/ },

/***/ 507:
/*!*******************************************************************************************!*\
  !*** ../oppgaver/src/computercraft/nettverk_send_beskjed/build_advanced_ender_turtle.png ***!
  \*******************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/nettverk_send_beskjed/build_advanced_ender_turtle.2a62f0.png";

/***/ },

/***/ 508:
/*!*******************************************************************************!*\
  !*** ../oppgaver/src/computercraft/nettverk_send_beskjed/melding_sendulf.png ***!
  \*******************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/nettverk_send_beskjed/melding_sendulf.888920.png";

/***/ },

/***/ 509:
/*!*********************************************************************************!*\
  !*** ../oppgaver/src/computercraft/nettverk_send_beskjed/melding_maxmottak.png ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/nettverk_send_beskjed/melding_maxmottak.56efe6.png";

/***/ }

});
//# sourceMappingURL=nettverk_send_beskjed.11ced5713d22a6c90fb4.js.map