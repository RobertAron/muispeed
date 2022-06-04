// // # More performant styled function

// import { Theme } from "@mui/material";

// // ## Curried function to put styles in
// type NestedSelector = React.CSSProperties | { [key: string]: NestedSelector | undefined }
// type ExtendReactComponentProps<Component extends (...args: any) => JSX.Element, Additional> = (props: Parameters<Component>[0] & Additional) => ReturnType<Component>
// interface FastCreateStyled<C> {
//   (selectors: NestedSelector): C;
//   <AdditionalProps extends {} = {}>(cb: (props: { theme: Theme } & AdditionalProps) => NestedSelector): ExtendReactComponentProps<C, AdditionalProps>
// }

// // ## Function that creates the styling curry
// interface Options {
//   shouldForwardProp: (propKey: string) => boolean
// }
// interface MyStyled {
//   <C extends keyof JSX.IntrinsicElements>(tag: C, options: Options = {}): FastCreateStyled<(props: JSX.IntrinsicElements[C]) => JSX.Element>
//   <C extends React.JSXElementConstructor<React.ComponentProps<C>>>(component: C, options: Options = {}): FastCreateStyled<C>
//   <C extends React.ComponentClass<React.ComponentProps<C>>>(component: C, options: Options = {}): FastCreateStyled<C>
// }
// // ## Can't export interfaces so assign it
// let MyStyledFunction: MyStyled
// declare module "@mui/system/styled" {
//   export = MyStyledFunction
// }
