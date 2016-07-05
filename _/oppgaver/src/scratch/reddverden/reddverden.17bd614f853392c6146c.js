webpackJsonp([190,236],{

/***/ 1346:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/scratch/reddverden/reddverden.md ***!
  \***********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/scratch/reddverden/reddverden.md */ 1347),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/scratch/reddverden/reddverden.md */ 1348)}

/***/ },

/***/ 1348:
/*!********************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/scratch/reddverden/reddverden.md ***!
  \********************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>Kildesortering er viktig for å begrense hvor mye avfallet vårt\npåvirker miljøet. I dette spillet skal vi kildesortere og samtidig\nlære en hel del om meldinger i programmering.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./reddverden.png */ 1349) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"steg-1-legg-til-ronny-og-soppelet\">\n<h1 class=\"activity\" id=\"steg-1-legg-til-ronny-og-soppelet\">Steg 1: Legg til Ronny og søppelet</h1>\n<figure>Vi starter spillet med å introdusere Ronny, som er vår hjelper underveis,\nog søppelet som vi skal kaste.</figure>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Start et nytt prosjekt. Legg til en ny figur, enten fra biblioteket,\nslik vi har gjort, eller tegn din helt egen hjelper! Vi valgte figuren\n<code>nano</code>, da han har flere drakter som vi tenker å bruke i utfordrings-delene.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./ronny.png */ 1350) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Målet med spillet er å få all søppelet i bøttene de hører til. Hver gang\nvi fjerner en søppel-figur så får vi et poeng. Målet vårt er å få så mange\npoeng som det er søppel-biter.</p>\n<p>I første omgang vet ikke Ronny om noe av søppelet, så vi lar Ronny sette\nbåde poeng og mål til null. For å legge til variabler trykker vi på\n<code class=\"blockdata\">Data</code>-kategorien og trykk på <code>Lag en Variabel</code>.</p>\n<pre><code class=\"language-blocks\">når grønt flagg klikkes\nsett <span class=\"hljs-string\">[Mål v]</span> til <span class=\"hljs-string\">[0]</span>\nsett <span class=\"hljs-string\">[Poeng v]</span> til <span class=\"hljs-string\">[0]</span>\n</code></pre>\n</li>\n<li>\n<p>Legg til seks figurer som representerer søppel. Her kan du igjen velge\neksisterende figurer fra biblioteket, tegne dine egne, eller finne\nnoen bilder på nettet du syns passer. Selv valgte vi noen bananer, et eple,\nen ballong, et hellikopter, en melkekartong, og en avis.</p>\n<style>\nfigure.inline > img {\n  width: 100px;\n  display: inline;\n}\n</style>\n<figure class=\"inline\">\n  <img src=\"" + __webpack_require__(/*! ./bananer.png */ 1351) + "\" />\n  <img src=\"" + __webpack_require__(/*! ./eple.png */ 1352) + "\" />\n  <img src=\"" + __webpack_require__(/*! ./ballong.png */ 1353) + "\" />\n  <img src=\"" + __webpack_require__(/*! ./hellikopter.png */ 1354) + "\" />\n  <img src=\"" + __webpack_require__(/*! ./melk.png */ 1355) + "\" />\n  <img src=\"" + __webpack_require__(/*! ./avis.png */ 1356) + "\" />\n</figure>\n</li>\n<li>\n<p>Velg så en bakgrunn som vi kan plassere figurene våre rundt i. Vi valgte\nkjøkken fra biblioteket, men tegn gjerne noe eget eller finn et annet bilde du\nheller har lyst til å bruke.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./kitchen.png */ 1357) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<figure>Vi kommer til å flytte rundt på søppel-figurene, så det er viktig at vi\nplasserer dem på nytt hver gang vi starter spillet.</figure>\n<pre><code class=\"language-blocks\"><span class=\"hljs-keyword\">n</span>år <span class=\"hljs-keyword\">gr</span>ønt flagg klikkes\n<span class=\"hljs-keyword\">g</span>å til x: (78) y: (5)\n</code></pre>\n<figure>Søppel-figurene må ha hver sin plass, så det er viktig at du finner noen x- og\ny-koordinater for hver av dem.</figure>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet\">\n<h2 class=\"flag\" id=\"test-prosjektet\">Test prosjektet</h2>\n<ul>\n<li>Om du flytter rundt på søppel-bitene, blir de satt tilbake når du trykker\npå det grønne flagget?</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-sett-opp-spillet\">\n<h1 class=\"activity\" id=\"steg-2-sett-opp-spillet\">Steg 2: Sett opp spillet</h1>\n<figure>Ronny trenger å vite hvor mange søppel-figurer som er på brettet. For å finne ut av\ndet, så ber vi om hjelp fra søppel-figurene selv.</figure>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Ronny kan kommunisere med søppelet ved hjelp av meldinger. Start med å sende meldingen\n<code>Forbered spill</code>.</p>\n<pre><code class=\"language-blocks\">når grønt flagg klikkes\nsett <span class=\"hljs-string\">[Mål v]</span> til <span class=\"hljs-string\">[0]</span>\nsett <span class=\"hljs-string\">[Poeng v]</span> til <span class=\"hljs-string\">[0]</span>\nsend melding <span class=\"hljs-string\">[Forbered spill v]</span>\n</code></pre>\n</li>\n<li>\n<figure>Hver av søppel-bitene må nå svare på beskjeden ved å øke <code>Mål</code> med en.</figure>\n<pre><code class=\"language-blocks\"><span class=\"hljs-keyword\">n</span>år jeg mottar [Forbered spill v]\nendre [<span class=\"hljs-keyword\">M</span>å<span class=\"hljs-keyword\">l</span> v] med (1)\n</code></pre>\n</li>\n<li>\n<p>Før spillet kan starte må vi gi Ronny litt tid til å kommunisere\nog la søppelet telle opp målet vi skal nå. En ting vi kan gjøre er å la\nRonny snakke litt. Når Ronny er ferdig med å prate, så kan vi starte\nspillet.</p>\n<pre><code class=\"language-blocks\">når grønt flagg klikkes\nsett <span class=\"hljs-string\">[Mål v]</span> til <span class=\"hljs-string\">[0]</span>\nsett <span class=\"hljs-string\">[Poeng v]</span> til <span class=\"hljs-string\">[0]</span>\nsend melding <span class=\"hljs-string\">[Forbered spill v]</span>\nsi <span class=\"hljs-string\">[Hei, jeg heter Ronny, kan du hjelpe meg med å redde verden?]</span> i (<span class=\"hljs-number\">3</span>) sekunder\nsend melding <span class=\"hljs-string\">[Start spill v]</span>\nsi <span class=\"hljs-string\">[Vi må sortere avfallet til hver sin kilde, kan du hjelpe meg med det?]</span> i (<span class=\"hljs-number\">3</span>) sekunder\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-2\">\n<h2 class=\"flag\" id=\"test-prosjektet-2\">Test prosjektet</h2>\n<figure><strong>Klikk på det grønne flagget.</strong></figure>\n<ul>\n<li>\n<p>Blir mål satt til riktig antall søppel-biter? I vårt tilfelle skal det bli seks.</p>\n</li>\n<li>\n<p>Snakker Ronny?</p>\n</li>\n</ul>\n</section>\n<section class=\"challenge\" id=\"utfordring\">\n<h2 class=\"challenge\" id=\"utfordring\">Utfordring</h2>\n<ul>\n<li>\n<figure>Ronny har flere drakter som viser han blid og sur. Klarer du å bytte drakt på Ronny når han snakker,\nog tilbake når han er ferdig med å snakke?</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./ronny_prater.png */ 1358) + "\" alt=\"\" /> <!-- ikke figur --></figure>\n</li>\n<li>\n<p>Istedenfor snakkebobler, klarer du spille inn din egen stemme?\n<strong>Hint:</strong> Bruk blokken under.</p>\n<pre><code class=\"language-blocks\">spill lyden <span class=\"hljs-string\">[opptak 1 v]</span> til den er ferdig\n</code></pre>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-start-spillet\">\n<h1 class=\"activity\" id=\"steg-3-start-spillet\">Steg 3: Start spillet</h1>\n<p>Nå som vi vet antall poeng vi skal nå, kan vi sette opp bøttene våre.</p>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Tegn en ny figur for hver av bøttene <code>Mat</code>, <code>Plast</code> og <code>Papir</code>.</p>\n<figure class=\"inline\">\n  <img src=\"" + __webpack_require__(/*! ./mat.png */ 1359) + "\" />\n  <img src=\"" + __webpack_require__(/*! ./plast.png */ 1360) + "\" />\n  <img src=\"" + __webpack_require__(/*! ./papir.png */ 1361) + "\" />\n</figure>\n</li>\n<li>\n<p>Vi ønsker ikke å vise bøttene før spillet er i gang. For å få til dette kan vi\nbenytte oss av <code>Start spill</code>-meldingen.</p>\n<pre><code class=\"language-blocks\"><span class=\"hljs-keyword\">n</span>år <span class=\"hljs-keyword\">gr</span>ønt flagg klikkes\nskjul\n</code></pre>\n<pre><code class=\"language-blocks\">når jeg mottar <span class=\"hljs-string\">[Start spill v]</span>\nvis\n</code></pre>\n</li>\n<li>\n<figure>Dette trikset kan vi også gjøre for søppelet, som også er greit å skjule før\nspillet er i gang.</figure>\n<pre><code class=\"language-blocks\"><span class=\"hljs-keyword\">n</span>år <span class=\"hljs-keyword\">gr</span>ønt flagg klikkes\nskjul\n<span class=\"hljs-keyword\">g</span>å til x: (78) y: (5)\n</code></pre>\n<pre><code class=\"language-blocks\">når jeg mottar <span class=\"hljs-string\">[Start spill v]</span>\nvis\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-3\">\n<h2 class=\"flag\" id=\"test-prosjektet-3\">Test prosjektet</h2>\n<figure><strong>Klikk på det grønne flagget.</strong></figure>\n<ul>\n<li>\n<p>Skjules bøttene i starten? Blir de vist når Ronny er ferdig å snakke?</p>\n</li>\n<li>\n<p>Skjer det samme med søppel-bitene?</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-sortering\">\n<h1 class=\"activity\" id=\"steg-4-sortering\">Steg 4: Sortering</h1>\n<p>Nå må vi få til poeng-giving når vi flytter søppel-bitene opp i bøttene.</p>\n<section class=\"check\" id=\"sjekkliste-4\">\n<h2 class=\"check\" id=\"sjekkliste-4\">Sjekkliste</h2>\n<ul>\n<li>\n<figure>Måten vi flytter på søppel-bitene er at vi lar dem bevege seg etter musepekeren\ntil de er flyttet til sin passende bøtte.</figure>\n<pre><code class=\"language-blocks\"><span class=\"hljs-keyword\">n</span>år denne figuren klikkes\ngjenta til &lt;berører [<span class=\"hljs-keyword\">Mat</span> v] ?&gt;\n  <span class=\"hljs-keyword\">g</span>å til [musepeker v]\nslutt\n</code></pre>\n</li>\n<li>\n<figure>Når søppelet er lagt i sin passende bøtte, trenger vi å legge til ett poeng og skjule\nsøppelet.</figure>\n<pre><code class=\"language-blocks\">når denne figuren klikkes\ngjenta til &lt;berører <span class=\"hljs-string\">[Mat v]</span> ?&gt;\n  gå til <span class=\"hljs-string\">[musepeker v]</span>\nslutt\nendre <span class=\"hljs-string\">[Poeng v]</span> med (<span class=\"hljs-number\">1</span>)\nskjul\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-4\">\n<h2 class=\"flag\" id=\"test-prosjektet-4\">Test prosjektet</h2>\n<figure><strong>Klikk på det grønne flagget.</strong></figure>\n<ul>\n<li>Når du trykker på en søppel-bit, følger den etter musepekeren? Forsvinner søppelbiten\nnår den går i den riktige bøtten? Husk at ikke alt skal i <code>Mat</code>, noe skal også\ni <code>Plast</code> eller <code>Papir</code>.</li>\n</ul>\n</section>\n<section class=\"challenge\" id=\"utfordring-2\">\n<h2 class=\"challenge\" id=\"utfordring-2\">Utfordring</h2>\n<ul>\n<li>\n<figure>Klarer du å avslutte flyttinga hvis du flytter søppelet til feil bøtte? Kanskje til og\nmed få Ronny sur hvis feil bøtte brukes?</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./ronny_sur.png */ 1362) + "\" alt=\"\" /> <!-- ikke figur --></figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-5-avslutt-spillet\">\n<h1 class=\"activity\" id=\"steg-5-avslutt-spillet\">Steg 5: Avslutt spillet</h1>\n<p>Når vi har fått alt søppelet på plass, må vi avslutte spillet.</p>\n<section class=\"check\" id=\"sjekkliste-5\">\n<h2 class=\"check\" id=\"sjekkliste-5\">Sjekkliste</h2>\n<ul>\n<li>\n<p><code>Ronny</code> trenger å vite når spillet er over. Det kan vi gjøre ved å legge til\n<code>vent til</code>-blokk i skriptet hans.</p>\n<pre><code class=\"language-blocks\">når grønt flagg klikkes\nsett <span class=\"hljs-string\">[Mål v]</span> til <span class=\"hljs-string\">[0]</span>\nsett <span class=\"hljs-string\">[Poeng v]</span> til <span class=\"hljs-string\">[0]</span>\nsend melding <span class=\"hljs-string\">[Forbered spill v]</span>\nsi <span class=\"hljs-string\">[Hei, jeg heter Ronny, kan du hjelpe meg med å redde verden?]</span> i (<span class=\"hljs-number\">3</span>) sekunder\nsend melding <span class=\"hljs-string\">[Start spill v]</span>\nvent til &lt;(Poeng) = (Mål)&gt;\nsend melding <span class=\"hljs-string\">[Spill ferdig v]</span>\nsi <span class=\"hljs-string\">[Takk for at du hjelper meg med å redde verden!]</span>\n</code></pre>\n</li>\n<li>\n<p>I tillegg til at Ronny takker oss for at vi kildesorterte alt avfallet, så ber vi han også\nsende meldingen <code>Spill ferdig</code>. Dette gjør at vi kan fortelle de andre figurene at spillet\ner ferdig.</p>\n<p>Da kan vi for eksempel fortelle bøttene at de skal skjule seg selv når spillet er ferdig.</p>\n<pre><code class=\"language-blocks\">når jeg mottar <span class=\"hljs-string\">[Spill ferdig v]</span>\nskjul\n</code></pre>\n</li>\n<li>\n<p>Til slutt kan vi forandre bakgrunnen når spillet avsluttes, for å gjøre avslutningen enda\nlitt finere. Trykk på <code>Scene</code> og legg til en bakgrunn.</p>\n<p>Vi valgte <code>water and rocks</code> fra biblioteket, men det er bare å velge noe du syns er finere,\nevt lage noe selv.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./finale.png */ 1363) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Til slutt trenger vi å fortelle når bakgrunnen skal skiftes. Du kan gjøre det ved å legge\ntil følgende på skriptet til <code>Scene</code>.</p>\n<pre><code class=\"language-blocks\">når jeg mottar [Spill ferdig v]\n<span class=\"hljs-keyword\">bytt </span><span class=\"hljs-keyword\">bakgrunn </span>til [water <span class=\"hljs-keyword\">and </span>rocks v]\n</code></pre>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-5\">\n<h2 class=\"flag\" id=\"test-prosjektet-5\">Test prosjektet</h2>\n<figure><strong>Klikk på det grønne flagget.</strong></figure>\n<ul>\n<li>Når alt søppelet er sortert, blir bakgrunnen byttet og Ronny takker for hjelpen?</li>\n</ul>\n</section>\n<section class=\"challenge\" id=\"utfordring-3\">\n<h2 class=\"challenge\" id=\"utfordring-3\">Utfordring</h2>\n<ul>\n<li>\n<figure>Klarer du å sette en tredje bakgrunn når det grønne flagget klikkes? Husk at vi\nvil fortsatt ha kjøkkenbakgrunn når søppel-figurene skal flyttes.</figure>\n</li>\n<li>\n<figure>Klarer du å forandre draken til Ronny for å vise hvor glad han blir når\ndu har reddet verden?</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./ronny_blid.png */ 1364) + "\" alt=\"\" /> <!-- ikke figur --></figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"hva-har-vi-laert\">\n<h1 class=\"activity\" id=\"hva-har-vi-laert\">Hva har vi lært?</h1>\n<p>I dette spillet har vi lært hvordan vi kan bruke meldinger til å bryte opp spillet i\nmange små biter. Mindre biter gjør programmet vårt mindre usikkert, og lettere å få\noversikt over hvis noe går galt.</p>\n<p>I tillegg lærte vi å dele ansvaret på flere figurer. Ronny hadde ansvaret for å holde\noversikt på poengene, men fikk hjelp av søppel-figurene til å finne ut hvor mange\nsøppel-biter som fantes. Dette er også et viktig prinsipp i programmering, nemlig fordeling\nav ansvar.</p>\n</section>\n";

