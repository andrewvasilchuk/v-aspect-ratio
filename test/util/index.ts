import type Vue from 'vue'
import type { ComponentOptions } from 'vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'

import Plugin from '../../src'

export class TestManager {
  static createWrapper(component: ComponentOptions<Vue>) {
    const localVue = createLocalVue()
    localVue.use(Plugin)
    return shallowMount(component, { localVue })
  }
}
