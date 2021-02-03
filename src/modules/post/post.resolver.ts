import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from './post.model';
import { PostService } from './post.service';
import { PostWhereUniqueInput } from './dto/post-where-unique.input';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { CurrentUser } from '@modules/user/user.decorator';
import { User } from '@modules/user/user.model';
import { UserWhereUniqueInput } from '@modules/user/dto';
import { Prisma } from '@prisma/client';
import { PaginationArgs } from '@common/abstract-model/pagination/pagination.args';
import { PostOrderByInput } from './dto';

@Resolver(() => Post)
export class PostResolver {
  constructor(private postService: PostService) {}

  /* Query */
  @Query(() => Post)
  public async posts(
    @Args() args: PaginationArgs,
    @Args({ name: 'query', type: () => String, nullable: true })
    query: string,
    @Args({
      name: 'orderBy',
      type: () => PostOrderByInput,
      nullable: true,
    })
    orderBy: PostOrderByInput,
  ) {
    return await this.postService.getPosts(args, query, orderBy);
  }
  @Query(() => Post)
  public async post(@Args('where') where: PostWhereUniqueInput) {
    return await this.postService.getPost(where);
  }
  @Query(() => Post)
  public async postByUser(@Args('where') where: UserWhereUniqueInput) {
    return await this.postService.getPostByUser(where);
  }

  @ResolveField(() => User)
  public async user(@Parent() post: Post) {
    const where: Prisma.PostWhereUniqueInput = {
      id: post.id,
    };
    return await this.postService.getUserOfPost(where);
  }

  /* Mutations */
  @Mutation(() => Post)
  public async createPost(
    @Args('data') input: CreatePostInput,
    @CurrentUser() user: User,
  ) {
    return await this.postService.createPost({ input, user });
  }

  @Mutation(() => Post)
  public async updatePost(
    @Args('where') where: PostWhereUniqueInput,
    @Args('data') data: UpdatePostInput,
  ) {
    return await this.postService.updatePost(where, data);
  }

  @Mutation(() => Post)
  public async deletePost(@Args('where') where: PostWhereUniqueInput) {
    return await this.postService.deletePost(where);
  }
}
