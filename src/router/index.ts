import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import RegisterPage from '../views/RegisterPage.vue';
import ForgotPasswordPage from '../views/ForgotPasswordPage.vue';
import VerificationPage from '../views/VerificationPage.vue';
import NewPasswordPage from '../views/NewPasswordPage.vue';
import PasswordUpdatedPage from '../views/PasswordUpdatedPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPasswordPage
  },
  {
    path: '/verification',
    name: 'Verification',
    component: VerificationPage
  },
  {
    path: '/new-password',
    name: 'NewPassword',
    component: NewPasswordPage
  },
  {
    path: '/password-updated',
    name: 'PasswordUpdated',
    component: PasswordUpdatedPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router