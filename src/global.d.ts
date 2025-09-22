/// <reference types="vite/client" />

declare namespace RendererEvents {
  const onLogin: (callback: (uid?: string) => void) => void;
  const onSettingsWindowCreated: (callback: () => void) => void;
  const onSettingsWindowCreatedOnce: (callback: () => void) => void;
  const onMessageWindowCreated: (callback: () => void) => void;
  const onMessageWindowCreatedOnce: (callback: () => void) => void;
}

type Unsubscribe = () => void
type EventName = string | string[]
type IpcCallback = (...args: any[]) => void

interface IpcInterceptorType {
  onIpcReceive(callback: IpcCallback): Unsubscribe;
  onIpcSend(callback: IpcCallback): Unsubscribe;
  offIpcReceive(callback: IpcCallback): void;
  offIpcSend(callback: IpcCallback): void;
  onIpcReceiveEvents(eventName: EventName, callback: IpcCallback): Unsubscribe;
  onIpcSendEvents(eventName: EventName, callback: IpcCallback): Unsubscribe;
  offIpcReceiveEvents(eventName: EventName, callback: IpcCallback): void;
  offIpcSendEvents(eventName: EventName, callback: IpcCallback): void;
}

declare const IpcInterceptor: IpcInterceptorType
