import { Spin } from 'antd'
import React, { useState } from 'react'
import HeaderBar from '../components/headerbar'
import LeftPanel from '../components/leftpanel'
import PageHeader from '../components/pageheader'
import RightPanel from '../components/rightpanel'
import SignIn from '../containers/signin'


const MainLayout = (props) => {

    const [toggleleftmn, setToggleletmn] = useState(false)
    
    return (
        <div className="signin" >
            <section className={toggleleftmn ? "leftpanel-collapsed" : "leftpanel-show"}>
                {
                    props.loading?
                    <Spin size="large" />
                    :
                    props.isAuthenticated ?
                    <React.Fragment>
                        <LeftPanel username="Bao dep trai" colapsed={toggleleftmn} />
                        <div className="mainpanel">
                            <HeaderBar colapseleftmn={toggleleftmn} oncolapseleftmn={setToggleletmn} />
                            {props.children}
                        </div>

                        <RightPanel />
                    </React.Fragment>
                    :
                    <SignIn />
                }

            </section>
        </div>
    )
}

export default MainLayout