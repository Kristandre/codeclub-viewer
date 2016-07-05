webpackJsonp([97,236],{

/***/ 826:
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/processing/trigonometri/trigonometri.md ***!
  \******************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/processing/trigonometri/trigonometri.md */ 827),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/processing/trigonometri/trigonometri.md */ 828)}

/***/ },

/***/ 828:
/*!***************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/processing/trigonometri/trigonometri.md ***!
  \***************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section intro=\"\" id=\"introduksjon\">\n<h1 intro=\"\" id=\"introduksjon\">Introduksjon</h1>\n<p>Nå som du kan tegne <a href=\"../mangekanter/mangekanter.html\">mangekanter</a>\n(hvis du ikke har gjort leksjonen om mangekanter, bør du gjøre dem\nførst), skal vi se på en litt spesiell type mangekanter: de regulære\nmangekantene. Det vil si de mangekantene hvor lengden av hver kant er\nlik og vinkelen i hvert hjørne er lik. Vi skal også tegne deres nære\nslektninger, de regulære stjernene.</p>\n<p>Det er en stor fordel å kunne litt trigonometri før man slår seg løs\npå disse oppgavene, men vi skal prøve å gi korte forklaringer av de\nkonseptene som brukes i leksjonen.</p>\n<section class=\"protip\" id=\"sinus-og-cosinus\">\n<h2 class=\"protip\" id=\"sinus-og-cosinus\">Sinus og cosinus</h2>\n<p>Før vi begynner å tegne regulære mangekanter, skal vi bare ta en\ntitt på to trigonometriske funksjoner som vi kommer til å bruke mye:\n<em>sinus</em> og <em>cosinus</em>. Vi skal se på dem spesifikt i forbindelse med\nsirkler.</p>\n<ul>\n<li>Ethvert punkt langs omrisset av sirkelen befinner seg like langt fra\nmidten av sirkelen. Denne avstanden er <em>radius</em> i sirkelen, som regel\nskriver vi bare <code>r</code> i figurer og formler.</li>\n</ul>\n<figure><img src=\"" + __webpack_require__(/*! ./SirkelRadius.png */ 829) + "\" alt=\"\" title=\"En sirkel med linjer med lengde `r` fra sentrum av sirkelen til punkter i omrisset\" /></figure>\n<ul>\n<li>Vi kan tegne en rettvinklet trekant som ligger vannrett og strekker\nseg fra midten av sirkelen til ett av disse punktene.</li>\n</ul>\n<figure><img src=\"" + __webpack_require__(/*! ./RettvinkletTrekantSirkel.png */ 830) + "\" alt=\"\" title=\"En rettvinklet trekant mellom et punkt i sirkelens omriss og sentrum.\" /></figure>\n<ul>\n<li>\n<p>Hvis vi sier at sentrum av sirkelen ligger i punktet (0, 0), altså X\nog Y er null i midten av sirkelen, kan vi enkelt regne ut X og Y for\npunktet i omrisset. To av sidene i trekanten ovenfor viser da X og\nY. Den siste siden er linjen fra sentrum med lengde <code>r</code>. Derfor har vi\nkalt sidene <code>x</code>, <code>y</code> og <code>r</code>; navnet kan brukes for lengdene til\nsidene også. For vinkler er det vanlig å bruke greske bokstaver, og vi\nhar her brukt <code>α</code>, alfa.</p>\n</li>\n<li>\n<p>Lengden på sidene <code>x</code> og <code>y</code> er gitt av funksjonene sinus og\ncosinus, vinkelen <code>α</code> og <code>r</code>, altså radien til sirkelen. De korte\nsidene som sammen lager det rettvinklede hjørnet, kalles kateter og\nden lange siden med lengde <code>r</code> kalles hypotenus. Lengden på kateten\nsom er med på hjørnet med vinkelen <code>α</code>, har lengden <code>cos(α) * r</code>. Denne kateten kalles gjerne den hosliggende kateten, og mange\nbruker huskeregelen: Hos blir cos, for å huske hvilken av de to\nsidene som bruker cosinus og sinus. Lengden på den andre kateten,\nkalt den motstående kateten er <code>sin(α) * r</code>.</p>\n</li>\n</ul>\n<figure><img src=\"" + __webpack_require__(/*! ./TrekantSiderSirkel.png */ 831) + "\" alt=\"\" title=\"Den samme rettvinklede trekanten med formler for lengdene til sidene.\" /></figure>\n<ul>\n<li>Det virker kanskje litt merkelig når du bare får formlene sånn, men\nsinus og cosinus er definert som forholdene mellom hypotenusen, <code>r</code>,\nog katetene, <code>x</code> og <code>y</code>. <code>sin(α) = y / r</code> og <code>cos(α) = x / r</code>. Vi\nskal ikke se på hvordan man finner disse tallene ut fra vinkelen,\nmen det skal vi la datamaskinen gjøre for oss.</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"regulaere-mangekanter\">\n<h1 class=\"activity\" id=\"regulaere-mangekanter\">Regulære mangekanter</h1>\n<p>La oss tegne opp noen regulære mangekanter. Det vil si mangekanter der\navstanden mellom hvert hjørne er lik, altså de er likesidede, og\nvinkelen i hvert hjørne er lik, altså de er likevinklede. Da lurer du\nkanskje på hvordan du skal få til dette. Hjørnene i en regulær\nmangekant fordeler seg jevnt langs omrisset av en sirkel. Derfor kan\nvi bruke formlene for katetene for å regne ut hvor hjørnene skal\nvære. Opptegningen ellers er som for vanlige\n<a href=\"../mangekanter/mangekanter.html\">mangekanter</a>.</p>\n<ul>\n<li>\n<p>Vi begynner med å tegne opp en regulær pentagon (femkant).</p>\n<pre><code class=\"language-processing\"><span class=\"hljs-built_in\">int</span> KANTER = <span class=\"hljs-number\">5</span>;\n<span class=\"hljs-built_in\">float</span> vinkel = <span class=\"hljs-number\">360.0</span> / KANTER;\n\n<span class=\"hljs-keyword\">void</span> <span class=\"hljs-title\">setup</span>() {\n  <span class=\"hljs-built_in\">size</span>(<span class=\"hljs-number\">600</span>, <span class=\"hljs-number\">600</span>);\n}\n\n<span class=\"hljs-keyword\">void</span> <span class=\"hljs-title\">draw</span>() {\n  <span class=\"hljs-built_in\">background</span>(<span class=\"hljs-number\">0</span>);\n\n  <span class=\"hljs-built_in\">beginShape</span>();\n  <span class=\"hljs-keyword\">for</span> (<span class=\"hljs-built_in\">int</span> hjorne = <span class=\"hljs-number\">0</span>; hjorne &lt; KANTER; hjorne++) {\n    <span class=\"hljs-built_in\">vertex</span>(<span class=\"hljs-number\">300</span> + <span class=\"hljs-built_in\">cos</span>(<span class=\"hljs-built_in\">radians</span>(vinkel * hjorne)) * <span class=\"hljs-number\">200</span>,\n           <span class=\"hljs-number\">300</span> + <span class=\"hljs-built_in\">sin</span>(<span class=\"hljs-built_in\">radians</span>(vinkel * hjorne)) * <span class=\"hljs-number\">200</span>);\n  }\n  <span class=\"hljs-built_in\">endShape</span>(CLOSE);\n}\n</code></pre>\n<p>Her har vi noen nye utregninger inne i kallet på <code>vertex</code>. Her\nbruker vi tre nye funksjoner <code>cos</code> og <code>sin</code> som har blitt forklart\n<a href=\"#sinus-og-cosinus\">lenger opp</a>, og <code>radians</code> som regner grader om til radianer, en\nannen måleenhet for vinkler.</p>\n<p>I dataprogrammer bruker sinus og cosinus vanligvis radianer, så om vi vil jobbe med vinkler i grader,\nmå vi gjør denne konverteringen. Du ser at vi har med en variabel\nfor vinkelen mellom hvert punkt og denne har vi beregnet i grader ut\nfra at en sirkel er 360°.</p>\n<p>Til slutt forteller <code>CLOSE</code> i <code>endShape</code> at siste kant i figuren skal settes sammen med første kant, altså at figures lukkes og fylles.</p>\n</li>\n</ul>\n<figure><img src=\"" + __webpack_require__(/*! ./Femkant.png */ 832) + "\" alt=\"\" title=\"Vinkelen mellom to nabohjørner og sentrum i en femkant er 360° / 5 = 72°.\" /></figure>\n<ul>\n<li>\n<figure>Hva er tallet <code>200</code> her? Hva skjer om du endrer det til noe annet?</figure>\n</li>\n<li>\n<figure>Hva med tallet <code>300</code>?</figure>\n</li>\n<li>\n<figure>Kan du få snudd på femkanten sånn at hjørnet som nå peker rett til\nhøyre, peker opp?</figure>\n</li>\n</ul>\n<figure><img src=\"" + __webpack_require__(/*! ./FemkantRotering.png */ 833) + "\" alt=\"\" title=\"Femkanten før og etter rotering.\" /></figure>\n<ul>\n<li>Hvis du har fått femkanten til å peke opp, kan du legge til en\nvariabel som du bruker til denne justeringen? Kan du bruke denne\nvariabelen til å få femkanten til å snurre?</li>\n</ul>\n<figure><img src=\"" + __webpack_require__(/*! ./FemkantSnurrer.gif */ 834) + "\" alt=\"\" title=\"Femkanten snurrer rundt.\" /></figure>\n<ul>\n<li>\n<p>Kan du styre hvilken vei femkanten peker med musa eller tastaturet?</p>\n</li>\n<li>\n<p>Hva skjer hvis du endrer <code>KANTER</code> til en annen verdi enn <code>5</code>?</p>\n</li>\n</ul>\n</section>\n<section class=\"activity\" id=\"regulaere-stjerner-1\">\n<h1 class=\"activity\" id=\"regulaere-stjerner-1\">Regulære stjerner 1</h1>\n<p>Regulære stjerner med et odde antall spisser kan tegnes nesten helt\nlikt som man tegner en regulær mangekant. De kan nesten sees på som en\nvariant av mangekanter. Hvis du har tegnet en femkantet stjerne før,\nhar du kanskje lagt merke til at dette likner på en femkant, men at du\nhopper over et hjørne når du tegner streken mellom to spisser.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./Pentagram.png */ 835) + "\" alt=\"\" title=\"Vinkelen mellom en spiss, sentrum og spissen etter nabospissen i en femkantet stjerne er 2 · 360° / 5 = 144°.\" /></figure>\n<ul>\n<li>\n<p>Siden vi skal hoppe over et hjørne hver gang vi tegner opp neste\nspiss, trenger vi å gange vinkelen med <code>2</code>. Endre derfor kallet på\n<code>vertex</code> til:</p>\n<pre><code class=\"language-processing\"><span class=\"hljs-built_in\">vertex</span>(<span class=\"hljs-number\">300</span> + <span class=\"hljs-built_in\">cos</span>(<span class=\"hljs-built_in\">radians</span>(vinkel * hjorne * <span class=\"hljs-number\">2</span>)) * <span class=\"hljs-number\">200</span>,\n       <span class=\"hljs-number\">300</span> + <span class=\"hljs-built_in\">sin</span>(<span class=\"hljs-built_in\">radians</span>(vinkel * hjorne * <span class=\"hljs-number\">2</span>)) * <span class=\"hljs-number\">200</span>);\n</code></pre>\n<p>Kunne du ganget med <code>2</code> et annet sted i koden og fått den samme\neffekten?</p>\n</li>\n<li>\n<p>Kan du tegne en syvkantet stjerne? Eller en nikantet stjerne?</p>\n</li>\n<li>\n<p>Hvis du har en stjerne med flere kanter enn fem, kan du gange med\nandre tall enn to og få andre varianter av mangekantede\nstjerner. Prøv forskjellige tall for syv-, ni- og ellevekantede\nstjerner. Hva skjer når du hopper over flere kanter enn halvparten\nav antallet spisser?</p>\n</li>\n</ul>\n</section>\n<section class=\"activity\" id=\"regulaere-stjerner-2\">\n<h1 class=\"activity\" id=\"regulaere-stjerner-2\">Regulære stjerner 2</h1>\n<p>Stjerner med et likt antall spisser, kan tegnes som to regulære\nmangekanter med halvparten så mange hjørner som stjernen har\nspisser.</p>\n<ul>\n<li>\n<figure>Fjern ganging med to om du nå tegner opp stjerner med odde antall\nspisser.</figure>\n</li>\n<li>\n<p>Lag en kopi av løkken som tegner opp mangekanten, med <code>beginShape();</code>\nog <code>endShape(CLOSE);</code>.</p>\n</li>\n<li>\n<p>I den nye løkken, endrer du <code>int hjorne = 0</code> til <code>int hjorne = 1</code>,\nslik at denne løkken tegner kantene mellom de odde hjørnene.</p>\n</li>\n<li>\n<p>Endre <code>hjorne++</code> til <code>hjorne += 2</code> sånn at vi bare tegner kanter\nmellom annenhvert hjørne.</p>\n</li>\n<li>\n<p>Pass på at <code>KANTER</code> settes til et partall som er minst <code>6</code>.</p>\n</li>\n</ul>\n<figure><img src=\"" + __webpack_require__(/*! ./Oktagram.png */ 836) + "\" alt=\"\" title=\"Vinkelen mellom en spiss, sentrum og spissen etter nabospissen i en åttekantet stjerne er 2 · 360° / 8 = 90°.\" /></figure>\n<section class=\"try\" id=\"utfordring\">\n<h2 class=\"try\" id=\"utfordring\">Utfordring</h2>\n<ul>\n<li>\n<p>Nå ser det nok ut som om det mangler noen streker i stjernen\ndin. Kan du få tegnet opp de siste kantene ved å tegne opp den første\nav de to mangekantene på nytt og bruke\n<a href=\"https://processing.org/reference/noFill_.html\"><code>noFill()</code></a>,\n<a href=\"https://processing.org/reference/noStroke_.html\"><code>noStroke()</code></a> og\n<a href=\"https://processing.org/reference/stroke_.html\"><code>stroke()</code></a>.</p>\n</li>\n<li>\n<p>Kan du tegne opp flere mangekanter eller stjerner på skjermen\nsamtidig? For eksempel en femkantet, en syvkantet og en nikantet\nstjerne som vist under?</p>\n</li>\n</ul>\n<figure><img src=\"" + __webpack_require__(/*! ./FlereStjerner.png */ 837) + "\" alt=\"\" title=\"Flere stjerner samtidig.\" /></figure>\n<ul>\n<li>Hvis stjernene dine ikke snurrer allerede, kan du få dem til å gjøre\ndet?</li>\n</ul>\n<figure><img src=\"" + __webpack_require__(/*! ./FlereStjernerSnurrer.gif */ 838) + "\" alt=\"\" title=\"Tre stjerner som snurrer.\" /></figure>\n</section>\n</section>\n";

