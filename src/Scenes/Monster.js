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
        my.sprite.leftArm = this.add.sprite(this.bodyX - 120, this.bodyY - 20, "monsterParts", "arm_yellowA.png");
        my.sprite.leftArm.angle = 150;

        // draw right leg
        my.sprite.rightLeg = this.add.sprite(this.bodyX + 60, this.bodyY + 160, "monsterParts", "leg_redA.png");

        // draw left leg
        my.sprite.leftLeg = this.add.sprite(this.bodyX - 60, this.bodyY + 160, "monsterParts", "leg_redA.png");
        my.sprite.leftLeg.flipX = true;

        // draw body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");

        // draw eyes
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
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}