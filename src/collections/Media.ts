import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    imageSizes: [
      {
        name: `100w`,
        width: 100,
        height: undefined,
        withoutEnlargement: undefined,
      },
      {
        name: `4000w`,
        width: 4000,
        height: undefined,
        withoutEnlargement: undefined,
      },
    ],
    adminThumbnail: '100w',
  },
}
