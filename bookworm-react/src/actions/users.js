import api from '../api';
import { userLoggedIn } from './auth';

export const signup = (data: {}): void => (dispatch: {}): void =>
  api.user.signup(data).then((user: {}): void => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  });
