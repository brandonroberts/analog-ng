/// <reference types="vite/client" />

// Uncomment the lines below to enable types for experimental .ng format support
declare global {
  import type { Component, Directive, Pipe, Type } from '@angular/core';

  interface Window {
    defineComponentMetadata: (
      metadata: Omit<
        Component,
        | 'template'
        | 'templateUrl'
        | 'host'
        | 'standalone'
        | 'changeDetection'
        | 'styleUrls'
        | 'styleUrl'
        | 'styles'
      >
    ) => void;
    defineDirectiveMetadata: (
      metadata: Omit<Directive, 'host' | 'standalone'>
    ) => void;
    definePipeMetadata: (metadata: Omit<Pipe, 'standalone'>) => void;
  }
}

declare module '*.ng' {
  const cmp: Type<any>;
  export default cmp;
}
