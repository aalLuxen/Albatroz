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

          <button class="btn-primary" @click="router.push('/new-password')">Enviar</button>

          <p class="reenviar">
            <span v-if="timer > 0">Reenviar código en <span class="blue">{{ formattedTimer }}</span></span>
            <span v-else>No recibiste el código? <span class="blue" @click="resetTimer">Re-enviar</span></span>
          </p>

        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { ref, computed, onMounted, onUnmounted } from 'vue';

const router = useRouter();

const code = ref(['', '', '', '', '', '']);
const inputs = ref<any[]>([]);
const timer = ref(59);
let interval: any;

const formattedTimer = computed(() => {
  return `00:${timer.value.toString().padStart(2, '0')}`;
});

const onInput = (index: number) => {
  if (code.value[index] && index < 5) {
    inputs.value[index + 1]?.focus();
  }
};

const resetTimer = () => {
  timer.value = 59;
  startTimer();
};

const startTimer = () => {
  clearInterval(interval);
  interval = setInterval(() => {
    if (timer.value > 0) timer.value--;
    else clearInterval(interval);
  }, 1000);
};

onMounted(() => startTimer());
onUnmounted(() => clearInterval(interval));
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

.code-inputs {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.code-box {
  width: 44px;
  height: 52px;
  border: 2px solid #ddd;
  border-radius: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  outline: none;
  color: #333;
}

.code-box:focus {
  border-color: #29b6f6;
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

.reenviar {
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