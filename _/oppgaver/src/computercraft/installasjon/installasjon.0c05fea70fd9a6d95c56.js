webpackJsonp([47,236],{

/***/ 481:
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/computercraft/installasjon/installasjon.md ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/computercraft/installasjon/installasjon.md */ 482),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/computercraft/installasjon/installasjon.md */ 483)}

/***/ },

/***/ 483:
/*!******************************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/computercraft/installasjon/installasjon.md ***!
  \******************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p><a href=\"http://www.computercraft.info/\">ComputerCraft</a> er en mod til\n<a href=\"https://minecraft.net/\">Minecraft</a>, som gir deg muligheten til å\nbygge og programmere <strong>datamaskiner</strong> og <strong>roboter</strong> inne i\nMinecraft-verdenen.</p>\n<figure><img src=\"" + __webpack_require__(/*! ../introduksjon_til_computercraft/introduksjon_til_computercraft.png */ 484) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"installering-av-computercraft\">\n<h1 class=\"activity\" id=\"installering-av-computercraft\">Installering av ComputerCraft</h1>\n<p>ComputerCraft er en mod til Minecraft, og krever derfor at Minecraft\nallerede er installert på datamaskinen. Vi antar at du er kjent med og\nhar installert Minecraft.</p>\n<p>ComputerCraft er typisk ikke tilgjengelig for siste versjon av\nMinecraft. Legg derfor merke til hvilken versjon av Minecraft som\nkreves (i eksemplene nedenfor kreves versjon 1.8.9, men dette kan\nendre seg), og pass på at du installerer riktig versjon av Forge.</p>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Gå til\n<a href=\"http://www.computercraft.info/download/\">computercraft.info/download</a>.\nBla nedover på siden til du finner et avsnitt som heter <strong>Download\nand installing</strong>. Last ned ComputerCraft til datamaskinen din, og\nnoter deg hvilken versjon av Minecraft denne er kompatibel med (for\neksempel versjon 1.8.9). <em>Ikke</em> prøv å kjør filen, vi skal kopiere\nden til riktig sted litt senere.</p>\n<figure><a href=\"http://www.computercraft.info/download/\"><img src=\"" + __webpack_require__(/*! ./last_ned_computercraft.png */ 485) + "\" alt=\"\" /></a></figure>\n</li>\n<li>\n<p>Start <strong>Minecraft Launcher</strong>. Sjekk om du har den riktige versjonen\nav Minecraft tilgjengelig. Hvis ikke kan du velge <code>New Profile</code> og i\nnedtrekksmenyen <code>Use Version</code> velger du riktig versjon. Gi profilen\net navn (for eksempel versjonsnummeret) og klikk <code>Save Profile</code>. Klikk <code>Play</code> slik at denne versjonen blir lastet ned og\nstartet opp. Avslutt spillet.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./minecraft_versjon.png */ 486) + "\" alt=\"\" /> <!-- Venstrejuster bildet --></figure>\n</li>\n<li>\n<p>Før vi kan legge inn ComputerCraft må vi installere <strong>Minecraft\nForge</strong>, som gir oss tilgang til å legge inn Mods. Gå til\n<a href=\"http://files.minecraftforge.net/\">files.minecraftforge.net</a> og velg\nden riktige Minecraft-versjonen i menyen som heter <strong>Minecraft\nVersions</strong> midt på skjermen. Pass på at riktig versjonsnummer vises\nunder tittelen på toppen av skjermen.</p>\n<figure><a href=\"http://files.minecraftforge.net/\"><img src=\"" + __webpack_require__(/*! ./minecraft_forge_a.png */ 487) + "\" alt=\"\" /></a></figure>\n<p>I boksen <strong>Download Recommended</strong> velger du <code>Installer</code>. Du kommer\nnå til en reklameside. <strong>Vent</strong> til nedtellingen øverst til høyre er\nferdig. Klikk <strong>deretter</strong> på <code>Skip</code> og nedlastingen av en fil\nstarter.</p>\n<figure><a href=\"http://files.minecraftforge.net/\"><img src=\"" + __webpack_require__(/*! ./minecraft_forge_b.png */ 488) + "\" alt=\"\" /></a></figure>\n</li>\n<li>\n<p>Kjør filen som ble lastet ned ved å dobbelklikke på den (om du blir\nspurt hvordan den skal kjøres kan du velge Java eller JDK). Velg\n<code>Install client</code> og klikk <code>OK</code>.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./installer_forge.png */ 489) + "\" alt=\"\" /> <!-- Venstrejuster bildet --></figure>\n</li>\n<li>\n<p>Start <strong>Minecraft Launcher</strong>. Det har nå dukket opp en ny profil som\nheter <code>Forge</code>. Velg denne og start spillet. Dette vil lage en\n<code>mods</code>-katalog i <code>Minecraft</code>-katalogen din. Du vil også se at det\nhar dukket opp et nytt valg i hovedmenyen: <code>Mods</code>. Avslutt spillet\nigjen.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./start_forge.png */ 490) + "\" alt=\"\" /> <!-- Venstrejuster bildet --></figure>\n</li>\n<li>\n<p>Finn <code>Minecraft</code>-katalogen din ved å starte <strong>Minecraft\nLauncher</strong>. Velg deretter <code>Edit Profile</code> og klikk knappen <code>Open Game Dir</code>. Dette åpner en filutforsker. Velg katalogen <code>mods</code>, og kopier\n<strong>ComputerCraft</strong>-filen vi lastet ned helt først inn i\n<code>mods</code>-katalogen. Klikk <code>Cancel</code> i <code>Edit Profile</code>-vinduet.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./minecraft_katalog.png */ 491) + "\" alt=\"\" /> <!-- Venstrejuster bildet --></figure>\n</li>\n<li>\n<p>Nå er vi ferdige. I <strong>Minecraft Launcher</strong> kan du nå velge\nprofilen <code>Forge</code> og klikke <code>Play</code>. Når du klikker <code>Mods</code> fra\nhovedmenyen skal du se at <strong>ComputerCraft</strong> er en av de tilgjengelige\nmods'ene.</p>\n</li>\n</ul>\n</section>\n<section class=\"tip\" id=\"minecraftkatalogen\">\n<h2 class=\"tip\" id=\"minecraftkatalogen\">Minecraftkatalogen</h2>\n<p>Minecraftkatalogen er nyttig å kjenne til. Som nevnt over kan du finne\nden ved å klikke <code>Open Game Dir</code> fra <code>Edit Profile</code>-vinduet.\nAlternativt kan du hente den frem selv som følger:</p>\n<p><strong>Windows</strong>: Under Windows finner du <code>Minecraft</code>-katalogen under\n<code>%appdata%\\.minecraft</code>. Søk etter <code>%appdata%</code> i en utforsker eller i\nkjør-feltet etter å ha klikket start-knappen.</p>\n<p><strong>Mac OS X</strong>: Under Mac ligger <code>Minecraft</code>-katalogen i\n<code>Library/Application Support/minecraft/</code> under hjemmekatalogen din. På\nnorsk heter <code>Library</code> <code>Bibliotek</code>.</p>\n<p><strong>Linux</strong>: På Linux finner du <code>Minecraft</code>-katalogen som en skjult\nkatalog <code>.minecraft</code> rett under hjemmekatalogen din.</p>\n</section>\n</section>\n<section class=\"activity\" id=\"kom-i-gang\">\n<h1 class=\"activity\" id=\"kom-i-gang\">Kom i gang</h1>\n<p>Vi er nå klare til å slå oss opp som programmerere i\nMinecraft-verdenen. Mens vi utforsker datamaskinene er det enklest med\net rolig og enkelt spill:</p>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Velg <code>Singleplayer</code>, og klikk <code>Create New World</code>.</p>\n</li>\n<li>\n<p>Gi verdenen din et navn, og sett <code>Game Mode</code> til <code>Creative</code>. Klikk\n<code>Create New World</code>.</p>\n</li>\n<li>\n<p>Du kan nå lage din første datamaskin.  Trykk <code>E</code> for å gå til\nInventory-listen. Øverst kan du nå velge å klikke <code>&gt;</code> for å gå til\nneste side. Trykk deretter på datamaskin-symbolet (en grå\nkloss/skjerm), og gi deg selv en <strong>Advanced Computer</strong>.</p>\n</li>\n<li>\n<p>Sett ut en <strong>Advanced Computer</strong> ved å høyre-klikke. Høyre-klikk så\nen gang til på datamaskinen du nettopp satte ut. En svart skjerm\nskal dukke opp, med teksten <code>CraftOS</code> og et versjonsnummer i øverste\nlinje. Skriv <code>help</code> og trykk <strong>enter</strong> for å komme igang.</p>\n</li>\n</ul>\n<p>Gratulerer! Du har startet en datamaskin inne i Minecraft-verdenen. På\n<a href=\"http://kodeklubben.github.io/computercraft/\">kodeklubben.github.io</a>\nfinner du oppgaver som viser deg hvordan du kan programmere den og\nandre datamaskiner og roboter i ComputerCraft. Lykke til!</p>\n</section>\n</section>\n";

