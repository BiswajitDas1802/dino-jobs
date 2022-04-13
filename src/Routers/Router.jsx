import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Switch } from 'react-router'
import Homepage from '../components/homepage/homepage'
import Jobpost from '../components/recruiter/Jobpost'
import Postedjobsinfo from '../components/recruiter/Postedjobsinfo'
import PrivateRouter from './PrivateRouter'

function Router() {
    const isAdmin = useSelector(store=>store.auth.isAdmin)
    return (
        <div>
            <Switch>
                <PrivateRouter path="/" exact>
                    <Homepage />
                </PrivateRouter>
                <Route exact path="/employer">
                    <Postedjobsinfo/>
                </Route>  
                <Route exact path="/employer/postjob">
                     <Jobpost/>
                </Route>      
                    <Route>
                      error
                    </Route>
                </Switch>
        </div>
    )

}

export default Router;
