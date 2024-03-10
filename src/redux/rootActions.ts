import * as usersAsyncActions from './users/users.actions';
import { actions as usersActions } from './users/users.slice';

export const allActions = {
	...usersAsyncActions,
	...usersActions
}
