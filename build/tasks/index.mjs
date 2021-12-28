/* eslint-disable import/extensions */

export { createManifest, getManifestContent } from './manifest.mjs';
export { default as webpack } from './webpack.mjs';
export { default as mapping } from './mapping.mjs';
export {
  translations,
  chromeTranslations,
} from '../../adblockplusui/adblockpluschrome/build/tasks/translations.mjs';
export {
  addDevEnvVersion,
} from '../../adblockplusui/adblockpluschrome/build/tasks/devenv.mjs';
export {
  default as sourceDistribution,
} from './sourceDistribution.mjs';
export { buildSnippets } from "./snippets-dependency.mjs";
export { buildAdBlockSnippets } from "./ab-snippets-dependency.mjs";

