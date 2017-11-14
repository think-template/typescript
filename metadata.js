module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "message": "Project description",
      "default": "application created by thinkjs"
    },
    "author": {
      "type": "string",
      "message": "Author"
    }
  },
  "new": {
    "default": [
      ["src/bootstrap", "src/bootstrap"],
      ["src/config", "src/config"],
      ["src/controller/base.ts", "src/controller/base.ts"],
      ["src/controller/index.ts", "src/controller/index.ts"],
      ["src/logic", "src/logic"],
      ["src/model", "src/model"],
      ["src/index.ts", "src/index.ts"],
      ["test/index.ts", "test/index.ts"],
      ["view/index_index.html", "view/index_index.html"],
      ["development.js", "development.js"],
      ["gitignore", ".gitignore"],
      ["nginx.conf", "nginx.conf"],
      ["package.json", "package.json"],
      ["pm2.json", "pm2.json"],
      ["production.js", "production.js"],
      ["README.md", "README.md"],
      ["tsconfig.json", "tsconfig.json"],
      ["tslint.json", "tslint.json"]
    ],
    "multiModule": [
      ["src/bootstrap", "src/common/bootstrap"],
      ["src/config", "src/common/config"],
      ["src/config/config.ts", "src/[moduleName]/config/config.ts"],
      ["src/controller/base.ts", "src/[moduleName]/controller/base.ts"],
      ["src/controller/index.ts", "src/[moduleName]/controller/index.ts"],
      ["src/logic", "src/[moduleName]/logic"],
      ["src/model", "src/[moduleName]/model"],
      ["src/index.ts", "src/index.ts"],
      ["test/index.ts", "test/index.ts"],
      ["view/index_index.html", "view/[moduleName]/index_index.html"],
      ["development.js", "development.js"],
      ["gitignore", ".gitignore"],
      ["nginx.conf", "nginx.conf"],
      ["package.json", "package.json"],
      ["pm2.json", "pm2.json"],
      ["production.js", "production.js"],
      ["README.md", "README.md"],
      ["tsconfig.json", "tsconfig.json"],
      ["tslint.json", "tslint.json"]
    ]
  },
  "controller": {
    "default": [
      ["src/controller/index.ts", "src/[moduleName]/controller/[action].ts"],
      ["src/logic/index.ts", "src/[moduleName]/logic/[action].ts"]
    ],
    "rest": [
      ["src/controller/rest.ts", "src/[moduleName]/controller/rest.ts"],
      ["src/controller/restIndex.ts", "src/[moduleName]/controller/[action].ts"],
      ["src/logic/index.ts", "src/[moduleName]/logic/[action].ts"]
    ]
  },
  "model": [
    ["src/model/index.ts", "src/[moduleName]/model/[action].ts"]
  ],
  "service": [
    ["src/service/index.ts", "src/[moduleName]/service/[action].ts"]
  ],
  "middleware": [
    ["src/middleware/base.ts", "src/[moduleName]/middleware/[action].ts"]
  ],
  "adapter": [
    ["src/adapter/base.ts", "src/[moduleName]/adapter/[type]/[action].ts"]
  ],
  "module": [
    ["src/config/config.ts", "src/[moduleName]/config/config.ts"],
    ["src/controller/base.ts", "src/[moduleName]/controller/base.ts"],
    ["src/controller/index.ts", "src/[moduleName]/controller/index.ts"],
    ["src/logic/index.ts", "src/[moduleName]/logic/index.ts"],
    ["src/model/index.ts", "src/[moduleName]/model/index.ts"],
    ["view/index_index.html", "view/[moduleName]/index_index.html"]
  ],
  "completeMessage": "To get started:\n\n<% if (!inPlace) { %># enter path\n$ cd <%= destDirName %>\n\n<% } %># install dependencies:\n$ npm install\n\n# run the app\n$ npm start"
}
