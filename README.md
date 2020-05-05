# How to run

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
