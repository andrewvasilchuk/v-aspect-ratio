import {
  ThisTypedShallowMountOptions,
  createLocalVue,
  shallowMount,
} from '@vue/test-utils'

import Plugin from '../../src'

import TestComponent from '../components/TestComponent'

export class TestManager {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static createWrapper(
    options: ThisTypedShallowMountOptions<
      InstanceType<typeof TestComponent>
    > & { propsData?: { aspectRatio?: string } } = {}
  ) {
    const localVue = createLocalVue()
    localVue.use(Plugin)
    return shallowMount(TestComponent, { localVue, ...options })
  }
}
