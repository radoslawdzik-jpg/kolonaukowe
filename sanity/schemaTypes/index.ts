import { type SchemaTypeDefinition } from 'sanity'
import { newsType } from './news'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsType],
}