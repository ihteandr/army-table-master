import { Injectable } from '@angular/core';

import {MemoryStorage} from './memory_storage';
import {SessionStorage} from './session_storage';
import {LocalStorage} from './local_storage';
import {FileStorage} from './file_storage';
import {LocalDBStorage} from './local_db_storage';
import { EncryptService } from '../encrypt.service';

@Injectable()
export class StorageService {
    private store:any = {
      memory : new MemoryStorage(),
      local: new LocalStorage(),
      session: new SessionStorage(),
      file: new FileStorage(),
      localDB: new LocalDBStorage('main-storage')
    };
    constructor() {
    }
    add(key, data, storage, options){
        return this.store[storage].add(key, data, options);
    }
    get(key, storage, options){
        return this.store[storage].get(key, options);
    }
    remove(key, storage, options){
        return this.store[storage].remove(key, options);
    }
}

