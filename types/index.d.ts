import Vue, { PluginFunction } from 'vue'

declare const VAspectRatio: VAspectRatio

export default VAspectRatio

export interface VAspectRatio {
  install: PluginFunction<never>
}
