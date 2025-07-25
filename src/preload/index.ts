import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('RendererEvents', {
  onSettingsWindowCreated: (callback: () => void) => {
    ipcRenderer.on('RendererEvents.onSettingsWindowCreated', callback);
  },
});