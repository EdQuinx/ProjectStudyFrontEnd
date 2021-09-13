import React from 'react'


const PageHeader = (props) => {

    return (
        <div className="pageheader">
            <h2><i className="fa fa-home"></i> Dashboard <span>Subtitle goes here...</span></h2>
            <div className="breadcrumb-wrapper">
                <span className="label">You are here:</span>
                <ol className="breadcrumb">
                    <li><a href="index.html">Bracket</a></li>
                    <li className="active">Dashboard</li>
                </ol>
            </div>
        </div>
    )
}

export default PageHeader