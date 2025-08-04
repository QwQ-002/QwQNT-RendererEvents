import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('RendererEvents', {
  onSettingsWindowCreated: (callback: () => void) => {
    ipcRenderer.on('RendererEvents.onSettingsWindowCreated', callback);
  },
  onSettingsWindowCreatedOnce: (callback: () => void) => {
    ipcRenderer.once('RendererEvents.onSettingsWindowCreated', callback);
  },
  onMessageWindowCreated: (callback: () => void) => {
    ipcRenderer.on('RendererEvents.onMessageWindowCreated', callback);
  },
  onMessageWindowCreatedOnce: (callback: () => void) => {
    ipcRenderer.once('RendererEvents.onMessageWindowCreated', callback);
  },
});