<template>
    <div id="app" class="container mt-5">
        <h1 class="text-center">Formulario de Registro</h1>
        <form @submit.prevent="submitForm" class="form-container">
            <div class="form-group">
                <label for="name">Nombre:</label>
                <input type="text" id="name" v-model="form.name" @input="validateName" class="form-control"/>
                <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
            </div>
            <div class="form-group">
                <label for="email">Correo:</label>
                <input type="email" id="email" v-model="form.email" @input="validateEmail" class="form-control"/>
                <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
            </div>
            <div class="form-group">
                <label for="password">Contraseña:</label>
                <input type="password" id="password" v-model="form.password" @input="validatePassword" class="form-control"/>
                <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
            </div>
            <div class="form-group">
                <label for="repeatPassword">Repetir Contraseña:</label>
                <input type="password" id="repeatPassword" v-model="form.repeatPassword" @input="validateRepeatPassword" class="form-control"/>
                <p v-if="errors.repeatPassword" class="error-message">{{ errors.repeatPassword }}</p>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: '',
                repeatPassword: ''
            },
            errors: {
                name: '',
                email: '',
                password: '',
                repeatPassword: ''
            }
        };
    },
    methods: {
        validateName() {
            if (/\d/.test(this.form.name)) {
                this.errors.name = 'El nombre no debe contener números';
            } else {
                this.errors.name = '';
            }
        },
        validateEmail() {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.form.email)) {
                this.errors.email = 'El correo es inválido';
            } else {
                this.errors.email = '';
            }
        },
        validatePassword() {
            if (!this.form.password) {
                this.errors.password = 'El campo contraseña es requerido';
            } else if (this.form.password.length < 5) {
                this.errors.password = 'La contraseña debe tener al menos 5 caracteres';
            } else {
                this.errors.password = '';
            }
        },
        validateRepeatPassword() {
            if (!this.form.repeatPassword) {
                this.errors.repeatPassword = 'El campo repetir contraseña es requerido';
            } else if (this.form.repeatPassword !== this.form.password) {
                this.errors.repeatPassword = 'Las contraseñas no coinciden';
            } else {
                this.errors.repeatPassword = '';
            }
        },
        submitForm() {
            this.validateName();
            this.validateEmail();
            this.validatePassword();
            this.validateRepeatPassword();

            if (!Object.values(this.errors).some(error => error !== '')) {
                alert('El registro se ha realizado correctamente');
                this.form.name = '';
                this.form.email = '';
                this.form.password = '';
                this.form.repeatPassword = '';
            }
        }
    }
};
</script>

<style scoped>
.container {
    width: 50%;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-group {
    margin-bottom: 20px;
    width: 100%;
}

.form-group label {
    display: block;
    text-align: center;
    margin-bottom: 5px;
}

.form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.error-message {
    color: red;
    margin-top: 5px;
    text-align: center;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: #0056b3;
}
</style>

