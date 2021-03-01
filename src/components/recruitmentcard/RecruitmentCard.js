import React from 'react';
import Button from '../button/Button';
import Table from '../table/Table';

const RecruitmentCard = () => {
  return (
    <div className="recruitment-card">
      <div className="header">
        <div style={{ fontWeight: 700, fontSize: 20 }}>
          Recruitment Progess
      </div>
        <Button classname="recruitment-btn">Veiw All</Button>
      </div>
      <div className="table">
        <Table />
      </div>
    </div>
  )
}

export default RecruitmentCard;