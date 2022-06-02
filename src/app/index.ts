import 'phaser';
import Scenes from "./scene/Scenes";

const config: Phaser.Types.Core.GameConfig = {
    // 画面サイズ
    width: 800,     // 横幅
    height: 600,     // 縦幅 
    type: Phaser.AUTO,
    // ゲーム描画先
    parent: 'mainFrame',  // DIVタグ
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'mainFrame'
    },
    scene: Scenes,
}

// Gameクラスの子クラスを作成
export class SRPGGame extends Phaser.Game {
    constructor(config: Phaser.Types.Core.GameConfig) {
        super(config);
    }
}

// HTMLがロードされた後にインスタンスを生成
window.addEventListener('load', () => {
    const game = new SRPGGame(config);

})