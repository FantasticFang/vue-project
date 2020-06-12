import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const localVue = createLocalVue()
    const wrapper = shallowMount(HelloWorld, {
      localVue,
      propsData: { msg }
    })
    const h1 = wrapper.find('h1')
    expect(h1.text()).toMatch(msg)
  })
})
