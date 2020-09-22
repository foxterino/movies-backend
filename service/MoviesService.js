import { MovieModel } from '../models/MovieModel';

export class MoviesService {
  static findMovies(query) {
    const trimmedQuery = query.trim();

    return trimmedQuery ? MovieModel.findMovies(trimmedQuery) : [];
  }
}
