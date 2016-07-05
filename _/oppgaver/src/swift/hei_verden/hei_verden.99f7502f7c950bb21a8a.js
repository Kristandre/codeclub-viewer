webpackJsonp([214,236],{

/***/ 1486:
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./~/combine-loader/lib?{"frontmatter":["json","front-matter?onlyAttributes"],"content":["html","markdown-it","front-matter?onlyBody"]}!../oppgaver/src/swift/hei_verden/hei_verden.md ***!
  \*********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {"frontmatter": __webpack_require__(/*! -!json!front-matter?onlyAttributes!../oppgaver/src/swift/hei_verden/hei_verden.md */ 1487),"content": __webpack_require__(/*! -!html!markdown-it!front-matter?onlyBody!../oppgaver/src/swift/hei_verden/hei_verden.md */ 1488)}

/***/ },

/***/ 1488:
/*!******************************************************************************************************************************!*\
  !*** ./~/html-loader!./~/markdown-it-loader!./~/front-matter-loader?onlyBody!../oppgaver/src/swift/hei_verden/hei_verden.md ***!
  \******************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<section class=\"intro\" id=\"introduksjon\">\n<h1 class=\"intro\" id=\"introduksjon\">Introduksjon</h1>\n<p>Swift er et programmeringsspråk laget av Apple og er etterfølgeren til Objective-C. Med Swift kan du lage apper for iOS og OSX. For å gjennomføre dette kurset trenger du en Mac, og helst en iPhone/iPad/iPod å teste ut appen på :)</p>\n<p>I dag skal vi lage vår første app, nemlig en Hei Verden-app! Det er en kjent og kjær tradisjon at det første programmet man skriver i et nytt programmeringsspråk skriver &quot;Hei Verden!&quot; til skjermen.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./hei_verden.png */ 1489) + "\" alt=\"\" /></figure>\n</section>\n<section class=\"activity\" id=\"steg-1-sette-opp-xcode\">\n<h1 class=\"activity\" id=\"steg-1-sette-opp-xcode\">Steg 1: Sette opp Xcode</h1>\n<p>Xcode er Apples utviklingsverktøy, og vi skal bruke det til å skrive appen. Last ned nyeste versjon Xcode fra Mac App Store, og sørg for at du har en Apple-ID (merk. dette programmet er gratis). Vi skal starte med å sette opp et nytt prosjekt.</p>\n<section class=\"protip\" id=\"xcode-7-beta-vs-xcode-6\">\n<h2 class=\"protip\" id=\"xcode-7-beta-vs-xcode-6\">Xcode 7 Beta vs Xcode 6</h2>\n<p>I denne øvelsen er skjermbildene og instruksjonene for Xcode 7 beta, men det skal fungere helt likt på Xcode 6.</p>\n</section>\n<section class=\"check\" id=\"sjekkliste\">\n<h2 class=\"check\" id=\"sjekkliste\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Åpne Xcode ved å holde <code>cmd + mellomrom</code> og søk etter <strong>Xcode</strong>. Alternativt kan du søke etter Xcode med forstørrelsesglass-ikonet øverst i høyre hjørne.</p>\n</li>\n<li>\n<p>Du blir møtt med et vindu som lar deg gjøre en rekke ting. Du kan enten starte et nytt prosjekt, leke deg rundt i <strong>Playground</strong> eller se på og endre et eksisterende prosjekt.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./intro_skjerm.png */ 1490) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Trykk på <strong>Create a New Xcode project</strong>.</p>\n</li>\n<li>\n<p>En ny skjerm skal vises som lar deg velge et rammeverk for appen. Vi skal velge <strong>Single View Application</strong>, som gir oss et bra utgangspunkt for vår egen Hei Verden-app siden denne trenger bare ett skjermbilde.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./lag_prosjekt.png */ 1491) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Trykker du på <strong>Next</strong> blir du tatt til en skjerm hvor du må fylle inn litt informasjon. I <strong>Product Name</strong> kan du navngi appen din (vi skal kalle vår <em>Hei Verden!</em>). <strong>Organization Name</strong> og <strong>Organization Identifier</strong> er det ikke så viktig med nå, du kan bare la den være som den er :) <strong>Language</strong> skal settes til Swift, mens <strong>Devices</strong> skal settes til iPhone.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./app_informasjon.png */ 1492) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<p>Lagre applikasjonen ved å trykke <strong>next</strong>, og deretter <strong>create</strong> (hvor du velger hvor prosjektet lagres).</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-2-tekst-pa-skjermen-ved-bruk-av-en-tekstetikett\">\n<h1 class=\"activity\" id=\"steg-2-tekst-pa-skjermen-ved-bruk-av-en-tekstetikett\">Steg 2: Tekst på skjermen ved bruk av en tekstetikett</h1>\n<figure>Vi skal nå legge til en tekstetikett for å så endre teksten i <code>Main.storyboard</code>.</figure>\n<section class=\"check\" id=\"sjekkliste-2\">\n<h2 class=\"check\" id=\"sjekkliste-2\">Sjekkliste</h2>\n<ul>\n<li>\n<figure>Trykk på <code>Main.storyboard</code> på venstre side av skjermen.</figure>\n</li>\n<li>\n<figure>Zoom ut til du ser en firkantet skjerm. Dette representerer skjermen til enheten. Nederst i høyre hjørne av Xcode skal det være en boks, med fire kanpper på øverste rad. Vi skal velge det tredje ikonet, som ligner en hjemknapp. Nede i boksen vil det være et søkefelt. Der skal vi søke etter <code>Label</code>.</figure>\n</li>\n<li>\n<p>Dra en <code>Label</code> til <code>Main.storyboard</code>, og legg den helt øverst i venstre hjørne av det store kvadratet. Du må muligens dobbeltklikke på <code>Main.storyboard</code> før du får lov til å dra <code>Label</code> dit. Dobbeltklikk på <code>Label</code>, da dette lar oss endre teksten. Som tradisjonsrike skriver vi <em>Hei verden!</em>, men det er helt opp til deg hva du vil skrive! :)</p>\n<figure><img src=\"" + __webpack_require__(/*! ./drag_label.png */ 1493) + "\" alt=\"\" /></figure>\n</li>\n<li>\n<figure>Nå skal vi kjøre appen for å teste at alt fungerer. Vi gjør dette ved å trykke på den svarte pilen (playknappen) øverst i venstre hjørne. Alternativt kan du trykke <code>cmd + r</code>.</figure>\n</li>\n<li>\n<p>Det skal nå kjøres en simulator, og teksten <em>Hei verden!</em> skal dukke opp.</p>\n</li>\n</ul>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-3-fa-en-knapp-til-a-skrive-noe-til-skjermen\">\n<h1 class=\"activity\" id=\"steg-3-fa-en-knapp-til-a-skrive-noe-til-skjermen\">Steg 3: Få en knapp til å skrive noe til skjermen</h1>\n<figure>Vi skal nå sørge for at ved å trykke på en knapp, vil <code>Label</code> endre seg. For å kunne følge med på denne delen av kurset er det anbefalt med noe tidligere kunnskap om grunnleggende programmering.</figure>\n<section class=\"check\" id=\"sjekkliste-3\">\n<h2 class=\"check\" id=\"sjekkliste-3\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Om du vil spare på den første appen du lagde kan du gjerne lage et nytt Xcode-prosjekt før du går videre. Gjenta i såfall stegene 1 og 2 og sjekk at alt fungerer som det skal.</p>\n</li>\n<li>\n<p>I tillegg til å dra inn en <code>Label</code> i <code>Main.Storyboard</code>, skal vi legge til en <code>Button</code>. En <code>Button</code> kan vi trykke på og kjøre kode knyttet til knappen. Du legger til en <code>Button</code> på samme måte som du gjorde med <code>Label</code>.</p>\n</li>\n<li>\n<p>Ha <code>Main.Storyboard</code> i Xcode vinduet valgt, og trykk på de to sirklene øverst i høyre hjørne i Xcode. Vinduet som dukker opp til venstre viser koden knyttet til en <code>ViewController</code>, som er den som kontrollerer hvordan app-skjermen oppfører seg. Det er her selve kodingen foregår.</p>\n</li>\n<li>\n<p>Venstreklikk på <code>Button</code> i <code>Main.Storyboard</code>. Hold <strong>ctrl</strong> nede mens du venstreklikker og dra mot høyre. Dra streken til linjen over der det står <code>override func didReceiveMemoryWarning()</code>. Endre <code>Connection</code> til å være en <code>Action</code>, og gi den navnet <code>knapp</code>.</p>\n</li>\n<li>\n<p>Venstreklikk på <code>Label</code> i <code>Main.Storyboard</code>. Hold <strong>ctrl</strong> nede, venstreklikk og dra streken til mellom <code>override func viewDidLoad()</code> og <code>class ViewController: UIViewController {</code>. <code>Connection</code> lar du være <code>Outlet</code>, og sett navn til <code>etikett</code>.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./label_connection.png */ 1494) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"protip\" id=\"slippe-streken-pa-riktig-sted-i-koden\">\n<h2 class=\"protip\" id=\"slippe-streken-pa-riktig-sted-i-koden\">Slippe streken på riktig sted i koden</h2>\n<figure>Det er viktig å slippe strekene eksakt som det står i de to stegene over! Disse kobler elementene i <code>Main.storyboard</code> til koden din.</figure>\n</section>\n<section class=\"check\" id=\"sjekkliste-4\">\n<h2 class=\"check\" id=\"sjekkliste-4\">Sjekkliste</h2>\n<ul>\n<li>\n<p>Vi skal nå begynne å kode litt! Det er anbefalt med noe tidligere programmeringserfaring her.</p>\n</li>\n<li>\n<p>Vi har nå laget to såkalte <code>Connections</code>. Den ene er <code>@IBOutlet weak var etikett: UILabel!</code>, som refererer til <code>Label</code> i <code>Main.Storyboard</code>. Den andre er <code>@IBAction func knapp(sender: AnyObject) { }</code></p>\n</li>\n<li>\n<p>Tanken er at et klikk på knappen skal endre teksten til <code>Label</code>. Variabelen <code>etikett</code> er koblet til <code>Label</code>. Vi kan derfor få teksten til å endre seg ved å skrive</p>\n<pre><code>etikett<span class=\"hljs-class\">.text</span> = <span class=\"hljs-string\">\"Knappen sier: Hei!\"</span>\n</code></pre>\n<p>mellom <code>{</code> og <code>}</code> der du slapp knappen i koden (<code>func knapp</code>).</p>\n</li>\n<li>\n<figure>Kjør appen som du lærte i Steg 2 ved å enten klikke på den svarte pilen øverst i hjørnet eller trykke <code>cmd + r</code>.</figure>\n</li>\n<li>\n<p>Klikk på knappen og observer hva som skjer! Endret <code>Label</code> seg til teksten du skrev i <code>etikett.text = &quot;Knappen sier: Hei!&quot;</code>? Hvis etiketten ikke viser hele <code>Knappen sier: Hei!&quot;</code>, må du endre størrelsen på <code>Label</code>. Klarer du å gjøre det selv?</p>\n<figure><img src=\"" + __webpack_require__(/*! ./change_label.png */ 1495) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"try\" id=\"utfordring-variabler\">\n<h2 class=\"try\" id=\"utfordring-variabler\">Utfordring - Variabler</h2>\n<p>Prøv å definer en variabel nedenfor <code>@IBOutlet weak var etikett: UILabel!</code>, og sett den til å være ditt navn. Klarer du å få <code>Label</code> til å vise verdien av variabelen ved å endre <code>etikett.text</code>?</p>\n</section>\n</section>\n<section class=\"activity\" id=\"steg-4-fa-input-fra-tekstfelt\">\n<h1 class=\"activity\" id=\"steg-4-fa-input-fra-tekstfelt\">Steg 4: Få input fra tekstfelt</h1>\n<figure>Nå skal vi legge inn et tekstfelt i appen, så vi kan ta det brukeren skriver i tekstfeltet og vise det i <code>Label</code>.</figure>\n<section class=\"check\" id=\"sjekkliste-5\">\n<h2 class=\"check\" id=\"sjekkliste-5\">Sjekkliste</h2>\n<ul>\n<li>\n<p>I dette steget kan du godt fortsette på appen vi jobbet med i Steg 3. Å implementere tekstfeltfunksjonalitet er veldig likt som i steget over.</p>\n</li>\n<li>\n<p>Begynn med å søke etter <code>Text Field</code> på samme sted hvor du har søkt etter <code>Label</code>og <code>Button</code>. Dra så <code>Text Field</code> inn i <code>Main.Storyboard</code>.</p>\n</li>\n<li>\n<p>Lag en <code>Connection</code> som du gjorde i Steg 3 og opprett den på linjen under <code>@IBOutlet weak var etikett: UILabel!</code>. Det eneste du skal endre er navnet på tekstfeltet. Bruk <code>tekstfelt</code>.</p>\n</li>\n<li>\n<p>I <code>@IBAction func knapp(sender: AnyObject) { }</code> kan du bytte ut <code>etikett.text = &quot;Knappen sier: Hei!&quot;</code> med <code>etikett.text = tekstfelt.text</code>. Det brukeren skriver i inn i tekstfeltet er tilgjengelig i <code>text</code>-egenskapen til tekstfeltet, og vi henter ut denne informasjonen når vi trykker på knappen.</p>\n<figure><img src=\"" + __webpack_require__(/*! ./textfield_input.png */ 1496) + "\" alt=\"\" /></figure>\n</li>\n</ul>\n</section>\n<section class=\"try\" id=\"utfordring-kan-du-lage-din-egen-versjon\">\n<h2 class=\"try\" id=\"utfordring-kan-du-lage-din-egen-versjon\">Utfordring - Kan du lage din egen versjon?</h2>\n<p>Nå som du har lært det grunnleggende, hvorfor ikke lage en app som har flere knapper og tekstfelt? Kanskje du kan få den til å fortelle en morsom historie basert på ord brukeren skriver inn? Vis gjerne appen til bekjente og be om tilbakemeldinger!</p>\n</section>\n<section class=\"protip\" id=\"noen-sporsmal\">\n<h2 class=\"protip\" id=\"noen-sporsmal\">Noen spørsmål?</h2>\n<p>Har du noen spørsmål angående Xcode, Swift eller ris/ros for dette kurset, send meg gjerne en mail til andreas.amundsen123@gmail.com!</p>\n<p>Jeg tar gjerne i mot tips til ideer til fremtidige kurs!</p>\n</section>\n</section>\n";

