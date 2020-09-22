import { Model } from 'objection';

export class CommentModel extends Model {
  static get tableName() {
    return 'comments';
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static createComment({ movieId, text }) {
    return this.query().insert({ movie_id: movieId, text }).returning('*');
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['movie_id', 'text'],
      properties: {
        id: {
          type: 'integer',
        },
        movie_id: {
          type: 'integer',
        },
        text: {
          type: 'string',
          minLength: 1,
        },
        created_at: {
          type: 'string',
          format: 'date-time',
        },
        updated_at: {
          type: 'string',
          format: 'date-time',
        },
      },
    };
  }
}
