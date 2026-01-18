# Novaline-Digitals ZA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy to Firebase Hosting

This repository already includes a `firebase.json` that targets the Angular build output at `dist/novaline-digital`. To deploy:

1. Log in to Firebase and select or create a project:
   ```sh
   npx firebase login
   npx firebase init hosting
   ```
   - Choose the Firebase project you want to deploy to.
   - When asked for your public directory, enter `dist/novaline-digital`.
   - Configure as a single-page app: **Yes**.
   - Do **not** overwrite `firebase.json` if prompted (keep the existing one).
2. Build the Angular app:
   ```sh
   npm run build
   ```
3. Deploy to Firebase Hosting:
   ```sh
   npx firebase deploy
   ```

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
