import { ThemeContext, UserContext } from "./context"

export default function ContextService({ children, theme, setTheme, user, setUser }) {
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </ThemeContext.Provider>
    )
}