// This file contains production variables. (When you work in PROD MODE)
// This file is use by webpack. Please don't rename it and don't move it to another directory.
import { sharedEnviroment } from './shared';
export const environment = {
  ...sharedEnviroment,
  production: true
};
