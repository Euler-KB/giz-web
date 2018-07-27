import React , {  Component  } from 'react';

class Home extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <div className="page">
                <div className="page-main">
                    <div className="header py-4">
                        <div className="container">
                            <div className="d-flex">
                                <a className="header-brand" href="./index.html">
                                    <img src="./demo/brand/tabler.svg" className="header-brand-img" alt="tabler logo"/>
                                </a>
                                <div className="d-flex order-lg-2 ml-auto">
                                    <div className="nav-item d-none d-md-flex">
                                        <a href="https://github.com/tabler/tabler" className="btn btn-sm btn-outline-primary" target="_blank">Source code</a>
                                    </div>
                                    <div className="dropdown d-none d-md-flex">
                                        <a className="nav-link icon" data-toggle="dropdown">
                                            <i className="fe fe-bell"></i>
                                            <span className="nav-unread"></span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <a href="#" className="dropdown-item d-flex">
                                                <span className="avatar mr-3 align-self-center" style="background-image: url(demo/faces/male/41.jpg)"></span>
                                                <div>
                                                    <strong>Nathan</strong> pushed new commit: Fix page load performance issue.
                                                    <div className="small text-muted">10 minutes ago</div>
                                                </div>
                                            </a>
                                            <a href="#" className="dropdown-item d-flex">
                                                <span className="avatar mr-3 align-self-center" style="background-image: url(demo/faces/female/1.jpg)"></span>
                                                <div>
                                                    <strong>Alice</strong> started new task: Tabler UI design.
                                                    <div className="small text-muted">1 hour ago</div>
                                                </div>
                                            </a>
                                            <a href="#" className="dropdown-item d-flex">
                                                <span className="avatar mr-3 align-self-center" style="background-image: url(demo/faces/female/18.jpg)"></span>
                                                <div>
                                                    <strong>Rose</strong> deployed new version of NodeJS REST Api V3
                                                    <div className="small text-muted">2 hours ago</div>
                                                </div>
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item text-center text-muted-dark">Mark all as read</a>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a href="#" className="nav-link pr-0 leading-none" data-toggle="dropdown">
                                            <span className="avatar" style="background-image: url(./demo/faces/female/25.jpg)"></span>
                                            <span className="ml-2 d-none d-lg-block">
                                          <span className="text-default">Jane Pearson</span>
                                          <small className="text-muted d-block mt-1">Administrator</small>
                                        </span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                            <a className="dropdown-item" href="#">
                                                <i className="dropdown-icon fe fe-user"></i> Profile
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="dropdown-icon fe fe-settings"></i> Settings
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <span className="float-right"><span className="badge badge-primary">6</span></span>
                                                <i className="dropdown-icon fe fe-mail"></i> Inbox
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="dropdown-icon fe fe-send"></i> Message
                                            </a>
                                            <div className="dropdown-divider"></div>
                                            <a className="dropdown-item" href="#">
                                                <i className="dropdown-icon fe fe-help-circle"></i> Need help?
                                            </a>
                                            <a className="dropdown-item" href="#">
                                                <i className="dropdown-icon fe fe-log-out"></i> Sign out
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
                                    <span className="header-toggler-icon"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-3 ml-auto">
                                    <form className="input-icon my-3 my-lg-0">
                                        <input type="search" className="form-control header-search" placeholder="Search&hellip;" tabindex="1"/>
                                        <div className="input-icon-addon">
                                            <i className="fe fe-search"></i>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg order-lg-first">
                                    <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                        <li className="nav-item">
                                            <a href="./index.html" className="nav-link active"><i className="fe fe-home"></i> Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown"><i className="fe fe-box"></i> Interface</a>
                                            <div className="dropdown-menu dropdown-menu-arrow">
                                                <a href="./cards.html" className="dropdown-item ">Cards design</a>
                                                <a href="./charts.html" className="dropdown-item ">Charts</a>
                                                <a href="./pricing-cards.html" className="dropdown-item ">Pricing cards</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown"><i className="fe fe-calendar"></i> Components</a>
                                            <div className="dropdown-menu dropdown-menu-arrow">
                                                <a href="./maps.html" className="dropdown-item ">Maps</a>
                                                <a href="./icons.html" className="dropdown-item ">Icons</a>
                                                <a href="./store.html" className="dropdown-item ">Store</a>
                                                <a href="./blog.html" className="dropdown-item ">Blog</a>
                                                <a href="./carousel.html" className="dropdown-item ">Carousel</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="javascript:void(0)" className="nav-link" data-toggle="dropdown"><i className="fe fe-file"></i> Pages</a>
                                            <div className="dropdown-menu dropdown-menu-arrow">
                                                <a href="./profile.html" className="dropdown-item ">Profile</a>
                                                <a href="./login.html" className="dropdown-item ">Login</a>
                                                <a href="./register.html" className="dropdown-item ">Register</a>
                                                <a href="./forgot-password.html" className="dropdown-item ">Forgot password</a>
                                                <a href="./400.html" className="dropdown-item ">400 error</a>
                                                <a href="./401.html" className="dropdown-item ">401 error</a>
                                                <a href="./403.html" className="dropdown-item ">403 error</a>
                                                <a href="./404.html" className="dropdown-item ">404 error</a>
                                                <a href="./500.html" className="dropdown-item ">500 error</a>
                                                <a href="./503.html" className="dropdown-item ">503 error</a>
                                                <a href="./email.html" className="dropdown-item ">Email</a>
                                                <a href="./empty.html" className="dropdown-item ">Empty page</a>
                                                <a href="./rtl.html" className="dropdown-item ">RTL mode</a>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="./form-elements.html" className="nav-link"><i className="fe fe-check-square"></i> Forms</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./gallery.html" className="nav-link"><i className="fe fe-image"></i> Gallery</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./docs/index.html" className="nav-link"><i className="fe fe-file-text"></i> Documentation</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-3 my-md-5">
                        <div className="container">
                            <div className="page-header">
                                <h1 className="page-title">
                                    Dashboard
                                </h1>
                            </div>
                            <div className="row row-cards">
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-green">
                                                6%
                                                <i className="fe fe-chevron-up"></i>
                                            </div>
                                            <div className="h1 m-0">43</div>
                                            <div className="text-muted mb-4">New Tickets</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-red">
                                                -3%
                                                <i className="fe fe-chevron-down"></i>
                                            </div>
                                            <div className="h1 m-0">17</div>
                                            <div className="text-muted mb-4">Closed Today</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-green">
                                                9%
                                                <i className="fe fe-chevron-up"></i>
                                            </div>
                                            <div className="h1 m-0">7</div>
                                            <div className="text-muted mb-4">New Replies</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-green">
                                                3%
                                                <i className="fe fe-chevron-up"></i>
                                            </div>
                                            <div className="h1 m-0">27.3K</div>
                                            <div className="text-muted mb-4">Followers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-red">
                                                -2%
                                                <i className="fe fe-chevron-down"></i>
                                            </div>
                                            <div className="h1 m-0">$95</div>
                                            <div className="text-muted mb-4">Daily Earnings</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-lg-2">
                                    <div className="card">
                                        <div className="card-body p-3 text-center">
                                            <div className="text-right text-red">
                                                -1%
                                                <i className="fe fe-chevron-down"></i>
                                            </div>
                                            <div className="h1 m-0">621</div>
                                            <div className="text-muted mb-4">Products</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Development Activity</h3>
                                        </div>
                                        <div id="chart-development-activity" style="height: 10rem"></div>
                                        <div className="table-responsive">
                                            <table className="table card-table table-striped table-vcenter">
                                                <thead>
                                                <tr>
                                                    <th colspan="2">User</th>
                                                    <th>Commit</th>
                                                    <th>Date</th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="w-1"><span className="avatar" style="background-image: url(./demo/faces/male/9.jpg)"></span></td>
                                                    <td>Ronald Bradley</td>
                                                    <td>Initial commit</td>
                                                    <td className="text-nowrap">May 6, 2018</td>
                                                    <td className="w-1"><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td><span className="avatar">BM</span></td>
                                                    <td>Russell Gibson</td>
                                                    <td>Main structure</td>
                                                    <td className="text-nowrap">April 22, 2018</td>
                                                    <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td><span className="avatar" style="background-image: url(./demo/faces/female/1.jpg)"></span></td>
                                                    <td>Beverly Armstrong</td>
                                                    <td>Left sidebar adjustments</td>
                                                    <td className="text-nowrap">April 15, 2018</td>
                                                    <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td><span className="avatar" style="background-image: url(./demo/faces/male/4.jpg)"></span></td>
                                                    <td>Bobby Knight</td>
                                                    <td>Topbar dropdown style</td>
                                                    <td className="text-nowrap">April 8, 2018</td>
                                                    <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <td><span className="avatar" style="background-image: url(./demo/faces/female/11.jpg)"></span></td>
                                                    <td>Sharon Wells</td>
                                                    <td>Fixes #625</td>
                                                    <td className="text-nowrap">April 9, 2018</td>
                                                    <td><a href="#" className="icon"><i className="fe fe-trash"></i></a></td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="alert alert-primary">Are you in trouble? <a href="./docs/index.html" className="alert-link">Read our documentation</a> with code samples.</div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Chart title</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div id="chart-donut" style="height: 12rem;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-header">
                                                    <h3 className="card-title">Chart title</h3>
                                                </div>
                                                <div className="card-body">
                                                    <div id="chart-pie" style="height: 12rem;"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <div className="h5">New feedback</div>
                                                    <div className="display-4 font-weight-bold mb-4">62</div>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-red" style="width: 28%"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <div className="h5">Today profit</div>
                                                    <div className="display-4 font-weight-bold mb-4">$652</div>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-green" style="width: 84%"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-blue mr-3">
                      <i className="fe fe-dollar-sign"></i>
                    </span>
                                            <div>
                                                <h4 className="m-0"><a href="javascript:void(0)">132 <small>Sales</small></a></h4>
                                                <small className="text-muted">12 waiting payments</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-green mr-3">
                      <i className="fe fe-shopping-cart"></i>
                    </span>
                                            <div>
                                                <h4 className="m-0"><a href="javascript:void(0)">78 <small>Orders</small></a></h4>
                                                <small className="text-muted">32 shipped</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-red mr-3">
                      <i className="fe fe-users"></i>
                    </span>
                                            <div>
                                                <h4 className="m-0"><a href="javascript:void(0)">1,352 <small>Members</small></a></h4>
                                                <small className="text-muted">163 registered today</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center">
                    <span className="stamp stamp-md bg-yellow mr-3">
                      <i className="fe fe-message-square"></i>
                    </span>
                                            <div>
                                                <h4 className="m-0"><a href="javascript:void(0)">132 <small>Comments</small></a></h4>
                                                <small className="text-muted">16 waiting</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cards row-deck">
                                <div className="col-lg-6">
                                    <div className="card card-aside">
                                        <a href="#" className="card-aside-column" style="background-image: url(./demo/photos/david-klaasen-54203-500.jpg)"></a>
                                        <div className="card-body d-flex flex-column">
                                            <h4><a href="#">And this isn't my nose. This is a false one.</a></h4>
                                            <div className="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...</div>
                                            <div className="d-flex align-items-center pt-5 mt-auto">
                                                <div className="avatar avatar-md mr-3" style="background-image: url(./demo/faces/female/18.jpg)"></div>
                                                <div>
                                                    <a href="./profile.html" className="text-default">Rose Bradley</a>
                                                    <small className="d-block text-muted">3 days ago</small>
                                                </div>
                                                <div className="ml-auto text-muted">
                                                    <a href="javascript:void(0)" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card card-aside">
                                        <a href="#" className="card-aside-column" style="background-image: url(./demo/photos/david-marcu-114194-500.jpg)"></a>
                                        <div className="card-body d-flex flex-column">
                                            <h4><a href="#">Well, I didn't vote for you.</a></h4>
                                            <div className="text-muted">Well, we did do the nose. Why? Shut up! Will you shut up?! You don't frighten us, English pig-dog...</div>
                                            <div className="d-flex align-items-center pt-5 mt-auto">
                                                <div className="avatar avatar-md mr-3" style="background-image: url(./demo/faces/male/16.jpg)"></div>
                                                <div>
                                                    <a href="./profile.html" className="text-default">Peter Richards</a>
                                                    <small className="d-block text-muted">3 days ago</small>
                                                </div>
                                                <div className="ml-auto text-muted">
                                                    <a href="javascript:void(0)" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cards row-deck">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-outline table-vcenter text-nowrap card-table">
                                                <thead>
                                                <tr>
                                                    <th className="text-center w-1"><i className="icon-people"></i></th>
                                                    <th>User</th>
                                                    <th>Usage</th>
                                                    <th className="text-center">Payment</th>
                                                    <th>Activity</th>
                                                    <th className="text-center">Satisfaction</th>
                                                    <th className="text-center"><i className="icon-settings"></i></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="text-center">
                                                        <div className="avatar d-block" style="background-image: url(demo/faces/female/26.jpg)">
                                                            <span className="avatar-status bg-green"></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Elizabeth Martin</div>
                                                        <div className="small text-muted">
                                                            Registered: Mar 19, 2018
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left">
                                                                <strong>42%</strong>
                                                            </div>
                                                            <div className="float-right">
                                                                <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                                            </div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-yellow" role="progressbar" style="width: 42%"
                                                                 aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <i className="payment payment-visa"></i>
                                                    </td>
                                                    <td>
                                                        <div className="small text-muted">Last login</div>
                                                        <div>4 minutes ago</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.42" data-thickness="3" data-color="blue">
                                                            <div className="chart-circle-value">42%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="item-action dropdown">
                                                            <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">
                                                        <div className="avatar d-block" style="background-image: url(demo/faces/female/17.jpg)">
                                                            <span className="avatar-status bg-green"></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Michelle Schultz</div>
                                                        <div className="small text-muted">
                                                            Registered: Mar 2, 2018
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left">
                                                                <strong>0%</strong>
                                                            </div>
                                                            <div className="float-right">
                                                                <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                                            </div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-red" role="progressbar" style="width: 0%"
                                                                 aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <i className="payment payment-googlewallet"></i>
                                                    </td>
                                                    <td>
                                                        <div className="small text-muted">Last login</div>
                                                        <div>5 minutes ago</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.0" data-thickness="3" data-color="blue">
                                                            <div className="chart-circle-value">0%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="item-action dropdown">
                                                            <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">
                                                        <div className="avatar d-block" style="background-image: url(demo/faces/female/21.jpg)">
                                                            <span className="avatar-status bg-green"></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Crystal Austin</div>
                                                        <div className="small text-muted">
                                                            Registered: Apr 7, 2018
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left">
                                                                <strong>96%</strong>
                                                            </div>
                                                            <div className="float-right">
                                                                <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                                            </div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-green" role="progressbar" style="width: 96%"
                                                                 aria-valuenow="96" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <i className="payment payment-mastercard"></i>
                                                    </td>
                                                    <td>
                                                        <div className="small text-muted">Last login</div>
                                                        <div>a minute ago</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.96" data-thickness="3" data-color="blue">
                                                            <div className="chart-circle-value">96%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="item-action dropdown">
                                                            <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">
                                                        <div className="avatar d-block" style="background-image: url(demo/faces/male/32.jpg)">
                                                            <span className="avatar-status bg-green"></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Douglas Ray</div>
                                                        <div className="small text-muted">
                                                            Registered: Jan 15, 2018
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left">
                                                                <strong>6%</strong>
                                                            </div>
                                                            <div className="float-right">
                                                                <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                                            </div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-red" role="progressbar" style="width: 6%"
                                                                 aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <i className="payment payment-shopify"></i>
                                                    </td>
                                                    <td>
                                                        <div className="small text-muted">Last login</div>
                                                        <div>a minute ago</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.06" data-thickness="3" data-color="blue">
                                                            <div className="chart-circle-value">6%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="item-action dropdown">
                                                            <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">
                                                        <div className="avatar d-block" style="background-image: url(demo/faces/female/12.jpg)">
                                                            <span className="avatar-status bg-green"></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Teresa Reyes</div>
                                                        <div className="small text-muted">
                                                            Registered: Mar 4, 2018
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left">
                                                                <strong>36%</strong>
                                                            </div>
                                                            <div className="float-right">
                                                                <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                                            </div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-red" role="progressbar" style="width: 36%"
                                                                 aria-valuenow="36" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <i className="payment payment-ebay"></i>
                                                    </td>
                                                    <td>
                                                        <div className="small text-muted">Last login</div>
                                                        <div>2 minutes ago</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.36" data-thickness="3" data-color="blue">
                                                            <div className="chart-circle-value">36%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="item-action dropdown">
                                                            <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">
                                                        <div className="avatar d-block" style="background-image: url(demo/faces/female/4.jpg)">
                                                            <span className="avatar-status bg-green"></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Emma Wade</div>
                                                        <div className="small text-muted">
                                                            Registered: Mar 20, 2018
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left">
                                                                <strong>7%</strong>
                                                            </div>
                                                            <div className="float-right">
                                                                <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                                            </div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-red" role="progressbar" style="width: 7%"
                                                                 aria-valuenow="7" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <i className="payment payment-paypal"></i>
                                                    </td>
                                                    <td>
                                                        <div className="small text-muted">Last login</div>
                                                        <div>a minute ago</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.07" data-thickness="3" data-color="blue">
                                                            <div className="chart-circle-value">7%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="item-action dropdown">
                                                            <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">
                                                        <div className="avatar d-block" style="background-image: url(demo/faces/female/27.jpg)">
                                                            <span className="avatar-status bg-green"></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Carol Henderson</div>
                                                        <div className="small text-muted">
                                                            Registered: Feb 22, 2018
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left">
                                                                <strong>80%</strong>
                                                            </div>
                                                            <div className="float-right">
                                                                <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                                            </div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-green" role="progressbar" style="width: 80%"
                                                                 aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <i className="payment payment-visa"></i>
                                                    </td>
                                                    <td>
                                                        <div className="small text-muted">Last login</div>
                                                        <div>9 minutes ago</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.8" data-thickness="3" data-color="blue">
                                                            <div className="chart-circle-value">80%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="item-action dropdown">
                                                            <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">
                                                        <div className="avatar d-block" style="background-image: url(demo/faces/male/20.jpg)">
                                                            <span className="avatar-status bg-green"></span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>Christopher Harvey</div>
                                                        <div className="small text-muted">
                                                            Registered: Jan 22, 2018
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="clearfix">
                                                            <div className="float-left">
                                                                <strong>83%</strong>
                                                            </div>
                                                            <div className="float-right">
                                                                <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                                                            </div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-green" role="progressbar" style="width: 83%"
                                                                 aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <i className="payment payment-googlewallet"></i>
                                                    </td>
                                                    <td>
                                                        <div className="small text-muted">Last login</div>
                                                        <div>8 minutes ago</div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="mx-auto chart-circle chart-circle-xs" data-value="0.83" data-thickness="3" data-color="blue">
                                                            <div className="chart-circle-value">83%</div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">
                                                        <div className="item-action dropdown">
                                                            <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                <div className="dropdown-divider"></div>
                                                                <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h4 className="card-title">Browser Stats</h4>
                                        </div>
                                        <table className="table card-table">
                                            <tr>
                                                <td width="1"><i className="fa fa-chrome text-muted"></i></td>
                                                <td>Google Chrome</td>
                                                <td className="text-right"><span className="text-muted">23%</span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-firefox text-muted"></i></td>
                                                <td>Mozila Firefox</td>
                                                <td className="text-right"><span className="text-muted">15%</span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-safari text-muted"></i></td>
                                                <td>Apple Safari</td>
                                                <td className="text-right"><span className="text-muted">7%</span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-internet-explorer text-muted"></i></td>
                                                <td>Internet Explorer</td>
                                                <td className="text-right"><span className="text-muted">9%</span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-opera text-muted"></i></td>
                                                <td>Opera mini</td>
                                                <td className="text-right"><span className="text-muted">23%</span></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-edge text-muted"></i></td>
                                                <td>Microsoft edge</td>
                                                <td className="text-right"><span className="text-muted">9%</span></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h2 className="card-title">Projects</h2>
                                        </div>
                                        <table className="table card-table">
                                            <tr>
                                                <td>Admin Template</td>
                                                <td className="text-right">
                                                    <span className="badge badge-default">65%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Landing Page</td>
                                                <td className="text-right">
                                                    <span className="badge badge-success">Finished</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Backend UI</td>
                                                <td className="text-right">
                                                    <span className="badge badge-danger">Rejected</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Personal Blog</td>
                                                <td className="text-right">
                                                    <span className="badge badge-default">40%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>E-mail Templates</td>
                                                <td className="text-right">
                                                    <span className="badge badge-default">13%</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Corporate Website</td>
                                                <td className="text-right">
                                                    <span className="badge badge-warning">Pending</span>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Members</h3>
                                        </div>
                                        <div className="card-body o-auto" style="height: 15rem">
                                            <ul className="list-unstyled list-separated">
                                                <li className="list-separated-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">
                                                            <span className="avatar avatar-md d-block" style="background-image: url(demo/faces/female/12.jpg)"></span>
                                                        </div>
                                                        <div className="col">
                                                            <div>
                                                                <a href="javascript:void(0)" className="text-inherit">Amanda Hunt</a>
                                                            </div>
                                                            <small className="d-block item-except text-sm text-muted h-1x">amanda_hunt@example.com</small>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="item-action dropdown">
                                                                <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                    <div className="dropdown-divider"></div>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-separated-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">
                                                            <span className="avatar avatar-md d-block" style="background-image: url(demo/faces/female/21.jpg)"></span>
                                                        </div>
                                                        <div className="col">
                                                            <div>
                                                                <a href="javascript:void(0)" className="text-inherit">Laura Weaver</a>
                                                            </div>
                                                            <small className="d-block item-except text-sm text-muted h-1x">lauraweaver@example.com</small>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="item-action dropdown">
                                                                <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                    <div className="dropdown-divider"></div>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-separated-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">
                                                            <span className="avatar avatar-md d-block" style="background-image: url(demo/faces/female/29.jpg)"></span>
                                                        </div>
                                                        <div className="col">
                                                            <div>
                                                                <a href="javascript:void(0)" className="text-inherit">Margaret Berry</a>
                                                            </div>
                                                            <small className="d-block item-except text-sm text-muted h-1x">margaret88@example.com</small>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="item-action dropdown">
                                                                <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                    <div className="dropdown-divider"></div>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-separated-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">
                                                            <span className="avatar avatar-md d-block" style="background-image: url(demo/faces/female/2.jpg)"></span>
                                                        </div>
                                                        <div className="col">
                                                            <div>
                                                                <a href="javascript:void(0)" className="text-inherit">Nancy Herrera</a>
                                                            </div>
                                                            <small className="d-block item-except text-sm text-muted h-1x">nancy_83@example.com</small>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="item-action dropdown">
                                                                <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                    <div className="dropdown-divider"></div>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-separated-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">
                                                            <span className="avatar avatar-md d-block" style="background-image: url(demo/faces/male/34.jpg)"></span>
                                                        </div>
                                                        <div className="col">
                                                            <div>
                                                                <a href="javascript:void(0)" className="text-inherit">Edward Larson</a>
                                                            </div>
                                                            <small className="d-block item-except text-sm text-muted h-1x">edward90@example.com</small>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="item-action dropdown">
                                                                <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                    <div className="dropdown-divider"></div>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="list-separated-item">
                                                    <div className="row align-items-center">
                                                        <div className="col-auto">
                                                            <span className="avatar avatar-md d-block" style="background-image: url(demo/faces/female/11.jpg)"></span>
                                                        </div>
                                                        <div className="col">
                                                            <div>
                                                                <a href="javascript:void(0)" className="text-inherit">Joan Hanson</a>
                                                            </div>
                                                            <small className="d-block item-except text-sm text-muted h-1x">joan.hanson@example.com</small>
                                                        </div>
                                                        <div className="col-auto">
                                                            <div className="item-action dropdown">
                                                                <a href="javascript:void(0)" data-toggle="dropdown" className="icon"><i className="fe fe-more-vertical"></i></a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-tag"></i> Action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-edit-2"></i> Another action </a>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-message-square"></i> Something else here</a>
                                                                    <div className="dropdown-divider"></div>
                                                                    <a href="javascript:void(0)" className="dropdown-item"><i className="dropdown-icon fe fe-link"></i> Separated link</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-12">
                                    <div className="row">
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-value float-right text-blue">+5%</div>
                                                    <h3 className="mb-1">423</h3>
                                                    <div className="text-muted">Users online</div>
                                                </div>
                                                <div className="card-chart-bg">
                                                    <div id="chart-bg-users-1" style="height: 100%"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-value float-right text-red">-3%</div>
                                                    <h3 className="mb-1">423</h3>
                                                    <div className="text-muted">Users online</div>
                                                </div>
                                                <div className="card-chart-bg">
                                                    <div id="chart-bg-users-2" style="height: 100%"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-value float-right text-green">-3%</div>
                                                    <h3 className="mb-1">423</h3>
                                                    <div className="text-muted">Users online</div>
                                                </div>
                                                <div className="card-chart-bg">
                                                    <div id="chart-bg-users-3" style="height: 100%"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-lg-3">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="card-value float-right text-yellow">9%</div>
                                                    <h3 className="mb-1">423</h3>
                                                    <div className="text-muted">Users online</div>
                                                </div>
                                                <div className="card-chart-bg">
                                                    <div id="chart-bg-users-4" style="height: 100%"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Invoices</h3>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table card-table table-vcenter text-nowrap">
                                                <thead>
                                                <tr>
                                                    <th className="w-1">No.</th>
                                                    <th>Invoice Subject</th>
                                                    <th>Client</th>
                                                    <th>VAT No.</th>
                                                    <th>Created</th>
                                                    <th>Status</th>
                                                    <th>Price</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td><span className="text-muted">001401</span></td>
                                                    <td><a href="invoice.html" className="text-inherit">Design Works</a></td>
                                                    <td>
                                                        Carlson Limited
                                                    </td>
                                                    <td>
                                                        87956621
                                                    </td>
                                                    <td>
                                                        15 Dec 2017
                                                    </td>
                                                    <td>
                                                        <span className="status-icon bg-success"></span> Paid
                                                    </td>
                                                    <td>$887</td>
                                                    <td className="text-right">
                                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                                        <div className="dropdown">
                                                            <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a className="icon" href="javascript:void(0)">
                                                            <i className="fe fe-edit"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="text-muted">001402</span></td>
                                                    <td><a href="invoice.html" className="text-inherit">UX Wireframes</a></td>
                                                    <td>
                                                        Adobe
                                                    </td>
                                                    <td>
                                                        87956421
                                                    </td>
                                                    <td>
                                                        12 Apr 2017
                                                    </td>
                                                    <td>
                                                        <span className="status-icon bg-warning"></span> Pending
                                                    </td>
                                                    <td>$1200</td>
                                                    <td className="text-right">
                                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                                        <div className="dropdown">
                                                            <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a className="icon" href="javascript:void(0)">
                                                            <i className="fe fe-edit"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="text-muted">001403</span></td>
                                                    <td><a href="invoice.html" className="text-inherit">New Dashboard</a></td>
                                                    <td>
                                                        Bluewolf
                                                    </td>
                                                    <td>
                                                        87952621
                                                    </td>
                                                    <td>
                                                        23 Oct 2017
                                                    </td>
                                                    <td>
                                                        <span className="status-icon bg-warning"></span> Pending
                                                    </td>
                                                    <td>$534</td>
                                                    <td className="text-right">
                                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                                        <div className="dropdown">
                                                            <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a className="icon" href="javascript:void(0)">
                                                            <i className="fe fe-edit"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="text-muted">001404</span></td>
                                                    <td><a href="invoice.html" className="text-inherit">Landing Page</a></td>
                                                    <td>
                                                        Salesforce
                                                    </td>
                                                    <td>
                                                        87953421
                                                    </td>
                                                    <td>
                                                        2 Sep 2017
                                                    </td>
                                                    <td>
                                                        <span className="status-icon bg-secondary"></span> Due in 2 Weeks
                                                    </td>
                                                    <td>$1500</td>
                                                    <td className="text-right">
                                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                                        <div className="dropdown">
                                                            <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a className="icon" href="javascript:void(0)">
                                                            <i className="fe fe-edit"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="text-muted">001405</span></td>
                                                    <td><a href="invoice.html" className="text-inherit">Marketing Templates</a></td>
                                                    <td>
                                                        Printic
                                                    </td>
                                                    <td>
                                                        87956621
                                                    </td>
                                                    <td>
                                                        29 Jan 2018
                                                    </td>
                                                    <td>
                                                        <span className="status-icon bg-danger"></span> Paid Today
                                                    </td>
                                                    <td>$648</td>
                                                    <td className="text-right">
                                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                                        <div className="dropdown">
                                                            <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a className="icon" href="javascript:void(0)">
                                                            <i className="fe fe-edit"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><span className="text-muted">001406</span></td>
                                                    <td><a href="invoice.html" className="text-inherit">Sales Presentation</a></td>
                                                    <td>
                                                        Tabdaq
                                                    </td>
                                                    <td>
                                                        87956621
                                                    </td>
                                                    <td>
                                                        4 Feb 2018
                                                    </td>
                                                    <td>
                                                        <span className="status-icon bg-secondary"></span> Due in 3 Weeks
                                                    </td>
                                                    <td>$300</td>
                                                    <td className="text-right">
                                                        <a href="javascript:void(0)" className="btn btn-secondary btn-sm">Manage</a>
                                                        <div className="dropdown">
                                                            <button className="btn btn-secondary btn-sm dropdown-toggle" data-toggle="dropdown">Actions</button>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <a className="icon" href="javascript:void(0)">
                                                            <i className="fe fe-edit"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="footer">
                    <div className="container">
                        <div className="row align-items-center flex-row-reverse">
                            <div className="col-auto ml-lg-auto">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <ul className="list-inline list-inline-dots mb-0">
                                            <li className="list-inline-item"><a href="./docs/index.html">Documentation</a></li>
                                            <li className="list-inline-item"><a href="./faq.html">FAQ</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-auto">
                                        <a href="https://github.com/tabler/tabler" className="btn btn-outline-primary btn-sm">Source code</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-auto mt-3 mt-lg-0 text-center">
                                Copyright © 2018 <a href=".">Tabler</a>. Theme by <a href="https://codecalm.net" target="_blank">codecalm.net</a> All rights reserved.
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    }
}

export default Home;