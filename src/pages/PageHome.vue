<template>
<transition name="fade">
    <div class="container" style="background: transparent">
        <div class="hero">
            <div class="item">
                <img src="static/images/logo-expanded.svg"/>
                <p>Style guide for designers & developers at Accion</p>
                <p style="font-size: 13px; opacity: 0.5">Last updated on Oct 8, 2018</p>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 18%;
        margin-left: -5%;
        .item {
            p {
                font-size: 1.3rem;
                color: #949494;
                margin: .5rem;
                font-weight: 500;
            }
        }
    }
</style>

