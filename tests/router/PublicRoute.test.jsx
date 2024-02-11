import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en public Route', () => {
    test('Debe de mostrar el chidren si no esta autenticado', () => {
        const contextValue = {
            logged: false,

        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        //  screen.debug()
        expect(screen.getByText('Ruta Publica')).toBeTruthy()
    })

    test('should navegar si esta autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'hook',
                id: 'ABC'
            }

        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Publica</h1>
                            </PublicRoute>
                        }
                        />
                        <Route path='marvel' element={<h1>Pagina Marvel</h1>} />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Pagina Marvel')).toBeTruthy()
    })
})