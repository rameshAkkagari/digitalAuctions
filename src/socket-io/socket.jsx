import { io } from "socket.io-client";
const token = localStorage.getItem('token')
export const socket = io(`192.168.1.11:8080?token=${token}`)