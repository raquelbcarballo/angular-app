# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Personal notes

### Updating NodeJS, npm and the CLI

Go to [nodejs.org](https://nodejs.org/es) and download the latest version - uninstall (all) installed versions on your machine first.

```bash
(sudo  is only required on Mac/ Linux)

[sudo] npm install -g npm
[sudo] npm uninstall -g angular-cli @angular/cli
npm cache verify
[sudo] npm install -g @angular/cli
```

**Here are some common issues & solutions:**

1. Creation of a new project takes forever (longer than 3 minutes) That happens on Windows from time to time => Try running the command line as administrator

2. You get an EADDR error (Address already in use) You might already have another ng serve process running - make sure to quit that or use ng serve --port ANOTHERPORT  to serve your project on a new port

3. My changes are not reflected in the browser (App is not compiling) Check if the window running ng serve  displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI

### Create and run your first app

```bash
ng new my-app
ng serve
```

By default the app will be running on the <http://localhost:4200>

### Using ngModel

To use something like [[(ngModel)]](https://angular.io/api/forms/NgModel) TypeScript needs to know where the things are. So we can import that in the .module.ts

### TypeScript

TypeScript is a **strongly typed** programming language that builds on JavaScript, giving you better tooling at any scale.

### Bootstrap

[Bootstrap](https://getbootstrap.com/) is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes.

```bash
npm install --save bootstrap@3
```

In **my-app/angular.json:**

```bash
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "src/styles.css"
],
```

## How Angular App gets loaded and started

The first code executed is the *main.ts*

```tsx
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```

The initial simple page application is the *index.html*

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>MyApp</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

## Shortcuts CLI

ng generate component servers == ng g c server
