import { User } from '../data-models/user';

/**
 * Interface for the 'Auth' data
 */
export interface AuthData {
  loading: boolean;
  user: User;
  error: string;
}
