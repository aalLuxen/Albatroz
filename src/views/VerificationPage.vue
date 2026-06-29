<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="wrapper">
        <div class="card">

          <div class="header">
            <h1>Verificación de código</h1>
            <p><strong>Ingresa el código de verificación que enviamos a tu correo.</strong></p>
          </div>

          <div class="code-inputs">
            <input
              v-for="(digit, index) in code"
              :key="index"
              type="text"
              maxlength="1"
              class="code-box"
              v-model="code[index]"
              @input="onInput(index)"
              :ref="el => inputs[index] = el"
            />
          </div>

          <button class="btn-primary">Enviar</button>

          <p class="reenviar">
            <span v-if="timer > 0">Reenviar código en <span class="blue">{{ formattedTimer }}</span></span>
            <span v-else>No recibiste el código? <span class="blue" @click="resetTimer">Re-enviar</span></span>
          </p>

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup la