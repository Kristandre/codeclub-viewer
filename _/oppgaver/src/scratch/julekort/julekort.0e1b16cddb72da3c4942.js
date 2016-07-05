webpackJsonp([167,236],{

/***/ 1127:
/*!*****************************************************************!*\
  !*** ../oppgaver/src/scratch/bilder/bakgrunn-fra-bibliotek.png ***!
  \*****************************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAWCAIAAAC63aDhAAAAA3NCSVQICAjb4U/gAAAAGXRFWHRTb2Z0d2FyZQBnbm9tZS1zY3JlZW5zaG907wO/PgAAASNJREFUOI3llK9uwzAQxt1pwDeWspnmFQI7uLKU1X2DFa6oe41mrGMpq8fisYbV0GbzoNmsog6aDnjKouVPF6mVKvVDJ+u7n+/OOvfsboeOpKtjgc6YdV1EabrSWnfNJ4TMZo9/Wc656fQhDMNOrPn8qaauqj6tzTc5YByPYgA4yG2bV77JtdZSKSVV+QLnXGdWIQzYB1LKZJGk6arW1tYjpePt9vYGIIoiD2LsFSFkjGFrRif0MOtrvw/6fYQQAAyH9/6QrZlUv51KpQghg7tBGyvLuBBiFMeFzznHM14G/Tg5L3qvYWn9IYTwvnetJ3SMAZbLF2tt7RA4f2tkeZCXMWaRPAdB0ATyJTeyqtam56/Vue72aVj/2biqylm9C/ijvwFjEHjPhVu+swAAAABJRU5ErkJggg=="

/***/ },

/***/ 1220:
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/scratch/julekort/julekort.md ***!
  \*******************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/scratch/julekort/julekort.md */ 1221),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/scratch/julekort/julekort.md */ 1222)}

/***/ },

