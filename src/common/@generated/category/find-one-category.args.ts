import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryWhereUniqueInput } from './category-where-unique.input';

@ArgsType()
export class FindOneCategoryArgs {

    @Field(() => CategoryWhereUniqueInput, {
            nullable: false,
        })
    where!: CategoryWhereUniqueInput;
}
