import { Spin } from 'antd'
import React from 'react'
import HeaderBar from '../components/headerbar'
import LeftPanel from '../components/leftpanel'
import PageHeader from '../components/pageheader'
import RightPanel from '../components/rightpanel'
import SignIn from '../containers/signin'


const MainLayout = (props) => {

    
    return (
        <div className="signin" >
            <section>
                {
                    props.loading?
                    <Spin size="large" />
                    :
                    props.isAuthenticated ?
                    <React.Fragment>
                        <LeftPanel username="Bao dep trai" />
                        <div className="mainpanel">
                            <HeaderBar />
                            <PageHeader />
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