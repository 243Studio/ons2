import React from 'react'
import Hero from '../Components/Hero'
import BusinessSection from '../Components/BusinessSection'
import AboutSection from '../Components/AboutSection'
import MissionSection from '../Components/MissionSection'
import ContactSection from '../Components/ContactSection'

export default function Home() {
  return (
    <div>
        <Hero/>
        <BusinessSection/>
        <AboutSection/>
        <MissionSection/>
        <ContactSection/>
    </div>
  )
}
