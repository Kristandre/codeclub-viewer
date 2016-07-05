webpackJsonp([179,236],{

/***/ 1289:
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/scratch/lag_ditt_eget_monster/monster-tentakler.md ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/scratch/lag_ditt_eget_monster/monster-tentakler.md */ 1290),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/scratch/lag_ditt_eget_monster/monster-tentakler.md */ 1291)}

/***/ },

/***/ 1291:
/*!**************************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/scratch/lag_ditt_eget_monster/monster-tentakler.md ***!
  \**************************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>For å få en tentakel til å bevege seg, kan vi <strong>rotere</strong> den og\n<strong>endre størrelse</strong> ved å bruke <code class=\"blockgreen\">tilfeldig tall</code> med en\nlav verdi i en variabel, for så å vente et øyeblikk før vi\ngjenoppretter den originale størrelsen.</p>\n<pre><code class=\"language-blocks\">sett [tentakelRotasjon v] <span class=\"hljs-built_in\">til</span> (tilfeldig tall fra (<span class=\"hljs-number\">1</span>) <span class=\"hljs-built_in\">til</span> (<span class=\"hljs-number\">10</span>))\nsett [tentakelStørrelse v] <span class=\"hljs-built_in\">til</span> (tilfeldig tall fra (<span class=\"hljs-number\">1</span>) <span class=\"hljs-built_in\">til</span> (<span class=\"hljs-number\">10</span>))\nendre størrelse <span class=\"hljs-built_in\">med</span> (tentakelStørrelse)\nvend venstre (tentakelRotasjon) grader\nvent (<span class=\"hljs-number\">0.5</span>) sekunder\nendre størrelse <span class=\"hljs-built_in\">med</span> ((tentakelStørrelse) * (-<span class=\"hljs-number\">1</span>))\nvend høyre (tentakelRotasjon) grader\n</code></pre>\n<p>Merk at vi multipliserer <code class=\"blockdata\">tentakelStørrelse</code> med -1\nfor å få en negativ verdi.</p>\n</li>\n</ul>\n</section>\n";

/***/ }

});
//# sourceMappingURL=monster-tentakler.f2c29cca85aa3152591a.js.map