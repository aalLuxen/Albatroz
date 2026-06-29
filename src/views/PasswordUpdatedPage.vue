<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="wrapper">
        <div class="card">

          <div class="header">
            <h1>¡Contraseña actualizada!</h1>
            <p>Tu contraseña se ha actualizado correctamente. Ya puedes iniciar sesión nuevamente.</p>
          </div>

          <button class="btn-primary" @click="router.push('/login')">Iniciar sesión</button>

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #e8eaf0;
}

.card {
  background: white;
  border-radius: 24px;
  padding: 32px 24px;
  width: 85%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.header h1 {
  color: #29b6f6;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 8px 0;
}

.header p {
  text-align: center;
  font-size: 15px;
  margin: 0;
  color: #333;
}

.btn-primary {
  background: #29b6f6;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
}
</style>