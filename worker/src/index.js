import {getService} from './quake-service.js';
import App from '../../ui/src/App.svelte';

export {QuakeService} from './quake-service.js';

const app = new App({
  target: document.body
});

export default {
  async fetch(request, env) {
    try {
      const service = getService(env);
      return await service.fetch(request);
    } catch (e) {
      console.error(e);
      return new Response(e, {status: 500})
    }
  },
  async scheduled(event, env, ctx) {
    ctx.waitUntil((async () => {
      try {
        const service = getService(env);
        return await service.fetch('https://.../sync_quakes');
      } catch (e) {
        console.error(e.message, e.stack);
        return new Response(e, {status: 500})
      }
    })());
  },
}