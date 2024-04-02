
import { Table, Badge } from 'antd';

import data from './data.json'

function TableCom() {


  const columns = [
    {
      title: '',
      dataIndex: 'star',
      key: 'star',
      render: (_) => <span>⭐</span>
    },
    {
      title: '所属品类',
      dataIndex: 'productCategory',
      key: 'productCategory',
    },
    {
      title: '项目类别',
      dataIndex: 'prjCategory',
      key: 'prjCategory',
    },
    {
      title: '项目编号',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '项目名称',
      dataIndex: 'prjName',
      key: 'prjName',
    },
    {
      title: '项目状态',
      dataIndex: 'projectStatus',
      key: 'projectStatus',
      render: projectStatus => <span><Badge status={projectStatus === 'processing' ? 'processing' : 'error'} /> {projectStatus === 'processing' ? '进行中' : '审批中'}</span>
    },
    {
      title: '项目经理',
      dataIndex: 'prjManager',
      key: 'prjManager',
    },
    {
      title: '所属部门',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: '项目计划时间',
      dataIndex: 'prjStartDate',
      key: 'prjStartDate',
      render: (prjStartDate,record) => <span>{prjStartDate}~{record.prjEndDate}</span>
    },
    
  ];
  

  return (
    <div><Table columns={columns} dataSource={data} pagination={false} /></div>
  )
}

export default TableCom