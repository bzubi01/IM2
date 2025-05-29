# IM2 Dokumentation Projektarbeit
### von Joy Zimmermann und Benjamin Zuberühler
---

 **Website** ➡️ [Schweizer Höhenlinien](https://mmp-im2.benizubi.ch)

 ---

## Kurzbeschreibung des Projekts (max. 500 Zeichen)

Eine Web-Applikation, bei der man jeweils den höchsten Berg der Kantone abfragen kann. In der Suchfunktion funktioniert über ein Dropdown, bei dem man den Kanton auswählen kann.

**Beispiel**

Wenn man beispielsweise den höchsten Berg des Kantons Bern sucht, öffnet sich eine Infobox, mit den Angaben zum höchsten Berg des Kantons + ein Foto davon.

**Parameter**

- Name des höchsten Gipfels des Kantons
- Höhenmeter
- Koordinaten
- Wetter auf dem Gipfel (mit Icon)

**API's**

- Bergdaten: manuell recherchieren
- Koordinaten: Open-Elevation
- Wetter: OpenMeteo

**Erweiterungsmöglichkeiten**
- Noch mehr Gipfel sichtbar
- Wanderungen, die man rund um oder zu den Gipfeln machen kann

---

## Learnings und Schwierigkeiten Beni 
Das Projekt gab das Verständnis, um dynamische, datengetriebene Webseiten zu entwickeln und die Grundkenntnisse von Javascript zu verstehen. Die grössten Schwierigkeiten hatte ich beim Verbinden der Daten mit interaktiven Elementen wie dem Dropdown oder der Karte.

## Learnings und Schwierigkeiten Joy
Ich habe während des Projekts sehr viel gelernt. Eines der grössten Learning war für mich die Einbindung von SVG-Dateien und die Möglichkeiten, die sich daraus ergeben (eigene Hovereffekte, Auswahlmöglichkeiten etc.). Schwierigkeiten hatte ich damit allgemein die Grundlagen von Javascript zu verstehen.

---
## Benutzte Ressourcen und Prompts 
GitHub Copilot: Hat geholfen, einfache Strukturaufgaben zu übernehmen und bei kleineren Darstellungsfehler unterstützt. 

ChatGPT: Hat uns das Strukturieren der eigenen mountains.json Datei abgenommen. Wurde eingesetzt, um komplexere Themen und Probleme aufzuzeigen, verständlich zu erklären und um Lösungsvorschläge zu erarbeiten.
---

## Anforderungen
Kurzbeschreibung des Projekts mit folgenden Themen:
- Kurzbeschreibung des Projekts (max. 500 Zeichen)
- Learnings und Schwierigkeiten (max. 200 Zeichen pro Person)
- benutzte Ressourcen und Prompts

**Bewertungsraster Technik**
Punkte für Prozesserfüllung
- API wird abgerufen (1)
- Daten werden verarbeitet (2)
- DOM wird dynamisch manipuliert (3)
- Daten werden im geeigneten Datenformat dargestellt (2)

Punkte für Codequalität
- HTML, CSS valide (1)
- Responsive (2)
- Javascript logisch strukturiert und effizient (3)
- Wiederverwendbarkeit (Funktionen) (2)
- Kommentare | Nachvollziehbarkeit (1)
