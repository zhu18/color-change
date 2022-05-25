//anov-core info
let corePackageJson = require('./../package.json')
let coreName = corePackageJson.name||''
let coreVerison = corePackageJson.version||''
console.log('%c' + coreName + '%cv' + coreVerison + '%c\t\t\t\thttps://www.npmjs.com/package/color-core',
    'font-size:12px;background:#606;padding:3px 10px;font-weight:bold;color:#ccc;',
    'background:#000;padding:3px 10px;color:#ccc;',
    'color:#999;',
    )