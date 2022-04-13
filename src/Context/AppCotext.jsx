import React, { useState } from "react"


export const AppContext = React.createContext()

function AppContextProvider({children}) {
    const [employee, setEmployee] = useState(false)
   const [jobpost, setjobpost] = useState(false)





    const value ={
     setEmployee,employee,jobpost, setjobpost
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export {AppContextProvider}