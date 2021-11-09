<template>
      
</template>

<script>
export default {
    props:['snackbar'],
    methods:{
        closeSnackbar(){
            this.snackbar=false
            this.$emit("closeSnackbar")
        }
    }
}
</script>

<style>

</style>