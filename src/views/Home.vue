<template>
  <div class="home">
    <project-menu :items="menuItems" />
  </div>
</template>

<script>
import ProjectMenu from '@components/menu'
// import SortList from '@components/sortList'

export default {
  name: 'Home',
  components: {
    ProjectMenu
    // SortList
  },
  data () {
    return {
      menuItems: [
        {
          text: '拖拽排序',
          to: {
            name: 'darg'
          }
        }
      ]
    }
  }
}
</script>
