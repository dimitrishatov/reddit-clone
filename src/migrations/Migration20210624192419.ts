import { Migration } from '@mikro-orm/migrations';

export class Migration20210624192419 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" jsonb not null);');
  }

}
