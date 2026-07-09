/************************** 
 * Sbl_Retrieval_Exp *
 **************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'SBL_retrieval_exp';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
    'session': '',
    'delay': '',
    'group': '',
};

// Start code blocks for 'Before Experiment'
var key_jungle
var key_sea
var key_U1
var key_U2
var key_J1
var key_J2
var key_jungle
var key_sea
var color_jungle
var color_sea
var pos_sea
var pos_jungle
var context_jungle_txt
var context_sea_txt
var stim_list

let run_stim = [];
let labels = {};
var c_k
var l_k
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
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
flowScheduler.add(subs_rand_varsRoutineBegin());
flowScheduler.add(subs_rand_varsRoutineEachFrame());
flowScheduler.add(subs_rand_varsRoutineEnd());
flowScheduler.add(set_instructionsRoutineBegin());
flowScheduler.add(set_instructionsRoutineEachFrame());
flowScheduler.add(set_instructionsRoutineEnd());
flowScheduler.add(ret_inst_scrRoutineBegin());
flowScheduler.add(ret_inst_scrRoutineEachFrame());
flowScheduler.add(ret_inst_scrRoutineEnd());
flowScheduler.add(ret_inst2RoutineBegin());
flowScheduler.add(ret_inst2RoutineEachFrame());
flowScheduler.add(ret_inst2RoutineEnd());
flowScheduler.add(create_runs_stim_divRoutineBegin());
flowScheduler.add(create_runs_stim_divRoutineEachFrame());
flowScheduler.add(create_runs_stim_divRoutineEnd());
const runsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(runsLoopBegin(runsLoopScheduler));
flowScheduler.add(runsLoopScheduler);
flowScheduler.add(runsLoopEnd);


















flowScheduler.add(ret_end_screenRoutineBegin());
flowScheduler.add(ret_end_screenRoutineEachFrame());
flowScheduler.add(ret_end_screenRoutineEnd());
flowScheduler.add(forked_instructionsRoutineBegin());
flowScheduler.add(forked_instructionsRoutineEachFrame());
flowScheduler.add(forked_instructionsRoutineEnd());
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
    {'name': 'stimuli/cond_lists/scene_names_sub_150.csv', 'path': 'stimuli/cond_lists/scene_names_sub_150.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_149.csv', 'path': 'stimuli/cond_lists/scene_names_sub_149.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_148.csv', 'path': 'stimuli/cond_lists/scene_names_sub_148.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_147.csv', 'path': 'stimuli/cond_lists/scene_names_sub_147.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_146.csv', 'path': 'stimuli/cond_lists/scene_names_sub_146.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_145.csv', 'path': 'stimuli/cond_lists/scene_names_sub_145.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_144.csv', 'path': 'stimuli/cond_lists/scene_names_sub_144.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_143.csv', 'path': 'stimuli/cond_lists/scene_names_sub_143.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_142.csv', 'path': 'stimuli/cond_lists/scene_names_sub_142.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_141.csv', 'path': 'stimuli/cond_lists/scene_names_sub_141.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_140.csv', 'path': 'stimuli/cond_lists/scene_names_sub_140.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_139.csv', 'path': 'stimuli/cond_lists/scene_names_sub_139.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_138.csv', 'path': 'stimuli/cond_lists/scene_names_sub_138.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_137.csv', 'path': 'stimuli/cond_lists/scene_names_sub_137.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_136.csv', 'path': 'stimuli/cond_lists/scene_names_sub_136.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_135.csv', 'path': 'stimuli/cond_lists/scene_names_sub_135.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_134.csv', 'path': 'stimuli/cond_lists/scene_names_sub_134.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_133.csv', 'path': 'stimuli/cond_lists/scene_names_sub_133.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_150_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_150_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_150_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_150_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_149_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_149_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_149_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_149_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_148_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_148_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_148_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_148_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_147_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_147_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_147_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_147_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_146_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_146_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_146_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_146_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_145_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_145_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_145_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_145_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_144_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_144_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_144_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_144_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_143_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_143_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_143_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_143_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_142_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_142_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_142_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_142_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_141_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_141_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_141_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_141_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_140_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_140_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_140_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_140_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_139_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_139_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_139_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_139_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_138_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_138_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_138_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_138_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_137_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_137_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_137_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_137_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_136_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_136_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_136_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_136_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_135_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_135_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_135_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_135_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_134_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_134_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_134_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_134_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_133_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_133_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_133_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_133_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_132_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_132_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_132_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_132_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_131_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_131_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_131_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_131_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_101_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_101_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_101_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_101_set_1_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_100_set_2_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_100_set_2_run_1.csv'},
    {'name': 'stimuli/stim_lists/stimuli_list_sub_100_set_1_run_1.csv', 'path': 'stimuli/stim_lists/stimuli_list_sub_100_set_1_run_1.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_102.csv', 'path': 'stimuli/cond_lists/scene_names_sub_102.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_132.csv', 'path': 'stimuli/cond_lists/scene_names_sub_132.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_131.csv', 'path': 'stimuli/cond_lists/scene_names_sub_131.csv'},
    {'name': 'stimuli/cond_lists/scene_names_sub_101.csv', 'path': 'stimuli/cond_lists/scene_names_sub_101.csv'},
    {'name': 'counterbalanced_vars.csv', 'path': 'counterbalanced_vars.csv'},
    {'name': 'stimuli/scenes/scene_J1.png', 'path': 'stimuli/scenes/scene_J1.png'},
    {'name': 'stimuli/scenes/scene_U2.png', 'path': 'stimuli/scenes/scene_U2.png'},
    {'name': 'stimuli/scenes/scene_U1.png', 'path': 'stimuli/scenes/scene_U1.png'},
    {'name': 'stimuli/scenes/scene_J2.png', 'path': 'stimuli/scenes/scene_J2.png'},
    {'name': 'stimuli/items/undersea_object_30.png', 'path': 'stimuli/items/undersea_object_30.png'},
    {'name': 'stimuli/items/undersea_object_29.png', 'path': 'stimuli/items/undersea_object_29.png'},
    {'name': 'stimuli/items/undersea_object_28.png', 'path': 'stimuli/items/undersea_object_28.png'},
    {'name': 'stimuli/items/undersea_object_27.png', 'path': 'stimuli/items/undersea_object_27.png'},
    {'name': 'stimuli/items/undersea_object_26.png', 'path': 'stimuli/items/undersea_object_26.png'},
    {'name': 'stimuli/items/undersea_object_25.png', 'path': 'stimuli/items/undersea_object_25.png'},
    {'name': 'stimuli/items/undersea_object_24.png', 'path': 'stimuli/items/undersea_object_24.png'},
    {'name': 'stimuli/items/undersea_object_23.png', 'path': 'stimuli/items/undersea_object_23.png'},
    {'name': 'stimuli/items/undersea_object_22.png', 'path': 'stimuli/items/undersea_object_22.png'},
    {'name': 'stimuli/items/undersea_object_21.png', 'path': 'stimuli/items/undersea_object_21.png'},
    {'name': 'stimuli/items/undersea_object_20.png', 'path': 'stimuli/items/undersea_object_20.png'},
    {'name': 'stimuli/items/undersea_object_19.png', 'path': 'stimuli/items/undersea_object_19.png'},
    {'name': 'stimuli/items/undersea_object_18.png', 'path': 'stimuli/items/undersea_object_18.png'},
    {'name': 'stimuli/items/undersea_object_17.png', 'path': 'stimuli/items/undersea_object_17.png'},
    {'name': 'stimuli/items/undersea_object_16.png', 'path': 'stimuli/items/undersea_object_16.png'},
    {'name': 'stimuli/items/undersea_object_15.png', 'path': 'stimuli/items/undersea_object_15.png'},
    {'name': 'stimuli/items/undersea_object_14.png', 'path': 'stimuli/items/undersea_object_14.png'},
    {'name': 'stimuli/items/undersea_object_13.png', 'path': 'stimuli/items/undersea_object_13.png'},
    {'name': 'stimuli/items/undersea_object_12.png', 'path': 'stimuli/items/undersea_object_12.png'},
    {'name': 'stimuli/items/undersea_object_11.png', 'path': 'stimuli/items/undersea_object_11.png'},
    {'name': 'stimuli/items/undersea_object_10.png', 'path': 'stimuli/items/undersea_object_10.png'},
    {'name': 'stimuli/items/undersea_object_9.png', 'path': 'stimuli/items/undersea_object_9.png'},
    {'name': 'stimuli/items/undersea_object_8.png', 'path': 'stimuli/items/undersea_object_8.png'},
    {'name': 'stimuli/items/undersea_object_7.png', 'path': 'stimuli/items/undersea_object_7.png'},
    {'name': 'stimuli/items/undersea_object_6.png', 'path': 'stimuli/items/undersea_object_6.png'},
    {'name': 'stimuli/items/undersea_object_5.png', 'path': 'stimuli/items/undersea_object_5.png'},
    {'name': 'stimuli/items/undersea_object_4.png', 'path': 'stimuli/items/undersea_object_4.png'},
    {'name': 'stimuli/items/undersea_object_3.png', 'path': 'stimuli/items/undersea_object_3.png'},
    {'name': 'stimuli/items/undersea_object_2.png', 'path': 'stimuli/items/undersea_object_2.png'},
    {'name': 'stimuli/items/undersea_object_1.png', 'path': 'stimuli/items/undersea_object_1.png'},
    {'name': 'stimuli/items/undersea_animal_30.png', 'path': 'stimuli/items/undersea_animal_30.png'},
    {'name': 'stimuli/items/undersea_animal_29.png', 'path': 'stimuli/items/undersea_animal_29.png'},
    {'name': 'stimuli/items/undersea_animal_28.png', 'path': 'stimuli/items/undersea_animal_28.png'},
    {'name': 'stimuli/items/undersea_animal_27.png', 'path': 'stimuli/items/undersea_animal_27.png'},
    {'name': 'stimuli/items/undersea_animal_26.png', 'path': 'stimuli/items/undersea_animal_26.png'},
    {'name': 'stimuli/items/undersea_animal_25.png', 'path': 'stimuli/items/undersea_animal_25.png'},
    {'name': 'stimuli/items/undersea_animal_24.png', 'path': 'stimuli/items/undersea_animal_24.png'},
    {'name': 'stimuli/items/undersea_animal_23.png', 'path': 'stimuli/items/undersea_animal_23.png'},
    {'name': 'stimuli/items/undersea_animal_22.png', 'path': 'stimuli/items/undersea_animal_22.png'},
    {'name': 'stimuli/items/undersea_animal_21.png', 'path': 'stimuli/items/undersea_animal_21.png'},
    {'name': 'stimuli/items/undersea_animal_20.png', 'path': 'stimuli/items/undersea_animal_20.png'},
    {'name': 'stimuli/items/undersea_animal_19.png', 'path': 'stimuli/items/undersea_animal_19.png'},
    {'name': 'stimuli/items/undersea_animal_18.png', 'path': 'stimuli/items/undersea_animal_18.png'},
    {'name': 'stimuli/items/undersea_animal_17.png', 'path': 'stimuli/items/undersea_animal_17.png'},
    {'name': 'stimuli/items/undersea_animal_16.png', 'path': 'stimuli/items/undersea_animal_16.png'},
    {'name': 'stimuli/items/undersea_animal_15.png', 'path': 'stimuli/items/undersea_animal_15.png'},
    {'name': 'stimuli/items/undersea_animal_14.png', 'path': 'stimuli/items/undersea_animal_14.png'},
    {'name': 'stimuli/items/undersea_animal_13.png', 'path': 'stimuli/items/undersea_animal_13.png'},
    {'name': 'stimuli/items/undersea_animal_12.png', 'path': 'stimuli/items/undersea_animal_12.png'},
    {'name': 'stimuli/items/undersea_animal_11.png', 'path': 'stimuli/items/undersea_animal_11.png'},
    {'name': 'stimuli/items/undersea_animal_10.png', 'path': 'stimuli/items/undersea_animal_10.png'},
    {'name': 'stimuli/items/undersea_animal_9.png', 'path': 'stimuli/items/undersea_animal_9.png'},
    {'name': 'stimuli/items/undersea_animal_8.png', 'path': 'stimuli/items/undersea_animal_8.png'},
    {'name': 'stimuli/items/undersea_animal_7.png', 'path': 'stimuli/items/undersea_animal_7.png'},
    {'name': 'stimuli/items/undersea_animal_6.png', 'path': 'stimuli/items/undersea_animal_6.png'},
    {'name': 'stimuli/items/undersea_animal_5.png', 'path': 'stimuli/items/undersea_animal_5.png'},
    {'name': 'stimuli/items/undersea_animal_4.png', 'path': 'stimuli/items/undersea_animal_4.png'},
    {'name': 'stimuli/items/undersea_animal_3.png', 'path': 'stimuli/items/undersea_animal_3.png'},
    {'name': 'stimuli/items/undersea_animal_2.png', 'path': 'stimuli/items/undersea_animal_2.png'},
    {'name': 'stimuli/items/undersea_animal_1.png', 'path': 'stimuli/items/undersea_animal_1.png'},
    {'name': 'stimuli/items/other_object_20.png', 'path': 'stimuli/items/other_object_20.png'},
    {'name': 'stimuli/items/other_object_19.png', 'path': 'stimuli/items/other_object_19.png'},
    {'name': 'stimuli/items/other_object_18.png', 'path': 'stimuli/items/other_object_18.png'},
    {'name': 'stimuli/items/other_object_17.png', 'path': 'stimuli/items/other_object_17.png'},
    {'name': 'stimuli/items/other_object_16.png', 'path': 'stimuli/items/other_object_16.png'},
    {'name': 'stimuli/items/other_object_15.png', 'path': 'stimuli/items/other_object_15.png'},
    {'name': 'stimuli/items/other_object_14.png', 'path': 'stimuli/items/other_object_14.png'},
    {'name': 'stimuli/items/other_object_13.png', 'path': 'stimuli/items/other_object_13.png'},
    {'name': 'stimuli/items/other_object_12.png', 'path': 'stimuli/items/other_object_12.png'},
    {'name': 'stimuli/items/other_object_11.png', 'path': 'stimuli/items/other_object_11.png'},
    {'name': 'stimuli/items/other_object_10.png', 'path': 'stimuli/items/other_object_10.png'},
    {'name': 'stimuli/items/other_object_9.png', 'path': 'stimuli/items/other_object_9.png'},
    {'name': 'stimuli/items/other_object_8.png', 'path': 'stimuli/items/other_object_8.png'},
    {'name': 'stimuli/items/other_object_7.png', 'path': 'stimuli/items/other_object_7.png'},
    {'name': 'stimuli/items/other_object_6.png', 'path': 'stimuli/items/other_object_6.png'},
    {'name': 'stimuli/items/other_object_5.png', 'path': 'stimuli/items/other_object_5.png'},
    {'name': 'stimuli/items/other_object_4.png', 'path': 'stimuli/items/other_object_4.png'},
    {'name': 'stimuli/items/other_object_3.png', 'path': 'stimuli/items/other_object_3.png'},
    {'name': 'stimuli/items/other_object_2.png', 'path': 'stimuli/items/other_object_2.png'},
    {'name': 'stimuli/items/other_object_1.png', 'path': 'stimuli/items/other_object_1.png'},
    {'name': 'stimuli/items/other_animal_20.png', 'path': 'stimuli/items/other_animal_20.png'},
    {'name': 'stimuli/items/other_animal_19.png', 'path': 'stimuli/items/other_animal_19.png'},
    {'name': 'stimuli/items/other_animal_18.png', 'path': 'stimuli/items/other_animal_18.png'},
    {'name': 'stimuli/items/other_animal_17.png', 'path': 'stimuli/items/other_animal_17.png'},
    {'name': 'stimuli/items/other_animal_16.png', 'path': 'stimuli/items/other_animal_16.png'},
    {'name': 'stimuli/items/other_animal_15.png', 'path': 'stimuli/items/other_animal_15.png'},
    {'name': 'stimuli/items/other_animal_14.png', 'path': 'stimuli/items/other_animal_14.png'},
    {'name': 'stimuli/items/other_animal_13.png', 'path': 'stimuli/items/other_animal_13.png'},
    {'name': 'stimuli/items/other_animal_12.png', 'path': 'stimuli/items/other_animal_12.png'},
    {'name': 'stimuli/items/other_animal_11.png', 'path': 'stimuli/items/other_animal_11.png'},
    {'name': 'stimuli/items/other_animal_10.png', 'path': 'stimuli/items/other_animal_10.png'},
    {'name': 'stimuli/items/other_animal_9.png', 'path': 'stimuli/items/other_animal_9.png'},
    {'name': 'stimuli/items/other_animal_8.png', 'path': 'stimuli/items/other_animal_8.png'},
    {'name': 'stimuli/items/other_animal_7.png', 'path': 'stimuli/items/other_animal_7.png'},
    {'name': 'stimuli/items/other_animal_6.png', 'path': 'stimuli/items/other_animal_6.png'},
    {'name': 'stimuli/items/other_animal_5.png', 'path': 'stimuli/items/other_animal_5.png'},
    {'name': 'stimuli/items/other_animal_4.png', 'path': 'stimuli/items/other_animal_4.png'},
    {'name': 'stimuli/items/other_animal_3.png', 'path': 'stimuli/items/other_animal_3.png'},
    {'name': 'stimuli/items/other_animal_2.png', 'path': 'stimuli/items/other_animal_2.png'},
    {'name': 'stimuli/items/other_animal_1.png', 'path': 'stimuli/items/other_animal_1.png'},
    {'name': 'stimuli/items/jungle_object_30.png', 'path': 'stimuli/items/jungle_object_30.png'},
    {'name': 'stimuli/items/jungle_object_29.png', 'path': 'stimuli/items/jungle_object_29.png'},
    {'name': 'stimuli/items/jungle_object_28.png', 'path': 'stimuli/items/jungle_object_28.png'},
    {'name': 'stimuli/items/jungle_object_27.png', 'path': 'stimuli/items/jungle_object_27.png'},
    {'name': 'stimuli/items/jungle_object_26.png', 'path': 'stimuli/items/jungle_object_26.png'},
    {'name': 'stimuli/items/jungle_object_25.png', 'path': 'stimuli/items/jungle_object_25.png'},
    {'name': 'stimuli/items/jungle_object_24.png', 'path': 'stimuli/items/jungle_object_24.png'},
    {'name': 'stimuli/items/jungle_object_23.png', 'path': 'stimuli/items/jungle_object_23.png'},
    {'name': 'stimuli/items/jungle_object_22.png', 'path': 'stimuli/items/jungle_object_22.png'},
    {'name': 'stimuli/items/jungle_object_21.png', 'path': 'stimuli/items/jungle_object_21.png'},
    {'name': 'stimuli/items/jungle_object_20.png', 'path': 'stimuli/items/jungle_object_20.png'},
    {'name': 'stimuli/items/jungle_object_19.png', 'path': 'stimuli/items/jungle_object_19.png'},
    {'name': 'stimuli/items/jungle_object_18.png', 'path': 'stimuli/items/jungle_object_18.png'},
    {'name': 'stimuli/items/jungle_object_17.png', 'path': 'stimuli/items/jungle_object_17.png'},
    {'name': 'stimuli/items/jungle_object_16.png', 'path': 'stimuli/items/jungle_object_16.png'},
    {'name': 'stimuli/items/jungle_object_15.png', 'path': 'stimuli/items/jungle_object_15.png'},
    {'name': 'stimuli/items/jungle_object_14.png', 'path': 'stimuli/items/jungle_object_14.png'},
    {'name': 'stimuli/items/jungle_object_13.png', 'path': 'stimuli/items/jungle_object_13.png'},
    {'name': 'stimuli/items/jungle_object_12.png', 'path': 'stimuli/items/jungle_object_12.png'},
    {'name': 'stimuli/items/jungle_object_11.png', 'path': 'stimuli/items/jungle_object_11.png'},
    {'name': 'stimuli/items/jungle_object_10.png', 'path': 'stimuli/items/jungle_object_10.png'},
    {'name': 'stimuli/items/jungle_object_9.png', 'path': 'stimuli/items/jungle_object_9.png'},
    {'name': 'stimuli/items/jungle_object_8.png', 'path': 'stimuli/items/jungle_object_8.png'},
    {'name': 'stimuli/items/jungle_object_7.png', 'path': 'stimuli/items/jungle_object_7.png'},
    {'name': 'stimuli/items/jungle_object_6.png', 'path': 'stimuli/items/jungle_object_6.png'},
    {'name': 'stimuli/items/jungle_object_5.png', 'path': 'stimuli/items/jungle_object_5.png'},
    {'name': 'stimuli/items/jungle_object_4.png', 'path': 'stimuli/items/jungle_object_4.png'},
    {'name': 'stimuli/items/jungle_object_3.png', 'path': 'stimuli/items/jungle_object_3.png'},
    {'name': 'stimuli/items/jungle_object_2.png', 'path': 'stimuli/items/jungle_object_2.png'},
    {'name': 'stimuli/items/jungle_object_1.png', 'path': 'stimuli/items/jungle_object_1.png'},
    {'name': 'stimuli/items/jungle_animal_30.png', 'path': 'stimuli/items/jungle_animal_30.png'},
    {'name': 'stimuli/items/jungle_animal_29.png', 'path': 'stimuli/items/jungle_animal_29.png'},
    {'name': 'stimuli/items/jungle_animal_28.png', 'path': 'stimuli/items/jungle_animal_28.png'},
    {'name': 'stimuli/items/jungle_animal_27.png', 'path': 'stimuli/items/jungle_animal_27.png'},
    {'name': 'stimuli/items/jungle_animal_26.png', 'path': 'stimuli/items/jungle_animal_26.png'},
    {'name': 'stimuli/items/jungle_animal_25.png', 'path': 'stimuli/items/jungle_animal_25.png'},
    {'name': 'stimuli/items/jungle_animal_24.png', 'path': 'stimuli/items/jungle_animal_24.png'},
    {'name': 'stimuli/items/jungle_animal_23.png', 'path': 'stimuli/items/jungle_animal_23.png'},
    {'name': 'stimuli/items/jungle_animal_22.png', 'path': 'stimuli/items/jungle_animal_22.png'},
    {'name': 'stimuli/items/jungle_animal_21.png', 'path': 'stimuli/items/jungle_animal_21.png'},
    {'name': 'stimuli/items/jungle_animal_20.png', 'path': 'stimuli/items/jungle_animal_20.png'},
    {'name': 'stimuli/items/jungle_animal_19.png', 'path': 'stimuli/items/jungle_animal_19.png'},
    {'name': 'stimuli/items/jungle_animal_18.png', 'path': 'stimuli/items/jungle_animal_18.png'},
    {'name': 'stimuli/items/jungle_animal_17.png', 'path': 'stimuli/items/jungle_animal_17.png'},
    {'name': 'stimuli/items/jungle_animal_16.png', 'path': 'stimuli/items/jungle_animal_16.png'},
    {'name': 'stimuli/items/jungle_animal_15.png', 'path': 'stimuli/items/jungle_animal_15.png'},
    {'name': 'stimuli/items/jungle_animal_14.png', 'path': 'stimuli/items/jungle_animal_14.png'},
    {'name': 'stimuli/items/jungle_animal_13.png', 'path': 'stimuli/items/jungle_animal_13.png'},
    {'name': 'stimuli/items/jungle_animal_12.png', 'path': 'stimuli/items/jungle_animal_12.png'},
    {'name': 'stimuli/items/jungle_animal_11.png', 'path': 'stimuli/items/jungle_animal_11.png'},
    {'name': 'stimuli/items/jungle_animal_10.png', 'path': 'stimuli/items/jungle_animal_10.png'},
    {'name': 'stimuli/items/jungle_animal_9.png', 'path': 'stimuli/items/jungle_animal_9.png'},
    {'name': 'stimuli/items/jungle_animal_8.png', 'path': 'stimuli/items/jungle_animal_8.png'},
    {'name': 'stimuli/items/jungle_animal_7.png', 'path': 'stimuli/items/jungle_animal_7.png'},
    {'name': 'stimuli/items/jungle_animal_6.png', 'path': 'stimuli/items/jungle_animal_6.png'},
    {'name': 'stimuli/items/jungle_animal_5.png', 'path': 'stimuli/items/jungle_animal_5.png'},
    {'name': 'stimuli/items/jungle_animal_4.png', 'path': 'stimuli/items/jungle_animal_4.png'},
    {'name': 'stimuli/items/jungle_animal_3.png', 'path': 'stimuli/items/jungle_animal_3.png'},
    {'name': 'stimuli/items/jungle_animal_2.png', 'path': 'stimuli/items/jungle_animal_2.png'},
    {'name': 'stimuli/items/jungle_animal_1.png', 'path': 'stimuli/items/jungle_animal_1.png'},
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
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expInfo["delay"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var subs_rand_varsClock;
var subnum;
var session;
var set_instructionsClock;
var ret_inst_scrClock;
var text_instructions;
var key_resp_start;
var ret_inst2Clock;
var text_instructions_2;
var key_resp_start_2;
var create_runs_stim_divClock;
var set_rowsClock;
var item_imagine_sceneClock;
var text_imagine;
var item_cue;
var key_resp_remember;
var blank1000Clock;
var text;
var select_contextClock;
var text_context_headline;
var text_sea;
var text_jungle;
var key_resp_context;
var blank500Clock;
var text_blank;
var context_confidenceClock;
var text_context_choice;
var slider_context_conf;
var key_resp_context_conf;
var select_scene_nameClock;
var text_scene_headline;
var text_actual_context;
var text_q_scene;
var text_labels;
var key_resp_scenes;
var scene_confidenceClock;
var text_chosen_scene;
var slider_scene_conf;
var key_resp_scene_conf;
var blank3000Clock;
var text_blank3000;
var is_lastClock;
var rest_between_runsClock;
var text_run_rest;
var key_resp_run_rest;
var ret_end_screenClock;
var text_endSet;
var key_resp_continue;
var forked_instructionsClock;
var text_end_inst;
var key_resp_end;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "subs_rand_vars"
  subs_rand_varsClock = new util.Clock();
  // Run 'Begin Experiment' code from code_rand_vars
  subnum = Number.parseInt(expInfo["participant"]);
  session = expInfo["session"];
  console.log(session);
  
  console.log('participant:',expInfo['participant']);
  console.log('session:',expInfo['session']);
  console.log('group:',expInfo['group']);
  console.log('delay:',expInfo['delay']);
  
  // Initialize components for Routine "set_instructions"
  set_instructionsClock = new util.Clock();
  var inst_ret
  // Initialize components for Routine "ret_inst_scr"
  ret_inst_scrClock = new util.Clock();
  text_instructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions',
    text: 'Now you will see the items (animals and objects) you saw in the previous item-scene association task (if this is your second session, the last task from your first session).\n\nDuring the presentation of each item, imagine the background scene where the item appeared in as much detail as possible.\n\nPress SPACEBAR to continue.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_start = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ret_inst2"
  ret_inst2Clock = new util.Clock();
  text_instructions_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_instructions_2',
    text: 'After the item disappears you will answer the memory questions and confidence ratings about the scene. At this point please stop recalling the scene and just report what you chose to imagine.\n\nPLEASE TRY USING THE FULL CONFIDENCE RATING SCALE:\n\n"1. not confident": choose this option if you had no idea whatsoever which type and/or specific scene was associated with the item. \n\n"2.somewhat confident": choose this when you had some recollection or a hunch but you\'re not certain about it.\n\n"3.very confident": Choose this when you\'re quite certain about your choices.\n\nPress SPACEBAR to start the task.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_start_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "create_runs_stim_div"
  create_runs_stim_divClock = new util.Clock();
  // Initialize components for Routine "set_rows"
  set_rowsClock = new util.Clock();
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
  key_resp_remember = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "blank1000"
  blank1000Clock = new util.Clock();
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
  
  // Initialize components for Routine "select_context"
  select_contextClock = new util.Clock();
  text_context_headline = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_context_headline',
    text: 'Which Context?',
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
    text: 'The context was',
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
    text: 'Which specific scene?',
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
  
  // Initialize components for Routine "scene_confidence"
  scene_confidenceClock = new util.Clock();
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
  
  // Initialize components for Routine "is_last"
  is_lastClock = new util.Clock();
  // Initialize components for Routine "rest_between_runs"
  rest_between_runsClock = new util.Clock();
  text_run_rest = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_run_rest',
    text: "Good Job! You can rest for a moment.\n\nWhen you're ready to continue, press the SPACEBAR key.",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_run_rest = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ret_end_screen"
  ret_end_screenClock = new util.Clock();
  text_endSet = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_endSet',
    text: "Great job!\n\nYou're done with this set of items.\n\nPress SPACEBAR to continue",
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "forked_instructions"
  forked_instructionsClock = new util.Clock();
  window.end_inst = undefined;
  text_end_inst = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_end_inst',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp_end = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  let completion_url;
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var stim_list;
var subs_rand_varsComponents;
function subs_rand_varsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'subs_rand_vars' ---
    t = 0;
    subs_rand_varsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('subs_rand_vars.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_rand_vars
    // Function to read and process the CSV file using a Promise
    function loadCSVFile(filePath) {
        return new Promise((resolve, reject) => {
            var request = new XMLHttpRequest();
            request.open('GET', filePath, true);
            request.onreadystatechange = function () {
                if (request.readyState === 4) {
                    if (request.status === 200) {
                        resolve(request.responseText);
                    } else {
                        reject('Error: ' + request.status);
                    }
                }
            };
            request.send();
        });
    }
    
    // Async function to process CSV data and set the variables
    async function processCSVData() {
        try {
            var csvData = await loadCSVFile('counterbalanced_vars.csv');
    
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
    
            var sub_conds_values = Object.values(sub_conds);
    
            console.log(sub_conds_values);
    
            if (sub_conds_values[2] === "0") {
                key_jungle = "1";
                key_sea = "2";
            } else {
                key_jungle = "2";
                key_sea = "1";
            }
            if (sub_conds_values[3] === "0") {
                color_jungle = "purple";
                color_sea = "pink";
            } else {
                color_jungle = "pink";
                color_sea = "purple";
            }
            if (sub_conds_values[4] === "0") {
                key_J1 = "1";
                key_J2 = "2";
            } else {
                key_J1 = "2";
                key_J2 = "1";
            }
            if (sub_conds_values[5] === "0") {
                console.log('fifth cond in 0');
                key_U1 = "1";
                key_U2 = "2";
            } else {
                console.log('fifth cond in 1');
                key_U1 = "2";
                key_U2 = "1";
            }
    
            console.log({ key_jungle, color_jungle, key_U1, key_J1 });
    
        } catch (error) {
            console.error('Error loading or processing the CSV file:', error);
        }
    }
    
    
    // Async function to run the process and then the subsequent functions
    async function main() {
        await processCSVData(); // Wait for CSV processing to complete
    
        // Now call the other functions that depend on the variables set in processCSVData
        pos_sea = [];
        pos_jungle = [];
        context_jungle_txt = '';
        context_sea_txt  = '';
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
    
        console.log('context jungle text:',context_jungle_txt);
    //    anotherFunction();
        // Add other dependent functions here
    }
    
    // Start the process
    main();
    
    
    // Run 'Begin Routine' code from code_scene_screens
    // get the stim list based on group and delay parameters
    if (expInfo['group'] ==='A'){
        if (expInfo['delay'] ==='short'){    
            stim_list = ((("stimuli/stim_lists/stimuli_list_sub_" + subnum) + "_set_1") + "_run_1.csv");
            }else{
                if (expInfo['delay'] ==='long'){
                    stim_list = ((("stimuli/stim_lists/stimuli_list_sub_" + subnum) + "_set_2") + "_run_1.csv");
                    }
                }
        }
       
    console.log('group:',expInfo['group'],'delay:',expInfo['delay']);
    console.log('stim list path is:',stim_list);
    // keep track of which components have finished
    subs_rand_varsComponents = [];
    
    for (const thisComponent of subs_rand_varsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function subs_rand_varsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'subs_rand_vars' ---
    // get current time
    t = subs_rand_varsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of subs_rand_varsComponents)
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


function subs_rand_varsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'subs_rand_vars' ---
    for (const thisComponent of subs_rand_varsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('subs_rand_vars.stopped', globalClock.getTime());
    // the Routine "subs_rand_vars" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var set_instructionsComponents;
function set_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'set_instructions' ---
    t = 0;
    set_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('set_instructions.started', globalClock.getTime());
    //if (expInfo['group']==='A' && expInfo['session']==='1'){
    //    inst_ret = 'In this task, you will see only the items that you have seen in the previous item-scene association task.\n\nRiminder: During the presentation of each item, imagine the background scene where the item appeared in as much detail as possible.\n\nThen answer the memory questions about the type and name of the scene you imagined. At this point just report what you imagined when the item appeared, do not continue to recall the scene!\n\the names of the two scenes from the correct context and choose the name of the specific scene where the item appeared, and again indicate your confidence in your choice. If you were correct about the context, you will see the scene names from the context you chose. If you were incorrect you will see the names from the other context and have the chance to guess.\n\nWhen you are ready to begin, press SPACEBAR.';
    //    }else{
    //        if (expInfo['group']==='A' && expInfo['session']==='2'){
    //           inst_ret = 'In this task, you will see only the items that you have seen in the second item-scene association task three days ago.\n\nDuring the presentation of each item, you will need to imagine the background scene where the item appeared in as much detail as possible.\n\nThen you will answer a few questions using the "1","2" and "3" keyboard keys. First, you will indicate the general context in which the item appeared (jungle or undersea) and how confident you are about your choice. Next, regardless of your choice of context, you will see the names of the two scenes from the correct context and choose the name of the specific scene where the item appeared, and again indicate your confidence in your choice. If you were correct about the context, you will see the scene names from the context you chose. If you were incorrect you will see the names from the other context and have the chance to guess.\n\nWhen you are ready to begin, press the SPACEBAR key.';
    //           }
    //       }
    //add group B logic
    
    
                
    // keep track of which components have finished
    set_instructionsComponents = [];
    
    for (const thisComponent of set_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function set_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'set_instructions' ---
    // get current time
    t = set_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of set_instructionsComponents)
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


function set_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'set_instructions' ---
    for (const thisComponent of set_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('set_instructions.stopped', globalClock.getTime());
    // the Routine "set_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_start_allKeys;
var ret_inst_scrComponents;
function ret_inst_scrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ret_inst_scr' ---
    t = 0;
    ret_inst_scrClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ret_inst_scr.started', globalClock.getTime());
    key_resp_start.keys = undefined;
    key_resp_start.rt = undefined;
    _key_resp_start_allKeys = [];
    // keep track of which components have finished
    ret_inst_scrComponents = [];
    ret_inst_scrComponents.push(text_instructions);
    ret_inst_scrComponents.push(key_resp_start);
    
    for (const thisComponent of ret_inst_scrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ret_inst_scrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ret_inst_scr' ---
    // get current time
    t = ret_inst_scrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions* updates
    if (t >= 0.0 && text_instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions.tStart = t;  // (not accounting for frame time here)
      text_instructions.frameNStart = frameN;  // exact frame index
      
      text_instructions.setAutoDraw(true);
    }
    
    
    // *key_resp_start* updates
    if (t >= 0.0 && key_resp_start.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_start.tStart = t;  // (not accounting for frame time here)
      key_resp_start.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_start.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_start.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_start.clearEvents(); });
    }
    
    if (key_resp_start.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_start.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_start_allKeys = _key_resp_start_allKeys.concat(theseKeys);
      if (_key_resp_start_allKeys.length > 0) {
        key_resp_start.keys = _key_resp_start_allKeys[_key_resp_start_allKeys.length - 1].name;  // just the last key pressed
        key_resp_start.rt = _key_resp_start_allKeys[_key_resp_start_allKeys.length - 1].rt;
        key_resp_start.duration = _key_resp_start_allKeys[_key_resp_start_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_inst_scrComponents)
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


function ret_inst_scrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ret_inst_scr' ---
    for (const thisComponent of ret_inst_scrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ret_inst_scr.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_start.corr, level);
    }
    psychoJS.experiment.addData('key_resp_start.keys', key_resp_start.keys);
    if (typeof key_resp_start.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_start.rt', key_resp_start.rt);
        psychoJS.experiment.addData('key_resp_start.duration', key_resp_start.duration);
        routineTimer.reset();
        }
    
    key_resp_start.stop();
    // the Routine "ret_inst_scr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_start_2_allKeys;
var ret_inst2Components;
function ret_inst2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ret_inst2' ---
    t = 0;
    ret_inst2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('ret_inst2.started', globalClock.getTime());
    key_resp_start_2.keys = undefined;
    key_resp_start_2.rt = undefined;
    _key_resp_start_2_allKeys = [];
    // keep track of which components have finished
    ret_inst2Components = [];
    ret_inst2Components.push(text_instructions_2);
    ret_inst2Components.push(key_resp_start_2);
    
    for (const thisComponent of ret_inst2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ret_inst2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ret_inst2' ---
    // get current time
    t = ret_inst2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_instructions_2* updates
    if (t >= 0.0 && text_instructions_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_instructions_2.tStart = t;  // (not accounting for frame time here)
      text_instructions_2.frameNStart = frameN;  // exact frame index
      
      text_instructions_2.setAutoDraw(true);
    }
    
    
    // *key_resp_start_2* updates
    if (t >= 0.0 && key_resp_start_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_start_2.tStart = t;  // (not accounting for frame time here)
      key_resp_start_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_start_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_start_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_start_2.clearEvents(); });
    }
    
    if (key_resp_start_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_start_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_start_2_allKeys = _key_resp_start_2_allKeys.concat(theseKeys);
      if (_key_resp_start_2_allKeys.length > 0) {
        key_resp_start_2.keys = _key_resp_start_2_allKeys[_key_resp_start_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_start_2.rt = _key_resp_start_2_allKeys[_key_resp_start_2_allKeys.length - 1].rt;
        key_resp_start_2.duration = _key_resp_start_2_allKeys[_key_resp_start_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_inst2Components)
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


function ret_inst2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ret_inst2' ---
    for (const thisComponent of ret_inst2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ret_inst2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_start_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_start_2.keys', key_resp_start_2.keys);
    if (typeof key_resp_start_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_start_2.rt', key_resp_start_2.rt);
        psychoJS.experiment.addData('key_resp_start_2.duration', key_resp_start_2.duration);
        routineTimer.reset();
        }
    
    key_resp_start_2.stop();
    // the Routine "ret_inst2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var jungle_lbl_text;
var sea_lbl_text;
var create_runs_stim_divComponents;
function create_runs_stim_divRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'create_runs_stim_div' ---
    t = 0;
    create_runs_stim_divClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('create_runs_stim_div.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_4
    
    // Hardcoded number of stimuli
    let stim_num = 80;
    
    // Create a list of row numbers
    let row_numbers = [];
    for (let i = 0; i < stim_num; i++) {
        row_numbers.push(i);
    }
    
    // Shuffle the row numbers using Fisher-Yates algorithm
    for (let i = row_numbers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [row_numbers[i], row_numbers[j]] = [row_numbers[j], row_numbers[i]]; // Swap elements
    }
    
    // Divide into 4 runs
    let run_size = Math.ceil(stim_num / 4);
    
    for (let i = 0; i < 4; i++) {
        let start = i * run_size;
        let end = start + run_size;
        run_stim.push(row_numbers.slice(start, end));
    }
    
    
    // Explicitly log the contents of run_stim arrays
    for (let i = 0; i < run_stim.length; i++) {
        console.log(`Run ${i + 1}:`, run_stim[i]);
    }
    //console.log('test 123 now should come run_stim stuff:');
    //console.log('Content of the first list:', run_stim[0]);
    // Check if run_stim[0] is defined and not empty
    if (run_stim[0] && run_stim[0].length > 0) {
        console.log('First element of first run:', run_stim[0][0]);
    } else {
        console.error('run_stim[0] is undefined or empty!');
    }
    
    //console.log('rouge code starts to run now, presumably');
    jungle_lbl_text = '';
    sea_lbl_text = '';
    // Function to parse CSV string into an array of objects
    function parseCSV(csvString) {
        const lines = csvString.split('\n').filter(line => line.trim() !== '');
        const headers = lines[0].split(',').map(header => header.trim());
        const result = [];
    
        console.log('CSV Headers:', headers);
    
        for (let i = 1; i < lines.length; i++) {
            const obj = {};
            const currentLine = lines[i].split(',').map(cell => cell.trim());
            
            if (currentLine.length !== headers.length) {
                console.error(`Row ${i} does not match header length.`);
                continue;
            }
    
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentLine[j];
            }
            result.push(obj);
        }
    
    //    console.log('Parsed CSV Data:', result);
        return result;
    }
    
    // Convert ArrayBuffer to string
    function arrayBufferToString(buffer) {
        let decoder = new TextDecoder('utf-8');
        return decoder.decode(buffer);
    }
    
    // Process the CSV data and generate label texts
    function processCSVData2(csvData) {
        let csvString = arrayBufferToString(csvData);
        let data = parseCSV(csvString);
    
        // Create a dictionary for labels
    //    let labels = {};
        data.forEach(row => {
            let stimulus = row['scene_stimulus'];
            let label = row['scene_label'];
            
    //        console.log('Processing row:', row); // Debugging output
    
            if (stimulus && label) {
                let key = stimulus; // Extract the last 2 characters before '.png'
                labels[key] = label;
            }
        });
    
        console.log('Labels Dictionary:', labels);
    
        // Generate jungle labels text
        console.log('key_J1:',key_J1);
        if (key_J1 === '1') {
            jungle_lbl_text = `1.${labels['J1']}\n2.${labels['J2']}`;
        } else if (key_J1 === '2') {
            console.log('inside if key_J1 = 2');
            jungle_lbl_text = `1.${labels['J2']}\n2.${labels['J1']}`;
            console.log(jungle_lbl_text)
        }
    
        // Generate sea labels text
        if (key_U1 === '1') {
            console.log('inside if 1');
            sea_lbl_text = `1.${labels['U1']}\n2.${labels['U2']}`;
        } else if (key_U1 === '2') {
            console.log('inside if 2');
            sea_lbl_text = `1.${labels['U2']}\n2.${labels['U1']}`;
        }
    
        // Print or use the generated labels
        console.log('Jungle Labels Text:', jungle_lbl_text);
        console.log('Sea Labels Text:', sea_lbl_text);
    }
    
    // Load the CSV file and process it
    let name_list = 'stimuli/cond_lists/scene_names_sub_' + subnum + '.csv';
    let csvData = psychoJS.serverManager.getResource(name_list);
    
    console.log('if loop calls processCSVData2:');
    if (csvData instanceof ArrayBuffer) {
        processCSVData2(csvData);
    } else {
        console.error('Unexpected data type:', typeof csvData);
    }
    
    //console.log('end of if loop, processCSVData2 is done, persumably');
    
    // keep track of which components have finished
    create_runs_stim_divComponents = [];
    
    for (const thisComponent of create_runs_stim_divComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function create_runs_stim_divRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'create_runs_stim_div' ---
    // get current time
    t = create_runs_stim_divClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of create_runs_stim_divComponents)
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


function create_runs_stim_divRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'create_runs_stim_div' ---
    for (const thisComponent of create_runs_stim_divComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('create_runs_stim_div.stopped', globalClock.getTime());
    // the Routine "create_runs_stim_div" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
      runsLoopScheduler.add(set_rowsRoutineBegin(snapshot));
      runsLoopScheduler.add(set_rowsRoutineEachFrame());
      runsLoopScheduler.add(set_rowsRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      runsLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      runsLoopScheduler.add(trialsLoopScheduler);
      runsLoopScheduler.add(trialsLoopEnd);
      runsLoopScheduler.add(is_lastRoutineBegin(snapshot));
      runsLoopScheduler.add(is_lastRoutineEachFrame());
      runsLoopScheduler.add(is_lastRoutineEnd(snapshot));
      const show_rest_screenLoopScheduler = new Scheduler(psychoJS);
      runsLoopScheduler.add(show_rest_screenLoopBegin(show_rest_screenLoopScheduler, snapshot));
      runsLoopScheduler.add(show_rest_screenLoopScheduler);
      runsLoopScheduler.add(show_rest_screenLoopEnd);
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
      trialList: TrialHandler.importConditions(psychoJS.serverManager, stim_list, run_stim[run]),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(item_imagine_sceneRoutineBegin(snapshot));
      trialsLoopScheduler.add(item_imagine_sceneRoutineEachFrame());
      trialsLoopScheduler.add(item_imagine_sceneRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank1000RoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1000RoutineEachFrame());
      trialsLoopScheduler.add(blank1000RoutineEnd(snapshot));
      trialsLoopScheduler.add(select_contextRoutineBegin(snapshot));
      trialsLoopScheduler.add(select_contextRoutineEachFrame());
      trialsLoopScheduler.add(select_contextRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank500RoutineBegin(snapshot));
      trialsLoopScheduler.add(blank500RoutineEachFrame());
      trialsLoopScheduler.add(blank500RoutineEnd(snapshot));
      trialsLoopScheduler.add(context_confidenceRoutineBegin(snapshot));
      trialsLoopScheduler.add(context_confidenceRoutineEachFrame());
      trialsLoopScheduler.add(context_confidenceRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank1000RoutineBegin(snapshot));
      trialsLoopScheduler.add(blank1000RoutineEachFrame());
      trialsLoopScheduler.add(blank1000RoutineEnd(snapshot));
      trialsLoopScheduler.add(select_scene_nameRoutineBegin(snapshot));
      trialsLoopScheduler.add(select_scene_nameRoutineEachFrame());
      trialsLoopScheduler.add(select_scene_nameRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank500RoutineBegin(snapshot));
      trialsLoopScheduler.add(blank500RoutineEachFrame());
      trialsLoopScheduler.add(blank500RoutineEnd(snapshot));
      trialsLoopScheduler.add(scene_confidenceRoutineBegin(snapshot));
      trialsLoopScheduler.add(scene_confidenceRoutineEachFrame());
      trialsLoopScheduler.add(scene_confidenceRoutineEnd(snapshot));
      trialsLoopScheduler.add(blank3000RoutineBegin(snapshot));
      trialsLoopScheduler.add(blank3000RoutineEachFrame());
      trialsLoopScheduler.add(blank3000RoutineEnd(snapshot));
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


var show_rest_screen;
function show_rest_screenLoopBegin(show_rest_screenLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    show_rest_screen = new TrialHandler({
      psychoJS: psychoJS,
      nReps: last_run, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'show_rest_screen'
    });
    psychoJS.experiment.addLoop(show_rest_screen); // add the loop to the experiment
    currentLoop = show_rest_screen;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisShow_rest_screen of show_rest_screen) {
      snapshot = show_rest_screen.getSnapshot();
      show_rest_screenLoopScheduler.add(importConditions(snapshot));
      show_rest_screenLoopScheduler.add(rest_between_runsRoutineBegin(snapshot));
      show_rest_screenLoopScheduler.add(rest_between_runsRoutineEachFrame());
      show_rest_screenLoopScheduler.add(rest_between_runsRoutineEnd(snapshot));
      show_rest_screenLoopScheduler.add(show_rest_screenLoopEndIteration(show_rest_screenLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function show_rest_screenLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(show_rest_screen);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function show_rest_screenLoopEndIteration(scheduler, snapshot) {
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


var selected_rows;
var set_rowsComponents;
function set_rowsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'set_rows' ---
    t = 0;
    set_rowsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('set_rows.started', globalClock.getTime());
    //console.log("run:", run); // Should print 1, 2, 3, or 4
    //console.log("run_stim:", run_stim); // Should be an array of 4 arrays
    
    let runIndex = Number.parseInt(run); // Convert and adjust for 0-based index
    //console.log("runIndex:", runIndex);
    
    if (runIndex >= 0 && runIndex < run_stim.length) {
        selected_rows = run_stim[runIndex];
        console.log("selected_rows:", selected_rows);
    } else {
        console.error("Invalid run index:", runIndex, "for run_stim array.");
    }
    
    //console.log("run_stim length:", run_stim.length);
    run_stim.forEach((run, index) => {
        console.log(`run_stim[${index}]:`, run);
    });
    
    run_stim.forEach((arr, index) => {
        if (arr === undefined || arr === null) {
            console.error(`run_stim[${index}] is undefined or null`);
        } else {
            console.log(`run_stim[${index}]:`, arr);
        }
    });
    
    //console.log('trials loop is going to start now!');
    //console.log("Run value before loop:", run);
    //console.log("pos_sea:", pos_sea);
    //console.log("context jungle text:",context_jungle_txt);
    // keep track of which components have finished
    set_rowsComponents = [];
    
    for (const thisComponent of set_rowsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function set_rowsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'set_rows' ---
    // get current time
    t = set_rowsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of set_rowsComponents)
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


function set_rowsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'set_rows' ---
    for (const thisComponent of set_rowsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('set_rows.stopped', globalClock.getTime());
    // the Routine "set_rows" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_remember_allKeys;
var item_imagine_sceneComponents;
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
    key_resp_remember.keys = undefined;
    key_resp_remember.rt = undefined;
    _key_resp_remember_allKeys = [];
    // keep track of which components have finished
    item_imagine_sceneComponents = [];
    item_imagine_sceneComponents.push(text_imagine);
    item_imagine_sceneComponents.push(item_cue);
    item_imagine_sceneComponents.push(key_resp_remember);
    
    for (const thisComponent of item_imagine_sceneComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
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
    
    
    // *key_resp_remember* updates
    if (t >= 0.0 && key_resp_remember.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_remember.tStart = t;  // (not accounting for frame time here)
      key_resp_remember.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_remember.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_remember.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_remember.clearEvents(); });
    }
    
    frameRemains = 0.0 + 4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_remember.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_remember.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_remember.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_remember.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_remember_allKeys = _key_resp_remember_allKeys.concat(theseKeys);
      if (_key_resp_remember_allKeys.length > 0) {
        key_resp_remember.keys = _key_resp_remember_allKeys[_key_resp_remember_allKeys.length - 1].name;  // just the last key pressed
        key_resp_remember.rt = _key_resp_remember_allKeys[_key_resp_remember_allKeys.length - 1].rt;
        key_resp_remember.duration = _key_resp_remember_allKeys[_key_resp_remember_allKeys.length - 1].duration;
      }
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
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_remember.corr, level);
    }
    psychoJS.experiment.addData('key_resp_remember.keys', key_resp_remember.keys);
    if (typeof key_resp_remember.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_remember.rt', key_resp_remember.rt);
        psychoJS.experiment.addData('key_resp_remember.duration', key_resp_remember.duration);
        }
    
    key_resp_remember.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var blank1000Components;
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
    // keep track of which components have finished
    blank1000Components = [];
    blank1000Components.push(text);
    
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
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
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


var cor_key;
var _key_resp_context_allKeys;
var select_contextComponents;
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
    select_contextComponents.push(text_context_headline);
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
    
    // *text_context_headline* updates
    if (t >= 0.0 && text_context_headline.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_context_headline.tStart = t;  // (not accounting for frame time here)
      text_context_headline.frameNStart = frameN;  // exact frame index
      
      text_context_headline.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_context_headline.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_context_headline.setAutoDraw(false);
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


var c_k;
var chosen_cont;
var chosen_cont_color;
var _key_resp_context_conf_allKeys;
var context_confidenceComponents;
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
    c_k = false;
    if ((key_resp_context.keys === key_jungle)) {
        c_k=true;
        console.log('Jungle context chosen');
        chosen_cont = "Jungle";
        chosen_cont_color = color_jungle;
    } else {
        if ((key_resp_context.keys === key_sea)) {
            console.log('undersea context chosen');
            c_k=true;
            chosen_cont = "Undersea";
            chosen_cont_color = color_sea;
        } else {
            if (!c_k) {
                console.log('no context chosen');
                chosen_cont = "Nothing was chosen";
                chosen_cont_color = "White";
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
    if (t >= 0.0 && key_resp_context_conf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_context_conf.tStart = t;  // (not accounting for frame time here)
      key_resp_context_conf.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_context_conf.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_context_conf.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_context_conf.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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


var _pj;
var cur_labels;
var cur_color;
var cor_scene_key;
var _key_resp_scenes_allKeys;
var select_scene_nameComponents;
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


var l_k;
var chosen_scene;
var _key_resp_scene_conf_allKeys;
var scene_confidenceComponents;
function scene_confidenceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'scene_confidence' ---
    t = 0;
    scene_confidenceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('scene_confidence.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_get_chosen_scene
    l_k = false;
    if ((scene_cat === "Jungle")) {
        if ((key_resp_scenes.keys === key_J1)) {
            l_k = true;
            chosen_scene = labels["J1"];
        } else {
            if ((key_resp_scenes.keys === key_J2)) {
                l_k = true;
                chosen_scene = labels["J2"];
            } else {
                if (!l_k) {
                    chosen_scene = "Nothing was chosen";
                    cur_color = "White";
                }
            }
        }
    } else {
        if ((scene_cat === "Undersea")) {
            if ((key_resp_scenes.keys === key_U1)) {
                l_k = true;
                chosen_scene = labels["U1"];
            } else {
                if ((key_resp_scenes.keys === key_U2)) {
                    l_k = true;
                    chosen_scene = labels["U2"];
                } else {
                    if (!l_k) {
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
    scene_confidenceComponents = [];
    scene_confidenceComponents.push(text_chosen_scene);
    scene_confidenceComponents.push(slider_scene_conf);
    scene_confidenceComponents.push(key_resp_scene_conf);
    
    for (const thisComponent of scene_confidenceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function scene_confidenceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'scene_confidence' ---
    // get current time
    t = scene_confidenceClock.getTime();
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
    if (t >= 0.0 && key_resp_scene_conf.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_scene_conf.tStart = t;  // (not accounting for frame time here)
      key_resp_scene_conf.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_scene_conf.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_scene_conf.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_scene_conf.clearEvents(); });
    }
    
    frameRemains = 0.0 + 2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
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
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of scene_confidenceComponents)
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


function scene_confidenceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'scene_confidence' ---
    for (const thisComponent of scene_confidenceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('scene_confidence.stopped', globalClock.getTime());
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


var blank3000Components;
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
    
    frameRemains = 0.0 + 3.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_blank3000.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_blank3000.setAutoDraw(false);
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


var last_run;
var is_lastComponents;
function is_lastRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'is_last' ---
    t = 0;
    is_lastClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('is_last.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_islast
    if ((run === 3)) {
        last_run = 0;
    } else {
        last_run = 1;
    }
    
    // keep track of which components have finished
    is_lastComponents = [];
    
    for (const thisComponent of is_lastComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function is_lastRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'is_last' ---
    // get current time
    t = is_lastClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of is_lastComponents)
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


function is_lastRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'is_last' ---
    for (const thisComponent of is_lastComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('is_last.stopped', globalClock.getTime());
    // the Routine "is_last" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_run_rest_allKeys;
var rest_between_runsComponents;
function rest_between_runsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'rest_between_runs' ---
    t = 0;
    rest_between_runsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('rest_between_runs.started', globalClock.getTime());
    key_resp_run_rest.keys = undefined;
    key_resp_run_rest.rt = undefined;
    _key_resp_run_rest_allKeys = [];
    // keep track of which components have finished
    rest_between_runsComponents = [];
    rest_between_runsComponents.push(text_run_rest);
    rest_between_runsComponents.push(key_resp_run_rest);
    
    for (const thisComponent of rest_between_runsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function rest_between_runsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'rest_between_runs' ---
    // get current time
    t = rest_between_runsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_run_rest* updates
    if (t >= 0.0 && text_run_rest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_run_rest.tStart = t;  // (not accounting for frame time here)
      text_run_rest.frameNStart = frameN;  // exact frame index
      
      text_run_rest.setAutoDraw(true);
    }
    
    
    // *key_resp_run_rest* updates
    if (t >= 0.0 && key_resp_run_rest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_run_rest.tStart = t;  // (not accounting for frame time here)
      key_resp_run_rest.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_run_rest.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_run_rest.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_run_rest.clearEvents(); });
    }
    
    if (key_resp_run_rest.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_run_rest.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_run_rest_allKeys = _key_resp_run_rest_allKeys.concat(theseKeys);
      if (_key_resp_run_rest_allKeys.length > 0) {
        key_resp_run_rest.keys = _key_resp_run_rest_allKeys[_key_resp_run_rest_allKeys.length - 1].name;  // just the last key pressed
        key_resp_run_rest.rt = _key_resp_run_rest_allKeys[_key_resp_run_rest_allKeys.length - 1].rt;
        key_resp_run_rest.duration = _key_resp_run_rest_allKeys[_key_resp_run_rest_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of rest_between_runsComponents)
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


function rest_between_runsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'rest_between_runs' ---
    for (const thisComponent of rest_between_runsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('rest_between_runs.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_run_rest.corr, level);
    }
    psychoJS.experiment.addData('key_resp_run_rest.keys', key_resp_run_rest.keys);
    if (typeof key_resp_run_rest.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_run_rest.rt', key_resp_run_rest.rt);
        psychoJS.experiment.addData('key_resp_run_rest.duration', key_resp_run_rest.duration);
        routineTimer.reset();
        }
    
    key_resp_run_rest.stop();
    // the Routine "rest_between_runs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_continue_allKeys;
var ret_end_screenComponents;
function ret_end_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ret_end_screen' ---
    t = 0;
    ret_end_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('ret_end_screen.started', globalClock.getTime());
    key_resp_continue.keys = undefined;
    key_resp_continue.rt = undefined;
    _key_resp_continue_allKeys = [];
    // keep track of which components have finished
    ret_end_screenComponents = [];
    ret_end_screenComponents.push(text_endSet);
    ret_end_screenComponents.push(key_resp_continue);
    
    for (const thisComponent of ret_end_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ret_end_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ret_end_screen' ---
    // get current time
    t = ret_end_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_endSet* updates
    if (t >= 0.0 && text_endSet.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_endSet.tStart = t;  // (not accounting for frame time here)
      text_endSet.frameNStart = frameN;  // exact frame index
      
      text_endSet.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_endSet.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_endSet.setAutoDraw(false);
    }
    
    
    // *key_resp_continue* updates
    if (t >= 0.0 && key_resp_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_continue.tStart = t;  // (not accounting for frame time here)
      key_resp_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_continue.clearEvents(); });
    }
    
    frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp_continue.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp_continue.status = PsychoJS.Status.FINISHED;
        }
      
    if (key_resp_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_continue.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_continue_allKeys = _key_resp_continue_allKeys.concat(theseKeys);
      if (_key_resp_continue_allKeys.length > 0) {
        key_resp_continue.keys = _key_resp_continue_allKeys[_key_resp_continue_allKeys.length - 1].name;  // just the last key pressed
        key_resp_continue.rt = _key_resp_continue_allKeys[_key_resp_continue_allKeys.length - 1].rt;
        key_resp_continue.duration = _key_resp_continue_allKeys[_key_resp_continue_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ret_end_screenComponents)
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


function ret_end_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ret_end_screen' ---
    for (const thisComponent of ret_end_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('ret_end_screen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_continue.corr, level);
    }
    psychoJS.experiment.addData('key_resp_continue.keys', key_resp_continue.keys);
    if (typeof key_resp_continue.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_continue.rt', key_resp_continue.rt);
        psychoJS.experiment.addData('key_resp_continue.duration', key_resp_continue.duration);
        routineTimer.reset();
        }
    
    key_resp_continue.stop();
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _key_resp_end_allKeys;
var forked_instructionsComponents;
function forked_instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'forked_instructions' ---
    t = 0;
    forked_instructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('forked_instructions.started', globalClock.getTime());
    // present either move to a new enconding set or end of experiment
    if (expInfo['group']==='A' && expInfo['delay']==='short'){
        // instructions to move to a new enconding set
        // in the meantime this is for 1 session experiment only (next line for two sessions commented out).
    //    window.end_inst = 'Now you will continue to a second item-scene association task. The scenes will remain the same, but the items will be brand new.\n This will be the last task for today (the memory test for this second item-scene pairs will occur three days from now, in your second session).\n\nPress SPACEBAR and "OK" in the prompted window to continue to the next (and last) task.';
        window.end_inst = 'Congratulations! You are done with the experiment!\nWe thank you for your participation.\n\nPress SPACEBAR and then "OK" in the prompted window to receive a Prolific completion code.';
        console.log('end_inst in if:',window.end_inst);
        }else{
            window.end_inst = 'Congratulaitons! You have finished our two-session experiment!\nWe thank you for your participation.\nPress SPACEBAR and then "OK" in the prompted window to receive a Prolific completion code.';
            }
    
    //console.log('end_inst after if:',window.end_inst);
    text_end_inst.setText(window.end_inst);
    key_resp_end.keys = undefined;
    key_resp_end.rt = undefined;
    _key_resp_end_allKeys = [];
    // keep track of which components have finished
    forked_instructionsComponents = [];
    forked_instructionsComponents.push(text_end_inst);
    forked_instructionsComponents.push(key_resp_end);
    
    for (const thisComponent of forked_instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function forked_instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'forked_instructions' ---
    // get current time
    t = forked_instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_end_inst* updates
    if (t >= 0.0 && text_end_inst.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_end_inst.tStart = t;  // (not accounting for frame time here)
      text_end_inst.frameNStart = frameN;  // exact frame index
      
      text_end_inst.setAutoDraw(true);
    }
    
    
    // *key_resp_end* updates
    if (t >= 0.0 && key_resp_end.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_end.tStart = t;  // (not accounting for frame time here)
      key_resp_end.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_end.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_end.clearEvents(); });
    }
    
    if (key_resp_end.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_end.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_end_allKeys = _key_resp_end_allKeys.concat(theseKeys);
      if (_key_resp_end_allKeys.length > 0) {
        key_resp_end.keys = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].name;  // just the last key pressed
        key_resp_end.rt = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].rt;
        key_resp_end.duration = _key_resp_end_allKeys[_key_resp_end_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of forked_instructionsComponents)
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


var two_sess;
var completion_url;
function forked_instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'forked_instructions' ---
    for (const thisComponent of forked_instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('forked_instructions.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_end.corr, level);
    }
    psychoJS.experiment.addData('key_resp_end.keys', key_resp_end.keys);
    if (typeof key_resp_end.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_end.rt', key_resp_end.rt);
        psychoJS.experiment.addData('key_resp_end.duration', key_resp_end.duration);
        routineTimer.reset();
        }
    
    key_resp_end.stop();
    two_sess = false;
    if (two_sess == true){
        if (expInfo['group']==='A'){
            if (expInfo['delay']==='short'){
                expInfo['delay'] ='long';
                console.log('delay changed to:',expInfo['delay']);
                completion_url = 'https://run.pavlovia.org/nitzanlubi/sbl_encoding_exp/?group=' 
                    + expInfo['group'] 
                    + '&participant=' + expInfo['participant'] 
                    + '&session=' + expInfo['session'] 
                    + '&delay=' + expInfo['delay'];
                console.log('completion_url:',completion_url);
                }else{
                    completion_url = 'https://app.prolific.com/submissions/complete?cc=C14LKWF2';
                    }
            }
        }else{
            completion_url = 'https://app.prolific.com/submissions/complete?cc=CUFOIWKV';
            }
    
    console.log('url again:',completion_url);
    //window.location.href = completion_url;
    psychoJS.setRedirectUrls(completion_url, '');
    // the Routine "forked_instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
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
