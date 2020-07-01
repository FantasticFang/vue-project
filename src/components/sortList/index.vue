<template>
  <div class="items-sort">
    <transition-group
      ref="drag-list"
      name="drag-list"
      tag="ul"
      type="transition"
      @dragstart.native="onDragStart"
      @dragover.native="onDragMove"
    >
      <li v-for="item in items" :key="item" class="drag-list-item" draggable="true">
        <i class="drag-list-item-icon el-icon-s-operation" />
        {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'DragItem',
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6, 7],
      dragElement: null
    }
  },
  methods: {
    onDragStart (e) {
      this.dragElement = event.target
    },
    onDragMove (e) {
      e.preventDefault()
      const target = e.target
      if (target.nodeName === 'LI' && target !== this.dragElement) {
        const startIndex = this.findIndex(this.dragElement)
        const currentIndex = this.findIndex(target)
        this.items.splice(currentIndex, 0, this.items.splice(startIndex, 1)[0])
      }
    },
    findIndex (el) {
      let index = 0
      while (el && el.previousElementSibling) {
        index++
        el = el.previousElementSibling
      }
      return index
    }
  }
}
</script>

<style lang="scss">
  .drag-list-move {
    transition: transform .3s;
  }
  .drag-list-item {
    width: 200px;
    height: 40px;
    background-color: bisque;
    text-align: center;
    line-height: 40px;
    margin: 5px 0;
    list-style-type: none;
    border-radius: 5px;
    position: relative;
    cursor: move;
    &-icon {
      float: left;
      position: relative;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
