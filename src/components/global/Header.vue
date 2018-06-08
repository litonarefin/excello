<template>

<!-- header header  -->
        <div class="header is_stuck">
            <nav class="navbar top-navbar navbar-expand-md navbar-light">
                <!-- Logo -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.html">


                    <router-link to="/" class="navbar-brand invisible-xs" exact>
                        <img id="small-logo" src="../../images/logo-small.png" alt="Excello"/>  
                        <img id="full-logo" src="../../images/logo-full.png" alt="Excello"/>
                    </router-link>


                    </a>
                </div>
                <!-- End Logo -->
                <div class="navbar-collapse">
                    <sidebar-collapse></sidebar-collapse>
                    <!-- User profile and search -->
                    <ul class="navbar-nav my-lg-0">

                        <!-- Search -->
                        <li class="nav-item hidden-sm-down search-box">
                            <a
                                class="nav-link hidden-sm-down text-muted"
                                href="javascript:void(0)"
                                @click="searchClick"
                                :class="{'search-open': isSearch, '': !isSearch }"
                            >
                                <i class="ti-search"></i>
                            </a>

                            <form
                                class="app-search"
                                
                                :class="{ 'form-inline': isSearch, '': !isSearch }"
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Search here"
                                >
                                <a class="srh-btn" @click="isSearch = !isSearch">
                                    <i class="ti-close"></i>
                                </a>
                            </form>

                        </li>
                        <!-- Comment -->
                        <li
                            class="nav-item dropdown"
                            :class="{'show': isNotification, '': !isNotification }"
                            @click="handleNotification">
                            <a
                                class="nav-link dropdown-toggle text-muted text-muted"
                                href="#"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <i class="fa fa-bell"></i>
                                <div class="notify">
                                    <span class="heartbit"></span>
                                    <span class="point"></span>
                                </div>
                            </a>
                            <div
                                class="dropdown-menu dropdown-menu-right mailbox animated zoomIn"
                                :class="{'show': isNotification, '': !isNotification }"
                                @click="handleNotification"
                                >
                                <ul>
                                    <li>
                                        <div class="drop-title">Notifications</div>
                                    </li>
                                    <li>
                                        <div class="message-center">
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="btn btn-danger btn-circle m-r-10"><i class="fa fa-link"></i></div>
                                                <div class="mail-contnet">
                                                    <h5>This is title</h5> <span class="mail-desc">Just see the my new admin!</span> <span class="time">9:30 AM</span>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="btn btn-success btn-circle m-r-10"><i class="ti-calendar"></i></div>
                                                <div class="mail-contnet">
                                                    <h5>This is another title</h5> <span class="mail-desc">Just a reminder that you have event</span> <span class="time">9:10 AM</span>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="btn btn-info btn-circle m-r-10"><i class="ti-settings"></i></div>
                                                <div class="mail-contnet">
                                                    <h5>This is title</h5> <span class="mail-desc">You can customize this template as you want</span> <span class="time">9:08 AM</span>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="btn btn-primary btn-circle m-r-10"><i class="ti-user"></i></div>
                                                <div class="mail-contnet">
                                                    <h5>This is another title</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="nav-link text-center" href="javascript:void(0);"> <strong>Check all notifications</strong> <i class="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- End Comment -->
                        <!-- Messages -->
                        <li
                            class="nav-item dropdown"
                            :class="{'show': isMessage, '': !isMessage }"
                            @click="handleMessage"
                        >
                            <a class="nav-link dropdown-toggle text-muted  " href="#" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fa fa-envelope"></i>
                                <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                            </a>
                            <div
                                class="dropdown-menu dropdown-menu-right mailbox animated zoomIn"
                                aria-labelledby="2"
                                :class="{'show': isMessage, '': !isMessage }"
                                @click="handleMessage"
                                >
                                <ul>
                                    <li>
                                        <div class="drop-title">You have 4 new messages</div>
                                    </li>
                                    <li>
                                        <div class="message-center">
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="user-img"> <img src="../../images/users/5.jpg" alt="user" class="img-circle"> <span class="profile-status online pull-right"></span> </div>
                                                <div class="mail-contnet">
                                                    <h5>Michael Qin</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:30 AM</span>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="user-img"> <img src="../../images/users/2.jpg" alt="user" class="img-circle"> <span class="profile-status busy pull-right"></span> </div>
                                                <div class="mail-contnet">
                                                    <h5>John Doe</h5> <span class="mail-desc">I've sung a song! See you at</span> <span class="time">9:10 AM</span>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="user-img"> <img src="../../images/users/3.jpg" alt="user" class="img-circle"> <span class="profile-status away pull-right"></span> </div>
                                                <div class="mail-contnet">
                                                    <h5>Mr. John</h5> <span class="mail-desc">I am a singer!</span> <span class="time">9:08 AM</span>
                                                </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="#">
                                                <div class="user-img"> <img src="../../images/users/4.jpg" alt="user" class="img-circle"> <span class="profile-status offline pull-right"></span> </div>
                                                <div class="mail-contnet">
                                                    <h5>Michael Qin</h5> <span class="mail-desc">Just see the my admin!</span> <span class="time">9:02 AM</span>
                                                </div>
                                            </a>
                                        </div>
                                    </li>
                                    <li>
                                        <a class="nav-link text-center" href="javascript:void(0);"> <strong>See all e-Mails</strong> <i class="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- End Messages -->
                        <!-- Profile -->
                        <li class="nav-item dropdown"
                            :class="{'show': isUserInfo, '': !isUserInfo }"
                            @click="handleUserInfo"
                        >
                            <a class="nav-link dropdown-toggle text-muted  " href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="../../images/users/5.jpg" alt="user" class="profile-pic" /></a>
                            <div
                                class="dropdown-menu dropdown-menu-right animated zoomIn"
                                :class="{'show': isUserInfo, '': !isUserInfo }"
                                @click="handleUserInfo"
                            >
                                <ul class="dropdown-user">
                                    <li><a href="#"><i class="ti-user"></i> Profile</a></li>
                                    <li><a href="#"><i class="ti-wallet"></i> Balance</a></li>
                                    <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
                                    <li><a href="#"><i class="ti-settings"></i> Setting</a></li>
                                    <li><a href="#"><i class="fa fa-power-off"></i> Logout</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

