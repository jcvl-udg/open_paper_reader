import { defineField, defineType } from 'sanity'

export const paper = defineType({
  name: 'paper',
  title: 'Scientific Paper',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
    }),
  ],
})