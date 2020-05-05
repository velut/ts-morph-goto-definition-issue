// Run with 'npm run main'

const debug = require("debug");
const path = require("path");
const tsm = require("ts-morph");

// Utils
const log = debug("main.js");

function rel(filePath) {
  return path.relative(__dirname, filePath);
}

//
// Main
//

log("Create project");
const project = new tsm.Project();
const projectDir = path.join(__dirname, "project");
// Add source files
const glob = `${projectDir.replace(/\\/g, "/")}/**/*.{d.ts,d.ts.map,ts}`;
project.addSourceFilesAtPaths(glob);
const sourceFiles = project.getSourceFiles();
log(
  "Source files: %O",
  sourceFiles.map((sf) => rel(sf.getFilePath()))
);

log("\nUsing identifier.getDefinitions():");
const dtsSourceFile = project.getSourceFileOrThrow("index.d.ts");
const adderIdentifier = dtsSourceFile.getFirstDescendantByKindOrThrow(
  tsm.SyntaxKind.Identifier
);
const adderDefinition = adderIdentifier.getDefinitions()[0];
const adderDefinitionSourceFilePath = rel(
  adderDefinition.getSourceFile().getFilePath()
);
log("\tFound: ", adderDefinitionSourceFilePath);
log("\tWanted: project/src/index.ts");

log("\nUsing languageService.getDefinitionsAtPosition()");
const languageService = project.getLanguageService();
const adderPosition = adderIdentifier.getStart();
const adderDefinitionWithLS = languageService.getDefinitionsAtPosition(
  dtsSourceFile,
  adderPosition
)[0];
const adderDefinitionWithLSSourceFilePath = rel(
  adderDefinitionWithLS.getSourceFile().getFilePath()
);
log("\tFound: ", adderDefinitionWithLSSourceFilePath);
log("\tWanted: project/src/index.ts");

// Sample output
//
//  Create project
//  Source files: [
//    'project/dist/index.d.ts',
//    'project/dist/index.d.ts.map',
//    'project/src/index.ts'
//  ]
//
//  Using identifier.getDefinitions():
//        Found: project/dist/index.d.ts
//        Wanted: project/src/index.ts
//
//  Using languageService.getDefinitionsAtPosition()
//        Found: project/dist/index.d.ts
//        Wanted: project/src/index.ts
