<script lang="ts" setup>
 
</script>

<template>
     <article class="card">
        <img class="card__img" src="z_img/1.png" alt="" loading="lazy">
        <div class="card__body">
            <div class="card__body-top">
                <h3 class="card__title">G2H</h3>
                <p class="card__desc">Многофункциональное вытяжное устройство для естественной и гибридной вентиляции
                </p>
            </div>

        </div>
        <div class="card__body-footer">
            <strong class="card__price-rub">6 848 ₽ – 56 584 ₽</strong>
            <span class="card__price-eur">77.60 € – 643.86 €</span>

            <button class="card__btn">Подробнее</button>
        </div>
    </article>
</template>

<style scoped>
 /* CARD */

.card {
  margin: 20px 40px;
  padding: 25px;
  width: 305px;
  background-color: #f6f8fa;
}

.card__img {
  width: 100%;
  height: 245px;
  margin-bottom: 5px;
}

.card__btn {
  display: block;
  border-radius: 4px;
  font-size: 16px;
  color: white;
  background-color: #0069b4;
  padding-block: 15px;
  border: none;
  width: 100%;
  margin-top: 20px;
}

.card__title {
  font-size: 22px;
  font-weight: 700;
  color: #1f2432;
  line-height: 120.5%;
  margin-bottom: 10px;
}
.card__desc {
  font-size: 14px;
  color: #1f2432;
  line-height: 145%;
}

.card__body-top {
  margin-bottom: 39px;
}

.card__body-footer {
  display: flex;
  flex-direction: column;
}
.card__price-rub {
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  color: #1f2432;
  font-family: "Roboto", sans-serif;
}
.card__price-eur {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #797b86;
}

</style>