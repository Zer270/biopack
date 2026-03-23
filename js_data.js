const gameData = {
    bedrockPacks: [
        {
            id: 1,
            name: "Ultra PvP Pack",
            desc: "Pack tối ưu cho PvP, FPS cao, UI sạch sẽ",
            image: "🎮",
            url: "https://example.com/pack1.zip",
            extra: "32x • +120 FPS"
        },
        {
            id: 2,
            name: "Crystal Clear 64x",
            desc: "Pack HD cho Bedrock, texture đẹp mắt",
            image: "✨",
            url: "https://example.com/pack2.zip",
            extra: "64x • HD Quality"
        },
        {
            id: 3,
            name: "Dark Mode Pack",
            desc: "Giao diện tối cho chơi ban đêm",
            image: "🌙",
            url: "https://example.com/pack3.zip",
            extra: "32x • Night Vision"
        }
    ],
    javaPacks: [
        {
            id: 1,
            name: "PvP Rush Pack",
            desc: "Thiết kế PvP chiến đấu, hit-register cao",
            image: "⚔️",
            url: "https://example.com/java1.zip",
            extra: "16x • +150 FPS"
        },
        {
            id: 2,
            name: "Default Plus",
            desc: "Nâng cấp giao diện mặc định Minecraft",
            image: "🪓",
            url: "https://example.com/java2.zip",
            extra: "16x • Vanilla+"
        },
        {
            id: 3,
            name: "Mythic 32x",
            desc: "Pack kỳ ảo với hiệu ứng đặc biệt",
            image: "🔮",
            url: "https://example.com/java3.zip",
            extra: "32x • Magic Effects"
        }
    ],
    swordPvP: [
        { id: 1, name: "ZeroxPro", rank: "pro", score: 2450 },
        { id: 2, name: "Knight007", rank: "diamond", score: 1890 },
        { id: 3, name: "ShadowHunter", rank: "platinum", score: 1560 },
        { id: 4, name: "IceNinja", rank: "silver", score: 950 },
        { id: 5, name: "FireStorm", rank: "bronze", score: 620 }
    ],
    crystalPvP: [
        { id: 1, name: "CrystalMaster", rank: "pro", score: 3200 },
        { id: 2, name: "NeonSlayer", rank: "diamond", score: 2750 },
        { id: 3, name: "PhantomGhost", rank: "platinum", score: 2100 },
        { id: 4, name: "SilverBlade", rank: "silver", score: 1400 },
        { id: 5, name: "NoobHunter", rank: "bronze", score: 800 }
    ]
};

const accounts = [
    { username: "ZeroxGaming", password: "19032010", role: "admin" }
];

let currentUser = null;