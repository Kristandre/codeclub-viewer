webpackJsonp([185,236],{

/***/ 1320:
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/scratch/lydmaskin/lydmaskin-tromme.md ***!
  \****************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/scratch/lydmaskin/lydmaskin-tromme.md */ 1321),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/scratch/lydmaskin/lydmaskin-tromme.md */ 1322)}

/***/ },

/***/ 1322:
/*!*************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/scratch/lydmaskin/lydmaskin-tromme.md ***!
  \*************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Importer en ny figur ved å velge <code>Ting/Drum1</code>. Gi den navnet <code>Tromme</code>.</p>\n</li>\n<li>\n<p>Vi vil at trommen skal lage lyd når vi klikker på den eller trykker\npå <code>mellomromstasten</code>.</p>\n<pre><code class=\"language-blocks\">når denne figuren klikkes\nsend melding <span class=\"hljs-string\">[tromme v]</span>\n\nnår <span class=\"hljs-string\">[mellomrom v]</span> trykkes\nsend melding <span class=\"hljs-string\">[tromme v]</span>\n</code></pre>\n</li>\n<li>\n<p>Nå må vi lage lyd når den mottar <code>tromme</code>. Ved å endre tallet, kan\ndu endre lyden trommen lager.</p>\n<pre><code class=\"language-blocks\">når jeg mottar [tromme v]\ntrommeslag (<span class=\"hljs-number\">48</span> v) <span class=\"hljs-function\">som <span class=\"hljs-title\">varer</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">0.2</span>)</span> takter\n</span></code></pre>\n</li>\n<li>\n<figure>Prøv å endre utseende slik at man ser hvilket instrument som\nspiller.</figure>\n<pre><code class=\"language-blocks\">når jeg mottar [tromme v]\n<span class=\"hljs-function\"><span class=\"hljs-title\">trommeslag</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">48</span> v)</span> <span class=\"hljs-title\">som</span> <span class=\"hljs-title\">varer</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">0.2</span>)</span> <span class=\"hljs-title\">takter</span>\n<span class=\"hljs-title\">sett</span> <span class=\"hljs-title\">st</span>ø<span class=\"hljs-title\">rrelse</span> <span class=\"hljs-title\">til</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">110</span>)</span> %\n<span class=\"hljs-title\">vent</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">0.1</span>)</span> <span class=\"hljs-title\">sekunder</span>\n<span class=\"hljs-title\">sett</span> <span class=\"hljs-title\">st</span>ø<span class=\"hljs-title\">rrelse</span> <span class=\"hljs-title\">til</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">100</span>)</span> %\n</span></code></pre>\n</li>\n</ul>\n</section>\n";

/***/ }

});
//# sourceMappingURL=lydmaskin-tromme.f78e39f3e0c9d235f1f3.js.map