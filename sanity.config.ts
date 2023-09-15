import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './packages/sanity/schemas'
import {table} from '@sanity/table';
export default defineConfig({
  name: 'default',
  title: 'Sanity',

  projectId: '0oqg8w49',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput(), table()],

  schema: {
    types: schemaTypes,
  },
})
