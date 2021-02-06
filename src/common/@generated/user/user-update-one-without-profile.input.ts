import { Field, InputType } from '@nestjs/graphql';
import { UserCreateOrConnectWithoutprofileInput } from './user-create-or-connect-withoutprofile.input';
import { UserCreateWithoutProfileInput } from './user-create-without-profile.input';
import { UserUpdateWithoutProfileInput } from './user-update-without-profile.input';
import { UserUpsertWithoutProfileInput } from './user-upsert-without-profile.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateOneWithoutProfileInput {
  @Field(() => UserCreateWithoutProfileInput, {
    nullable: true,
  })
  create?: UserCreateWithoutProfileInput;

  @Field(() => UserCreateOrConnectWithoutprofileInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutprofileInput;

  @Field(() => UserUpsertWithoutProfileInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutProfileInput;

  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput;

  @Field(() => Boolean, {
    nullable: true,
  })
  disconnect?: boolean;

  @Field(() => Boolean, {
    nullable: true,
  })
  delete?: boolean;

  @Field(() => UserUpdateWithoutProfileInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutProfileInput;
}
