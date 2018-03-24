import * as React from "react"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import {User} from "./user"
import {map} from "ramda"

interface UserProps {
  users: Array<User>
}

export const Users = ({users}: UserProps) =>
  <div>
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {renderUser(users)}
      </TableBody>
    </Table>
  </div>

const renderUser = map(({id, name, status}: User) =>
  <TableRow>
    <TableRowColumn>{id}</TableRowColumn>
    <TableRowColumn>{name}</TableRowColumn>
    <TableRowColumn>{status}</TableRowColumn>
  </TableRow>
)
