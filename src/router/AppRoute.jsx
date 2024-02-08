import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../ui'
import { LoginPage } from '../auth/pages/LoginPage'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'
export const AppRoute = () => {
    return (
        <>
            <Routes>


                <Route path='login' element={<LoginPage />} />
                <Route path="/*" element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                } />


            </Routes>

        </>
    )
}
