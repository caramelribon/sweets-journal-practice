<template>
  <header class="w-full fixed">
    <nav>
      <div class="flex justify-end items-center
                  px-3 py-3"
      >
        <div class="relative">
          <!-- User Button (ユーザボタン) -->
          <button>
            <i class="far fa-user fa-2x
                      user-btn-color"
            ></i>
          </button>
          <!-- User Information (ユーザ情報) -->
          <span class="user-information
                       absolute
                       z-2
                       right-12
                       w-40 h-52
                       bg-light-gray"
          >
            <!-- Guest User (ゲストユーザの印) -->
            <div class="text-center mt-3 mx-3 border-b">
              <i class="user-icon fas fa-user-circle fa-4x pt-2"></i>
              <p class="text-center py-1 text-2xl user-name">Guest</p>
            </div>
            <!-- Button Area (ボタンエリア) -->
            <div class="button mt-2 mx-3">
              <div class="flex justify-center items-center">
                <!-- Login Button (ログインボタン) -->
                <div class="login">
                  <button class="inline-block
                                 leading-none
                                 border border-white rounded
                                 px-2 py-2
                                 text-xs text-beige
                                 lora-bold
                                 hover:border-transparent
                                 hover:text-navy-blue
                                 hover:bg-white"
                          type="button"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
            <!-- Message to Guest User (ゲストユーザへのメッセージ) -->
            <div class="my-1 mx-2">
              <p class="text-beige text-xs kaisei-medium">
                Please try to register as a member (free of charge).
              </p>
            </div>
          </span>
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
  nav{
    .user-btn-color {
      color: $gray_normal;
    }
    .user-information::after {
      position: absolute;
      right: -12px;
      top: 10px;
      border-left: 12px solid $gray_normal;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      content: "";
    }
  }
}
</style>
