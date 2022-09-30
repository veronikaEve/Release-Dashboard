#!/usr/bin/env zx
$.prefix = 'set -e;'

const branch = process.argv[3]

echo("🟦 branch to process: ", branch)

await $`fly7 -t simple-mock-app login -c http://localhost:8080 -u test -p test`
echo("Connecting to concourse...\n")

await $`fly7 -t simple-mock-app unpause-pipeline -p release-pipeline-${branch}`
await $`fly7 -t simple-mock-app trigger-job --job release-pipeline-${branch}/deploy-release`