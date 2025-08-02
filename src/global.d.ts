/// <reference types="vite/client" />

declare namespace RendererEvents {
  const onSettingsWindowCreated: (callback: () => void) => void;
  const onMessageWindowCreated: (callback: () => void) => void;
}
