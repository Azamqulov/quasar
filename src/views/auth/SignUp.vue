<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="auth-card q-pa-md">

          <!-- Logo -->
          <q-card-section class="text-center">
            <q-avatar size="80px" color="primary" text-color="white" icon="school" />
            <div class="text-h5 text-weight-bold q-mt-md">O'quv Markaz</div>
            <div class="text-subtitle2 text-grey-6">Yangi akkaunt yaratish</div>
          </q-card-section>

          <q-card-section>
            <q-form @submit="onSubmit" class="q-gutter-md">

              <!-- Firstname -->
              <q-input
                v-model="form.firstName"
                label="Ism"
                outlined dense
                :rules="[v => !!v || 'Ism majburiy']"
              >
                <template #prepend><q-icon name="person" /></template>
              </q-input>

              <!-- Lastname -->
              <q-input
                v-model="form.lastName"
                label="Familiya"
                outlined dense
                :rules="[v => !!v || 'Familiya majburiy']"
              >
                <template #prepend><q-icon name="person_outline" /></template>
              </q-input>

              <!-- Email -->
              <q-input
                v-model="form.email"
                type="email"
                label="Email"
                outlined dense
                :rules="emailRules"
              >
                <template #prepend><q-icon name="email" /></template>
              </q-input>

              <!-- Phone -->
              <q-input
                v-model="form.phone"
                label="Telefon"
                outlined dense
                mask="+998 ## ### ## ##"
                :rules="[v => !!v || 'Telefon majburiy']"
              >
                <template #prepend><q-icon name="phone" /></template>
              </q-input>

              <!-- Password -->
              <q-input
                v-model="form.password"
                :type="isPwd ? 'password' : 'text'"
                label="Parol"
                outlined dense
                :rules="passwordRules"
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

              <!-- Confirm Password -->
              <q-input
                v-model="form.confirmPassword"
                :type="isConfirmPwd ? 'password' : 'text'"
                label="Parolni tasdiqlash"
                outlined dense
                :rules="confirmRules"
              >
                <template #prepend><q-icon name="lock_open" /></template>
                <template #append>
                  <q-icon
                    :name="isConfirmPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isConfirmPwd = !isConfirmPwd"
                  />
                </template>
              </q-input>

              <!-- Role -->
              <q-select
                v-model="form.role"
                :options="roles"
                label="Rol"
                outlined dense
                emit-value map-options
                :rules="[v => !!v || 'Rol tanlang']"
              >
                <template #prepend><q-icon name="badge" /></template>
              </q-select>

              <!-- Terms -->
              <q-checkbox v-model="form.acceptTerms" dense>
                <span class="text-grey-7">
                  Men <a href="#" class="text-primary">shartlar</a>ni qabul qilaman
                </span>
              </q-checkbox>

              <!-- Submit -->
              <q-btn
                type="submit"
                label="Ro'yxatdan o'tish"
                color="primary"
                class="full-width"
                unelevated
                :loading="loading"
              />

              <!-- Login -->
              <div class="text-center q-mt-sm">
                <span class="text-grey-6">Akkauntingiz bormi? </span>
                <router-link to="/login" class="text-primary text-weight-bold">
                  Kirish
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

const loading = ref(false)
const isPwd = ref(true)
const isConfirmPwd = ref(true)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  role: '',
  acceptTerms: false
})

const roles = [
  { label: "O'quvchi", value: 'student' },
  { label: "O'qituvchi", value: 'teacher' },
  { label: 'Admin', value: 'admin' }
]

const emailRules = [
  v => !!v || 'Email majburiy',
  v => /.+@.+\..+/.test(v) || 'Email noto‘g‘ri'
]

const passwordRules = [
  v => !!v || 'Parol majburiy',
  v => v.length >= 6 || 'Kamida 6 ta belgi kerak'
]

const confirmRules = [
  v => !!v || 'Majburiy',
  v => v === form.value.password || 'Parollar mos emas'
]

const onSubmit = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    $q.notify({
      type: 'positive',
      message: "Ro'yxatdan muvaffaqiyatli o'tdingiz!",
      position: 'top'
    })
    router.push('/login')
  }, 1200)
}
</script>

<style scoped>
.auth-card {
  width: 450px;
  max-width: 90vw;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}
a:hover {
  text-decoration: underline;
}
</style>
