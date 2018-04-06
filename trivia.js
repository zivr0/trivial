(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"trivia_atlas_", frames: [[0,0,802,74],[309,76,307,62],[0,76,307,62],[804,0,158,32]]}
];


// symbols:



(lib.black = function() {
	this.spriteSheet = ss["trivia_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Group2 = function() {
	this.spriteSheet = ss["trivia_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Group4 = function() {
	this.spriteSheet = ss["trivia_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Group5 = function() {
	this.spriteSheet = ss["trivia_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wannastopreal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group2();
	this.instance.parent = this;
	this.instance.setTransform(-123.8,-25,0.806,0.806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.87,scaleY:0.87,x:-134,y:-27},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:-123.8,y:-25},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.8,-25,247.6,50);


(lib.wannastopexamp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group5();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleX:1.11,scaleY:1.11,x:-9,y:-2},0).wait(1).to({scaleX:1,scaleY:1,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158,32);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.047)").s().p("EhlRAA8IAAh3MDKjAAAIAAB3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-648.1,-6,1296.4,12), null);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Group4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,307,62);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("http://googleforms.com", "48px 'Assistant'", "#243EE4");
	this.text.textAlign = "right";
	this.text.lineHeight = 65;
	this.text.lineWidth = 482;
	this.text.parent = this;
	this.text.setTransform(240.1,-27.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#243EE4").ss(3,1,1).p("AypAAIBZAAA1KAAIBFAAAs+AAIHpAAEgkzAAAIIuAAA6yAAID+AAAhTAAMAmHAAA");
	this.shape.setTransform(0.5,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#243EE4").ss(3,1,1).p("EgmlgFEMBNLAAAIAAKJMhNLAAAg");
	this.shape_1.setTransform(-2.8,7.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#243EE4").s().p("EgmlAFFIAAqIMBNLAAAIAAKIg");
	this.shape_2.setTransform(-2.8,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape},{t:this.text}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-244,-29.4,486.1,66.8);


(lib.an_Label = function(options) {
	this._element = new $.an.Label(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.distext = new cjs.Text("ירושלים", "bold 33px 'Assistant'", "#FFFFFF");
	this.distext.name = "distext";
	this.distext.textAlign = "center";
	this.distext.lineHeight = 45;
	this.distext.lineWidth = 750;
	this.distext.parent = this;
	this.distext.setTransform(397.2,14.5);

	this.instance = new lib.black();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.distext}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.block, new cjs.Rectangle(0,0,802,74), null);


(lib.sc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.vcodetext = new lib.an_Label({'id': 'vcodetext', 'label':'Label', 'disabled':false, 'visible':true, 'class':'ui-label'});

	this.vcodetext.setTransform(30.7,-63.5,3.4,3.4,0,0,0,49.9,10.9);

	this.linkout = new lib.link();
	this.linkout.name = "linkout";
	this.linkout.parent = this;
	this.linkout.setTransform(1,239.5);
	new cjs.ButtonHelper(this.linkout, 0, 1, 2, false, new lib.link(), 3);

	this.text = new cjs.Text("עכשיו יש להדביק את הקוד שלך בלינק הבא", "48px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 65;
	this.text.lineWidth = 789;
	this.text.parent = this;
	this.text.setTransform(388.5,125.6);

	this.text_1 = new cjs.Text("הקוד שלך הוא", "48px 'Assistant'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 65;
	this.text_1.lineWidth = 302;
	this.text_1.parent = this;
	this.text_1.setTransform(590.2,-51.5);

	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(2,77);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2,-111);

	this.text_2 = new cjs.Text("!זהו כמעט נגמר", "bold 120px 'Assistant'", "#171717");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 159;
	this.text_2.lineWidth = 814;
	this.text_2.parent = this;
	this.text_2.setTransform(364,-310.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.text},{t:this.linkout},{t:this.vcodetext}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sc3, new cjs.Rectangle(-650.1,-312.8,1300.4,589.7), null);


(lib.sc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.wannastop = new lib.wannastopreal();
	this.wannastop.name = "wannastop";
	this.wannastop.parent = this;
	this.wannastop.setTransform(123.8,-35);
	new cjs.ButtonHelper(this.wannastop, 0, 1, 2, false, new lib.wannastopreal(), 3);

	this.geza = new cjs.Text("?מהי עיר הבירה של ישראל", "bold 33px 'Assistant'");
	this.geza.name = "geza";
	this.geza.textAlign = "right";
	this.geza.lineHeight = 45;
	this.geza.lineWidth = 1121;
	this.geza.parent = this;
	this.geza.setTransform(1094.4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.geza},{t:this.wannastop}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sc2, new cjs.Rectangle(-28.3,-62,1124.7,176), null);


(lib.sc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.lol = new cjs.Text("", "33px 'Assistant'", "#666666");
	this.lol.name = "lol";
	this.lol.textAlign = "center";
	this.lol.lineHeight = 45;
	this.lol.lineWidth = 612;
	this.lol.parent = this;
	this.lol.setTransform(501.1,258.6);

	this.text = new cjs.Text("זיו רוזוב ואור בן ציון", "28px 'Assistant'");
	this.text.lineHeight = 39;
	this.text.lineWidth = 195;
	this.text.parent = this;
	this.text.setTransform(774.9,425);

	this.start = new lib.start();
	this.start.name = "start";
	this.start.parent = this;
	this.start.setTransform(486.5,552.3,1,1,0,0,0,153.5,31);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.start(), 3);

	this.wannastpex = new lib.wannastopexamp();
	this.wannastpex.name = "wannastpex";
	this.wannastpex.parent = this;
	this.wannastpex.setTransform(114,209.3,1,1,0,0,0,79,16);
	new cjs.ButtonHelper(this.wannastpex, 0, 1, 2, false, new lib.wannastopexamp(), 3);

	this.text_1 = new cjs.Text("בהצלחה", "28px 'Assistant'");
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 90;
	this.text_1.parent = this;
	this.text_1.setTransform(880.6,384.4);

	this.text_2 = new cjs.Text("נא לא לסגור את הדפדפן ולשים לב להנחיות הסיום הנחיות הסיום", "bold 33px 'Assistant'", "#961111");
	this.text_2.lineHeight = 45;
	this.text_2.lineWidth = 808;
	this.text_2.parent = this;
	this.text_2.setTransform(162.6,326.2);

	this.text_3 = new cjs.Text("אתה מפסיק כשנמאס לך", "bold 28px 'Assistant'");
	this.text_3.lineHeight = 39;
	this.text_3.lineWidth = 317;
	this.text_3.parent = this;
	this.text_3.setTransform(462.7,190.1);

	this.text_4 = new cjs.Text(",הנך עומד לענות על מספר שאלות טריויה פשוטות, ברגע שלחצת על תשובה .התשובה תקלט מיד ואין אפשרות לחזור אחורה או לשנות את התשובה שנקלטה\nכמו כן אין הגבלת זמן -                                                      על ידי לחיצה על הכפתור", "28px 'Assistant Light'");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 39;
	this.text_4.lineWidth = 968;
	this.text_4.parent = this;
	this.text_4.setTransform(970.1,111.7);

	this.text_5 = new cjs.Text("שלום משתתף יקר", "bold 70px 'Assistant'");
	this.text_5.lineHeight = 94;
	this.text_5.lineWidth = 491;
	this.text_5.parent = this;
	this.text_5.setTransform(240.4,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.wannastpex},{t:this.start},{t:this.text},{t:this.lol}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sc1, new cjs.Rectangle(0,0,972.1,583.3), null);


(lib.distand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.disty = new lib.block();
	this.disty.name = "disty";
	this.disty.parent = this;
	this.disty.setTransform(401,37,1,1,0,0,0,401,37);

	this.dist = new lib.block();
	this.dist.name = "dist";
	this.dist.parent = this;
	this.dist.setTransform(401,37,1,1,0,0,0,401,37);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.disty}]}).to({state:[{t:this.dist}]},1).to({state:[{t:this.dist}]},1).to({state:[{t:this.dist}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,802,74);


// stage content:
(lib.trivia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		$("#canvas").css("direction", "rtl");
		
		
		var home= this;
		
		var counter = 0;
		
		
		var qb = [
		["כמה שיניים יש לאדם בוגר","27","32","42","23","ftff"],
		["דיג'ירידו הוא?","אל מהמסורת הקמבודית","שמו האמצעי של ראש ממשלת קובה","כלי נגינה אבורג'יני","עיר בבורמה","fftf"],
		["איך קראו לשימפנזת המחמד של מייקל ג'קסון?","יעקב","ג'ייסון","מייקל","באבלס","ffft"],
		["בלוגו של גוגל, מהו צבעה של האות L","ירוק","אדום","כחול","צהוב","tfff"],
		["מהי האוניברסיטה העתיקה ביותר בעולם?","אוניברסיטת קיימברידג'","אוניברסיטת בולוניה","אוניברסיטת אוקספורד","אוניברסיטת פירנצה","ftff"],
		["איך קוראים לחללית של האן סולו ממלחמת הכוכבים?","זרגון 17","מילניום פאלקון","האקסבייר","צ'ובאקה","ftff"],
		["מה היה שמו הפרטי של פלורנטין (שעל שמו קרוי הרחוב)?","שלמה'","יעקב","משה","דוד","ffft"],
		["מי מבין הבאים לא זכה בפרס נובל?","יאסר ערפאת'","אלברט איינשטיין","ווינסטון צ'רצ'יל","מהטמה גנדי","fftf"],
		["מי מהחיות הבאות נחשבות לחרק?","אלמנה שחורה","עקרב צהוב","שפרירית","צפע","fftf"],
		["מי מהחיות הבאות היונק הגדול ביותר?","צלופח חשמלי","כריש לבן","כריש לוויתני","ברווזן","ffft"],
		["איזה סט קלפים חזק יותר בפוקר מבין הבאים?","נסיך תלתן, נסיך לב, 7 תלתן, 7 לב, 6 לב","מלך תלתן, מלך עלה, מלך לב, 6 תלתן, אס עלה","נסיך תלתן, 9 לב, מלכה עלה, 10 עלה","מלך תלתן, נסיך תלתן, 10 תלתן, 7 תלתן, אס עלה","fftf"],
		["איזה אוקיאנוס נחשב לעמוק ביותר?","השקט","האטלנטי","ההודי","הדרומי","tfff"],
		["אילו מבין המדינות הבאות לא הייתה במלחמה משנת 1814?","פרו","שוודיה","שוויצריה","מלטה","ftff"],
		["באיזו שנה שנה נפטר הזמר המפורסם פרדי מרקורי?","1990","1987","1991","1989","fftf"],
		["באיזו שנה שנה נפטר הזמר המפורסם פרדי מרקורי?","1990","1987","1991","1989","fftf"],
		
		];
		
		var qnum = 0;
		var timer;
		var totaltime=0;
		var score=0;
		var lastans="";
		
		instructions();
		
		
		
		function instructions()
		{
		var setter = new lib.sc1();
		stage.addChild(setter);
		setter.name="screen1";
			
		var screen1 = stage.getChildByName("screen1");
		
		screen1.start.addEventListener("click",function()
		{
		stage.removeChild(setter);
		setter = new lib.sc2();
		setter.y=100;
		stage.addChild(setter);
		setter.name="screen2";
			
		setter.wannastop.addEventListener("click",quitter);
		
		
		
		for(i=1;i<5;i++)
		{
		var disters = new lib.distand();
		disters.x=150;
		disters.y=(i*110);
		disters.name="dist"+i;
		setter.addChild(disters);
		}
			
		var timer = setInterval(addsec,1000);
		nextq();
		});
			
		screen1.wannastpex.addEventListener("click",function()
		{
		
		
		
		if(counter==0)
		{
		counter++;
		screen1.lol.text="יפה בדיוק ככה"
		}
		else if(counter==1)
		{
		counter++;
		screen1.lol.text="בסדר הבנו"
			
		}
		else if(counter==2)
		{
		counter++;
		screen1.lol.text="טוב זאת לא המטרה בוא נתחיל"
			
		}
		else if(counter==3)
		{
		counter++;
		screen1.lol.text="עוד מעט יגמרו המשפטים"
			
		}
		else if(counter==4)
		{
		counter++;
		screen1.lol.text="אבל עדיין לא"
			
		}
		else if(counter==5)
		{
		counter++;
		screen1.lol.text="יש עוד טיפה"
			
		}
		else if(counter==6)
		{
		counter++;
		screen1.lol.text="האמת שיש אינסוף כי יש פה טריק"
			
		}
		else if(counter==7)
		{
		counter++;
		screen1.lol.text="הטריק לא מתוחכם אבל";
			
		}
		else if(counter>100&&counter<110)
		{
		counter++;
		screen1.lol.text="ממש משעמם לכם אה?"	
			
		}
		else if(counter>7)
		{
		counter++;
		screen1.lol.text="זה טריק מספר "+(counter-8).toString();
		}
		
		
		
			
		});
			
		}
		
		
		function addsec()
		{
		
		totaltime++;
			
		}
		
		function nextq()
		{
		var screen2=stage.getChildByName("screen2");
		
		screen2.geza.text=qb[qnum][0];
		
		
		for(i=1;i<5;i++)
		{
		screen2.getChildByName("dist"+i).disty.distext.text=qb[qnum][i];
		screen2.getChildByName("dist"+i).addEventListener("click",checkans);
		if(qb[qnum][5][i-1]=="t")
		{
		lastans=screen2.getChildByName("dist"+i).name;
		screen2.getChildByName("dist"+i).name="correct";
		}
			
		}
		
			
			
		}
		
		
		
		function checkans(e)
		{
			
		var screen2=stage.getChildByName("screen2");	
			
		if(e.currentTarget.name=="correct")
		{
		
		
		score++;
		}
		screen2.getChildByName("correct").name=lastans;	
		for(i=1;i<5;i++)
		{
		screen2.getChildByName("dist"+i).removeEventListener("click",checkans);
		}	
		
		
		qnum++;
		
		if(qnum==qb.length)
		{
		qnum=0;	
		}
		
		nextq();
			
		}
		
		
		function quitter()
		{
		clearInterval(timer);
		stage.removeChild(stage.getChildByName("screen2"));
		
		var setter = new lib.sc3();
		setter.x=650;
		setter.y=342;
		stage.addChild(setter);
		setter.name="screen3";
		
		var minutes = Math.floor(totaltime / 60).toString();
		var seconds = (totaltime - minutes * 60).toString();
			
		if(minutes<10)
		{
		minutes="o"+minutes;
		}
		if(seconds<10)
		{
		seconds="o"+seconds;
		}
		
		minutes=minutes.split("");
		seconds=seconds.split("");
			
		for(i=0;i<2;i++)
		{
		if(minutes[i]==1)
		{
		minutes[i]="i";
		}
		else if(minutes[i]==0)
		{
		minutes[i]="o";
		}
		else if(minutes[i]==3)
		{
		minutes[i]="e";
		}
		else if(minutes[i]==4)
		{
		minutes[i]="a";
		}
		else if(minutes[i]==5)
		{
		minutes[i]="s";
		}
		else if(minutes[i]==7)
		{
		minutes[i]="l";
		}
			
		}
		
		for(i=0;i<2;i++)
		{
		if(seconds[i]==1)
		{
		seconds[i]="i";
		}
		else if(seconds[i]==0)
		{
		seconds[i]="o";
		}
		else if(seconds[i]==3)
		{
		seconds[i]="e";
		}
		else if(seconds[i]==4)
		{
		seconds[i]="a";
		}
		else if(seconds[i]==7)
		{
		seconds[i]="l";
		}
		else if(seconds[i]==5)
		{
		seconds[i]="s";
		}	
		}
			
		
			
			
			
		var timecalc=minutes[0]+minutes[1]+seconds[0]+seconds[1];	
		
		
		setTimeout(function(){
		$("#vcodetext").text(timecalc);
		},30);
		setter.linkout.addEventListener("click",function()
		{
		window.open("https://goo.gl/forms/P0Up6ahZjJjcPMQ62", "_blank");
		});
			
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.css2 = new lib.an_CSS({'id': 'css2', 'href':'assets/csstrivia.css'});

	this.css2.setTransform(1424.4,332.1,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.css2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2013.9,680.6,101,23);
// library properties:
lib.properties = {
	id: '774055377D70C14EAEADEF55EB8672B9',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/trivia_atlas_.png?1523022082154", id:"trivia_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1523022082169", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1523022082169", id:"sdk/anwidget.js"},
		{src:"components/ui/src/label.js?1523022082169", id:"an.Label"},
		{src:"components/ui/src/css.js?1523022082169", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['774055377D70C14EAEADEF55EB8672B9'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;