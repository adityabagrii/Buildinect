import React from 'react'
import './Home.css'

import Consultancy from '../assets/consultancy.svg'
import myb from '../assets/myb.svg'
import roti from '../assets/roti.svg'
import bai from '../assets/bai.svg'
import byb from '../assets/byb.svg'
import he from '../assets/he.svg'
import bea from '../assets/bea.svg'

import Card from './Card'
const Home = () => {
  return (
    <div className="main">
      <div className="community">
        <div className="animation">
          <div class="loader">
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          <div class="loader-square"></div>
          </div>
        </div>
        <h1>Join the community</h1>
      </div>
      <div className="cards">
        <div className="row">
        <Card imageSource = {Consultancy} Heading="Free Consultancy" Text = "Sign up and book a free consultation with leading mentors to grow your start-up and get your valuation calculated through AI."/>
        <Card imageSource = {myb} Heading="Market Your Business" Text = "Join our marketing course for experiencing the depth of digital and on-ground marketing along with regular marketing report."/>
        <Card imageSource = {roti} Heading="Reach out to investors" Text = "Reach out to leading industrialists and start-up leaders through the community we developed for free pitch and growth for your business."/>
        <Card imageSource = {byb} Heading="Boost Your Business" Text = "Get a full package of your customized business support , including the flexibility of choosing mentors in your area of interest through mentor rating and ways to target the right investors along with full-fledge marketing guide."/>          
        </div>
        <div className="row">
        <Card imageSource = {bai} Heading="Be an Investor" Text = "Sign up and become an investor at a very minimal cost on our platform with few simple steps of valuations expectations , maximum exit percentage , types of business , maximum investment cap. The AI will be giving results to the investors by making the report of start-ups the investor is interested in."/>          
        <Card imageSource = {he} Heading="Hire Employees" Text = "Startups can hire employees for their business through looking at our AI - developed statistics of employees at very low salary as these employees will be college students."/>          
        <Card imageSource = {bea} Heading="Become an Employee" Text = "We connect college students with internships and jobs by using AI to grade their applications, which are then submitted to startups. Our premium service features their resumes more frequently to HRs and offers improvement tips."/>
        </div>
      </div>
    </div>
  )
}

export default Home
