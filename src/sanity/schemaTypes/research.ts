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
      name: 'type',
      title: 'Publication Type',
      type: 'string',
      options: {
        list: [
          { title: 'Paper', value: 'paper' },
          { title: 'Poster', value: 'poster' },
          { title: 'Dataset', value: 'dataset' },
          { title: 'Talk', value: 'talk' },
        ],
      },
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'researchArea',
      title: 'Research Area',
      type: 'string',
      options: {
        list: [
          { title: 'Code-switching', value: 'code-switching' },
          { title: 'Speech', value: 'speech' },
          { title: 'Translation', value: 'translation' },
          { title: 'Cultural AI', value: 'cultural-ai' },
        ],
      },
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'venue',
      title: 'Venue/Conference',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'Optional status (e.g., "Under review", "Preprint", "Published")',
      options: {
        list: [
          { title: 'Under review', value: 'under-review' },
          { title: 'Preprint', value: 'preprint' },
          { title: 'Published', value: 'published' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Abstract/Description',
      type: 'text',
    }),
    defineField({
      name: 'paperLink',
      title: 'Paper/Document Link',
      type: 'url',
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
    }),
  ],
})
