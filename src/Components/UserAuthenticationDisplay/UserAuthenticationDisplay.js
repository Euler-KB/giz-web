import React , { Component } from 'react';
import UserManager from "../../Common/UserManager";
import APIProxy from "../../Common/Proxy/APIProxy";
import Globals from "../../Common/Globals";

const DropDownView = (props) => {

    return  <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow" x-placement="bottom-end" style="position: absolute; transform: translate3d(-55px, 32px, 0px); top: 0px; left: 0px; will-change: transform;">
        {props.items.map(item =>{
            return <a className="dropdown-item" href="#" onClick={(evt) => {

                evt.preventDefault();

                if(item.hasOwnProperty('url')) {
                    Globals.get('history').push(item.url);
                }
                else if(item.hasOwnProperty('onClick')){
                    item.onClick();
                }

            }}>
                {item.right && <span className="float-right"><span className="badge badge-primary">{item.right}</span></span>}
                {item.icon && <i className={item.icon}></i>} {item.label}
            </a>
        })}
    </div>
};

const UserAuthenticationDisplay  = (props) => {

    const proxy = APIProxy.getInstance();
    const user = UserManager.getCurrentUser();
    if(!user){
        return null;
    }

    return <div className="dropdown">
        <a href="#" className="nav-link pr-0 leading-none" data-toggle="dropdown" aria-expanded="false">
            <span className="avatar" style={`background-image: url(${ user.ProfileImage ?  proxy.getUrl(user.ProfileImage.ThumbnailPath) : props.DefaultSrc })` }></span>
            <span className="ml-2 d-none d-lg-block">
                  <span className="text-default">{user.FullName}</span>
                  <small className="text-muted d-block mt-1">{user.AccountType}</small>
                </span>
        </a>

        <DropDownView items={[
            {
                label: "Profile",
                icon: "dropdown-icon fe fe-user",
                url: "/dashboard/profile"

            },
            {
                label: "Sign Out",
                icon: "dropdown-icon fe fe-log-out",
                onClick: () => {

                }
            }
        ]}/>

    </div>
};

export default UserAuthenticationDisplay;