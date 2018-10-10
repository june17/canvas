<template>
<transition name="fade">
    <div class="container">
        <transition name="fade">
            <TheToast v-if="showPage"/>
        </transition>
        <h2 class="pageTitle">Buttons</h2>
        
        <section>
            <h3>Primary Button</h3>
            <button class="btn btn-primary">Button</button>
            <CodeSnippet @copied="showMessage" codeValue='<button class="btn btn-primary">Button</button>'/>
        </section>
        <section>
            <h3>Disabled Button</h3>
            <button class="btn btn-primary" disabled="disabled">Button</button>
            <CodeSnippet @copied="showMessage" codeValue='<button class="btn btn-primary" disabled="disabled">Button</button>'/>
        </section>
        <section>
            <h3>Default Button</h3>
            <button class="btn btn-default">Button</button>
            <CodeSnippet @copied="showMessage" codeValue='<button class="btn btn-default">Button</button>'/>
        </section>
        <section>
            <h3>Anchor Link</h3>
            <a class="link">Anchor</a>
            <CodeSnippet @copied="showMessage" codeValue='<a class="link">Button</a>'/>
        </section>
        <section>
            <h3>Subtle Button</h3>
            <button class="btn btn-subtle">Button</button>
            <CodeSnippet @copied="showMessage" codeValue='<button class="btn btn-subtle">Button</button>'/>
        </section>
        <section>
            <h3>Subtle Link</h3>
            <a class="link link-subtle">Button</a>
            <CodeSnippet @copied="showMessage" codeValue='<a class="link link-subtle">Button</a>'/>
        </section>
        <section>
            <h3>Split Dropdown Button</h3>
            <button class="btn btn-split">Button</button>
            <div class="dropdown">
                <button class="btn btn-split btn-split-dropdown">
                    ^
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
            </div>
            <CodeSnippet @copied="showMessage" codeValue='<div class="dropdown">
                <button class="btn btn-split btn-split-dropdown">
                    ^
                </button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div></div>'/>
        </section>
        <section>
            <h3>Destroy</h3>
            <button class="btn btn-destroy">Button</button>
            <CodeSnippet @copied="showMessage" codeValue='<button class="btn btn-destroy">Button</button>'/>
        </section>
        <section>
            <h3>Warning</h3>
            <button class="btn btn-warning">Button</button>
            <CodeSnippet @copied="showMessage" codeValue='<button class="btn btn-warning">Button</button>'/>
        </section>
        <section>
            <h3>Confirm</h3>
            <button class="btn btn-confirm">Button</button>
            <CodeSnippet @copied="showMessage" codeValue='<button class="btn btn-confirm">Button</button>'/>
        </section>
        <section>
            <h3>Sizes</h3>
        </section>
    </div>
</transition>
</template>
<script>
import CodeSnippet from '@/components/codeSnippet'
import TheToast from '@/components/TheToast'

export default { 
    data () {
        return {
            showPage: false
        }
    },
    components: {
        CodeSnippet,
        TheToast
    },
    methods: {
        showMessage() {
                this.showPage = true
                console.log('sss')
                var self = this;
                setTimeout(function(){ self.showPage=false; }, 1000)
            }

    }
}
</script>
<style lang="scss">


.btn {
    border-radius: 0.25rem;
    border: none;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

@media screen and (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover, .btn:focus {
    text-decoration: none;
    }

.btn:focus, .btn.focus {
    outline: 0;
    }

.btn.disabled, .btn:disabled {
    opacity: 0.6;
    }

.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
    }

.btn-primary {
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    background-color: #fa7a22;
    padding: .6rem 1.7rem;
    }
    .btn-primary:hover {
        background-color: #F26100;
        }
    .btn-primary.disabled, .btn-primary:disabled {
        color: #999999;
        background-color: #e0e0e0;
        cursor: not-allowed;
        }
    .btn-primary:focus {
        box-shadow: 0 0 0 0.2rem rgba(250, 122, 34, 0.25);
        }

.btn-default {
    color: #fa6a0a;
    font-size: 15px;
    font-weight: 600;
    background-color: #ffddcc;
    padding: .6rem 1.7rem;
    }
    .btn-default:hover {
        color: #F06000;
        background-color: #ffc7ab
        }
    .btn-default:focus {
        box-shadow: 0 0 0 0.2rem rgba(255, 183, 135, 0.25);
        }

.link {
    color: #FA6A0A;
    font-size: 15px;
    font-weight: 600;
    }
    .link:hover {
        color: #f06000;
        text-decoration: underline;
        cursor: pointer;
    }

.link-subtle {
    color: #8c887b;
}
    .link-subtle:hover {
        color: #8c887b;
    }

.btn-subtle {
    background-color: #f2f2f2;
    color: #8c887b;
    font-size: 15px;
    font-weight: 600;
    padding: .6rem 1.7rem;
    }
    .btn-subtle:hover {
        background-color: #F0EEE9;
        color: #8c887b;
        }
    .btn-subtle:focus {
        box-shadow: 0 0 0 0.2rem rgba(217, 209, 202, 0.15);
    }

.btn-split {
    color: #fa6a0a;
    font-size: 15px;
    font-weight: 600;
    background-color: #ffddcc;
    padding: .6rem;
    border-radius: 0.25rem 0 0 0.25rem;
    }
    .btn-split-dropdown {
        border-radius: 0 0.25rem 0.25rem 0;   
        background: #FFD3BD;
    }
    .btn-split:hover, .dropdown:hover .btn  {
        background-color: #FFC7AB;
    }

.dropdown {
     position: absolute;
    display: inline-block;
    }
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    z-index: 1;
    }
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    }
.dropdown-content a:hover {background-color: #ddd}
.dropdown:hover .dropdown-content {
    display: block;
    }

.btn-destroy {
    color: #ffffff;
    background-color: #e63737;
    font-size: 15px;
    font-weight: 600;
    padding: .6rem 1.7rem;
    }
    .btn-destroy:hover {
        background-color: #cc3131
    }
    .btn-destroy:focus{
        box-shadow: 0 0 0 0.2rem rgba(206, 17, 3, 0.25);  
    }

.btn-warning {
    color: #6B6515;
    background-color: #F7C631;
    font-size: 15px;
    font-weight: 600;
    padding: .6rem 1.7rem;
    }
    .btn-warning:hover {
        background-color: #EBBC2F;
        color: #545011;
    }
    .btn-warning:focus{
        box-shadow: 0 0 0 0.2rem rgba(247, 198, 49, 0.25);  
    }

.btn-confirm {
    color: #ffffff;
    background-color: #7CC449;
    font-size: 15px;
    font-weight: 600;
    padding: .6rem 1.7rem;
    }
    .btn-confirm:hover {
        background-color: #6CBD33
    }
    .btn-confirm:focus{
        box-shadow: 0 0 0 0.2rem rgba(124, 196, 73, 0.25);  
    }

</style>
