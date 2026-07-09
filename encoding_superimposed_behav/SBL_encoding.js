/********************* 
 * Sbl_Encoding *
 *********************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'SBL_encoding';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([-1,-1,-1]),
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
flowScheduler.add(get_relatedness_keysRoutineBegin());
flowScheduler.add(get_relatedness_keysRoutineEachFrame());
flowScheduler.add(get_relatedness_keysRoutineEnd());
flowScheduler.add(instructions_screenRoutineBegin());
flowScheduler.add(instructions_screenRoutineEachFrame());
flowScheduler.add(instructions_screenRoutineEnd());
flowScheduler.add(blank2000RoutineBegin());
flowScheduler.add(blank2000RoutineEachFrame());
flowScheduler.add(blank2000RoutineEnd());
const runsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(runsLoopBegin(runsLoopScheduler));
flowScheduler.add(runsLoopScheduler);
flowScheduler.add(runsLoopEnd);











flowScheduler.add(end_screenRoutineBegin());
flowScheduler.add(end_screenRoutineEachFrame());
flowScheduler.add(end_screenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'runs_params.xlsx', 'path': 'runs_params.xlsx'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_101_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_101_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_109_run_3.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_109_run_3.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_109_run_2.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_109_run_2.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_109_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_109_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_108_run_3.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_108_run_3.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_108_run_2.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_108_run_2.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_108_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_108_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_107_run_3.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_107_run_3.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_107_run_2.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_107_run_2.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_107_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_107_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_106_run_3.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_106_run_3.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_106_run_2.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_106_run_2.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_106_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_106_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_105_run_3.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_105_run_3.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_105_run_2.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_105_run_2.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_105_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_105_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_104_run_3.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_104_run_3.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_104_run_2.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_104_run_2.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_104_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_104_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_103_run_3.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_103_run_3.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_103_run_2.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_103_run_2.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_103_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_103_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_102_run_3.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_102_run_3.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_102_run_2.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_102_run_2.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_102_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_102_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_101_run_3.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_101_run_3.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_101_run_2.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_101_run_2.csv'},
    {'name': 'stimuli/scenes/scene_U2.png', 'path': 'stimuli/scenes/scene_U2.png'},
    {'name': 'stimuli/scenes/scene_U1.png', 'path': 'stimuli/scenes/scene_U1.png'},
    {'name': 'stimuli/scenes/scene_J2.png', 'path': 'stimuli/scenes/scene_J2.png'},
    {'name': 'stimuli/scenes/scene_J1.png', 'path': 'stimuli/scenes/scene_J1.png'},
    {'name': 'stimuli/items/undersea_objects_15.png', 'path': 'stimuli/items/undersea_objects_15.png'},
    {'name': 'stimuli/items/undersea_objects_14.png', 'path': 'stimuli/items/undersea_objects_14.png'},
    {'name': 'stimuli/items/undersea_objects_13.png', 'path': 'stimuli/items/undersea_objects_13.png'},
    {'name': 'stimuli/items/undersea_objects_12.png', 'path': 'stimuli/items/undersea_objects_12.png'},
    {'name': 'stimuli/items/undersea_objects_11.png', 'path': 'stimuli/items/undersea_objects_11.png'},
    {'name': 'stimuli/items/undersea_objects_10.png', 'path': 'stimuli/items/undersea_objects_10.png'},
    {'name': 'stimuli/items/undersea_objects_9.png', 'path': 'stimuli/items/undersea_objects_9.png'},
    {'name': 'stimuli/items/undersea_objects_8.png', 'path': 'stimuli/items/undersea_objects_8.png'},
    {'name': 'stimuli/items/undersea_objects_7.png', 'path': 'stimuli/items/undersea_objects_7.png'},
    {'name': 'stimuli/items/undersea_objects_6.png', 'path': 'stimuli/items/undersea_objects_6.png'},
    {'name': 'stimuli/items/undersea_objects_5.png', 'path': 'stimuli/items/undersea_objects_5.png'},
    {'name': 'stimuli/items/undersea_objects_4.png', 'path': 'stimuli/items/undersea_objects_4.png'},
    {'name': 'stimuli/items/undersea_objects_3.png', 'path': 'stimuli/items/undersea_objects_3.png'},
    {'name': 'stimuli/items/undersea_objects_2.png', 'path': 'stimuli/items/undersea_objects_2.png'},
    {'name': 'stimuli/items/undersea_objects_1.png', 'path': 'stimuli/items/undersea_objects_1.png'},
    {'name': 'stimuli/items/undersea_animals_15.png', 'path': 'stimuli/items/undersea_animals_15.png'},
    {'name': 'stimuli/items/undersea_animals_14.png', 'path': 'stimuli/items/undersea_animals_14.png'},
    {'name': 'stimuli/items/undersea_animals_13.png', 'path': 'stimuli/items/undersea_animals_13.png'},
    {'name': 'stimuli/items/undersea_animals_12.png', 'path': 'stimuli/items/undersea_animals_12.png'},
    {'name': 'stimuli/items/undersea_animals_11.png', 'path': 'stimuli/items/undersea_animals_11.png'},
    {'name': 'stimuli/items/undersea_animals_10.png', 'path': 'stimuli/items/undersea_animals_10.png'},
    {'name': 'stimuli/items/undersea_animals_9.png', 'path': 'stimuli/items/undersea_animals_9.png'},
    {'name': 'stimuli/items/undersea_animals_8.png', 'path': 'stimuli/items/undersea_animals_8.png'},
    {'name': 'stimuli/items/undersea_animals_7.png', 'path': 'stimuli/items/undersea_animals_7.png'},
    {'name': 'stimuli/items/undersea_animals_6.png', 'path': 'stimuli/items/undersea_animals_6.png'},
    {'name': 'stimuli/items/undersea_animals_5.png', 'path': 'stimuli/items/undersea_animals_5.png'},
    {'name': 'stimuli/items/undersea_animals_4.png', 'path': 'stimuli/items/undersea_animals_4.png'},
    {'name': 'stimuli/items/undersea_animals_3.png', 'path': 'stimuli/items/undersea_animals_3.png'},
    {'name': 'stimuli/items/undersea_animals_2.png', 'path': 'stimuli/items/undersea_animals_2.png'},
    {'name': 'stimuli/items/undersea_animals_1.png', 'path': 'stimuli/items/undersea_animals_1.png'},
    {'name': 'stimuli/items/other_objects_15.png', 'path': 'stimuli/items/other_objects_15.png'},
    {'name': 'stimuli/items/other_objects_14.png', 'path': 'stimuli/items/other_objects_14.png'},
    {'name': 'stimuli/items/other_objects_13.png', 'path': 'stimuli/items/other_objects_13.png'},
    {'name': 'stimuli/items/other_objects_12.png', 'path': 'stimuli/items/other_objects_12.png'},
    {'name': 'stimuli/items/other_objects_11.png', 'path': 'stimuli/items/other_objects_11.png'},
    {'name': 'stimuli/items/other_objects_10.png', 'path': 'stimuli/items/other_objects_10.png'},
    {'name': 'stimuli/items/other_objects_9.png', 'path': 'stimuli/items/other_objects_9.png'},
    {'name': 'stimuli/items/other_objects_8.png', 'path': 'stimuli/items/other_objects_8.png'},
    {'name': 'stimuli/items/other_objects_7.png', 'path': 'stimuli/items/other_objects_7.png'},
    {'name': 'stimuli/items/other_objects_6.png', 'path': 'stimuli/items/other_objects_6.png'},
    {'name': 'stimuli/items/other_objects_5.png', 'path': 'stimuli/items/other_objects_5.png'},
    {'name': 'stimuli/items/other_objects_4.png', 'path': 'stimuli/items/other_objects_4.png'},
    {'name': 'stimuli/items/other_objects_3.png', 'path': 'stimuli/items/other_objects_3.png'},
    {'name': 'stimuli/items/other_objects_2.png', 'path': 'stimuli/items/other_objects_2.png'},
    {'name': 'stimuli/items/other_objects_1.png', 'path': 'stimuli/items/other_objects_1.png'},
    {'name': 'stimuli/items/other_animals_15.png', 'path': 'stimuli/items/other_animals_15.png'},
    {'name': 'stimuli/items/other_animals_14.png', 'path': 'stimuli/items/other_animals_14.png'},
    {'name': 'stimuli/items/other_animals_13.png', 'path': 'stimuli/items/other_animals_13.png'},
    {'name': 'stimuli/items/other_animals_12.png', 'path': 'stimuli/items/other_animals_12.png'},
    {'name': 'stimuli/items/other_animals_11.png', 'path': 'stimuli/items/other_animals_11.png'},
    {'name': 'stimuli/items/other_animals_10.png', 'path': 'stimuli/items/other_animals_10.png'},
    {'name': 'stimuli/items/other_animals_9.png', 'path': 'stimuli/items/other_animals_9.png'},
    {'name': 'stimuli/items/other_animals_8.png', 'path': 'stimuli/items/other_animals_8.png'},
    {'name': 'stimuli/items/other_animals_7.png', 'path': 'stimuli/items/other_animals_7.png'},
    {'name': 'stimuli/items/other_animals_6.png', 'path': 'stimuli/items/other_animals_6.png'},
    {'name': 'stimuli/items/other_animals_5.png', 'path': 'stimuli/items/other_animals_5.png'},
    {'name': 'stimuli/items/other_animals_4.png', 'path': 'stimuli/items/other_animals_4.png'},
    {'name': 'stimuli/items/other_animals_3.png', 'path': 'stimuli/items/other_animals_3.png'},
    {'name': 'stimuli/items/other_animals_2.png', 'path': 'stimuli/items/other_animals_2.png'},
    {'name': 'stimuli/items/other_animals_1.png', 'path': 'stimuli/items/other_animals_1.png'},
    {'name': 'stimuli/items/jungle_objects_15.png', 'path': 'stimuli/items/jungle_objects_15.png'},
    {'name': 'stimuli/items/jungle_objects_14.png', 'path': 'stimuli/items/jungle_objects_14.png'},
    {'name': 'stimuli/items/jungle_objects_13.png', 'path': 'stimuli/items/jungle_objects_13.png'},
    {'name': 'stimuli/items/jungle_objects_12.png', 'path': 'stimuli/items/jungle_objects_12.png'},
    {'name': 'stimuli/items/jungle_objects_11.png', 'path': 'stimuli/items/jungle_objects_11.png'},
    {'name': 'stimuli/items/jungle_objects_10.png', 'path': 'stimuli/items/jungle_objects_10.png'},
    {'name': 'stimuli/items/jungle_objects_9.png', 'path': 'stimuli/items/jungle_objects_9.png'},
    {'name': 'stimuli/items/jungle_objects_8.png', 'path': 'stimuli/items/jungle_objects_8.png'},
    {'name': 'stimuli/items/jungle_objects_7.png', 'path': 'stimuli/items/jungle_objects_7.png'},
    {'name': 'stimuli/items/jungle_objects_6.png', 'path': 'stimuli/items/jungle_objects_6.png'},
    {'name': 'stimuli/items/jungle_objects_5.png', 'path': 'stimuli/items/jungle_objects_5.png'},
    {'name': 'stimuli/items/jungle_objects_4.png', 'path': 'stimuli/items/jungle_objects_4.png'},
    {'name': 'stimuli/items/jungle_objects_3.png', 'path': 'stimuli/items/jungle_objects_3.png'},
    {'name': 'stimuli/items/jungle_objects_2.png', 'path': 'stimuli/items/jungle_objects_2.png'},
    {'name': 'stimuli/items/jungle_objects_1.png', 'path': 'stimuli/items/jungle_objects_1.png'},
    {'name': 'stimuli/items/jungle_animals_15.png', 'path': 'stimuli/items/jungle_animals_15.png'},
    {'name': 'stimuli/items/jungle_animals_14.png', 'path': 'stimuli/items/jungle_animals_14.png'},
    {'name': 'stimuli/items/jungle_animals_13.png', 'path': 'stimuli/items/jungle_animals_13.png'},
    {'name': 'stimuli/items/jungle_animals_12.png', 'path': 'stimuli/items/jungle_animals_12.png'},
    {'name': 'stimuli/items/jungle_animals_11.png', 'path': 'stimuli/items/jungle_animals_11.png'},
    {'name': 'stimuli/items/jungle_animals_10.png', 'path': 'stimuli/items/jungle_animals_10.png'},
    {'name': 'stimuli/items/jungle_animals_9.png', 'path': 'stimuli/items/jungle_animals_9.png'},
    {'name': 'stimuli/items/jungle_animals_8.png', 'path': 'stimuli/items/jungle_animals_8.png'},
    {'name': 'stimuli/items/jungle_animals_7.png', 'path': 'stimuli/items/jungle_animals_7.png'},
    {'name': 'stimuli/items/jungle_animals_6.png', 'path': 'stimuli/items/jungle_animals_6.png'},
    {'name': 'stimuli/items/jungle_animals_5.png', 'path': 'stimuli/items/jungle_animals_5.png'},
    {'name': 'stimuli/items/jungle_animals_4.png', 'path': 'stimuli/items/jungle_animals_4.png'},
    {'name': 'stimuli/items/jungle_animals_3.png', 'path': 'stimuli/items/jungle_animals_3.png'},
    {'name': 'stimuli/items/jungle_animals_2.png', 'path': 'stimuli/items/jungle_animals_2.png'},
    {'name': 'stimuli/items/jungle_animals_1.png', 'path': 'stimuli/items/jungle_animals_1.png'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
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


var get_relatedness_keysClock;
var x;
var instructions_screenClock;
var text_instructions;
var text_relatedness_keys;
var key_welcome;
var blank2000Clock;
var text_2;
var get_run_stim_listClock;
var scene_item_presentationClock;
var image_scene;
var image_item;
var congruency_responseClock;
var text_congruency;
var key_resp_congruency;
var blank500Clock;
var text;
var is_last_runClock;
var between_run_pauseClock;
var text_run_pause;
var text_relatedness_pause;
var key_resp_next_run;
var end_screenClock;
var text_end;
var key_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "get_relatedness_keys"
  get_relatedness_keysClock = new util.Clock();
  // Run 'Begin Experiment' code from code_get_keys
  x = 9
  // Function to read and process the CSV file
  function loadCSVFile(filePath, callback) {
      var request = new XMLHttpRequest();
      request.open('GET', filePath, true);
      request.onreadystatechange = function () {
          if (request.readyState === 4 && request.status === 200) {
              callback(request.responseText);
          }
      };
      request.send();
  }
  
  // Callback function to process CSV data
  function processCSVData(csvData) {
      var lines = csvData.split('\n');
      var headers = lines[0].split(',');
      var data = lines.slice(1).map(function(line) {
          var values = line.split(',');
          var entry = {};
          headers.forEach(function(header, index) {
              entry[header] = values[index];
          });
          return entry;
      });
  
      var subnum = parseInt(expInfo['participant']);
      var sub_conds = data.find(function(row) {
          return parseInt(row['Participant']) === subnum;
      });
  
      // Converting row values to an array
      var sub_conds_values = Object.values(sub_conds);
  
      // Logging the values (similar to print in Python)
      console.log(sub_conds_values);
  
      // Assign context keys based on the value of sub_conds[1]
      var key_related, key_unrelated, instruction_text;
      if (parseInt(sub_conds_values[1]) === 0) {
          key_related = 'q';
          key_unrelated = 'p';
          instruction_text = 'If they are related, press Q\nIf they are unrelated, press P\n\nPress SPACEBAR to continue.';
      } else if (parseInt(sub_conds_values[1]) === 1) {
          key_related = 'p';
          key_unrelated = 'q';
          instruction_text = 'If they are related, press P\nIf they are unrelated, press Q\n\nPress SPACEBAR to continue.';
      }
  
      // Use key_related, key_unrelated, and instruction_text as needed in your experiment
      console.log({ key_related, key_unrelated, instruction_text });
  }
  
  // Load and process the CSV file
  loadCSVFile('counterbalanced_vars.csv', processCSVData);
  // Initialize components for Routine "instructions_screen"
  instructions_screenClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: 'In this task, you will see different items (objects or animals) placed in one of the jungle or undersea scenes you memorized previously. After each presentation of an item and a scene, you will be asked to report if they are related or unrelated. \n\nAn item would be related to a scene if you think it is plausible that such an item would live or would be used in such a scene in real life. If not, they would be unrelated.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_relatedness_keys = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_relatedness_keys',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank2000"
  blank2000Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "get_run_stim_list"
  get_run_stim_listClock = new util.Clock();
  // Initialize components for Routine "scene_item_presentation"
  scene_item_presentationClock = new util.Clock();
  image_scene = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_scene', units : 'pix', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [1440, 810],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  image_item = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_item', units : 'pix', 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, pos : [0, 0], size : [225, 225],
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
  
  // Initialize components for Routine "blank500"
  blank500Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '+',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "is_last_run"
  is_last_runClock = new util.Clock();
  // Initialize components for Routine "between_run_pause"
  between_run_pauseClock = new util.Clock();
  text_run_pause = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_run_pause',
    text: 'Good job! You can rest for a moment and then continue to the next run. ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  text_relatedness_pause = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_relatedness_pause',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  key_resp_next_run = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_screen"
  end_screenClock = new util.Clock();
  text_end = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end',
    text: "Thanks for participating!\n\nYou can let the experimenter know you're done.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var get_relatedness_keysComponents;
function get_relatedness_keysRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'get_relatedness_keys' ---
    t = 0;
    get_relatedness_keysClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('get_relatedness_keys.started', globalClock.getTime());
    // keep track of which components have finished
    get_relatedness_keysComponents = [];
    
    for (const thisComponent of get_relatedness_keysComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function get_relatedness_keysRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'get_relatedness_keys' ---
    // get current time
    t = get_relatedness_keysClock.getTime();
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
    for (const thisComponent of get_relatedness_keysComponents)
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


function get_relatedness_keysRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'get_relatedness_keys' ---
    for (const thisComponent of get_relatedness_keysComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('get_relatedness_keys.stopped', globalClock.getTime());
    // the Routine "get_relatedness_keys" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_welcome_allKeys;
var instructions_screenComponents;
function instructions_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions_screen' ---
    t = 0;
    instructions_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('instructions_screen.started', globalClock.getTime());
    text_relatedness_keys.setText(instruction_text);
    key_welcome.keys = undefined;
    key_welcome.rt = undefined;
    _key_welcome_allKeys = [];
    // keep track of which components have finished
    instructions_screenComponents = [];
    instructions_screenComponents.push(text_instructions);
    instructions_screenComponents.push(text_relatedness_keys);
    instructions_screenComponents.push(key_welcome);
    
    for (const thisComponent of instructions_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructions_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions_screen' ---
    // get current time
    t = instructions_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions* updates
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions.tStart = t;  // (not accounting for frame time here)
      text_instructions.frameNStart = frameN;  // exact frame index
      
      text_instructions.setAutoDraw(true);
    }
    
    
    // *text_relatedness_keys* updates
    if (t >= 0.0 && text_relatedness_keys.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_relatedness_keys.tStart = t;  // (not accounting for frame time here)
      text_relatedness_keys.frameNStart = frameN;  // exact frame index
      
      text_relatedness_keys.setAutoDraw(true);
    }
    
    
    // *key_welcome* updates
    if (t >= 0.0 && key_welcome.status === PsychoJS.Status.NOT_STARTED) {
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
    for (const thisComponent of instructions_screenComponents)
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


function instructions_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions_screen' ---
    for (const thisComponent of instructions_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_screen.stopped', globalClock.getTime());
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
    // the Routine "instructions_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank2000Components;
function blank2000RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'blank2000' ---
    t = 0;
    blank2000Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('blank2000.started', globalClock.getTime());
    // keep track of which components have finished
    blank2000Components = [];
    blank2000Components.push(text_2);
    
    for (const thisComponent of blank2000Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blank2000RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'blank2000' ---
    // get current time
    t = blank2000Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    for (const thisComponent of blank2000Components)
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


function blank2000RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'blank2000' ---
    for (const thisComponent of blank2000Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('blank2000.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var runs;
function runsLoopBegin(runsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    runs = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'runs_params.xlsx',
      seed: undefined, name: 'runs'
    });
    psychoJS.experiment.addLoop(runs); // add the loop to the experiment
    currentLoop = runs;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisRun of runs) {
      snapshot = runs.getSnapshot();
      runsLoopScheduler.add(importConditions(snapshot));
      runsLoopScheduler.add(get_run_stim_listRoutineBegin(snapshot));
      runsLoopScheduler.add(get_run_stim_listRoutineEachFrame());
      runsLoopScheduler.add(get_run_stim_listRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      runsLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      runsLoopScheduler.add(trialsLoopScheduler);
      runsLoopScheduler.add(trialsLoopEnd);
      runsLoopScheduler.add(is_last_runRoutineBegin(snapshot));
      runsLoopScheduler.add(is_last_runRoutineEachFrame());
      runsLoopScheduler.add(is_last_runRoutineEnd(snapshot));
      const between_run_instLoopScheduler = new Scheduler(psychoJS);
      runsLoopScheduler.add(between_run_instLoopBegin(between_run_instLoopScheduler, snapshot));
      runsLoopScheduler.add(between_run_instLoopScheduler);
      runsLoopScheduler.add(between_run_instLoopEnd);
      runsLoopScheduler.add(runsLoopEndIteration(runsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, stim_list, '0:4'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(scene_item_presentationRoutineBegin(snapshot));
      trialsLoopScheduler.add(scene_item_presentationRoutineEachFrame());
      trialsLoopScheduler.add(scene_item_presentationRoutineEnd(snapshot));
      trialsLoopScheduler.add(congruency_responseRoutineBegin(snapshot));
      trialsLoopScheduler.add(congruency_responseRoutineEachFrame());
      trialsLoopScheduler.add(congruency_responseRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank500RoutineBegin(snapshot));
      trialsLoopScheduler.add(blank500RoutineEachFrame());
      trialsLoopScheduler.add(blank500RoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
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


var between_run_inst;
function between_run_instLoopBegin(between_run_instLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    between_run_inst = new TrialHandler({
      psychoJS: psychoJS,
      nReps: not_last, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'between_run_inst'
    });
    psychoJS.experiment.addLoop(between_run_inst); // add the loop to the experiment
    currentLoop = between_run_inst;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisBetween_run_inst of between_run_inst) {
      snapshot = between_run_inst.getSnapshot();
      between_run_instLoopScheduler.add(importConditions(snapshot));
      between_run_instLoopScheduler.add(between_run_pauseRoutineBegin(snapshot));
      between_run_instLoopScheduler.add(between_run_pauseRoutineEachFrame());
      between_run_instLoopScheduler.add(between_run_pauseRoutineEnd(snapshot));
      between_run_instLoopScheduler.add(between_run_instLoopEndIteration(between_run_instLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function between_run_instLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(between_run_inst);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function between_run_instLoopEndIteration(scheduler, snapshot) {
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


async function runsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(runs);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function runsLoopEndIteration(scheduler, snapshot) {
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


var subnum;
var stim_list;
var get_run_stim_listComponents;
function get_run_stim_listRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'get_run_stim_list' ---
    t = 0;
    get_run_stim_listClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('get_run_stim_list.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_get_stim_list
    subnum = expInfo["participant"];
    stim_list = (((("stimuli/stim_lists/stimuli_list_sub_" + subnum) + "_run_") + run.toString()) + ".csv");
    
    // keep track of which components have finished
    get_run_stim_listComponents = [];
    
    for (const thisComponent of get_run_stim_listComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function get_run_stim_listRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'get_run_stim_list' ---
    // get current time
    t = get_run_stim_listClock.getTime();
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
    for (const thisComponent of get_run_stim_listComponents)
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


function get_run_stim_listRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'get_run_stim_list' ---
    for (const thisComponent of get_run_stim_listComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('get_run_stim_list.stopped', globalClock.getTime());
    // the Routine "get_run_stim_list" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var scene_item_presentationComponents;
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
    if (t >= 0.1 && image_item.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_item.tStart = t;  // (not accounting for frame time here)
      image_item.frameNStart = frameN;  // exact frame index
      
      image_item.setAutoDraw(true);
    }
    
    frameRemains = 0.1 + 1.9 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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


var cor_key;
var _key_resp_congruency_allKeys;
var congruency_responseComponents;
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
        }
    
    key_resp_congruency.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank500Components;
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
    blank500Components.push(text);
    
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
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
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


var not_last;
var is_last_runComponents;
function is_last_runRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'is_last_run' ---
    t = 0;
    is_last_runClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('is_last_run.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_last_run
    if ((run !== 3)) {
        not_last = 1;
    } else {
        if ((run === 3)) {
            not_last = 0;
        }
    }
    
    // keep track of which components have finished
    is_last_runComponents = [];
    
    for (const thisComponent of is_last_runComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function is_last_runRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'is_last_run' ---
    // get current time
    t = is_last_runClock.getTime();
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
    for (const thisComponent of is_last_runComponents)
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


function is_last_runRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'is_last_run' ---
    for (const thisComponent of is_last_runComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('is_last_run.stopped', globalClock.getTime());
    // the Routine "is_last_run" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var text_inst_pause;
var _key_resp_next_run_allKeys;
var between_run_pauseComponents;
function between_run_pauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'between_run_pause' ---
    t = 0;
    between_run_pauseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('between_run_pause.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_pause_intructions
    if ((key_related === "q")) {
        text_inst_pause = "Reminder:\n\nIf the scene and item are related, press Q\n\nIf they are unrelated, press P.\n\nPress SPACEBAR to resume.";
    }
    if ((key_related === "p")) {
        text_inst_pause = "Reminder:\n\nIf the scene and item are related, press P\n\nIf they are unrelated, press Q.\n\nPress SPACEBAR to resume.";
    }
    
    text_relatedness_pause.setText(text_inst_pause);
    key_resp_next_run.keys = undefined;
    key_resp_next_run.rt = undefined;
    _key_resp_next_run_allKeys = [];
    // keep track of which components have finished
    between_run_pauseComponents = [];
    between_run_pauseComponents.push(text_run_pause);
    between_run_pauseComponents.push(text_relatedness_pause);
    between_run_pauseComponents.push(key_resp_next_run);
    
    for (const thisComponent of between_run_pauseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function between_run_pauseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'between_run_pause' ---
    // get current time
    t = between_run_pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_run_pause* updates
    if (t >= 0.0 && text_run_pause.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_run_pause.tStart = t;  // (not accounting for frame time here)
      text_run_pause.frameNStart = frameN;  // exact frame index
      
      text_run_pause.setAutoDraw(true);
    }
    
    
    // *text_relatedness_pause* updates
    if (t >= 0.0 && text_relatedness_pause.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_relatedness_pause.tStart = t;  // (not accounting for frame time here)
      text_relatedness_pause.frameNStart = frameN;  // exact frame index
      
      text_relatedness_pause.setAutoDraw(true);
    }
    
    
    // *key_resp_next_run* updates
    if (t >= 0.0 && key_resp_next_run.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_next_run.tStart = t;  // (not accounting for frame time here)
      key_resp_next_run.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_next_run.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_next_run.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_next_run.clearEvents(); });
    }
    
    if (key_resp_next_run.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_next_run.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_next_run_allKeys = _key_resp_next_run_allKeys.concat(theseKeys);
      if (_key_resp_next_run_allKeys.length > 0) {
        key_resp_next_run.keys = _key_resp_next_run_allKeys[_key_resp_next_run_allKeys.length - 1].name;  // just the last key pressed
        key_resp_next_run.rt = _key_resp_next_run_allKeys[_key_resp_next_run_allKeys.length - 1].rt;
        key_resp_next_run.duration = _key_resp_next_run_allKeys[_key_resp_next_run_allKeys.length - 1].duration;
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
    for (const thisComponent of between_run_pauseComponents)
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


function between_run_pauseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'between_run_pause' ---
    for (const thisComponent of between_run_pauseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('between_run_pause.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_next_run.corr, level);
    }
    psychoJS.experiment.addData('key_resp_next_run.keys', key_resp_next_run.keys);
    if (typeof key_resp_next_run.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_next_run.rt', key_resp_next_run.rt);
        psychoJS.experiment.addData('key_resp_next_run.duration', key_resp_next_run.duration);
        routineTimer.reset();
        }
    
    key_resp_next_run.stop();
    // the Routine "between_run_pause" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_end_allKeys;
var end_screenComponents;
function end_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_screen' ---
    t = 0;
    end_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('end_screen.started', globalClock.getTime());
    key_end.keys = undefined;
    key_end.rt = undefined;
    _key_end_allKeys = [];
    // keep track of which components have finished
    end_screenComponents = [];
    end_screenComponents.push(text_end);
    end_screenComponents.push(key_end);
    
    for (const thisComponent of end_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_screen' ---
    // get current time
    t = end_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end* updates
    if (t >= 0.0 && text_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end.tStart = t;  // (not accounting for frame time here)
      text_end.frameNStart = frameN;  // exact frame index
      
      text_end.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_end.setAutoDraw(false);
    }
    
    
    // *key_end* updates
    if (t >= 0.0 && key_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_end.tStart = t;  // (not accounting for frame time here)
      key_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_end.clearEvents(); });
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_end.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_end.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_end.getKeys({keyList: ['z'], waitRelease: false});
      _key_end_allKeys = _key_end_allKeys.concat(theseKeys);
      if (_key_end_allKeys.length > 0) {
        key_end.keys = _key_end_allKeys[_key_end_allKeys.length - 1].name;  // just the last key pressed
        key_end.rt = _key_end_allKeys[_key_end_allKeys.length - 1].rt;
        key_end.duration = _key_end_allKeys[_key_end_allKeys.length - 1].duration;
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
    for (const thisComponent of end_screenComponents)
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


function end_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_screen' ---
    for (const thisComponent of end_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_screen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_end.corr, level);
    }
    psychoJS.experiment.addData('key_end.keys', key_end.keys);
    if (typeof key_end.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_end.rt', key_end.rt);
        psychoJS.experiment.addData('key_end.duration', key_end.duration);
        routineTimer.reset();
        }
    
    key_end.stop();
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
