import React from 'react';
import { Table } from 'semantic-ui-react';
import { defStatCategories } from '../data/data';

export default class DefPlayerTable extends React.Component {
  render() {
    const {players, onClick} = this.props;
    return (
      <Table celled singleLine sortable inverted size='small'>
        <Table.Header>
          <Table.Row>
            {defStatCategories.map((stat, index) => (
              <Table.HeaderCell key={index} onClick={() => onClick(stat)} >{stat}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {players.map((player, index) => (
            <Table.Row key={index}>
              {defStatCategories.map((stat) => (
                <Table.Cell key={stat} >{player[stat] || '-'}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
  }
}
