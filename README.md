# Angular Todo App
von Luca Ritz und Lukas Seglias

# Kurzbericht

Da wir die Todo-App mit Angular entwickelt haben, hatten wir scho von Anfang an deutlich mehr dependencies
als wenn wir die App analog dem Unterrichtsbeispiel "von Hand" gemacht hätten.

Wir hatten häufig Kompilierfehler von Angular, welche nach einer Änderung im "Live-Coding"-Modus erschienen sind.
Ein anschliessender Neustart dieses Modus hat dann oft geholfen.

## Vergleich:
Lazy-loading konnten wir mittels Angular-Modulen umsetzen, sodass Module erst geladen werden, 
wenn sie tatsächlich gebraucht werden.
Dies ist in der Vanilla-SPA nicht der Fall, spielt aber wahrscheinlich bei so kleinen Apps keine Rolle.

Im Gegensatz zur Vanilla-SPA haben wir uns für ein komplexeres Store-Pattern entschieden, inklusive
Effekten und Aktionen um diese voneinander zu entkoppeln. 
In der Vanilla-SPA ist die Kopplung zwischen Store und View teilweise vorhanden. 

Das Data-Binding wird von Angular sehr gut unterstützt, des weiteren haben wir für Formulare
"Reactive Forms" verwendet. Das steht im Gegensatz zu dem Attribut-basierten Data-Binding in der Vanilla-SPA (data-field).

Die asynchrone Programmierung wurde mit RxJS umgesetzt, bsp. bei den Service für den Zugriff auf das REST-API.
In der Vanilla-SPA wurde mit JQuery ajax und Promises gearbeitet.

Für die Internationalisierung haben wir "ngx-translate" verwendet, wodurch alle unsere Texte für andere Sprachen übersetzt werden können.
In der Vanilla-SPA war das nicht relevant.

Die Komponentisierung von Angular haben wir so verwendet, dass eine Komponente in einer Datei sowohl das HTML wie auch das Typescript 
beinhaltet. In der Vanilla-SPA war das HTML im index.html als Template hinterlegt und das JavaScript in einer anderen Datei.

Wir haben versucht, möglichst viele Komponenten "dumm" zu halten, also möglichst nur Views zu entwickeln.
Die UI-Aktionen und "Logik" wird dann in anderen Komponenten, namens "Containern" implementiert, diese verwenden die "dummen" Komponenten
und sprechen den Store an. 

Das Routing von Angular und von der Vanilla-SPA funktionieren im Prinzip sehr ähnlich. in der Vanilla-SPA sagt die Komponente, ob sie
ein Login voraussetzt, bei uns wird das im Routing mit einer Auth-Guard definiert. 

In der Vanilla-SPA werden Änderungen lokal durchgeführt, wenn der Server eine erfolgreiche Antwort gegeben hat. 
Wir laden die Todo-Liste/Todo-Detail nach jeder erfolgreichen Aktion neu, da evtl. der Server die Daten irgendwie ergänzt oder andere
Benutzer Anpassungen machen könnten. Dies führt zu mehr Datenübertragung, allerdings ist die App dann etwas Mehrbenutzerfähiger.

Zusammenfassend kann gesagt werden, dass die Prinzipien der beiden SPAs die gleichen sind, mittels Angular liegt von Anfang an ein deutlich
grösserer Funktionsumfang und damit einhergehende Komplexität vor. Ob sich diese Komplexität in so kleinen SPAs lohnt kann diskutiert werden.  

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/todo-app`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
