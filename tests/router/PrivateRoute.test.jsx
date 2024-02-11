import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Pruebas en private route', () => {
    test('Debe de mostrar el chidren si  esta autenticado', () => {
        const contextValue = {
            logged: false,

        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Privada</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        //screen.debug()
        expect(screen.getByText('Ruta Privada')).toBeTruthy()
    })
})