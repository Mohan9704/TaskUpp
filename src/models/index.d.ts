import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UserProfileMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UserProfile {
  readonly id: string;
  readonly username?: string | null;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly displayName?: string | null;
  readonly imageUrl?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserProfile, UserProfileMetaData>);
  static copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile, UserProfileMetaData>) => MutableModel<UserProfile, UserProfileMetaData> | void): UserProfile;
}