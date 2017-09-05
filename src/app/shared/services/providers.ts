import * as Services from './index';

export const SERVICE_PROVIDERS = [];

for(let i in Services){
  SERVICE_PROVIDERS.push(Services[i]);
}
