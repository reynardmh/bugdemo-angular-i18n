# ng-xi18n Bug Demo

This code is for demonstrating a problem with ng-xi18n when the project imports angular2 component from another node module. 

```
$ npm install
$ ng serve
```

You should be able to build and run the app on `http://localhost:4200/`

There is a `CoolComponent` that is imported from another npm package `https://github.com/reynardmh/angular2-component-module`

However, running ng-xi18n will cause error

```
$ ./node_modules/.bin/ng-xi18n

Error: Unexpected value 'CoolComponent' declared by the module 'AppModule'
```

## More Detailed Explanation

This applications imports `CoolComponent` from another node_module `https://github.com/reynardmh/angular2-component-module`

```
// app.module.ts
import { CoolComponent } from 'angular2-component-module/lib';

@NgModule({
  declarations: [
    AppComponent,
    CoolComponent
  ],
  imports: [
    BrowserModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```

On the template, we use the `<app-cool>` tag which is imported from `https://github.com/reynardmh/angular2-component-module`

```
<h1 i18n>I18n application demo</h1>
<p i18n>This text should be translatable</p>
<app-cool></app-cool>
```

If you build and run it, you can see the imported CoolComponent works as expected. 

However running ng-xi18n failed: 

```
$ ./node_modules/.bin/ng-xi18n

Error: Unexpected value 'CoolComponent' declared by the module 'AppModule'
```

---
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.20-4.
