import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const DodiameerVueComponents: { install: InstallFunction };
export default DodiameerVueComponents;

export const DodiameerVueComponentsSample: VueConstructor<Vue>;