/***/ },

/***/ 829:
/*!****************************************************************!*\
  !*** ../oppgaver/src/processing/trigonometri/SirkelRadius.png ***!
  \****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/processing/trigonometri/SirkelRadius.8a7605.png";

/***/ },

/***/ 830:
/*!****************************************************************************!*\
  !*** ../oppgaver/src/processing/trigonometri/RettvinkletTrekantSirkel.png ***!
  \****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/processing/trigonometri/RettvinkletTrekantSirkel.6dafbb.png";

/***/ },

/***/ 831:
/*!**********************************************************************!*\
  !*** ../oppgaver/src/processing/trigonometri/TrekantSiderSirkel.png ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/processing/trigonometri/TrekantSiderSirkel.e18848.png";

/***/ },

/***/ 832:
/*!***********************************************************!*\
  !*** ../oppgaver/src/processing/trigonometri/Femkant.png ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/processing/trigonometri/Femkant.9a0b39.png";

/***/ },

/***/ 833:
/*!*******************************************************************!*\
  !*** ../oppgaver/src/processing/trigonometri/FemkantRotering.png ***!
  \*******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/processing/trigonometri/FemkantRotering.68c5da.png";

/***/ },

/***/ 834:
/*!******************************************************************!*\
  !*** ../oppgaver/src/processing/trigonometri/FemkantSnurrer.gif ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/processing/trigonometri/FemkantSnurrer.37b801.gif";

/***/ },

/***/ 835:
/*!*************************************************************!*\
  !*** ../oppgaver/src/processing/trigonometri/Pentagram.png ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/processing/trigonometri/Pentagram.34321a.png";

/***/ },

/***/ 836:
/*!************************************************************!*\
  !*** ../oppgaver/src/processing/trigonometri/Oktagram.png ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/processing/trigonometri/Oktagram.298a59.png";

/***/ },

/***/ 837:
/*!*****************************************************************!*\
  !*** ../oppgaver/src/processing/trigonometri/FlereStjerner.png ***!
  \*****************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/processing/trigonometri/FlereStjerner.640536.png";

/***/ },

/***/ 838:
/*!************************************************************************!*\
  !*** ../oppgaver/src/processing/trigonometri/FlereStjernerSnurrer.gif ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/processing/trigonometri/FlereStjernerSnurrer.008528.gif";

/***/ }

});
//# sourceMappingURL=trigonometri.1c2c3eec5f599852f004.js.map