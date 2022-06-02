export default class GameScene extends Phaser.Scene {

    // タイルセットの１セルあたりの解像度(px)
    public static CELL_PX = {
        WIDTH : 32,
        HEIGHT : 32
    };

    // マップの開始位置（Offset）　左上が(0,0)
    private static MAP_POSITION = {
        X :  20,
        Y :  40
    };

    // タイルセットの画像ファイルのキー
    // タイルセット名(map_demo.jsonの中のtilesets.name属性を指定)
    private static TILESET_KEY_NAME = "school_set"  
     // Phaser3の中のタイルセットを指すキーフレーズ（任意の文言）   
    private static TILESET_KEY_PLAIN = "../";    

    // マップJSONファイルのキー
    // Phaser3の中のマップJSONファイルを指すキーフレーズ（任意の文言）
    private static MAP_JSON_FILE_KEY = "../"; 

    preload() {
        // tileset画像ファイルをロード（キー・ファイルパス）
        this.load.image(GameScene.TILESET_KEY_PLAIN, "/map/images/school_set.png");

        // mapファイルのロード
        this.load.tilemapTiledJSON(GameScene.MAP_JSON_FILE_KEY, "/map/json/classroom1.json");
    }

    create() {          
        // タイルマップの作成
        var tilemap:Phaser.Tilemaps.Tilemap  = this.add.tilemap(GameScene.MAP_JSON_FILE_KEY);
        // タイルセットをリンク付け
        let planeTiles0:Phaser.Tilemaps.Tileset = tilemap.addTilesetImage(
                 GameScene.TILESET_KEY_NAME,    // 第１引数は マップのjsonファイル中のtilesets.name属性を指定
                 GameScene.TILESET_KEY_PLAIN);    // 第２引数はPhaser3内のキーワード
        // レイヤーを作成
        let mapGroundLayer0:Phaser.Tilemaps.TilemapLayer = tilemap.createLayer(
            "back",           // Tiledで設定したレイヤー名
            planeTiles0,     // 定義したタイルセット
            20,40               // 第３引数・第４引数は、左上の座標を(0,0)とした時の配置位置(x,y) 
            );
        let mapGroundLayer1:Phaser.Tilemaps.TilemapLayer = tilemap.createLayer(
            "objects", 
            planeTiles0,
            20,40);
        let mapGroundLayer2:Phaser.Tilemaps.TilemapLayer = tilemap.createLayer(
            "seat", 
            planeTiles0,
            20,40);

        // FPS
        let fpstext = this.add.text(0,0,'0')
        const fpsoverwrite = this.time.addEvent({
            delay: 500,                // ms
            callback: () => fpstext.setText(String(this.sys.game.loop.actualFps).substring(0, 4) + " fps"),
            //args: [],
            // callbackScope: thisArg,
            loop: true
        }); 
    };

    
}