/***/ 1222:
/*!****************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/scratch/julekort/julekort.md ***!
  \****************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<figure>Vi skal lage et julekort i Scratch. Det skal ha noen enkle funksjoner\nog animasjoner. Når det er ferdig vil det se omtrent slik ut.</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./julekort.png */ 1223) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"steg-1-endre-bakgrunn-og-finne-figurer\">\n<h1 class=\"activity\" id=\"steg-1-endre-bakgrunn-og-finne-figurer\">Steg 1: Endre bakgrunn og finne figurer</h1>\n<p>Når du er klar til å starte velger du <code>Programmering</code> i menyen øverst\npå siden <a href=\"http://scratch.mit.edu/\">http://scratch.mit.edu/</a>. Da kommer vi inn i Scratch.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./programmering.png */ 1224) + "\" alt=\"\" /></figure>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Klikk på scenen ved siden av kattefiguren <code>Sprite1</code> i vinduet for\nfigurer. Trykk på <img src=\"" + __webpack_require__(/*! ../bilder/bakgrunn-fra-bibliotek.png */ 1127) + "\" alt=\"\" /> for å\nimportere en ferdig bakgrunn. Velg den bakgrunnen du vil. Slett\nderetter den tomme bakgrunnen som ligger der.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./ny_bakgrunn.png */ 1225) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<figure>Slett kattefiguren <code>Sprite1</code> ved å høyreklikke på ham og slette.</figure>\n</li>\n<li>\n<figure>Velg nye figurer fra biblioteket. Legg til isbjørnen, snømannen og\njuletreet.</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./velg_figurer.png */ 1226) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-legge-til-kode\">\n<h1 class=\"activity\" id=\"steg-2-legge-til-kode\">Steg 2: Legge til kode</h1>\n<p>Nå skal vi få figurene til å gjøre ting når de blir klikket på.</p>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Velg isbjørnen og fanen <code class=\"blocklightgrey\">Skript</code> og lag denne\nkoden. Når isbjørnen blir klikket på skal den si <code>God jul!</code>.\nDeretter skal den skifte utseende hvert sekund, 10 ganger.</p>\n<pre><code class=\"language-blocks\">når denne figuren klikkes\nsi [God jul!] i (<span class=\"hljs-number\">2</span>) <span class=\"hljs-function\">sekunder\n<span class=\"hljs-title\">gjenta</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">10</span>)</span> ganger\n    neste drakt\n    <span class=\"hljs-title\">vent</span> <span class=\"hljs-params\">(<span class=\"hljs-number\">1</span>)</span> sekunder\nslutt\n</span></code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-ditt\">\n<h2 class=\"flag\" id=\"test-prosjektet-ditt\">Test prosjektet ditt</h2>\n<figure><strong>Klikk på isbjørnen og se om koden din virker.</strong></figure>\n<ul>\n<li>\n<figure>Sier isbjørnen <code>God jul!</code>?</figure>\n</li>\n<li>\n<p>Forandrer isbjørnen stilling?</p>\n</li>\n</ul>\n</section>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Velg snømannen og fanen <code>Skript</code> og lag denne koden.  Snømannen skal\nspørre etter navnet ditt. Den setter svaret inn i en ny\nsetning. Deretter skal den skifte farge.</p>\n<pre><code class=\"language-blocks\">når denne figuren klikkes\nspør <span class=\"hljs-string\">[Hva er navnet ditt?]</span> og vent\nsi (sett sammen <span class=\"hljs-string\">[God jul ]</span> (svar)) i (<span class=\"hljs-number\">2</span>) sekunder\nfor alltid\n    endre <span class=\"hljs-string\">[farge v]</span> effekt med (<span class=\"hljs-number\">25</span>)\nslutt\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-ditt-2\">\n<h2 class=\"flag\" id=\"test-prosjektet-ditt-2\">Test prosjektet ditt</h2>\n<figure><strong>Klikk på snømannen og se om koden din virker.</strong></figure>\n<ul>\n<li>\n<p>Spør snømannen om navnet ditt?</p>\n</li>\n<li>\n<p>Svarer snømannen med navnet ditt når du har skrevet det inn?</p>\n</li>\n<li>\n<p>Forandrer snømannen farge?</p>\n</li>\n</ul>\n</section>\n<section class=\"check\" id=\"sjekkliste-4\">\n<h2 class=\"check\" id=\"sjekkliste-4\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Velg juletreet og fanen <code class=\"blocklightgrey\">Skript</code> og lag denne\nkoden.  Nå skal juletreet skifte farge og utseende.</p>\n<pre><code class=\"language-blocks\"><span class=\"hljs-keyword\">n</span>år <span class=\"hljs-keyword\">gr</span>ønt flagg klikkes\n<span class=\"hljs-keyword\">for</span> alltid\n    vent (0.3) sekunder\n    endre [farge v] effekt med (25)\n    neste drakt\nslutt\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-ditt-3\">\n<h2 class=\"flag\" id=\"test-prosjektet-ditt-3\">Test prosjektet ditt</h2>\n<figure><strong>Trykk på det grønne flagget og se om alt virker.</strong></figure>\n<ul>\n<li>\n<p>Endrer treet farge?</p>\n</li>\n<li>\n<p>Danser treet fra side til side?</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-har-du-ledig-tid-sier-du\">\n<h1 class=\"activity\" id=\"steg-3-har-du-ledig-tid-sier-du\">Steg 3: Har du ledig tid, sier du?</h1>\n<p>Da har du jobbet godt! Om du fortsatt har ledig tid kan du:</p>\n<section class=\"check\" id=\"sjekkliste-5\">\n<h2 class=\"check\" id=\"sjekkliste-5\">Sjekkliste</h2>\n<ul>\n<li>\n<figure>Legge til din egen velkomsthilsen, for eksempel &quot;God jul&quot; eller du\nkan synge din egen julesang.</figure>\n<p>Klikk på <code>Scene</code>, og velg fanen <code class=\"blocklightgrey\">Lyder</code>.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./lyder.png */ 1227) + "\" alt=\"\" /></figure>\n<p>Ta op din egen lyd, og gi den et navn, for eksempel\n<code>julehilsen</code>. Gå deretter inn på <code class=\"blocklightgrey\">Skript</code>, og\nlegg inn følgende kode:</p>\n<pre><code class=\"language-blocks\"><span class=\"hljs-keyword\">n</span>år <span class=\"hljs-keyword\">gr</span>ønt flagg klikkes\nspill lyden [julehilsen v] til den er ferdig\n</code></pre>\n</li>\n<li>\n<p>Kanskje finne på noen andre morsomme animasjoner? Snømannen kan\ndanse eller turne litt? Kan vi ha snakkende eller hoppende gale\njulepresanger? Du bestemmer!</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-lagre-og-publisere\">\n<h1 class=\"activity\" id=\"steg-4-lagre-og-publisere\">Steg 4: Lagre og publisere</h1>\n<p>Gi julekortet ditt et navn. Velg deretter <code>Lagre nå</code> fra <code>Fil</code>menyen.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./lagre.png */ 1228) + "\" alt=\"\" /></figure>\n<figure>Deretter kan du publisere julekortet ditt ved å velge <code>Legg ut</code>.</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./leggut.png */ 1229) + "\" alt=\"\" /></figure>\n</section>\n";

/***/ },

/***/ 1223:
/*!*****************************************************!*\
  !*** ../oppgaver/src/scratch/julekort/julekort.png ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/julekort/julekort.6a7b0f.png";

/***/ },

/***/ 1224:
/*!**********************************************************!*\
  !*** ../oppgaver/src/scratch/julekort/programmering.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/julekort/programmering.8f72d0.png";

/***/ },

/***/ 1225:
/*!********************************************************!*\
  !*** ../oppgaver/src/scratch/julekort/ny_bakgrunn.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/julekort/ny_bakgrunn.a57b76.png";

/***/ },

/***/ 1226:
/*!*********************************************************!*\
  !*** ../oppgaver/src/scratch/julekort/velg_figurer.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/julekort/velg_figurer.f5ac10.png";

/***/ },

/***/ 1227:
/*!**************************************************!*\
  !*** ../oppgaver/src/scratch/julekort/lyder.png ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/julekort/lyder.7e1834.png";

/***/ },

/***/ 1228:
/*!**************************************************!*\
  !*** ../oppgaver/src/scratch/julekort/lagre.png ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/julekort/lagre.390868.png";

/***/ },

/***/ 1229:
/*!***************************************************!*\
  !*** ../oppgaver/src/scratch/julekort/leggut.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/julekort/leggut.d0cac0.png";

/***/ }

});
//# sourceMappingURL=julekort.0e1b16cddb72da3c4942.js.map