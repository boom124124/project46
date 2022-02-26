var body
var hair
var clothes
var expression
var hairAcc
var earAcc
var faceAcc
var backgroundOptions
var backgroundSet
var eyeColor
var neckAcc
var backgroundColor = 200


function preload() {
  test1 = loadAnimation("img1.png");
  test2 = loadAnimation("img2.png");
  test3 = loadAnimation("img3.png");
  test4 = loadAnimation("img4.png");
  test5 = loadAnimation("img5.png");
  test6 = loadAnimation("img6.png");
}

function setup() {
  createCanvas(1017, 825);

  sideOptions = createSprite(833, 350, 370, 1017);
  sideOptions.shapeColor = "#FFFACD"

  //background changing stuff

  // backgroundOptions = createInput("").attribute("placeholder", "#Enter Hex Here");
  // backgroundOptions.position(750, 20)
  // callBackground = createImg("enter_button.png")
  // callBackground.position(795, 50);
  // callBackground.size(40, 25);
  // callBackground.mouseClicked(backgroundChange)

  backgroundChange = createButton("Click to change the color of the background");
  backgroundChange.position(700, 30);
  backgroundChange.size(250, 40)


  // skin color changing stuff

  body = createSprite(300, 500);
  body.addAnimation("test1", test1);
  body.addAnimation("test2", test2);
  body.addAnimation("test3", test3);
  body.addAnimation("test4", test4);
  body.addAnimation("test5", test5);
  body.addAnimation("test6", test6);

  //green skin button
  bodyGreenButton = createButton("green skin");
  bodyGreenButton.position(650, 90);
  bodyGreenButton.mouseClicked(bodyColorChange_green);

  //puce skin button
  bodyPuceButton = createButton("puce skin");
  bodyPuceButton.position(760, 90);
  bodyPuceButton.mouseClicked(bodyColorChange_puce);

  //puce skin button
  bodySeafoamButton = createButton("seafoam skin");
  bodySeafoamButton.position(870, 90);
  bodySeafoamButton.mouseClicked(bodyColorChange_seafoam);


  //preview for green skin
  greenPreview = createSprite(744, 100);
  greenPreview.addAnimation("test1", test1);
  greenPreview.scale = .20;

  //preview for purple skin
  pucePreview = createSprite(855, 100);
  pucePreview.addAnimation("test2", test2);
  pucePreview.scale = .20;

  //preview for seafoam skin
  seafoamPreview = createSprite(978, 100);
  seafoamPreview.addAnimation("test3", test3);
  seafoamPreview.scale = .20;

  // SECOND ROW OF BODY COLOR CHANGE

  //cyan skin button
  bodyCyanButton = createButton("cyan skin");
  bodyCyanButton.position(650, 130);
  bodyCyanButton.mouseClicked(bodyColorChange_cyan);

  //magenta skin button
  bodyMagentaButton = createButton("magenta skin");
  bodyMagentaButton.position(760, 130);
  bodyMagentaButton.mouseClicked(bodyColorChange_magenta);

  //red skin button
  bodyRedButton = createButton("red skin");
  bodyRedButton.position(890, 130);
  bodyRedButton.mouseClicked(bodyColorChange_red);

  //preview for cyan skin
  cyanPreview = createSprite(741, 140);
  cyanPreview.addAnimation("test4", test4);
  cyanPreview.scale = .20;

  //preview for magenta skin
  magentaPreview = createSprite(873, 140);
  magentaPreview.addAnimation("test5", test5);
  magentaPreview.scale = .20;

  //preview for red skin
  redPreview = createSprite(975, 140);
  redPreview.addAnimation("test6", test6);
  redPreview.scale = .17;


  //hair type and color stuff

  //FIRST ROW FOR THE HAIR COLOR STUFF : BROWN

  hair = createSprite(300, 200);

  hairBrown1 = createButton("hair1");
  hairBrown1.position(650, 185);
  //hairBrown1.mouseClicked(hairChange_brown1);

  hairBrown2 = createButton("hair2");
  hairBrown2.position(715, 185);
  //hairBrown1.mouseClicked(hairChange_brown2);

  hairBrown3 = createButton("hair3");
  hairBrown3.position(790, 185);
  //hairBrown3.mouseClicked(hairChange_brown3);

  hairBrown4 = createButton("hair4");
  hairBrown4.position(865, 185);
  //hairBrown4.mouseClicked(hairChange_brown4);

  hairBrown5 = createButton("hair5");
  hairBrown5.position(940, 185);
  //hairBrown5.mouseClicked(hairChange_brown5);

  //SECOND ROW FOR THE HAIR COLOR STUFF : BLACK

  hairBlack1 = createButton("hair1");
  hairBlack1.position(650, 215);
  //hairBlack1.mouseClicked(hairChange_black1);

  hairBlack2 = createButton("hair2");
  hairBlack2.position(715, 215);
  //hairBlack2.mouseClicked(hairChange_black2);

  hairBlack3 = createButton("hair3");
  hairBlack3.position(790, 215);
  //hairBlack3.mouseClicked(hairChange_black3);

  hairBlack4 = createButton("hair4");
  hairBlack4.position(865, 215);
  //hairBlack4.mouseClicked(hairChange_black4);

  hairBlack5 = createButton("hair5");
  hairBlack5.position(940, 215);
  //hairBlack5.mouseClicked(hairChange_black5);

  //THIRD ROW FOR THE HAIR COLOR STUFF : BLOND

  hairBlond1 = createButton("hair1");
  hairBlond1.position(650, 245);
  //hairBlond1.mouseClicked(hairChange_blond1);

  hairBlond2 = createButton("hair2");
  hairBlond2.position(715, 245);
  //hairBlond2.mouseClicked(hairChange_blond2);

  hairBlond3 = createButton("hair2");
  hairBlond3.position(790, 245);
  //hairBlond3.mouseClicked(hairChange_blond3);

  hairBlond4 = createButton("hair4");
  hairBlond4.position(865, 245);
  //hairBlond4.mouseClicked(hairChange_blond4);

  hairBlond5 = createButton("hair5");
  hairBlond5.position(940, 245);
  //hairBlond5.mouseClicked(hairChange_blond5);

  //FOURTH ROW FOR THE HAIR COLOR STUFF : AUBURN

  hairAuburn1 = createButton("hair1");
  hairAuburn1.position(650, 275);
  //hairAuburn1.mouseClicked(hairChange_auburn1);

  hairAuburn2 = createButton("hair2");
  hairAuburn2.position(715, 275);
  //hairAuburn2.mouseClicked(hairChange_auburn2);

  hairAuburn3 = createButton("hair3");
  hairAuburn3.position(790, 275);
  //hairAuburn3.mouseClicked(hairChange_auburn3);

  hairAuburn4 = createButton("hair4");
  hairAuburn4.position(865, 275);
  //hairAuburn4.mouseClicked(hairChange_auburn4);

  hairAuburn5 = createButton("hair5");
  hairAuburn5.position(940, 275);
  //hairAuburn5.mouseClicked(hairChange_auburn5);

  //FIFTH ROW FOR THE HAIR COLOR STUFF : DUSTY BLONDE

  hairDustyBlond1 = createButton("hair1");
  hairDustyBlond1.position(650, 305);
  //hairDustyBlonde1.mouseClicked(hairChange_dustyblonde1);

  hairDustyBlond2 = createButton("hair2");
  hairDustyBlond2.position(715, 305);
  //hairDustyBlonde2.mouseClicked(hairChange_dustyblonde2);

  hairDustyBlond3 = createButton("hair3");
  hairDustyBlond3.position(790, 305);
  //hairDustyBlonde3.mouseClicked(hairChange_dustyblonde3);

  hairDustyBlond4 = createButton("hair4");
  hairDustyBlond4.position(865, 305);
  //hairDustyBlonde4.mouseClicked(hairChange_dustyblonde4);

  hairDustyBlond5 = createButton("hair5");
  hairDustyBlond5.position(940, 305);
  //hairDustyBlonde5.mouseClicked(hairChange_dustyblonde5);

  //ACCESSORIES

  //hair accessories : ROW ONE

  headband = createButton("headband");
  headband.position(650, 370)
  // headband.mouseClicked(headAccChange_headband);

  hat = createButton("hat");
  hat.position(762, 370);
  // hat.mouseClicked(headAccChange_hat);

  beret = createButton("beret");
  beret.position(830, 370)
  // beret.mouseClicked(headAccChange_beret);

  beanie = createButton("beanie");
  beanie.position(920, 370);
  //  beanie.mouseClicked(headAccChange_beanie);

  //ear accessories : ROW TWO

  earring1 = createButton("earring1");
  earring1.position(650, 400);
  //earring1.mouseClicked(earAccChange_earring1);

  earring2 = createButton("earring2");
  earring2.position(740, 400);
  //earring2.mouseClicked(earAccChange_earring2);

  earring3 = createButton("earring3");
  earring3.position(830, 400);
  //earring3.mouseClicked(earAccChange_earring3);

  earring4 = createButton("earring4");
  earring4.position(920, 400);
  //earring4.mouseClicked(earAccChange_earring4);

  //face accessories : ROW THREE

  glasses1 = createButton("glasses1")
  glasses1.position(650, 430);
  // glasses1.mouseClicked(faceAccChange_glasses1);
  
  glasses2 = createButton("glasses2")
  glasses2.position(740, 430);
  // glasses2.mouseClicked(faceAccChange_glasses2);
  
  glasses3 = createButton("glasses3")
  glasses3.position(830, 430);
  // glasses3.mouseClicked(faceAccChange_glasses3);
  
  glasses4 = createButton("glasses4")
  glasses4.position(920, 430);
  // glasses4.mouseClicked(faceAccChange_glasses4);

  //CLOTHES
  
  
  //

  clothes = createSprite(300, 600);


  expression = createSprite(300, 450);


  hairAcc = createSprite(300, 800);


  earAcc = createSprite(300, 750);


  faceAcc = createSprite(300, 700);


  eyeColor = createSprite(300, 950);

  neckAcc = createSprite(300, 870)
}

function draw() {
  background(backgroundColor);

  backgroundChange.mouseClicked(backgroundChangeFunction);

  drawSprites();
}

//backgroundChangeFunction

function backgroundChangeFunction() {
  backgroundColor = rgb(random(0, 255), random(0, 255), random(0, 255));
}

//FUNCTIONS FOR BODY COLOR TO CHANGE

//green
function bodyColorChange_green() {
  body.changeAnimation("test1", test1);
}
//puce
function bodyColorChange_puce() {
  body.changeAnimation("test2", test2);
}
//seafoam
function bodyColorChange_seafoam() {
  body.changeAnimation("test3", test3);
}

//cyan
function bodyColorChange_cyan() {
  body.changeAnimation("test4", test4);
}
//magenta
function bodyColorChange_magenta() {
  body.changeAnimation("test5", test5);
}
//red
function bodyColorChange_red() {
  body.changeAnimation("test6", test6);
}

//FUNCTIONS FOR THE HAIR TO CHANGE

//brown

// function hairChange_brown1(){
//   hair.changeAnimation("",)
// }

//black

//blond

//auburn

//red