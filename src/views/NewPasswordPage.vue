<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="wrapper">
        <div class="card">

          <div class="header">
            <h1>Nueva contraseña</h1>
            <p>Crea tu nueva contraseña para volver a ingresar a tu cuenta.</p>
          </div>

          <div class="inputs">
            <input type="password" placeholder="Nueva contraseña" class="input-field active" />
            <input type="password" placeholder="Confirmar contraseña" class="input-field" />
          </div>

          <button class="btn-primary">Guardar contraseña</button>

          <p class="recordaste">
            Recordaste tu contraseña? <span class="blue">Inicia sesión</span>
          </p>

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

.recordaste {
  text-align: center;
  font-size: 13px;
  color: #555;
  margin: 0;
}

.blue {
  color: #29b6f6;
  cursor: pointer;
}
</style>