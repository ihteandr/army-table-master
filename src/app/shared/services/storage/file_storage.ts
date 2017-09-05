import { Injectable } from '@angular/core';
import { BaseStorage } from './base_storage';
import { EncryptService } from '../encrypt.service';
import { LocalDBStorage } from './local_db_storage';


export class FileStorage extends BaseStorage{
    encryptService:EncryptService = new EncryptService();
    constructor(){
        super(new LocalDBStorage('files-storage'));
    }
    isStorageSupported(){
        // Check for the various File API support.
        return window.File && window.FileReader && window.FileList && window.Blob;
    }
    public add(key:string,file: any){
        return new Promise((resolve:Function, reject:any)=>{
            console.log('key', key);
            console.log('file', file);
            if(this.isStorageSupported()){
                var reader = new FileReader();

                // Closure to capture the file information.
                reader.onload = (e:any)=>{
                  this.store.add(`FILE_STORAGE-${key}`, {
                    data: e.target.result,
                    name: file.name,
                    extension: file.name.substr(file.name.lastIndexOf('.')+1)
                  });
                  resolve(this);
                };

                reader.onerror = reject;

            } else {
                reject({message: 'Storage is not supported', code: 1});
            }
        });
    }
    get(key){
        return new Promise((resolve:Function, reject:Function)=>{
            if(this.isStorageSupported()){
                this.store.get(`FILE_STORAGE-${key}`).then((item:any)=>{
                    console.log('item', item);
                    if(item){
                        let file = new File([this.encryptService.s2ab(item.data)], item.name, {type:item.contentType});
                        resolve(file);
                    } else {
                        resolve(null);
                    }
                }, reject);
            } else {
                reject({message: 'Storage is not supported'});
            }
        });
    }
    remove(key){
        return new Promise((resolve, reject)=>{
            let data = this.get(key);
            localStorage.removeItem(key);
            resolve(data);
        });
    }
}
