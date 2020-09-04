import React from 'react'

import TableComponent from '../../components/table/table'


class Demo extends React.Component {
  state = {
    data: [],
    loading: true
  };
  initColumns = () => {
    this.columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        width: 200,
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        width: 100,
        sorter: (a, b) => a.amount - b.amount,
      },
      {
        title: 'Type',
        dataIndex: 'type',
        width: 100,
      },
      {
        title: 'Note',
        dataIndex: 'note',
        width: 100,
      },
      {
        title: 'Action',
        key: 'action',
        fixed: 'right',
        width: 100,
        render: () => <span>Delete</span>,
      },
    ]
  }
  UNSAFE_componentWillMount () {
    this.initColumns()
  }
  loadMore () {
    setTimeout(() => {
      const data = [
        {
          id: 0,
          date: '2018-02-11',
          amount: 120,
          type: 'sss',
          note: 'transfer',
        },
        {
          id: 1,
          date: '2018-03-11',
          amount: 243,
          type: 'income',
          note: 'transfer',
        },
        {
          id: 2,
          date: '2018-04-11',
          amount: 98,
          type: 'income',
          note: 'transfer',
        },
      ];
      this.setState({
        data: data,
        loading: false
      })
    }, 100)
  }

  componentDidMount () {
    this.loadMore()
  }

  render () {

    return (
      <div>
        <TableComponent columns={this.columns} loading={this.state.loading} tableData={this.state.data} />
      </div>
    )
  }
}

export default Demo