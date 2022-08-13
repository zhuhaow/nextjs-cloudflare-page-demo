global._ENTRIES = global._ENTRIES || {};
global.process = global.process || { env: { NODE_DEBUG: false } }

require("../../../.next/server/pages/api/hello");
require("../../../.next/server/edge-runtime-webpack");

export async function onRequest(context) {
    return (await global._ENTRIES["middleware_pages/api/hello"].default({ request: context.request })).response;
}