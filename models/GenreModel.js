import { Model } from 'objection';

export class GenreModel extends Model {
  static get tableName() {
    return 'genres';
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static createGenre({ movieId, name }) {
    return this.query().insert({ movie_id: movieId, name }).returning('*');
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['movie_id', 'name'],
      properties: {
        id: {
          type: 'integer',
        },
        movie_id: {
          type: 'integer',
        },
        name: {
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
