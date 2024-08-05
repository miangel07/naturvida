"use client"
import Venta from '@/components/paginas/Venta'
import React from 'react'
import proteccionRuta from '../middleware/ProteccionRuta'

const pages = () => {
  return (
    <div>
      <Venta />

    </div>
  )
}

export default proteccionRuta(pages)
