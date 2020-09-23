import { Model } from 'objection';
import { CommentModel } from './CommentModel';

export class MovieModel extends Model {
  static get tableName() {
    return 'movies';
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static createMovie(movieData) {
    return this.query().insert(movieData);
  }

  static getAllMovies({ year, genre, column, direction, page, pageSize }) {
    return this.query()
      .withGraphFetched('[comments]')
      .where(qb => !year || qb.where({ year }))
      .where(qb => !genre || qb.whereRaw('? ILIKE ANY(genres)', genre))
      .orderBy(column, direction)
      .page(page, pageSize);
  }

  static findMovies(query) {
    return this.query().where(qb =>
      query ? qb.where('title', 'ilike', `%${query}%`) : []
    );
  }

  static findMovieById(id) {
    return this.query()
      .withGraphFetched('[comments]')
      .findById(id)
      .throwIfNotFound();
  }

  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: CommentModel,
        join: {
          from: 'movies.id',
          to: 'comments.movie_id',
        },
      },
    };
  }
}