</template>

<script>
    import SidebarCollapse from './SidebarCollapse.vue';
    export default{
        data(){
            return{
                isSearch: false,
                isOpen: false,
                clickable: true,
                isNotification: false,
                isMessage: false,
                isUserInfo: false
            }
        },
        components:{
            SidebarCollapse
        },
        methods: {
            toggle(e){
                //this.isOpen = !this.isOpen
                e.target.parentElement.classList.toggle('close')
            },
            searchClick (e) {
                this.isSearch = !this.isSearch;
            },
            handleMessage (e) {
              this.isMessage = !this.isMessage;
            },
            handleNotification (e) {
              this.isNotification = !this.isNotification;
            },
            handleUserInfo (e) {
              this.isUserInfo = !this.isUserInfo;
            }

        }
    }
</script>

<style lang="scss">
    .form-inline {
        display: block !important;
    }
    .notification-show + .dropdown-menu,
        .message-show + .dropdown-menu ,
            .language-show + .dropdown-menu  {
                display: block;
            }
    .header .top-navbar .navbar-header .navbar-brand {
        height: 35px;
        max-width: 250px;
    }

    .navbar-brand #small-logo, 
    .mini-sidebar .navbar-brand #full-logo {
        display: none;
    }   
    .mini-sidebar .navbar-brand #small-logo {
        display: inline;
    } 
    #small-logo, #full-logo {
        width:auto;
        height:35px;
    }
    .header.is_stuck {
        min-height:54px; 
        
        z-index:999999999;
    }
    .header.is_stuck .navbar {
        position: fixed;
        width: 100%;
        background:white;
        box-shadow: 1px 0 5px rgba(0, 0, 0, 0.1);
    }

</style> 