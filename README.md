# QwQNT-RendererEvents

本插件是 QwQNT 框架下，用于为 Renderer 提供一系列窗口事件的插件。

## 使用

在 Renderer 中，使用 `RendererEvents.onSettingsWindowCreated` 对设置窗口的创建进行监听。

下面是一个实例：

```typescript
// renderer
RendererEvents.onSettingsWindowCreated(() => {
  alert('settings');
});
```

对于使用 Typescript 编写插件的开发者，你可能需要将 `RendererEvents` 写入 `global.d.ts` 中。

```typescript
// global
declare namespace RendererEvents {
  const onSettingsWindowCreated: (callback: () => void) => void;
}
```

## License
```
    MIT License

    QwQNT-RendererEvents
    Copyright (C) 2025  Adpro

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
```