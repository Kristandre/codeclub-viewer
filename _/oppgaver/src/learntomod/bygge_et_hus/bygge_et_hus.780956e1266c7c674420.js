webpackJsonp([65,236],{

/***/ 655:
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/learntomod/bygge_et_hus/bygge_et_hus.md ***!
  \******************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/learntomod/bygge_et_hus/bygge_et_hus.md */ 656),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/learntomod/bygge_et_hus/bygge_et_hus.md */ 657)}

/***/ },

/***/ 657:
/*!***************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/learntomod/bygge_et_hus/bygge_et_hus.md ***!
  \***************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>Du må ha et hus så du kan bo i stil!\nLa oss kode en modd som bygger et hus med vegger og tak, flere etasjer,\nvinduer, dører og trapp mellom hver etasje.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./intro.png */ 658) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"steg-1-vegger\">\n<h1 class=\"activity\" id=\"steg-1-vegger\">Steg 1: Vegger</h1>\n<p>Først skal du kode modden så den bygger fire vegger.</p>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Lag en modd som bygger fire vegger:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image1.png */ 659) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet\">\n<h2 class=\"flag\" id=\"test-prosjektet\">Test prosjektet</h2>\n<p>Da kan du teste modden i Minecraft og se om den bygger 4 vegger.</p>\n<p>Som du kan se så bygger du med materialet som har ID kode ‘155:2’ for å\nbygge med ‘Chiseled Quartz Block’. Siden LTM ikke har absolutt alle\nmaterialene som er i Minecraft som ferdige klosser så kan du gå til denne siden:\n<a href=\"http://www.minecraftinfo.com/idlist.htm\"><em>http://www.minecraftinfo.com/idlist.htm</em></a>\nfor å finne ID koden for det materialet du vil bygge med.</p>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-plass-til-dorer\">\n<h1 class=\"activity\" id=\"steg-2-plass-til-dorer\">Steg 2: Plass til dører</h1>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Nå må du bestemme hvor du vil ha dører og vinduer, det kan være lurt å\ntegne opp en vegg på et ruteark og markere hvor du vil ha dør, vinduer\nog i hvilke etasjer du vil ha gulv.</p>\n<p>Du skal legge inn en if-test i den innerste løkken som bygger med\nriktig materiale i hver posisjon. Det er lurt å begynne if-testen med\ndet materialet som er du skal ha minst av. Denne if-testen kan bli\nganske stor etter hvert, så vi lager en egen funksjon som vi kaller\nvelgmateriale.</p>\n<p>La oss først bestemme hvor dørene skal være. Det som er spesiellt med\ndører er at de må bygges etter at det som er rundt dem er bygd, så vi\nlar de posisjonene være tomme i første omgang. Så setter vi inn dører\nder senere i programmet.</p>\n<p>Jeg vil ha en dør i X posisjon 8-9 og Y posisjon 1-2, da blir funksjonen min sånn:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image2.png */ 660) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Du må også huske å kalle funksjonen fra den innerste løkken i vegger funksjonen:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image3.png */ 661) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-2\">\n<h2 class=\"flag\" id=\"test-prosjektet-2\">Test prosjektet</h2>\n<p>Da kan du teste modden!</p>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-vinduer\">\n<h1 class=\"activity\" id=\"steg-3-vinduer\">Steg 3: Vinduer</h1>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Nå kan du utvide if-testen sånn at den bygger vinduer der du vil ha dem.\nJeg vil ha vinduer i Y posisjon 2, 6, 10 og 14, men ikke i hjørnene av\nhver vegg (X posisjon 1). Da blir min funksjon sånn:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image4.png */ 662) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-tak-dorer-gulv-og-trapper\">\n<h1 class=\"activity\" id=\"steg-4-tak-dorer-gulv-og-trapper\">Steg 4: Tak, dører, gulv og trapper</h1>\n<figure>Nå skal vi bygge tak på huset, la oss prøve noen forskjellige typer tak\nfør du velger den du liker best.</figure>\n<p>Når du bygger tak skal du du bruke noen funksjoner som finnes i ScriptCraft\nsom gjør at du trenger å kode veldig lite. Learn To Mod er bygd på ScriptCraft\nså alt du kan gjøre med ScriptCraft kan du få til i Learn To Mod.\nFor å se alle mulighetene som finnes kan du gå til denne siden:\n<a href=\"https://github.com/walterhiggins/ScriptCraft/blob/master/docs/API-Reference.md\">ScriptCraft API Referanse</a></p>\n<p>Hvis du vil lære mer om hvordan du kan programmere i Javascript med ScriptCraft\nkan du gå til denne siden:\n<a href=\"https://github.com/walterhiggins/ScriptCraft/blob/master/docs/YoungPersonsGuideToProgrammingMinecraft.md#the-young-persons-guide-to-programming-in-minecraft\">The young persons guide to programming in Minecraft</a></p>\n<section class=\"check\" id=\"sjekkliste-4\">\n<h2 class=\"check\" id=\"sjekkliste-4\">Sjekkliste</h2>\n<ul>\n<li>\n<figure>Du skal bruke en drone funksjon som heter prism for å bygge et skråtak.\nLag en funksjon som heter tak1 og legg inn følgende kode:</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./image5.png */ 663) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Husk også å legge inn kall til tak1 funksjonen på slutten av main funksjonen.</p>\n</li>\n<li>\n<p>Nå kan du teste modden i Minecraft, taket mitt ser sånn ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image6.png */ 664) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Hvis du ser inni huset så ser du at taket er flatt på innsiden, hvis du\nbruker prism0 (tallet null tilslutt) funksjonen så får du et tak som er\nhult på innsiden, prøv det og se hva du liker best.</p>\n</li>\n<li>\n<p>Hvis du vil se hvordan huset blir med et flatt tak kan du prøve det som står i dette punktet.\nDet flate taket skal stikke en kloss utenfor huset på hver side.\nSiden huset vårt er 16 klosser i bredde og dypde må taket da bli 18 x 18 klosser.\nDu kan programmere denne «manuellt» ved å lage en sånn funksjon:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image7.png */ 665) + "\" alt=\"\" /></figure>\n<figure>Eller du kan utnytte en ScriptCraft funksjon som heter box og lage en\nenklere funksjon som gjør akkurat det samme:</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./image8.png */ 666) + "\" alt=\"\" /></figure>\n<p>Det kan lønne seg å lære kode som andre har laget!</p>\n</li>\n<li>\n<p>La oss bygge gulv. Nå som du har lært box funksjonen så bruker du den\ntil å lage gulv på bakken og på 4, 8 og 12 posisjon i høyden. Innsiden\nav huset vårt er 14x14 klosser og vi bygger med glowstone så det blir\nlyst også om natten (husk å legge inn kall til gulv funksjonen til slutt\ni main funksjonen):</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image9.png */ 667) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Hm det fungerte for så vidt, men vi trenger hull i gulvene så vi kan\nbygge trapp mellom hver etasje. La oss bygge en funksjon som lager hull\ni hver etasje:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image10.png */ 668) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>La oss bygge en trapp mellom hver etasje, ScriptCraft har en funksjon\nfor å bygge trapper, men den fungerer dessverre ikke på LTM så vi må\nbygge trappen litt mer manuellt. Koden du skal lime inn i Javascript klossen er:</p>\n<p><code>tr.box(blocks.stairs.quartz + &quot;:&quot; + Drone.PLAYER\\_STAIRS\\_FACING\\[tr.dir\\]);</code></p>\n<p>Funksjonen skal se sånn ut:</p>\n<figure><img src=\"" + __webpack_require__(/*! ./image11.png */ 669) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<figure>La oss sette inn fire dører, du skal bruke en ScriptCraft funksjon som\nheter door2 som lager en dobbeltdør:</figure>\n<figure><img src=\"" + __webpack_require__(/*! ./image12.png */ 670) + "\" alt=\"\" /></figure>\n<p>Hvis du heller vil ha en jerndør så bruker du door2_iron funksjonen isteden.\nHvis du bruker jerndører så må du også legge til en knapp eller noe annet\nsom kan åpne døren.</p>\n</li>\n<li>\n<p>Husk å legge inn kall til trapp og dør funksjonene til slutt i main funksjonen.</p>\n</li>\n</ul>\n</section>\n<section class=\"flag\" id=\"test-prosjektet-3\">\n<h2 class=\"flag\" id=\"test-prosjektet-3\">Test prosjektet</h2>\n<p>Nå kan du teste modden din i Minecraft! Trykk på den grønne <strong>Mod</strong> knappen\nøverst og gå til Minecraft og kjør modden din!</p>\n<p>Hvis den ikke fungerer så må du rette opp litt i modden, det er helt vanlig.</p>\n</section>\n<section class=\"challenge\" id=\"utfordring-innredning-i-alle-etasjene\">\n<h2 class=\"challenge\" id=\"utfordring-innredning-i-alle-etasjene\">Utfordring: Innredning i alle etasjene</h2>\n<p>Når du går inn i huset ditt så ser du at alle etasjene mangler innredning.\nDin utfordring er å lage innredning i alle etasjene. En mulighet er å lage en funksjon som lager\nen type innredning og teste den i Minecraft. Hvis du vil ha forskjellig innredning i hver etasje\nså kan du enten lage flere forskjellige funksjoner (f.eks. innredning1, innredning2 osv.) eller\ndu kan lage en liste med de tingene du vil ha som innredning og velge tilfeldige rader fra den listen\netterhvert som du styrer dronen din rundt i hver etasje. Lykke til!</p>\n</section>\n</section>\n";

