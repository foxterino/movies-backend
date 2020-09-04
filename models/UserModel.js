import { Model } from 'objection';

export const PASSWORD_MIN_LENGTH = 1;

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
    return this.query().findOne({ username, password }).throwIfNotFound();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'username', 'password'],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string', minLength: 1 },
        username: { type: 'string', minLength: 1 },
        password: { type: 'string', minLength: PASSWORD_MIN_LENGTH },
        created_at: { type: 'string' },
        updated_at: { type: 'string' },
      },
    };
  }
}
