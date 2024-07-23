import { createWebHistory, createRouter } from "vue-router";
import CalculodeCalificaciones from "@/views/CalculodeCalificaciones.vue";
import FormulariodeRegistro from "@/views/FormulariodeRegistro.vue";


const routes = [
  {
    path: "/",
    name: "CalculodeCalificaciones",
    component: CalculodeCalificaciones,
  },
  {
    path: "/formularioderegistro",
    name: "FormulariodeRegistro",
    component: FormulariodeRegistro,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
