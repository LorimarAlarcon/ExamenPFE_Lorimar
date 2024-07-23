<template>
    <div id="app" class="container mt-5">
        <div class="form-container">
            <h1 class="text-center">Cálculo de Calificaciones</h1>

            <form @submit.prevent="calcular" class="form-content">
                <div class="form-group">
                    <label for="nota1">Nota 1</label>
                    <input type="number" id="nota1" v-model.number="nota1" min="10" max="70" class="form-control" required>
                    <p v-if="errors.nota1" class="error-message">{{ errors.nota1 }}</p>
                </div>
                <div class="form-group">
                    <label for="nota2">Nota 2</label>
                    <input type="number" id="nota2" v-model.number="nota2" min="10" max="70" class="form-control" required>
                    <p v-if="errors.nota2" class="error-message">{{ errors.nota2 }}</p>
                </div>
                <div class="form-group">
                    <label for="nota3">Nota 3</label>
                    <input type="number" id="nota3" v-model.number="nota3" min="10" max="70" class="form-control" required>
                    <p v-if="errors.nota3" class="error-message">{{ errors.nota3 }}</p>
                </div>
                <div class="form-group">
                    <label for="asistencia">Asistencia</label>
                    <input type="number" id="asistencia" v-model.number="asistencia" min="0" max="100" class="form-control" required>
                    <p v-if="errors.asistencia" class="error-message">{{ errors.asistencia }}</p>
                </div>
                <button type="submit" class="btn-calculate">Calcular</button>
            </form>

            <hr />

            <div v-if="mensajeError" class="error-message">
                Por favor, ingrese valores válidos para las notas y asistencias.
            </div>

            <div v-if="resultado !== null" class="result-content">
                <h3>El promedio es: {{ resultado.promedio }}</h3>
                <p>Tu estado es: {{ resultado.mensaje }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nota1: null,
            nota2: null,
            nota3: null,
            asistencia: null,
            resultado: null,
            mensajeError: false,
            errors: {
                nota1: '',
                nota2: '',
                nota3: '',
                asistencia: ''
            }
        };
    },
    methods: {
        validarEntradas() {
            let valido = true;

            this.errors.nota1 = '';
            this.errors.nota2 = '';
            this.errors.nota3 = '';
            this.errors.asistencia = '';

            if (this.nota1 === null || this.nota1 < 10 || this.nota1 > 70) {
                this.errors.nota1 = 'La Nota 1 debe estar entre 10 y 70';
                valido = false;
            }
            if (this.nota2 === null || this.nota2 < 10 || this.nota2 > 70) {
                this.errors.nota2 = 'La Nota 2 debe estar entre 10 y 70';
                valido = false;
            }
            if (this.nota3 === null || this.nota3 < 10 || this.nota3 > 70) {
                this.errors.nota3 = 'La Nota 3 debe estar entre 10 y 70';
                valido = false;
            }
            if (this.asistencia === null || this.asistencia < 0 || this.asistencia > 100) {
                this.errors.asistencia = 'La Asistencia debe estar entre 0 y 100';
                valido = false;
            }

            return valido;
        },
        calcular() {
            this.mensajeError = false; 

            if (this.validarEntradas()) {
                const promedio = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);
                const aprobado = promedio >= 40 && this.asistencia >= 80;

                this.resultado = {
                    promedio: promedio.toFixed(2),
                    mensaje: aprobado ? 'Aprobado' : 'Reprobado'
                };
            } else {
                this.resultado = null;
                this.mensajeError = true;
            }
        }
    }
};
</script>

<style scoped>
.form-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.text-center {
    text-align: center;
}

.form-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-group {
    width: 100%;
    margin-bottom: 15px;
    text-align: center;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.btn-calculate {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    display: block;
    margin: 0 auto;
}

.result-content {
    text-align: center;
    margin-top: 20px;
}

.error-message {
    color: red;
    text-align: center;
    margin-top: 5px;
    font-size: 14px;
}
</style>
