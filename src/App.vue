<template>
    <div id="nav" class="navbar">
        <router-link 
            to="/" 
            class="nav-link" 
            :class="{ active: $route.path === '/' }">
            Cálculo de Calificaciones
        </router-link>
        <router-link 
            to="/FormulariodeRegistro" 
            class="nav-link" 
            :class="{ active: $route.path === '/FormulariodeRegistro' }">
            Formulario de Registro
        </router-link>
        <input 
            type="text" 
            placeholder="Buscar..." 
            class="search-bar"
        />
    </div>
    <router-view />
</template>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f0f0f0;
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;
}

.nav-link {
    color: #000;
    text-decoration: none;
    margin-right: 20px;
    font-weight: bold;
}

.nav-link.active {
    color: #333;
    border-bottom: 2px solid #333;
}

.search-bar {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
    font-size: 14px;
}

.navbar .nav-link:last-child {
    margin-right: 0;
}
</style>
