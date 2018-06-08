<template>

        <div class="row bg-white m-l-0 m-r-0 box-shadow">
            <!-- column -->
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Extra Area Chart</h4>
                        <extra-area></extra-area>
                    </div>
                </div>
            </div>
            <!-- column -->

            <!-- column -->
            <div class="col-lg-4">
                <div class="card">
                    <div class="card-body browser">
                        <p class="f-w-600">iMacs <span class="pull-right">85%</span></p>
                        <div class="progress ">
                            <div role="progressbar" style="width: 85%; height:8px;" class="progress-bar bg-danger wow animated progress-animated"> <span class="sr-only">60% Complete</span> </div>
                        </div>

                        <p class="m-t-30 f-w-600">iBooks<span class="pull-right">90%</span></p>
                        <div class="progress">
                            <div role="progressbar" style="width: 90%; height:8px;" class="progress-bar bg-info wow animated progress-animated"> <span class="sr-only">60% Complete</span> </div>
                        </div>

                        <p class="m-t-30 f-w-600">iPhone<span class="pull-right">65%</span></p>
                        <div class="progress">
                            <div role="progressbar" style="width: 65%; height:8px;" class="progress-bar bg-success wow animated progress-animated"> <span class="sr-only">60% Complete</span> </div>
                        </div>

                        <p class="m-t-30 f-w-600">Samsung<span class="pull-right">65%</span></p>
                        <div class="progress">
                            <div role="progressbar" style="width: 65%; height:8px;" class="progress-bar bg-warning wow animated progress-animated"> <span class="sr-only">60% Complete</span> </div>
                        </div>

                        <p class="m-t-30 f-w-600">android<span class="pull-right">65%</span></p>
                        <div class="progress m-b-30">
                            <div role="progressbar" style="width: 65%; height:8px;" class="progress-bar bg-success wow animated progress-animated"> <span class="sr-only">60% Complete</span> </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- column -->
        </div>

</template>
<script>
import ExtraArea from '../components/charts/ExtraArea.vue';
export default {
    components: {
        ExtraArea
    }
}
</script>
<style>

</style>