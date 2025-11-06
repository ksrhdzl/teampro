import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  ConnectionCursor: { input: any; output: any };
  DateTime: { input: any; output: any };
  JSONObject: { input: any; output: any };
};

export type AddMessagesToConversationInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type AuthInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthOutput = {
  __typename?: 'AuthOutput';
  token?: Maybe<Scalars['String']['output']>;
};

export type Conversation = {
  __typename?: 'Conversation';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  messages?: Maybe<Array<Message>>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
  workspace?: Maybe<Workspace>;
  workspaceId?: Maybe<Scalars['Int']['output']>;
};

export type ConversationMessagesArgs = {
  filter?: MessageFilter;
  sorting?: Array<MessageSort>;
};

export type ConversationConnection = {
  __typename?: 'ConversationConnection';
  /** Array of nodes. */
  nodes: Array<Conversation>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ConversationDeleteResponse = {
  __typename?: 'ConversationDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
  workspaceId?: Maybe<Scalars['Int']['output']>;
};

export type ConversationFilter = {
  and?: InputMaybe<Array<ConversationFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ConversationFilter>>;
  slug?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export type ConversationSort = {
  direction: SortDirection;
  field: ConversationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ConversationSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId',
}

export type CreateConversationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateIssueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  slug: Scalars['String']['input'];
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<IssueStatusEnum>;
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateMemberConversationInput = {
  conversationId?: InputMaybe<Scalars['Int']['input']>;
  memberId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  role?: InputMaybe<MemberConversationRoleEnum>;
};

export type CreateMemberInput = {
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  role?: InputMaybe<MemberRoleEnum>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateMemberIssueInput = {
  issueId?: InputMaybe<Scalars['Int']['input']>;
  memberId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  role?: InputMaybe<MemberIssueRoleEnum>;
};

export type CreateMemberProjectInput = {
  memberId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<MemberProjectRoleEnum>;
};

export type CreateMessageInput = {
  content: Scalars['String']['input'];
  memberId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  type: Scalars['String']['input'];
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateOneConversationInput = {
  /** The record to create */
  conversation: CreateConversationInput;
};

export type CreateOneIssueInput = {
  /** The record to create */
  issue: CreateIssueInput;
};

export type CreateOneMemberConversationInput = {
  /** The record to create */
  memberConversation: CreateMemberConversationInput;
};

export type CreateOneMemberInput = {
  /** The record to create */
  member: CreateMemberInput;
};

export type CreateOneMemberIssueInput = {
  /** The record to create */
  memberIssue: CreateMemberIssueInput;
};

export type CreateOneMemberProjectInput = {
  /** The record to create */
  memberProject: CreateMemberProjectInput;
};

export type CreateOneMessageInput = {
  /** The record to create */
  message: CreateMessageInput;
};

export type CreateOneProjectInput = {
  /** The record to create */
  project: CreateProjectInput;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: CreateUserInput;
};

export type CreateOneWorkspaceInput = {
  /** The record to create */
  workspace: CreateWorkspaceInput;
};

export type CreateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug: Scalars['String']['input'];
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CreateWorkspaceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']['input']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime']['input'];
  upper: Scalars['DateTime']['input'];
};

export type DeleteOneConversationInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneIssueInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneMemberConversationInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneMemberInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneMemberIssueInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneMemberProjectInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneMessageInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneProjectInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneUserInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneWorkspaceInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  iLike?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  neq?: InputMaybe<Scalars['ID']['input']>;
  notILike?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  notLike?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFieldComparison = {
  between?: InputMaybe<IntFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
  notBetween?: InputMaybe<IntFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntFieldComparisonBetween = {
  lower: Scalars['Int']['input'];
  upper: Scalars['Int']['input'];
};

export type Issue = {
  __typename?: 'Issue';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  startAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<IssueStatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
  workspace?: Maybe<Workspace>;
  workspaceId?: Maybe<Scalars['Int']['output']>;
};

export type IssueConnection = {
  __typename?: 'IssueConnection';
  /** Array of nodes. */
  nodes: Array<Issue>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type IssueDeleteResponse = {
  __typename?: 'IssueDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  projectId?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  startAt?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<IssueStatusEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
  workspaceId?: Maybe<Scalars['Int']['output']>;
};

export type IssueFilter = {
  and?: InputMaybe<Array<IssueFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  endAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<IssueFilter>>;
  position?: InputMaybe<IntFieldComparison>;
  projectId?: InputMaybe<IntFieldComparison>;
  slug?: InputMaybe<StringFieldComparison>;
  startAt?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<IssueStatusEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export type IssueSort = {
  direction: SortDirection;
  field: IssueSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum IssueSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  EndAt = 'endAt',
  Id = 'id',
  Name = 'name',
  Position = 'position',
  ProjectId = 'projectId',
  Slug = 'slug',
  StartAt = 'startAt',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId',
}

export enum IssueStatusEnum {
  Backlog = 'BACKLOG',
  Done = 'DONE',
  Inprogress = 'INPROGRESS',
  Inreview = 'INREVIEW',
  Todo = 'TODO',
}

export type IssueStatusEnumFilterComparison = {
  eq?: InputMaybe<IssueStatusEnum>;
  gt?: InputMaybe<IssueStatusEnum>;
  gte?: InputMaybe<IssueStatusEnum>;
  iLike?: InputMaybe<IssueStatusEnum>;
  in?: InputMaybe<Array<IssueStatusEnum>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<IssueStatusEnum>;
  lt?: InputMaybe<IssueStatusEnum>;
  lte?: InputMaybe<IssueStatusEnum>;
  neq?: InputMaybe<IssueStatusEnum>;
  notILike?: InputMaybe<IssueStatusEnum>;
  notIn?: InputMaybe<Array<IssueStatusEnum>>;
  notLike?: InputMaybe<IssueStatusEnum>;
};

export type Member = {
  __typename?: 'Member';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  role?: Maybe<MemberRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
  version: Scalars['Int']['output'];
  workspace?: Maybe<Workspace>;
  workspaceId?: Maybe<Scalars['Int']['output']>;
};

export type MemberConnection = {
  __typename?: 'MemberConnection';
  /** Array of nodes. */
  nodes: Array<Member>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type MemberConversation = {
  __typename?: 'MemberConversation';
  conversation?: Maybe<Conversation>;
  conversationId?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  role?: Maybe<MemberConversationRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
};

export type MemberConversationConnection = {
  __typename?: 'MemberConversationConnection';
  /** Array of nodes. */
  nodes: Array<MemberConversation>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type MemberConversationDeleteResponse = {
  __typename?: 'MemberConversationDeleteResponse';
  conversationId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  memberId?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  role?: Maybe<MemberConversationRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type MemberConversationFilter = {
  and?: InputMaybe<Array<MemberConversationFilter>>;
  conversation?: InputMaybe<MemberConversationFilterConversationFilter>;
  conversationId?: InputMaybe<IntFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  member?: InputMaybe<MemberConversationFilterMemberFilter>;
  memberId?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<MemberConversationFilter>>;
  role?: InputMaybe<MemberConversationRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MemberConversationFilterConversationFilter = {
  and?: InputMaybe<Array<MemberConversationFilterConversationFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MemberConversationFilterConversationFilter>>;
  slug?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export type MemberConversationFilterMemberFilter = {
  and?: InputMaybe<Array<MemberConversationFilterMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MemberConversationFilterMemberFilter>>;
  role?: InputMaybe<MemberRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IntFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export enum MemberConversationRoleEnum {
  Manager = 'MANAGER',
  Member = 'MEMBER',
}

export type MemberConversationRoleEnumFilterComparison = {
  eq?: InputMaybe<MemberConversationRoleEnum>;
  gt?: InputMaybe<MemberConversationRoleEnum>;
  gte?: InputMaybe<MemberConversationRoleEnum>;
  iLike?: InputMaybe<MemberConversationRoleEnum>;
  in?: InputMaybe<Array<MemberConversationRoleEnum>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<MemberConversationRoleEnum>;
  lt?: InputMaybe<MemberConversationRoleEnum>;
  lte?: InputMaybe<MemberConversationRoleEnum>;
  neq?: InputMaybe<MemberConversationRoleEnum>;
  notILike?: InputMaybe<MemberConversationRoleEnum>;
  notIn?: InputMaybe<Array<MemberConversationRoleEnum>>;
  notLike?: InputMaybe<MemberConversationRoleEnum>;
};

export type MemberConversationSort = {
  direction: SortDirection;
  field: MemberConversationSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MemberConversationSortFields {
  ConversationId = 'conversationId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  MemberId = 'memberId',
  Role = 'role',
  UpdatedAt = 'updatedAt',
}

export type MemberDeleteResponse = {
  __typename?: 'MemberDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  role?: Maybe<MemberRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
  workspaceId?: Maybe<Scalars['Int']['output']>;
};

export type MemberFilter = {
  and?: InputMaybe<Array<MemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MemberFilter>>;
  role?: InputMaybe<MemberRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IntFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export type MemberIssue = {
  __typename?: 'MemberIssue';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  issue?: Maybe<Issue>;
  issueId?: Maybe<Scalars['Int']['output']>;
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  role?: Maybe<MemberIssueRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
};

export type MemberIssueConnection = {
  __typename?: 'MemberIssueConnection';
  /** Array of nodes. */
  nodes: Array<MemberIssue>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type MemberIssueDeleteResponse = {
  __typename?: 'MemberIssueDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  issueId?: Maybe<Scalars['Int']['output']>;
  memberId?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  role?: Maybe<MemberIssueRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type MemberIssueFilter = {
  and?: InputMaybe<Array<MemberIssueFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  issue?: InputMaybe<MemberIssueFilterIssueFilter>;
  issueId?: InputMaybe<IntFieldComparison>;
  member?: InputMaybe<MemberIssueFilterMemberFilter>;
  memberId?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<MemberIssueFilter>>;
  role?: InputMaybe<MemberIssueRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MemberIssueFilterIssueFilter = {
  and?: InputMaybe<Array<MemberIssueFilterIssueFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  endAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MemberIssueFilterIssueFilter>>;
  position?: InputMaybe<IntFieldComparison>;
  projectId?: InputMaybe<IntFieldComparison>;
  slug?: InputMaybe<StringFieldComparison>;
  startAt?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<IssueStatusEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export type MemberIssueFilterMemberFilter = {
  and?: InputMaybe<Array<MemberIssueFilterMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MemberIssueFilterMemberFilter>>;
  role?: InputMaybe<MemberRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IntFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export enum MemberIssueRoleEnum {
  Manager = 'MANAGER',
  Member = 'MEMBER',
}

export type MemberIssueRoleEnumFilterComparison = {
  eq?: InputMaybe<MemberIssueRoleEnum>;
  gt?: InputMaybe<MemberIssueRoleEnum>;
  gte?: InputMaybe<MemberIssueRoleEnum>;
  iLike?: InputMaybe<MemberIssueRoleEnum>;
  in?: InputMaybe<Array<MemberIssueRoleEnum>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<MemberIssueRoleEnum>;
  lt?: InputMaybe<MemberIssueRoleEnum>;
  lte?: InputMaybe<MemberIssueRoleEnum>;
  neq?: InputMaybe<MemberIssueRoleEnum>;
  notILike?: InputMaybe<MemberIssueRoleEnum>;
  notIn?: InputMaybe<Array<MemberIssueRoleEnum>>;
  notLike?: InputMaybe<MemberIssueRoleEnum>;
};

export type MemberIssueSort = {
  direction: SortDirection;
  field: MemberIssueSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MemberIssueSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  IssueId = 'issueId',
  MemberId = 'memberId',
  Role = 'role',
  UpdatedAt = 'updatedAt',
}

export type MemberProject = {
  __typename?: 'MemberProject';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  project?: Maybe<Project>;
  projectId?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<MemberProjectRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
};

export type MemberProjectConnection = {
  __typename?: 'MemberProjectConnection';
  /** Array of nodes. */
  nodes: Array<MemberProject>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type MemberProjectDeleteResponse = {
  __typename?: 'MemberProjectDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  memberId?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  projectId?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<MemberProjectRoleEnum>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type MemberProjectFilter = {
  and?: InputMaybe<Array<MemberProjectFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  member?: InputMaybe<MemberProjectFilterMemberFilter>;
  memberId?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<MemberProjectFilter>>;
  project?: InputMaybe<MemberProjectFilterProjectFilter>;
  projectId?: InputMaybe<IntFieldComparison>;
  role?: InputMaybe<MemberProjectRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MemberProjectFilterMemberFilter = {
  and?: InputMaybe<Array<MemberProjectFilterMemberFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MemberProjectFilterMemberFilter>>;
  role?: InputMaybe<MemberRoleEnumFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<IntFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export type MemberProjectFilterProjectFilter = {
  and?: InputMaybe<Array<MemberProjectFilterProjectFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MemberProjectFilterProjectFilter>>;
  slug?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export enum MemberProjectRoleEnum {
  Manager = 'MANAGER',
  Member = 'MEMBER',
}

export type MemberProjectRoleEnumFilterComparison = {
  eq?: InputMaybe<MemberProjectRoleEnum>;
  gt?: InputMaybe<MemberProjectRoleEnum>;
  gte?: InputMaybe<MemberProjectRoleEnum>;
  iLike?: InputMaybe<MemberProjectRoleEnum>;
  in?: InputMaybe<Array<MemberProjectRoleEnum>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<MemberProjectRoleEnum>;
  lt?: InputMaybe<MemberProjectRoleEnum>;
  lte?: InputMaybe<MemberProjectRoleEnum>;
  neq?: InputMaybe<MemberProjectRoleEnum>;
  notILike?: InputMaybe<MemberProjectRoleEnum>;
  notIn?: InputMaybe<Array<MemberProjectRoleEnum>>;
  notLike?: InputMaybe<MemberProjectRoleEnum>;
};

export type MemberProjectSort = {
  direction: SortDirection;
  field: MemberProjectSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MemberProjectSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  MemberId = 'memberId',
  ProjectId = 'projectId',
  Role = 'role',
  UpdatedAt = 'updatedAt',
}

export enum MemberRoleEnum {
  Manager = 'MANAGER',
  Member = 'MEMBER',
}

export type MemberRoleEnumFilterComparison = {
  eq?: InputMaybe<MemberRoleEnum>;
  gt?: InputMaybe<MemberRoleEnum>;
  gte?: InputMaybe<MemberRoleEnum>;
  iLike?: InputMaybe<MemberRoleEnum>;
  in?: InputMaybe<Array<MemberRoleEnum>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<MemberRoleEnum>;
  lt?: InputMaybe<MemberRoleEnum>;
  lte?: InputMaybe<MemberRoleEnum>;
  neq?: InputMaybe<MemberRoleEnum>;
  notILike?: InputMaybe<MemberRoleEnum>;
  notIn?: InputMaybe<Array<MemberRoleEnum>>;
  notLike?: InputMaybe<MemberRoleEnum>;
};

export type MemberSort = {
  direction: SortDirection;
  field: MemberSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MemberSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
  WorkspaceId = 'workspaceId',
}

export type Message = {
  __typename?: 'Message';
  content: Scalars['String']['output'];
  conversations?: Maybe<Array<Conversation>>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  member?: Maybe<Member>;
  memberId?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
  workspace?: Maybe<Workspace>;
  workspaceId?: Maybe<Scalars['Int']['output']>;
};

export type MessageConversationsArgs = {
  filter?: ConversationFilter;
  sorting?: Array<ConversationSort>;
};

export type MessageConnection = {
  __typename?: 'MessageConnection';
  /** Array of edges. */
  edges: Array<MessageEdge>;
  /** Paging information */
  pageInfo: PageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type MessageDeleteResponse = {
  __typename?: 'MessageDeleteResponse';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  memberId?: Maybe<Scalars['Int']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
  workspaceId?: Maybe<Scalars['Int']['output']>;
};

export type MessageEdge = {
  __typename?: 'MessageEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor']['output'];
  /** The node containing the Message */
  node: Message;
};

export type MessageFilter = {
  and?: InputMaybe<Array<MessageFilter>>;
  conversations?: InputMaybe<MessageFilterConversationFilter>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  memberId?: InputMaybe<IntFieldComparison>;
  or?: InputMaybe<Array<MessageFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export type MessageFilterConversationFilter = {
  and?: InputMaybe<Array<MessageFilterConversationFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<MessageFilterConversationFilter>>;
  slug?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export type MessageSort = {
  direction: SortDirection;
  field: MessageSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MessageSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  MemberId = 'memberId',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId',
}

export type Mutation = {
  __typename?: 'Mutation';
  addMessagesToConversation: Conversation;
  createConversation: Conversation;
  createIssue: Issue;
  createMember: Member;
  createMemberConversation: MemberConversation;
  createMemberIssue: MemberIssue;
  createMemberProject: MemberProject;
  createMessage: Message;
  createProject: Project;
  createUser: User;
  createWorkspace: Workspace;
  deleteConversation: ConversationDeleteResponse;
  deleteIssue: IssueDeleteResponse;
  deleteMember: MemberDeleteResponse;
  deleteMemberConversation: MemberConversationDeleteResponse;
  deleteMemberIssue: MemberIssueDeleteResponse;
  deleteMemberProject: MemberProjectDeleteResponse;
  deleteMessage: MessageDeleteResponse;
  deleteProject: ProjectDeleteResponse;
  deleteUser: UserDeleteResponse;
  deleteWorkspace: WorkspaceDeleteResponse;
  login: AuthOutput;
  logout: Scalars['Boolean']['output'];
  presignedAsset: PresignedAssetOutput;
  removeMessagesFromConversation: Conversation;
  setMessagesOnConversation: Conversation;
  updateConversation: Conversation;
  updateIssue: Issue;
  updateMember: Member;
  updateMemberConversation: MemberConversation;
  updateMemberIssue: MemberIssue;
  updateMemberProject: MemberProject;
  updateMessage: Message;
  updateProject: Project;
  updateUser: User;
  updateWorkspace: Workspace;
};

export type MutationAddMessagesToConversationArgs = {
  input: AddMessagesToConversationInput;
};

export type MutationCreateConversationArgs = {
  input: CreateOneConversationInput;
};

export type MutationCreateIssueArgs = {
  input: CreateOneIssueInput;
};

export type MutationCreateMemberArgs = {
  input: CreateOneMemberInput;
};

export type MutationCreateMemberConversationArgs = {
  input: CreateOneMemberConversationInput;
};

export type MutationCreateMemberIssueArgs = {
  input: CreateOneMemberIssueInput;
};

export type MutationCreateMemberProjectArgs = {
  input: CreateOneMemberProjectInput;
};

export type MutationCreateMessageArgs = {
  input: CreateOneMessageInput;
};

export type MutationCreateProjectArgs = {
  input: CreateOneProjectInput;
};

export type MutationCreateUserArgs = {
  input: CreateOneUserInput;
};

export type MutationCreateWorkspaceArgs = {
  input: CreateOneWorkspaceInput;
};

export type MutationDeleteConversationArgs = {
  input: DeleteOneConversationInput;
};

export type MutationDeleteIssueArgs = {
  input: DeleteOneIssueInput;
};

export type MutationDeleteMemberArgs = {
  input: DeleteOneMemberInput;
};

export type MutationDeleteMemberConversationArgs = {
  input: DeleteOneMemberConversationInput;
};

export type MutationDeleteMemberIssueArgs = {
  input: DeleteOneMemberIssueInput;
};

export type MutationDeleteMemberProjectArgs = {
  input: DeleteOneMemberProjectInput;
};

export type MutationDeleteMessageArgs = {
  input: DeleteOneMessageInput;
};

export type MutationDeleteProjectArgs = {
  input: DeleteOneProjectInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteOneUserInput;
};

export type MutationDeleteWorkspaceArgs = {
  input: DeleteOneWorkspaceInput;
};

export type MutationLoginArgs = {
  input: AuthInput;
};

export type MutationRemoveMessagesFromConversationArgs = {
  input: RemoveMessagesFromConversationInput;
};

export type MutationSetMessagesOnConversationArgs = {
  input: SetMessagesOnConversationInput;
};

export type MutationUpdateConversationArgs = {
  input: UpdateOneConversationInput;
};

export type MutationUpdateIssueArgs = {
  input: UpdateOneIssueInput;
};

export type MutationUpdateMemberArgs = {
  input: UpdateOneMemberInput;
};

export type MutationUpdateMemberConversationArgs = {
  input: UpdateOneMemberConversationInput;
};

export type MutationUpdateMemberIssueArgs = {
  input: UpdateOneMemberIssueInput;
};

export type MutationUpdateMemberProjectArgs = {
  input: UpdateOneMemberProjectInput;
};

export type MutationUpdateMessageArgs = {
  input: UpdateOneMessageInput;
};

export type MutationUpdateProjectArgs = {
  input: UpdateOneProjectInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateOneUserInput;
};

export type MutationUpdateWorkspaceArgs = {
  input: UpdateOneWorkspaceInput;
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']['output']>;
};

export type PresignedAssetOutput = {
  __typename?: 'PresignedAssetOutput';
  link?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  issues?: Maybe<ProjectIssuesConnection>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
  workspace?: Maybe<Workspace>;
  workspaceId?: Maybe<Scalars['Int']['output']>;
};

export type ProjectIssuesArgs = {
  filter?: IssueFilter;
  paging?: OffsetPaging;
  sorting?: Array<IssueSort>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  /** Array of nodes. */
  nodes: Array<Project>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type ProjectDeleteResponse = {
  __typename?: 'ProjectDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
  workspaceId?: Maybe<Scalars['Int']['output']>;
};

export type ProjectFilter = {
  and?: InputMaybe<Array<ProjectFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProjectFilter>>;
  slug?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  workspaceId?: InputMaybe<IntFieldComparison>;
};

export type ProjectIssuesConnection = {
  __typename?: 'ProjectIssuesConnection';
  /** Array of nodes. */
  nodes: Array<Issue>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type ProjectSort = {
  direction: SortDirection;
  field: ProjectSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProjectSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Slug = 'slug',
  UpdatedAt = 'updatedAt',
  WorkspaceId = 'workspaceId',
}

export type Query = {
  __typename?: 'Query';
  account: User;
  conversation: Conversation;
  conversations: ConversationConnection;
  issue: Issue;
  issues: IssueConnection;
  member: Member;
  memberConversation: MemberConversation;
  memberConversations: MemberConversationConnection;
  memberIssue: MemberIssue;
  memberIssues: MemberIssueConnection;
  memberProject: MemberProject;
  memberProjects: MemberProjectConnection;
  members: MemberConnection;
  message: Message;
  messages: MessageConnection;
  project: Project;
  projects: ProjectConnection;
  user: User;
  users: UserConnection;
  workspace: Workspace;
  workspaces: WorkspaceConnection;
};

export type QueryConversationArgs = {
  id: Scalars['ID']['input'];
};

export type QueryConversationsArgs = {
  filter?: ConversationFilter;
  paging?: OffsetPaging;
  sorting?: Array<ConversationSort>;
};

export type QueryIssueArgs = {
  id: Scalars['ID']['input'];
};

export type QueryIssuesArgs = {
  filter?: IssueFilter;
  paging?: OffsetPaging;
  sorting?: Array<IssueSort>;
};

export type QueryMemberArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMemberConversationArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMemberConversationsArgs = {
  filter?: MemberConversationFilter;
  paging?: OffsetPaging;
  sorting?: Array<MemberConversationSort>;
};

export type QueryMemberIssueArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMemberIssuesArgs = {
  filter?: MemberIssueFilter;
  paging?: OffsetPaging;
  sorting?: Array<MemberIssueSort>;
};

export type QueryMemberProjectArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMemberProjectsArgs = {
  filter?: MemberProjectFilter;
  paging?: OffsetPaging;
  sorting?: Array<MemberProjectSort>;
};

export type QueryMembersArgs = {
  filter?: MemberFilter;
  paging?: OffsetPaging;
  sorting?: Array<MemberSort>;
};

export type QueryMessageArgs = {
  id: Scalars['ID']['input'];
};

export type QueryMessagesArgs = {
  filter?: MessageFilter;
  paging?: CursorPaging;
  sorting?: Array<MessageSort>;
};

export type QueryProjectArgs = {
  id: Scalars['ID']['input'];
};

export type QueryProjectsArgs = {
  filter?: ProjectFilter;
  paging?: OffsetPaging;
  sorting?: Array<ProjectSort>;
};

export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};

export type QueryWorkspaceArgs = {
  id: Scalars['ID']['input'];
};

export type QueryWorkspacesArgs = {
  filter?: WorkspaceFilter;
  paging?: OffsetPaging;
  sorting?: Array<WorkspaceSort>;
};

export type RemoveMessagesFromConversationInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

export type SetMessagesOnConversationInput = {
  /** The id of the record. */
  id: Scalars['ID']['input'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']['input']>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST',
}

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateConversationInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateIssueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['DateTime']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<IssueStatusEnum>;
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateMemberConversationInput = {
  conversationId?: InputMaybe<Scalars['Int']['input']>;
  memberId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  role?: InputMaybe<MemberConversationRoleEnum>;
};

export type UpdateMemberInput = {
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  role?: InputMaybe<MemberRoleEnum>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateMemberIssueInput = {
  issueId?: InputMaybe<Scalars['Int']['input']>;
  memberId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  role?: InputMaybe<MemberIssueRoleEnum>;
};

export type UpdateMemberProjectInput = {
  memberId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<MemberProjectRoleEnum>;
};

export type UpdateMessageInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  memberId?: InputMaybe<Scalars['Int']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateOneConversationInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateConversationInput;
};

export type UpdateOneIssueInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateIssueInput;
};

export type UpdateOneMemberConversationInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateMemberConversationInput;
};

export type UpdateOneMemberInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateMemberInput;
};

export type UpdateOneMemberIssueInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateMemberIssueInput;
};

export type UpdateOneMemberProjectInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateMemberProjectInput;
};

export type UpdateOneMessageInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateMessageInput;
};

export type UpdateOneProjectInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateProjectInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateUserInput;
};

export type UpdateOneWorkspaceInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UpdateWorkspaceInput;
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateWorkspaceInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSONObject']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type Workspace = {
  __typename?: 'Workspace';
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version: Scalars['Int']['output'];
};

export type WorkspaceConnection = {
  __typename?: 'WorkspaceConnection';
  /** Array of nodes. */
  nodes: Array<Workspace>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
  /** Fetch total count of records */
  totalCount: Scalars['Int']['output'];
};

export type WorkspaceDeleteResponse = {
  __typename?: 'WorkspaceDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSONObject']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<Scalars['Int']['output']>;
};

export type WorkspaceFilter = {
  and?: InputMaybe<Array<WorkspaceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<WorkspaceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type WorkspaceSort = {
  direction: SortDirection;
  field: WorkspaceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum WorkspaceSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type PresignedAssetMutationVariables = Exact<{ [key: string]: never }>;

export type PresignedAssetMutation = {
  __typename?: 'Mutation';
  presignedAsset: {
    __typename?: 'PresignedAssetOutput';
    name?: string | null;
    link?: string | null;
  };
};

export type AccountQueryVariables = Exact<{ [key: string]: never }>;

export type AccountQuery = {
  __typename?: 'Query';
  account: {
    __typename?: 'User';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    email?: string | null;
    name?: string | null;
  };
};

export type LoginMutationVariables = Exact<{
  input: AuthInput;
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: { __typename?: 'AuthOutput'; token?: string | null };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation'; logout: boolean };

export type ConversationFieldsFragment = {
  __typename?: 'Conversation';
  id: string;
  metadata?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  deletedAt?: any | null;
  version: number;
  name?: string | null;
  type: string;
  slug?: string | null;
  description?: string | null;
  workspaceId?: number | null;
  workspace?: {
    __typename?: 'Workspace';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name: string;
    slug: string;
    description?: string | null;
    image?: string | null;
  } | null;
  messages?: Array<{
    __typename?: 'Message';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    content: string;
    type: string;
    workspaceId?: number | null;
    memberId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    member?: {
      __typename?: 'Member';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      workspaceId?: number | null;
      role?: MemberRoleEnum | null;
      userId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      user?: {
        __typename?: 'User';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug?: string | null;
        email?: string | null;
      } | null;
    } | null;
  }> | null;
};

export type ConversationQueryVariables = Exact<{
  conversationId: Scalars['ID']['input'];
}>;

export type ConversationQuery = {
  __typename?: 'Query';
  conversation: {
    __typename?: 'Conversation';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    type: string;
    slug?: string | null;
    description?: string | null;
    workspaceId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    messages?: Array<{
      __typename?: 'Message';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      content: string;
      type: string;
      workspaceId?: number | null;
      memberId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      member?: {
        __typename?: 'Member';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        workspaceId?: number | null;
        role?: MemberRoleEnum | null;
        userId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        user?: {
          __typename?: 'User';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name?: string | null;
          slug?: string | null;
          email?: string | null;
        } | null;
      } | null;
    }> | null;
  };
};

export type ConversationsQueryVariables = Exact<{
  sorting: Array<ConversationSort> | ConversationSort;
  filter: ConversationFilter;
  paging: OffsetPaging;
}>;

export type ConversationsQuery = {
  __typename?: 'Query';
  conversations: {
    __typename?: 'ConversationConnection';
    totalCount: number;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
    nodes: Array<{
      __typename?: 'Conversation';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      type: string;
      slug?: string | null;
      description?: string | null;
      workspaceId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      messages?: Array<{
        __typename?: 'Message';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        content: string;
        type: string;
        workspaceId?: number | null;
        memberId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        member?: {
          __typename?: 'Member';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          workspaceId?: number | null;
          role?: MemberRoleEnum | null;
          userId?: number | null;
          workspace?: {
            __typename?: 'Workspace';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name: string;
            slug: string;
            description?: string | null;
            image?: string | null;
          } | null;
          user?: {
            __typename?: 'User';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name?: string | null;
            slug?: string | null;
            email?: string | null;
          } | null;
        } | null;
      }> | null;
    }>;
  };
};

export type CreateConversationMutationVariables = Exact<{
  input: CreateOneConversationInput;
}>;

export type CreateConversationMutation = {
  __typename?: 'Mutation';
  createConversation: {
    __typename?: 'Conversation';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    type: string;
    slug?: string | null;
    description?: string | null;
    workspaceId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    messages?: Array<{
      __typename?: 'Message';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      content: string;
      type: string;
      workspaceId?: number | null;
      memberId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      member?: {
        __typename?: 'Member';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        workspaceId?: number | null;
        role?: MemberRoleEnum | null;
        userId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        user?: {
          __typename?: 'User';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name?: string | null;
          slug?: string | null;
          email?: string | null;
        } | null;
      } | null;
    }> | null;
  };
};

export type UpdateConversationMutationVariables = Exact<{
  input: UpdateOneConversationInput;
}>;

export type UpdateConversationMutation = {
  __typename?: 'Mutation';
  updateConversation: {
    __typename?: 'Conversation';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    type: string;
    slug?: string | null;
    description?: string | null;
    workspaceId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    messages?: Array<{
      __typename?: 'Message';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      content: string;
      type: string;
      workspaceId?: number | null;
      memberId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      member?: {
        __typename?: 'Member';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        workspaceId?: number | null;
        role?: MemberRoleEnum | null;
        userId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        user?: {
          __typename?: 'User';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name?: string | null;
          slug?: string | null;
          email?: string | null;
        } | null;
      } | null;
    }> | null;
  };
};

export type MessageFieldsFragment = {
  __typename?: 'Message';
  id: string;
  metadata?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  deletedAt?: any | null;
  version: number;
  content: string;
  type: string;
  workspaceId?: number | null;
  memberId?: number | null;
  workspace?: {
    __typename?: 'Workspace';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name: string;
    slug: string;
    description?: string | null;
    image?: string | null;
  } | null;
  member?: {
    __typename?: 'Member';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    workspaceId?: number | null;
    role?: MemberRoleEnum | null;
    userId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    user?: {
      __typename?: 'User';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      slug?: string | null;
      email?: string | null;
    } | null;
  } | null;
};

export type MessageQueryVariables = Exact<{
  messageId: Scalars['ID']['input'];
}>;

export type MessageQuery = {
  __typename?: 'Query';
  message: {
    __typename?: 'Message';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    content: string;
    type: string;
    workspaceId?: number | null;
    memberId?: number | null;
    conversations?: Array<{
      __typename?: 'Conversation';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      type: string;
      slug?: string | null;
      description?: string | null;
      workspaceId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      messages?: Array<{
        __typename?: 'Message';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        content: string;
        type: string;
        workspaceId?: number | null;
        memberId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        member?: {
          __typename?: 'Member';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          workspaceId?: number | null;
          role?: MemberRoleEnum | null;
          userId?: number | null;
          workspace?: {
            __typename?: 'Workspace';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name: string;
            slug: string;
            description?: string | null;
            image?: string | null;
          } | null;
          user?: {
            __typename?: 'User';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name?: string | null;
            slug?: string | null;
            email?: string | null;
          } | null;
        } | null;
      }> | null;
    }> | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    member?: {
      __typename?: 'Member';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      workspaceId?: number | null;
      role?: MemberRoleEnum | null;
      userId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      user?: {
        __typename?: 'User';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug?: string | null;
        email?: string | null;
      } | null;
    } | null;
  };
};

export type MessagesQueryVariables = Exact<{
  sorting: Array<MessageSort> | MessageSort;
  filter: MessageFilter;
  paging: CursorPaging;
}>;

export type MessagesQuery = {
  __typename?: 'Query';
  messages: {
    __typename?: 'MessageConnection';
    totalCount: number;
    pageInfo: {
      __typename?: 'PageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
      startCursor?: any | null;
      endCursor?: any | null;
    };
    edges: Array<{
      __typename?: 'MessageEdge';
      cursor: any;
      node: {
        __typename?: 'Message';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        content: string;
        type: string;
        workspaceId?: number | null;
        memberId?: number | null;
        conversations?: Array<{
          __typename?: 'Conversation';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name?: string | null;
          type: string;
          slug?: string | null;
          description?: string | null;
          workspaceId?: number | null;
          workspace?: {
            __typename?: 'Workspace';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name: string;
            slug: string;
            description?: string | null;
            image?: string | null;
          } | null;
          messages?: Array<{
            __typename?: 'Message';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            content: string;
            type: string;
            workspaceId?: number | null;
            memberId?: number | null;
            workspace?: {
              __typename?: 'Workspace';
              id: string;
              metadata?: any | null;
              createdAt: any;
              updatedAt?: any | null;
              deletedAt?: any | null;
              version: number;
              name: string;
              slug: string;
              description?: string | null;
              image?: string | null;
            } | null;
            member?: {
              __typename?: 'Member';
              id: string;
              metadata?: any | null;
              createdAt: any;
              updatedAt?: any | null;
              deletedAt?: any | null;
              version: number;
              workspaceId?: number | null;
              role?: MemberRoleEnum | null;
              userId?: number | null;
              workspace?: {
                __typename?: 'Workspace';
                id: string;
                metadata?: any | null;
                createdAt: any;
                updatedAt?: any | null;
                deletedAt?: any | null;
                version: number;
                name: string;
                slug: string;
                description?: string | null;
                image?: string | null;
              } | null;
              user?: {
                __typename?: 'User';
                id: string;
                metadata?: any | null;
                createdAt: any;
                updatedAt?: any | null;
                deletedAt?: any | null;
                version: number;
                name?: string | null;
                slug?: string | null;
                email?: string | null;
              } | null;
            } | null;
          }> | null;
        }> | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        member?: {
          __typename?: 'Member';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          workspaceId?: number | null;
          role?: MemberRoleEnum | null;
          userId?: number | null;
          workspace?: {
            __typename?: 'Workspace';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name: string;
            slug: string;
            description?: string | null;
            image?: string | null;
          } | null;
          user?: {
            __typename?: 'User';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name?: string | null;
            slug?: string | null;
            email?: string | null;
          } | null;
        } | null;
      };
    }>;
  };
};

export type CreateMessageMutationVariables = Exact<{
  input: CreateOneMessageInput;
}>;

export type CreateMessageMutation = {
  __typename?: 'Mutation';
  createMessage: {
    __typename?: 'Message';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    content: string;
    type: string;
    workspaceId?: number | null;
    memberId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    member?: {
      __typename?: 'Member';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      workspaceId?: number | null;
      role?: MemberRoleEnum | null;
      userId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      user?: {
        __typename?: 'User';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug?: string | null;
        email?: string | null;
      } | null;
    } | null;
  };
};

export type UpdateMessageMutationVariables = Exact<{
  input: UpdateOneMessageInput;
}>;

export type UpdateMessageMutation = {
  __typename?: 'Mutation';
  updateMessage: {
    __typename?: 'Message';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    content: string;
    type: string;
    workspaceId?: number | null;
    memberId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    member?: {
      __typename?: 'Member';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      workspaceId?: number | null;
      role?: MemberRoleEnum | null;
      userId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      user?: {
        __typename?: 'User';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug?: string | null;
        email?: string | null;
      } | null;
    } | null;
  };
};

export type MemberConversationFieldsFragment = {
  __typename?: 'MemberConversation';
  id: string;
  metadata?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  deletedAt?: any | null;
  version: number;
  memberId?: number | null;
  conversationId?: number | null;
  role?: MemberConversationRoleEnum | null;
};

export type MemberConversationQueryVariables = Exact<{
  memberConversationId: Scalars['ID']['input'];
}>;

export type MemberConversationQuery = {
  __typename?: 'Query';
  memberConversation: {
    __typename?: 'MemberConversation';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    memberId?: number | null;
    conversationId?: number | null;
    role?: MemberConversationRoleEnum | null;
    member?: {
      __typename?: 'Member';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      workspaceId?: number | null;
      role?: MemberRoleEnum | null;
      userId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      user?: {
        __typename?: 'User';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug?: string | null;
        email?: string | null;
      } | null;
    } | null;
    conversation?: {
      __typename?: 'Conversation';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      type: string;
      slug?: string | null;
      description?: string | null;
      workspaceId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      messages?: Array<{
        __typename?: 'Message';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        content: string;
        type: string;
        workspaceId?: number | null;
        memberId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        member?: {
          __typename?: 'Member';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          workspaceId?: number | null;
          role?: MemberRoleEnum | null;
          userId?: number | null;
          workspace?: {
            __typename?: 'Workspace';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name: string;
            slug: string;
            description?: string | null;
            image?: string | null;
          } | null;
          user?: {
            __typename?: 'User';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name?: string | null;
            slug?: string | null;
            email?: string | null;
          } | null;
        } | null;
      }> | null;
    } | null;
  };
};

export type MemberConversationsQueryVariables = Exact<{
  sorting: Array<MemberConversationSort> | MemberConversationSort;
  filter: MemberConversationFilter;
  paging: OffsetPaging;
}>;

export type MemberConversationsQuery = {
  __typename?: 'Query';
  memberConversations: {
    __typename?: 'MemberConversationConnection';
    totalCount: number;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
    nodes: Array<{
      __typename?: 'MemberConversation';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      memberId?: number | null;
      conversationId?: number | null;
      role?: MemberConversationRoleEnum | null;
      member?: {
        __typename?: 'Member';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        workspaceId?: number | null;
        role?: MemberRoleEnum | null;
        userId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        user?: {
          __typename?: 'User';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name?: string | null;
          slug?: string | null;
          email?: string | null;
        } | null;
      } | null;
      conversation?: {
        __typename?: 'Conversation';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        type: string;
        slug?: string | null;
        description?: string | null;
        workspaceId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        messages?: Array<{
          __typename?: 'Message';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          content: string;
          type: string;
          workspaceId?: number | null;
          memberId?: number | null;
          workspace?: {
            __typename?: 'Workspace';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name: string;
            slug: string;
            description?: string | null;
            image?: string | null;
          } | null;
          member?: {
            __typename?: 'Member';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            workspaceId?: number | null;
            role?: MemberRoleEnum | null;
            userId?: number | null;
            workspace?: {
              __typename?: 'Workspace';
              id: string;
              metadata?: any | null;
              createdAt: any;
              updatedAt?: any | null;
              deletedAt?: any | null;
              version: number;
              name: string;
              slug: string;
              description?: string | null;
              image?: string | null;
            } | null;
            user?: {
              __typename?: 'User';
              id: string;
              metadata?: any | null;
              createdAt: any;
              updatedAt?: any | null;
              deletedAt?: any | null;
              version: number;
              name?: string | null;
              slug?: string | null;
              email?: string | null;
            } | null;
          } | null;
        }> | null;
      } | null;
    }>;
  };
};

export type CreateMemberConversationMutationVariables = Exact<{
  input: CreateOneMemberConversationInput;
}>;

export type CreateMemberConversationMutation = {
  __typename?: 'Mutation';
  createMemberConversation: {
    __typename?: 'MemberConversation';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    memberId?: number | null;
    conversationId?: number | null;
    role?: MemberConversationRoleEnum | null;
  };
};

export type UpdateMemberConversationMutationVariables = Exact<{
  input: UpdateOneMemberConversationInput;
}>;

export type UpdateMemberConversationMutation = {
  __typename?: 'Mutation';
  updateMemberConversation: {
    __typename?: 'MemberConversation';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    memberId?: number | null;
    conversationId?: number | null;
    role?: MemberConversationRoleEnum | null;
  };
};

export type DeleteMemberConversationMutationVariables = Exact<{
  input: DeleteOneMemberConversationInput;
}>;

export type DeleteMemberConversationMutation = {
  __typename?: 'Mutation';
  deleteMemberConversation: {
    __typename?: 'MemberConversationDeleteResponse';
    id?: string | null;
  };
};

export type IssueFieldsFragment = {
  __typename?: 'Issue';
  id: string;
  metadata?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  deletedAt?: any | null;
  version: number;
  name?: string | null;
  slug: string;
  startAt?: any | null;
  status?: IssueStatusEnum | null;
  endAt?: any | null;
  description?: string | null;
  workspaceId?: number | null;
  projectId?: number | null;
  position?: number | null;
  workspace?: {
    __typename?: 'Workspace';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name: string;
    slug: string;
    description?: string | null;
    image?: string | null;
  } | null;
};

export type IssueQueryVariables = Exact<{
  issueId: Scalars['ID']['input'];
}>;

export type IssueQuery = {
  __typename?: 'Query';
  issue: {
    __typename?: 'Issue';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug: string;
    startAt?: any | null;
    status?: IssueStatusEnum | null;
    endAt?: any | null;
    description?: string | null;
    workspaceId?: number | null;
    projectId?: number | null;
    position?: number | null;
    project?: {
      __typename?: 'Project';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      slug: string;
      description?: string | null;
      workspaceId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
    } | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
  };
};

export type IssuesQueryVariables = Exact<{
  sorting: Array<IssueSort> | IssueSort;
  filter: IssueFilter;
  paging: OffsetPaging;
}>;

export type IssuesQuery = {
  __typename?: 'Query';
  issues: {
    __typename?: 'IssueConnection';
    totalCount: number;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
    nodes: Array<{
      __typename?: 'Issue';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      slug: string;
      startAt?: any | null;
      status?: IssueStatusEnum | null;
      endAt?: any | null;
      description?: string | null;
      workspaceId?: number | null;
      projectId?: number | null;
      position?: number | null;
      project?: {
        __typename?: 'Project';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug: string;
        description?: string | null;
        workspaceId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
      } | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
    }>;
  };
};

export type CreateIssueMutationVariables = Exact<{
  input: CreateOneIssueInput;
}>;

export type CreateIssueMutation = {
  __typename?: 'Mutation';
  createIssue: {
    __typename?: 'Issue';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug: string;
    startAt?: any | null;
    status?: IssueStatusEnum | null;
    endAt?: any | null;
    description?: string | null;
    workspaceId?: number | null;
    projectId?: number | null;
    position?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
  };
};

export type UpdateIssueMutationVariables = Exact<{
  input: UpdateOneIssueInput;
}>;

export type UpdateIssueMutation = {
  __typename?: 'Mutation';
  updateIssue: {
    __typename?: 'Issue';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug: string;
    startAt?: any | null;
    status?: IssueStatusEnum | null;
    endAt?: any | null;
    description?: string | null;
    workspaceId?: number | null;
    projectId?: number | null;
    position?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
  };
};

export type DeleteIssueMutationVariables = Exact<{
  input: DeleteOneIssueInput;
}>;

export type DeleteIssueMutation = {
  __typename?: 'Mutation';
  deleteIssue: { __typename?: 'IssueDeleteResponse'; id?: string | null };
};

export type MemberIssueFieldsFragment = {
  __typename?: 'MemberIssue';
  id: string;
  metadata?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  deletedAt?: any | null;
  version: number;
  memberId?: number | null;
  issueId?: number | null;
  role?: MemberIssueRoleEnum | null;
};

export type MemberIssueQueryVariables = Exact<{
  memberIssueId: Scalars['ID']['input'];
}>;

export type MemberIssueQuery = {
  __typename?: 'Query';
  memberIssue: {
    __typename?: 'MemberIssue';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    memberId?: number | null;
    issueId?: number | null;
    role?: MemberIssueRoleEnum | null;
    member?: {
      __typename?: 'Member';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      workspaceId?: number | null;
      role?: MemberRoleEnum | null;
      userId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      user?: {
        __typename?: 'User';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug?: string | null;
        email?: string | null;
      } | null;
    } | null;
    issue?: {
      __typename?: 'Issue';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      slug: string;
      startAt?: any | null;
      status?: IssueStatusEnum | null;
      endAt?: any | null;
      description?: string | null;
      workspaceId?: number | null;
      projectId?: number | null;
      position?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
    } | null;
  };
};

export type MemberIssuesQueryVariables = Exact<{
  sorting: Array<MemberIssueSort> | MemberIssueSort;
  filter: MemberIssueFilter;
  paging: OffsetPaging;
}>;

export type MemberIssuesQuery = {
  __typename?: 'Query';
  memberIssues: {
    __typename?: 'MemberIssueConnection';
    totalCount: number;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
    nodes: Array<{
      __typename?: 'MemberIssue';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      memberId?: number | null;
      issueId?: number | null;
      role?: MemberIssueRoleEnum | null;
      member?: {
        __typename?: 'Member';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        workspaceId?: number | null;
        role?: MemberRoleEnum | null;
        userId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        user?: {
          __typename?: 'User';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name?: string | null;
          slug?: string | null;
          email?: string | null;
        } | null;
      } | null;
      issue?: {
        __typename?: 'Issue';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug: string;
        startAt?: any | null;
        status?: IssueStatusEnum | null;
        endAt?: any | null;
        description?: string | null;
        workspaceId?: number | null;
        projectId?: number | null;
        position?: number | null;
        project?: {
          __typename?: 'Project';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name?: string | null;
          slug: string;
          description?: string | null;
          workspaceId?: number | null;
          workspace?: {
            __typename?: 'Workspace';
            id: string;
            metadata?: any | null;
            createdAt: any;
            updatedAt?: any | null;
            deletedAt?: any | null;
            version: number;
            name: string;
            slug: string;
            description?: string | null;
            image?: string | null;
          } | null;
        } | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
      } | null;
    }>;
  };
};

export type CreateMemberIssueMutationVariables = Exact<{
  input: CreateOneMemberIssueInput;
}>;

export type CreateMemberIssueMutation = {
  __typename?: 'Mutation';
  createMemberIssue: {
    __typename?: 'MemberIssue';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    memberId?: number | null;
    issueId?: number | null;
    role?: MemberIssueRoleEnum | null;
  };
};

export type UpdateMemberIssueMutationVariables = Exact<{
  input: UpdateOneMemberIssueInput;
}>;

export type UpdateMemberIssueMutation = {
  __typename?: 'Mutation';
  updateMemberIssue: {
    __typename?: 'MemberIssue';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    memberId?: number | null;
    issueId?: number | null;
    role?: MemberIssueRoleEnum | null;
  };
};

export type DeleteMemberIssueMutationVariables = Exact<{
  input: DeleteOneMemberIssueInput;
}>;

export type DeleteMemberIssueMutation = {
  __typename?: 'Mutation';
  deleteMemberIssue: {
    __typename?: 'MemberIssueDeleteResponse';
    id?: string | null;
  };
};

export type MemberFieldsFragment = {
  __typename?: 'Member';
  id: string;
  metadata?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  deletedAt?: any | null;
  version: number;
  workspaceId?: number | null;
  role?: MemberRoleEnum | null;
  userId?: number | null;
  workspace?: {
    __typename?: 'Workspace';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name: string;
    slug: string;
    description?: string | null;
    image?: string | null;
  } | null;
  user?: {
    __typename?: 'User';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug?: string | null;
    email?: string | null;
  } | null;
};

export type MemberQueryVariables = Exact<{
  memberId: Scalars['ID']['input'];
}>;

export type MemberQuery = {
  __typename?: 'Query';
  member: {
    __typename?: 'Member';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    workspaceId?: number | null;
    role?: MemberRoleEnum | null;
    userId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    user?: {
      __typename?: 'User';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      slug?: string | null;
      email?: string | null;
    } | null;
  };
};

export type MembersQueryVariables = Exact<{
  sorting: Array<MemberSort> | MemberSort;
  filter: MemberFilter;
  paging: OffsetPaging;
}>;

export type MembersQuery = {
  __typename?: 'Query';
  members: {
    __typename?: 'MemberConnection';
    totalCount: number;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
    nodes: Array<{
      __typename?: 'Member';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      workspaceId?: number | null;
      role?: MemberRoleEnum | null;
      userId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      user?: {
        __typename?: 'User';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug?: string | null;
        email?: string | null;
      } | null;
    }>;
  };
};

export type CreateMemberMutationVariables = Exact<{
  input: CreateOneMemberInput;
}>;

export type CreateMemberMutation = {
  __typename?: 'Mutation';
  createMember: {
    __typename?: 'Member';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    workspaceId?: number | null;
    role?: MemberRoleEnum | null;
    userId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    user?: {
      __typename?: 'User';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      slug?: string | null;
      email?: string | null;
    } | null;
  };
};

export type UpdateMemberMutationVariables = Exact<{
  input: UpdateOneMemberInput;
}>;

export type UpdateMemberMutation = {
  __typename?: 'Mutation';
  updateMember: {
    __typename?: 'Member';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    workspaceId?: number | null;
    role?: MemberRoleEnum | null;
    userId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
    user?: {
      __typename?: 'User';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      slug?: string | null;
      email?: string | null;
    } | null;
  };
};

export type DeleteMemberMutationVariables = Exact<{
  input: DeleteOneMemberInput;
}>;

export type DeleteMemberMutation = {
  __typename?: 'Mutation';
  deleteMember: { __typename?: 'MemberDeleteResponse'; id?: string | null };
};

export type ProjectFieldsFragment = {
  __typename?: 'Project';
  id: string;
  metadata?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  deletedAt?: any | null;
  version: number;
  name?: string | null;
  slug: string;
  description?: string | null;
  workspaceId?: number | null;
  workspace?: {
    __typename?: 'Workspace';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name: string;
    slug: string;
    description?: string | null;
    image?: string | null;
  } | null;
};

export type ProjectQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
}>;

export type ProjectQuery = {
  __typename?: 'Query';
  project: {
    __typename?: 'Project';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug: string;
    description?: string | null;
    workspaceId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
  };
};

export type ProjectIssuesQueryVariables = Exact<{
  projectId: Scalars['ID']['input'];
  sorting: Array<IssueSort> | IssueSort;
  filter: IssueFilter;
  paging: OffsetPaging;
}>;

export type ProjectIssuesQuery = {
  __typename?: 'Query';
  project: {
    __typename?: 'Project';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug: string;
    description?: string | null;
    workspaceId?: number | null;
    issues?: {
      __typename?: 'ProjectIssuesConnection';
      pageInfo: {
        __typename?: 'OffsetPageInfo';
        hasNextPage?: boolean | null;
        hasPreviousPage?: boolean | null;
      };
      nodes: Array<{
        __typename?: 'Issue';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug: string;
        startAt?: any | null;
        status?: IssueStatusEnum | null;
        endAt?: any | null;
        description?: string | null;
        workspaceId?: number | null;
        projectId?: number | null;
        position?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
      }>;
    } | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
  };
};

export type ProjectsQueryVariables = Exact<{
  sorting: Array<ProjectSort> | ProjectSort;
  filter: ProjectFilter;
  paging: OffsetPaging;
}>;

export type ProjectsQuery = {
  __typename?: 'Query';
  projects: {
    __typename?: 'ProjectConnection';
    totalCount: number;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
    nodes: Array<{
      __typename?: 'Project';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      slug: string;
      description?: string | null;
      workspaceId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
    }>;
  };
};

export type CreateProjectMutationVariables = Exact<{
  input: CreateOneProjectInput;
}>;

export type CreateProjectMutation = {
  __typename?: 'Mutation';
  createProject: {
    __typename?: 'Project';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug: string;
    description?: string | null;
    workspaceId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
  };
};

export type UpdateProjectMutationVariables = Exact<{
  input: UpdateOneProjectInput;
}>;

export type UpdateProjectMutation = {
  __typename?: 'Mutation';
  updateProject: {
    __typename?: 'Project';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug: string;
    description?: string | null;
    workspaceId?: number | null;
    workspace?: {
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    } | null;
  };
};

export type DeleteProjectMutationVariables = Exact<{
  input: DeleteOneProjectInput;
}>;

export type DeleteProjectMutation = {
  __typename?: 'Mutation';
  deleteProject: { __typename?: 'ProjectDeleteResponse'; id?: string | null };
};

export type MemberProjectFieldsFragment = {
  __typename?: 'MemberProject';
  id: string;
  metadata?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  deletedAt?: any | null;
  version: number;
  memberId?: number | null;
  projectId?: number | null;
  role?: MemberProjectRoleEnum | null;
};

export type MemberProjectQueryVariables = Exact<{
  memberProjectId: Scalars['ID']['input'];
}>;

export type MemberProjectQuery = {
  __typename?: 'Query';
  memberProject: {
    __typename?: 'MemberProject';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    memberId?: number | null;
    projectId?: number | null;
    role?: MemberProjectRoleEnum | null;
    member?: {
      __typename?: 'Member';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      workspaceId?: number | null;
      role?: MemberRoleEnum | null;
      userId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
      user?: {
        __typename?: 'User';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug?: string | null;
        email?: string | null;
      } | null;
    } | null;
    project?: {
      __typename?: 'Project';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      slug: string;
      description?: string | null;
      workspaceId?: number | null;
      workspace?: {
        __typename?: 'Workspace';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name: string;
        slug: string;
        description?: string | null;
        image?: string | null;
      } | null;
    } | null;
  };
};

export type MemberProjectsQueryVariables = Exact<{
  sorting: Array<MemberProjectSort> | MemberProjectSort;
  filter: MemberProjectFilter;
  paging: OffsetPaging;
}>;

export type MemberProjectsQuery = {
  __typename?: 'Query';
  memberProjects: {
    __typename?: 'MemberProjectConnection';
    totalCount: number;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
    nodes: Array<{
      __typename?: 'MemberProject';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      memberId?: number | null;
      projectId?: number | null;
      role?: MemberProjectRoleEnum | null;
      member?: {
        __typename?: 'Member';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        workspaceId?: number | null;
        role?: MemberRoleEnum | null;
        userId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
        user?: {
          __typename?: 'User';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name?: string | null;
          slug?: string | null;
          email?: string | null;
        } | null;
      } | null;
      project?: {
        __typename?: 'Project';
        id: string;
        metadata?: any | null;
        createdAt: any;
        updatedAt?: any | null;
        deletedAt?: any | null;
        version: number;
        name?: string | null;
        slug: string;
        description?: string | null;
        workspaceId?: number | null;
        workspace?: {
          __typename?: 'Workspace';
          id: string;
          metadata?: any | null;
          createdAt: any;
          updatedAt?: any | null;
          deletedAt?: any | null;
          version: number;
          name: string;
          slug: string;
          description?: string | null;
          image?: string | null;
        } | null;
      } | null;
    }>;
  };
};

export type CreateMemberProjectMutationVariables = Exact<{
  input: CreateOneMemberProjectInput;
}>;

export type CreateMemberProjectMutation = {
  __typename?: 'Mutation';
  createMemberProject: {
    __typename?: 'MemberProject';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    memberId?: number | null;
    projectId?: number | null;
    role?: MemberProjectRoleEnum | null;
  };
};

export type UpdateMemberProjectMutationVariables = Exact<{
  input: UpdateOneMemberProjectInput;
}>;

export type UpdateMemberProjectMutation = {
  __typename?: 'Mutation';
  updateMemberProject: {
    __typename?: 'MemberProject';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    memberId?: number | null;
    projectId?: number | null;
    role?: MemberProjectRoleEnum | null;
  };
};

export type DeleteMemberProjectMutationVariables = Exact<{
  input: DeleteOneMemberProjectInput;
}>;

export type DeleteMemberProjectMutation = {
  __typename?: 'Mutation';
  deleteMemberProject: {
    __typename?: 'MemberProjectDeleteResponse';
    id?: string | null;
  };
};

export type UserFieldsFragment = {
  __typename?: 'User';
  id: string;
  metadata?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  deletedAt?: any | null;
  version: number;
  name?: string | null;
  slug?: string | null;
  email?: string | null;
};

export type UserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;

export type UserQuery = {
  __typename?: 'Query';
  user: {
    __typename?: 'User';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug?: string | null;
    email?: string | null;
  };
};

export type UsersQueryVariables = Exact<{
  sorting: Array<UserSort> | UserSort;
  filter: UserFilter;
  paging: OffsetPaging;
}>;

export type UsersQuery = {
  __typename?: 'Query';
  users: {
    __typename?: 'UserConnection';
    totalCount: number;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
    nodes: Array<{
      __typename?: 'User';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name?: string | null;
      slug?: string | null;
      email?: string | null;
    }>;
  };
};

export type CreateUserMutationVariables = Exact<{
  input: CreateOneUserInput;
}>;

export type CreateUserMutation = {
  __typename?: 'Mutation';
  createUser: {
    __typename?: 'User';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug?: string | null;
    email?: string | null;
  };
};

export type UpdateUserMutationVariables = Exact<{
  input: UpdateOneUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser: {
    __typename?: 'User';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name?: string | null;
    slug?: string | null;
    email?: string | null;
  };
};

export type DeleteUserMutationVariables = Exact<{
  input: DeleteOneUserInput;
}>;

export type DeleteUserMutation = {
  __typename?: 'Mutation';
  deleteUser: { __typename?: 'UserDeleteResponse'; id?: string | null };
};

export type WorkspaceFieldsFragment = {
  __typename?: 'Workspace';
  id: string;
  metadata?: any | null;
  createdAt: any;
  updatedAt?: any | null;
  deletedAt?: any | null;
  version: number;
  name: string;
  slug: string;
  description?: string | null;
  image?: string | null;
};

export type WorkspaceQueryVariables = Exact<{
  workspaceId: Scalars['ID']['input'];
}>;

export type WorkspaceQuery = {
  __typename?: 'Query';
  workspace: {
    __typename?: 'Workspace';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name: string;
    slug: string;
    description?: string | null;
    image?: string | null;
  };
};

export type WorkspacesQueryVariables = Exact<{
  sorting: Array<WorkspaceSort> | WorkspaceSort;
  filter: WorkspaceFilter;
  paging: OffsetPaging;
}>;

export type WorkspacesQuery = {
  __typename?: 'Query';
  workspaces: {
    __typename?: 'WorkspaceConnection';
    totalCount: number;
    pageInfo: {
      __typename?: 'OffsetPageInfo';
      hasNextPage?: boolean | null;
      hasPreviousPage?: boolean | null;
    };
    nodes: Array<{
      __typename?: 'Workspace';
      id: string;
      metadata?: any | null;
      createdAt: any;
      updatedAt?: any | null;
      deletedAt?: any | null;
      version: number;
      name: string;
      slug: string;
      description?: string | null;
      image?: string | null;
    }>;
  };
};

export type CreateWorkspaceMutationVariables = Exact<{
  input: CreateOneWorkspaceInput;
}>;

export type CreateWorkspaceMutation = {
  __typename?: 'Mutation';
  createWorkspace: {
    __typename?: 'Workspace';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name: string;
    slug: string;
    description?: string | null;
    image?: string | null;
  };
};

export type UpdateWorkspaceMutationVariables = Exact<{
  input: UpdateOneWorkspaceInput;
}>;

export type UpdateWorkspaceMutation = {
  __typename?: 'Mutation';
  updateWorkspace: {
    __typename?: 'Workspace';
    id: string;
    metadata?: any | null;
    createdAt: any;
    updatedAt?: any | null;
    deletedAt?: any | null;
    version: number;
    name: string;
    slug: string;
    description?: string | null;
    image?: string | null;
  };
};

export type DeleteWorkspaceMutationVariables = Exact<{
  input: DeleteOneWorkspaceInput;
}>;

export type DeleteWorkspaceMutation = {
  __typename?: 'Mutation';
  deleteWorkspace: {
    __typename?: 'WorkspaceDeleteResponse';
    id?: string | null;
  };
};

export const WorkspaceFieldsFragmentDoc = gql`
  fragment WorkspaceFields on Workspace {
    id
    metadata
    createdAt
    updatedAt
    deletedAt
    version
    name
    slug
    description
    image
  }
`;
export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    id
    metadata
    createdAt
    updatedAt
    deletedAt
    version
    name
    slug
    email
  }
`;
export const MemberFieldsFragmentDoc = gql`
  fragment MemberFields on Member {
    id
    metadata
    createdAt
    updatedAt
    deletedAt
    version
    workspaceId
    role
    userId
    workspace {
      ...WorkspaceFields
    }
    user {
      ...UserFields
    }
  }
  ${WorkspaceFieldsFragmentDoc}
  ${UserFieldsFragmentDoc}
`;
export const MessageFieldsFragmentDoc = gql`
  fragment MessageFields on Message {
    id
    metadata
    createdAt
    updatedAt
    deletedAt
    version
    content
    type
    workspaceId
    workspace {
      ...WorkspaceFields
    }
    memberId
    member {
      ...MemberFields
    }
  }
  ${WorkspaceFieldsFragmentDoc}
  ${MemberFieldsFragmentDoc}
`;
export const ConversationFieldsFragmentDoc = gql`
  fragment ConversationFields on Conversation {
    id
    metadata
    createdAt
    updatedAt
    deletedAt
    version
    name
    type
    slug
    description
    workspaceId
    workspace {
      ...WorkspaceFields
    }
    messages {
      ...MessageFields
    }
  }
  ${WorkspaceFieldsFragmentDoc}
  ${MessageFieldsFragmentDoc}
`;
export const MemberConversationFieldsFragmentDoc = gql`
  fragment MemberConversationFields on MemberConversation {
    id
    metadata
    createdAt
    updatedAt
    deletedAt
    version
    memberId
    conversationId
    role
  }
`;
export const IssueFieldsFragmentDoc = gql`
  fragment IssueFields on Issue {
    id
    metadata
    createdAt
    updatedAt
    deletedAt
    version
    name
    slug
    startAt
    status
    endAt
    description
    workspaceId
    projectId
    position
    workspace {
      ...WorkspaceFields
    }
  }
  ${WorkspaceFieldsFragmentDoc}
`;
export const MemberIssueFieldsFragmentDoc = gql`
  fragment MemberIssueFields on MemberIssue {
    id
    metadata
    createdAt
    updatedAt
    deletedAt
    version
    memberId
    issueId
    role
  }
`;
export const ProjectFieldsFragmentDoc = gql`
  fragment ProjectFields on Project {
    id
    metadata
    createdAt
    updatedAt
    deletedAt
    version
    name
    slug
    description
    workspaceId
    workspace {
      ...WorkspaceFields
    }
  }
  ${WorkspaceFieldsFragmentDoc}
`;
export const MemberProjectFieldsFragmentDoc = gql`
  fragment MemberProjectFields on MemberProject {
    id
    metadata
    createdAt
    updatedAt
    deletedAt
    version
    memberId
    projectId
    role
  }
`;
export const PresignedAssetDocument = gql`
  mutation PresignedAsset {
    presignedAsset {
      name
      link
    }
  }
`;
export type PresignedAssetMutationFn = Apollo.MutationFunction<
  PresignedAssetMutation,
  PresignedAssetMutationVariables
>;

/**
 * __usePresignedAssetMutation__
 *
 * To run a mutation, you first call `usePresignedAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePresignedAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [presignedAssetMutation, { data, loading, error }] = usePresignedAssetMutation({
 *   variables: {
 *   },
 * });
 */
export function usePresignedAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    PresignedAssetMutation,
    PresignedAssetMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    PresignedAssetMutation,
    PresignedAssetMutationVariables
  >(PresignedAssetDocument, options);
}
export type PresignedAssetMutationHookResult = ReturnType<
  typeof usePresignedAssetMutation
>;
export type PresignedAssetMutationResult =
  Apollo.MutationResult<PresignedAssetMutation>;
export type PresignedAssetMutationOptions = Apollo.BaseMutationOptions<
  PresignedAssetMutation,
  PresignedAssetMutationVariables
>;
export const AccountDocument = gql`
  query Account {
    account {
      id
      metadata
      createdAt
      updatedAt
      deletedAt
      version
      email
      name
    }
  }
`;

/**
 * __useAccountQuery__
 *
 * To run a query within a React component, call `useAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useAccountQuery(
  baseOptions?: Apollo.QueryHookOptions<AccountQuery, AccountQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AccountQuery, AccountQueryVariables>(
    AccountDocument,
    options,
  );
}
export function useAccountLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AccountQuery,
    AccountQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AccountQuery, AccountQueryVariables>(
    AccountDocument,
    options,
  );
}
export function useAccountSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<AccountQuery, AccountQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<AccountQuery, AccountQueryVariables>(
    AccountDocument,
    options,
  );
}
export type AccountQueryHookResult = ReturnType<typeof useAccountQuery>;
export type AccountLazyQueryHookResult = ReturnType<typeof useAccountLazyQuery>;
export type AccountSuspenseQueryHookResult = ReturnType<
  typeof useAccountSuspenseQuery
>;
export type AccountQueryResult = Apollo.QueryResult<
  AccountQuery,
  AccountQueryVariables
>;
export const LoginDocument = gql`
  mutation Login($input: AuthInput!) {
    login(input: $input) {
      token
    }
  }
`;
export type LoginMutationFn = Apollo.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    options,
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>;
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export type LogoutMutationFn = Apollo.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: Apollo.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    options,
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>;
export const ConversationDocument = gql`
  query Conversation($conversationId: ID!) {
    conversation(id: $conversationId) {
      ...ConversationFields
    }
  }
  ${ConversationFieldsFragmentDoc}
`;

/**
 * __useConversationQuery__
 *
 * To run a query within a React component, call `useConversationQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationQuery({
 *   variables: {
 *      conversationId: // value for 'conversationId'
 *   },
 * });
 */
export function useConversationQuery(
  baseOptions: Apollo.QueryHookOptions<
    ConversationQuery,
    ConversationQueryVariables
  > &
    (
      | { variables: ConversationQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ConversationQuery, ConversationQueryVariables>(
    ConversationDocument,
    options,
  );
}
export function useConversationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ConversationQuery,
    ConversationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ConversationQuery, ConversationQueryVariables>(
    ConversationDocument,
    options,
  );
}
export function useConversationSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ConversationQuery,
        ConversationQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ConversationQuery, ConversationQueryVariables>(
    ConversationDocument,
    options,
  );
}
export type ConversationQueryHookResult = ReturnType<
  typeof useConversationQuery
>;
export type ConversationLazyQueryHookResult = ReturnType<
  typeof useConversationLazyQuery
>;
export type ConversationSuspenseQueryHookResult = ReturnType<
  typeof useConversationSuspenseQuery
>;
export type ConversationQueryResult = Apollo.QueryResult<
  ConversationQuery,
  ConversationQueryVariables
>;
export const ConversationsDocument = gql`
  query Conversations(
    $sorting: [ConversationSort!]!
    $filter: ConversationFilter!
    $paging: OffsetPaging!
  ) {
    conversations(sorting: $sorting, filter: $filter, paging: $paging) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ...ConversationFields
      }
      totalCount
    }
  }
  ${ConversationFieldsFragmentDoc}
`;

/**
 * __useConversationsQuery__
 *
 * To run a query within a React component, call `useConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversationsQuery({
 *   variables: {
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useConversationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ConversationsQuery,
    ConversationsQueryVariables
  > &
    (
      | { variables: ConversationsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ConversationsQuery, ConversationsQueryVariables>(
    ConversationsDocument,
    options,
  );
}
export function useConversationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ConversationsQuery,
    ConversationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ConversationsQuery, ConversationsQueryVariables>(
    ConversationsDocument,
    options,
  );
}
export function useConversationsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ConversationsQuery,
        ConversationsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ConversationsQuery,
    ConversationsQueryVariables
  >(ConversationsDocument, options);
}
export type ConversationsQueryHookResult = ReturnType<
  typeof useConversationsQuery
>;
export type ConversationsLazyQueryHookResult = ReturnType<
  typeof useConversationsLazyQuery
>;
export type ConversationsSuspenseQueryHookResult = ReturnType<
  typeof useConversationsSuspenseQuery
>;
export type ConversationsQueryResult = Apollo.QueryResult<
  ConversationsQuery,
  ConversationsQueryVariables
>;
export const CreateConversationDocument = gql`
  mutation CreateConversation($input: CreateOneConversationInput!) {
    createConversation(input: $input) {
      ...ConversationFields
    }
  }
  ${ConversationFieldsFragmentDoc}
`;
export type CreateConversationMutationFn = Apollo.MutationFunction<
  CreateConversationMutation,
  CreateConversationMutationVariables
>;

/**
 * __useCreateConversationMutation__
 *
 * To run a mutation, you first call `useCreateConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConversationMutation, { data, loading, error }] = useCreateConversationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateConversationMutation,
    CreateConversationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateConversationMutation,
    CreateConversationMutationVariables
  >(CreateConversationDocument, options);
}
export type CreateConversationMutationHookResult = ReturnType<
  typeof useCreateConversationMutation
>;
export type CreateConversationMutationResult =
  Apollo.MutationResult<CreateConversationMutation>;
export type CreateConversationMutationOptions = Apollo.BaseMutationOptions<
  CreateConversationMutation,
  CreateConversationMutationVariables
>;
export const UpdateConversationDocument = gql`
  mutation UpdateConversation($input: UpdateOneConversationInput!) {
    updateConversation(input: $input) {
      ...ConversationFields
    }
  }
  ${ConversationFieldsFragmentDoc}
`;
export type UpdateConversationMutationFn = Apollo.MutationFunction<
  UpdateConversationMutation,
  UpdateConversationMutationVariables
>;

/**
 * __useUpdateConversationMutation__
 *
 * To run a mutation, you first call `useUpdateConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateConversationMutation, { data, loading, error }] = useUpdateConversationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateConversationMutation,
    UpdateConversationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateConversationMutation,
    UpdateConversationMutationVariables
  >(UpdateConversationDocument, options);
}
export type UpdateConversationMutationHookResult = ReturnType<
  typeof useUpdateConversationMutation
>;
export type UpdateConversationMutationResult =
  Apollo.MutationResult<UpdateConversationMutation>;
export type UpdateConversationMutationOptions = Apollo.BaseMutationOptions<
  UpdateConversationMutation,
  UpdateConversationMutationVariables
>;
export const MessageDocument = gql`
  query Message($messageId: ID!) {
    message(id: $messageId) {
      ...MessageFields
      conversations {
        ...ConversationFields
      }
    }
  }
  ${MessageFieldsFragmentDoc}
  ${ConversationFieldsFragmentDoc}
`;

/**
 * __useMessageQuery__
 *
 * To run a query within a React component, call `useMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessageQuery({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useMessageQuery(
  baseOptions: Apollo.QueryHookOptions<MessageQuery, MessageQueryVariables> &
    ({ variables: MessageQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MessageQuery, MessageQueryVariables>(
    MessageDocument,
    options,
  );
}
export function useMessageLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MessageQuery,
    MessageQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MessageQuery, MessageQueryVariables>(
    MessageDocument,
    options,
  );
}
export function useMessageSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MessageQuery, MessageQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MessageQuery, MessageQueryVariables>(
    MessageDocument,
    options,
  );
}
export type MessageQueryHookResult = ReturnType<typeof useMessageQuery>;
export type MessageLazyQueryHookResult = ReturnType<typeof useMessageLazyQuery>;
export type MessageSuspenseQueryHookResult = ReturnType<
  typeof useMessageSuspenseQuery
>;
export type MessageQueryResult = Apollo.QueryResult<
  MessageQuery,
  MessageQueryVariables
>;
export const MessagesDocument = gql`
  query Messages(
    $sorting: [MessageSort!]!
    $filter: MessageFilter!
    $paging: CursorPaging!
  ) {
    messages(sorting: $sorting, filter: $filter, paging: $paging) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      edges {
        node {
          ...MessageFields
          conversations {
            ...ConversationFields
          }
        }
        cursor
      }
      totalCount
    }
  }
  ${MessageFieldsFragmentDoc}
  ${ConversationFieldsFragmentDoc}
`;

/**
 * __useMessagesQuery__
 *
 * To run a query within a React component, call `useMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesQuery({
 *   variables: {
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useMessagesQuery(
  baseOptions: Apollo.QueryHookOptions<MessagesQuery, MessagesQueryVariables> &
    ({ variables: MessagesQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MessagesQuery, MessagesQueryVariables>(
    MessagesDocument,
    options,
  );
}
export function useMessagesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MessagesQuery,
    MessagesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MessagesQuery, MessagesQueryVariables>(
    MessagesDocument,
    options,
  );
}
export function useMessagesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MessagesQuery, MessagesQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MessagesQuery, MessagesQueryVariables>(
    MessagesDocument,
    options,
  );
}
export type MessagesQueryHookResult = ReturnType<typeof useMessagesQuery>;
export type MessagesLazyQueryHookResult = ReturnType<
  typeof useMessagesLazyQuery
>;
export type MessagesSuspenseQueryHookResult = ReturnType<
  typeof useMessagesSuspenseQuery
>;
export type MessagesQueryResult = Apollo.QueryResult<
  MessagesQuery,
  MessagesQueryVariables
>;
export const CreateMessageDocument = gql`
  mutation CreateMessage($input: CreateOneMessageInput!) {
    createMessage(input: $input) {
      ...MessageFields
    }
  }
  ${MessageFieldsFragmentDoc}
`;
export type CreateMessageMutationFn = Apollo.MutationFunction<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMessageMutation,
    CreateMessageMutationVariables
  >(CreateMessageDocument, options);
}
export type CreateMessageMutationHookResult = ReturnType<
  typeof useCreateMessageMutation
>;
export type CreateMessageMutationResult =
  Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<
  CreateMessageMutation,
  CreateMessageMutationVariables
>;
export const UpdateMessageDocument = gql`
  mutation UpdateMessage($input: UpdateOneMessageInput!) {
    updateMessage(input: $input) {
      ...MessageFields
    }
  }
  ${MessageFieldsFragmentDoc}
`;
export type UpdateMessageMutationFn = Apollo.MutationFunction<
  UpdateMessageMutation,
  UpdateMessageMutationVariables
>;

/**
 * __useUpdateMessageMutation__
 *
 * To run a mutation, you first call `useUpdateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMessageMutation, { data, loading, error }] = useUpdateMessageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMessageMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMessageMutation,
    UpdateMessageMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMessageMutation,
    UpdateMessageMutationVariables
  >(UpdateMessageDocument, options);
}
export type UpdateMessageMutationHookResult = ReturnType<
  typeof useUpdateMessageMutation
>;
export type UpdateMessageMutationResult =
  Apollo.MutationResult<UpdateMessageMutation>;
export type UpdateMessageMutationOptions = Apollo.BaseMutationOptions<
  UpdateMessageMutation,
  UpdateMessageMutationVariables
>;
export const MemberConversationDocument = gql`
  query MemberConversation($memberConversationId: ID!) {
    memberConversation(id: $memberConversationId) {
      ...MemberConversationFields
      member {
        ...MemberFields
      }
      conversation {
        ...ConversationFields
      }
    }
  }
  ${MemberConversationFieldsFragmentDoc}
  ${MemberFieldsFragmentDoc}
  ${ConversationFieldsFragmentDoc}
`;

/**
 * __useMemberConversationQuery__
 *
 * To run a query within a React component, call `useMemberConversationQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberConversationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberConversationQuery({
 *   variables: {
 *      memberConversationId: // value for 'memberConversationId'
 *   },
 * });
 */
export function useMemberConversationQuery(
  baseOptions: Apollo.QueryHookOptions<
    MemberConversationQuery,
    MemberConversationQueryVariables
  > &
    (
      | { variables: MemberConversationQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    MemberConversationQuery,
    MemberConversationQueryVariables
  >(MemberConversationDocument, options);
}
export function useMemberConversationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MemberConversationQuery,
    MemberConversationQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MemberConversationQuery,
    MemberConversationQueryVariables
  >(MemberConversationDocument, options);
}
export function useMemberConversationSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MemberConversationQuery,
        MemberConversationQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MemberConversationQuery,
    MemberConversationQueryVariables
  >(MemberConversationDocument, options);
}
export type MemberConversationQueryHookResult = ReturnType<
  typeof useMemberConversationQuery
>;
export type MemberConversationLazyQueryHookResult = ReturnType<
  typeof useMemberConversationLazyQuery
>;
export type MemberConversationSuspenseQueryHookResult = ReturnType<
  typeof useMemberConversationSuspenseQuery
>;
export type MemberConversationQueryResult = Apollo.QueryResult<
  MemberConversationQuery,
  MemberConversationQueryVariables
>;
export const MemberConversationsDocument = gql`
  query MemberConversations(
    $sorting: [MemberConversationSort!]!
    $filter: MemberConversationFilter!
    $paging: OffsetPaging!
  ) {
    memberConversations(sorting: $sorting, filter: $filter, paging: $paging) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ...MemberConversationFields
        member {
          ...MemberFields
        }
        conversation {
          ...ConversationFields
        }
      }
      totalCount
    }
  }
  ${MemberConversationFieldsFragmentDoc}
  ${MemberFieldsFragmentDoc}
  ${ConversationFieldsFragmentDoc}
`;

/**
 * __useMemberConversationsQuery__
 *
 * To run a query within a React component, call `useMemberConversationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberConversationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberConversationsQuery({
 *   variables: {
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useMemberConversationsQuery(
  baseOptions: Apollo.QueryHookOptions<
    MemberConversationsQuery,
    MemberConversationsQueryVariables
  > &
    (
      | { variables: MemberConversationsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    MemberConversationsQuery,
    MemberConversationsQueryVariables
  >(MemberConversationsDocument, options);
}
export function useMemberConversationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MemberConversationsQuery,
    MemberConversationsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    MemberConversationsQuery,
    MemberConversationsQueryVariables
  >(MemberConversationsDocument, options);
}
export function useMemberConversationsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MemberConversationsQuery,
        MemberConversationsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MemberConversationsQuery,
    MemberConversationsQueryVariables
  >(MemberConversationsDocument, options);
}
export type MemberConversationsQueryHookResult = ReturnType<
  typeof useMemberConversationsQuery
>;
export type MemberConversationsLazyQueryHookResult = ReturnType<
  typeof useMemberConversationsLazyQuery
>;
export type MemberConversationsSuspenseQueryHookResult = ReturnType<
  typeof useMemberConversationsSuspenseQuery
>;
export type MemberConversationsQueryResult = Apollo.QueryResult<
  MemberConversationsQuery,
  MemberConversationsQueryVariables
>;
export const CreateMemberConversationDocument = gql`
  mutation CreateMemberConversation($input: CreateOneMemberConversationInput!) {
    createMemberConversation(input: $input) {
      ...MemberConversationFields
    }
  }
  ${MemberConversationFieldsFragmentDoc}
`;
export type CreateMemberConversationMutationFn = Apollo.MutationFunction<
  CreateMemberConversationMutation,
  CreateMemberConversationMutationVariables
>;

/**
 * __useCreateMemberConversationMutation__
 *
 * To run a mutation, you first call `useCreateMemberConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemberConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemberConversationMutation, { data, loading, error }] = useCreateMemberConversationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMemberConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMemberConversationMutation,
    CreateMemberConversationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMemberConversationMutation,
    CreateMemberConversationMutationVariables
  >(CreateMemberConversationDocument, options);
}
export type CreateMemberConversationMutationHookResult = ReturnType<
  typeof useCreateMemberConversationMutation
>;
export type CreateMemberConversationMutationResult =
  Apollo.MutationResult<CreateMemberConversationMutation>;
export type CreateMemberConversationMutationOptions =
  Apollo.BaseMutationOptions<
    CreateMemberConversationMutation,
    CreateMemberConversationMutationVariables
  >;
export const UpdateMemberConversationDocument = gql`
  mutation UpdateMemberConversation($input: UpdateOneMemberConversationInput!) {
    updateMemberConversation(input: $input) {
      ...MemberConversationFields
    }
  }
  ${MemberConversationFieldsFragmentDoc}
`;
export type UpdateMemberConversationMutationFn = Apollo.MutationFunction<
  UpdateMemberConversationMutation,
  UpdateMemberConversationMutationVariables
>;

/**
 * __useUpdateMemberConversationMutation__
 *
 * To run a mutation, you first call `useUpdateMemberConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberConversationMutation, { data, loading, error }] = useUpdateMemberConversationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMemberConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMemberConversationMutation,
    UpdateMemberConversationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMemberConversationMutation,
    UpdateMemberConversationMutationVariables
  >(UpdateMemberConversationDocument, options);
}
export type UpdateMemberConversationMutationHookResult = ReturnType<
  typeof useUpdateMemberConversationMutation
>;
export type UpdateMemberConversationMutationResult =
  Apollo.MutationResult<UpdateMemberConversationMutation>;
export type UpdateMemberConversationMutationOptions =
  Apollo.BaseMutationOptions<
    UpdateMemberConversationMutation,
    UpdateMemberConversationMutationVariables
  >;
export const DeleteMemberConversationDocument = gql`
  mutation DeleteMemberConversation($input: DeleteOneMemberConversationInput!) {
    deleteMemberConversation(input: $input) {
      id
    }
  }
`;
export type DeleteMemberConversationMutationFn = Apollo.MutationFunction<
  DeleteMemberConversationMutation,
  DeleteMemberConversationMutationVariables
>;

/**
 * __useDeleteMemberConversationMutation__
 *
 * To run a mutation, you first call `useDeleteMemberConversationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemberConversationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemberConversationMutation, { data, loading, error }] = useDeleteMemberConversationMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMemberConversationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMemberConversationMutation,
    DeleteMemberConversationMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteMemberConversationMutation,
    DeleteMemberConversationMutationVariables
  >(DeleteMemberConversationDocument, options);
}
export type DeleteMemberConversationMutationHookResult = ReturnType<
  typeof useDeleteMemberConversationMutation
>;
export type DeleteMemberConversationMutationResult =
  Apollo.MutationResult<DeleteMemberConversationMutation>;
export type DeleteMemberConversationMutationOptions =
  Apollo.BaseMutationOptions<
    DeleteMemberConversationMutation,
    DeleteMemberConversationMutationVariables
  >;
export const IssueDocument = gql`
  query Issue($issueId: ID!) {
    issue(id: $issueId) {
      ...IssueFields
      project {
        ...ProjectFields
      }
    }
  }
  ${IssueFieldsFragmentDoc}
  ${ProjectFieldsFragmentDoc}
`;

/**
 * __useIssueQuery__
 *
 * To run a query within a React component, call `useIssueQuery` and pass it any options that fit your needs.
 * When your component renders, `useIssueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIssueQuery({
 *   variables: {
 *      issueId: // value for 'issueId'
 *   },
 * });
 */
export function useIssueQuery(
  baseOptions: Apollo.QueryHookOptions<IssueQuery, IssueQueryVariables> &
    ({ variables: IssueQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<IssueQuery, IssueQueryVariables>(
    IssueDocument,
    options,
  );
}
export function useIssueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IssueQuery, IssueQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<IssueQuery, IssueQueryVariables>(
    IssueDocument,
    options,
  );
}
export function useIssueSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<IssueQuery, IssueQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<IssueQuery, IssueQueryVariables>(
    IssueDocument,
    options,
  );
}
export type IssueQueryHookResult = ReturnType<typeof useIssueQuery>;
export type IssueLazyQueryHookResult = ReturnType<typeof useIssueLazyQuery>;
export type IssueSuspenseQueryHookResult = ReturnType<
  typeof useIssueSuspenseQuery
>;
export type IssueQueryResult = Apollo.QueryResult<
  IssueQuery,
  IssueQueryVariables
>;
export const IssuesDocument = gql`
  query Issues(
    $sorting: [IssueSort!]!
    $filter: IssueFilter!
    $paging: OffsetPaging!
  ) {
    issues(sorting: $sorting, filter: $filter, paging: $paging) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ...IssueFields
        project {
          ...ProjectFields
        }
      }
      totalCount
    }
  }
  ${IssueFieldsFragmentDoc}
  ${ProjectFieldsFragmentDoc}
`;

/**
 * __useIssuesQuery__
 *
 * To run a query within a React component, call `useIssuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useIssuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIssuesQuery({
 *   variables: {
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useIssuesQuery(
  baseOptions: Apollo.QueryHookOptions<IssuesQuery, IssuesQueryVariables> &
    ({ variables: IssuesQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<IssuesQuery, IssuesQueryVariables>(
    IssuesDocument,
    options,
  );
}
export function useIssuesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<IssuesQuery, IssuesQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<IssuesQuery, IssuesQueryVariables>(
    IssuesDocument,
    options,
  );
}
export function useIssuesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<IssuesQuery, IssuesQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<IssuesQuery, IssuesQueryVariables>(
    IssuesDocument,
    options,
  );
}
export type IssuesQueryHookResult = ReturnType<typeof useIssuesQuery>;
export type IssuesLazyQueryHookResult = ReturnType<typeof useIssuesLazyQuery>;
export type IssuesSuspenseQueryHookResult = ReturnType<
  typeof useIssuesSuspenseQuery
>;
export type IssuesQueryResult = Apollo.QueryResult<
  IssuesQuery,
  IssuesQueryVariables
>;
export const CreateIssueDocument = gql`
  mutation CreateIssue($input: CreateOneIssueInput!) {
    createIssue(input: $input) {
      ...IssueFields
    }
  }
  ${IssueFieldsFragmentDoc}
`;
export type CreateIssueMutationFn = Apollo.MutationFunction<
  CreateIssueMutation,
  CreateIssueMutationVariables
>;

/**
 * __useCreateIssueMutation__
 *
 * To run a mutation, you first call `useCreateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIssueMutation, { data, loading, error }] = useCreateIssueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateIssueMutation,
    CreateIssueMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateIssueMutation, CreateIssueMutationVariables>(
    CreateIssueDocument,
    options,
  );
}
export type CreateIssueMutationHookResult = ReturnType<
  typeof useCreateIssueMutation
>;
export type CreateIssueMutationResult =
  Apollo.MutationResult<CreateIssueMutation>;
export type CreateIssueMutationOptions = Apollo.BaseMutationOptions<
  CreateIssueMutation,
  CreateIssueMutationVariables
>;
export const UpdateIssueDocument = gql`
  mutation UpdateIssue($input: UpdateOneIssueInput!) {
    updateIssue(input: $input) {
      ...IssueFields
    }
  }
  ${IssueFieldsFragmentDoc}
`;
export type UpdateIssueMutationFn = Apollo.MutationFunction<
  UpdateIssueMutation,
  UpdateIssueMutationVariables
>;

/**
 * __useUpdateIssueMutation__
 *
 * To run a mutation, you first call `useUpdateIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIssueMutation, { data, loading, error }] = useUpdateIssueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateIssueMutation,
    UpdateIssueMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateIssueMutation, UpdateIssueMutationVariables>(
    UpdateIssueDocument,
    options,
  );
}
export type UpdateIssueMutationHookResult = ReturnType<
  typeof useUpdateIssueMutation
>;
export type UpdateIssueMutationResult =
  Apollo.MutationResult<UpdateIssueMutation>;
export type UpdateIssueMutationOptions = Apollo.BaseMutationOptions<
  UpdateIssueMutation,
  UpdateIssueMutationVariables
>;
export const DeleteIssueDocument = gql`
  mutation DeleteIssue($input: DeleteOneIssueInput!) {
    deleteIssue(input: $input) {
      id
    }
  }
`;
export type DeleteIssueMutationFn = Apollo.MutationFunction<
  DeleteIssueMutation,
  DeleteIssueMutationVariables
>;

/**
 * __useDeleteIssueMutation__
 *
 * To run a mutation, you first call `useDeleteIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIssueMutation, { data, loading, error }] = useDeleteIssueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteIssueMutation,
    DeleteIssueMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteIssueMutation, DeleteIssueMutationVariables>(
    DeleteIssueDocument,
    options,
  );
}
export type DeleteIssueMutationHookResult = ReturnType<
  typeof useDeleteIssueMutation
>;
export type DeleteIssueMutationResult =
  Apollo.MutationResult<DeleteIssueMutation>;
export type DeleteIssueMutationOptions = Apollo.BaseMutationOptions<
  DeleteIssueMutation,
  DeleteIssueMutationVariables
>;
export const MemberIssueDocument = gql`
  query MemberIssue($memberIssueId: ID!) {
    memberIssue(id: $memberIssueId) {
      ...MemberIssueFields
      member {
        ...MemberFields
      }
      issue {
        ...IssueFields
      }
    }
  }
  ${MemberIssueFieldsFragmentDoc}
  ${MemberFieldsFragmentDoc}
  ${IssueFieldsFragmentDoc}
`;

/**
 * __useMemberIssueQuery__
 *
 * To run a query within a React component, call `useMemberIssueQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberIssueQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberIssueQuery({
 *   variables: {
 *      memberIssueId: // value for 'memberIssueId'
 *   },
 * });
 */
export function useMemberIssueQuery(
  baseOptions: Apollo.QueryHookOptions<
    MemberIssueQuery,
    MemberIssueQueryVariables
  > &
    (
      | { variables: MemberIssueQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MemberIssueQuery, MemberIssueQueryVariables>(
    MemberIssueDocument,
    options,
  );
}
export function useMemberIssueLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MemberIssueQuery,
    MemberIssueQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MemberIssueQuery, MemberIssueQueryVariables>(
    MemberIssueDocument,
    options,
  );
}
export function useMemberIssueSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MemberIssueQuery,
        MemberIssueQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MemberIssueQuery, MemberIssueQueryVariables>(
    MemberIssueDocument,
    options,
  );
}
export type MemberIssueQueryHookResult = ReturnType<typeof useMemberIssueQuery>;
export type MemberIssueLazyQueryHookResult = ReturnType<
  typeof useMemberIssueLazyQuery
>;
export type MemberIssueSuspenseQueryHookResult = ReturnType<
  typeof useMemberIssueSuspenseQuery
>;
export type MemberIssueQueryResult = Apollo.QueryResult<
  MemberIssueQuery,
  MemberIssueQueryVariables
>;
export const MemberIssuesDocument = gql`
  query MemberIssues(
    $sorting: [MemberIssueSort!]!
    $filter: MemberIssueFilter!
    $paging: OffsetPaging!
  ) {
    memberIssues(sorting: $sorting, filter: $filter, paging: $paging) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ...MemberIssueFields
        member {
          ...MemberFields
        }
        issue {
          ...IssueFields
          project {
            ...ProjectFields
          }
        }
      }
      totalCount
    }
  }
  ${MemberIssueFieldsFragmentDoc}
  ${MemberFieldsFragmentDoc}
  ${IssueFieldsFragmentDoc}
  ${ProjectFieldsFragmentDoc}
`;

/**
 * __useMemberIssuesQuery__
 *
 * To run a query within a React component, call `useMemberIssuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberIssuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberIssuesQuery({
 *   variables: {
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useMemberIssuesQuery(
  baseOptions: Apollo.QueryHookOptions<
    MemberIssuesQuery,
    MemberIssuesQueryVariables
  > &
    (
      | { variables: MemberIssuesQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MemberIssuesQuery, MemberIssuesQueryVariables>(
    MemberIssuesDocument,
    options,
  );
}
export function useMemberIssuesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MemberIssuesQuery,
    MemberIssuesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MemberIssuesQuery, MemberIssuesQueryVariables>(
    MemberIssuesDocument,
    options,
  );
}
export function useMemberIssuesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MemberIssuesQuery,
        MemberIssuesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MemberIssuesQuery, MemberIssuesQueryVariables>(
    MemberIssuesDocument,
    options,
  );
}
export type MemberIssuesQueryHookResult = ReturnType<
  typeof useMemberIssuesQuery
>;
export type MemberIssuesLazyQueryHookResult = ReturnType<
  typeof useMemberIssuesLazyQuery
>;
export type MemberIssuesSuspenseQueryHookResult = ReturnType<
  typeof useMemberIssuesSuspenseQuery
>;
export type MemberIssuesQueryResult = Apollo.QueryResult<
  MemberIssuesQuery,
  MemberIssuesQueryVariables
>;
export const CreateMemberIssueDocument = gql`
  mutation CreateMemberIssue($input: CreateOneMemberIssueInput!) {
    createMemberIssue(input: $input) {
      ...MemberIssueFields
    }
  }
  ${MemberIssueFieldsFragmentDoc}
`;
export type CreateMemberIssueMutationFn = Apollo.MutationFunction<
  CreateMemberIssueMutation,
  CreateMemberIssueMutationVariables
>;

/**
 * __useCreateMemberIssueMutation__
 *
 * To run a mutation, you first call `useCreateMemberIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemberIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemberIssueMutation, { data, loading, error }] = useCreateMemberIssueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMemberIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMemberIssueMutation,
    CreateMemberIssueMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMemberIssueMutation,
    CreateMemberIssueMutationVariables
  >(CreateMemberIssueDocument, options);
}
export type CreateMemberIssueMutationHookResult = ReturnType<
  typeof useCreateMemberIssueMutation
>;
export type CreateMemberIssueMutationResult =
  Apollo.MutationResult<CreateMemberIssueMutation>;
export type CreateMemberIssueMutationOptions = Apollo.BaseMutationOptions<
  CreateMemberIssueMutation,
  CreateMemberIssueMutationVariables
>;
export const UpdateMemberIssueDocument = gql`
  mutation UpdateMemberIssue($input: UpdateOneMemberIssueInput!) {
    updateMemberIssue(input: $input) {
      ...MemberIssueFields
    }
  }
  ${MemberIssueFieldsFragmentDoc}
`;
export type UpdateMemberIssueMutationFn = Apollo.MutationFunction<
  UpdateMemberIssueMutation,
  UpdateMemberIssueMutationVariables
>;

/**
 * __useUpdateMemberIssueMutation__
 *
 * To run a mutation, you first call `useUpdateMemberIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberIssueMutation, { data, loading, error }] = useUpdateMemberIssueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMemberIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMemberIssueMutation,
    UpdateMemberIssueMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMemberIssueMutation,
    UpdateMemberIssueMutationVariables
  >(UpdateMemberIssueDocument, options);
}
export type UpdateMemberIssueMutationHookResult = ReturnType<
  typeof useUpdateMemberIssueMutation
>;
export type UpdateMemberIssueMutationResult =
  Apollo.MutationResult<UpdateMemberIssueMutation>;
export type UpdateMemberIssueMutationOptions = Apollo.BaseMutationOptions<
  UpdateMemberIssueMutation,
  UpdateMemberIssueMutationVariables
>;
export const DeleteMemberIssueDocument = gql`
  mutation DeleteMemberIssue($input: DeleteOneMemberIssueInput!) {
    deleteMemberIssue(input: $input) {
      id
    }
  }
`;
export type DeleteMemberIssueMutationFn = Apollo.MutationFunction<
  DeleteMemberIssueMutation,
  DeleteMemberIssueMutationVariables
>;

/**
 * __useDeleteMemberIssueMutation__
 *
 * To run a mutation, you first call `useDeleteMemberIssueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemberIssueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemberIssueMutation, { data, loading, error }] = useDeleteMemberIssueMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMemberIssueMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMemberIssueMutation,
    DeleteMemberIssueMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteMemberIssueMutation,
    DeleteMemberIssueMutationVariables
  >(DeleteMemberIssueDocument, options);
}
export type DeleteMemberIssueMutationHookResult = ReturnType<
  typeof useDeleteMemberIssueMutation
>;
export type DeleteMemberIssueMutationResult =
  Apollo.MutationResult<DeleteMemberIssueMutation>;
export type DeleteMemberIssueMutationOptions = Apollo.BaseMutationOptions<
  DeleteMemberIssueMutation,
  DeleteMemberIssueMutationVariables
>;
export const MemberDocument = gql`
  query Member($memberId: ID!) {
    member(id: $memberId) {
      ...MemberFields
    }
  }
  ${MemberFieldsFragmentDoc}
`;

/**
 * __useMemberQuery__
 *
 * To run a query within a React component, call `useMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberQuery({
 *   variables: {
 *      memberId: // value for 'memberId'
 *   },
 * });
 */
export function useMemberQuery(
  baseOptions: Apollo.QueryHookOptions<MemberQuery, MemberQueryVariables> &
    ({ variables: MemberQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MemberQuery, MemberQueryVariables>(
    MemberDocument,
    options,
  );
}
export function useMemberLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MemberQuery, MemberQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MemberQuery, MemberQueryVariables>(
    MemberDocument,
    options,
  );
}
export function useMemberSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MemberQuery, MemberQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MemberQuery, MemberQueryVariables>(
    MemberDocument,
    options,
  );
}
export type MemberQueryHookResult = ReturnType<typeof useMemberQuery>;
export type MemberLazyQueryHookResult = ReturnType<typeof useMemberLazyQuery>;
export type MemberSuspenseQueryHookResult = ReturnType<
  typeof useMemberSuspenseQuery
>;
export type MemberQueryResult = Apollo.QueryResult<
  MemberQuery,
  MemberQueryVariables
>;
export const MembersDocument = gql`
  query Members(
    $sorting: [MemberSort!]!
    $filter: MemberFilter!
    $paging: OffsetPaging!
  ) {
    members(sorting: $sorting, filter: $filter, paging: $paging) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ...MemberFields
      }
      totalCount
    }
  }
  ${MemberFieldsFragmentDoc}
`;

/**
 * __useMembersQuery__
 *
 * To run a query within a React component, call `useMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMembersQuery({
 *   variables: {
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useMembersQuery(
  baseOptions: Apollo.QueryHookOptions<MembersQuery, MembersQueryVariables> &
    ({ variables: MembersQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MembersQuery, MembersQueryVariables>(
    MembersDocument,
    options,
  );
}
export function useMembersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MembersQuery,
    MembersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MembersQuery, MembersQueryVariables>(
    MembersDocument,
    options,
  );
}
export function useMembersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<MembersQuery, MembersQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<MembersQuery, MembersQueryVariables>(
    MembersDocument,
    options,
  );
}
export type MembersQueryHookResult = ReturnType<typeof useMembersQuery>;
export type MembersLazyQueryHookResult = ReturnType<typeof useMembersLazyQuery>;
export type MembersSuspenseQueryHookResult = ReturnType<
  typeof useMembersSuspenseQuery
>;
export type MembersQueryResult = Apollo.QueryResult<
  MembersQuery,
  MembersQueryVariables
>;
export const CreateMemberDocument = gql`
  mutation CreateMember($input: CreateOneMemberInput!) {
    createMember(input: $input) {
      ...MemberFields
    }
  }
  ${MemberFieldsFragmentDoc}
`;
export type CreateMemberMutationFn = Apollo.MutationFunction<
  CreateMemberMutation,
  CreateMemberMutationVariables
>;

/**
 * __useCreateMemberMutation__
 *
 * To run a mutation, you first call `useCreateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemberMutation, { data, loading, error }] = useCreateMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMemberMutation,
    CreateMemberMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMemberMutation,
    CreateMemberMutationVariables
  >(CreateMemberDocument, options);
}
export type CreateMemberMutationHookResult = ReturnType<
  typeof useCreateMemberMutation
>;
export type CreateMemberMutationResult =
  Apollo.MutationResult<CreateMemberMutation>;
export type CreateMemberMutationOptions = Apollo.BaseMutationOptions<
  CreateMemberMutation,
  CreateMemberMutationVariables
>;
export const UpdateMemberDocument = gql`
  mutation UpdateMember($input: UpdateOneMemberInput!) {
    updateMember(input: $input) {
      ...MemberFields
    }
  }
  ${MemberFieldsFragmentDoc}
`;
export type UpdateMemberMutationFn = Apollo.MutationFunction<
  UpdateMemberMutation,
  UpdateMemberMutationVariables
>;

/**
 * __useUpdateMemberMutation__
 *
 * To run a mutation, you first call `useUpdateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberMutation, { data, loading, error }] = useUpdateMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMemberMutation,
    UpdateMemberMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMemberMutation,
    UpdateMemberMutationVariables
  >(UpdateMemberDocument, options);
}
export type UpdateMemberMutationHookResult = ReturnType<
  typeof useUpdateMemberMutation
>;
export type UpdateMemberMutationResult =
  Apollo.MutationResult<UpdateMemberMutation>;
export type UpdateMemberMutationOptions = Apollo.BaseMutationOptions<
  UpdateMemberMutation,
  UpdateMemberMutationVariables
>;
export const DeleteMemberDocument = gql`
  mutation DeleteMember($input: DeleteOneMemberInput!) {
    deleteMember(input: $input) {
      id
    }
  }
`;
export type DeleteMemberMutationFn = Apollo.MutationFunction<
  DeleteMemberMutation,
  DeleteMemberMutationVariables
>;

/**
 * __useDeleteMemberMutation__
 *
 * To run a mutation, you first call `useDeleteMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemberMutation, { data, loading, error }] = useDeleteMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMemberMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMemberMutation,
    DeleteMemberMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteMemberMutation,
    DeleteMemberMutationVariables
  >(DeleteMemberDocument, options);
}
export type DeleteMemberMutationHookResult = ReturnType<
  typeof useDeleteMemberMutation
>;
export type DeleteMemberMutationResult =
  Apollo.MutationResult<DeleteMemberMutation>;
export type DeleteMemberMutationOptions = Apollo.BaseMutationOptions<
  DeleteMemberMutation,
  DeleteMemberMutationVariables
>;
export const ProjectDocument = gql`
  query Project($projectId: ID!) {
    project(id: $projectId) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`;

/**
 * __useProjectQuery__
 *
 * To run a query within a React component, call `useProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useProjectQuery(
  baseOptions: Apollo.QueryHookOptions<ProjectQuery, ProjectQueryVariables> &
    ({ variables: ProjectQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProjectQuery, ProjectQueryVariables>(
    ProjectDocument,
    options,
  );
}
export function useProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProjectQuery,
    ProjectQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProjectQuery, ProjectQueryVariables>(
    ProjectDocument,
    options,
  );
}
export function useProjectSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<ProjectQuery, ProjectQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ProjectQuery, ProjectQueryVariables>(
    ProjectDocument,
    options,
  );
}
export type ProjectQueryHookResult = ReturnType<typeof useProjectQuery>;
export type ProjectLazyQueryHookResult = ReturnType<typeof useProjectLazyQuery>;
export type ProjectSuspenseQueryHookResult = ReturnType<
  typeof useProjectSuspenseQuery
>;
export type ProjectQueryResult = Apollo.QueryResult<
  ProjectQuery,
  ProjectQueryVariables
>;
export const ProjectIssuesDocument = gql`
  query ProjectIssues(
    $projectId: ID!
    $sorting: [IssueSort!]!
    $filter: IssueFilter!
    $paging: OffsetPaging!
  ) {
    project(id: $projectId) {
      ...ProjectFields
      issues(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          ...IssueFields
        }
      }
    }
  }
  ${ProjectFieldsFragmentDoc}
  ${IssueFieldsFragmentDoc}
`;

/**
 * __useProjectIssuesQuery__
 *
 * To run a query within a React component, call `useProjectIssuesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectIssuesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectIssuesQuery({
 *   variables: {
 *      projectId: // value for 'projectId'
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useProjectIssuesQuery(
  baseOptions: Apollo.QueryHookOptions<
    ProjectIssuesQuery,
    ProjectIssuesQueryVariables
  > &
    (
      | { variables: ProjectIssuesQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProjectIssuesQuery, ProjectIssuesQueryVariables>(
    ProjectIssuesDocument,
    options,
  );
}
export function useProjectIssuesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProjectIssuesQuery,
    ProjectIssuesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProjectIssuesQuery, ProjectIssuesQueryVariables>(
    ProjectIssuesDocument,
    options,
  );
}
export function useProjectIssuesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        ProjectIssuesQuery,
        ProjectIssuesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    ProjectIssuesQuery,
    ProjectIssuesQueryVariables
  >(ProjectIssuesDocument, options);
}
export type ProjectIssuesQueryHookResult = ReturnType<
  typeof useProjectIssuesQuery
>;
export type ProjectIssuesLazyQueryHookResult = ReturnType<
  typeof useProjectIssuesLazyQuery
>;
export type ProjectIssuesSuspenseQueryHookResult = ReturnType<
  typeof useProjectIssuesSuspenseQuery
>;
export type ProjectIssuesQueryResult = Apollo.QueryResult<
  ProjectIssuesQuery,
  ProjectIssuesQueryVariables
>;
export const ProjectsDocument = gql`
  query Projects(
    $sorting: [ProjectSort!]!
    $filter: ProjectFilter!
    $paging: OffsetPaging!
  ) {
    projects(sorting: $sorting, filter: $filter, paging: $paging) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ...ProjectFields
      }
      totalCount
    }
  }
  ${ProjectFieldsFragmentDoc}
`;

/**
 * __useProjectsQuery__
 *
 * To run a query within a React component, call `useProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProjectsQuery({
 *   variables: {
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useProjectsQuery(
  baseOptions: Apollo.QueryHookOptions<ProjectsQuery, ProjectsQueryVariables> &
    ({ variables: ProjectsQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ProjectsQuery, ProjectsQueryVariables>(
    ProjectsDocument,
    options,
  );
}
export function useProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ProjectsQuery,
    ProjectsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ProjectsQuery, ProjectsQueryVariables>(
    ProjectsDocument,
    options,
  );
}
export function useProjectsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<ProjectsQuery, ProjectsQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<ProjectsQuery, ProjectsQueryVariables>(
    ProjectsDocument,
    options,
  );
}
export type ProjectsQueryHookResult = ReturnType<typeof useProjectsQuery>;
export type ProjectsLazyQueryHookResult = ReturnType<
  typeof useProjectsLazyQuery
>;
export type ProjectsSuspenseQueryHookResult = ReturnType<
  typeof useProjectsSuspenseQuery
>;
export type ProjectsQueryResult = Apollo.QueryResult<
  ProjectsQuery,
  ProjectsQueryVariables
>;
export const CreateProjectDocument = gql`
  mutation CreateProject($input: CreateOneProjectInput!) {
    createProject(input: $input) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`;
export type CreateProjectMutationFn = Apollo.MutationFunction<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument, options);
}
export type CreateProjectMutationHookResult = ReturnType<
  typeof useCreateProjectMutation
>;
export type CreateProjectMutationResult =
  Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;
export const UpdateProjectDocument = gql`
  mutation UpdateProject($input: UpdateOneProjectInput!) {
    updateProject(input: $input) {
      ...ProjectFields
    }
  }
  ${ProjectFieldsFragmentDoc}
`;
export type UpdateProjectMutationFn = Apollo.MutationFunction<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>;

/**
 * __useUpdateProjectMutation__
 *
 * To run a mutation, you first call `useUpdateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectMutation, { data, loading, error }] = useUpdateProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateProjectMutation,
    UpdateProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateProjectMutation,
    UpdateProjectMutationVariables
  >(UpdateProjectDocument, options);
}
export type UpdateProjectMutationHookResult = ReturnType<
  typeof useUpdateProjectMutation
>;
export type UpdateProjectMutationResult =
  Apollo.MutationResult<UpdateProjectMutation>;
export type UpdateProjectMutationOptions = Apollo.BaseMutationOptions<
  UpdateProjectMutation,
  UpdateProjectMutationVariables
>;
export const DeleteProjectDocument = gql`
  mutation DeleteProject($input: DeleteOneProjectInput!) {
    deleteProject(input: $input) {
      id
    }
  }
`;
export type DeleteProjectMutationFn = Apollo.MutationFunction<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>;

/**
 * __useDeleteProjectMutation__
 *
 * To run a mutation, you first call `useDeleteProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProjectMutation, { data, loading, error }] = useDeleteProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteProjectMutation,
    DeleteProjectMutationVariables
  >(DeleteProjectDocument, options);
}
export type DeleteProjectMutationHookResult = ReturnType<
  typeof useDeleteProjectMutation
>;
export type DeleteProjectMutationResult =
  Apollo.MutationResult<DeleteProjectMutation>;
export type DeleteProjectMutationOptions = Apollo.BaseMutationOptions<
  DeleteProjectMutation,
  DeleteProjectMutationVariables
>;
export const MemberProjectDocument = gql`
  query MemberProject($memberProjectId: ID!) {
    memberProject(id: $memberProjectId) {
      ...MemberProjectFields
      member {
        ...MemberFields
      }
      project {
        ...ProjectFields
      }
    }
  }
  ${MemberProjectFieldsFragmentDoc}
  ${MemberFieldsFragmentDoc}
  ${ProjectFieldsFragmentDoc}
`;

/**
 * __useMemberProjectQuery__
 *
 * To run a query within a React component, call `useMemberProjectQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberProjectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberProjectQuery({
 *   variables: {
 *      memberProjectId: // value for 'memberProjectId'
 *   },
 * });
 */
export function useMemberProjectQuery(
  baseOptions: Apollo.QueryHookOptions<
    MemberProjectQuery,
    MemberProjectQueryVariables
  > &
    (
      | { variables: MemberProjectQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MemberProjectQuery, MemberProjectQueryVariables>(
    MemberProjectDocument,
    options,
  );
}
export function useMemberProjectLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MemberProjectQuery,
    MemberProjectQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MemberProjectQuery, MemberProjectQueryVariables>(
    MemberProjectDocument,
    options,
  );
}
export function useMemberProjectSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MemberProjectQuery,
        MemberProjectQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MemberProjectQuery,
    MemberProjectQueryVariables
  >(MemberProjectDocument, options);
}
export type MemberProjectQueryHookResult = ReturnType<
  typeof useMemberProjectQuery
>;
export type MemberProjectLazyQueryHookResult = ReturnType<
  typeof useMemberProjectLazyQuery
>;
export type MemberProjectSuspenseQueryHookResult = ReturnType<
  typeof useMemberProjectSuspenseQuery
>;
export type MemberProjectQueryResult = Apollo.QueryResult<
  MemberProjectQuery,
  MemberProjectQueryVariables
>;
export const MemberProjectsDocument = gql`
  query MemberProjects(
    $sorting: [MemberProjectSort!]!
    $filter: MemberProjectFilter!
    $paging: OffsetPaging!
  ) {
    memberProjects(sorting: $sorting, filter: $filter, paging: $paging) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ...MemberProjectFields
        member {
          ...MemberFields
        }
        project {
          ...ProjectFields
        }
      }
      totalCount
    }
  }
  ${MemberProjectFieldsFragmentDoc}
  ${MemberFieldsFragmentDoc}
  ${ProjectFieldsFragmentDoc}
`;

/**
 * __useMemberProjectsQuery__
 *
 * To run a query within a React component, call `useMemberProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberProjectsQuery({
 *   variables: {
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useMemberProjectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    MemberProjectsQuery,
    MemberProjectsQueryVariables
  > &
    (
      | { variables: MemberProjectsQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MemberProjectsQuery, MemberProjectsQueryVariables>(
    MemberProjectsDocument,
    options,
  );
}
export function useMemberProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MemberProjectsQuery,
    MemberProjectsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MemberProjectsQuery, MemberProjectsQueryVariables>(
    MemberProjectsDocument,
    options,
  );
}
export function useMemberProjectsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        MemberProjectsQuery,
        MemberProjectsQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    MemberProjectsQuery,
    MemberProjectsQueryVariables
  >(MemberProjectsDocument, options);
}
export type MemberProjectsQueryHookResult = ReturnType<
  typeof useMemberProjectsQuery
>;
export type MemberProjectsLazyQueryHookResult = ReturnType<
  typeof useMemberProjectsLazyQuery
>;
export type MemberProjectsSuspenseQueryHookResult = ReturnType<
  typeof useMemberProjectsSuspenseQuery
>;
export type MemberProjectsQueryResult = Apollo.QueryResult<
  MemberProjectsQuery,
  MemberProjectsQueryVariables
>;
export const CreateMemberProjectDocument = gql`
  mutation CreateMemberProject($input: CreateOneMemberProjectInput!) {
    createMemberProject(input: $input) {
      ...MemberProjectFields
    }
  }
  ${MemberProjectFieldsFragmentDoc}
`;
export type CreateMemberProjectMutationFn = Apollo.MutationFunction<
  CreateMemberProjectMutation,
  CreateMemberProjectMutationVariables
>;

/**
 * __useCreateMemberProjectMutation__
 *
 * To run a mutation, you first call `useCreateMemberProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemberProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemberProjectMutation, { data, loading, error }] = useCreateMemberProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMemberProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateMemberProjectMutation,
    CreateMemberProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateMemberProjectMutation,
    CreateMemberProjectMutationVariables
  >(CreateMemberProjectDocument, options);
}
export type CreateMemberProjectMutationHookResult = ReturnType<
  typeof useCreateMemberProjectMutation
>;
export type CreateMemberProjectMutationResult =
  Apollo.MutationResult<CreateMemberProjectMutation>;
export type CreateMemberProjectMutationOptions = Apollo.BaseMutationOptions<
  CreateMemberProjectMutation,
  CreateMemberProjectMutationVariables
>;
export const UpdateMemberProjectDocument = gql`
  mutation UpdateMemberProject($input: UpdateOneMemberProjectInput!) {
    updateMemberProject(input: $input) {
      ...MemberProjectFields
    }
  }
  ${MemberProjectFieldsFragmentDoc}
`;
export type UpdateMemberProjectMutationFn = Apollo.MutationFunction<
  UpdateMemberProjectMutation,
  UpdateMemberProjectMutationVariables
>;

/**
 * __useUpdateMemberProjectMutation__
 *
 * To run a mutation, you first call `useUpdateMemberProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMemberProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMemberProjectMutation, { data, loading, error }] = useUpdateMemberProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateMemberProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateMemberProjectMutation,
    UpdateMemberProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateMemberProjectMutation,
    UpdateMemberProjectMutationVariables
  >(UpdateMemberProjectDocument, options);
}
export type UpdateMemberProjectMutationHookResult = ReturnType<
  typeof useUpdateMemberProjectMutation
>;
export type UpdateMemberProjectMutationResult =
  Apollo.MutationResult<UpdateMemberProjectMutation>;
export type UpdateMemberProjectMutationOptions = Apollo.BaseMutationOptions<
  UpdateMemberProjectMutation,
  UpdateMemberProjectMutationVariables
>;
export const DeleteMemberProjectDocument = gql`
  mutation DeleteMemberProject($input: DeleteOneMemberProjectInput!) {
    deleteMemberProject(input: $input) {
      id
    }
  }
`;
export type DeleteMemberProjectMutationFn = Apollo.MutationFunction<
  DeleteMemberProjectMutation,
  DeleteMemberProjectMutationVariables
>;

/**
 * __useDeleteMemberProjectMutation__
 *
 * To run a mutation, you first call `useDeleteMemberProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMemberProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMemberProjectMutation, { data, loading, error }] = useDeleteMemberProjectMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteMemberProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteMemberProjectMutation,
    DeleteMemberProjectMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteMemberProjectMutation,
    DeleteMemberProjectMutationVariables
  >(DeleteMemberProjectDocument, options);
}
export type DeleteMemberProjectMutationHookResult = ReturnType<
  typeof useDeleteMemberProjectMutation
>;
export type DeleteMemberProjectMutationResult =
  Apollo.MutationResult<DeleteMemberProjectMutation>;
export type DeleteMemberProjectMutationOptions = Apollo.BaseMutationOptions<
  DeleteMemberProjectMutation,
  DeleteMemberProjectMutationVariables
>;
export const UserDocument = gql`
  query User($userId: ID!) {
    user(id: $userId) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables> &
    ({ variables: UserQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options,
  );
}
export function useUserSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options,
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<
  typeof useUserSuspenseQuery
>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
  query Users(
    $sorting: [UserSort!]!
    $filter: UserFilter!
    $paging: OffsetPaging!
  ) {
    users(sorting: $sorting, filter: $filter, paging: $paging) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ...UserFields
      }
      totalCount
    }
  }
  ${UserFieldsFragmentDoc}
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables> &
    ({ variables: UsersQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  );
}
export function useUsersSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<
  typeof useUsersSuspenseQuery
>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
export const CreateUserDocument = gql`
  mutation CreateUser($input: CreateOneUserInput!) {
    createUser(input: $input) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  );
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>;
export type CreateUserMutationResult =
  Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>;
export const UpdateUserDocument = gql`
  mutation UpdateUser($input: UpdateOneUserInput!) {
    updateUser(input: $input) {
      ...UserFields
    }
  }
  ${UserFieldsFragmentDoc}
`;
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  );
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>;
export type UpdateUserMutationResult =
  Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>;
export const DeleteUserDocument = gql`
  mutation DeleteUser($input: DeleteOneUserInput!) {
    deleteUser(input: $input) {
      id
    }
  }
`;
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options,
  );
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>;
export type DeleteUserMutationResult =
  Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>;
export const WorkspaceDocument = gql`
  query Workspace($workspaceId: ID!) {
    workspace(id: $workspaceId) {
      ...WorkspaceFields
    }
  }
  ${WorkspaceFieldsFragmentDoc}
`;

/**
 * __useWorkspaceQuery__
 *
 * To run a query within a React component, call `useWorkspaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspaceQuery({
 *   variables: {
 *      workspaceId: // value for 'workspaceId'
 *   },
 * });
 */
export function useWorkspaceQuery(
  baseOptions: Apollo.QueryHookOptions<
    WorkspaceQuery,
    WorkspaceQueryVariables
  > &
    (
      | { variables: WorkspaceQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WorkspaceQuery, WorkspaceQueryVariables>(
    WorkspaceDocument,
    options,
  );
}
export function useWorkspaceLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WorkspaceQuery,
    WorkspaceQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WorkspaceQuery, WorkspaceQueryVariables>(
    WorkspaceDocument,
    options,
  );
}
export function useWorkspaceSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<WorkspaceQuery, WorkspaceQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<WorkspaceQuery, WorkspaceQueryVariables>(
    WorkspaceDocument,
    options,
  );
}
export type WorkspaceQueryHookResult = ReturnType<typeof useWorkspaceQuery>;
export type WorkspaceLazyQueryHookResult = ReturnType<
  typeof useWorkspaceLazyQuery
>;
export type WorkspaceSuspenseQueryHookResult = ReturnType<
  typeof useWorkspaceSuspenseQuery
>;
export type WorkspaceQueryResult = Apollo.QueryResult<
  WorkspaceQuery,
  WorkspaceQueryVariables
>;
export const WorkspacesDocument = gql`
  query Workspaces(
    $sorting: [WorkspaceSort!]!
    $filter: WorkspaceFilter!
    $paging: OffsetPaging!
  ) {
    workspaces(sorting: $sorting, filter: $filter, paging: $paging) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ...WorkspaceFields
      }
      totalCount
    }
  }
  ${WorkspaceFieldsFragmentDoc}
`;

/**
 * __useWorkspacesQuery__
 *
 * To run a query within a React component, call `useWorkspacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspacesQuery({
 *   variables: {
 *      sorting: // value for 'sorting'
 *      filter: // value for 'filter'
 *      paging: // value for 'paging'
 *   },
 * });
 */
export function useWorkspacesQuery(
  baseOptions: Apollo.QueryHookOptions<
    WorkspacesQuery,
    WorkspacesQueryVariables
  > &
    (
      | { variables: WorkspacesQueryVariables; skip?: boolean }
      | { skip: boolean }
    ),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<WorkspacesQuery, WorkspacesQueryVariables>(
    WorkspacesDocument,
    options,
  );
}
export function useWorkspacesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    WorkspacesQuery,
    WorkspacesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<WorkspacesQuery, WorkspacesQueryVariables>(
    WorkspacesDocument,
    options,
  );
}
export function useWorkspacesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        WorkspacesQuery,
        WorkspacesQueryVariables
      >,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<WorkspacesQuery, WorkspacesQueryVariables>(
    WorkspacesDocument,
    options,
  );
}
export type WorkspacesQueryHookResult = ReturnType<typeof useWorkspacesQuery>;
export type WorkspacesLazyQueryHookResult = ReturnType<
  typeof useWorkspacesLazyQuery
>;
export type WorkspacesSuspenseQueryHookResult = ReturnType<
  typeof useWorkspacesSuspenseQuery
>;
export type WorkspacesQueryResult = Apollo.QueryResult<
  WorkspacesQuery,
  WorkspacesQueryVariables
>;
export const CreateWorkspaceDocument = gql`
  mutation CreateWorkspace($input: CreateOneWorkspaceInput!) {
    createWorkspace(input: $input) {
      ...WorkspaceFields
    }
  }
  ${WorkspaceFieldsFragmentDoc}
`;
export type CreateWorkspaceMutationFn = Apollo.MutationFunction<
  CreateWorkspaceMutation,
  CreateWorkspaceMutationVariables
>;

/**
 * __useCreateWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkspaceMutation, { data, loading, error }] = useCreateWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkspaceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateWorkspaceMutation,
    CreateWorkspaceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateWorkspaceMutation,
    CreateWorkspaceMutationVariables
  >(CreateWorkspaceDocument, options);
}
export type CreateWorkspaceMutationHookResult = ReturnType<
  typeof useCreateWorkspaceMutation
>;
export type CreateWorkspaceMutationResult =
  Apollo.MutationResult<CreateWorkspaceMutation>;
export type CreateWorkspaceMutationOptions = Apollo.BaseMutationOptions<
  CreateWorkspaceMutation,
  CreateWorkspaceMutationVariables
>;
export const UpdateWorkspaceDocument = gql`
  mutation UpdateWorkspace($input: UpdateOneWorkspaceInput!) {
    updateWorkspace(input: $input) {
      ...WorkspaceFields
    }
  }
  ${WorkspaceFieldsFragmentDoc}
`;
export type UpdateWorkspaceMutationFn = Apollo.MutationFunction<
  UpdateWorkspaceMutation,
  UpdateWorkspaceMutationVariables
>;

/**
 * __useUpdateWorkspaceMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMutation, { data, loading, error }] = useUpdateWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateWorkspaceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateWorkspaceMutation,
    UpdateWorkspaceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateWorkspaceMutation,
    UpdateWorkspaceMutationVariables
  >(UpdateWorkspaceDocument, options);
}
export type UpdateWorkspaceMutationHookResult = ReturnType<
  typeof useUpdateWorkspaceMutation
>;
export type UpdateWorkspaceMutationResult =
  Apollo.MutationResult<UpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationOptions = Apollo.BaseMutationOptions<
  UpdateWorkspaceMutation,
  UpdateWorkspaceMutationVariables
>;
export const DeleteWorkspaceDocument = gql`
  mutation DeleteWorkspace($input: DeleteOneWorkspaceInput!) {
    deleteWorkspace(input: $input) {
      id
    }
  }
`;
export type DeleteWorkspaceMutationFn = Apollo.MutationFunction<
  DeleteWorkspaceMutation,
  DeleteWorkspaceMutationVariables
>;

/**
 * __useDeleteWorkspaceMutation__
 *
 * To run a mutation, you first call `useDeleteWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWorkspaceMutation, { data, loading, error }] = useDeleteWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteWorkspaceMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteWorkspaceMutation,
    DeleteWorkspaceMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteWorkspaceMutation,
    DeleteWorkspaceMutationVariables
  >(DeleteWorkspaceDocument, options);
}
export type DeleteWorkspaceMutationHookResult = ReturnType<
  typeof useDeleteWorkspaceMutation
>;
export type DeleteWorkspaceMutationResult =
  Apollo.MutationResult<DeleteWorkspaceMutation>;
export type DeleteWorkspaceMutationOptions = Apollo.BaseMutationOptions<
  DeleteWorkspaceMutation,
  DeleteWorkspaceMutationVariables
>;
