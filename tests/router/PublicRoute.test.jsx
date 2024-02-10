import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth/context/AuthContext"

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

    })
})