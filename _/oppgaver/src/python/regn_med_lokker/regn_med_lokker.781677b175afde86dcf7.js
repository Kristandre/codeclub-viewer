webpackJsonp([115,236],{

/***/ 927:
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/python/regn_med_lokker/regn_med_lokker.md ***!
  \********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/python/regn_med_lokker/regn_med_lokker.md */ 928),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/python/regn_med_lokker/regn_med_lokker.md */ 929)}

/***/ },

/***/ 929:
/*!*****************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/python/regn_med_lokker/regn_med_lokker.md ***!
  \*****************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section id=\"introduksjon\">\n<h1 id=\"introduksjon\">Introduksjon</h1>\n<p>En ting som mennesker ikke er så flinke til, men som datamaskiner er eksperter\npå, er å gjenta noe mange ganger etter hverandre. I python kan vi gjøre dette\nmed løkker, og dere vil snart se at dette kan spare oss for mye tid og\nskriving.</p>\n</section>\n<section class=\"activity\" id=\"hello-world\">\n<h1 class=\"activity\" id=\"hello-world\">Hello world!</h1>\n<p>La oss ta et eksempel der vi vil ha Python til å si <strong>Hei!</strong> 100 ganger. En\nmulighet er da å sette i gang å skrive:</p>\n<pre><code class=\"language-python\">print(<span class=\"hljs-string\">\"Hello  world!\"</span>)\nprint(<span class=\"hljs-string\">\"Hello  world!\"</span>)\nprint(<span class=\"hljs-string\">\"Hello  world!\"</span>)\n...\n</code></pre>\n<figure>Som du ser vil dette ta lang tid. Programmerere vil gjerne løse en oppgave\npå enklest mulig måte, og derfor har man funnet opp løkker som kan gjøre dette for oss! Koden under løser problemet vi skulle løse på bare to linjer:</figure>\n<pre><code class=\"language-python\"><span class=\"hljs-keyword\">for</span> i <span class=\"hljs-keyword\">in</span> range(<span class=\"hljs-number\">100</span>):\n    print(i, <span class=\"hljs-string\">\"Hello  world!\"</span>)\n</code></pre>\n<p>Lurt, ikke sant?</p>\n</section>\n<section class=\"protip\" id=\"range\">\n<h1 class=\"protip\" id=\"range\">Range()</h1>\n<p>Range-funksjonen er svært nytting når vi skal jobbe med løkker i Python. Når\ndu skriver <code>range(10)</code> får du en liste med tallene 0, 1, 2, 3, 4, 5, 6, 7, 8,</p>\n<ol start=\"9\">\n<li>Range kan også ta inn flere parametre. Skriver du <code>range(4, 6)</code>, får\ndu en liste med tallene fra 4 til (ikke med) 6, og hvis du skriver\n<code>range(6, 4, -1)</code> får du de samme tallene i motsatt rekkefølge.</li>\n</ol>\n</section>\n<section class=\"activity\" id=\"telle-til-10\">\n<h1 class=\"activity\" id=\"telle-til-10\">Telle til 10</h1>\n<p>Bruk en for-løkke til å skrive ut alle tallene mellom 0 og 10.</p>\n</section>\n<section class=\"activity\" id=\"liftoff\">\n<h1 class=\"activity\" id=\"liftoff\">Liftoff</h1>\n<p>Bruk en for-løkke og range-funksjonen for å telle ned fra 10. Når du kommer\ntil 0, skal programmet skrive <strong>liftoff!</strong></p>\n<figure><img src=\"" + __webpack_require__(/*! ./liftoff.png */ 930) + "\" alt=\"\" title=\"program som teller ned til liftoff\" /></figure>\n</section>\n<section class=\"activity\" id=\"summere-100-tall\">\n<h1 class=\"activity\" id=\"summere-100-tall\">Summere 100 tall</h1>\n<p>Et vanlig problem i matematikk er å summere sammen en rekke med tall. Dette\ner veldig lett når man kan programmere! Lag en for-løkke som går fra 0 til\n100, som legger sammen alle tallene før den skriver ut resultatet. Svaret skal\nbli 5050.</p>\n</section>\n<section class=\"activity\" id=\"summere-n-tall\">\n<h1 class=\"activity\" id=\"summere-n-tall\">Summere n tall</h1>\n<p>Lag en funksjon <code>summer(n)</code>, som tar inn en parameter og returnerer summen av\nalle tallene fra 0 til <code>n</code>. Definer funksjonen slik:</p>\n<pre><code class=\"language-python\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">def</span> <span class=\"hljs-title\">summer</span><span class=\"hljs-params\">(n)</span>:</span>\n    sum = <span class=\"hljs-number\">0</span>\n    <span class=\"hljs-comment\"># Din kode</span>\n    <span class=\"hljs-keyword\">return</span> sum\n</code></pre>\n<p>Når koden din er rett, skal den fungere slik som dette:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./summer.png */ 931) + "\" alt=\"\" title=\"summering av tallrekker med python\" /></figure>\n</section>\n";

/***/ },

/***/ 930:
/*!**********************************************************!*\
  !*** ../oppgaver/src/python/regn_med_lokker/liftoff.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/python/regn_med_lokker/liftoff.b9310f.png";

/***/ },

/***/ 931:
/*!*********************************************************!*\
  !*** ../oppgaver/src/python/regn_med_lokker/summer.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/python/regn_med_lokker/summer.f48268.png";

/***/ }

});
//# sourceMappingURL=regn_med_lokker.781677b175afde86dcf7.js.map