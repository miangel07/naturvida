"use client"
import Cliente from '@/components/paginas/Cliente'
import React from 'react'
import proteccionRuta from '../middleware/ProteccionRuta.js'

const page = () => {
  return (
    <div>
      <Cliente/>
    </div>
  )
}

export default proteccionRuta(page)
