webpackJsonp([183,236],{

/***/ 1308:
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/scratch/lydmaskin/lydmaskin-opptaker.md ***!
  \******************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/scratch/lydmaskin/lydmaskin-opptaker.md */ 1309),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/scratch/lydmaskin/lydmaskin-opptaker.md */ 1310)}

/***/ },

/***/ 1310:
/*!***************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/scratch/lydmaskin/lydmaskin-opptaker.md ***!
  \***************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag to nye lister (for alle figurer). Kall en av dem\n<code class=\"blocklist\">instrument</code> og den andre <code class=\"blocklist\">timing</code>.</p>\n</li>\n<li>\n<figure>Lag en ny variabel (for alle figurer) som heter <code class=\"blockdata\">opptak</code></figure>\n</li>\n<li>\n<p>For hvert av instrumentene (tromme, piano, lyder etc.), må du legge\ntil følgende i <code class=\"blockevents\">når jeg mottar</code> klossen.</p>\n<pre><code class=\"language-blocks\">hvis &lt;(opptak) = <span class=\"hljs-string\">[1]</span>&gt;\n    legg (tid) til <span class=\"hljs-string\">[timing v]</span>\n    legg (katt) til <span class=\"hljs-string\">[instrument v]</span>\nslutt\n</code></pre>\n<p>Endre ordet <code>katt</code> i <code class=\"blocklist\">legg katt til instrument</code> slik\nat det stemmer med navnet til meldingen som brukes for å spille\ndenne lyden.</p>\n<pre><code class=\"language-blocks\">når jeg mottar [drum v]\n<span class=\"hljs-function\"><span class=\"hljs-title\">trommeslag</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">48</span> v)</span> <span class=\"hljs-title\">som</span> <span class=\"hljs-title\">varer</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">0.2</span>)</span> <span class=\"hljs-title\">takter</span>\n<span class=\"hljs-title\">hvis</span> &lt;<span class=\"hljs-params\">(opptak)</span> = [1]&gt;\n    <span class=\"hljs-title\">legg</span> <span class=\"hljs-params\">(tid)</span> <span class=\"hljs-title\">til</span> [<span class=\"hljs-title\">timing</span> <span class=\"hljs-title\">v</span>]\n    <span class=\"hljs-title\">legg</span> <span class=\"hljs-params\">(katt)</span> <span class=\"hljs-title\">til</span> [<span class=\"hljs-title\">instrument</span> <span class=\"hljs-title\">v</span>]\n<span class=\"hljs-title\">slutt</span>\n<span class=\"hljs-title\">sett</span> <span class=\"hljs-title\">st</span>ø<span class=\"hljs-title\">rrelse</span> <span class=\"hljs-title\">til</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">110</span>)</span> %\n<span class=\"hljs-title\">vent</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">0.1</span>)</span> <span class=\"hljs-title\">sekunder</span>\n<span class=\"hljs-title\">sett</span> <span class=\"hljs-title\">st</span>ø<span class=\"hljs-title\">rrelse</span> <span class=\"hljs-title\">til</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">100</span>)</span> %\n</span></code></pre>\n</li>\n<li>\n<p>Tegn en ny figur og gi den en rød sirkeldrakt. Gi denne figuren\nnavnet <code>Opptak</code>.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./record-costume.png */ 1311) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Lag et skript som setter <code class=\"blockdata\">opptak</code> til 1 og sletter alle\n<code class=\"blocklist\">instrument</code> og <code class=\"blocklist\">timing</code> når man trykker på\ndet.</p>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet\">\n<h2 class=\"flag\" id=\"test-prosjektet\">Test prosjektet</h2>\n<p>Trykk på opptaksknappen. Hva skjer når du spiller på instrumentene?</p>\n</section>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag en ny figur og lag en drakt som ser ut som en grønn pil.  Kall\ndenne <code>Spill av</code>.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./play-costume.png */ 1312) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<figure>Lag en ny variabel som du kaller <code class=\"blockdata\">index</code>.</figure>\n</li>\n<li>\n<p>Nå må vi få avspillingen til å gjøre noe. Legg dette skriptet til\n<code>Spill av</code>.</p>\n<pre><code class=\"language-blocks\">når denne figuren klikkes\nsett <span class=\"hljs-string\">[recording v]</span> til <span class=\"hljs-string\">[0]</span>\nsett <span class=\"hljs-string\">[index v]</span> til <span class=\"hljs-string\">[1]</span>\nnullstill klokka\nfor alltid\n    hvis &lt;(element (index) av <span class=\"hljs-string\">[timing v]</span>) &lt; (timer)&gt;\n        send melding (element (index) av <span class=\"hljs-string\">[instrument v]</span>)\n        endre <span class=\"hljs-string\">[index v]</span> med (<span class=\"hljs-number\">1</span>)\n        hvis &lt;(index) &gt; (lengden av <span class=\"hljs-string\">[timing v]</span>)&gt;\n            stopp <span class=\"hljs-string\">[dette skriptet]</span> :: control\n        slutt\n    slutt\nslutt\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-2\">\n<h2 class=\"flag\" id=\"test-prosjektet-2\">Test prosjektet</h2>\n<ul>\n<li>\n<p>Trykk på den grønne play knappen. Hva skjer?</p>\n</li>\n<li>\n<figure>Trykk på den røde knappen og spill på noen intrumenter. Etter at du\ner ferdig, trykk på den grønne play knappen igjen. Hva skjer?</figure>\n</li>\n<li>\n<figure>Spill på flere instrumenter uten å trykke på record. Trykk så på den\ngrønne play knappen igjen. Hva skjer?</figure>\n</li>\n</ul>\n</section>\n";

/***/ },

/***/ 1311:
/*!************************************************************!*\
  !*** ../oppgaver/src/scratch/lydmaskin/record-costume.png ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/lydmaskin/record-costume.8a768a.png";

/***/ },

/***/ 1312:
/*!**********************************************************!*\
  !*** ../oppgaver/src/scratch/lydmaskin/play-costume.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/lydmaskin/play-costume.29eaf9.png";

/***/ }

});
//# sourceMappingURL=lydmaskin-opptaker.57af9dfcd019681e2975.js.map