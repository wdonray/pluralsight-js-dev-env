export const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 10,
      maxItems: 25,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            minimum: 1
          },
          name: {
            type: 'string',
            faker: 'name.firstName'
          }
        },
        required: ['id', 'name']
      }
    }
  },
  required: ['users']
};
