import Vue from 'vue';
import { mount } from '@vue/test-utils'
import MyPagePage from '../my-page.page';

describe('MyPagePage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MyPagePage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})