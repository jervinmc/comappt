<template>
    <v-container>
        <v-sheet height="80vh" class="d-flex justify-center align-center">
                <div align="center"  >
                    <login-form/>
                </div>
        </v-sheet>
    </v-container>
</template>

<script>
import LoginForm from '../../components/login/LoginForm.vue'
export default {
  components: { LoginForm },

}
</script>

<style>

</style>