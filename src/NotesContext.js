import React from 'react'

const NotesContex = React.createContext(null)

export const NotesProvider = ({children}) => {
    return <NotesContex.Provider>
        {children}

    </NotesContex.Provider>

}