import { Model } from 'objection';

export class CommentModel extends Model {
  static get tableName() {
    return 'comments';
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static createComment(commentData) {
    return this.query().insert(commentData);
  }
}
