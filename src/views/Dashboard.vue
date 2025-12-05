<!-- views/Dashboard.vue -->
<template>
  <div class="q-pa-md">
    <div class="row items-center q-mb-lg">
      <div class="col">
        <h4 class="text-h4 q-mb-none">Dashboard</h4>
        <p class="text-grey-6 q-mb-none">Umumiy ma'lumotlar va statistika</p>
      </div>
      <div class="col-auto">
        <q-btn color="primary" icon="refresh" label="Yangilash" outline />
      </div>
    </div>
    
    <!-- Statistika kartochkalari -->
    <div class="row q-col-gutter-md q-mb-md">
      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="stat-card bg-blue-6 text-white">
          <q-card-section>
            <div class="row items-center">
              <div class="col">
                <div class="text-subtitle2 text-blue-2">O'quvchilar</div>
                <div class="text-h3 text-weight-bold">250</div>
                <div class="text-caption text-blue-2">
                  <q-icon name="trending_up" size="xs" /> +12% bu oyda
                </div>
              </div>
              <div class="col-auto">
                <q-icon name="school" size="56px" class="text-blue-2" style="opacity: 0.3" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="stat-card bg-green-6 text-white">
          <q-card-section>
            <div class="row items-center">
              <div class="col">
                <div class="text-subtitle2 text-green-2">O'qituvchilar</div>
                <div class="text-h3 text-weight-bold">45</div>
                <div class="text-caption text-green-2">
                  <q-icon name="trending_up" size="xs" /> +3 yangi
                </div>
              </div>
              <div class="col-auto">
                <q-icon name="person" size="56px" class="text-green-2" style="opacity: 0.3" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="stat-card bg-orange-6 text-white">
          <q-card-section>
            <div class="row items-center">
              <div class="col">
                <div class="text-subtitle2 text-orange-2">Kurslar</div>
                <div class="text-h3 text-weight-bold">18</div>
                <div class="text-caption text-orange-2">
                  <q-icon name="trending_up" size="xs" /> 5 faol kurs
                </div>
              </div>
              <div class="col-auto">
                <q-icon name="book" size="56px" class="text-orange-2" style="opacity: 0.3" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-3">
        <q-card class="stat-card bg-purple-6 text-white">
          <q-card-section>
            <div class="row items-center">
              <div class="col">
                <div class="text-subtitle2 text-purple-2">To'lovlar</div>
                <div class="text-h3 text-weight-bold">$12.5k</div>
                <div class="text-caption text-purple-2">
                  <q-icon name="trending_down" size="xs" /> -5% bu oyda
                </div>
              </div>
              <div class="col-auto">
                <q-icon name="payments" size="56px" class="text-purple-2" style="opacity: 0.3" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Diagramma va faoliyatlar -->
    <div class="row q-col-gutter-md">
      <!-- Oylik statistika -->
      <div class="col-12 col-md-8">
        <q-card>
          <q-card-section>
            <div class="text-h6">Oylik statistika</div>
            <div class="text-caption text-grey-6">O'quvchilar soni bo'yicha</div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pt-none">
            <div class="chart-container" style="height: 300px;">
              <canvas ref="chartCanvas"></canvas>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- So'nggi faoliyatlar -->
      <div class="col-12 col-md-4">
        <q-card>
          <q-card-section>
            <div class="text-h6">So'nggi faoliyatlar</div>
          </q-card-section>
          <q-separator />
          <q-card-section class="q-pa-none">
            <q-list separator>
              <q-item v-for="activity in activities" :key="activity.id">
                <q-item-section avatar>
                  <q-avatar :color="activity.color" text-color="white" :icon="activity.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ activity.title }}</q-item-label>
                  <q-item-label caption>{{ activity.time }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
          <q-separator />
          <q-card-actions align="center">
            <q-btn flat color="primary" label="Barchasini ko'rish" />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!-- Kurslar va to'lovlar -->
    <div class="row q-col-gutter-md q-mt-md">
      <!-- Top kurslar -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Eng ko'p talabdagi kurslar</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-list>
              <q-item v-for="course in topCourses" :key="course.id">
                <q-item-section>
                  <q-item-label>{{ course.name }}</q-item-label>
                  <q-item-label caption>{{ course.students }} o'quvchi</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-linear-progress
                    :value="course.progress"
                    color="primary"
                    class="q-mt-sm"
                    style="width: 100px"
                  />
                </q-item-section>
                <q-item-section side>
                  <q-badge :color="course.color">{{ Math.round(course.progress * 100) }}%</q-badge>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <!-- To'lov holati -->
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">To'lov holati</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="row q-col-gutter-sm">
              <div class="col-6">
                <q-card flat bordered class="bg-green-1">
                  <q-card-section class="text-center">
                    <div class="text-h5 text-green-8 text-weight-bold">$8,500</div>
                    <div class="text-caption text-grey-7">To'langan</div>
                  </q-card-section>
                </q-card>
              </div>
              <div class="col-6">
                <q-card flat bordered class="bg-red-1">
                  <q-card-section class="text-center">
                    <div class="text-h5 text-red-8 text-weight-bold">$4,000</div>
                    <div class="text-caption text-grey-7">Qarz</div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
            
            <q-separator class="q-my-md" />
            
            <div class="text-subtitle2 q-mb-sm">Oxirgi to'lovlar</div>
            <q-list dense>
              <q-item v-for="payment in recentPayments" :key="payment.id">
                <q-item-section>
                  <q-item-label>{{ payment.student }}</q-item-label>
                  <q-item-label caption>{{ payment.date }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-badge :color="payment.status === 'success' ? 'green' : 'orange'">
                    {{ payment.amount }}
                  </q-badge>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const chartCanvas = ref(null)

const activities = ref([
  { id: 1, title: 'Yangi o\'quvchi qo\'shildi', time: '2 soat oldin', icon: 'person_add', color: 'blue' },
  { id: 2, title: 'To\'lov qabul qilindi', time: '5 soat oldin', icon: 'payment', color: 'green' },
  { id: 3, title: 'Yangi kurs yaratildi', time: '1 kun oldin', icon: 'add_circle', color: 'orange' },
  { id: 4, title: 'O\'qituvchi qo\'shildi', time: '2 kun oldin', icon: 'person', color: 'purple' },
  { id: 5, title: 'To\'lov kutilmoqda', time: '3 kun oldin', icon: 'schedule', color: 'red' }
])

const topCourses = ref([
  { id: 1, name: 'Frontend Development', students: 85, progress: 0.85, color: 'blue' },
  { id: 2, name: 'Backend Development', students: 72, progress: 0.72, color: 'green' },
  { id: 3, name: 'Mobile Development', students: 58, progress: 0.58, color: 'orange' },
  { id: 4, name: 'UI/UX Design', students: 45, progress: 0.45, color: 'purple' }
])

const recentPayments = ref([
  { id: 1, student: 'Ali Valiyev', date: 'Bugun', amount: '$500', status: 'success' },
  { id: 2, student: 'Aziza Karimova', date: 'Kecha', amount: '$450', status: 'success' },
  { id: 3, student: 'Bobur Toshmatov', date: '2 kun oldin', amount: '$300', status: 'pending' }
])

onMounted(() => {
  // Bu yerda Chart.js yoki boshqa kutubxona ishlatishingiz mumkin
  // Hozircha placeholder
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext('2d')
    ctx.fillStyle = '#f0f0f0'
    ctx.fillRect(0, 0, chartCanvas.value.width, chartCanvas.value.height)
    ctx.fillStyle = '#666'
    ctx.font = '16px Arial'
    ctx.textAlign = 'center'
    ctx.fillText('Chart.js yoki Recharts kutubxonasini qo\'shing', chartCanvas.value.width / 2, chartCanvas.value.height / 2)
  }
})
</script>

<style scoped>
.stat-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.chart-container {
  position: relative;
}

canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>