/***/ },

/***/ 1349:
/*!*********************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/reddverden.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/reddverden.ae11dc.png";

/***/ },

/***/ 1350:
/*!****************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/ronny.png ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/ronny.df5c11.png";

/***/ },

/***/ 1351:
/*!******************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/bananer.png ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/bananer.0df8e6.png";

/***/ },

/***/ 1352:
/*!***************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/eple.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/eple.36a7ef.png";

/***/ },

/***/ 1353:
/*!******************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/ballong.png ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/ballong.a1d93a.png";

/***/ },

/***/ 1354:
/*!**********************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/hellikopter.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/hellikopter.323d01.png";

/***/ },

/***/ 1355:
/*!***************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/melk.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/melk.c0aa2f.png";

/***/ },

/***/ 1356:
/*!***************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/avis.png ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/avis.84aab8.png";

/***/ },

/***/ 1357:
/*!******************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/kitchen.png ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/kitchen.87c2e5.png";

/***/ },

/***/ 1358:
/*!***********************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/ronny_prater.png ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/ronny_prater.bff09b.png";

/***/ },

/***/ 1359:
/*!**************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/mat.png ***!
  \**************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/mat.a54831.png";

/***/ },

/***/ 1360:
/*!****************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/plast.png ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/plast.df5fda.png";

/***/ },

/***/ 1361:
/*!****************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/papir.png ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/papir.365c84.png";

/***/ },

/***/ 1362:
/*!********************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/ronny_sur.png ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/ronny_sur.e7869c.png";

/***/ },

/***/ 1363:
/*!*****************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/finale.png ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/finale.0f8479.png";

/***/ },

/***/ 1364:
/*!*********************************************************!*\
  !*** ../oppgaver/src/scratch/reddverden/ronny_blid.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/scratch/reddverden/ronny_blid.e40a6c.png";

/***/ }

});
//# sourceMappingURL=reddverden.17bd614f853392c6146c.js.map