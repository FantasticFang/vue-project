<template>
  <div class="items-sort">
    <transition-group
      ref="drag-list"
      name="drag-list"
      tag="ul"
      @mousedown.native="onDragStart"
    >
      <li v-for="item in items" :key="item" class="drag-list-item">
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
      isDragging: false,
      start: { x: 0, y: 0 },
      offset: { left: 0, top: 0 },
      dragTarget: null
    }
  },
  methods: {
    onDragStart (e) {
      const target = e.target
      if (target.nodeName === 'I') {
        this.start.x = e.pageX
        this.start.y = e.pageY
        const targetNode = target.parentNode
        this.offset = this.getOffsetByBody(targetNode)
        this.dragTarget = targetNode.cloneNode(true)
        document.body.appendChild(this.dragTarget)
        this.dragTarget.style.left = this.offset.left + 'px'
        this.dragTarget.style.top = this.offset.top + 'px'
        this.dragTarget.style.position = 'absolute'
        this.dragTarget.style.opacity = 0.8

        const scope = this
        document.onmousemove = function (e) {
          scope.dragMove(e)
        }
        document.onmouseup = function (e) {
          document.onmousemove = null
          document.onmouseup = null
          scope.init()
        }
      }
    },
    dragMove (e) {
      this.dragTarget.style.left = this.offset.left + e.pageX - this.start.x + 'px'
      this.dragTarget.style.top = this.offset.top + e.pageY - this.start.y + 'px'
    },
    init () {
      this.isDragging = false
      this.start.x = 0
      this.start.y = 0
      document.body.removeChild(this.dragTarget)
    },
    getOffsetByBody (el) {
      const offset = { left: 0, top: 0 }
      while (el && el.nodeName !== 'BODY') {
        offset.left += el.offsetLeft
        offset.top += el.offsetTop
        el = el.offsetParent
      }
      return offset
    }
  }
}
</script>

<style lang="scss">
  .drag-list-move {
    transition: transform .5s;
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
    &-icon {
      float: left;
      position: relative;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
