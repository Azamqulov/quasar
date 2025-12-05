<template>
  <q-layout view="hHh lpR fFf">
    <Navbar @toggle-drawer="toggleDrawer" />

    <Sidebar ref="sidebarRef" />

    <q-page-container>
      <router-view />
      <!-- <q-page class="bg-slate-100">
        <div class="q-pa-md">
          <div class="text-center q-mt-xl">
            <q-icon name="chat" size="64px" color="grey-5" />
            <div class="text-h6 text-grey-6 q-mt-md">
              Select a chat to start messaging
            </div>
          </div>
        </div>
      </q-page> -->
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

const sidebarRef = ref(null)

const toggleDrawer = () => {
  if (sidebarRef.value) {
    sidebarRef.value.drawerOpen = !sidebarRef.value.drawerOpen
  }
}
</script>

<style scoped>
.q-page {
  min-height: 100vh;
}
</style>