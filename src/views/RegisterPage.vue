<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="wrapper">
        <div class="card">

          <div class="header">
            <h1>Crear cuenta</h1>
            <p>Crea una cuenta para empezar a enviar y recibir tus paquetes.</p>
          </div>

          <div class="inputs">
            <input type="email" placeholder="Email" class="input-field active" />
            <input type="password" placeholder="Contraseña" class="input-field" />
            <input type="password" placeholder="Confirmar contraseña" class="input-field" />
          </div>

          <button class="btn-primary">Registrarme</button>

          <p class="ya-tengo">Ya tengo una cuenta</p>

          <div class="social">
            <p>O ingresa con</p>
            <div class="social-buttons">
              <button class="social-btn">G</button>
              <button class="social-btn">f</button>
              <button class="social-btn"></button>
            </div>
          </div>

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
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

.inputs {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.input-field {
  background: #f0f2f8;
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 16px;
  font-size: 15px;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  color: #333;
}

.input-field.active {
  border-color: #29b6f6;
  background: white;
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

.ya-tengo {
  text-align: center;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
}

.social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.social p {
  color: #29b6f6;
  font-size: 14px;
  margin: 0;
}

.social-buttons {
  display: flex;
  gap: 12px;
}

.social-btn {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #ddd;
  background: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}
</style>