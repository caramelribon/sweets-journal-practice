<template>
    <div class="bg-beige">
      <!-- title -->
      <div
        class="h-auto
               w-full
               navy-pink-bg
               title"
      >
        <div
          class="flex
                 justify-center
                 items-center
                 pt-20"
        >
          <p class="sweets">SWEETS</p>
        </div>
        <div
          class="flex
                 justify-center
                 items-center
                 pb-20"
        >
          <p class="journal">Journal</p>
        </div>
        <div
          class="scrolldown
                 lora"
        >
          <span>Scroll</span>
        </div>
      </div>
      <div class="contents">
        <!-- About -->
        <div class="beige-bg">
          <p
            class="text-center
                   p-10
                  small-title-beige"
          >
            About
          </p>
          <div class="h-auto">
            <div
              class="bg-none
                     animate__animated"
            >
              <p
                class="mt-3
                       mb-8
                       mx-10
                       text-nvy-brown
                       text-2xl
                       sm:text-3xl
                       md:text-3xl
                       lg:text-4xl
                       xl:text-4xl
                       2xl:text-4xl
                       lora-bold
                       text-center"
              >
                Welcome to the Sweets Journal
              </p>
              <div
                class="mx-10
                       sm:mx-20
                       md:mx-32
                       lg:mx-52
                       xl:mx-52
                       2xl:mx-52
                       pb-20"
              >
                <p
                  class="text-nvy-brown
                         sm:text-base
                         md:text-2xl
                         lg:text-2xl
                         xl:text-2xl
                         2xl:text-2xl
                         kaisei-medium
                         mb-10"
                >
                  Sweets Journalでは、旅先で現在地周辺のカフェやレストランを見つけることができます。<br>
                  また、会員登録をすると、<br>
                  ・気に入ったお店や気になるお店を保存できる<br>
                  ・全会員の保存したお店をリアルタイムでみることができる<br>
                  ・お店のランキングをみることができる<br>
                  といった機能がつきます!!<br>
                  会員登録することで、他の会員がどんなお店に注目しているのかもわかりますよ♪<br>
                  ぜひ、皆さんの旅先でお店を探したり、素敵なお店を保存したりしてみてください<br>
                  会員登録は、右上の<i class="far fa-user user-button-color"></i>からできます
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Search -->
        <div
          class="navy-pink-bg
                 h-auto"
        >
          <p
            class="small-title-navy-pink
                   text-center
                   p-10"
          >
            Search
          </p>
          <div
            class="h-auto
                   animate__animated"
          >
            <p
              class="text-beige
                     text-center
                     my-5
                     mx-10
                     kaisei-medium
                     sm:text-base
                     md:text-2xl
                     lg:text-2xl
                     xl:text-2xl
                     2xl:text-2xl"
            >
              旅先で、現在地周辺のお店を探してみてください
            </p>
            <div
              class="bg-none
                     pt-10
                     pb-24"
            >
              <!-- search area (検索エリア) -->
              <div class="search-area">
                <div class="search-form">
                  <form class="pt-16">
                    <div
                      class="flex
                             justify-center
                             items-center"
                    >
                      <div
                        class="flex
                               justify-center
                               items-center"
                      >
                        <div class="relative
                                    select
                                    sm:w-40
                                    md:w-56
                                    lg:w-72
                                    xl:w-72
                                    2xl:w-72
                                    w-24"
                        >
                          <select
                            class="sel-form
                                   select-text
                                   block appearance-none
                                   sm:w-40
                                   md:w-56
                                   lg:w-72
                                   xl:w-72
                                   2xl:w-72
                                   w-24
                                   leading-tight
                                   px-5 py-3
                                   focus:outline-none"
                          >
                            <option
                              value=""
                              class="kaisei-medium
                                     lora"
                            >
                              すべて
                            </option>
                            <option
                              value="G005"
                              class="kaisei-medium
                                     lora"
                            >
                              洋食
                            </option>
                            <option
                              value="G004"
                              class="kaisei-medium
                                     lora"
                            >
                              和食
                            </option>
                            <option
                              value="G007"
                              class="kaisei-medium
                                     lora"
                            >
                              中華
                            </option>
                            <option
                              value="G006"
                              class="kaisei-medium
                                     lora"
                            >
                              Italian&French
                            </option>
                            <option
                              value="G017"
                              class="kaisei-medium
                                     lora"
                            >
                              韓国料理
                            </option>
                            <option
                              value="G009"
                              class="kaisei-medium
                                     lora"
                            >
                              Asian&Ethnic
                            </option>
                            <option
                              value="G010"
                              class="kaisei-medium
                                     lora"
                            >
                              各国料理
                            </option>
                            <option
                              value="G003"
                              class="kaisei-medium
                                     lora"
                            >
                              創作料理
                            </option>
                            <option
                              value="G001"
                              class="kaisei-medium
                                     lora"
                            >
                              居酒屋
                            </option>
                            <option
                              value="G002"
                              class="kaisei-medium
                                     lora"
                            >
                              Bar
                            </option>
                            <option
                              value="G016"
                              class="kaisei-medium
                                     lora"
                            >
                              お好み焼き
                            </option>
                            <option
                              value="G013"
                              class="kaisei-medium
                                     lora"
                            >
                              ラーメン
                            </option>
                            <option
                              value="G014"
                              class="kaisei-medium
                                     lora"
                            >
                              カフェ
                            </option>
                            <option
                              value="G015"
                              class="kaisei-medium
                                     lora"
                            >
                              その他
                            </option>
                          </select>
                          <span class="select-highlight"></span>
                          <span
                            class="select-bar
                                   sm:w-40
                                   md:w-56
                                   lg:w-72
                                   xl:w-72
                                   2xl:w-72
                                   w-24"></span>
                          <label class="select-label">Genre</label>
                        </div>
                      </div>
                      <div
                        class="area
                               flex
                               justify-center
                               items-center
                               px-10"
                      >
                        <div
                          class="relative
                                 select
                                 sm:w-40
                                 md:w-56
                                 lg:w-72
                                 xl:w-72
                                 2xl:w-72
                                 w-24"
                        >
                          <select
                            class="select-text
                                   block appearance-none
                                   sm:w-40
                                   md:w-56
                                   lg:w-72
                                   xl:w-72
                                   2xl:w-72
                                   w-24
                                   leading-tight
                                   px-4 py-3
                                   rounded-l
                                   focus:outline-none">
                            <option
                              value=""
                              hidden disabled selected
                              class="kaisei-medium
                                     lora"
                            >
                            </option>
                            <option
                              value="2"
                              class="kaisei-medium
                                     lora"
                            >
                              半径 500 m以内
                            </option>
                            <option
                              value="3"
                              class="kaisei-medium
                                     lora"
                            >
                              半径 1 km以内
                            </option>
                            <option
                              value="5"
                              class="kaisei-medium
                                     lora"
                            >
                              半径 3 km以内
                            </option>
                          </select>
                          <span class="select-highlight"></span>
                          <span class="select-bar
                                       sm:w-40
                                       md:w-56
                                       lg:w-72
                                       xl:w-72
                                       2xl:w-72
                                       w-24"></span>
                          <label class="select-label">Area</label>
                        </div>
                      </div>
                      <div
                        class="flex
                               justify-center
                               items-center"
                      >
                        <button
                          type="submit"
                          class="search-button
                                 rounded
                                 bg-none
                                 text-white
                                 text-center
                                 uppercase"
                        >
                          〇
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- fetching status -->
          <span>
            <div
              class="py-12
                     text-center"
            >
              <span
                class="material-icons
                       md-48"
              >
              </span>
            </div>
          </span>
          <!-- failed status -->
          <span>
            <p
              class="text-beige
                     text-center
                     py-12
                     kaisei-medium
                     sm:text-base
                     md:text-2xl
                     lg:text-2xl
                     xl:text-2xl
                     2xl:text-2xl"
            >
              データの取得に失敗しました<br>
              categoryとareaの両方を選択しているか確認してください
            </p>
          </span>
        </div>
        <!-- Place Search Results (検索結果)-->
        <div
          class="navy-pink-bg
                 h-auto"
        >
          <p
            class="place-title
                   text-center
                   p-10"
          >
            Places
          </p>
          <p
            class="animate__animated
                   invisible
                   text-beige
                   text-center
                   my-5
                   mx-10
                   kaisei-medium
                   text-sm
                   sm:text-base
                   md:text-2xl
                   lg:text-2xl
                   xl:text-2xl
                   2xl:text-2xl"
          >
            現在地からにあるのお店一覧です
          </p>
          <p
            class="animate__animated
                   invisible
                   text-beige
                   text-center
                   my-5
                   kaisei-medium
                   sm:text-base
                   md:text-2xl
                   lg:text-2xl
                   xl:text-2xl
                   2xl:text-2xl"
          >
            現在地からにのお店はありませんでした
          </p>
          <div
            class="animate__animated
                   invisible"
          >
            <div
              id="shop"
              class="flex
                     justify-center
                     items-start
                     flex-row
                     flex-wrap
                     px-5
                     navy-pink-bg
                     h-auto">
              <div>
                <!-- shop layout -->
                <div class="m-4">
                  <!-- shop image -->
                  <div
                    class="place-image
                           text-center
                           mx-3"
                  >
                    <img
                      width="300"
                      height="300"
                      class="place-photo"
                    >
                  </div>
                  <!-- shop description and button(favorite and mark) -->
                  <div class="place-description">
                    <!-- shop name -->
                    <div
                      class="place-name
                             m-3
                             text-center"
                    >
                      <p
                        class="text-beige
                               text-center
                               kaisei-medium
                               my-5"
                      >
                      </p>
                      <p
                        class="text-beige
                               text-center
                               kaisei-medium
                               text-xs
                               my-4"
                      >
                      </p>
                    </div>
                    <!-- button-area-gap -->
                    <div class="button-area-gap"></div>
                    <!-- button (favorite and mark) -->
                    <div
                      class="button-area
                             grid
                             grid-cols-6"
                    >
                      <div class="col-span-4"></div>
                      <!-- favorite button -->
                      <div
                        class="flex
                               justify-center
                               items-center"
                      >
                        <button>
                            <i class="far fa-heart fa-lg"></i>
                        </button>
                        <button>
                          <i class="fas fa-heart fa-lg liked"></i>
                        </button>
                      </div>
                      <!-- mark button -->
                      <div
                        class="flex
                               justify-center
                               items-center"
                      >
                        <button>
                          <i class="far fa-bookmark fa-lg"></i>
                        </button>
                        <button>
                          <i class="fas fa-bookmark fa-lg bookmarked"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Ranking (ランキング) -->
        <div
          class="beige-bg
                 h-auto"
        >
          <p
            class="small-title-beige
                   text-center
                   p-10"
          >
            Ranking
          </p>
          <div
            class="animate__animated"
          >
            <div
              class="h-auto
                     py-3"
            >
              <div class="row-span-1">
                <p
                  class="text-nvy-brown
                         text-center
                         text-sm
                         sm:text-base
                         md:text-2xl
                         lg:text-2xl
                         xl:text-2xl
                         2xl:text-2xl
                         my-5
                         mx-10
                         kaisei-medium"
                >
                  お気に入りのお店ランキングと気になるお店ランキングの上位のお店です
                </p>
                <div
                  class="flex
                         justify-center"
                >
                  <div
                    class="flex
                           justify-end
                           items-center
                           mt-5
                           sm:w-11/12
                           md:w-11/12
                           lg:w-4/5
                           xl:w-4/5
                           2xl:w-4/5
                           w-11/12"
                  >
                    <router-link
                      :to="{
                              name: 'Ranking',
                            }"
                      class="block
                             lora-bold
                             text-lightgray
                             text-lg
                             text-center"
                    >
                         AllRanking
                      <p
                        class="text-xs
                               text-nvy-brown
                               kaisei-medium"
                      >
                        お店のランキングはこちら
                      </p>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            <!-- Favorite -->
            <div
              class="ranking
                     pb-10"
            >
              <p
                class="ranking-title
                       p-5
                       text-center"
              >
                Favorites
              </p>
            </div>
            <!-- Bookmark -->
            <div
              class="ranking
                     pb-10"
            >
              <p
                class="ranking-title
                       p-5
                       text-center"
              >
                Marks
              </p>
            </div>
          </div>
        </div>
        <!-- footer -->
        <footer
          class="navy-pink-bg
                 h-auto"
        >
          <p
            class="text-beige
                   text-center
                   p-5
                   lora"
          >
            <i class="far fa-copyright copyright"></i>
            2022 Wakana T
          </p>
        </footer>
      </div>
    </div>
  </template>

