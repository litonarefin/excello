<template>
        <div class="row">
            <div class="col-lg-3">
                <div class="bg-dark p-10">
                    <testimonial-slider></testimonial-slider>
                </div>
            </div>
            <div class="col-lg-9">
                <div class="card">
                    <div class="card-title">
                        <h4>Recent Orders </h4>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Product</th>
                                        <th>quantity</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            <div class="round-img">
                                                <a href=""><img src="../images/avatar/4.jpg" alt=""></a>
                                            </div>
                                        </td>
                                        <td>John Abraham</td>
                                        <td><span>iBook</span></td>
                                        <td><span>456 pcs</span></td>
                                        <td><span class="badge badge-success">Done</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="round-img">
                                                <a href=""><img src="../images/avatar/2.jpg" alt=""></a>
                                            </div>
                                        </td>
                                        <td>John Abraham</td>
                                        <td><span>iPhone</span></td>
                                        <td><span>456 pcs</span></td>
                                        <td><span class="badge badge-success">Done</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="round-img">
                                                <a href=""><img src="../images/avatar/3.jpg" alt=""></a>
                                            </div>
                                        </td>
                                        <td>John Abraham</td>
                                        <td><span>iMac</span></td>
                                        <td><span>456 pcs</span></td>
                                        <td><span class="badge badge-warning">Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="round-img">
                                                <a href=""><img src="../images/avatar/4.jpg" alt=""></a>
                                            </div>
                                        </td>
                                        <td>John Abraham</td>
                                        <td><span>iBook</span></td>
                                        <td><span>456 pcs</span></td>
                                        <td><span class="badge badge-success">Done</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</template>

<script>
import TestimonialSlider from '../components/TestimonialSlider.vue';
export default {
    components: {
        TestimonialSlider
    }
}
</script>

<style>

</style>