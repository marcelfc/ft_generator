const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('./dist/package.json').toString());
delete packageJson.devDependencies;
delete packageJson.scripts;

delete packageJson.dependencies['@angular/animations'];
delete packageJson.dependencies['@angular/common'];
delete packageJson.dependencies['@angular/compiler'];
delete packageJson.dependencies['@angular/core'];
delete packageJson.dependencies['@angular/forms'];
delete packageJson.dependencies['@angular/http'];
delete packageJson.dependencies['@angular/platform-browser'];
delete packageJson.dependencies['@angular/platform-browser-dynamic'];
delete packageJson.dependencies['@angular/router'];

fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2));
