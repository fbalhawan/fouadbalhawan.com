import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "@fouadbalhawan.com/schemas";
import { projectId, dataset, previewSecretId } from "./app/lib/sanity/config";
import settings from "@fouadbalhawan.com/schemas/src/lib/blog-schemas/settings";
import {
  pageStructure,
  // singletonPlugin
} from "./app/lib/sanity/plugins/settings";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { table } from "@sanity/table";
import { codeInput } from "@sanity/code-input";

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ["post"];

export default defineConfig({
  name: "default",
  title: "Fouad Blog",
  basePath: "/studio",
  projectId: projectId,
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure([settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    // singletonPlugin(["settings"]),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
});
