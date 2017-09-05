/* SystemJS module definition */
declare var nodeModule: NodeModule;
interface NodeModule {
  id: string;
}

declare var window: Window;
interface Window {
  process: any;
  require: any;
  File: any;
  FileList: any;
  Blob: {new (blobParts?: any[], options?: BlobPropertyBag): Blob; prototype: Blob;};
  FileReader: any;
}
