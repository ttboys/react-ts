import {User} from "./user"
import {Action} from "redux"

export const GET_USERS = 'GET_USERS'

export class SuccessGetUsers implements Action {
  type: typeof GET_USERS
  response: Array<User>
}
