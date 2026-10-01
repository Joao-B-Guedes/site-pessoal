// ==========================================================
// Lógica da animação
// ==========================================================
import { blocos } from "./content.js";
import { rodarBlocos } from "./terminal-engine.js"

export const corpo = document.getElementById("terminal-body");

rodarBlocos(blocos, corpo);