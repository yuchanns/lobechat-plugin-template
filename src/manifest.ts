import { LobeChatPluginManifest, PluginSchema } from "@lobehub/chat-plugin-sdk"

// Replace the following with your plugin's information
export const TITLE = "LobeChat Plugin Template"
export const DESCRIPTION = "A template for LobeChat plugins running on Cloudflare Workers."
const IDENTIFIER = "lobechat-identifier"
const HOMEPAGE = "https://github.com/yuchanns/lobechat-plugin-template"
const AUTHOR = "yuchanns"
const AVATAR = ""
const TAGS: string[] = []
const SYSTEM_ROLE = ""
const SETTINGS: PluginSchema = {
  type: "object",
  properties: {},
}

export const buildManifest = (url: URL, providers: APIProvider[]): LobeChatPluginManifest => {
  const { protocol, host } = url
  return {
    "$schema": "../node_modules/@lobehub/chat-plugin-sdk/schema.json",
    "version": "1",
    "identifier": IDENTIFIER,
    "author": AUTHOR,
    "homepage": HOMEPAGE,
    "gateway": `${protocol}//${host}/api/gateway`,
    "meta": {
      "avatar": AVATAR,
      "tags": TAGS,
      "title": TITLE,
      "description": DESCRIPTION
    },
    "systemRole": SYSTEM_ROLE,
    "settings": SETTINGS,
    "api": Object.entries(providers).map(([_, provider]) => ({
      "name": provider.name,
      "url": `${protocol}//${host}/api/${provider.path}`,
      "description": provider.description,
      "parameters": provider.parameters,
    })),
  }
}
