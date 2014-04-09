var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.background = new Background();
        this.background.setPosition( new cc.Point( 750, 300 ) );

        this.floor1 = new Floor_1();
        this.floor1.setAnchorPoint(0.5,0);
        this.floor1.setPosition( new cc.Point(650,140));

        this.kyoda = new Kyoda(750,140);
        this.kyoda.setAnchorPoint(0.5,0);
        this.kyoda.scheduleUpdate();

        this.gum = new Gum();
        this.gum.setAnchorPoint(0.5,0);
        this.gum.randomPosition();
        this.gum.scheduleUpdate();


        this.scheduleUpdate();

        this.setKeyboardEnabled(true);
        this.addChild( this.background );
        this.addChild( this.floor1 );
        this.addChild( this.gum);
        this.addChild( this.kyoda );
                
        return true;
    },

    onKeyDown: function(e){
        if( e == cc.KEY.left)
        {
            this.kyoda.setDirection( true, Kyoda.DIR.LEFT );
            this.kyoda.flipCharacter(Kyoda.DIR.LEFT);
        }
        if( e == cc.KEY.right)
        {
            this.kyoda.setDirection( true, Kyoda.DIR.RIGHT );
            this.kyoda.flipCharacter(Kyoda.DIR.RIGHT);
        }
    },

    onKeyUp: function(e){
        if( e == cc.KEY.left)
        {
            this.kyoda.setDirection( false, Kyoda.DIR.LEFT );
        }
        if( e == cc.KEY.right)
        {
            this.kyoda.setDirection( false, Kyoda.DIR.RIGHT );
        }

        this.kyoda.setDirection( false, Kyoda.DIR.STILL );
    },

    update: function(){
        if(this.gum.closeTo(this.kyoda)){
            this.gum.randomPosition();
        }
    }
});


var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

