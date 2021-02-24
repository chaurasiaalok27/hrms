import React, { useEffect } from 'react';
import Calendar from '../../components/calendar/Calendar';
import DataCard from '../../components/dataCard/DataCard';
import Header from '../../components/header/Header';
import HrCard from '../../components/hrCard/HrCard';
import RecruitmentCard from '../../components/recruitmentcard/RecruitmentCard';
import authenticate from '../../hoc/authentication'

const data = "you have 9 new applications. also you have to hire 2 new UX/UI Designer and 1 react native developer";
const name = "Alok";

function Home(props) {
  return (
    <div className="home">
      <Header pageHeader="Dashboard" />

      <div className="main-container">

        <div className="first-container">
       <DataCard data={data} name={name} />
       <br/>
       <RecruitmentCard />
       </div>
       <div className="second-container">
         <Calendar />
         <br/>
         <HrCard />
       </div>
       </div>

    </div>
  )
}

export default authenticate(Home);