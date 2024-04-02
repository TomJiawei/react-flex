import { Badge, Flex } from "antd";
import data from './data.json'

function CardCom() {
  return (
    <div>
      <Flex wrap="wrap" gap="small">
        {data.map(item => {
          return (<div style={{ width: 400,height: '90px',display:'flex',alignItems: 'center',border:'1px solid #ccc',boxShadow: '0 0 10px #ccc',borderRadius: '5px' }}>
            <div style={{width: '20%',height: '80%',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                style={{ width: "40px", height: "40px" }}
                alt=''
              />
            </div>
            <div style={{width: '60%',height: '80%',display: 'inline-block',verticalAlign: 'middle'}}>
              <h1 style={{fontWeight: '900'}}>{item.prjName}</h1>
              <p>项目经理：{item.prjManager}</p>
              <p>立项日期：{item.prjStartDate}</p>
              <p>任务：{item.taskCount}完成：{item.taskDoneCount}进行：{item.taskDoingCount}</p>
            </div>
            <div style={{width: '20%',height: '80%',position: 'relative'}}>
              <p style={{position: 'absolute', top: 0,right: '10px'}}><Badge status={item.projectStatus === 'processing' ? 'processing' : 'error'} /> {item.projectStatus === 'processing' ? '进行中' : '审批中'}</p>
              <p style={{position: 'absolute', bottom: 0,right: '10px'}}>⭐</p>
            </div>
          </div>)
        })}
        
      </Flex>
    </div>
  );
}

export default CardCom;
