import React from 'react'
import Story from './Story'
import Description from './Description'
import Hero from './Hero'
import Mission from '../Mission'
import Newsletter from '../Newsletter/Newsletter'
import Companies from '../Companies/Companies'
function About() {
  return (
    <>
    <Hero />
    <Description />
    <Mission />
    <Story />
    <Newsletter />
    <Companies />
    </>
  )
}

export default About