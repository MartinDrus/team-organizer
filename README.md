# Team-Split-Organizer

Der Team-Organizer ist ein Tool, mit dem du zufällige Untergruppen erstellen und auswählen kannst. Du kannst entweder die Gruppengröße eingeben oder die Namen der Teammitglieder angeben.

## Anleitung

1. Öffne die `index.html`-Datei in einem Webbrowser oder besuche [https://team-organizer-one.vercel.app/](https://team-organizer-one.vercel.app/).

2. Gib entweder die Gruppengröße in das Eingabefeld ein oder gib die Namen der Teammitglieder durch Leerzeichen oder Kommas getrennt ein.

3. Klicke auf den "GO"-Button, um den Vorgang zu starten.

4. Das Tool generiert zufällige Untergruppen basierend auf den eingegebenen Informationen und zeigt sie im Diagramm an.

5. Du kannst eine bestimmte Gruppengröße auswählen, indem du auf die entsprechende Option klickst.

6. Klicke auf den "Randomize"-Button, um das Diagramm zufällig zu drehen.

## Abhängigkeiten

Das Projekt verwendet einige JavaScript-Module, die im `js`-Verzeichnis zu finden sind:

- `pieChart.js`: Enthält die Klasse `PieChart`, die das Diagramm erstellt und darstellt.
- `renderOptions.js`: Enthält eine Funktion zum Rendern der Optionen für die Gruppengrößen.
- `randomColors.js`: Enthält eine Funktion zum Generieren zufälliger Farben.
- `calculateGroupSize.js`: Enthält eine Funktion zum Berechnen der Gruppengrößen basierend auf den eingegebenen Informationen.
- `pieSlice.js`: Enthält die Klasse `PieSlice`, die ein einzelnes Tortenstück im Diagramm repräsentiert.

Die CSS-Stile für das Projekt sind in der `styles.css`-Datei im `css`-Verzeichnis definiert.