/***/ },

/***/ 484:
/*!*******************************************************************************************************!*\
  !*** ../oppgaver/src/computercraft/introduksjon_til_computercraft/introduksjon_til_computercraft.png ***!
  \*******************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/introduksjon_til_computercraft/introduksjon_til_computercraft.8636fd.png";

/***/ },

/***/ 485:
/*!*****************************************************************************!*\
  !*** ../oppgaver/src/computercraft/installasjon/last_ned_computercraft.png ***!
  \*****************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/installasjon/last_ned_computercraft.d45bd0.png";

/***/ },

/***/ 486:
/*!************************************************************************!*\
  !*** ../oppgaver/src/computercraft/installasjon/minecraft_versjon.png ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/installasjon/minecraft_versjon.b766d0.png";

/***/ },

/***/ 487:
/*!************************************************************************!*\
  !*** ../oppgaver/src/computercraft/installasjon/minecraft_forge_a.png ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/installasjon/minecraft_forge_a.c4f90b.png";

/***/ },

/***/ 488:
/*!************************************************************************!*\
  !*** ../oppgaver/src/computercraft/installasjon/minecraft_forge_b.png ***!
  \************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/installasjon/minecraft_forge_b.7e2ad2.png";

/***/ },

/***/ 489:
/*!**********************************************************************!*\
  !*** ../oppgaver/src/computercraft/installasjon/installer_forge.png ***!
  \**********************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/installasjon/installer_forge.947fa0.png";

/***/ },

/***/ 490:
/*!******************************************************************!*\
  !*** ../oppgaver/src/computercraft/installasjon/start_forge.png ***!
  \******************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/computercraft/installasjon/start_forge.4e24ec.png";

/***/ },

/***/ 491:
/*!************************************************************************!*\
  !*** ../oppgaver/src/computercraft/installasjon/minecraft_katalog.png ***!
  \************************************************************************/
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,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"

/***/ }

});
//# sourceMappingURL=installasjon.0c05fea70fd9a6d95c56.js.map