import { ChatServer } from './chat-server';
import { LolOnlineGameServer } from './lol-online-game-server';

let app = new ChatServer().getApp();
let app2 = new LolOnlineGameServer().getApp();

export { app2 };
export { app };