<template>
  <header class="z-1">
    <nav>
      <div class="flex justify-end items-center w-full px-3 py-3">
        <div class="relative">
          <!-- User Button (ユーザボタン) -->
          <button><i class="far fa-user fa-2x user-btn-color"></i></button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  .user-btn-color {
    color: $gray_normal;
  }
}
</style>
