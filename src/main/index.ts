qwqnt.main.hooks.whenBrowserWindowCreated.peek(async window => {
  const currentWindowRouting = await window.webContents.getRouting();

  IpcInterceptor.onIpcSendEvents('nodeIKernelSessionListener/onSessionInitComplete', (...args) => {
    window.webContents.send('RendererEvents.onLogin', args[2].payload.uid);
  });

  if(currentWindowRouting){
    if(currentWindowRouting === '/setting/settings/common'){
      window.webContents.send('RendererEvents.onSettingsWindowCreated');
    }
    if(currentWindowRouting === '/main/message'){
      window.webContents.send('RendererEvents.onMessageWindowCreated');
    }
  }
});