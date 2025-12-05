<template>
  <q-drawer
    v-model="drawerOpen"
    show-if-above
    :width="250"
    :breakpoint="500"
    bordered
    class="bg-gradient-to-b from-slate-900 to-slate-800"
  >
    <q-scroll-area class="fit">
      <q-list class="q-pt-xl">
        <q-item
          v-for="item in menuItems"
          :key="item.name"
          clickable
          v-ripple
          :active="activeItem === item.name"
          @click="setActive(item.name)"
          :to="item.link"
          class="text-white q-my-sm q-mx-md rounded-borders capitalize"
          active-class="bg-blue-600"
        >
          <q-item-section avatar>
            <q-icon :name="item.icon" color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-white">{{ item.name }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawerOpen = ref(true)
const activeItem = ref('dashboard')

const menuItems = [
  { name: 'dashboard', icon: 'dashboard', link: '/dashboard' },
  { name: "o'quvchilar", icon: 'school', link: '/students' },
  { name: "o'qituvchilar", icon: 'person', link: '/teachers' },
  { name: "to'lovlar", icon: 'payments', link: '/payments' },
  { name: 'kurslar', icon: 'book', link: '/courses' },
  { name: 'settings', icon: 'settings', link: '/settings' },
]

const setActive = (itemName) => {
  activeItem.value = itemName
}

defineExpose({
  drawerOpen,
})
</script>

<style scoped>
.q-item {
  transition: all 0.3s ease;
}

.q-item:hover {
  background-color: rgba(37, 99, 235, 0.5);
}
</style>