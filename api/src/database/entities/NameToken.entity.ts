import * as orm from 'typeorm';

import User from './User.entity';

@orm.Entity({ name: 'name_tokens' })
export default class NameToken {
  @orm.PrimaryGeneratedColumn()
  id!: number;

  @orm.Column('text')
  tokenValue!: string;

  @orm.ManyToMany(() => User, user => user.nameTokens)
  @orm.JoinTable({
    name: 'name_tokens_bounds',
    joinColumn: {
      name: 'nameTokensId',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'usersProfileId',
      referencedColumnName: 'profileId'
    }
  })
  bounds!: User[];
}
