<!-- views/Login.vue -->
<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="auth-card q-pa-md">
          <!-- Logo -->
          <q-card-section class="text-center">
            <q-avatar size="80px" color="primary" text-color="white" icon="school" />
            <div class="text-h5 text-weight-bold q-mt-md">O'quv Markaz</div>
            <div class="text-subtitle2 text-grey-6">Tizimga kirish</div>
          </q-card-section>

          <!-- Form -->
          <q-card-section>
            <q-form @submit="onSubmit" class="q-gutter-md">
              <!-- Email -->
              <q-input
                v-model="form.email"
                type="email"
                label="Email yoki Username"
                outlined
                dense
                :rules="[(v) => !!v || 'Email majburiy']"
              >
                <template #prepend><q-icon name="person" /></template>
              </q-input>

              <!-- Password -->
              <q-input
                v-model="form.password"
                :type="isPwd ? 'password' : 'text'"
                label="Parol"
                outlined
                dense
                :rules="[(v) => !!v || 'Parol majburiy']"
              >
                <template #prepend><q-icon name="lock" /></template>
                <template #append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>

              <!-- Remember -->
              <div class="row justify-between items-center">
                <q-checkbox v-model="form.remember" label="Eslab qolish" dense />
                <q-btn flat dense color="primary" no-caps label="Parolni unutdingizmi?" />
              </div>

              <!-- Submit -->
              <div class="btn">
                <q-btn
                  type="submit"
                  color="primary"
                  label="Kirish"
                  class="full-width cursor-pointer q-mb-md"
                  size="md"
                  :loading="loading"
                />
              </div>

              <!-- Divider -->
              <div class="row items-center q-my-md">
                <q-separator class="col" />
                <div class="col-auto q-px-sm text-grey-6">yoki</div>
                <q-separator class="col" />
              </div>

              <!-- Sign Up -->
              <div class="text-center">
                <span class="text-grey-6">Akkaunt yo'qmi?</span>
                <router-link to="/signup" class="text-primary text-weight-bold">
                  Ro'yxatdan o'tish
                </router-link>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useQuasar } from 'quasar'

const router = useRouter()
const $q = useQuasar()

const isPwd = ref(true)
const loading = ref(false)

const form = ref({
  email: '',
  password: '',
  remember: false,
})

const onSubmit = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    $q.notify({
      type: 'positive',
      message: 'Tizimga muvaffaqiyatli kirdingiz!',
      position: 'top',
    })
    router.push('/dashboard')
  }, 1200)
}
</script>

<style scoped>
.auth-card {
  width: 400px;
  max-width: 90vw;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
a:hover {
  text-decoration: underline;
}
</style>
