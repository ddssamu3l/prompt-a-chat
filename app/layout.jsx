import '@styles/globals.css'

import Nav from '@components/Nav.jsx'
import Provider from '@components/Provider.jsx'

export const metadata = {
    title: "Prompt-A-Chat",
    description: 'Discover @ Share Prompts for AI Chat Bots'
}

const RootLayout = ({children}) => {
  return (
    <html lang = "en">
        <body>
            <Provider>
            <div className = "main">
                <div className = "gradient"/>
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout