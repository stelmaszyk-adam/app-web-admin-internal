import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: {
      target: process.env.OPENAPI_SPEC_URL ?? "../backend/docs/openapi.json",
    },
    output: {
      mode: "tags-split",
      target: "src/api/generated",
      schemas: "src/api/generated/models",
      client: "react-query",
      httpClient: "axios",
      override: {
        mutator: {
          path: "src/api/client.ts",
          name: "axiosInstance",
        },
      },
    },
  },
});
