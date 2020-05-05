## Problem -  Go to definition

Starting from the `adder` declaration found in the `project/dist/index.d.ts` file, find the `adder` declaration in the `project/src/index.ts` file by resolving the available declaration source map `project/dist/index.d.ts.map`.

```
.
├── main.js
├── package.json
├── package-lock.json
└── project
    ├── dist
    │   ├── index.d.ts
    │   ├── index.d.ts.map
    │   ├── index.js
    │   └── index.js.map
    ├── src
    │   └── index.ts
    └── tsconfig.json
```

## How to run

```
git clone https://github.com/velut/ts-morph-goto-definition-issue.git
cd ts-morph-goto-definition-issue
npm i
npm run main
```

## Sample output

```
Create project
Source files: [
  'project/dist/index.d.ts',
  'project/dist/index.d.ts.map',
  'project/src/index.ts'
]

Using identifier.getDefinitions():
      Found:  project/dist/index.d.ts
      Wanted: project/src/index.ts

Using languageService.getDefinitionsAtPosition()
      Found:  project/dist/index.d.ts
      Wanted: project/src/index.ts
```
