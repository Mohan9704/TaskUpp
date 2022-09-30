import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Task {
  readonly id?: string | null;
  readonly title?: string | null;
  readonly completed?: boolean | null;
  constructor(init: ModelInit<Task>);
}

export declare class Label {
  readonly id?: string | null;
  readonly text?: string | null;
  readonly color?: string | null;
  constructor(init: ModelInit<Label>);
}

type TaskCardMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BoardsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class TaskCard {
  readonly id: string;
  readonly title?: string | null;
  readonly tasks?: (Task | null)[] | null;
  readonly labels?: (Label | null)[] | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly boardsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TaskCard, TaskCardMetaData>);
  static copyOf(source: TaskCard, mutator: (draft: MutableModel<TaskCard, TaskCardMetaData>) => MutableModel<TaskCard, TaskCardMetaData> | void): TaskCard;
}

export declare class Boards {
  readonly id: string;
  readonly boardTitle?: string | null;
  readonly userprofileID: string;
  readonly cards?: (TaskCard | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Boards, BoardsMetaData>);
  static copyOf(source: Boards, mutator: (draft: MutableModel<Boards, BoardsMetaData>) => MutableModel<Boards, BoardsMetaData> | void): Boards;
}

export declare class Notes {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly priority?: string | null;
  readonly date?: string | null;
  readonly userprofileID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Notes, NotesMetaData>);
  static copyOf(source: Notes, mutator: (draft: MutableModel<Notes, NotesMetaData>) => MutableModel<Notes, NotesMetaData> | void): Notes;
}

export declare class UserProfile {
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly displayName?: string | null;
  readonly imageUrl?: string | null;
  readonly notes?: (Notes | null)[] | null;
  readonly Boards?: (Boards | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserProfile, UserProfileMetaData>);
  static copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile, UserProfileMetaData>) => MutableModel<UserProfile, UserProfileMetaData> | void): UserProfile;
}