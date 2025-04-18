const MONSTER_MOVE_SPEED = 2;

class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // draw right arm
        my.sprite.rightArm = this.add.sprite(this.bodyX + 100, this.bodyY + 80, "monsterParts", "arm_redA.png");
        my.sprite.rightArm.angle = -15;

        // draw left arm
        my.sprite.leftArm = this.add.sprite(this.bodyX - 120, this.bodyY - 20, "monsterParts", "arm_redA.png");
        my.sprite.leftArm.angle = 150;

        // draw right leg
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 60, this.bodyY + 160, "monsterParts", "leg_redA.png");

        // draw left leg
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 60, this.bodyY + 160, "monsterParts", "leg_redA.png");
        my.sprite.leftLeg.flipX = true;

        // draw body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");
        
        // draw antenna
        my.sprite.rightAntenna = this.add.sprite(this.bodyX + 55, this.bodyY - 105, "monsterParts", "detail_yellow_antenna_small.png");
        my.sprite.leftAntenna = this.add.sprite(this.bodyX - 55, this.bodyY - 105, "monsterParts", "detail_yellow_antenna_small.png");
        my.sprite.leftAntenna.flipX = true;

        // draw antenna eyes
        my.sprite.rightAntennaEye = this.add.sprite(this.bodyX + 61, this.bodyY - 119, "monsterParts", "eye_yellow.png");
        my.sprite.rightAntennaEye.scale = 0.2;

        my.sprite.leftAntennaEye = this.add.sprite(this.bodyX - 61, this.bodyY - 119, "monsterParts", "eye_yellow.png");
        my.sprite.leftAntennaEye.scale = 0.2;

        // draw eyes on the face
        my.sprite.eye1 = this.add.sprite(this.bodyX + 40, this.bodyY - 60, "monsterParts", "eye_yellow.png");
        my.sprite.eye1.scale = 0.3;

        my.sprite.eye2 = this.add.sprite(this.bodyX - 40, this.bodyY - 60, "monsterParts", "eye_yellow.png");
        my.sprite.eye2.scale = 0.3;

        my.sprite.eye3 = this.add.sprite(this.bodyX + 20, this.bodyY - 30, "monsterParts", "eye_yellow.png");
        my.sprite.eye3.scale = 0.6;

        my.sprite.eye4 = this.add.sprite(this.bodyX - 20, this.bodyY - 30, "monsterParts", "eye_yellow.png");
        my.sprite.eye4.scale = 0.6;

        my.sprite.eye5 = this.add.sprite(this.bodyX, this.bodyY - 70, "monsterParts", "eye_yellow.png");
        my.sprite.eye5.scale = 0.6;

        // draw mouth
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 80, "monsterParts", "mouth_closed_happy.png");

        my.sprite.fang = this.add.sprite(this.bodyX, this.bodyY + 80, "monsterParts", "mouthJ.png");
        my.sprite.fang.visible = false;
        
        // draw nose
        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "nose_yellow.png");

        // set input callbacks for smiling/fanging
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.smile.visible = true;
            my.sprite.fang.visible = false;
        });
        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.smile.visible = false;
            my.sprite.fang.visible = true;
        });

        // set A and D keys
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        // poll for A key
        if (this.aKey.isDown) {
            this.bodyX -= MONSTER_MOVE_SPEED;
            for (let spr in my.sprite) {
                my.sprite[spr].x -= MONSTER_MOVE_SPEED;
            }
        }
        // poll for D key
        if (this.dKey.isDown) {
            this.bodyX += MONSTER_MOVE_SPEED;
            for (let spr in my.sprite) {
                my.sprite[spr].x += MONSTER_MOVE_SPEED;
            }
        }
    }

}