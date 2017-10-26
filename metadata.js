module.exports = {
  "prompts": {
    "name": {
      "type": "string",
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "message": "Project description",
      "default": "ThinkJS 3.0 typescript"
    },
    "author": {
      "type": "string",
      "message": "Author"
    }
  },
  "skipCompile": [
    "src/**/*.vue",
    "src/assets/*.png"
  ],
  "filesignore": [
    "src/controller/index.tpl.ts",
    "src/controller/restIndex.tpl.ts",
    "src/controller/restIndex.ts",
    "src/controller/rest.ts",
    "src/adapter",
    "src/middleware",
    "src/service"
  ],
  "multiModule": [
    ["src/bootstrap", "src/common/bootstrap"],
    ["src/config", "src/common/config"],
    ["src/config/config.ts", "src/[defaultModule]/config/config.ts"],
    ["src/controller", "src/[defaultModule]/controller"],
    ["src/logic", "src/[defaultModule]/logic"],
    ["src/model", "src/[defaultModule]/model"],
    ["view/index_index.html", "view/[defaultModule]/index_index.html"]
  ],
  "controller": {
    "default": [
      ["src/controller/index.tpl.ts", "/controller/[name].ts"],
      ["src/logic/index.ts", "/logic/[name].ts"]
    ],
    "rest": [
      ["src/controller/rest.ts", "controller/rest.ts"],
      ["src/controller/restIndex.tpl.ts", "/controller/[name].ts"],
      ["src/logic/index.ts", "/logic/[name].ts"]
    ]
  },
  "model": [
    ["src/model/index.ts", "/model/[name].ts"]
  ],
  "service": [
    ["src/service/index.ts", "/service/[name].ts"]
  ],
  "middleware": [
    ["src/middleware/base.ts", "/middleware/[name].ts"]
  ],
  "adapter": [
    ["src/adapter/base.ts", "/adapter/[type]/[name].ts"]
  ],
  "module": [
    ["src/config/config.ts", "/config/config.ts"],
    ["src/controller/base.ts", "/controller/base.ts"],
    ["src/controller/index.ts", "/controller/index.ts"],
    ["src/logic/index.ts", "/logic/index.ts"],
    ["src/model/index.ts", "/model/index.ts"],
    ["view/index_index.html", "/index_index.html", "view"]
  ]
}
