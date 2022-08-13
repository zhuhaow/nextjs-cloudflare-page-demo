global._ENTRIES = global._ENTRIES || {};
global.process = global.process || { env: { NODE_DEBUG: false } }

require("../../../.next/server/edge-chunks/553");
require("../../../.next/server/pages/dynamic/[page]");
require("../../../.next/server/edge-runtime-webpack");

export async function onRequest(context) {
    return (await global._ENTRIES["middleware_pages/dynamic/[page]"].default({ request: context.request })).response;
}