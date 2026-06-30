<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="wrapper">
        <div class="card">

          <div class="image-container">
            <img class="linea" src="/linea.svg" />
            <img class="ave" src="/Alba.svg" />
            <img class="ojo" src="/ojo.svg" />
            <img class="caja" src="/caja.svg" />
          </div>

          <div class="texto">
            <h1>Olvídate de las complicaciones</h1>
            <p>La forma más rápida y sencilla de enviar, recibir y gestionar tus entregas a nivel nacional</p>
          </div>

          <div class="botones">
            <button class="btn-primary" @click="router.push('/login')">Iniciar sesión</button>
            <button class="btn-secondary" @click="router.push('/register')">Registrarse</button>
          </div>

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
  gap: 24px;
}

.image-placeholder {
  background: #f0f2f8;
  border-radius: 16px;
  height: 240px;
}

.texto h1 {
  color: #29b6f6;
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  margin: 0 0 12px 0;
}

.texto p {
  color: #555;
  font-size: 14px;
  text-align: center;
  margin: 0;
  line-height: 1.5;
}

.botones {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-primary {
  background: #29b6f6;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
}

.btn-secondary {
  background: transparent;
  border: none;
  font-size: 15px;
  font-weight: 700;
  color: #111;
  cursor: pointer;
}

.image-container {
  position: relative;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 428 / 360;
  margin: 0 auto;
}

.ave {
  position: absolute;
  width: 56.4%;
  top: 5.2%;
  left: 0%;
}

.linea {
  position: absolute;
  width: 87.3%;
  top: 96.2%;
  left: 0%;
}

.caja {
  position: absolute;
  width: 30.2%;
  top: 61.1%;
  left: 56.7%;
}

.ojo {
  position: absolute;
  width: 2.3%;
  top: 8.3%;
  left: 39.5%;
}
</style>