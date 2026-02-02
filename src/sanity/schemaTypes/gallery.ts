import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title/Caption',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag (Event Name)',
      type: 'string',
    }),
  ],
})
