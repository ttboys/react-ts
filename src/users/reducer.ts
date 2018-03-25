import {User} from "./user"
import {reducerOf} from "../core/store/reducerOf"
import {success} from "../core/store/action"
import {GET_USERS, SuccessGetUsers} from "./actiontypes"

type State = Array<User>

const defaultState = (): State => []

const getUsers = () => ({response}: SuccessGetUsers): State => response

export default reducerOf({
  [success(GET_USERS)]: getUsers
})(defaultState)
