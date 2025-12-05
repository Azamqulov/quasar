<!-- components/Navbar.vue -->
<template>
  <q-header elevated class="bg-slate-900">
    <q-toolbar class="q-px-md">
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleDrawer"
        color="white"
      />

      <q-toolbar-title class="text-white text-weight-bold">
        O'quv Markaz
      </q-toolbar-title>

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap">
        <!-- Bildirishnomalar -->
        <q-btn flat round dense icon="notifications" color="white">
          <q-badge color="red" floating>3</q-badge>
          <q-tooltip>Bildirishnomalar</q-tooltip>
        </q-btn>
        
        <!-- Qidiruv -->
        <q-btn flat round dense icon="search" color="white">
          <q-tooltip>Qidiruv</q-tooltip>
        </q-btn>
        
        <!-- Til -->
        <q-btn flat round dense icon="language" color="white">
          <q-tooltip>Til</q-tooltip>
        </q-btn>
        
        <q-separator dark vertical inset class="q-mx-sm" />
        
        <!-- Profil -->
        <q-btn-dropdown flat round dense color="white">
          <template v-slot:label>
            <q-avatar size="36px">
              <img src="https://cdn.quasar.dev/img/avatar.png" alt="User" />
            </q-avatar>
          </template>
          <q-list>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-icon name="person" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Profil</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Sozlamalar</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section avatar>
                <q-icon name="logout" color="red" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-red">Chiqish</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
const emit = defineEmits(['toggle-drawer'])

const toggleDrawer = () => {
  emit('toggle-drawer')
}
</script>

<style scoped>
.q-toolbar {
  min-height: 64px;
}
</style>