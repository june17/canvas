<template>
    <div class="codeSnippet">
        <code class="codeValue">{{ codeValue }}</code>
        <a @click.stop.prevent="copyValue">Copy</a>
        <input type="hidden" ref="codeValue" :value="codeValue">
    </div>
</template>
<script>
export default {
    props: {
        codeValue: {
            type: String,
            required: true
        }
    },
    methods: {
        copyValue () {
            let codeToCopy = this.$refs.codeValue
            codeToCopy.setAttribute('type', 'text')    
            codeToCopy.select()
            try {
                document.execCommand('copy');
                this.$emit('copied')
                console.log('copied')
            } catch (err) {}
            codeToCopy.setAttribute('type', 'hidden')
            window.getSelection().removeAllRanges()
        },
    }
}
</script>
<style lang="scss" scoped>
.codeSnippet {
    display: flex;
    margin: 1rem 0;
    align-items: center; 
    .codeValue {
        border: none;
        background: #f4f4f4;
        width: 30rem;
        resize: none;
        cursor: default;
        font-size: .7rem;
        padding: .7rem;
        border-radius: .25rem;
        opacity: 0.8;
    }   
    a {
        cursor: pointer;
        margin-left: 1rem;
        font-weight: 600;
        color: #289AFF;
    }
}

</style>
