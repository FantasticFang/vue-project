<template>
  <div class="p-menu">
    <ul class="p-menu-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="p-menu-item"
        @click="clickItem(item)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pMenu',
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    clickItem (item) {
      this.$emit('click', item)
    }
  }
}
</script>

<style lang="scss">
  .p-menu {
    &-list {
      width: 200px;
      height: 100%;
      list-style-type: none;
    }
    &-item {
      height: 40px;
      width: 100%;
    }
  }
</style>
