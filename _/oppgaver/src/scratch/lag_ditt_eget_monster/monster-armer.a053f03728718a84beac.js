webpackJsonp([173,236],{

/***/ 1265:
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/scratch/lag_ditt_eget_monster/monster-armer.md ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/scratch/lag_ditt_eget_monster/monster-armer.md */ 1266),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/scratch/lag_ditt_eget_monster/monster-armer.md */ 1267)}

/***/ },

/***/ 1267:
/*!**********************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/scratch/lag_ditt_eget_monster/monster-armer.md ***!
  \**********************************************************************************************************************************************/
/***/ function(module, exports) {

	module.exports = "<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>En arm lages av to figurer, og de kan være ganske vanskelige å\nbygge, siden de to armene må vite om hverandre, slik at de ikke\nskilles og det blir seende rart ut. Dette kan gjøres med matematiske\nberegninger som kalles <strong>trigonometri</strong>, noe som regelmessig brukes\ni produksjon av dataspill, roboter og andre kule teknologier. Armens\nførste figur er overarmen, som ikke er så vanskelig, da den ganske\nenkelt vil rotere ved skulderen og flytte seg med kroppen og de\nandre kroppsdelene. En ting vi må legge til er å sette retningen\n<code class=\"blockmotion\">retning</code> til armen i en variabel (mer om det\nseinere).</p>\n<pre><code class=\"language-blocks\">når <span class=\"hljs-string\">[mellomrom v]</span> trykkes\nvend venstre (<span class=\"hljs-number\">15</span>) grader\nsett <span class=\"hljs-string\">[venstre arm v]</span> til (retning)\nsend melding <span class=\"hljs-string\">[flyttet v]</span>\nendre x med (hastighet)\n</code></pre>\n</li>\n<li>\n<p>Den neste beregningen brukes for å kontrollere <strong>underarmen</strong>. Her\nbruker vi trigonometri for å beregne hvor underarmen bør plasseres\n(Det kan godt være at du trenger å be om hjelp når du skal gjøre\ndette).</p>\n<pre><code class=\"language-blocks\">når jeg mottar <span class=\"hljs-string\">[flyttet v]</span>\ngå til <span class=\"hljs-string\">[Sprite3 v]</span>\ngå til x: ((x-posisjon) + ((<span class=\"hljs-number\">45</span>) * (<span class=\"hljs-string\">[sin v]</span> av (venstre arm)))) y: ((y-position) + ((<span class=\"hljs-number\">45</span>) * (<span class=\"hljs-string\">[cos v]</span> av (venstre arm))))\n</code></pre>\n</li>\n<li>\n<p>Først oppdaterer armen seg, når meldingen <code class=\"blockbrown\">flyttet</code>\nblir sendt, men du kan bruke hvilken som helst melding, så lenge\noverarmen sender den eller flytter seg til samme medling som\nunderarmen.</p>\n</li>\n<li>\n<p>Så flytter underarmen seg selv til <strong>senterpunktet</strong> av overarmen,\ndette er punktet hvor toppen av overarmen er festet til\nskulderen. Vi vil så flytte underarmen slik at den møter\noverarmen. Tenk deg at vi tegner en sirkel mens overarmen roterer\nrundt skulderen, hva er så radius på den sirkelen? Armen i dette\neksempelet er circa <strong>45 pixler</strong> lang. Vi trenger å finne ut hva\npunktet i den andre enden av armen er, og posisjonerer underarmen\nvår der. Man kan bruke trigonometri formelen over for å\nreposisjonere underarmen og lage en albue.</p>\n</li>\n</ul>\n</section>\n";

/***/ }

});
//# sourceMappingURL=monster-armer.a053f03728718a84beac.js.map