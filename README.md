# FileCap Assignment Soluction License Frontend

Dit project bevat een license frontend als aangeboden solution op een sollicitatie opdracht.

## Benodigdheden

Angular version 19+. Als er nog geen Angular geinstalleerd is, kan dat middels:

```bash
npm install -g @angular/cli
```

Maak vanuit de root folder een environments file aan:

```bash
ng generate environments
```

Voeg in environment.development.ts een property "apiUrl" toe met als waarde:
'http://localhost:4200/<backend_url>'

De proxy config is verantwoordelijk voor de redirect van port 4200 naar 8000 i.v.m. CORS policy.

## Gebruik

Start de backend zoals beschreven in de backend README.

Install dependencies vanuit de root applicatiefolder:

```bash
npm install
```

Om de applicatie te starten:

```bash
ng serve --open
```

Je kunt de applicatie ook vinden op `http://localhost:4200/`.
