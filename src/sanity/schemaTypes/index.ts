import { type SchemaTypeDefinition } from 'sanity'
import member from './member'
import event from './event'
import research from './research'
import gallery from './gallery'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [member, event, research, gallery],
}
