import Vue from 'vue';
import { mount } from '@vue/test-utils'
import MyPage from './my-page.ts';

describe('MyPage', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(MyPage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})