/***/ },

/***/ 658:
/*!*********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/intro.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/intro.12c6cc.png";

/***/ },

/***/ 659:
/*!**********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image1.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image1.83f24a.png";

/***/ },

/***/ 660:
/*!**********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image2.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image2.9e0731.png";

/***/ },

/***/ 661:
/*!**********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image3.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image3.abdb69.png";

/***/ },

/***/ 662:
/*!**********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image4.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image4.c6ab3b.png";

/***/ },

/***/ 663:
/*!**********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image5.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image5.d21a9d.png";

/***/ },

/***/ 664:
/*!**********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image6.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image6.f06998.png";

/***/ },

/***/ 665:
/*!**********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image7.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image7.5d8aa1.png";

/***/ },

/***/ 666:
/*!**********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image8.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image8.c80628.png";

/***/ },

/***/ 667:
/*!**********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image9.png ***!
  \**********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image9.ca383a.png";

/***/ },

/***/ 668:
/*!***********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image10.png ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image10.4a1948.png";

/***/ },

/***/ 669:
/*!***********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image11.png ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image11.d41212.png";

/***/ },

/***/ 670:
/*!***********************************************************!*\
  !*** ../oppgaver/src/learntomod/bygge_et_hus/image12.png ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/learntomod/bygge_et_hus/image12.4edd48.png";

/***/ }

});
//# sourceMappingURL=bygge_et_hus.780956e1266c7c674420.js.map