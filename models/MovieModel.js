import { Model } from 'objection';
import { GenreModel } from './GenreModel';
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

  static getAllMovies({ column, direction, page, pageSize, ...selectors }) {
    return this.query()
      .skipUndefined()
      .withGraphJoined('[genres, comments]')
      .where(selectors)
      .orderBy(column, direction)
      .page(page, pageSize);
  }

  static findByTitle(title) {
    return this.query().where(qb =>
      title ? qb.where('title', 'ilike', `%${title}%`) : []
    );
  }

  static findMovieById(id) {
    return this.query()
      .withGraphFetched('[comments(orderByDate)]')
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
      genres: {
        relation: Model.HasManyRelation,
        modelClass: GenreModel,
        join: {
          from: 'movies.id',
          to: 'genres.movie_id',
        },
      },
    };
  }
}
