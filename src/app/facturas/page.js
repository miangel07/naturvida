"use client"
import Factura from '@/components/paginas/Factura'
import React from 'react'
import proteccionRuta from '../middleware/ProteccionRuta'


const page = () => {
  return (
    <div>
      <Factura />
    </div>
  )
}

export default proteccionRuta(page)
