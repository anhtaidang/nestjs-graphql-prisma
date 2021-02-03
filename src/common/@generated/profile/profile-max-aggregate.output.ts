import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ProfileMaxAggregate {
  @Field(() => String, {
    nullable: true,
  })
  id?: string;

  @Field(() => String, {
    nullable: true,
  })
  firstName?: string;

  @Field(() => String, {
    nullable: true,
  })
  lastName?: string;

  @Field(() => String, {
    nullable: true,
  })
  bio?: string;

  @Field(() => String, {
    nullable: true,
  })
  userId?: string;

  @Field(() => Date, {
    nullable: true,
  })
  createdAt?: Date | string;

  @Field(() => Date, {
    nullable: true,
  })
  updatedAt?: Date | string;
}
