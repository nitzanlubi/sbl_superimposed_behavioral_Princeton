/********************** 
 * Training_Task *
 **********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'training_task';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
msg="doh!"
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(get_sub_varsRoutineBegin());
flowScheduler.add(get_sub_varsRoutineEachFrame());
flowScheduler.add(get_sub_varsRoutineEnd());
flowScheduler.add(overall_instructionsRoutineBegin());
flowScheduler.add(overall_instructionsRoutineEachFrame());
flowScheduler.add(overall_instructionsRoutineEnd());
flowScheduler.add(part1_instructionsRoutineBegin());
flowScheduler.add(part1_instructionsRoutineEachFrame());
flowScheduler.add(part1_instructionsRoutineEnd());
const trials_part1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_part1LoopBegin(trials_part1LoopScheduler));
flowScheduler.add(trials_part1LoopScheduler);
flowScheduler.add(trials_part1LoopEnd);


flowScheduler.add(part1_instructions_2RoutineBegin());
flowScheduler.add(part1_instructions_2RoutineEachFrame());
flowScheduler.add(part1_instructions_2RoutineEnd());
flowScheduler.add(part1_compareRoutineBegin());
flowScheduler.add(part1_compareRoutineEachFrame());
flowScheduler.add(part1_compareRoutineEnd());
const skip_to_part4_debugLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(skip_to_part4_debugLoopBegin(skip_to_part4_debugLoopScheduler));
flowScheduler.add(skip_to_part4_debugLoopScheduler);
flowScheduler.add(skip_to_part4_debugLoopEnd);


























flowScheduler.add(part4_instructionsRoutineBegin());
flowScheduler.add(part4_instructionsRoutineEachFrame());
flowScheduler.add(part4_instructionsRoutineEnd());
flowScheduler.add(enc_instruction_screenRoutineBegin());
flowScheduler.add(enc_instruction_screenRoutineEachFrame());
flowScheduler.add(enc_instruction_screenRoutineEnd());
flowScheduler.add(enc_inst_2RoutineBegin());
flowScheduler.add(enc_inst_2RoutineEachFrame());
flowScheduler.add(enc_inst_2RoutineEnd());
flowScheduler.add(get_stim_listRoutineBegin());
flowScheduler.add(get_stim_listRoutineEachFrame());
flowScheduler.add(get_stim_listRoutineEnd());
const trials_encLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_encLoopBegin(trials_encLoopScheduler));
flowScheduler.add(trials_encLoopScheduler);
flowScheduler.add(trials_encLoopEnd);




flowScheduler.add(ret_inst_genRoutineBegin());
flowScheduler.add(ret_inst_genRoutineEachFrame());
flowScheduler.add(ret_inst_genRoutineEnd());
flowScheduler.add(ret_inst_1RoutineBegin());
flowScheduler.add(ret_inst_1RoutineEachFrame());
flowScheduler.add(ret_inst_1RoutineEnd());
flowScheduler.add(ret_inst_2RoutineBegin());
flowScheduler.add(ret_inst_2RoutineEachFrame());
flowScheduler.add(ret_inst_2RoutineEnd());
flowScheduler.add(ret_inst_3RoutineBegin());
flowScheduler.add(ret_inst_3RoutineEachFrame());
flowScheduler.add(ret_inst_3RoutineEnd());
flowScheduler.add(ret_inst_4RoutineBegin());
flowScheduler.add(ret_inst_4RoutineEachFrame());
flowScheduler.add(ret_inst_4RoutineEnd());
flowScheduler.add(ret_inst_5RoutineBegin());
flowScheduler.add(ret_inst_5RoutineEachFrame());
flowScheduler.add(ret_inst_5RoutineEnd());
flowScheduler.add(ret_inst_6RoutineBegin());
flowScheduler.add(ret_inst_6RoutineEachFrame());
flowScheduler.add(ret_inst_6RoutineEnd());
const trials_retrievalLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_retrievalLoopBegin(trials_retrievalLoopScheduler));
flowScheduler.add(trials_retrievalLoopScheduler);
flowScheduler.add(trials_retrievalLoopEnd);











flowScheduler.add(end_screen_2RoutineBegin());
flowScheduler.add(end_screen_2RoutineEachFrame());
flowScheduler.add(end_screen_2RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'scene_stims.xlsx', 'path': 'scene_stims.xlsx'},
    {'name': 'stimuli/scenes/scene_J1.png', 'path': 'stimuli/scenes/scene_J1.png'},
    {'name': 'stimuli/scenes/scene_J2.png', 'path': 'stimuli/scenes/scene_J2.png'},
    {'name': 'stimuli/scenes/scene_U1.png', 'path': 'stimuli/scenes/scene_U1.png'},
    {'name': 'stimuli/scenes/scene_U2.png', 'path': 'stimuli/scenes/scene_U2.png'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stimuli/instructions_imgs/inst1.png', 'path': 'stimuli/instructions_imgs/inst1.png'},
    {'name': 'stimuli/instructions_imgs/inst2.png', 'path': 'stimuli/instructions_imgs/inst2.png'},
    {'name': 'stimuli/instructions_imgs/inst3.png', 'path': 'stimuli/instructions_imgs/inst3.png'},
    {'name': 'stimuli/instructions_imgs/inst4.png', 'path': 'stimuli/instructions_imgs/inst4.png'},
    {'name': 'stimuli/instructions_imgs/inst5.png', 'path': 'stimuli/instructions_imgs/inst5.png'},
    {'name': 'stimuli/instructions_imgs/inst6.png', 'path': 'stimuli/instructions_imgs/inst6.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);

async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}

async function experimentInit() {
  // Initialize components for Routine "get_sub_vars"
  get_sub_varsClock = new util.Clock();
  // Run 'Begin Experiment' code from code_get_sub_vars
  import * as pd from 'pandas';
  import * as random from 'random';
  subnum = expInfo["participant"];
  study_scenes = `stimuli/cond_lists/scene_names_sub_${subnum}.csv`;
  console.log("scene labels file:", study_scenes);
  
  // Initialize components for Routine "overall_instructions"
  overall_instructionsClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: 'Welcome to the items and scenes memory experiment!\n\nIn this first task, you will learn the names and visual details of four scenes.\n\nYou will then practice visualizing the scenes in detail.\n\nFinally, you will have a short practice run of the next tasks which you will undertake later in the study session.\n\nPress SPACEBAR to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "part1_instructions"
  part1_instructionsClock = new util.Clock();
  text_instructions_part1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_part1',
    text: 'Part 1.\nIn this part, you will learn about four scenes.\n\nPlease pay attention to the name and to the visual details of each scene. The name will appear above the image.\n\nPress SPACEBAR to go to the next scene after you have fully learned the current scene.\n\nYou will be asked to name and visualize them in detail later on.\n\nPress SPACEBAR to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instructions_part1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "part1"
  part1Clock = new util.Clock();
  scene_image_part1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'scene_image_part1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, (- 0.05)], size : [1.2, 0.675],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  scene_name_part1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'scene_name_part1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_scenename = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_scenename',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  text_memorize = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_memorize',
    text: 'Try to memorize the name and the visual details of the scene.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.43)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_sceneLearn = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "part1_instructions_2"
  part1_instructions_2Clock = new util.Clock();
  text_instructions_part1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_part1_2',
    text: 'Now you will view all four scenes at once to compare them.\n\nPlease pay attention to the name and to the visual details of each scene.\n\nPress SPACEBAR to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_instructions_part1_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "part1_compare"
  part1_compareClock = new util.Clock();
  image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image1', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.35), 0.2], size : [0.6, 0.3375],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image2', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.35, 0.2], size : [0.6, 0.3375],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  image3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image3', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [(- 0.35), (- 0.3)], size : [0.6, 0.3375],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  image4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image4', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0.35, (- 0.3)], size : [0.6, 0.3375],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  textbox1 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox1',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.35), 0.42], 
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  textbox2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox2',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.35, 0.42], 
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  textbox3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox3',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [(- 0.35), (- 0.08)], 
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  textbox4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox4',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0.35, (- 0.08)], 
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  key_compare = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "part2_instructions"
  part2_instructionsClock = new util.Clock();
  text_instructions_part2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_part2',
    text: 'Part 2.\n\nIn this part, you will be asked to choose the correct name for each scene.\n\nPress SPACEBAR to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "part2"
  part2Clock = new util.Clock();
  scene_part2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'scene_part2', units : 'pix', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [960, 540],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "part2_question"
  part2_questionClock = new util.Clock();
  text_part2_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_part2_question',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_part2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code_part2
  total_acc = 0;
  logic_vec = ([false] * 4);
  
  // Initialize components for Routine "part2_feedback"
  part2_feedbackClock = new util.Clock();
  text_part2_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_part2_feedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "part3_instructions"
  part3_instructionsClock = new util.Clock();
  text_part3_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_part3_instructions',
    text: 'Part 3. \n\nIn this part, you will practice visualizing the scenes in detail.\n\nPress SPACEBAR to continue.\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_part3_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reset_vis_vars"
  reset_vis_varsClock = new util.Clock();
  // Run 'Begin Experiment' code from code_reset_vars
  count = 0;
  
  // Initialize components for Routine "skip_answered_questions"
  skip_answered_questionsClock = new util.Clock();
  // Initialize components for Routine "blank1000"
  blank1000Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "part3_visualize"
  part3_visualizeClock = new util.Clock();
  text_visualize = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_visualize',
    text: 'Please visualize the scene in as much detail as possible',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.35], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  textbox_scene_name = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_scene_name',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  // Initialize components for Routine "part3_rate"
  part3_rateClock = new util.Clock();
  text_rate = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_rate',
    text: 'How vivid was your visualization?\n\nAnswer the question by pressing "1", "2", "3", or "4"\n\n1. could not visualize\n2. some visualization\n3. good visualization\n4. vivid visualization\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_rate = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "part3_question"
  part3_questionClock = new util.Clock();
  text_question = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_question',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_option = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_option',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.18)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_question = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Choose the correct answer',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: 1.2, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "study_again"
  study_againClock = new util.Clock();
  study_image1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'study_image1', units : 'pix', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [960, 540],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  study_name1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'study_name1',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  key_sceneLearn_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: "Press SPACEBAR when you've finishd studying",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.38)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Study the scene again',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.45], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "msg_next_scene"
  msg_next_sceneClock = new util.Clock();
  text_next_scene = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_next_scene',
    text: "Good! \n\nLet's move to the next scene.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "part4_instructions"
  part4_instructionsClock = new util.Clock();
  text_part4_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_part4_instructions',
    text: 'Part 4.\n\nNow that you have learned to name and imagine the four scenes in detail, you will have a short practice run in the two tasks that you will undertake soon.\n\nPress SPACEBAR to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_part4_instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "enc_instruction_screen"
  enc_instruction_screenClock = new util.Clock();
  text_enc_instruction = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_enc_instruction',
    text: 'In the first task, you will see different items (objects or animals) placed on the jungle and undersea scenes you memorized just now. After each presentation of an item and a scene, your goal will be to determine whether they were related or unrelated. \n\nAn item is related to a scene if you think it is plausible that such an animal would live or that such an object would be used in such a scene in real life. If not, they are unrelated.\n\nPress SPACEBAR to continue',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_proceed = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "enc_inst_2"
  enc_inst_2Clock = new util.Clock();
  text_relatedness_keys = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_relatedness_keys',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_proceed_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "get_stim_list"
  get_stim_listClock = new util.Clock();
  // Initialize components for Routine "scene_item_presentation"
  scene_item_presentationClock = new util.Clock();
  image_scene = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_scene', units : 'pix', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1440, 900],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_item = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_item', units : 'pix', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [300, 300],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "congruency_response"
  congruency_responseClock = new util.Clock();
  text_congruency = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_congruency',
    text: 'Related \nor Unrelated?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_congruency = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank1000_2"
  blank1000_2Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "ret_inst_gen"
  ret_inst_genClock = new util.Clock();
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Great job!\n\nNow you will learn about the memory task. It is a bit more complicated than the previous task, with a few changing screens. Please read carefully the detailed instructions before starting the practice run.\n\nPress SPACEBAR to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_continue_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ret_inst_1"
  ret_inst_1Clock = new util.Clock();
  image_inst1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_inst1', units : 'pix', 
    image : 'stimuli/instructions_imgs/inst1.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1512, 982],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  key_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ret_inst_2"
  ret_inst_2Clock = new util.Clock();
  image_inst2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_inst2', units : 'pix', 
    image : 'stimuli/instructions_imgs/inst2.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1512, 982],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_continue_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ret_inst_3"
  ret_inst_3Clock = new util.Clock();
  image_inst3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_inst3', units : 'pix', 
    image : 'stimuli/instructions_imgs/inst3.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1512, 982],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_continue_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ret_inst_4"
  ret_inst_4Clock = new util.Clock();
  image_inst4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_inst4', units : 'pix', 
    image : 'stimuli/instructions_imgs/inst4.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1512, 982],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_continue_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ret_inst_5"
  ret_inst_5Clock = new util.Clock();
  image_inst5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_inst5', units : 'pix', 
    image : 'stimuli/instructions_imgs/inst5.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1512, 982],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_continue_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ret_inst_6"
  ret_inst_6Clock = new util.Clock();
  image_inst6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_inst6', units : 'pix', 
    image : 'stimuli/instructions_imgs/inst6.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1512, 982],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_continue_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "item_imagine_scene"
  item_imagine_sceneClock = new util.Clock();
  text_imagine = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_imagine',
    text: 'Imagine the associated scene',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  item_cue = new visual.ImageStim({
    win : psychoJS.window,
    name : 'item_cue', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  // Initialize components for Routine "select_context"
  select_contextClock = new util.Clock();
  text_contrext_headline = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_contrext_headline',
    text: 'Which Type of scene did you imagine?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_sea = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_sea',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_jungle = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_jungle',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_context = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank500"
  blank500Clock = new util.Clock();
  text_blank = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_blank',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "context_confidence"
  context_confidenceClock = new util.Clock();
  text_context_choice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_context_choice',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  slider_context_conf = new visual.Slider({
    win: psychoJS.window, name: 'slider_context_conf',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1.Not confident", "2.Somewhat confident", "3.Very confident"], fontSize: 0.03, ticks: [1, 2, 3],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  key_resp_context_conf = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "select_scene_name"
  select_scene_nameClock = new util.Clock();
  text_scene_headline = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_scene_headline',
    text: 'The type was',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_actual_context = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_actual_context',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  text_q_scene = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_q_scene',
    text: 'Which specific scene was it?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  text_labels = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_labels',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_scenes = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "select_confidence"
  select_confidenceClock = new util.Clock();
  text_chosen_scene = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_chosen_scene',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  slider_scene_conf = new visual.Slider({
    win: psychoJS.window, name: 'slider_scene_conf',
    startValue: undefined,
    size: [1.0, 0.1], pos: [0, 0], ori: 0.0, units: psychoJS.window.units,
    labels: ["1.Not confident", "2.Somewhat confident", "3.Very confident"], fontSize: 0.03, ticks: [1, 2, 3],
    granularity: 0.0, style: ["RATING"],
    color: new util.Color('White'), markerColor: new util.Color('Red'), lineColor: new util.Color('White'), 
    opacity: undefined, fontFamily: 'Open Sans', bold: true, italic: false, depth: -2, 
    flip: false,
  });
  
  key_resp_scene_conf = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank3000"
  blank3000Clock = new util.Clock();
  text_blank3000 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_blank3000',
    text: '+',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "end_screen_2"
  end_screen_2Clock = new util.Clock();
  text_end_screen = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_screen',
    text: "Great job!\n\nYou're done with the training.\nSoon we're going to start the two tasks.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_exit = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function get_sub_varsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'get_sub_vars' ---
    t = 0;
    get_sub_varsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('get_sub_vars.started', globalClock.getTime());
    // keep track of which components have finished
    get_sub_varsComponents = [];
    
    for (const thisComponent of get_sub_varsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function get_sub_varsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'get_sub_vars' ---
    // get current time
    t = get_sub_varsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of get_sub_varsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function get_sub_varsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'get_sub_vars' ---
    for (const thisComponent of get_sub_varsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('get_sub_vars.stopped', globalClock.getTime());
    // the Routine "get_sub_vars" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function overall_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'overall_instructions' ---
    t = 0;
    overall_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('overall_instructions.started', globalClock.getTime());
    key_welcome.keys = undefined;
    key_welcome.rt = undefined;
    _key_welcome_allKeys = [];
    // keep track of which components have finished
    overall_instructionsComponents = [];
    overall_instructionsComponents.push(text_instructions);
    overall_instructionsComponents.push(key_welcome);
    
    for (const thisComponent of overall_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function overall_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'overall_instructions' ---
    // get current time
    t = overall_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions* updates
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions.tStart = t;  // (not accounting for frame time here)
      text_instructions.frameNStart = frameN;  // exact frame index
      
      text_instructions.setAutoDraw(true);
    }
    
    
    // *key_welcome* updates
    if (t >= 1.0 && key_welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_welcome.tStart = t;  // (not accounting for frame time here)
      key_welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_welcome.clearEvents(); });
    }
    
    if (key_welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_welcome.getKeys({keyList: ['space'], waitRelease: false});
      _key_welcome_allKeys = _key_welcome_allKeys.concat(theseKeys);
      if (_key_welcome_allKeys.length > 0) {
        key_welcome.keys = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].name;  // just the last key pressed
        key_welcome.rt = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].rt;
        key_welcome.duration = _key_welcome_allKeys[_key_welcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of overall_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function overall_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'overall_instructions' ---
    for (const thisComponent of overall_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('overall_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_welcome.corr, level);
    }
    psychoJS.experiment.addData('key_welcome.keys', key_welcome.keys);
    if (typeof key_welcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_welcome.rt', key_welcome.rt);
        psychoJS.experiment.addData('key_welcome.duration', key_welcome.duration);
        routineTimer.reset();
        }
    
    key_welcome.stop();
    // the Routine "overall_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part1_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part1_instructions' ---
    t = 0;
    part1_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('part1_instructions.started', globalClock.getTime());
    key_instructions_part1.keys = undefined;
    key_instructions_part1.rt = undefined;
    _key_instructions_part1_allKeys = [];
    // keep track of which components have finished
    part1_instructionsComponents = [];
    part1_instructionsComponents.push(text_instructions_part1);
    part1_instructionsComponents.push(key_instructions_part1);
    
    for (const thisComponent of part1_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part1_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part1_instructions' ---
    // get current time
    t = part1_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions_part1* updates
    if (t >= 0.0 && text_instructions_part1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_part1.tStart = t;  // (not accounting for frame time here)
      text_instructions_part1.frameNStart = frameN;  // exact frame index
      
      text_instructions_part1.setAutoDraw(true);
    }
    
    
    // *key_instructions_part1* updates
    if (t >= 0.0 && key_instructions_part1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instructions_part1.tStart = t;  // (not accounting for frame time here)
      key_instructions_part1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instructions_part1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instructions_part1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instructions_part1.clearEvents(); });
    }
    
    if (key_instructions_part1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instructions_part1.getKeys({keyList: ['space'], waitRelease: false});
      _key_instructions_part1_allKeys = _key_instructions_part1_allKeys.concat(theseKeys);
      if (_key_instructions_part1_allKeys.length > 0) {
        key_instructions_part1.keys = _key_instructions_part1_allKeys[_key_instructions_part1_allKeys.length - 1].name;  // just the last key pressed
        key_instructions_part1.rt = _key_instructions_part1_allKeys[_key_instructions_part1_allKeys.length - 1].rt;
        key_instructions_part1.duration = _key_instructions_part1_allKeys[_key_instructions_part1_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part1_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part1_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part1_instructions' ---
    for (const thisComponent of part1_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part1_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instructions_part1.corr, level);
    }
    psychoJS.experiment.addData('key_instructions_part1.keys', key_instructions_part1.keys);
    if (typeof key_instructions_part1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instructions_part1.rt', key_instructions_part1.rt);
        psychoJS.experiment.addData('key_instructions_part1.duration', key_instructions_part1.duration);
        routineTimer.reset();
        }
    
    key_instructions_part1.stop();
    // the Routine "part1_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function trials_part1LoopBegin(trials_part1LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_part1 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: study_scenes,
      seed: undefined, name: 'trials_part1'
    });
    psychoJS.experiment.addLoop(trials_part1); // add the loop to the experiment
    currentLoop = trials_part1;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_part1 of trials_part1) {
      snapshot = trials_part1.getSnapshot();
      trials_part1LoopScheduler.add(importConditions(snapshot));
      trials_part1LoopScheduler.add(part1RoutineBegin(snapshot));
      trials_part1LoopScheduler.add(part1RoutineEachFrame());
      trials_part1LoopScheduler.add(part1RoutineEnd(snapshot));
      trials_part1LoopScheduler.add(trials_part1LoopEndIteration(trials_part1LoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_part1LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_part1);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_part1LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function skip_to_part4_debugLoopBegin(skip_to_part4_debugLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    skip_to_part4_debug = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'skip_to_part4_debug'
    });
    psychoJS.experiment.addLoop(skip_to_part4_debug); // add the loop to the experiment
    currentLoop = skip_to_part4_debug;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSkip_to_part4_debug of skip_to_part4_debug) {
      snapshot = skip_to_part4_debug.getSnapshot();
      skip_to_part4_debugLoopScheduler.add(importConditions(snapshot));
      skip_to_part4_debugLoopScheduler.add(part2_instructionsRoutineBegin(snapshot));
      skip_to_part4_debugLoopScheduler.add(part2_instructionsRoutineEachFrame());
      skip_to_part4_debugLoopScheduler.add(part2_instructionsRoutineEnd(snapshot));
      const skip_loop_debugLoopScheduler = new Scheduler(psychoJS);
      skip_to_part4_debugLoopScheduler.add(skip_loop_debugLoopBegin(skip_loop_debugLoopScheduler, snapshot));
      skip_to_part4_debugLoopScheduler.add(skip_loop_debugLoopScheduler);
      skip_to_part4_debugLoopScheduler.add(skip_loop_debugLoopEnd);
      skip_to_part4_debugLoopScheduler.add(skip_to_part4_debugLoopEndIteration(skip_to_part4_debugLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function skip_loop_debugLoopBegin(skip_loop_debugLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    skip_loop_debug = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'skip_loop_debug'
    });
    psychoJS.experiment.addLoop(skip_loop_debug); // add the loop to the experiment
    currentLoop = skip_loop_debug;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSkip_loop_debug of skip_loop_debug) {
      snapshot = skip_loop_debug.getSnapshot();
      skip_loop_debugLoopScheduler.add(importConditions(snapshot));
      const part2_loopLoopScheduler = new Scheduler(psychoJS);
      skip_loop_debugLoopScheduler.add(part2_loopLoopBegin(part2_loopLoopScheduler, snapshot));
      skip_loop_debugLoopScheduler.add(part2_loopLoopScheduler);
      skip_loop_debugLoopScheduler.add(part2_loopLoopEnd);
      skip_loop_debugLoopScheduler.add(part3_instructionsRoutineBegin(snapshot));
      skip_loop_debugLoopScheduler.add(part3_instructionsRoutineEachFrame());
      skip_loop_debugLoopScheduler.add(part3_instructionsRoutineEnd(snapshot));
      const part3_loopLoopScheduler = new Scheduler(psychoJS);
      skip_loop_debugLoopScheduler.add(part3_loopLoopBegin(part3_loopLoopScheduler, snapshot));
      skip_loop_debugLoopScheduler.add(part3_loopLoopScheduler);
      skip_loop_debugLoopScheduler.add(part3_loopLoopEnd);
      skip_loop_debugLoopScheduler.add(skip_loop_debugLoopEndIteration(skip_loop_debugLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function part2_loopLoopBegin(part2_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    part2_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'scene_stims.xlsx',
      seed: undefined, name: 'part2_loop'
    });
    psychoJS.experiment.addLoop(part2_loop); // add the loop to the experiment
    currentLoop = part2_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPart2_loop of part2_loop) {
      snapshot = part2_loop.getSnapshot();
      part2_loopLoopScheduler.add(importConditions(snapshot));
      part2_loopLoopScheduler.add(part2RoutineBegin(snapshot));
      part2_loopLoopScheduler.add(part2RoutineEachFrame());
      part2_loopLoopScheduler.add(part2RoutineEnd(snapshot));
      part2_loopLoopScheduler.add(part2_questionRoutineBegin(snapshot));
      part2_loopLoopScheduler.add(part2_questionRoutineEachFrame());
      part2_loopLoopScheduler.add(part2_questionRoutineEnd(snapshot));
      part2_loopLoopScheduler.add(part2_feedbackRoutineBegin(snapshot));
      part2_loopLoopScheduler.add(part2_feedbackRoutineEachFrame());
      part2_loopLoopScheduler.add(part2_feedbackRoutineEnd(snapshot));
      part2_loopLoopScheduler.add(part2_loopLoopEndIteration(part2_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function part2_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(part2_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function part2_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function part3_loopLoopBegin(part3_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    part3_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 4, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'part3_loop'
    });
    psychoJS.experiment.addLoop(part3_loop); // add the loop to the experiment
    currentLoop = part3_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPart3_loop of part3_loop) {
      snapshot = part3_loop.getSnapshot();
      part3_loopLoopScheduler.add(importConditions(snapshot));
      part3_loopLoopScheduler.add(reset_vis_varsRoutineBegin(snapshot));
      part3_loopLoopScheduler.add(reset_vis_varsRoutineEachFrame());
      part3_loopLoopScheduler.add(reset_vis_varsRoutineEnd(snapshot));
      const visualization_loopLoopScheduler = new Scheduler(psychoJS);
      part3_loopLoopScheduler.add(visualization_loopLoopBegin(visualization_loopLoopScheduler, snapshot));
      part3_loopLoopScheduler.add(visualization_loopLoopScheduler);
      part3_loopLoopScheduler.add(visualization_loopLoopEnd);
      const loop_msgLoopScheduler = new Scheduler(psychoJS);
      part3_loopLoopScheduler.add(loop_msgLoopBegin(loop_msgLoopScheduler, snapshot));
      part3_loopLoopScheduler.add(loop_msgLoopScheduler);
      part3_loopLoopScheduler.add(loop_msgLoopEnd);
      part3_loopLoopScheduler.add(part3_loopLoopEndIteration(part3_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function visualization_loopLoopBegin(visualization_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    visualization_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 99, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: vis_table,
      seed: undefined, name: 'visualization_loop'
    });
    psychoJS.experiment.addLoop(visualization_loop); // add the loop to the experiment
    currentLoop = visualization_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisVisualization_loop of visualization_loop) {
      snapshot = visualization_loop.getSnapshot();
      visualization_loopLoopScheduler.add(importConditions(snapshot));
      visualization_loopLoopScheduler.add(skip_answered_questionsRoutineBegin(snapshot));
      visualization_loopLoopScheduler.add(skip_answered_questionsRoutineEachFrame());
      visualization_loopLoopScheduler.add(skip_answered_questionsRoutineEnd(snapshot));
      visualization_loopLoopScheduler.add(blank1000RoutineBegin(snapshot));
      visualization_loopLoopScheduler.add(blank1000RoutineEachFrame());
      visualization_loopLoopScheduler.add(blank1000RoutineEnd(snapshot));
      visualization_loopLoopScheduler.add(part3_visualizeRoutineBegin(snapshot));
      visualization_loopLoopScheduler.add(part3_visualizeRoutineEachFrame());
      visualization_loopLoopScheduler.add(part3_visualizeRoutineEnd(snapshot));
      visualization_loopLoopScheduler.add(part3_rateRoutineBegin(snapshot));
      visualization_loopLoopScheduler.add(part3_rateRoutineEachFrame());
      visualization_loopLoopScheduler.add(part3_rateRoutineEnd(snapshot));
      visualization_loopLoopScheduler.add(part3_questionRoutineBegin(snapshot));
      visualization_loopLoopScheduler.add(part3_questionRoutineEachFrame());
      visualization_loopLoopScheduler.add(part3_questionRoutineEnd(snapshot));
      const skip_loopLoopScheduler = new Scheduler(psychoJS);
      visualization_loopLoopScheduler.add(skip_loopLoopBegin(skip_loopLoopScheduler, snapshot));
      visualization_loopLoopScheduler.add(skip_loopLoopScheduler);
      visualization_loopLoopScheduler.add(skip_loopLoopEnd);
      visualization_loopLoopScheduler.add(visualization_loopLoopEndIteration(visualization_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

function skip_loopLoopBegin(skip_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    skip_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: myReps, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'skip_loop'
    });
    psychoJS.experiment.addLoop(skip_loop); // add the loop to the experiment
    currentLoop = skip_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSkip_loop of skip_loop) {
      snapshot = skip_loop.getSnapshot();
      skip_loopLoopScheduler.add(importConditions(snapshot));
      skip_loopLoopScheduler.add(study_againRoutineBegin(snapshot));
      skip_loopLoopScheduler.add(study_againRoutineEachFrame());
      skip_loopLoopScheduler.add(study_againRoutineEnd(snapshot));
      skip_loopLoopScheduler.add(skip_loopLoopEndIteration(skip_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function skip_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(skip_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function skip_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function visualization_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(visualization_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function visualization_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function loop_msgLoopBegin(loop_msgLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loop_msg = new TrialHandler({
      psychoJS: psychoJS,
      nReps: last_scene, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'loop_msg'
    });
    psychoJS.experiment.addLoop(loop_msg); // add the loop to the experiment
    currentLoop = loop_msg;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop_msg of loop_msg) {
      snapshot = loop_msg.getSnapshot();
      loop_msgLoopScheduler.add(importConditions(snapshot));
      loop_msgLoopScheduler.add(msg_next_sceneRoutineBegin(snapshot));
      loop_msgLoopScheduler.add(msg_next_sceneRoutineEachFrame());
      loop_msgLoopScheduler.add(msg_next_sceneRoutineEnd(snapshot));
      loop_msgLoopScheduler.add(loop_msgLoopEndIteration(loop_msgLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function loop_msgLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loop_msg);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function loop_msgLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function part3_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(part3_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function part3_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function skip_loop_debugLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(skip_loop_debug);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function skip_loop_debugLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

async function skip_to_part4_debugLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(skip_to_part4_debug);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function skip_to_part4_debugLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_encLoopBegin(trials_encLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_enc = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: stim_list,
      seed: undefined, name: 'trials_enc'
    });
    psychoJS.experiment.addLoop(trials_enc); // add the loop to the experiment
    currentLoop = trials_enc;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_enc of trials_enc) {
      snapshot = trials_enc.getSnapshot();
      trials_encLoopScheduler.add(importConditions(snapshot));
      trials_encLoopScheduler.add(scene_item_presentationRoutineBegin(snapshot));
      trials_encLoopScheduler.add(scene_item_presentationRoutineEachFrame());
      trials_encLoopScheduler.add(scene_item_presentationRoutineEnd(snapshot));
      trials_encLoopScheduler.add(congruency_responseRoutineBegin(snapshot));
      trials_encLoopScheduler.add(congruency_responseRoutineEachFrame());
      trials_encLoopScheduler.add(congruency_responseRoutineEnd(snapshot));
      trials_encLoopScheduler.add(blank1000_2RoutineBegin(snapshot));
      trials_encLoopScheduler.add(blank1000_2RoutineEachFrame());
      trials_encLoopScheduler.add(blank1000_2RoutineEnd(snapshot));
      trials_encLoopScheduler.add(trials_encLoopEndIteration(trials_encLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_encLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_enc);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_encLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function trials_retrievalLoopBegin(trials_retrievalLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_retrieval = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: stim_list,
      seed: undefined, name: 'trials_retrieval'
    });
    psychoJS.experiment.addLoop(trials_retrieval); // add the loop to the experiment
    currentLoop = trials_retrieval;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_retrieval of trials_retrieval) {
      snapshot = trials_retrieval.getSnapshot();
      trials_retrievalLoopScheduler.add(importConditions(snapshot));
      trials_retrievalLoopScheduler.add(item_imagine_sceneRoutineBegin(snapshot));
      trials_retrievalLoopScheduler.add(item_imagine_sceneRoutineEachFrame());
      trials_retrievalLoopScheduler.add(item_imagine_sceneRoutineEnd(snapshot));
      trials_retrievalLoopScheduler.add(blank1000_2RoutineBegin(snapshot));
      trials_retrievalLoopScheduler.add(blank1000_2RoutineEachFrame());
      trials_retrievalLoopScheduler.add(blank1000_2RoutineEnd(snapshot));
      trials_retrievalLoopScheduler.add(select_contextRoutineBegin(snapshot));
      trials_retrievalLoopScheduler.add(select_contextRoutineEachFrame());
      trials_retrievalLoopScheduler.add(select_contextRoutineEnd(snapshot));
      trials_retrievalLoopScheduler.add(blank500RoutineBegin(snapshot));
      trials_retrievalLoopScheduler.add(blank500RoutineEachFrame());
      trials_retrievalLoopScheduler.add(blank500RoutineEnd(snapshot));
      trials_retrievalLoopScheduler.add(context_confidenceRoutineBegin(snapshot));
      trials_retrievalLoopScheduler.add(context_confidenceRoutineEachFrame());
      trials_retrievalLoopScheduler.add(context_confidenceRoutineEnd(snapshot));
      trials_retrievalLoopScheduler.add(blank1000_2RoutineBegin(snapshot));
      trials_retrievalLoopScheduler.add(blank1000_2RoutineEachFrame());
      trials_retrievalLoopScheduler.add(blank1000_2RoutineEnd(snapshot));
      trials_retrievalLoopScheduler.add(select_scene_nameRoutineBegin(snapshot));
      trials_retrievalLoopScheduler.add(select_scene_nameRoutineEachFrame());
      trials_retrievalLoopScheduler.add(select_scene_nameRoutineEnd(snapshot));
      trials_retrievalLoopScheduler.add(blank500RoutineBegin(snapshot));
      trials_retrievalLoopScheduler.add(blank500RoutineEachFrame());
      trials_retrievalLoopScheduler.add(blank500RoutineEnd(snapshot));
      trials_retrievalLoopScheduler.add(select_confidenceRoutineBegin(snapshot));
      trials_retrievalLoopScheduler.add(select_confidenceRoutineEachFrame());
      trials_retrievalLoopScheduler.add(select_confidenceRoutineEnd(snapshot));
      trials_retrievalLoopScheduler.add(blank3000RoutineBegin(snapshot));
      trials_retrievalLoopScheduler.add(blank3000RoutineEachFrame());
      trials_retrievalLoopScheduler.add(blank3000RoutineEnd(snapshot));
      trials_retrievalLoopScheduler.add(trials_retrievalLoopEndIteration(trials_retrievalLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}

async function trials_retrievalLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_retrieval);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}

function trials_retrievalLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}

function part1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part1' ---
    t = 0;
    part1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('part1.started', globalClock.getTime());
    scene_image_part1.setImage(scene_img);
    scene_name_part1.setPos([0, 0.42]);
    scene_name_part1.setText(txt_scene_present);
    text_scenename.setText(txt_scenename);
    key_sceneLearn.keys = undefined;
    key_sceneLearn.rt = undefined;
    _key_sceneLearn_allKeys = [];
    // keep track of which components have finished
    part1Components = [];
    part1Components.push(scene_image_part1);
    part1Components.push(scene_name_part1);
    part1Components.push(text_scenename);
    part1Components.push(text_memorize);
    part1Components.push(key_sceneLearn);
    
    for (const thisComponent of part1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part1' ---
    // get current time
    t = part1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *scene_image_part1* updates
    if (t >= 0.0 && scene_image_part1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scene_image_part1.tStart = t;  // (not accounting for frame time here)
      scene_image_part1.frameNStart = frameN;  // exact frame index
      
      scene_image_part1.setAutoDraw(true);
    }
    
    
    // *scene_name_part1* updates
    if (t >= 0.0 && scene_name_part1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scene_name_part1.tStart = t;  // (not accounting for frame time here)
      scene_name_part1.frameNStart = frameN;  // exact frame index
      
      scene_name_part1.setAutoDraw(true);
    }
    
    
    // *text_scenename* updates
    if (t >= 0.0 && text_scenename.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_scenename.tStart = t;  // (not accounting for frame time here)
      text_scenename.frameNStart = frameN;  // exact frame index
      
      text_scenename.setAutoDraw(true);
    }
    
    
    // *text_memorize* updates
    if (t >= 0.0 && text_memorize.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_memorize.tStart = t;  // (not accounting for frame time here)
      text_memorize.frameNStart = frameN;  // exact frame index
      
      text_memorize.setAutoDraw(true);
    }
    
    
    // *key_sceneLearn* updates
    if (t >= 1 && key_sceneLearn.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_sceneLearn.tStart = t;  // (not accounting for frame time here)
      key_sceneLearn.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_sceneLearn.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_sceneLearn.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_sceneLearn.clearEvents(); });
    }
    
    if (key_sceneLearn.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_sceneLearn.getKeys({keyList: ['space'], waitRelease: false});
      _key_sceneLearn_allKeys = _key_sceneLearn_allKeys.concat(theseKeys);
      if (_key_sceneLearn_allKeys.length > 0) {
        key_sceneLearn.keys = _key_sceneLearn_allKeys[_key_sceneLearn_allKeys.length - 1].name;  // just the last key pressed
        key_sceneLearn.rt = _key_sceneLearn_allKeys[_key_sceneLearn_allKeys.length - 1].rt;
        key_sceneLearn.duration = _key_sceneLearn_allKeys[_key_sceneLearn_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part1' ---
    for (const thisComponent of part1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_sceneLearn.corr, level);
    }
    psychoJS.experiment.addData('key_sceneLearn.keys', key_sceneLearn.keys);
    if (typeof key_sceneLearn.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_sceneLearn.rt', key_sceneLearn.rt);
        psychoJS.experiment.addData('key_sceneLearn.duration', key_sceneLearn.duration);
        routineTimer.reset();
        }
    
    key_sceneLearn.stop();
    // the Routine "part1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part1_instructions_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part1_instructions_2' ---
    t = 0;
    part1_instructions_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('part1_instructions_2.started', globalClock.getTime());
    key_instructions_part1_2.keys = undefined;
    key_instructions_part1_2.rt = undefined;
    _key_instructions_part1_2_allKeys = [];
    // keep track of which components have finished
    part1_instructions_2Components = [];
    part1_instructions_2Components.push(text_instructions_part1_2);
    part1_instructions_2Components.push(key_instructions_part1_2);
    
    for (const thisComponent of part1_instructions_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part1_instructions_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part1_instructions_2' ---
    // get current time
    t = part1_instructions_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions_part1_2* updates
    if (t >= 0.0 && text_instructions_part1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_part1_2.tStart = t;  // (not accounting for frame time here)
      text_instructions_part1_2.frameNStart = frameN;  // exact frame index
      
      text_instructions_part1_2.setAutoDraw(true);
    }
    
    
    // *key_instructions_part1_2* updates
    if (t >= 0.0 && key_instructions_part1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_instructions_part1_2.tStart = t;  // (not accounting for frame time here)
      key_instructions_part1_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_instructions_part1_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_instructions_part1_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_instructions_part1_2.clearEvents(); });
    }
    
    if (key_instructions_part1_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_instructions_part1_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_instructions_part1_2_allKeys = _key_instructions_part1_2_allKeys.concat(theseKeys);
      if (_key_instructions_part1_2_allKeys.length > 0) {
        key_instructions_part1_2.keys = _key_instructions_part1_2_allKeys[_key_instructions_part1_2_allKeys.length - 1].name;  // just the last key pressed
        key_instructions_part1_2.rt = _key_instructions_part1_2_allKeys[_key_instructions_part1_2_allKeys.length - 1].rt;
        key_instructions_part1_2.duration = _key_instructions_part1_2_allKeys[_key_instructions_part1_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part1_instructions_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part1_instructions_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part1_instructions_2' ---
    for (const thisComponent of part1_instructions_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part1_instructions_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_instructions_part1_2.corr, level);
    }
    psychoJS.experiment.addData('key_instructions_part1_2.keys', key_instructions_part1_2.keys);
    if (typeof key_instructions_part1_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_instructions_part1_2.rt', key_instructions_part1_2.rt);
        psychoJS.experiment.addData('key_instructions_part1_2.duration', key_instructions_part1_2.duration);
        routineTimer.reset();
        }
    
    key_instructions_part1_2.stop();
    // the Routine "part1_instructions_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part1_compareRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part1_compare' ---
    t = 0;
    part1_compareClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('part1_compare.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_get_scenes
    df = pd.read_csv(study_scenes);
    scene_J1 = df[df["scene_stimulus"].str.contains("J1")]["scene_img"].values[0];
    scene_J1_lbl = df[df["scene_stimulus"].str.contains("J1")]["scene_label"].values[0];
    scene_J2 = df[df["scene_stimulus"].str.contains("J2")]["scene_img"].values[0];
    scene_J2_lbl = df[df["scene_stimulus"].str.contains("J2")]["scene_label"].values[0];
    scene_U1 = df[df["scene_stimulus"].str.contains("U1")]["scene_img"].values[0];
    scene_U1_lbl = df[df["scene_stimulus"].str.contains("U1")]["scene_label"].values[0];
    scene_U2 = df[df["scene_stimulus"].str.contains("U2")]["scene_img"].values[0];
    scene_U2_lbl = df[df["scene_stimulus"].str.contains("U2")]["scene_label"].values[0];
    
    image1.setImage(scene_J1);
    image2.setImage(scene_J2);
    image3.setImage(scene_U1);
    image4.setImage(scene_U2);
    textbox1.setText(scene_J1_lbl);
    textbox2.setText(scene_J2_lbl);
    textbox3.setText(scene_U1_lbl);
    textbox4.setText(scene_U2_lbl);
    key_compare.keys = undefined;
    key_compare.rt = undefined;
    _key_compare_allKeys = [];
    // keep track of which components have finished
    part1_compareComponents = [];
    part1_compareComponents.push(image1);
    part1_compareComponents.push(image2);
    part1_compareComponents.push(image3);
    part1_compareComponents.push(image4);
    part1_compareComponents.push(textbox1);
    part1_compareComponents.push(textbox2);
    part1_compareComponents.push(textbox3);
    part1_compareComponents.push(textbox4);
    part1_compareComponents.push(key_compare);
    
    for (const thisComponent of part1_compareComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part1_compareRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part1_compare' ---
    // get current time
    t = part1_compareClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image1* updates
    if (t >= 0.0 && image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image1.tStart = t;  // (not accounting for frame time here)
      image1.frameNStart = frameN;  // exact frame index
      
      image1.setAutoDraw(true);
    }
    
    
    // *image2* updates
    if (t >= 0.0 && image2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image2.tStart = t;  // (not accounting for frame time here)
      image2.frameNStart = frameN;  // exact frame index
      
      image2.setAutoDraw(true);
    }
    
    
    // *image3* updates
    if (t >= 0.0 && image3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image3.tStart = t;  // (not accounting for frame time here)
      image3.frameNStart = frameN;  // exact frame index
      
      image3.setAutoDraw(true);
    }
    
    
    // *image4* updates
    if (t >= 0.0 && image4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image4.tStart = t;  // (not accounting for frame time here)
      image4.frameNStart = frameN;  // exact frame index
      
      image4.setAutoDraw(true);
    }
    
    
    // *textbox1* updates
    if (t >= 0.0 && textbox1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox1.tStart = t;  // (not accounting for frame time here)
      textbox1.frameNStart = frameN;  // exact frame index
      
      textbox1.setAutoDraw(true);
    }
    
    
    // *textbox2* updates
    if (t >= 0.0 && textbox2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox2.tStart = t;  // (not accounting for frame time here)
      textbox2.frameNStart = frameN;  // exact frame index
      
      textbox2.setAutoDraw(true);
    }
    
    
    // *textbox3* updates
    if (t >= 0.0 && textbox3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox3.tStart = t;  // (not accounting for frame time here)
      textbox3.frameNStart = frameN;  // exact frame index
      
      textbox3.setAutoDraw(true);
    }
    
    
    // *textbox4* updates
    if (t >= 0.0 && textbox4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox4.tStart = t;  // (not accounting for frame time here)
      textbox4.frameNStart = frameN;  // exact frame index
      
      textbox4.setAutoDraw(true);
    }
    
    
    // *key_compare* updates
    if (t >= 0.0 && key_compare.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_compare.tStart = t;  // (not accounting for frame time here)
      key_compare.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_compare.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_compare.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_compare.clearEvents(); });
    }
    
    if (key_compare.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_compare.getKeys({keyList: ['space'], waitRelease: false});
      _key_compare_allKeys = _key_compare_allKeys.concat(theseKeys);
      if (_key_compare_allKeys.length > 0) {
        key_compare.keys = _key_compare_allKeys[_key_compare_allKeys.length - 1].name;  // just the last key pressed
        key_compare.rt = _key_compare_allKeys[_key_compare_allKeys.length - 1].rt;
        key_compare.duration = _key_compare_allKeys[_key_compare_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part1_compareComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part1_compareRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part1_compare' ---
    for (const thisComponent of part1_compareComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part1_compare.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_compare.corr, level);
    }
    psychoJS.experiment.addData('key_compare.keys', key_compare.keys);
    if (typeof key_compare.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_compare.rt', key_compare.rt);
        psychoJS.experiment.addData('key_compare.duration', key_compare.duration);
        routineTimer.reset();
        }
    
    key_compare.stop();
    // the Routine "part1_compare" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part2_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part2_instructions' ---
    t = 0;
    part2_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('part2_instructions.started', globalClock.getTime());
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    part2_instructionsComponents = [];
    part2_instructionsComponents.push(text_instructions_part2);
    part2_instructionsComponents.push(key_resp);
    
    for (const thisComponent of part2_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part2_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part2_instructions' ---
    // get current time
    t = part2_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions_part2* updates
    if (t >= 0.0 && text_instructions_part2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_part2.tStart = t;  // (not accounting for frame time here)
      text_instructions_part2.frameNStart = frameN;  // exact frame index
      
      text_instructions_part2.setAutoDraw(true);
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part2_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part2_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part2_instructions' ---
    for (const thisComponent of part2_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part2_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "part2_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part2' ---
    t = 0;
    part2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('part2.started', globalClock.getTime());
    scene_part2.setImage(scene_image);
    // keep track of which components have finished
    part2Components = [];
    part2Components.push(scene_part2);
    
    for (const thisComponent of part2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part2' ---
    // get current time
    t = part2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *scene_part2* updates
    if (t >= 0.0 && scene_part2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      scene_part2.tStart = t;  // (not accounting for frame time here)
      scene_part2.frameNStart = frameN;  // exact frame index
      
      scene_part2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (scene_part2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      scene_part2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part2' ---
    for (const thisComponent of part2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part2_questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part2_question' ---
    t = 0;
    part2_questionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('part2_question.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_part2_txt
    text_part2_qst = ((((((("What is the name of the scene?\n\n1. " + scene_J1_lbl) + "\n2. ") + scene_J2_lbl) + "\n3. ") + scene_U1_lbl) + "\n4. ") + scene_U2_lbl);
    
    text_part2_question.setText(text_part2_qst);
    key_part2.keys = undefined;
    key_part2.rt = undefined;
    _key_part2_allKeys = [];
    // keep track of which components have finished
    part2_questionComponents = [];
    part2_questionComponents.push(text_part2_question);
    part2_questionComponents.push(key_part2);
    
    for (const thisComponent of part2_questionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part2_questionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part2_question' ---
    // get current time
    t = part2_questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_part2_question* updates
    if (t >= 0.0 && text_part2_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_part2_question.tStart = t;  // (not accounting for frame time here)
      text_part2_question.frameNStart = frameN;  // exact frame index
      
      text_part2_question.setAutoDraw(true);
    }
    
    
    // *key_part2* updates
    if (t >= 0.0 && key_part2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_part2.tStart = t;  // (not accounting for frame time here)
      key_part2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_part2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_part2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_part2.clearEvents(); });
    }
    
    if (key_part2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_part2.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _key_part2_allKeys = _key_part2_allKeys.concat(theseKeys);
      if (_key_part2_allKeys.length > 0) {
        key_part2.keys = _key_part2_allKeys[_key_part2_allKeys.length - 1].name;  // just the last key pressed
        key_part2.rt = _key_part2_allKeys[_key_part2_allKeys.length - 1].rt;
        key_part2.duration = _key_part2_allKeys[_key_part2_allKeys.length - 1].duration;
        // was this correct?
        if (key_part2.keys == correct_key) {
            key_part2.corr = 1;
        } else {
            key_part2.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part2_questionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part2_questionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part2_question' ---
    for (const thisComponent of part2_questionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part2_question.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_part2.keys === undefined) {
      if (['None','none',undefined].includes(correct_key)) {
         key_part2.corr = 1;  // correct non-response
      } else {
         key_part2.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_part2.corr, level);
    }
    psychoJS.experiment.addData('key_part2.keys', key_part2.keys);
    psychoJS.experiment.addData('key_part2.corr', key_part2.corr);
    if (typeof key_part2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_part2.rt', key_part2.rt);
        psychoJS.experiment.addData('key_part2.duration', key_part2.duration);
        routineTimer.reset();
        }
    
    key_part2.stop();
    // Run 'End Routine' code from code_part2
    if ((key_part2.corr === 1)) {
        logic_vec[(correct_key - 1)] = true;
    } else {
        if ((key_part2.corr === 0)) {
            logic_vec[(correct_key - 1)] = false;
        }
    }
    if (all(logic_vec)) {
        part2_loop.finished = true;
    }
    
    // the Routine "part2_question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part2_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part2_feedback' ---
    t = 0;
    part2_feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('part2_feedback.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_part2_feedback
    if ((! key_part2.keys)) {
        msg = "Incorrect!";
    } else {
        if (key_part2.corr) {
            msg = "Correct!";
        }
    }
    
    text_part2_feedback.setText(msg);
    // keep track of which components have finished
    part2_feedbackComponents = [];
    part2_feedbackComponents.push(text_part2_feedback);
    
    for (const thisComponent of part2_feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part2_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part2_feedback' ---
    // get current time
    t = part2_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_part2_feedback* updates
    if (t >= 0.0 && text_part2_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_part2_feedback.tStart = t;  // (not accounting for frame time here)
      text_part2_feedback.frameNStart = frameN;  // exact frame index
      
      text_part2_feedback.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_part2_feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_part2_feedback.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part2_feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part2_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part2_feedback' ---
    for (const thisComponent of part2_feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part2_feedback.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part3_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part3_instructions' ---
    t = 0;
    part3_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('part3_instructions.started', globalClock.getTime());
    key_part3_instructions.keys = undefined;
    key_part3_instructions.rt = undefined;
    _key_part3_instructions_allKeys = [];
    // keep track of which components have finished
    part3_instructionsComponents = [];
    part3_instructionsComponents.push(text_part3_instructions);
    part3_instructionsComponents.push(key_part3_instructions);
    
    for (const thisComponent of part3_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part3_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part3_instructions' ---
    // get current time
    t = part3_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_part3_instructions* updates
    if (t >= 0.0 && text_part3_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_part3_instructions.tStart = t;  // (not accounting for frame time here)
      text_part3_instructions.frameNStart = frameN;  // exact frame index
      
      text_part3_instructions.setAutoDraw(true);
    }
    
    
    // *key_part3_instructions* updates
    if (t >= 0.0 && key_part3_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_part3_instructions.tStart = t;  // (not accounting for frame time here)
      key_part3_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_part3_instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_part3_instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_part3_instructions.clearEvents(); });
    }
    
    if (key_part3_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_part3_instructions.getKeys({keyList: ['space'], waitRelease: false});
      _key_part3_instructions_allKeys = _key_part3_instructions_allKeys.concat(theseKeys);
      if (_key_part3_instructions_allKeys.length > 0) {
        key_part3_instructions.keys = _key_part3_instructions_allKeys[_key_part3_instructions_allKeys.length - 1].name;  // just the last key pressed
        key_part3_instructions.rt = _key_part3_instructions_allKeys[_key_part3_instructions_allKeys.length - 1].rt;
        key_part3_instructions.duration = _key_part3_instructions_allKeys[_key_part3_instructions_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part3_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part3_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part3_instructions' ---
    for (const thisComponent of part3_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part3_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_part3_instructions.corr, level);
    }
    psychoJS.experiment.addData('key_part3_instructions.keys', key_part3_instructions.keys);
    if (typeof key_part3_instructions.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_part3_instructions.rt', key_part3_instructions.rt);
        psychoJS.experiment.addData('key_part3_instructions.duration', key_part3_instructions.duration);
        routineTimer.reset();
        }
    
    key_part3_instructions.stop();
    // the Routine "part3_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function reset_vis_varsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'reset_vis_vars' ---
    t = 0;
    reset_vis_varsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('reset_vis_vars.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_reset_vars
    labelStr = ["J1", "J2", "U1", "U2"];
    lbl = labelStr[count];
    vis_table = `stimuli/vis_lists/visualization_${lbl}_sub_${subnum}.csv`;
    logic_vec_ans = ([false] * 4);
    count += 1;
    if ((count === 4)) {
        last_scene = 0;
    } else {
        last_scene = 1;
    }
    
    // keep track of which components have finished
    reset_vis_varsComponents = [];
    
    for (const thisComponent of reset_vis_varsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function reset_vis_varsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'reset_vis_vars' ---
    // get current time
    t = reset_vis_varsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reset_vis_varsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function reset_vis_varsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'reset_vis_vars' ---
    for (const thisComponent of reset_vis_varsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('reset_vis_vars.stopped', globalClock.getTime());
    // the Routine "reset_vis_vars" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function skip_answered_questionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'skip_answered_questions' ---
    t = 0;
    skip_answered_questionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('skip_answered_questions.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_skip_qst
    if (logic_vec_ans[qst_num] === true) {
        skipTrial = true;
        console.log('should skip question',qst_num);
    } else {
        skipTrial = false;
    }
    // keep track of which components have finished
    skip_answered_questionsComponents = [];
    
    for (const thisComponent of skip_answered_questionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function skip_answered_questionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'skip_answered_questions' ---
    // get current time
    t = skip_answered_questionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of skip_answered_questionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function skip_answered_questionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'skip_answered_questions' ---
    for (const thisComponent of skip_answered_questionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('skip_answered_questions.stopped', globalClock.getTime());
    // the Routine "skip_answered_questions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function blank1000RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank1000' ---
    t = 0;
    blank1000Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank1000.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_skip_1
    if (skipTrial === true) {
        continueRoutine = false;
    }
    // keep track of which components have finished
    blank1000Components = [];
    blank1000Components.push(text_2);
    
    for (const thisComponent of blank1000Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function blank1000RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank1000' ---
    // get current time
    t = blank1000Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank1000Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function blank1000RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank1000' ---
    for (const thisComponent of blank1000Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank1000.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part3_visualizeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part3_visualize' ---
    t = 0;
    part3_visualizeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('part3_visualize.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_skip_2
    if (skipTrial === true) {
        continueRoutine = false;
    }
    textbox_scene_name.setText(label_current);
    // keep track of which components have finished
    part3_visualizeComponents = [];
    part3_visualizeComponents.push(text_visualize);
    part3_visualizeComponents.push(textbox_scene_name);
    
    for (const thisComponent of part3_visualizeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part3_visualizeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part3_visualize' ---
    // get current time
    t = part3_visualizeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_visualize* updates
    if (t >= 0.0 && text_visualize.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_visualize.tStart = t;  // (not accounting for frame time here)
      text_visualize.frameNStart = frameN;  // exact frame index
      
      text_visualize.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_visualize.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_visualize.setAutoDraw(false);
    }
    
    
    // *textbox_scene_name* updates
    if (t >= 0.0 && textbox_scene_name.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_scene_name.tStart = t;  // (not accounting for frame time here)
      textbox_scene_name.frameNStart = frameN;  // exact frame index
      
      textbox_scene_name.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textbox_scene_name.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textbox_scene_name.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part3_visualizeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part3_visualizeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part3_visualize' ---
    for (const thisComponent of part3_visualizeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part3_visualize.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part3_rateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part3_rate' ---
    t = 0;
    part3_rateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('part3_rate.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_skip_3
    if (skipTrial === true) {
        continueRoutine = false;
    }
    key_rate.keys = undefined;
    key_rate.rt = undefined;
    _key_rate_allKeys = [];
    // keep track of which components have finished
    part3_rateComponents = [];
    part3_rateComponents.push(text_rate);
    part3_rateComponents.push(key_rate);
    
    for (const thisComponent of part3_rateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part3_rateRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part3_rate' ---
    // get current time
    t = part3_rateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_rate* updates
    if (t >= 0.0 && text_rate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_rate.tStart = t;  // (not accounting for frame time here)
      text_rate.frameNStart = frameN;  // exact frame index
      
      text_rate.setAutoDraw(true);
    }
    
    
    // *key_rate* updates
    if (t >= 0.0 && key_rate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_rate.tStart = t;  // (not accounting for frame time here)
      key_rate.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_rate.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_rate.start(); }); // start on screen flip
    }
    
    if (key_rate.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_rate.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _key_rate_allKeys = _key_rate_allKeys.concat(theseKeys);
      if (_key_rate_allKeys.length > 0) {
        key_rate.keys = _key_rate_allKeys[_key_rate_allKeys.length - 1].name;  // just the last key pressed
        key_rate.rt = _key_rate_allKeys[_key_rate_allKeys.length - 1].rt;
        key_rate.duration = _key_rate_allKeys[_key_rate_allKeys.length - 1].duration;
        // was this correct?
        if (key_rate.keys == "'3', '4'") {
            key_rate.corr = 1;
        } else {
            key_rate.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part3_rateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part3_rateRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part3_rate' ---
    for (const thisComponent of part3_rateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part3_rate.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_rate.keys === undefined) {
      if (['None','none',undefined].includes("'3', '4'")) {
         key_rate.corr = 1;  // correct non-response
      } else {
         key_rate.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_rate.corr, level);
    }
    psychoJS.experiment.addData('key_rate.keys', key_rate.keys);
    psychoJS.experiment.addData('key_rate.corr', key_rate.corr);
    if (typeof key_rate.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_rate.rt', key_rate.rt);
        psychoJS.experiment.addData('key_rate.duration', key_rate.duration);
        routineTimer.reset();
        }
    
    key_rate.stop();
    // the Routine "part3_rate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part3_questionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part3_question' ---
    t = 0;
    part3_questionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('part3_question.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_skip_4
    if (skipTrial === true) {
        continueRoutine = false;
    }
    
    text_question.setText(question);
    text_option.setText(options);
    key_question.keys = undefined;
    key_question.rt = undefined;
    _key_question_allKeys = [];
    // Run 'Begin Routine' code from code_part3
    rate_ans = key_rate.keys;
    myReps = 1;
    
    // keep track of which components have finished
    part3_questionComponents = [];
    part3_questionComponents.push(text_question);
    part3_questionComponents.push(text_option);
    part3_questionComponents.push(key_question);
    part3_questionComponents.push(text_5);
    
    for (const thisComponent of part3_questionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part3_questionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part3_question' ---
    // get current time
    t = part3_questionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_question* updates
    if (t >= 0.0 && text_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_question.tStart = t;  // (not accounting for frame time here)
      text_question.frameNStart = frameN;  // exact frame index
      
      text_question.setAutoDraw(true);
    }
    
    
    // *text_option* updates
    if (t >= 0.0 && text_option.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_option.tStart = t;  // (not accounting for frame time here)
      text_option.frameNStart = frameN;  // exact frame index
      
      text_option.setAutoDraw(true);
    }
    
    
    // *key_question* updates
    if (t >= 0.0 && key_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_question.tStart = t;  // (not accounting for frame time here)
      key_question.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_question.clock.reset();
      key_question.start();
      key_question.clearEvents();
    }
    
    if (key_question.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_question.getKeys({keyList: ['1', '2', '3', '4'], waitRelease: false});
      _key_question_allKeys = _key_question_allKeys.concat(theseKeys);
      if (_key_question_allKeys.length > 0) {
        key_question.keys = _key_question_allKeys[_key_question_allKeys.length - 1].name;  // just the last key pressed
        key_question.rt = _key_question_allKeys[_key_question_allKeys.length - 1].rt;
        key_question.duration = _key_question_allKeys[_key_question_allKeys.length - 1].duration;
        // was this correct?
        if (key_question.keys == correct_answer) {
            key_question.corr = 1;
        } else {
            key_question.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part3_questionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part3_questionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part3_question' ---
    for (const thisComponent of part3_questionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part3_question.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_question.keys === undefined) {
      if (['None','none',undefined].includes(correct_answer)) {
         key_question.corr = 1;  // correct non-response
      } else {
         key_question.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_question.corr, level);
    }
    psychoJS.experiment.addData('key_question.keys', key_question.keys);
    psychoJS.experiment.addData('key_question.corr', key_question.corr);
    if (typeof key_question.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_question.rt', key_question.rt);
        psychoJS.experiment.addData('key_question.duration', key_question.duration);
        routineTimer.reset();
        }
    
    key_question.stop();
    // Run 'End Routine' code from code_part3
    if ((key_question.corr === 1)) {
        logic_vec_ans[qst_num] = true;
        if (((rate_ans === "3") || (rate_ans === "4"))) {
            myReps = 0;
        } else {
            visualization_loop.finished = false;
            myReps = 1;
        }
    } else {
        myReps = 1;
        visualization_loop.finished = false;
    }
    if ((all(logic_vec_ans) && ((rate_ans === "3") || (rate_ans === "4")))) {
        visualization_loop.finished = true;
    }
    
    // the Routine "part3_question" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function study_againRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'study_again' ---
    t = 0;
    study_againClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('study_again.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_skip_5
    if (skipTrial === true) {
        continueRoutine = false;
    }
    
    study_image1.setImage(scene_again);
    study_name1.setPos([0, 0.35]);
    study_name1.setText(label_current);
    key_sceneLearn_2.keys = undefined;
    key_sceneLearn_2.rt = undefined;
    _key_sceneLearn_2_allKeys = [];
    // keep track of which components have finished
    study_againComponents = [];
    study_againComponents.push(study_image1);
    study_againComponents.push(study_name1);
    study_againComponents.push(key_sceneLearn_2);
    study_againComponents.push(text_3);
    study_againComponents.push(text_4);
    
    for (const thisComponent of study_againComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function study_againRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'study_again' ---
    // get current time
    t = study_againClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *study_image1* updates
    if (t >= 0.0 && study_image1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      study_image1.tStart = t;  // (not accounting for frame time here)
      study_image1.frameNStart = frameN;  // exact frame index
      
      study_image1.setAutoDraw(true);
    }
    
    
    // *study_name1* updates
    if (t >= 0.0 && study_name1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      study_name1.tStart = t;  // (not accounting for frame time here)
      study_name1.frameNStart = frameN;  // exact frame index
      
      study_name1.setAutoDraw(true);
    }
    
    
    // *key_sceneLearn_2* updates
    if (t >= 0.0 && key_sceneLearn_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_sceneLearn_2.tStart = t;  // (not accounting for frame time here)
      key_sceneLearn_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_sceneLearn_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_sceneLearn_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_sceneLearn_2.clearEvents(); });
    }
    
    if (key_sceneLearn_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_sceneLearn_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_sceneLearn_2_allKeys = _key_sceneLearn_2_allKeys.concat(theseKeys);
      if (_key_sceneLearn_2_allKeys.length > 0) {
        key_sceneLearn_2.keys = _key_sceneLearn_2_allKeys[_key_sceneLearn_2_allKeys.length - 1].name;  // just the last key pressed
        key_sceneLearn_2.rt = _key_sceneLearn_2_allKeys[_key_sceneLearn_2_allKeys.length - 1].rt;
        key_sceneLearn_2.duration = _key_sceneLearn_2_allKeys[_key_sceneLearn_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of study_againComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function study_againRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'study_again' ---
    for (const thisComponent of study_againComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('study_again.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_sceneLearn_2.corr, level);
    }
    psychoJS.experiment.addData('key_sceneLearn_2.keys', key_sceneLearn_2.keys);
    if (typeof key_sceneLearn_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_sceneLearn_2.rt', key_sceneLearn_2.rt);
        psychoJS.experiment.addData('key_sceneLearn_2.duration', key_sceneLearn_2.duration);
        routineTimer.reset();
        }
    
    key_sceneLearn_2.stop();
    // the Routine "study_again" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function msg_next_sceneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'msg_next_scene' ---
    t = 0;
    msg_next_sceneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('msg_next_scene.started', globalClock.getTime());
    // keep track of which components have finished
    msg_next_sceneComponents = [];
    msg_next_sceneComponents.push(text_next_scene);
    
    for (const thisComponent of msg_next_sceneComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function msg_next_sceneRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'msg_next_scene' ---
    // get current time
    t = msg_next_sceneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_next_scene* updates
    if (t >= 0.0 && text_next_scene.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_next_scene.tStart = t;  // (not accounting for frame time here)
      text_next_scene.frameNStart = frameN;  // exact frame index
      
      text_next_scene.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_next_scene.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_next_scene.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of msg_next_sceneComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function msg_next_sceneRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'msg_next_scene' ---
    for (const thisComponent of msg_next_sceneComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('msg_next_scene.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function part4_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'part4_instructions' ---
    t = 0;
    part4_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('part4_instructions.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_training_vars
    import * as pd from 'pandas';
    subnum = Number.parseInt(expInfo["participant"]);
    if ((subnum > 2000)) {
        df_vars = pd.read_csv("counterbalanced_vars_meg_main.csv");
    } else {
        if ((subnum < 1000)) {
            df_vars = pd.read_csv("counterbalanced_vars_behav.csv");
        }
    }
    ind = df_vars[(df_vars["Participant"] === subnum)].index[0];
    sub_conds = df_vars.loc[[ind, df_vars.columns]].values.tolist();
    if ((sub_conds[1] === 0)) {
        key_related = "q";
        key_unrelated = "p";
        instruction_text = "If they are related, press Q\nIf they are unrelated, press P\n\nPress SPACEBAR to continue.";
    } else {
        if ((sub_conds[1] === 1)) {
            key_related = "p";
            key_unrelated = "q";
            instruction_text = "If they are related, press P\nIf they are unrelated, press Q\n\nPress SPACEBAR to continue.";
        }
    }
    
    key_part4_instructions.keys = undefined;
    key_part4_instructions.rt = undefined;
    _key_part4_instructions_allKeys = [];
    // keep track of which components have finished
    part4_instructionsComponents = [];
    part4_instructionsComponents.push(text_part4_instructions);
    part4_instructionsComponents.push(key_part4_instructions);
    
    for (const thisComponent of part4_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function part4_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'part4_instructions' ---
    // get current time
    t = part4_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_part4_instructions* updates
    if (t >= 0.0 && text_part4_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_part4_instructions.tStart = t;  // (not accounting for frame time here)
      text_part4_instructions.frameNStart = frameN;  // exact frame index
      
      text_part4_instructions.setAutoDraw(true);
    }
    
    
    // *key_part4_instructions* updates
    if (t >= 1.0 && key_part4_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_part4_instructions.tStart = t;  // (not accounting for frame time here)
      key_part4_instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_part4_instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_part4_instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_part4_instructions.clearEvents(); });
    }
    
    if (key_part4_instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_part4_instructions.getKeys({keyList: ['space'], waitRelease: false});
      _key_part4_instructions_allKeys = _key_part4_instructions_allKeys.concat(theseKeys);
      if (_key_part4_instructions_allKeys.length > 0) {
        key_part4_instructions.keys = _key_part4_instructions_allKeys[_key_part4_instructions_allKeys.length - 1].name;  // just the last key pressed
        key_part4_instructions.rt = _key_part4_instructions_allKeys[_key_part4_instructions_allKeys.length - 1].rt;
        key_part4_instructions.duration = _key_part4_instructions_allKeys[_key_part4_instructions_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of part4_instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function part4_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'part4_instructions' ---
    for (const thisComponent of part4_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('part4_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_part4_instructions.corr, level);
    }
    psychoJS.experiment.addData('key_part4_instructions.keys', key_part4_instructions.keys);
    if (typeof key_part4_instructions.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_part4_instructions.rt', key_part4_instructions.rt);
        psychoJS.experiment.addData('key_part4_instructions.duration', key_part4_instructions.duration);
        routineTimer.reset();
        }
    
    key_part4_instructions.stop();
    // the Routine "part4_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function enc_instruction_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'enc_instruction_screen' ---
    t = 0;
    enc_instruction_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('enc_instruction_screen.started', globalClock.getTime());
    key_proceed.keys = undefined;
    key_proceed.rt = undefined;
    _key_proceed_allKeys = [];
    // keep track of which components have finished
    enc_instruction_screenComponents = [];
    enc_instruction_screenComponents.push(text_enc_instruction);
    enc_instruction_screenComponents.push(key_proceed);
    
    for (const thisComponent of enc_instruction_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function enc_instruction_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'enc_instruction_screen' ---
    // get current time
    t = enc_instruction_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_enc_instruction* updates
    if (t >= 0.0 && text_enc_instruction.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_enc_instruction.tStart = t;  // (not accounting for frame time here)
      text_enc_instruction.frameNStart = frameN;  // exact frame index
      
      text_enc_instruction.setAutoDraw(true);
    }
    
    
    // *key_proceed* updates
    if (t >= 3.0 && key_proceed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_proceed.tStart = t;  // (not accounting for frame time here)
      key_proceed.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_proceed.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_proceed.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_proceed.clearEvents(); });
    }
    
    if (key_proceed.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_proceed.getKeys({keyList: ['space'], waitRelease: false});
      _key_proceed_allKeys = _key_proceed_allKeys.concat(theseKeys);
      if (_key_proceed_allKeys.length > 0) {
        key_proceed.keys = _key_proceed_allKeys[_key_proceed_allKeys.length - 1].name;  // just the last key pressed
        key_proceed.rt = _key_proceed_allKeys[_key_proceed_allKeys.length - 1].rt;
        key_proceed.duration = _key_proceed_allKeys[_key_proceed_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of enc_instruction_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function enc_instruction_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'enc_instruction_screen' ---
    for (const thisComponent of enc_instruction_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('enc_instruction_screen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_proceed.corr, level);
    }
    psychoJS.experiment.addData('key_proceed.keys', key_proceed.keys);
    if (typeof key_proceed.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_proceed.rt', key_proceed.rt);
        psychoJS.experiment.addData('key_proceed.duration', key_proceed.duration);
        routineTimer.reset();
        }
    
    key_proceed.stop();
    // the Routine "enc_instruction_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function enc_inst_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'enc_inst_2' ---
    t = 0;
    enc_inst_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('enc_inst_2.started', globalClock.getTime());
    text_relatedness_keys.setText(instruction_text);
    key_proceed_2.keys = undefined;
    key_proceed_2.rt = undefined;
    _key_proceed_2_allKeys = [];
    // keep track of which components have finished
    enc_inst_2Components = [];
    enc_inst_2Components.push(text_relatedness_keys);
    enc_inst_2Components.push(key_proceed_2);
    
    for (const thisComponent of enc_inst_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function enc_inst_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'enc_inst_2' ---
    // get current time
    t = enc_inst_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_relatedness_keys* updates
    if (t >= 0.0 && text_relatedness_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_relatedness_keys.tStart = t;  // (not accounting for frame time here)
      text_relatedness_keys.frameNStart = frameN;  // exact frame index
      
      text_relatedness_keys.setAutoDraw(true);
    }
    
    
    // *key_proceed_2* updates
    if (t >= 3 && key_proceed_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_proceed_2.tStart = t;  // (not accounting for frame time here)
      key_proceed_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_proceed_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_proceed_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_proceed_2.clearEvents(); });
    }
    
    if (key_proceed_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_proceed_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_proceed_2_allKeys = _key_proceed_2_allKeys.concat(theseKeys);
      if (_key_proceed_2_allKeys.length > 0) {
        key_proceed_2.keys = _key_proceed_2_allKeys[_key_proceed_2_allKeys.length - 1].name;  // just the last key pressed
        key_proceed_2.rt = _key_proceed_2_allKeys[_key_proceed_2_allKeys.length - 1].rt;
        key_proceed_2.duration = _key_proceed_2_allKeys[_key_proceed_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of enc_inst_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function enc_inst_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'enc_inst_2' ---
    for (const thisComponent of enc_inst_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('enc_inst_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_proceed_2.corr, level);
    }
    psychoJS.experiment.addData('key_proceed_2.keys', key_proceed_2.keys);
    if (typeof key_proceed_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_proceed_2.rt', key_proceed_2.rt);
        psychoJS.experiment.addData('key_proceed_2.duration', key_proceed_2.duration);
        routineTimer.reset();
        }
    
    key_proceed_2.stop();
    // the Routine "enc_inst_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function get_stim_listRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'get_stim_list' ---
    t = 0;
    get_stim_listClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('get_stim_list.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_get_stim_list
    subnum = expInfo["participant"];
    stim_list = "stimuli/stim_lists/stimuli_list_training_sub_" + subnum + ".csv";
    
    // keep track of which components have finished
    get_stim_listComponents = [];
    
    for (const thisComponent of get_stim_listComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function get_stim_listRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'get_stim_list' ---
    // get current time
    t = get_stim_listClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of get_stim_listComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function get_stim_listRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'get_stim_list' ---
    for (const thisComponent of get_stim_listComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('get_stim_list.stopped', globalClock.getTime());
    // the Routine "get_stim_list" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function scene_item_presentationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'scene_item_presentation' ---
    t = 0;
    scene_item_presentationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('scene_item_presentation.started', globalClock.getTime());
    image_scene.setImage(scene_stimulus);
    image_item.setImage(item_stimulus);
    // keep track of which components have finished
    scene_item_presentationComponents = [];
    scene_item_presentationComponents.push(image_scene);
    scene_item_presentationComponents.push(image_item);
    
    for (const thisComponent of scene_item_presentationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function scene_item_presentationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'scene_item_presentation' ---
    // get current time
    t = scene_item_presentationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_scene* updates
    if (t >= 0.0 && image_scene.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_scene.tStart = t;  // (not accounting for frame time here)
      image_scene.frameNStart = frameN;  // exact frame index
      
      image_scene.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_scene.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_scene.setAutoDraw(false);
    }
    
    
    // *image_item* updates
    if (t >= 0 && image_item.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_item.tStart = t;  // (not accounting for frame time here)
      image_item.frameNStart = frameN;  // exact frame index
      
      image_item.setAutoDraw(true);
    }
    
    frameRemains = 0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_item.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_item.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of scene_item_presentationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function scene_item_presentationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'scene_item_presentation' ---
    for (const thisComponent of scene_item_presentationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('scene_item_presentation.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function congruency_responseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'congruency_response' ---
    t = 0;
    congruency_responseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('congruency_response.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_cor_resp
    if ((congruency === "sc")) {
        cor_key = key_related;
    } else {
        if ((congruency === "si")) {
            cor_key = key_unrelated;
        }
    }
    
    key_resp_congruency.keys = undefined;
    key_resp_congruency.rt = undefined;
    _key_resp_congruency_allKeys = [];
    // keep track of which components have finished
    congruency_responseComponents = [];
    congruency_responseComponents.push(text_congruency);
    congruency_responseComponents.push(key_resp_congruency);
    
    for (const thisComponent of congruency_responseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function congruency_responseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'congruency_response' ---
    // get current time
    t = congruency_responseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_congruency* updates
    if (t >= 0.0 && text_congruency.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_congruency.tStart = t;  // (not accounting for frame time here)
      text_congruency.frameNStart = frameN;  // exact frame index
      
      text_congruency.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_congruency.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_congruency.setAutoDraw(false);
    }
    
    
    // *key_resp_congruency* updates
    if (t >= 0.0 && key_resp_congruency.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_congruency.tStart = t;  // (not accounting for frame time here)
      key_resp_congruency.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_congruency.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_congruency.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_congruency.clearEvents(); });
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_congruency.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_congruency.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_congruency.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_congruency.getKeys({keyList: ['q', 'p'], waitRelease: false});
      _key_resp_congruency_allKeys = _key_resp_congruency_allKeys.concat(theseKeys);
      if (_key_resp_congruency_allKeys.length > 0) {
        key_resp_congruency.keys = _key_resp_congruency_allKeys[_key_resp_congruency_allKeys.length - 1].name;  // just the last key pressed
        key_resp_congruency.rt = _key_resp_congruency_allKeys[_key_resp_congruency_allKeys.length - 1].rt;
        key_resp_congruency.duration = _key_resp_congruency_allKeys[_key_resp_congruency_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_congruency.keys == cor_key) {
            key_resp_congruency.corr = 1;
        } else {
            key_resp_congruency.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of congruency_responseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function congruency_responseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'congruency_response' ---
    for (const thisComponent of congruency_responseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('congruency_response.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_congruency.keys === undefined) {
      if (['None','none',undefined].includes(cor_key)) {
         key_resp_congruency.corr = 1;  // correct non-response
      } else {
         key_resp_congruency.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_congruency.corr, level);
    }
    psychoJS.experiment.addData('key_resp_congruency.keys', key_resp_congruency.keys);
    psychoJS.experiment.addData('key_resp_congruency.corr', key_resp_congruency.corr);
    if (typeof key_resp_congruency.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_congruency.rt', key_resp_congruency.rt);
        psychoJS.experiment.addData('key_resp_congruency.duration', key_resp_congruency.duration);
        routineTimer.reset();
        }
    
    key_resp_congruency.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function blank1000_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank1000_2' ---
    t = 0;
    blank1000_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank1000_2.started', globalClock.getTime());
    // keep track of which components have finished
    blank1000_2Components = [];
    blank1000_2Components.push(text_6);
    
    for (const thisComponent of blank1000_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function blank1000_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank1000_2' ---
    // get current time
    t = blank1000_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank1000_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function blank1000_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank1000_2' ---
    for (const thisComponent of blank1000_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank1000_2.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_genRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ret_inst_gen' ---
    t = 0;
    ret_inst_genClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ret_inst_gen.started', globalClock.getTime());
    key_continue_7.keys = undefined;
    key_continue_7.rt = undefined;
    _key_continue_7_allKeys = [];
    // keep track of which components have finished
    ret_inst_genComponents = [];
    ret_inst_genComponents.push(text_7);
    ret_inst_genComponents.push(key_continue_7);
    
    for (const thisComponent of ret_inst_genComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_genRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ret_inst_gen' ---
    // get current time
    t = ret_inst_genClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    
    // *key_continue_7* updates
    if (t >= 3 && key_continue_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_continue_7.tStart = t;  // (not accounting for frame time here)
      key_continue_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_continue_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_continue_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_continue_7.clearEvents(); });
    }
    
    if (key_continue_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_continue_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_continue_7_allKeys = _key_continue_7_allKeys.concat(theseKeys);
      if (_key_continue_7_allKeys.length > 0) {
        key_continue_7.keys = _key_continue_7_allKeys[_key_continue_7_allKeys.length - 1].name;  // just the last key pressed
        key_continue_7.rt = _key_continue_7_allKeys[_key_continue_7_allKeys.length - 1].rt;
        key_continue_7.duration = _key_continue_7_allKeys[_key_continue_7_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_inst_genComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ret_inst_genRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ret_inst_gen' ---
    for (const thisComponent of ret_inst_genComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ret_inst_gen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_continue_7.corr, level);
    }
    psychoJS.experiment.addData('key_continue_7.keys', key_continue_7.keys);
    if (typeof key_continue_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_continue_7.rt', key_continue_7.rt);
        psychoJS.experiment.addData('key_continue_7.duration', key_continue_7.duration);
        routineTimer.reset();
        }
    
    key_continue_7.stop();
    // the Routine "ret_inst_gen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ret_inst_1' ---
    t = 0;
    ret_inst_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ret_inst_1.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_ret_rand_vars
    if ((sub_conds[2] === 0)) {
        key_jungle = "1";
        key_sea = "2";
    } else {
        key_jungle = "2";
        key_sea = "1";
    }
    if ((sub_conds[3] === 0)) {
        color_jungle = "purple";
        color_sea = "pink";
    } else {
        color_jungle = "pink";
        color_sea = "purple";
    }
    if ((sub_conds[4] === 0)) {
        key_J1 = "1";
        key_J2 = "2";
    } else {
        key_J1 = "2";
        key_J2 = "1";
    }
    if ((sub_conds[5] === 0)) {
        key_U1 = "1";
        key_U2 = "2";
    } else {
        key_U1 = "2";
        key_U2 = "1";
    }
    
    // Run 'Begin Routine' code from code_ret_context_screen
    if ((key_jungle === "1")) {
        context_jungle_txt = ("1. " + "Jungle");
        pos_jungle = [0, 0.06];
        context_sea_txt = ("2. " + "Undersea");
        pos_sea = [0, 0];
    } else {
        if ((key_jungle === "2")) {
            context_sea_txt = ("1. " + "Undersea");
            pos_sea = [0, 0.06];
            context_jungle_txt = ("2. " + "Jungle");
            pos_jungle = [0, 0];
        }
    }
    
    // Run 'Begin Routine' code from code_ret_scene_screens
    labels = df[["scene_stimulus", "scene_label"]];
    labels = dict(zip(labels["scene_stimulus"], labels["scene_label"]));
    if ((key_J1 === "1")) {
        jungle_lbl_text = ((("1." + labels["J1"]) + "\n2.") + labels["J2"]);
    } else {
        if ((key_J1 === "2")) {
            jungle_lbl_text = ((("1." + labels["J2"]) + "\n2.") + labels["J1"]);
        }
    }
    if ((key_U1 === "1")) {
        sea_lbl_text = ((("1." + labels["U1"]) + "\n2.") + labels["U2"]);
    } else {
        if ((key_U1 === "2")) {
            sea_lbl_text = ((("1." + labels["U2"]) + "\n2.") + labels["U1"]);
        }
    }
    
    key_continue.keys = undefined;
    key_continue.rt = undefined;
    _key_continue_allKeys = [];
    // keep track of which components have finished
    ret_inst_1Components = [];
    ret_inst_1Components.push(image_inst1);
    ret_inst_1Components.push(key_continue);
    
    for (const thisComponent of ret_inst_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ret_inst_1' ---
    // get current time
    t = ret_inst_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_inst1* updates
    if (t >= 0.0 && image_inst1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_inst1.tStart = t;  // (not accounting for frame time here)
      image_inst1.frameNStart = frameN;  // exact frame index
      
      image_inst1.setAutoDraw(true);
    }
    
    
    // *key_continue* updates
    if (t >= 3.0 && key_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_continue.tStart = t;  // (not accounting for frame time here)
      key_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_continue.clearEvents(); });
    }
    
    if (key_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_continue.getKeys({keyList: ['space'], waitRelease: false});
      _key_continue_allKeys = _key_continue_allKeys.concat(theseKeys);
      if (_key_continue_allKeys.length > 0) {
        key_continue.keys = _key_continue_allKeys[_key_continue_allKeys.length - 1].name;  // just the last key pressed
        key_continue.rt = _key_continue_allKeys[_key_continue_allKeys.length - 1].rt;
        key_continue.duration = _key_continue_allKeys[_key_continue_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_inst_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ret_inst_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ret_inst_1' ---
    for (const thisComponent of ret_inst_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ret_inst_1.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_continue.corr, level);
    }
    psychoJS.experiment.addData('key_continue.keys', key_continue.keys);
    if (typeof key_continue.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_continue.rt', key_continue.rt);
        psychoJS.experiment.addData('key_continue.duration', key_continue.duration);
        routineTimer.reset();
        }
    
    key_continue.stop();
    // the Routine "ret_inst_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ret_inst_2' ---
    t = 0;
    ret_inst_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ret_inst_2.started', globalClock.getTime());
    key_continue_2.keys = undefined;
    key_continue_2.rt = undefined;
    _key_continue_2_allKeys = [];
    // keep track of which components have finished
    ret_inst_2Components = [];
    ret_inst_2Components.push(image_inst2);
    ret_inst_2Components.push(key_continue_2);
    
    for (const thisComponent of ret_inst_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ret_inst_2' ---
    // get current time
    t = ret_inst_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_inst2* updates
    if (t >= 0.0 && image_inst2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_inst2.tStart = t;  // (not accounting for frame time here)
      image_inst2.frameNStart = frameN;  // exact frame index
      
      image_inst2.setAutoDraw(true);
    }
    
    
    // *key_continue_2* updates
    if (t >= 3 && key_continue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_continue_2.tStart = t;  // (not accounting for frame time here)
      key_continue_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_continue_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_continue_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_continue_2.clearEvents(); });
    }
    
    if (key_continue_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_continue_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_continue_2_allKeys = _key_continue_2_allKeys.concat(theseKeys);
      if (_key_continue_2_allKeys.length > 0) {
        key_continue_2.keys = _key_continue_2_allKeys[_key_continue_2_allKeys.length - 1].name;  // just the last key pressed
        key_continue_2.rt = _key_continue_2_allKeys[_key_continue_2_allKeys.length - 1].rt;
        key_continue_2.duration = _key_continue_2_allKeys[_key_continue_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_inst_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ret_inst_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ret_inst_2' ---
    for (const thisComponent of ret_inst_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ret_inst_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_continue_2.corr, level);
    }
    psychoJS.experiment.addData('key_continue_2.keys', key_continue_2.keys);
    if (typeof key_continue_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_continue_2.rt', key_continue_2.rt);
        psychoJS.experiment.addData('key_continue_2.duration', key_continue_2.duration);
        routineTimer.reset();
        }
    
    key_continue_2.stop();
    // the Routine "ret_inst_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ret_inst_3' ---
    t = 0;
    ret_inst_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ret_inst_3.started', globalClock.getTime());
    key_continue_3.keys = undefined;
    key_continue_3.rt = undefined;
    _key_continue_3_allKeys = [];
    // keep track of which components have finished
    ret_inst_3Components = [];
    ret_inst_3Components.push(image_inst3);
    ret_inst_3Components.push(key_continue_3);
    
    for (const thisComponent of ret_inst_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ret_inst_3' ---
    // get current time
    t = ret_inst_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_inst3* updates
    if (t >= 0.0 && image_inst3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_inst3.tStart = t;  // (not accounting for frame time here)
      image_inst3.frameNStart = frameN;  // exact frame index
      
      image_inst3.setAutoDraw(true);
    }
    
    
    // *key_continue_3* updates
    if (t >= 3 && key_continue_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_continue_3.tStart = t;  // (not accounting for frame time here)
      key_continue_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_continue_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_continue_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_continue_3.clearEvents(); });
    }
    
    if (key_continue_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_continue_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_continue_3_allKeys = _key_continue_3_allKeys.concat(theseKeys);
      if (_key_continue_3_allKeys.length > 0) {
        key_continue_3.keys = _key_continue_3_allKeys[_key_continue_3_allKeys.length - 1].name;  // just the last key pressed
        key_continue_3.rt = _key_continue_3_allKeys[_key_continue_3_allKeys.length - 1].rt;
        key_continue_3.duration = _key_continue_3_allKeys[_key_continue_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_inst_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ret_inst_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ret_inst_3' ---
    for (const thisComponent of ret_inst_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ret_inst_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_continue_3.corr, level);
    }
    psychoJS.experiment.addData('key_continue_3.keys', key_continue_3.keys);
    if (typeof key_continue_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_continue_3.rt', key_continue_3.rt);
        psychoJS.experiment.addData('key_continue_3.duration', key_continue_3.duration);
        routineTimer.reset();
        }
    
    key_continue_3.stop();
    // the Routine "ret_inst_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ret_inst_4' ---
    t = 0;
    ret_inst_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ret_inst_4.started', globalClock.getTime());
    key_continue_4.keys = undefined;
    key_continue_4.rt = undefined;
    _key_continue_4_allKeys = [];
    // keep track of which components have finished
    ret_inst_4Components = [];
    ret_inst_4Components.push(image_inst4);
    ret_inst_4Components.push(key_continue_4);
    
    for (const thisComponent of ret_inst_4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ret_inst_4' ---
    // get current time
    t = ret_inst_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_inst4* updates
    if (t >= 0.0 && image_inst4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_inst4.tStart = t;  // (not accounting for frame time here)
      image_inst4.frameNStart = frameN;  // exact frame index
      
      image_inst4.setAutoDraw(true);
    }
    
    
    // *key_continue_4* updates
    if (t >= 3 && key_continue_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_continue_4.tStart = t;  // (not accounting for frame time here)
      key_continue_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_continue_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_continue_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_continue_4.clearEvents(); });
    }
    
    if (key_continue_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_continue_4.getKeys({keyList: ['space'], waitRelease: false});
      _key_continue_4_allKeys = _key_continue_4_allKeys.concat(theseKeys);
      if (_key_continue_4_allKeys.length > 0) {
        key_continue_4.keys = _key_continue_4_allKeys[_key_continue_4_allKeys.length - 1].name;  // just the last key pressed
        key_continue_4.rt = _key_continue_4_allKeys[_key_continue_4_allKeys.length - 1].rt;
        key_continue_4.duration = _key_continue_4_allKeys[_key_continue_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_inst_4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ret_inst_4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ret_inst_4' ---
    for (const thisComponent of ret_inst_4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ret_inst_4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_continue_4.corr, level);
    }
    psychoJS.experiment.addData('key_continue_4.keys', key_continue_4.keys);
    if (typeof key_continue_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_continue_4.rt', key_continue_4.rt);
        psychoJS.experiment.addData('key_continue_4.duration', key_continue_4.duration);
        routineTimer.reset();
        }
    
    key_continue_4.stop();
    // the Routine "ret_inst_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ret_inst_5' ---
    t = 0;
    ret_inst_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ret_inst_5.started', globalClock.getTime());
    key_continue_5.keys = undefined;
    key_continue_5.rt = undefined;
    _key_continue_5_allKeys = [];
    // keep track of which components have finished
    ret_inst_5Components = [];
    ret_inst_5Components.push(image_inst5);
    ret_inst_5Components.push(key_continue_5);
    
    for (const thisComponent of ret_inst_5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ret_inst_5' ---
    // get current time
    t = ret_inst_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_inst5* updates
    if (t >= 0.0 && image_inst5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_inst5.tStart = t;  // (not accounting for frame time here)
      image_inst5.frameNStart = frameN;  // exact frame index
      
      image_inst5.setAutoDraw(true);
    }
    
    
    // *key_continue_5* updates
    if (t >= 3 && key_continue_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_continue_5.tStart = t;  // (not accounting for frame time here)
      key_continue_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_continue_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_continue_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_continue_5.clearEvents(); });
    }
    
    if (key_continue_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_continue_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_continue_5_allKeys = _key_continue_5_allKeys.concat(theseKeys);
      if (_key_continue_5_allKeys.length > 0) {
        key_continue_5.keys = _key_continue_5_allKeys[_key_continue_5_allKeys.length - 1].name;  // just the last key pressed
        key_continue_5.rt = _key_continue_5_allKeys[_key_continue_5_allKeys.length - 1].rt;
        key_continue_5.duration = _key_continue_5_allKeys[_key_continue_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_inst_5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ret_inst_5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ret_inst_5' ---
    for (const thisComponent of ret_inst_5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ret_inst_5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_continue_5.corr, level);
    }
    psychoJS.experiment.addData('key_continue_5.keys', key_continue_5.keys);
    if (typeof key_continue_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_continue_5.rt', key_continue_5.rt);
        psychoJS.experiment.addData('key_continue_5.duration', key_continue_5.duration);
        routineTimer.reset();
        }
    
    key_continue_5.stop();
    // the Routine "ret_inst_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ret_inst_6' ---
    t = 0;
    ret_inst_6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ret_inst_6.started', globalClock.getTime());
    key_continue_6.keys = undefined;
    key_continue_6.rt = undefined;
    _key_continue_6_allKeys = [];
    // keep track of which components have finished
    ret_inst_6Components = [];
    ret_inst_6Components.push(image_inst6);
    ret_inst_6Components.push(key_continue_6);
    
    for (const thisComponent of ret_inst_6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function ret_inst_6RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ret_inst_6' ---
    // get current time
    t = ret_inst_6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_inst6* updates
    if (t >= 0.0 && image_inst6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_inst6.tStart = t;  // (not accounting for frame time here)
      image_inst6.frameNStart = frameN;  // exact frame index
      
      image_inst6.setAutoDraw(true);
    }
    
    
    // *key_continue_6* updates
    if (t >= 3 && key_continue_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_continue_6.tStart = t;  // (not accounting for frame time here)
      key_continue_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_continue_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_continue_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_continue_6.clearEvents(); });
    }
    
    if (key_continue_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_continue_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_continue_6_allKeys = _key_continue_6_allKeys.concat(theseKeys);
      if (_key_continue_6_allKeys.length > 0) {
        key_continue_6.keys = _key_continue_6_allKeys[_key_continue_6_allKeys.length - 1].name;  // just the last key pressed
        key_continue_6.rt = _key_continue_6_allKeys[_key_continue_6_allKeys.length - 1].rt;
        key_continue_6.duration = _key_continue_6_allKeys[_key_continue_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_inst_6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function ret_inst_6RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ret_inst_6' ---
    for (const thisComponent of ret_inst_6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ret_inst_6.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_continue_6.corr, level);
    }
    psychoJS.experiment.addData('key_continue_6.keys', key_continue_6.keys);
    if (typeof key_continue_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_continue_6.rt', key_continue_6.rt);
        psychoJS.experiment.addData('key_continue_6.duration', key_continue_6.duration);
        routineTimer.reset();
        }
    
    key_continue_6.stop();
    // the Routine "ret_inst_6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function item_imagine_sceneRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'item_imagine_scene' ---
    t = 0;
    item_imagine_sceneClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(4.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('item_imagine_scene.started', globalClock.getTime());
    item_cue.setImage(item_stimulus);
    // keep track of which components have finished
    item_imagine_sceneComponents = [];
    item_imagine_sceneComponents.push(text_imagine);
    item_imagine_sceneComponents.push(item_cue);
    
    for (const thisComponent of item_imagine_sceneComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function item_imagine_sceneRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'item_imagine_scene' ---
    // get current time
    t = item_imagine_sceneClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_imagine* updates
    if (t >= 0.0 && text_imagine.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_imagine.tStart = t;  // (not accounting for frame time here)
      text_imagine.frameNStart = frameN;  // exact frame index
      
      text_imagine.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_imagine.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_imagine.setAutoDraw(false);
    }
    
    
    // *item_cue* updates
    if (t >= 0.0 && item_cue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      item_cue.tStart = t;  // (not accounting for frame time here)
      item_cue.frameNStart = frameN;  // exact frame index
      
      item_cue.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (item_cue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      item_cue.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of item_imagine_sceneComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function item_imagine_sceneRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'item_imagine_scene' ---
    for (const thisComponent of item_imagine_sceneComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('item_imagine_scene.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function select_contextRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'select_context' ---
    t = 0;
    select_contextClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('select_context.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_cor_context_key
    if ((scene_cat === "Jungle")) {
        cor_key = key_jungle;
    } else {
        if ((scene_cat === "Undersea")) {
            cor_key = key_sea;
        }
    }
    
    text_sea.setColor(new util.Color(color_sea));
    text_sea.setPos(pos_sea);
    text_sea.setText(context_sea_txt);
    text_jungle.setColor(new util.Color(color_jungle));
    text_jungle.setPos(pos_jungle);
    text_jungle.setText(context_jungle_txt);
    key_resp_context.keys = undefined;
    key_resp_context.rt = undefined;
    _key_resp_context_allKeys = [];
    // keep track of which components have finished
    select_contextComponents = [];
    select_contextComponents.push(text_contrext_headline);
    select_contextComponents.push(text_sea);
    select_contextComponents.push(text_jungle);
    select_contextComponents.push(key_resp_context);
    
    for (const thisComponent of select_contextComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function select_contextRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'select_context' ---
    // get current time
    t = select_contextClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_contrext_headline* updates
    if (t >= 0.0 && text_contrext_headline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_contrext_headline.tStart = t;  // (not accounting for frame time here)
      text_contrext_headline.frameNStart = frameN;  // exact frame index
      
      text_contrext_headline.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_contrext_headline.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_contrext_headline.setAutoDraw(false);
    }
    
    
    // *text_sea* updates
    if (t >= 0.0 && text_sea.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_sea.tStart = t;  // (not accounting for frame time here)
      text_sea.frameNStart = frameN;  // exact frame index
      
      text_sea.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_sea.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_sea.setAutoDraw(false);
    }
    
    
    // *text_jungle* updates
    if (t >= 0.0 && text_jungle.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_jungle.tStart = t;  // (not accounting for frame time here)
      text_jungle.frameNStart = frameN;  // exact frame index
      
      text_jungle.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_jungle.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_jungle.setAutoDraw(false);
    }
    
    
    // *key_resp_context* updates
    if (t >= 0.0 && key_resp_context.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_context.tStart = t;  // (not accounting for frame time here)
      key_resp_context.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp_context.clock.reset();
      key_resp_context.start();
      key_resp_context.clearEvents();
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_context.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_context.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_context.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_context.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_context_allKeys = _key_resp_context_allKeys.concat(theseKeys);
      if (_key_resp_context_allKeys.length > 0) {
        key_resp_context.keys = _key_resp_context_allKeys[_key_resp_context_allKeys.length - 1].name;  // just the last key pressed
        key_resp_context.rt = _key_resp_context_allKeys[_key_resp_context_allKeys.length - 1].rt;
        key_resp_context.duration = _key_resp_context_allKeys[_key_resp_context_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_context.keys == cor_key) {
            key_resp_context.corr = 1;
        } else {
            key_resp_context.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of select_contextComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function select_contextRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'select_context' ---
    for (const thisComponent of select_contextComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('select_context.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_context.keys === undefined) {
      if (['None','none',undefined].includes(cor_key)) {
         key_resp_context.corr = 1;  // correct non-response
      } else {
         key_resp_context.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_context.corr, level);
    }
    psychoJS.experiment.addData('key_resp_context.keys', key_resp_context.keys);
    psychoJS.experiment.addData('key_resp_context.corr', key_resp_context.corr);
    if (typeof key_resp_context.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_context.rt', key_resp_context.rt);
        psychoJS.experiment.addData('key_resp_context.duration', key_resp_context.duration);
        routineTimer.reset();
        }
    
    key_resp_context.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function blank500RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank500' ---
    t = 0;
    blank500Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank500.started', globalClock.getTime());
    // keep track of which components have finished
    blank500Components = [];
    blank500Components.push(text_blank);
    
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function blank500RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank500' ---
    // get current time
    t = blank500Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_blank* updates
    if (t >= 0.0 && text_blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_blank.tStart = t;  // (not accounting for frame time here)
      text_blank.frameNStart = frameN;  // exact frame index
      
      text_blank.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_blank.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank500Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function blank500RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank500' ---
    for (const thisComponent of blank500Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank500.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function context_confidenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'context_confidence' ---
    t = 0;
    context_confidenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('context_confidence.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_get_context_choice
    if ((key_resp_context.keys === key_jungle)) {
        chosen_cont = "Jungle";
        chosen_cont_color = color_jungle;
    } else {
        if ((key_resp_context.keys === key_sea)) {
            chosen_cont = "Undersea";
            chosen_cont_color = color_sea;
        } else {
            if ((key_resp_context.keys === null)) {
                chosen_cont = "Nothing was chosen";
                chosen_cont_color = "Black";
            }
        }
    }
    
    text_context_choice.setColor(new util.Color(chosen_cont_color));
    text_context_choice.setText(chosen_cont);
    slider_context_conf.reset()
    key_resp_context_conf.keys = undefined;
    key_resp_context_conf.rt = undefined;
    _key_resp_context_conf_allKeys = [];
    // keep track of which components have finished
    context_confidenceComponents = [];
    context_confidenceComponents.push(text_context_choice);
    context_confidenceComponents.push(slider_context_conf);
    context_confidenceComponents.push(key_resp_context_conf);
    
    for (const thisComponent of context_confidenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function context_confidenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'context_confidence' ---
    // get current time
    t = context_confidenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_context_choice* updates
    if (t >= 0.0 && text_context_choice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_context_choice.tStart = t;  // (not accounting for frame time here)
      text_context_choice.frameNStart = frameN;  // exact frame index
      
      text_context_choice.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_context_choice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_context_choice.setAutoDraw(false);
    }
    
    
    // *slider_context_conf* updates
    if (t >= 0.0 && slider_context_conf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_context_conf.tStart = t;  // (not accounting for frame time here)
      slider_context_conf.frameNStart = frameN;  // exact frame index
      
      slider_context_conf.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_context_conf.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_context_conf.setAutoDraw(false);
    }
    
    
    // *key_resp_context_conf* updates
    if (t >= 0.2 && key_resp_context_conf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_context_conf.tStart = t;  // (not accounting for frame time here)
      key_resp_context_conf.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_context_conf.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_context_conf.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_context_conf.clearEvents(); });
    }
    
    frameRemains = 0.2 + 1.8 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_context_conf.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_context_conf.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_context_conf.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_context_conf.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_context_conf_allKeys = _key_resp_context_conf_allKeys.concat(theseKeys);
      if (_key_resp_context_conf_allKeys.length > 0) {
        key_resp_context_conf.keys = _key_resp_context_conf_allKeys[_key_resp_context_conf_allKeys.length - 1].name;  // just the last key pressed
        key_resp_context_conf.rt = _key_resp_context_conf_allKeys[_key_resp_context_conf_allKeys.length - 1].rt;
        key_resp_context_conf.duration = _key_resp_context_conf_allKeys[_key_resp_context_conf_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of context_confidenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function context_confidenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'context_confidence' ---
    for (const thisComponent of context_confidenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('context_confidence.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_context_conf.corr, level);
    }
    psychoJS.experiment.addData('key_resp_context_conf.keys', key_resp_context_conf.keys);
    if (typeof key_resp_context_conf.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_context_conf.rt', key_resp_context_conf.rt);
        psychoJS.experiment.addData('key_resp_context_conf.duration', key_resp_context_conf.duration);
        routineTimer.reset();
        }
    
    key_resp_context_conf.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function select_scene_nameRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'select_scene_name' ---
    t = 0;
    select_scene_nameClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('select_scene_name.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_set_scene_vars
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    if ((scene_cat === "Jungle")) {
        cur_labels = jungle_lbl_text;
        cur_color = color_jungle;
    } else {
        if ((scene_cat === "Undersea")) {
            cur_labels = sea_lbl_text;
            cur_color = color_sea;
        }
    }
    if (_pj.in_es6("J1", scene_stimulus)) {
        cor_scene_key = key_J1;
    } else {
        if (_pj.in_es6("J2", scene_stimulus)) {
            cor_scene_key = key_J2;
        } else {
            if (_pj.in_es6("U1", scene_stimulus)) {
                cor_scene_key = key_U1;
            } else {
                if (_pj.in_es6("U2", scene_stimulus)) {
                    cor_scene_key = key_U2;
                }
            }
        }
    }
    
    text_actual_context.setColor(new util.Color(cur_color));
    text_actual_context.setText(scene_cat);
    text_labels.setColor(new util.Color(cur_color));
    text_labels.setText(cur_labels);
    key_resp_scenes.keys = undefined;
    key_resp_scenes.rt = undefined;
    _key_resp_scenes_allKeys = [];
    // keep track of which components have finished
    select_scene_nameComponents = [];
    select_scene_nameComponents.push(text_scene_headline);
    select_scene_nameComponents.push(text_actual_context);
    select_scene_nameComponents.push(text_q_scene);
    select_scene_nameComponents.push(text_labels);
    select_scene_nameComponents.push(key_resp_scenes);
    
    for (const thisComponent of select_scene_nameComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function select_scene_nameRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'select_scene_name' ---
    // get current time
    t = select_scene_nameClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_scene_headline* updates
    if (t >= 0.0 && text_scene_headline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_scene_headline.tStart = t;  // (not accounting for frame time here)
      text_scene_headline.frameNStart = frameN;  // exact frame index
      
      text_scene_headline.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_scene_headline.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_scene_headline.setAutoDraw(false);
    }
    
    
    // *text_actual_context* updates
    if (t >= 0.0 && text_actual_context.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_actual_context.tStart = t;  // (not accounting for frame time here)
      text_actual_context.frameNStart = frameN;  // exact frame index
      
      text_actual_context.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_actual_context.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_actual_context.setAutoDraw(false);
    }
    
    
    // *text_q_scene* updates
    if (t >= 0.0 && text_q_scene.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_q_scene.tStart = t;  // (not accounting for frame time here)
      text_q_scene.frameNStart = frameN;  // exact frame index
      
      text_q_scene.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_q_scene.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_q_scene.setAutoDraw(false);
    }
    
    
    // *text_labels* updates
    if (t >= 0.0 && text_labels.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_labels.tStart = t;  // (not accounting for frame time here)
      text_labels.frameNStart = frameN;  // exact frame index
      
      text_labels.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_labels.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_labels.setAutoDraw(false);
    }
    
    
    // *key_resp_scenes* updates
    if (t >= 0.0 && key_resp_scenes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_scenes.tStart = t;  // (not accounting for frame time here)
      key_resp_scenes.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_scenes.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_scenes.start(); }); // start on screen flip
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_scenes.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_scenes.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_scenes.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_scenes.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_scenes_allKeys = _key_resp_scenes_allKeys.concat(theseKeys);
      if (_key_resp_scenes_allKeys.length > 0) {
        key_resp_scenes.keys = _key_resp_scenes_allKeys[_key_resp_scenes_allKeys.length - 1].name;  // just the last key pressed
        key_resp_scenes.rt = _key_resp_scenes_allKeys[_key_resp_scenes_allKeys.length - 1].rt;
        key_resp_scenes.duration = _key_resp_scenes_allKeys[_key_resp_scenes_allKeys.length - 1].duration;
        // was this correct?
        if (key_resp_scenes.keys == cor_scene_key) {
            key_resp_scenes.corr = 1;
        } else {
            key_resp_scenes.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of select_scene_nameComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function select_scene_nameRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'select_scene_name' ---
    for (const thisComponent of select_scene_nameComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('select_scene_name.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (key_resp_scenes.keys === undefined) {
      if (['None','none',undefined].includes(cor_scene_key)) {
         key_resp_scenes.corr = 1;  // correct non-response
      } else {
         key_resp_scenes.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_scenes.corr, level);
    }
    psychoJS.experiment.addData('key_resp_scenes.keys', key_resp_scenes.keys);
    psychoJS.experiment.addData('key_resp_scenes.corr', key_resp_scenes.corr);
    if (typeof key_resp_scenes.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_scenes.rt', key_resp_scenes.rt);
        psychoJS.experiment.addData('key_resp_scenes.duration', key_resp_scenes.duration);
        routineTimer.reset();
        }
    
    key_resp_scenes.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function select_confidenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'select_confidence' ---
    t = 0;
    select_confidenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('select_confidence.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_get_chosen_scene
    if ((scene_cat === "Jungle")) {
        if ((key_resp_scenes.keys === key_J1)) {
            chosen_scene = labels["J1"];
        } else {
            if ((key_resp_scenes.keys === key_J2)) {
                chosen_scene = labels["J2"];
            } else {
                if ((key_resp_scenes.keys === null)) {
                    chosen_scene = "Nothing was chosen";
                    cur_color = "Black";
                }
            }
        }
    } else {
        if ((scene_cat === "Undersea")) {
            if ((key_resp_scenes.keys === key_U1)) {
                chosen_scene = labels["U1"];
            } else {
                if ((key_resp_scenes.keys === key_U2)) {
                    chosen_scene = labels["U2"];
                } else {
                    if ((key_resp_scenes.keys === null)) {
                        chosen_scene = "Nothing was chosen";
                        cur_color = "Black";
                    }
                }
            }
        }
    }
    
    text_chosen_scene.setColor(new util.Color(cur_color));
    text_chosen_scene.setText(chosen_scene);
    slider_scene_conf.reset()
    key_resp_scene_conf.keys = undefined;
    key_resp_scene_conf.rt = undefined;
    _key_resp_scene_conf_allKeys = [];
    // keep track of which components have finished
    select_confidenceComponents = [];
    select_confidenceComponents.push(text_chosen_scene);
    select_confidenceComponents.push(slider_scene_conf);
    select_confidenceComponents.push(key_resp_scene_conf);
    
    for (const thisComponent of select_confidenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function select_confidenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'select_confidence' ---
    // get current time
    t = select_confidenceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_chosen_scene* updates
    if (t >= 0.0 && text_chosen_scene.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_chosen_scene.tStart = t;  // (not accounting for frame time here)
      text_chosen_scene.frameNStart = frameN;  // exact frame index
      
      text_chosen_scene.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_chosen_scene.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_chosen_scene.setAutoDraw(false);
    }
    
    
    // *slider_scene_conf* updates
    if (t >= 0.0 && slider_scene_conf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slider_scene_conf.tStart = t;  // (not accounting for frame time here)
      slider_scene_conf.frameNStart = frameN;  // exact frame index
      
      slider_scene_conf.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (slider_scene_conf.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      slider_scene_conf.setAutoDraw(false);
    }
    
    
    // *key_resp_scene_conf* updates
    if (t >= 0.1 && key_resp_scene_conf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_scene_conf.tStart = t;  // (not accounting for frame time here)
      key_resp_scene_conf.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_scene_conf.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_scene_conf.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_scene_conf.clearEvents(); });
    }
    
    frameRemains = 0.1 + 1.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_scene_conf.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_scene_conf.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_scene_conf.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_scene_conf.getKeys({keyList: ['1', '2', '3'], waitRelease: false});
      _key_resp_scene_conf_allKeys = _key_resp_scene_conf_allKeys.concat(theseKeys);
      if (_key_resp_scene_conf_allKeys.length > 0) {
        key_resp_scene_conf.keys = _key_resp_scene_conf_allKeys[_key_resp_scene_conf_allKeys.length - 1].name;  // just the last key pressed
        key_resp_scene_conf.rt = _key_resp_scene_conf_allKeys[_key_resp_scene_conf_allKeys.length - 1].rt;
        key_resp_scene_conf.duration = _key_resp_scene_conf_allKeys[_key_resp_scene_conf_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of select_confidenceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function select_confidenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'select_confidence' ---
    for (const thisComponent of select_confidenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('select_confidence.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_scene_conf.corr, level);
    }
    psychoJS.experiment.addData('key_resp_scene_conf.keys', key_resp_scene_conf.keys);
    if (typeof key_resp_scene_conf.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_scene_conf.rt', key_resp_scene_conf.rt);
        psychoJS.experiment.addData('key_resp_scene_conf.duration', key_resp_scene_conf.duration);
        routineTimer.reset();
        }
    
    key_resp_scene_conf.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function blank3000RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank3000' ---
    t = 0;
    blank3000Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank3000.started', globalClock.getTime());
    // keep track of which components have finished
    blank3000Components = [];
    blank3000Components.push(text_blank3000);
    
    for (const thisComponent of blank3000Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function blank3000RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank3000' ---
    // get current time
    t = blank3000Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_blank3000* updates
    if (t >= 0.0 && text_blank3000.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_blank3000.tStart = t;  // (not accounting for frame time here)
      text_blank3000.frameNStart = frameN;  // exact frame index
      
      text_blank3000.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_blank3000.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_blank3000.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of blank3000Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function blank3000RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank3000' ---
    for (const thisComponent of blank3000Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank3000.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function end_screen_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_screen_2' ---
    t = 0;
    end_screen_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('end_screen_2.started', globalClock.getTime());
    key_resp_exit.keys = undefined;
    key_resp_exit.rt = undefined;
    _key_resp_exit_allKeys = [];
    // keep track of which components have finished
    end_screen_2Components = [];
    end_screen_2Components.push(text_end_screen);
    end_screen_2Components.push(key_resp_exit);
    
    for (const thisComponent of end_screen_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}

function end_screen_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_screen_2' ---
    // get current time
    t = end_screen_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end_screen* updates
    if (t >= 0.0 && text_end_screen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_screen.tStart = t;  // (not accounting for frame time here)
      text_end_screen.frameNStart = frameN;  // exact frame index
      
      text_end_screen.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_end_screen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_end_screen.setAutoDraw(false);
    }
    
    
    // *key_resp_exit* updates
    if (t >= 0.0 && key_resp_exit.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_exit.tStart = t;  // (not accounting for frame time here)
      key_resp_exit.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_exit.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_exit.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_exit.clearEvents(); });
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_exit.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_exit.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_exit.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_exit.getKeys({keyList: ['z'], waitRelease: false});
      _key_resp_exit_allKeys = _key_resp_exit_allKeys.concat(theseKeys);
      if (_key_resp_exit_allKeys.length > 0) {
        key_resp_exit.keys = _key_resp_exit_allKeys[_key_resp_exit_allKeys.length - 1].name;  // just the last key pressed
        key_resp_exit.rt = _key_resp_exit_allKeys[_key_resp_exit_allKeys.length - 1].rt;
        key_resp_exit.duration = _key_resp_exit_allKeys[_key_resp_exit_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_screen_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}

function end_screen_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_screen_2' ---
    for (const thisComponent of end_screen_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_screen_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_exit.corr, level);
    }
    psychoJS.experiment.addData('key_resp_exit.keys', key_resp_exit.keys);
    if (typeof key_resp_exit.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_exit.rt', key_resp_exit.rt);
        psychoJS.experiment.addData('key_resp_exit.duration', key_resp_exit.duration);
        routineTimer.reset();
        }
    
    key_resp_exit.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}

function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}

async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
