declare module "lodash.debounce" {
  const content: any;
  export default content;
}

declare module "*.scss" {
  const type: Record<string, string>;
  export default type;
}

declare module "*.svg" {
  import { PureComponent, SVGProps } from "react";

  export class ReactComponent extends PureComponent<SVGProps<SVGSVGElement>> {}
}
declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}
