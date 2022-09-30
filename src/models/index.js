// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TaskCard, Boards, Notes, UserProfile, Task, Label } = initSchema(schema);

export {
  TaskCard,
  Boards,
  Notes,
  UserProfile,
  Task,
  Label
};