<template>
    <div class="sidebar">
        <ul>
            <li>
                <router-link :to="{name: 'Home'}"> 
                    <img src="static/images/logo.svg" width="60px" height="60px"/>
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'GettingStarted'}">  
                    Getting Started
                </router-link>
            </li>
            <li>
                <a @click="foundationSelected= !foundationSelected"> 
                    Foundations
                </a>
                <ul v-if="foundationSelected">
                    <li>
                        <router-link :to="{name: 'Colors'}"> 
                            Colors
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Iconography'}"> 
                            Iconography
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Layout'}"> 
                            Layout
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Layering'}"> 
                            Layering
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Spacing'}"> 
                            Spacing
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Typography'}"> 
                            Typography
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <a @click="componentsSelected= !componentsSelected"> 
                    Components
                </a>
                <ul v-if="componentsSelected">
                    <li>
                        <router-link :to="{name: 'Avatars'}"> 
                            Avatars
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Buttons'}"> 
                            Buttons
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'DataVis'}"> 
                            Data Visualisations
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'ProgressBars'}"> 
                            Progress Bars
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Spinners'}"> 
                            Spinners
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Tables'}"> 
                            Tables
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'Tags'}"> 
                            Tags
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{name: 'ToolTips'}"> 
                            Tooltips
                        </router-link>
                    </li>
                </ul>
            </li>
            <li>
                <router-link :to="{name: 'Accessibility'}"> 
                    Accessibility
                </router-link>
            </li>
            <li>
                <router-link :to="{name: 'Resources'}"> 
                    Resources
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
            componentsSelected: false,
            foundationSelected: false
        }
    }
}
</script>
<style lang="scss" scoped>
.sidebar {
    background: #ffffff;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    min-width: 14rem;
    width: 17%;
    display: inline-block;
    >ul {
    margin: 0;
    padding: 12px 28px;
     li {
        font-size: 1rem;
        font-weight: 500;
        margin-top: 20px;
        list-style: none;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none;
        user-select: none; 
        color: #333333;
        ul {
            padding: 0px 20px;
            overflow-y: scroll;
        }
         a {
            cursor: pointer;
            color: #333333;
         }
     }
 }
}
</style>
