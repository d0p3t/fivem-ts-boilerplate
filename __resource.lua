resource_manifest_version '44febabe-d386-4d18-afbe-5e627f4af937'

server_script 'dist/server.js'
client_script 'dist/client.js'

dependency 'yarn'
dependency 'webpack'

webpack_config 'server.config.js'
webpack_config 'client.config.js'