"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chat_server_1 = require("./chat-server");
var lol_online_game_server_1 = require("./lol-online-game-server");
var app = new chat_server_1.ChatServer().getApp();
exports.app = app;
var app2 = new lol_online_game_server_1.LolOnlineGameServer().getApp();
exports.app2 = app2;
