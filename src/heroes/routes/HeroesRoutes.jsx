import React from 'react'
import { Navbar } from '../../ui'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage } from '../pages/MarvelPage'
import { DcPage } from '../pages/DcPage'
import { Search } from '../pages/Search'
import { Hero } from '../pages/Hero'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage />} />
                    <Route path='dc' element={<DcPage />} />
                    <Route path='search' element={<Search />} />
                    <Route path='hero/:id' element={<Hero />} />

                    {/* <Route path='login' element={<LoginPage />} /> */}
                    <Route path='/' element={<Navigate to="marvel" />} />
                </Routes>
            </div>

        </>
    )
}
