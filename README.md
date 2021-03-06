# webUP #4
![TS logo here](https://raw.githubusercontent.com/rostacik/webUP4tsdemo/master/img/ts_logo.png)
# TypeScript - ESNext is now

Dušan Roštár - [www.rostacik.net](http://www.rostacik.net) / [dusan@rostacik.net](mailto:dusan@rostacik.net)

## What is [TypeScript](https://www.typescriptlang.org/):

- free open source programming language (not a library or runtime) ( [https://github.com/Microsoft/TypeScript](https://github.com/Microsoft/TypeScript))
- to use TypeScript one needs to install its compiler
- created my Microsoft (lead architect - [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg) - TurboPascal, Dephi, C# )
- works in NodeJS and on any browser, any OS (JS generated by TS)
- TypeScript is a typed superset of JavaScript that compiles to plain JavaScript
- any JavaScript is already TypeScript (when switching to TS, just rename .js to .ts and let the compiler do the rest)
- &quot;JavaScript that scales&quot; - intended for use with big JS apps (many , many JS files)
- well accepted (Angular 2 from Google is written in TypeScript)

All the &quot;other stuff&quot; that TypeScript brings to the table (wiki contains everything about the language + many samples, worth to read): [https://github.com/Microsoft/TypeScript/wiki](https://github.com/Microsoft/TypeScript/wiki)

TypeScript brings new stuff from ES6 (ES2015), ES7 (ES2016) and ESNext to your current JS runtime (classes, arrow functions, async/await, etc.)

 ![TS feature gap fix](https://raw.githubusercontent.com/rostacik/webUP4tsdemo/master/img/ts_feature_gap.png)

TypeScript home page : [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

TypeScript playground :   [https://www.typescriptlang.org/play/index.html](https://www.typescriptlang.org/play/index.html) (try TS in your browser)

TypeScript MSDN blog : [https://blogs.msdn.microsoft.com/typescript/](https://blogs.msdn.microsoft.com/typescript/)

## What can TypeScript do for you :

- brings types to good old JS,
- brings ES6 (ES2015, 2016, 2017 or ESnext) features to ES5 (&quot;ES of today&quot;)
- gives you OOP in JS (as you know it from Java,C#, etc.)
- can give you great &quot;intellisense&quot; inside JS because TS knows JS and had definitions files for common JS libs
- could give you &quot;intellisense&quot; in JS when writing code against common JS libraries

## Competitors :

- Dart - Google ( [https://www.dartlang.org](https://www.dartlang.org)) - own MV or JS transpile
- Flow - FB ( [https://flowtype.org/](https://flowtype.org/)) - static typing for JS
- CoffeeScript + IcedCofeeScript ( [http://coffeescript.org/](http://coffeescript.org/)) own language ispired by Ruby, Python, Haskell that adds syntactic sugar to JS, transpiles to JS
- Babel ( [https://babeljs.io/](https://babeljs.io/)) - ES6 (ES2015+) JS to ES5 compiler (written in JS)
- Elm ( [http://elm-lang.org/](http://elm-lang.org/)) - purely functional lang that transcompiles to JS
- Haxe ( [https://haxe.org/](https://haxe.org/)) - lang that can transpile to ActionScript3, JavaScript, C#, C++, Python, PHP, Lua,
- Traceur - Google - ( [https://github.com/google/traceur-compiler](https://github.com/google/traceur-compiler)) - ES2015+ to ES5 compiler,
- emscripten ( [http://kripken.github.io/emscripten-site/](http://kripken.github.io/emscripten-site/)) - C and C++ transcompiler to JavaScript in asm.js format = runs games in nearly native speed inside browser,
- GWT - Google Web Toolkit ( [http://www.gwtproject.org/](http://www.gwtproject.org/)) - write JS frontent in Java
- LiveScript - ( [http://livescript.net/](http://livescript.net/)) - functional language that compiles to JS, from creator of CoffeeScript

[http://noeticforce.com/alternative-programming-languages-that-compile-to-javascript](http://noeticforce.com/alternative-programming-languages-that-compile-to-javascript)

## ES compatibility tables :

[http://kangax.github.io/compat-table/es5/](http://kangax.github.io/compat-table/es5/)

[http://kangax.github.io/compat-table/es6/](http://kangax.github.io/compat-table/es6/)

[http://kangax.github.io/compat-table/es2016plus/](http://kangax.github.io/compat-table/es2016plus/)

## Types in TypeScript :

Basic types :

[https://www.typescriptlang.org/docs/handbook/basic-types.html](https://www.typescriptlang.org/docs/handbook/basic-types.html)

- Boolean,
- Number (hexadecimal, deximal, binary, octal),
- String,
- Array,
- Tuple (array with fixed number of elements and its types)
- Enum,
- Any (short circuit type),
- Void (function returns void),
- Null or Undefined,
- Never (if function always throws exception (never returns any value)),

Advance types :

[https://www.typescriptlang.org/docs/handbook/advanced-types.html](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

- Intersection type - allows to combine types - mixins
- Union type - type T or type U - parameter of function can be of type boolean or string,

TypeGuards : (logic how to tell if we have certain type of object)

- user defined typeguards - a function that will decide,
- typeof typeguard - basic types,
- instanceof typeguard - is object instance of some class?

## How to build with TypeScript :

- install just TypeScript compiler (localy or globaly) and runt it against folder
- use task runner like Grunt ( [http://](http://gruntjs.com) [grunt](http://gruntjs.com) [js.com](http://gruntjs.com)), Gulp ( [http://gulpjs.com/](http://gulpjs.com/)) , WebPack ( [https://webpack.github.io](https://webpack.github.io)) to make JS files from TS files

## Definition/Declaration files (.d.ts) :

List of most of definition files : [http://definitelytyped.org/](http://definitelytyped.org/) / [https://github.com/DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

Managers to &quot;bring in&quot; .d.ts files from 1.x TS times :

- tsd ( [https://github.com/DefinitelyTyped/tsd](https://github.com/DefinitelyTyped/tsd))
- typings ( [https://github.com/typings/typings](https://github.com/typings/typings))

TS 2.x style of getting .d.ts files :

[https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/)

[https://www.npmjs.com/~types](https://www.npmjs.com/~types)

## IDE support :

- Visual Studio 2015 - ( [https://www.microsoft.com/en-us/download/details.aspx?id=48593](https://www.microsoft.com/en-us/download/details.aspx?id=48593))
- Visual Studio 2013 - ( [https://www.microsoft.com/en-us/download/details.aspx?id=48739](https://www.microsoft.com/en-us/download/details.aspx?id=48739))
- Visual Studio Code - ( [https://code.visualstudio.com/](https://code.visualstudio.com/))
- Sublime Text - ( [https://github.com/Microsoft/TypeScript-Sublime-Plugin](https://github.com/Microsoft/TypeScript-Sublime-Plugin))
- Atom - ( [https://atom.io/packages/atom-typescript](https://atom.io/packages/atom-typescript))
- Eclipse - ( [https://github.com/palantir/eclipse-typescript](https://github.com/palantir/eclipse-typescript))
- Emacs - ( [https://github.com/ananthakumaran/tide](https://github.com/ananthakumaran/tide))
- WebStorm - ( [https://www.jetbrains.com/webstorm/](https://www.jetbrains.com/webstorm/))
- Vim - ( [https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Editor-Support#vim))

Demo code : [https://github.com/rostacik/webtlak09tsdemo](https://github.com/rostacik/webtlak09tsdemo)

More demo code : [https://github.com/rostacik/msfest16demos](https://github.com/rostacik/msfest16demos)

IntelliSense in JS from declaration files :   [ttps://visualstudiomagazine.com/articles/2016/11/23/vs-code-1-7-2-javascript-intellisense-ata-module.aspx](https://visualstudiomagazine.com/articles/2016/11/23/vs-code-1-7-2-javascript-intellisense-ata-module.aspx)

Async/Await in TS :

[https://blogs.msdn.microsoft.com/typescript/2016/11/08/typescript-2-1-rc-better-inference-async-functions-and-more/](https://blogs.msdn.microsoft.com/typescript/2016/11/08/typescript-2-1-rc-better-inference-async-functions-and-more/)

and

[https://blogs.msdn.microsoft.com/typescript/2016/12/07/announcing-typescript-2-1/](https://blogs.msdn.microsoft.com/typescript/2016/12/07/announcing-typescript-2-1/)

Async/Await in JS :

[http://caniuse.com/#feat=async-functions](http://caniuse.com/#feat=async-functions)

How to build :

- gulp buildAsyncStuffES5 - build async sample for ES5 target
- gulp buildAsyncStuffES6 - build async sample for ES6 target
- gulp buildSrc - build node sample

