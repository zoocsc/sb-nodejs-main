process.on("uncaughtException", () => {});
process.on("unhandledRejection", () => {});

// ====== 只修改两个核心变量 UUID/DOMAIN ======
const UUID = (process.env.UUID || "68a16c0a-2c6e-476d-8770-6bb89451d888").trim();        // 替换"双引号中的UUID"
const DOMAIN = (process.env.DOMAIN || "saas.sin.fan").trim();                    // 替换"双引号中的完整域名"
 
// Panel 配置
const NAME = "SG_Leaseweb";
const LISTEN_PORT = Number(process.env.PORT) || 0;     // 自适应端口

const BEST_DOMAINS = [
    "43.175.131.30",
    "ip.sb",
];

// ============================================================
// =============== 模块加载区 ================================
// ============================================================
const http = require("http");
const net = require("net");
const { WebSocketServer, createWebSocketStream } = require("ws");

// ============================================================
// =============== WebSocket Path ============================
// ============================================================
