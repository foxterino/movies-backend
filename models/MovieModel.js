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

  static getAllMovies({ years, genres, order, paging }) {
    return this.query()
      .withGraphFetched('[comments]')
      .whereIn('year', years)
      .whereRaw('(genres) && ?', `{${genres}}`)
      .orderBy(order.column, order.direction)
      .page(paging.page, paging.pageSize);
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
