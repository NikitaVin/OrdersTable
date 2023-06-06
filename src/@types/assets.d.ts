import '@emotion/react';

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      light: string;
      dark: string;
    };
    backGrounds: {
      light: string;
      lightGray: string;
      dark: string;
      nightDarkBack: string;
    };
  }
}

//declare module '*lodash.debounce' {
//   const content: any;
//   export default content
//}
