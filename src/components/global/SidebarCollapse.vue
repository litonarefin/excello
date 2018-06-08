<template>
    <!-- toggle and nav items -->
    <ul class="navbar-nav mr-auto mt-md-0">
        <li class="nav-item m-l-10">
            <a
                class="nav-link sidebartoggler hidden-sm-down text-muted"
                @click="handleSidebarToggle"
            >
                <i class="ti-menu"></i>
            </a>
        </li>
        <!-- Messages -->
        <li
            class="nav-item dropdown mega-dropdown"
            :class="{'show': isMegaDropwon, '': !isMegaDropwon }"
            @click="handleMegaDropwon"
        >
            <a
                class="nav-link dropdown-toggle text-muted"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"><i class="fa fa-th-large"></i>
            </a>
            <div
                class="dropdown-menu animated zoomIn"
                :class="{'show': isMegaDropwon, '': !isMegaDropwon }"
                @click="handleMegaDropwon"
            >
                <ul class="mega-dropdown-menu row">


                    <li class="col-lg-3  m-b-30">
                        <h4 class="m-b-20">CONTACT US</h4>
                        <!-- Contact -->
                        <form>
                            <div class="form-group">
                                <input type="text" class="form-control" id="exampleInputname1" placeholder="Enter Name"> </div>
                            <div class="form-group">
                                <input type="email" class="form-control" placeholder="Enter email"> </div>
                            <div class="form-group">
                                <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-info">Submit</button>
                        </form>
                    </li>
                    <li class="col-lg-3 col-xlg-3 m-b-30">
                        <h4 class="m-b-20">List style</h4>
                        <!-- List style -->
                        <ul class="list-style-none">
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                        </ul>
                    </li>
                    <li class="col-lg-3 col-xlg-3 m-b-30">
                        <h4 class="m-b-20">List style</h4>
                        <!-- List style -->
                        <ul class="list-style-none">
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                        </ul>
                    </li>
                    <li class="col-lg-3 col-xlg-3 m-b-30">
                        <h4 class="m-b-20">List style</h4>
                        <!-- List style -->
                        <ul class="list-style-none">
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> This Is Another Link</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </li>
        <!-- End Messages -->
    </ul>
</template>

<script>
    export default{
        data(){
            return{
                clickable: true,
                isMegaDropwon: false
            }
        },
        methods: {
            toggle(e){
                e.target.parentElement.classList.toggle('close')
            },
            handleSidebarToggle(){
                if( this.clickable ){
                    this.clickable = false;
                    document.body.classList.toggle('mini-sidebar');
                    this.clickable = true;
                }
            },
            handleMegaDropwon (e) {
              this.isMegaDropwon = !this.isMegaDropwon;
            }

        }
    }
</script>