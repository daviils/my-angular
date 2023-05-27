export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export class Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export class AuthInput {
  email: Scalars['String'];
  password: Scalars['String'];
};

export class AuthSocialInput {
  code: Scalars['String'];
};

export class AuthType {
  token: Scalars['String'];
  user: User;
};

export class Blog {
  category?: Maybe<BlogCategory>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  description: Scalars['String'];
  id: Scalars['String'];
  tags?: Maybe<Array<BlogTag>>;
  thump?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  youtubeID?: Maybe<Scalars['String']>;
};

export class BlogCategory {
  blogs?: Maybe<Array<Blog>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export class BlogPage {
  currentPage: Scalars['Int'];
  nextPage: Scalars['Boolean'];
  pageSize: Scalars['Int'];
  previousPage: Scalars['Boolean'];
  results: Array<Blog>;
  totalCount: Scalars['Int'];
  totalPage: Scalars['Int'];
};

export class BlogTag {
  blog?: Maybe<Blog>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export class CloseTicketInput {
  id: Scalars['String'];
  justification: Scalars['String'];
};

export class CreateBlogCategoryInput {
  name: Scalars['String'];
};

export class CreateBlogCategoryMockInput {
  id: Scalars['String'];
};

export class CreateBlogInput {
  category: CreateBlogCategoryMockInput;
  content: Scalars['String'];
  description: Scalars['String'];
  tag: Array<Scalars['String']>;
  title: Scalars['String'];
  youtubeID?: InputMaybe<Scalars['String']>;
};

export class CreateBlogMockInput {
  id: Scalars['String'];
};

export class CreateBlogTagInput {
  blog: CreateBlogMockInput;
  name: Scalars['String'];
};

export class CreateEnumTypeInput {
  description?: InputMaybe<Scalars['String']>;
  detail?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
  value: Scalars['String'];
};

export class CreateFaqCategoryInput {
  name: Scalars['String'];
};

export class CreateFaqCategoryMockInput {
  id: Scalars['String'];
};

export class CreateFaqInput {
  answer: Scalars['String'];
  category: CreateFaqCategoryMockInput;
  question: Scalars['String'];
};

export class CreateHelpCategory {
  id: Scalars['String'];
};

export class CreateHelpCategoryInput {
  name: Scalars['String'];
};

export class CreateHelpInput {
  category?: InputMaybe<CreateHelpCategory>;
  content: Scalars['String'];
  description: Scalars['String'];
  tag?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  youtubeID?: InputMaybe<Scalars['String']>;
};

export class CreateTicketCommentInput {
  message: Scalars['String'];
  ticket: CreateTicketMockInput;
};

export class CreateTicketInput {
  description: Scalars['String'];
  title: Scalars['String'];
};

export class CreateTicketMockInput {
  id: Scalars['String'];
};

export class CreateUserInput {
  email: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['String']>;
};

export class DefaultMessage {
  message: Scalars['String'];
  status: Scalars['Int'];
};

export class EnumType {
  description?: Maybe<Scalars['String']>;
  detail?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export class Faq {
  answer?: Maybe<Scalars['String']>;
  category?: Maybe<FaqCategory>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  question?: Maybe<Scalars['String']>;
};

export class FaqCategory {
  createdAt?: Maybe<Scalars['DateTime']>;
  faqs?: Maybe<Array<Faq>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export class Help {
  category?: Maybe<HelpCategory>;
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  tags?: Maybe<Array<HelpTag>>;
  thump?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  youtubeID?: Maybe<Scalars['String']>;
};

export class HelpCategory {
  count?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  helps?: Maybe<Array<Help>>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export class HelpPage {
  currentPage: Scalars['Int'];
  nextPage: Scalars['Boolean'];
  pageSize: Scalars['Int'];
  previousPage: Scalars['Boolean'];
  results: Array<Help>;
  totalCount: Scalars['Int'];
  totalPage: Scalars['Int'];
};

export class HelpTag {
  createdAt?: Maybe<Scalars['DateTime']>;
  help?: Maybe<Help>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export class ListTicketDto {
  currentPage: Scalars['Int'];
  nextPage: Scalars['Boolean'];
  pageSize: Scalars['Int'];
  previousPage: Scalars['Boolean'];
  results: Array<Ticket>;
  totalCount: Scalars['Int'];
  totalPage: Scalars['Int'];
};

export class Mutation {
  closeTicket: DefaultMessage;
  createBlog: Blog;
  createBlogCategory: BlogCategory;
  createBlogTag: BlogTag;
  /** Create new Enum Type */
  createEnumType: EnumType;
  createFaq: Faq;
  createFaqCategory: FaqCategory;
  createHelp: Help;
  createHelpCategory: HelpCategory;
  createTicket: Ticket;
  createTicketComment: TicketComment;
  /** Create new User */
  createUser: User;
  /** Remove User By Id */
  deleteUser: DefaultMessage;
  login: AuthType;
  loginSocial: AuthType;
  removeBlog: DefaultMessage;
  removeBlogCategory: DefaultMessage;
  removeBlogTag: DefaultMessage;
  removeEnumType: DefaultMessage;
  removeFaq: DefaultMessage;
  removeFaqCategory: DefaultMessage;
  removeHelp: DefaultMessage;
  removeHelpCategory: DefaultMessage;
  removeHelpTag: DefaultMessage;
  removeTicket: DefaultMessage;
  removeTicketComment: DefaultMessage;
  updateBlog: Blog;
  updateBlogCategory: BlogCategory;
  updateBlogTag: BlogTag;
  updateEnumType: EnumType;
  updateFaq: Faq;
  updateFaqCategory: FaqCategory;
  updateHelp: Help;
  updateHelpCategory: HelpCategory;
  updateTicket: Ticket;
  updateTicketComment: TicketComment;
  /** Update User */
  updateUser: User;
};


export class MutationCloseTicketArgs {
  data: CloseTicketInput;
};


export class MutationCreateBlogArgs {
  data: CreateBlogInput;
};


export class MutationCreateBlogCategoryArgs {
  data: CreateBlogCategoryInput;
};


export class MutationCreateBlogTagArgs {
  data: CreateBlogTagInput;
};


export class MutationCreateEnumTypeArgs {
  data: CreateEnumTypeInput;
};


export class MutationCreateFaqArgs {
  data: CreateFaqInput;
};


export class MutationCreateFaqCategoryArgs {
  data: CreateFaqCategoryInput;
};


export class MutationCreateHelpArgs {
  data: CreateHelpInput;
};


export class MutationCreateHelpCategoryArgs {
  data: CreateHelpCategoryInput;
};


export class MutationCreateTicketArgs {
  data: CreateTicketInput;
};


export class MutationCreateTicketCommentArgs {
  data: CreateTicketCommentInput;
};


export class MutationCreateUserArgs {
  data: CreateUserInput;
};


export class MutationDeleteUserArgs {
  id: Scalars['String'];
};


export class MutationLoginArgs {
  data: AuthInput;
};


export class MutationLoginSocialArgs {
  data: AuthSocialInput;
};


export class MutationRemoveBlogArgs {
  id: Scalars['String'];
};


export class MutationRemoveBlogCategoryArgs {
  id: Scalars['String'];
};


export class MutationRemoveBlogTagArgs {
  id: Scalars['String'];
};


export class MutationRemoveEnumTypeArgs {
  id: Scalars['String'];
};


export class MutationRemoveFaqArgs {
  id: Scalars['String'];
};


export class MutationRemoveFaqCategoryArgs {
  id: Scalars['String'];
};


export class MutationRemoveHelpArgs {
  id: Scalars['String'];
};


export class MutationRemoveHelpCategoryArgs {
  id: Scalars['String'];
};


export class MutationRemoveHelpTagArgs {
  id: Scalars['String'];
};


export class MutationRemoveTicketArgs {
  id: Scalars['String'];
};


export class MutationRemoveTicketCommentArgs {
  id: Scalars['String'];
};


export class MutationUpdateBlogArgs {
  data: UpdateBlogInput;
};


export class MutationUpdateBlogCategoryArgs {
  data: UpdateBlogCategoryInput;
};


export class MutationUpdateBlogTagArgs {
  data: UpdateBlogTagInput;
};


export class MutationUpdateEnumTypeArgs {
  data: UpdateEnumTypeInput;
};


export class MutationUpdateFaqArgs {
  data: UpdateFaqInput;
};


export class MutationUpdateFaqCategoryArgs {
  data: UpdateFaqCategoryInput;
};


export class MutationUpdateHelpArgs {
  data: UpdateHelpInput;
};


export class MutationUpdateHelpCategoryArgs {
  data: UpdateHelpCategoryInput;
};


export class MutationUpdateTicketArgs {
  data: UpdateTicketInput;
};


export class MutationUpdateTicketCommentArgs {
  data: UpdateTicketCommentInput;
};


export class MutationUpdateUserArgs {
  data: UpdateUserInput;
  id: Scalars['String'];
};

export class Query {
  blog: Blog;
  blogByUrl: Blog;
  blogCategories: Array<BlogCategory>;
  blogCategory: BlogCategory;
  blogTag: BlogTag;
  blogTags: Array<BlogTag>;
  blogs: Array<Blog>;
  count: Scalars['Float'];
  /** Return User Logged */
  currentUser: User;
  enumByType: Array<EnumType>;
  enumType: EnumType;
  enumTypes: Array<EnumType>;
  faq: Faq;
  faqCategories: Array<FaqCategory>;
  faqCategory: FaqCategory;
  faqs: Array<Faq>;
  help: Help;
  helpByUrl: Help;
  helpCategories: Array<HelpCategory>;
  helpCategory: HelpCategory;
  helpTag: HelpTag;
  helps: Array<Help>;
  latestTopics: Array<Blog>;
  searchBlog: BlogPage;
  searchHelp: HelpPage;
  searchHelpByCategory: HelpPage;
  searchTicket: ListTicketDto;
  ticket: Ticket;
  ticketComment: TicketComment;
  ticketComments: Array<TicketComment>;
  tickets: ListTicketDto;
  /** Return User By Id */
  user: User;
  /** Return User By Email */
  userByEmail: User;
  /** Return All Users */
  users: UserPage;
};


export class QueryBlogArgs {
  id: Scalars['String'];
};


export class QueryBlogByUrlArgs {
  url: Scalars['String'];
};


export class QueryBlogCategoryArgs {
  id: Scalars['String'];
};


export class QueryBlogTagArgs {
  id: Scalars['String'];
};


export class QueryEnumByTypeArgs {
  type: Scalars['String'];
};


export class QueryEnumTypeArgs {
  id: Scalars['String'];
};


export class QueryFaqArgs {
  id: Scalars['String'];
};


export class QueryFaqCategoryArgs {
  id: Scalars['String'];
};


export class QueryHelpArgs {
  id: Scalars['String'];
};


export class QueryHelpByUrlArgs {
  url: Scalars['String'];
};


export class QueryHelpCategoryArgs {
  id: Scalars['String'];
};


export class QueryHelpTagArgs {
  id: Scalars['String'];
};


export class QuerySearchBlogArgs {
  data: SearchBlogInput;
};


export class QuerySearchHelpArgs {
  data: SearchHelpInput;
};


export class QuerySearchHelpByCategoryArgs {
  categoryId: Scalars['String'];
  page?: InputMaybe<Scalars['Float']>;
};


export class QuerySearchTicketArgs {
  data: SearchTicketInput;
};


export class QueryTicketArgs {
  id: Scalars['String'];
};


export class QueryTicketCommentArgs {
  id: Scalars['String'];
};


export class QueryTicketsArgs {
  filter?: InputMaybe<Scalars['String']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export class QueryUserArgs {
  id: Scalars['String'];
};


export class QueryUserByEmailArgs {
  email: Scalars['String'];
};


export class QueryUsersArgs {
  page?: InputMaybe<Scalars['Int']>;
};

export class SearchBlogInput {
  keyword?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  tag?: InputMaybe<Scalars['String']>;
};

export class SearchHelpInput {
  category?: InputMaybe<Scalars['String']>;
  keyword?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  tag?: InputMaybe<Scalars['String']>;
};

export class SearchTicketInput {
  keyword?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  /** 'open'|'answered'|'await'|'closed' */
  status?: InputMaybe<Scalars['String']>;
};

export class Ticket {
  closeDate?: Maybe<Scalars['DateTime']>;
  closeJustification?: Maybe<Scalars['String']>;
  closedBy?: Maybe<User>;
  code?: Maybe<Scalars['String']>;
  comment?: Maybe<Array<TicketComment>>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  id: Scalars['String'];
  managerBy?: Maybe<User>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export class TicketComment {
  createdAt?: Maybe<Scalars['DateTime']>;
  createdBy?: Maybe<User>;
  id: Scalars['String'];
  message: Scalars['String'];
  ticket?: Maybe<Ticket>;
};

export class UpdateBlogCategoryInput {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export class UpdateBlogInput {
  category?: InputMaybe<CreateBlogCategoryMockInput>;
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  tag?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  youtubeID?: InputMaybe<Scalars['String']>;
};

export class UpdateBlogTagInput {
  blog?: InputMaybe<CreateBlogMockInput>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export class UpdateEnumTypeInput {
  description?: InputMaybe<Scalars['String']>;
  detail?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export class UpdateFaqCategoryInput {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export class UpdateFaqInput {
  answer?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<CreateFaqCategoryMockInput>;
  id: Scalars['String'];
  question?: InputMaybe<Scalars['String']>;
};

export class UpdateHelpCategoryInput {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export class UpdateHelpInput {
  category?: InputMaybe<CreateHelpCategory>;
  content?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  tag?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  youtubeID?: InputMaybe<Scalars['String']>;
};

export class UpdateTicketCommentInput {
  id: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  ticket?: InputMaybe<CreateTicketMockInput>;
};

export class UpdateTicketInput {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};

export class UpdateUserInput {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['String']>;
};

export class User {
  createBlog?: Maybe<Blog>;
  createHelp?: Maybe<Help>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  photo?: Maybe<Scalars['String']>;
  profile: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export class UserPage {
  currentPage: Scalars['Int'];
  nextPage: Scalars['Boolean'];
  pageSize: Scalars['Int'];
  previousPage: Scalars['Boolean'];
  totalCount: Scalars['Int'];
  totalPage: Scalars['Int'];
  users: Array<User>;
};
