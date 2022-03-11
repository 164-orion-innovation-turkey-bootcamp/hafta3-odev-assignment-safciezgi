# FirstAngularAppPrimeng

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

# JSON Server

- To install and use json-server:
```
npm install -g json-server
```

- Create a `db.json` file with some data

```json
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

- Start JSON Server

```bash
json-server --watch db.json
```

- Now if you go to [http://localhost:3000/posts/1](http://localhost:3000/posts/1), you'll get

```json
{ "id": 1, "title": "json-server", "author": "typicode" }
```

## UI For My Project
- Welcome Page : This page is the first page when you run the project

![image](https://user-images.githubusercontent.com/51738775/157819537-c0faa276-3f59-4327-8e81-adbf65949106.png)

- Sign In Page : This page is basicly a login page

![image](https://user-images.githubusercontent.com/51738775/157820101-fff0fb8d-61c0-498c-bf01-e1039097cf44.png)

- Sign Up Page : This Page is shows you a sign up form if you do not have a account yet, when its successfull it navigates you sign in page again

![image](https://user-images.githubusercontent.com/51738775/157820590-a4b27a9c-6be6-4bd3-9c4c-343839b36844.png)

## UI Tools

For my UI design I use tools down below:


- <img src="https://user-images.githubusercontent.com/51738775/157821344-911342bb-b0be-4098-a714-68811c3cf510.png" width="30" height="20" > 
- [Nes.css](https://nostalgic-css.github.io/NES.css/)
- [PrimeNg](https://www.primefaces.org/primeng/#/)

