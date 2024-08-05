"use client"
import ProductoVenta from '@/components/paginas/ProductoVenta'
import React from 'react'
import proteccionRuta from '../middleware/ProteccionRuta'

const pages = () => {
  return (
    <div>
      <ProductoVenta />

    </div>
  )
}

export default proteccionRuta(pages)
