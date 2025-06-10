import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

function SidebarMenu(){
    return(
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-auto col-sm-2 bg-dark d-flex flex-column justify-content-between min-vh-100'>
                    <div>
                        <a className='text-decoration-none ms-4 d-flex align-items-center text-white d-none d-sm-inline'>
                            <span className='fs-4'>LOGO</span>
                        </a>
                        <hr className='text-white d-none d-sm-block'/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SidebarMenu;