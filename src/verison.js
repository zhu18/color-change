//anov-core info
let corePackageJson = require('./../package.json')
let coreName = corePackageJson.name||''
let coreVerison = corePackageJson.version||''
console.log('%c' + coreName + '%cv' + coreVerison + '%c\t\t\t\thttps://www.npmjs.com/package/anov-core',
    'font-size:12px;background:#606;padding:3px 10px;font-weight:bold;color:#ccc;',
    'background:#000;padding:3px 10px;color:#ccc;',
    'color:#999;',
    )

//anov info
let anovPackageJSON = require('./../../../package.json')
let name = anovPackageJSON.name||''
let verison = anovPackageJSON.version||''
let projectId = anovPackageJSON.projectId ||''
let projectName = anovPackageJSON.projectName || ''
let copyright = anovPackageJSON.copyright || ''
let str = '%c' + name + ' %cv' + verison + '%c\t\t\t\thttps://anov.woyun.cn/' 
console.log(str,
    'font-size:12px;background:#066;padding:3px 10px;font-weight:bold;color:#ccc;',
    'font-size:12px;background:#000;padding:3px 10px;color:#ccc;',
    'background:transparent;color:#999;'
)
//project info
console.log('%c[anov] %cprojectId:' + projectId + ', projectName:' + projectName + '-' + copyright ,
'color:#399;padding:5px 0px',
'color:#666;'
)