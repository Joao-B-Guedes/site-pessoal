import { homelab } from "./homelab-content.js";
import { rodarBlocos } from "../terminal-engine.js";

const corpo = document.getElementById("terminal-body");

rodarBlocos([homelab], corpo, true);
