/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Sun Apr 24 2022
 *
 * Filename: signup.js
 *
 * Copyright (c) 2022 Bujisoft
 */



import Mbhead from '../components/Mbhead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function Signup() {
  return (
    <main>
      <Mbhead />
      <Header />
      <br></br>
  



  
      {/* Register widget here */}
      <Script type='text/javascript' src='https://app.mymusicstaff.com/Widget/v3/Registration.ashx?id=sch_3pcJ4' class='sb_registration'></Script>
    
    </main>
  );
}
