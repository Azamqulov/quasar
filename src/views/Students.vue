<!-- views/Students.vue -->
<template>
  <div class="q-pa-md">
    <div class="row justify-between items-center q-mb-md">
      <h4 class="text-h4">O'quvchilar</h4>
      <q-btn color="primary" icon="add" label="Yangi o'quvchi" />
    </div>

    <!-- Qidiruv va filter -->
    <q-card class="q-mb-md">
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-6">
            <q-input
              v-model="search"
              outlined
              placeholder="Qidirish..."
              dense
            >
              <template v-slot:prepend>
                <q-icon name="search" />
              </template>
            </q-input>
          </div>
          <div class="col-12 col-md-3">
            <q-select
              v-model="filterCourse"
              outlined
              label="Kurs"
              :options="['Hammasi', 'Frontend', 'Backend', 'Mobile']"
              dense
            />
          </div>
          <div class="col-12 col-md-3">
            <q-select
              v-model="filterStatus"
              outlined
              label="Status"
              :options="['Hammasi', 'Faol', 'Nofaol']"
              dense
            />
          </div>
        </div>
      </q-card-section>
    </q-card>

    <!-- Jadval -->
    <q-table
      :rows="students"
      :columns="columns"
      row-key="id"
      :pagination="pagination"
      flat
      bordered
    >
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-badge
            :color="props.row.status === 'Faol' ? 'green' : 'grey'"
            :label="props.row.status"
          />
        </q-td>
      </template>

      <template v-slot:body-cell-actions="props">
        <q-td :props="props">
          <q-btn flat round dense icon="edit" color="blue" size="sm" />
          <q-btn flat round dense icon="delete" color="red" size="sm" />
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
const filterCourse = ref('Hammasi')
const filterStatus = ref('Hammasi')

const pagination = ref({
  rowsPerPage: 10
})

const columns = [
  { name: 'id', label: 'ID', field: 'id', align: 'left' },
  { name: 'name', label: 'Ism', field: 'name', align: 'left' },
  { name: 'phone', label: 'Telefon', field: 'phone', align: 'left' },
  { name: 'course', label: 'Kurs', field: 'course', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'center' },
  { name: 'actions', label: 'Amallar', field: 'actions', align: 'center' }
]

const students = ref([
  { id: 1, name: 'Ali Valiyev', phone: '+998 90 123 45 67', course: 'Frontend', status: 'Faol' },
  { id: 2, name: 'Aziza Karimova', phone: '+998 91 234 56 78', course: 'Backend', status: 'Faol' },
  { id: 3, name: 'Bobur Toshmatov', phone: '+998 93 345 67 89', course: 'Mobile', status: 'Nofaol' },
  { id: 4, name: 'Dilnoza Rahimova', phone: '+998 94 456 78 90', course: 'Frontend', status: 'Faol' },
  { id: 5, name: 'Eldor Mamadov', phone: '+998 95 567 89 01', course: 'Backend', status: 'Faol' }
])
</script>