/***/ },

/***/ 1489:
/*!*******************************************************!*\
  !*** ../oppgaver/src/swift/hei_verden/hei_verden.png ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/swift/hei_verden/hei_verden.00aa23.png";

/***/ },

/***/ 1490:
/*!*********************************************************!*\
  !*** ../oppgaver/src/swift/hei_verden/intro_skjerm.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/swift/hei_verden/intro_skjerm.0f00eb.png";

/***/ },

/***/ 1491:
/*!*********************************************************!*\
  !*** ../oppgaver/src/swift/hei_verden/lag_prosjekt.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/swift/hei_verden/lag_prosjekt.8024f9.png";

/***/ },

/***/ 1492:
/*!************************************************************!*\
  !*** ../oppgaver/src/swift/hei_verden/app_informasjon.png ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/swift/hei_verden/app_informasjon.579934.png";

/***/ },

/***/ 1493:
/*!*******************************************************!*\
  !*** ../oppgaver/src/swift/hei_verden/drag_label.png ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/swift/hei_verden/drag_label.3c446f.png";

/***/ },

/***/ 1494:
/*!*************************************************************!*\
  !*** ../oppgaver/src/swift/hei_verden/label_connection.png ***!
  \*************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/swift/hei_verden/label_connection.860d8f.png";

/***/ },

/***/ 1495:
/*!*********************************************************!*\
  !*** ../oppgaver/src/swift/hei_verden/change_label.png ***!
  \*********************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/swift/hei_verden/change_label.de468c.png";

/***/ },

/***/ 1496:
/*!************************************************************!*\
  !*** ../oppgaver/src/swift/hei_verden/textfield_input.png ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "_/oppgaver/src/swift/hei_verden/textfield_input.da148e.png";

/***/ }

});
//# sourceMappingURL=hei_verden.99f7502f7c950bb21a8a.js.map