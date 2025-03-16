import { Service } from "@cloudflare/workers-types"

export { }

declare global {
  interface Bindings {
    MYSELF: Service
  }
}
