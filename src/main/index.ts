qwqnt.main.hooks.whenBrowserWindowCreated.peek(async window => {
  const currentWindowRouting = await window.webContents.getRouting();

  if(currentWindowRouting){
    if(currentWindowRouting === '/setting/settings/common'){
      window.webContents.send('RendererEvents.onSettingsWindowCreated');
    }
  }
});