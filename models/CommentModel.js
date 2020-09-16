import { Model } from 'objection';

export class CommentModel extends Model {
  static get tableName() {
    return 'comments';
  }

  static createComment(commentData) {
    return this.query().insert(commentData);
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}