<script>
export default {
};
</script>

  <style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Antic+Didone&family=Elsie&family=Italiana&family=Kaisei+Decol:wght@400;500;700&family=Lobster&family=Lora:wght@400;700&family=Parisienne&display=swap');
  /* background */
  .navy-pink-bg {
    background-color: #a76e63;
    background: linear-gradient(to right, #ab766b, #9f6054, #945447);
  }
  .beige-bg {
    background-color: #f2ebe5;
    background: linear-gradient(to right, #f2ebe5, #eee5de, #eae2da);
  }
  /* title */
  .sweets {
    text-transform: Uppercase;
    font-size: 200px;
    color: #a76e63;
    font-family: 'Lora', serif;
    font-weight: bold;
    text-shadow: 0 1px #966258,
                 0 2px #8d5c53,
                 0 3px #885950,
                 0 4px #80544b,
                 0 5px #7b5148,
                 0 6px #744c44,
                 0 7px #6f4841,
                 0 8px #68433c,
                 0 9px #5f3e37,
                 0 10px 8px #523530;
  }
  .journal {
    text-transform: Uppercase;
    font-size: 200px;
    color: #a76e63;
    font-family: 'Lora', serif;
    font-weight: bold;
    text-shadow: 0 1px #966258,
                 0 2px #8d5c53,
                 0 3px #885950,
                 0 4px #80544b,
                 0 5px #7b5148,
                 0 6px #744c44,
                 0 7px #6f4841,
                 0 8px #68433c,
                 0 9px #5f3e37,
                 0 10px 8px #523530;
  }
  .small-title-beige {
    font-size: 100px;
    color: #f2ebe5;
    font-family: 'Lora', serif;
    font-weight: bold;
    text-shadow: 0 1px #dfd8d3,
                 0 2px #d1cac5,
                 0 3px #c2bcb7,
                 0 4px #b8b2ac,
                 0 5px #b1aba6,
                 0 6px #aaa49f,
                 0 7px #a19b96,
                 0 8px #99938e,
                 0 9px #918b86,
                 0 10px 8px #88837e;
  }
  .small-title-navy-pink {
    font-size: 100px;
    color: #a76e63;
    font-family: 'Lora', serif;
    font-weight: bold;
    text-shadow: 0 1px #966258,
                 0 2px #8d5c53,
                 0 3px #885950,
                 0 4px #80544b,
                 0 5px #7b5148,
                 0 6px #744c44,
                 0 7px #6f4841,
                 0 8px #68433c,
                 0 9px #5f3e37,
                 0 10px 8px #523530;
  }
  .ranking-title {
    font-size: 50px;
    color: #a76e63;
    font-family: 'Lora', serif;
    font-weight: bold;
    text-shadow: 0 1px #dfd8d3,
                 0 2px #c2bcb7,
                 0 3px #b1aba6,
                 0 4px #a19b96,
                 0 5px #99938e,
                 0 6px 5px #88837e;
  }
  .place-title {
    color: #f2ebe5;
    transition: 0.2s ease all;
    text-align: center;
    font-family: 'Lora', serif;
    font-weight: bold;
    text-shadow: 0 1px #966258,
                 0 2px #8d5c53,
                 0 3px #885950,
                 0 4px #80544b,
                 0 5px #7b5148,
                 0 6px #744c44,
                 0 7px #6f4841,
                 0 8px #68433c,
                 0 9px #5f3e37,
                 0 10px 8px #523530;
  }
  @media screen and (max-width:480px) {
    .sweets {
      font-size: 70px;
    }
    .journal {
      font-size: 70px;
    }
    .small-title-beige {
      font-size: 50px;
    }
    .small-title-navy-pink {
      font-size: 50px;
    }
    .place-title {
      font-size: 50px;
    }
    .message-about {
      font-size: 40px;
    }
    .ranking-title {
      font-size: 30px;
    }
    .select-text {
      font-size: 10px;
    }
    .select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
      font-size: 15px;
      top: -60px;
    }
    .select:after {
      top: 5px;
    }
    .select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {
      width: 62%;
    }
    .place-data {
      width: 80%;
      margin: 0 auto;
    }
    .photo-position {
      text-align: center;
      margin: 0 auto;
    }
  }
  @media screen and (min-width:480px) and (max-width:684px) {
    .sweets {
      font-size: 100px;
    }
    .journal {
      font-size: 100px;
    }
    .small-title-beige {
      font-size: 50px;
    }
    .small-title-navypink {
      font-size: 50px;
    }
    .place-title {
      font-size: 50px;
    }
    .message-about {
      font-size: 30px;
    }
    .ranking-title {
      font-size: 30px;
    }
    .select-text {
      font-size: 10px;
    }
    .select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
      font-size: 15px;
      top: -60px;
    }
    .select:after {
      top: 5px;
    }
    .select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {
      width: 62%;
    }
    .place-data {
      width: 90%;
       margin: 0 auto;
    }
    .photo-position {
      text-align: center;
      margin: 0 auto;
    }
  }
  @media screen and (min-width:640px) and ( max-width:768px) {
    .sweets {
      font-size: 150px;
    }
    .journal {
      font-size: 150px;
    }
    .small-title-beige {
      font-size: 70px;
    }
    .small-title-navypink {
      font-size: 70px;
    }
    .place-title {
      font-size: 70px;
    }
    .message-about {
      font-size: 20px;
    }
    .ranking-title {
      font-size: 30px;
    }
    .select-text {
      font-size: 20px;
    }
    .select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
      font-size: 40px;
      top: -80px;
    }
    .select:after {
      top: 17px;
    }
    .select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {
      width: 106%;
    }
    .ranking-layout {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .place-data {
      width: 33.333333%;
    }
  }
  @media screen and (min-width:768px) and ( max-width:1024px) {
    .sweets {
      font-size: 150px;
    }
    .journal {
      font-size: 150px;
    }
    .small-title-beige {
      font-size: 100px;
    }
    .small-title-navy-pink {
      font-size: 100px;
    }
    .place-title {
      font-size: 100px;
    }
    .message-about {
      font-size: 30px;
    }
    .ranking-title {
      font-size: 50px;
    }
    .select-text {
      font-size: 25px;
    }
    .select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
      font-size: 50px;
      top: -100px;
    }
    .select:after {
      top: 30px;
    }
    .select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {
      width: 149%;
    }
    .ranking-layout {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .place-data {
      width: 33.333333%;
    }
  }
  @media screen and (min-width:1024px) {
    .sweets {
      font-size: 200px;
    }
    .journal {
      font-size: 200px;
    }
    .small-title-beige {
      font-size: 100px;
    }
    .small-title-navy-pink {
      font-size: 100px;
    }
    .place-title {
      font-size: 100px;
    }
    .message-about {
      font-size: 40px;
    }
    .ranking-title {
      font-size: 50px;
    }
    .select-text {
      font-size: 30px;
    }
    .select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
      font-size: 50px;
      top: -100px;
    }
    .select:after {
      top: 30px;
    }
    .select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {
      width: 192%;
    }
    .ranking-layout {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .place-data {
      width: 33.333333%;
    }
  }

  .top-message {
    top: 50%;
    margin: auto;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  /* scroll down */
  /* スクロールダウン全体の場所 */
  .scrolldown{
    position: absolute;
    bottom: 0;
    left: 50%;
  }
  /*Scrollテキストの描写*/
  .scrolldown span{
    position: absolute;
    left:10px;
    bottom:10px;
    color: #eee;
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    /*縦書き設定*/
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
  }
  /* 丸の描写 */
  .scrolldown:before {
    content: "";
    position: absolute;
    bottom:0;
    left:-4px;
    /*丸の形状*/
    width:10px;
    height:10px;
    border-radius: 50%;
    background:#eee;
    /*丸の動き1.6秒かけて透過し、永遠にループ*/
    animation:
      circlemove 1.6s ease-in-out infinite,
      cirlemovehide 1.6s ease-out infinite;
  }
  /*下からの距離が変化して丸の全体が上から下に動く*/
  @keyframes circlemove{
    0%{bottom:45px;}
    100%{bottom:-5px;}
   }
  /*上から下にかけて丸が透過→不透明→透過する*/
  @keyframes cirlemovehide{
    0%{opacity:0}
    50%{opacity:1;}
    80%{opacity:0.9;}
    100%{opacity:0;}
   }
  /* 線の描写 */
  .scrolldown:after{
    content:"";
    /*描画位置*/
    position: absolute;
    bottom:0;
    left:0;
    /*線の形状*/
    width:2px;
    height: 50px;
    background:#eee;
  }

  /* text font */
  .lora {
    font-family: 'Lora', serif;
  }
  .lora-bold {
    font-family: 'Lora', serif;
    font-weight: bold;
  }
  .kaisei-medium {
    font-family: 'Kaisei Decol', serif;
    font-weight: medium;
  }
  /* search form */
  select {
    background-color: transparent;
    line-height: 2.0em;
  }
  option {
    background-color: #a76e63;
  }
  .select-text {
    position: relative;
    font-family: inherit;
    padding: 10px 10px 10px 0;
    color: #f2ebe5;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(0,0,0, 0.12);
    text-shadow: 0 1px #966258,
                 0 2px #8d5c53,
                 0 3px #885950,
                 0 4px #80544b,
                 0 5px #7b5148,
                 0 6px #744c44,
                 0 7px #6f4841,
                 0 8px #68433c,
                 0 9px #5f3e37,
                 0 10px 8px #523530;
  }
  .select-text:focus {
    outline: none;
  }
  .select .select-text {
    appearance: none;
    -webkit-appearance:none;
    text-align: center;
  }
  .select:after {
    position: absolute;
    right: 10px;
    /* Styling the down arrow */
    width: 0;
    height: 0;
    padding: 0;
    text-align: center;
    content: '▼';
    color: #f2ebe5;
    text-shadow: 0 1px #966258,
                 0 2px #8d5c53,
                 0 3px #885950,
                 0 4px #80544b,
                 0 5px #7b5148,
                 0 6px #744c44,
                 0 7px #6f4841,
                 0 8px #68433c,
                 0 9px #5f3e37,
                 0 10px 8px #523530;
    pointer-events: none;
    transition: 0.3s ease all;
  }
  .select:hover:after {
    transform: translate(0px, 10px);
    text-shadow: none;
  }
  .select-label {
    color: rgba(0,0,0, 0.26);
    font-size: 50px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 10px;
    transition: 0.2s ease all;
  }
  .select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
    color: #f2ebe5;
    transition: 0.2s ease all;
    text-align: center;
    font-family: 'Lora', serif;
    font-weight: bold;
    text-shadow: 0 1px #966258,
                 0 2px #8d5c53,
                 0 3px #885950,
                 0 4px #80544b,
                 0 5px #7b5148,
                 0 6px #744c44,
                 0 7px #6f4841,
                 0 8px #68433c,
                 0 9px #5f3e37,
                 0 10px 8px #523530;
  }
  .select-bar {
    position: relative;
    display: block;
    width: 150px;
  }
  .select-bar:before, .select-bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    background: #f2ebe5;
    transition: 0.2s ease all;
  }
  .select-highlight {
    position: absolute;
    height: 60%;
    width: 50%;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
  }
  /* search button (検索ボタン) */
  .search-button {
    display: inline-block;
    position: relative;
    font-size: 50px;
    color: #f2ebe5;
    text-shadow: 0 1px #966258,
                0 2px #8d5c53,
                0 3px #885950,
                0 4px #80544b,
                0 5px #7b5148,
                0 6px #744c44,
                0 7px #6f4841,
                0 8px #68433c,
                0 9px #5f3e37,
                0 10px 8px #523530;
    transition: all .5s ease;
  }
  .search-button::before {
    position: absolute;
    top: 45px;
    left: 31px;
    transform: rotate(-45deg);
    width: 0.10em;
    height: 0.5em;
    content: "i";
    color: #f2ebe5;
    font-size: 30px;
    text-shadow: -1px 1px #966258,
                 -1px 2px #8d5c53,
                 -2px 3px #885950,
                 -3px 4px #80544b,
                 -4px 5px #7b5148,
                 -5px 6px #744c44,
                 -6px 7px #6f4841,
                 -7px 8px #68433c,
                 -8px 9px #5f3e37,
                 -9px 10px 8px #523530;
    transition: all .5s ease;
  }
  .search-button:hover {
    transform: translate(0px, 10px);
    text-shadow: none;
  }
  .search-button:hover::before {
    transform: translate(0px, 10px);
    transform: rotate(-45deg);
    text-shadow: none;
  }
  /* place card layout */
  #photos li {
    display: inline-box;
    float: left;
  }
  .button-area-gap {
    width: 300px;
    height: 10px;
  }
  .button-area {
    width: 300px;
    height: 40px;
  }
  .add-size {
    font-size: 5px;
  }
  .button-size {
    font-size: 1.5em;
  }
  /* favorite and bookmark button */
  button:disabled {
    opacity: .4;
  }
  .liked {
    color: #ff8882;
  }
  .bookmarked {
    color: #efdc71;
  }
  .marked {
    color: #efdc71;
  }
  .icon-color-yellow {
    color: #efdc71;
  }
  /* ranking layout */
  #slider {
    overflow: hidden;
    width: 310px;
    border: 1px solid #000;
    margin: 10px auto;
    padding: 0px;
  }
  #rankings {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
  }
  /* copyright */
  .copyright {
    color: #f2ebe5;
  }
  /* card layout */
  .card {
    padding: 20px;
    width: 700px;
    height: auto;
    background-color: #FFF;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    cursor: pointer;
  }
  .card:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .card .card-header {
    position: relative;
    background-color: #9e9a95;
    margin: -20px -20px 5px -20px;
    transition: height 0.5s;
  }
  .card .card-header .card-image {
    display: block;
    width: 300px;
    height: auto;
  }
  .card .card-body {
    height: 300px;
    width: 300px;
  }
  .card .card-body .card-information {
    margin-top: 10px;
    color: #424242;
  }
  .card .card-body .card-information li {
    margin-top: 5px;
    margin-left: 35px;
  }
  .place-image {
    width: 300px;
    -moz-box-shadow: 10px 10px 15px -4px rgba(54, 52, 51, 0.8);
    -webkit-box-shadow: 10px 10px 15px -4px rgba(54, 52, 51, 0.8);
    -ms-box-shadow: 10px 10px 15px -4px rgba(54, 52, 51, 0.8);
    box-shadow: 10px 10px 15px -4px rgba(54, 52, 51, 0.8);
  }
  .place-name {
    width: 300px;
    height: auto;
  }
  .place-info {
    width: auto;
    height: auto;
  }
  /* 回転するアニメーション */
  .material-icons.md-48 {
    font-size: 48px;
    color: #f2ebe5;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  .parisienne {
    font-family: 'Parisienne', cursive;
  }
  </style>
