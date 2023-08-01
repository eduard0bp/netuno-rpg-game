'use client'
import { NextRouter } from 'next/router'

export const isAuthenticated = () => {
  const authenticated = sessionStorage.getItem('authenticated')
  return authenticated === 'true'
}


