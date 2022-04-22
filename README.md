This reproduces a bug where `tsc` breaks property decorators when the target is `es2022`, because that causes `useDefineForClassFields` to default to `true`.

To run:
```
npm i
npm run build
npm start
```
