import { Injectable } from '@angular/core';


@Injectable()
export class EncryptService{
  s2ab(s) {
    var buf;
    if(typeof ArrayBuffer !== 'undefined') {
      buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (let i=0; i!=s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF;
      }
    } else {
      buf = new Array(s.length);
      for (let i=0; i!=s.length; ++i) {
        buf[i] = s.charCodeAt(i) & 0xFF;
      }
    }
    return buf;
  }
}
