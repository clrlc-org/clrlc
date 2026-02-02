import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'research',
  title: 'Research & Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'NLP', value: 'nlp' },
          { title: 'Speech Technology', value: 'speech' },
          { title: 'Machine Learning', value: 'ml' },
          { title: 'Dataset Curation', value: 'dataset' },
        ],
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'description',
      title: 'Abstract/Description',
      type: 'text',
    }),
    defineField({
      name: 'link',
      title: 'Publication Link',
      type: 'url',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
    }),
  ],
})
