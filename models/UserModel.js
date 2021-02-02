import { Model } from 'objection';

export class UserModel extends Model {
  static get tableName() {
    return 'users';
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }

  static createUser(userData) {
    return this.query().insert(userData);
  }

  static findUser({ username, password }) {
    return this.query()
      .findOne({ username, password })
      .columns(['id', 'email', 'username'])
      .throwIfNotFound();
  }
}
