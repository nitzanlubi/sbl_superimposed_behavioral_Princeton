#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.2.4),
    on Mon 18 Nov 2024 11:41:27 AM EST
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
prefs.hardware['audioLatencyMode'] = '3'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER, priority)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2024.2.4'
expName = 'SBL_encoding_exp'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': '',
    'session': '',
    'delay': '',
    'group': '',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1920, 1080]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s_%s_%s' % (expInfo['participant'], expInfo['delay'], expInfo['session'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/media/bw-share/experiments/turk-browne_nbt2/lubianiker_nel33/encoding_exp/SBL_encoding_exp.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('warning')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=1,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color=[-1,-1,-1], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [-1,-1,-1]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    # show a visual indicator if we're in piloting mode
    if PILOTING and prefs.piloting['showPilotingIndicator']:
        win.showPilotingIndicator()
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    # Setup iohub experiment
    ioConfig['Experiment'] = dict(filename=thisExp.dataFileName)
    
    # Start ioHub server
    ioServer = io.launchHubServer(window=win, **ioConfig)
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('key_welcome') is None:
        # initialise key_welcome
        key_welcome = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_welcome',
        )
    if deviceManager.getDevice('key_resp_keysInst') is None:
        # initialise key_resp_keysInst
        key_resp_keysInst = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_keysInst',
        )
    if deviceManager.getDevice('key_resp_congruency') is None:
        # initialise key_resp_congruency
        key_resp_congruency = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_congruency',
        )
    if deviceManager.getDevice('key_resp_next_run') is None:
        # initialise key_resp_next_run
        key_resp_next_run = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_next_run',
        )
    if deviceManager.getDevice('key_end') is None:
        # initialise key_end
        key_end = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_end',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], playbackComponents=[]):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    playbackComponents : list, tuple
        List of any components with a `pause` method which need to be paused.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "get_relatedness_keys" ---
    # Run 'Begin Experiment' code from code_get_keys
    # allocate participant to relatedness response key accprding
    # to counterbalanced_vars.xlsx
    import pandas as pd
    df = pd.read_csv('counterbalanced_vars_behav.csv') # match to relevant experiment var table
    subnum = int(expInfo['participant'])
    ind = df[df['Participant'] == subnum].index[0]
    sub_conds = df.loc[ind,df.columns].values.tolist()
    print(sub_conds)
    # assign context keys
    if sub_conds[1] == 0:
        key_related = 'q'
        key_unrelated = 'p'
        instruction_text = 'If they are related, press Q\nIf they are unrelated, press P\n\nIMPORTANT: you should press P or Q only when you see the question, AFTER the scene and item disappeared from the screen!\n\nPress SPACEBAR to continue.'
    elif sub_conds[1] == 1:
        key_related = 'p'
        key_unrelated = 'q'
        instruction_text = 'If they are related, press P\nIf they are unrelated, press Q\n\nIMPORTANT: you should press P or Q only when you see the question, AFTER the scene and item disappeared from the screen!\n\nPress SPACEBAR to continue.'
    
    
    
    
    # --- Initialize components for Routine "instructions_screen" ---
    text_instructions = visual.TextStim(win=win, name='text_instructions',
        text='In this item-scene association task, you will see different items (objects or animals) placed in one of the jungle or undersea scenes you memorized previously. After each presentation of an item and a scene, you will be asked to report whether they are related or unrelated. \n\nAn item is related to a scene if you think it is plausible that such an item would live or would be used in such a scene in real life. If not, they are unrelated.\n\nYou will see each item-scene pair three times in total.\n\nPress SPACEBAR to continue.',
        font='Open Sans',
        pos=(0, 0.2), draggable=False, height=0.035, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_welcome = keyboard.Keyboard(deviceName='key_welcome')
    
    # --- Initialize components for Routine "instruction_keys" ---
    text_keys = visual.TextStim(win=win, name='text_keys',
        text='',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_keysInst = keyboard.Keyboard(deviceName='key_resp_keysInst')
    
    # --- Initialize components for Routine "blank2000" ---
    text_2 = visual.TextStim(win=win, name='text_2',
        text=None,
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "get_run_stim_list" ---
    
    # --- Initialize components for Routine "scene_item_presentation" ---
    image_scene = visual.ImageStim(
        win=win,
        name='image_scene', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(1920, 1080),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    image_item = visual.ImageStim(
        win=win,
        name='image_item', units='pix', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), draggable=False, size=(300, 300),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=-1.0)
    
    # --- Initialize components for Routine "congruency_response" ---
    text_congruency = visual.TextStim(win=win, name='text_congruency',
        text='',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    key_resp_congruency = keyboard.Keyboard(deviceName='key_resp_congruency')
    
    # --- Initialize components for Routine "blank1000" ---
    text = visual.TextStim(win=win, name='text',
        text='+',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "is_last_run" ---
    
    # --- Initialize components for Routine "between_run_pause" ---
    text_run_pause = visual.TextStim(win=win, name='text_run_pause',
        text='Good job! You can rest for a moment and then continue to the next run. ',
        font='Open Sans',
        pos=(0, 0.3), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_relatedness_pause = visual.TextStim(win=win, name='text_relatedness_pause',
        text='',
        font='Open Sans',
        pos=(0, -0.1), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_next_run = keyboard.Keyboard(deviceName='key_resp_next_run')
    
    # --- Initialize components for Routine "end_screen" ---
    text_end = visual.TextStim(win=win, name='text_end',
        text='',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    key_end = keyboard.Keyboard(deviceName='key_end')
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "get_relatedness_keys" ---
    # create an object to store info about Routine get_relatedness_keys
    get_relatedness_keys = data.Routine(
        name='get_relatedness_keys',
        components=[],
    )
    get_relatedness_keys.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for get_relatedness_keys
    get_relatedness_keys.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    get_relatedness_keys.tStart = globalClock.getTime(format='float')
    get_relatedness_keys.status = STARTED
    thisExp.addData('get_relatedness_keys.started', get_relatedness_keys.tStart)
    get_relatedness_keys.maxDuration = None
    # keep track of which components have finished
    get_relatedness_keysComponents = get_relatedness_keys.components
    for thisComponent in get_relatedness_keys.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "get_relatedness_keys" ---
    get_relatedness_keys.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            get_relatedness_keys.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in get_relatedness_keys.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "get_relatedness_keys" ---
    for thisComponent in get_relatedness_keys.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for get_relatedness_keys
    get_relatedness_keys.tStop = globalClock.getTime(format='float')
    get_relatedness_keys.tStopRefresh = tThisFlipGlobal
    thisExp.addData('get_relatedness_keys.stopped', get_relatedness_keys.tStop)
    thisExp.nextEntry()
    # the Routine "get_relatedness_keys" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instructions_screen" ---
    # create an object to store info about Routine instructions_screen
    instructions_screen = data.Routine(
        name='instructions_screen',
        components=[text_instructions, key_welcome],
    )
    instructions_screen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for key_welcome
    key_welcome.keys = []
    key_welcome.rt = []
    _key_welcome_allKeys = []
    # store start times for instructions_screen
    instructions_screen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instructions_screen.tStart = globalClock.getTime(format='float')
    instructions_screen.status = STARTED
    thisExp.addData('instructions_screen.started', instructions_screen.tStart)
    instructions_screen.maxDuration = None
    # keep track of which components have finished
    instructions_screenComponents = instructions_screen.components
    for thisComponent in instructions_screen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instructions_screen" ---
    instructions_screen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_instructions* updates
        
        # if text_instructions is starting this frame...
        if text_instructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_instructions.frameNStart = frameN  # exact frame index
            text_instructions.tStart = t  # local t and not account for scr refresh
            text_instructions.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_instructions, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_instructions.started')
            # update status
            text_instructions.status = STARTED
            text_instructions.setAutoDraw(True)
        
        # if text_instructions is active this frame...
        if text_instructions.status == STARTED:
            # update params
            pass
        
        # *key_welcome* updates
        waitOnFlip = False
        
        # if key_welcome is starting this frame...
        if key_welcome.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            key_welcome.frameNStart = frameN  # exact frame index
            key_welcome.tStart = t  # local t and not account for scr refresh
            key_welcome.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_welcome, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_welcome.started')
            # update status
            key_welcome.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_welcome.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_welcome.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_welcome.status == STARTED and not waitOnFlip:
            theseKeys = key_welcome.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_welcome_allKeys.extend(theseKeys)
            if len(_key_welcome_allKeys):
                key_welcome.keys = _key_welcome_allKeys[-1].name  # just the last key pressed
                key_welcome.rt = _key_welcome_allKeys[-1].rt
                key_welcome.duration = _key_welcome_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            instructions_screen.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instructions_screen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instructions_screen" ---
    for thisComponent in instructions_screen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instructions_screen
    instructions_screen.tStop = globalClock.getTime(format='float')
    instructions_screen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('instructions_screen.stopped', instructions_screen.tStop)
    # check responses
    if key_welcome.keys in ['', [], None]:  # No response was made
        key_welcome.keys = None
    thisExp.addData('key_welcome.keys',key_welcome.keys)
    if key_welcome.keys != None:  # we had a response
        thisExp.addData('key_welcome.rt', key_welcome.rt)
        thisExp.addData('key_welcome.duration', key_welcome.duration)
    thisExp.nextEntry()
    # the Routine "instructions_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instruction_keys" ---
    # create an object to store info about Routine instruction_keys
    instruction_keys = data.Routine(
        name='instruction_keys',
        components=[text_keys, key_resp_keysInst],
    )
    instruction_keys.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    text_keys.setText(instruction_text)
    # create starting attributes for key_resp_keysInst
    key_resp_keysInst.keys = []
    key_resp_keysInst.rt = []
    _key_resp_keysInst_allKeys = []
    # store start times for instruction_keys
    instruction_keys.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instruction_keys.tStart = globalClock.getTime(format='float')
    instruction_keys.status = STARTED
    thisExp.addData('instruction_keys.started', instruction_keys.tStart)
    instruction_keys.maxDuration = None
    # keep track of which components have finished
    instruction_keysComponents = instruction_keys.components
    for thisComponent in instruction_keys.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instruction_keys" ---
    instruction_keys.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_keys* updates
        
        # if text_keys is starting this frame...
        if text_keys.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_keys.frameNStart = frameN  # exact frame index
            text_keys.tStart = t  # local t and not account for scr refresh
            text_keys.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_keys, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_keys.started')
            # update status
            text_keys.status = STARTED
            text_keys.setAutoDraw(True)
        
        # if text_keys is active this frame...
        if text_keys.status == STARTED:
            # update params
            pass
        
        # *key_resp_keysInst* updates
        waitOnFlip = False
        
        # if key_resp_keysInst is starting this frame...
        if key_resp_keysInst.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_keysInst.frameNStart = frameN  # exact frame index
            key_resp_keysInst.tStart = t  # local t and not account for scr refresh
            key_resp_keysInst.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_keysInst, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_keysInst.started')
            # update status
            key_resp_keysInst.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_keysInst.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_keysInst.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_keysInst.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_keysInst.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_keysInst_allKeys.extend(theseKeys)
            if len(_key_resp_keysInst_allKeys):
                key_resp_keysInst.keys = _key_resp_keysInst_allKeys[-1].name  # just the last key pressed
                key_resp_keysInst.rt = _key_resp_keysInst_allKeys[-1].rt
                key_resp_keysInst.duration = _key_resp_keysInst_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            instruction_keys.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in instruction_keys.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instruction_keys" ---
    for thisComponent in instruction_keys.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instruction_keys
    instruction_keys.tStop = globalClock.getTime(format='float')
    instruction_keys.tStopRefresh = tThisFlipGlobal
    thisExp.addData('instruction_keys.stopped', instruction_keys.tStop)
    # check responses
    if key_resp_keysInst.keys in ['', [], None]:  # No response was made
        key_resp_keysInst.keys = None
    thisExp.addData('key_resp_keysInst.keys',key_resp_keysInst.keys)
    if key_resp_keysInst.keys != None:  # we had a response
        thisExp.addData('key_resp_keysInst.rt', key_resp_keysInst.rt)
        thisExp.addData('key_resp_keysInst.duration', key_resp_keysInst.duration)
    thisExp.nextEntry()
    # the Routine "instruction_keys" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "blank2000" ---
    # create an object to store info about Routine blank2000
    blank2000 = data.Routine(
        name='blank2000',
        components=[text_2],
    )
    blank2000.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # store start times for blank2000
    blank2000.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    blank2000.tStart = globalClock.getTime(format='float')
    blank2000.status = STARTED
    thisExp.addData('blank2000.started', blank2000.tStart)
    blank2000.maxDuration = None
    # keep track of which components have finished
    blank2000Components = blank2000.components
    for thisComponent in blank2000.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "blank2000" ---
    blank2000.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 2.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_2* updates
        
        # if text_2 is starting this frame...
        if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_2.frameNStart = frameN  # exact frame index
            text_2.tStart = t  # local t and not account for scr refresh
            text_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_2.started')
            # update status
            text_2.status = STARTED
            text_2.setAutoDraw(True)
        
        # if text_2 is active this frame...
        if text_2.status == STARTED:
            # update params
            pass
        
        # if text_2 is stopping this frame...
        if text_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_2.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                text_2.tStop = t  # not accounting for scr refresh
                text_2.tStopRefresh = tThisFlipGlobal  # on global time
                text_2.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_2.stopped')
                # update status
                text_2.status = FINISHED
                text_2.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            blank2000.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in blank2000.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "blank2000" ---
    for thisComponent in blank2000.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for blank2000
    blank2000.tStop = globalClock.getTime(format='float')
    blank2000.tStopRefresh = tThisFlipGlobal
    thisExp.addData('blank2000.stopped', blank2000.tStop)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if blank2000.maxDurationReached:
        routineTimer.addTime(-blank2000.maxDuration)
    elif blank2000.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-2.000000)
    thisExp.nextEntry()
    
    # set up handler to look after randomisation of conditions etc
    runs = data.TrialHandler2(
        name='runs',
        nReps=1.0, 
        method='sequential', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('runs_params.xlsx'), 
        seed=None, 
    )
    thisExp.addLoop(runs)  # add the loop to the experiment
    thisRun = runs.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRun.rgb)
    if thisRun != None:
        for paramName in thisRun:
            globals()[paramName] = thisRun[paramName]
    
    for thisRun in runs:
        currentLoop = runs
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # abbreviate parameter names if possible (e.g. rgb = thisRun.rgb)
        if thisRun != None:
            for paramName in thisRun:
                globals()[paramName] = thisRun[paramName]
        
        # --- Prepare to start Routine "get_run_stim_list" ---
        # create an object to store info about Routine get_run_stim_list
        get_run_stim_list = data.Routine(
            name='get_run_stim_list',
            components=[],
        )
        get_run_stim_list.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_get_stim_list
        subnum = expInfo['participant']
        session = expInfo['session']
        stim_list = "stimuli/stim_lists/stimuli_list_sub_" + subnum + '_set_' + session + "_run_" + str(run) + ".csv"
        
        # store start times for get_run_stim_list
        get_run_stim_list.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        get_run_stim_list.tStart = globalClock.getTime(format='float')
        get_run_stim_list.status = STARTED
        thisExp.addData('get_run_stim_list.started', get_run_stim_list.tStart)
        get_run_stim_list.maxDuration = None
        # keep track of which components have finished
        get_run_stim_listComponents = get_run_stim_list.components
        for thisComponent in get_run_stim_list.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "get_run_stim_list" ---
        # if trial has changed, end Routine now
        if isinstance(runs, data.TrialHandler2) and thisRun.thisN != runs.thisTrial.thisN:
            continueRoutine = False
        get_run_stim_list.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                get_run_stim_list.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in get_run_stim_list.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "get_run_stim_list" ---
        for thisComponent in get_run_stim_list.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for get_run_stim_list
        get_run_stim_list.tStop = globalClock.getTime(format='float')
        get_run_stim_list.tStopRefresh = tThisFlipGlobal
        thisExp.addData('get_run_stim_list.stopped', get_run_stim_list.tStop)
        # the Routine "get_run_stim_list" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        trials = data.TrialHandler2(
            name='trials',
            nReps=1.0, 
            method='sequential', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=data.importConditions(stim_list), 
            seed=None, 
        )
        thisExp.addLoop(trials)  # add the loop to the experiment
        thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        for thisTrial in trials:
            currentLoop = trials
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
            # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
            if thisTrial != None:
                for paramName in thisTrial:
                    globals()[paramName] = thisTrial[paramName]
            
            # --- Prepare to start Routine "scene_item_presentation" ---
            # create an object to store info about Routine scene_item_presentation
            scene_item_presentation = data.Routine(
                name='scene_item_presentation',
                components=[image_scene, image_item],
            )
            scene_item_presentation.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            image_scene.setImage(scene_stimulus)
            image_item.setImage(item_stimulus)
            # store start times for scene_item_presentation
            scene_item_presentation.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            scene_item_presentation.tStart = globalClock.getTime(format='float')
            scene_item_presentation.status = STARTED
            thisExp.addData('scene_item_presentation.started', scene_item_presentation.tStart)
            scene_item_presentation.maxDuration = None
            # keep track of which components have finished
            scene_item_presentationComponents = scene_item_presentation.components
            for thisComponent in scene_item_presentation.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "scene_item_presentation" ---
            # if trial has changed, end Routine now
            if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
                continueRoutine = False
            scene_item_presentation.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 2.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_scene* updates
                
                # if image_scene is starting this frame...
                if image_scene.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_scene.frameNStart = frameN  # exact frame index
                    image_scene.tStart = t  # local t and not account for scr refresh
                    image_scene.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_scene, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_scene.started')
                    # update status
                    image_scene.status = STARTED
                    image_scene.setAutoDraw(True)
                
                # if image_scene is active this frame...
                if image_scene.status == STARTED:
                    # update params
                    pass
                
                # if image_scene is stopping this frame...
                if image_scene.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_scene.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        image_scene.tStop = t  # not accounting for scr refresh
                        image_scene.tStopRefresh = tThisFlipGlobal  # on global time
                        image_scene.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_scene.stopped')
                        # update status
                        image_scene.status = FINISHED
                        image_scene.setAutoDraw(False)
                
                # *image_item* updates
                
                # if image_item is starting this frame...
                if image_item.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                    # keep track of start time/frame for later
                    image_item.frameNStart = frameN  # exact frame index
                    image_item.tStart = t  # local t and not account for scr refresh
                    image_item.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_item, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_item.started')
                    # update status
                    image_item.status = STARTED
                    image_item.setAutoDraw(True)
                
                # if image_item is active this frame...
                if image_item.status == STARTED:
                    # update params
                    pass
                
                # if image_item is stopping this frame...
                if image_item.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_item.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        image_item.tStop = t  # not accounting for scr refresh
                        image_item.tStopRefresh = tThisFlipGlobal  # on global time
                        image_item.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_item.stopped')
                        # update status
                        image_item.status = FINISHED
                        image_item.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer], 
                        playbackComponents=[]
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    scene_item_presentation.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in scene_item_presentation.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "scene_item_presentation" ---
            for thisComponent in scene_item_presentation.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for scene_item_presentation
            scene_item_presentation.tStop = globalClock.getTime(format='float')
            scene_item_presentation.tStopRefresh = tThisFlipGlobal
            thisExp.addData('scene_item_presentation.stopped', scene_item_presentation.tStop)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if scene_item_presentation.maxDurationReached:
                routineTimer.addTime(-scene_item_presentation.maxDuration)
            elif scene_item_presentation.forceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-2.000000)
            
            # --- Prepare to start Routine "congruency_response" ---
            # create an object to store info about Routine congruency_response
            congruency_response = data.Routine(
                name='congruency_response',
                components=[text_congruency, key_resp_congruency],
            )
            congruency_response.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from code_cor_resp
            if congruency == 'sc':
                cor_key = key_related
            elif congruency == 'si':
                cor_key = key_unrelated
            
            txt_qst = 'Related (' + key_related.upper() + ')\nor Unrelated (' + key_unrelated.upper() + ')'
            text_congruency.setText(txt_qst)
            # create starting attributes for key_resp_congruency
            key_resp_congruency.keys = []
            key_resp_congruency.rt = []
            _key_resp_congruency_allKeys = []
            # store start times for congruency_response
            congruency_response.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            congruency_response.tStart = globalClock.getTime(format='float')
            congruency_response.status = STARTED
            thisExp.addData('congruency_response.started', congruency_response.tStart)
            congruency_response.maxDuration = None
            # keep track of which components have finished
            congruency_responseComponents = congruency_response.components
            for thisComponent in congruency_response.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "congruency_response" ---
            # if trial has changed, end Routine now
            if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
                continueRoutine = False
            congruency_response.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_congruency* updates
                
                # if text_congruency is starting this frame...
                if text_congruency.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_congruency.frameNStart = frameN  # exact frame index
                    text_congruency.tStart = t  # local t and not account for scr refresh
                    text_congruency.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_congruency, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_congruency.started')
                    # update status
                    text_congruency.status = STARTED
                    text_congruency.setAutoDraw(True)
                
                # if text_congruency is active this frame...
                if text_congruency.status == STARTED:
                    # update params
                    pass
                
                # if text_congruency is stopping this frame...
                if text_congruency.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_congruency.tStartRefresh + 1.0-frameTolerance:
                        # keep track of stop time/frame for later
                        text_congruency.tStop = t  # not accounting for scr refresh
                        text_congruency.tStopRefresh = tThisFlipGlobal  # on global time
                        text_congruency.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_congruency.stopped')
                        # update status
                        text_congruency.status = FINISHED
                        text_congruency.setAutoDraw(False)
                
                # *key_resp_congruency* updates
                waitOnFlip = False
                
                # if key_resp_congruency is starting this frame...
                if key_resp_congruency.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_congruency.frameNStart = frameN  # exact frame index
                    key_resp_congruency.tStart = t  # local t and not account for scr refresh
                    key_resp_congruency.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_congruency, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_congruency.started')
                    # update status
                    key_resp_congruency.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_congruency.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_congruency.clearEvents, eventType='keyboard')  # clear events on next screen flip
                
                # if key_resp_congruency is stopping this frame...
                if key_resp_congruency.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_congruency.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_congruency.tStop = t  # not accounting for scr refresh
                        key_resp_congruency.tStopRefresh = tThisFlipGlobal  # on global time
                        key_resp_congruency.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'key_resp_congruency.stopped')
                        # update status
                        key_resp_congruency.status = FINISHED
                        key_resp_congruency.status = FINISHED
                if key_resp_congruency.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_congruency.getKeys(keyList=['q','p'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_congruency_allKeys.extend(theseKeys)
                    if len(_key_resp_congruency_allKeys):
                        key_resp_congruency.keys = _key_resp_congruency_allKeys[-1].name  # just the last key pressed
                        key_resp_congruency.rt = _key_resp_congruency_allKeys[-1].rt
                        key_resp_congruency.duration = _key_resp_congruency_allKeys[-1].duration
                        # was this correct?
                        if (key_resp_congruency.keys == str(cor_key)) or (key_resp_congruency.keys == cor_key):
                            key_resp_congruency.corr = 1
                        else:
                            key_resp_congruency.corr = 0
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer], 
                        playbackComponents=[]
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    congruency_response.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in congruency_response.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "congruency_response" ---
            for thisComponent in congruency_response.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for congruency_response
            congruency_response.tStop = globalClock.getTime(format='float')
            congruency_response.tStopRefresh = tThisFlipGlobal
            thisExp.addData('congruency_response.stopped', congruency_response.tStop)
            # check responses
            if key_resp_congruency.keys in ['', [], None]:  # No response was made
                key_resp_congruency.keys = None
                # was no response the correct answer?!
                if str(cor_key).lower() == 'none':
                   key_resp_congruency.corr = 1;  # correct non-response
                else:
                   key_resp_congruency.corr = 0;  # failed to respond (incorrectly)
            # store data for trials (TrialHandler)
            trials.addData('key_resp_congruency.keys',key_resp_congruency.keys)
            trials.addData('key_resp_congruency.corr', key_resp_congruency.corr)
            if key_resp_congruency.keys != None:  # we had a response
                trials.addData('key_resp_congruency.rt', key_resp_congruency.rt)
                trials.addData('key_resp_congruency.duration', key_resp_congruency.duration)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if congruency_response.maxDurationReached:
                routineTimer.addTime(-congruency_response.maxDuration)
            elif congruency_response.forceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            
            # --- Prepare to start Routine "blank1000" ---
            # create an object to store info about Routine blank1000
            blank1000 = data.Routine(
                name='blank1000',
                components=[text],
            )
            blank1000.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # store start times for blank1000
            blank1000.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            blank1000.tStart = globalClock.getTime(format='float')
            blank1000.status = STARTED
            thisExp.addData('blank1000.started', blank1000.tStart)
            blank1000.maxDuration = None
            # keep track of which components have finished
            blank1000Components = blank1000.components
            for thisComponent in blank1000.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "blank1000" ---
            # if trial has changed, end Routine now
            if isinstance(trials, data.TrialHandler2) and thisTrial.thisN != trials.thisTrial.thisN:
                continueRoutine = False
            blank1000.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text* updates
                
                # if text is starting this frame...
                if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text.frameNStart = frameN  # exact frame index
                    text.tStart = t  # local t and not account for scr refresh
                    text.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text.started')
                    # update status
                    text.status = STARTED
                    text.setAutoDraw(True)
                
                # if text is active this frame...
                if text.status == STARTED:
                    # update params
                    pass
                
                # if text is stopping this frame...
                if text.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        text.tStop = t  # not accounting for scr refresh
                        text.tStopRefresh = tThisFlipGlobal  # on global time
                        text.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text.stopped')
                        # update status
                        text.status = FINISHED
                        text.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer], 
                        playbackComponents=[]
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    blank1000.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in blank1000.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "blank1000" ---
            for thisComponent in blank1000.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for blank1000
            blank1000.tStop = globalClock.getTime(format='float')
            blank1000.tStopRefresh = tThisFlipGlobal
            thisExp.addData('blank1000.stopped', blank1000.tStop)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if blank1000.maxDurationReached:
                routineTimer.addTime(-blank1000.maxDuration)
            elif blank1000.forceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            thisExp.nextEntry()
            
        # completed 1.0 repeats of 'trials'
        
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        
        # --- Prepare to start Routine "is_last_run" ---
        # create an object to store info about Routine is_last_run
        is_last_run = data.Routine(
            name='is_last_run',
            components=[],
        )
        is_last_run.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from code_last_run
        # get bewtween-run instruction or not?
        if run != 3:
            not_last = 1 # get in
        elif run ==3:
            not_last = 0 # don't
        
        
        # store start times for is_last_run
        is_last_run.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        is_last_run.tStart = globalClock.getTime(format='float')
        is_last_run.status = STARTED
        thisExp.addData('is_last_run.started', is_last_run.tStart)
        is_last_run.maxDuration = None
        # keep track of which components have finished
        is_last_runComponents = is_last_run.components
        for thisComponent in is_last_run.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "is_last_run" ---
        # if trial has changed, end Routine now
        if isinstance(runs, data.TrialHandler2) and thisRun.thisN != runs.thisTrial.thisN:
            continueRoutine = False
        is_last_run.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                is_last_run.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in is_last_run.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "is_last_run" ---
        for thisComponent in is_last_run.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for is_last_run
        is_last_run.tStop = globalClock.getTime(format='float')
        is_last_run.tStopRefresh = tThisFlipGlobal
        thisExp.addData('is_last_run.stopped', is_last_run.tStop)
        # the Routine "is_last_run" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        between_run_inst = data.TrialHandler2(
            name='between_run_inst',
            nReps=not_last, 
            method='random', 
            extraInfo=expInfo, 
            originPath=-1, 
            trialList=[None], 
            seed=None, 
        )
        thisExp.addLoop(between_run_inst)  # add the loop to the experiment
        thisBetween_run_inst = between_run_inst.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisBetween_run_inst.rgb)
        if thisBetween_run_inst != None:
            for paramName in thisBetween_run_inst:
                globals()[paramName] = thisBetween_run_inst[paramName]
        
        for thisBetween_run_inst in between_run_inst:
            currentLoop = between_run_inst
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # abbreviate parameter names if possible (e.g. rgb = thisBetween_run_inst.rgb)
            if thisBetween_run_inst != None:
                for paramName in thisBetween_run_inst:
                    globals()[paramName] = thisBetween_run_inst[paramName]
            
            # --- Prepare to start Routine "between_run_pause" ---
            # create an object to store info about Routine between_run_pause
            between_run_pause = data.Routine(
                name='between_run_pause',
                components=[text_run_pause, text_relatedness_pause, key_resp_next_run],
            )
            between_run_pause.status = NOT_STARTED
            continueRoutine = True
            # update component parameters for each repeat
            # Run 'Begin Routine' code from code_pause_intructions
            
            if key_related == 'q':
                text_inst_pause = 'Reminder:\n\nIf the scene and item are related, press Q\nIf they are unrelated, press P.\n\nPress ONLY AFTER the item and scene disappeared!\n\nPress SPACEBAR to resume.'
            if key_related == 'p':        
                text_inst_pause = 'Reminder:\n\nIf the scene and item are related, press P\nIf they are unrelated, press Q.\n\nPress ONLY AFTER the item and scene disappeared!\n\nPress SPACEBAR to resume.'
            text_relatedness_pause.setText(text_inst_pause)
            # create starting attributes for key_resp_next_run
            key_resp_next_run.keys = []
            key_resp_next_run.rt = []
            _key_resp_next_run_allKeys = []
            # store start times for between_run_pause
            between_run_pause.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
            between_run_pause.tStart = globalClock.getTime(format='float')
            between_run_pause.status = STARTED
            thisExp.addData('between_run_pause.started', between_run_pause.tStart)
            between_run_pause.maxDuration = None
            # keep track of which components have finished
            between_run_pauseComponents = between_run_pause.components
            for thisComponent in between_run_pause.components:
                thisComponent.tStart = None
                thisComponent.tStop = None
                thisComponent.tStartRefresh = None
                thisComponent.tStopRefresh = None
                if hasattr(thisComponent, 'status'):
                    thisComponent.status = NOT_STARTED
            # reset timers
            t = 0
            _timeToFirstFrame = win.getFutureFlipTime(clock="now")
            frameN = -1
            
            # --- Run Routine "between_run_pause" ---
            # if trial has changed, end Routine now
            if isinstance(between_run_inst, data.TrialHandler2) and thisBetween_run_inst.thisN != between_run_inst.thisTrial.thisN:
                continueRoutine = False
            between_run_pause.forceEnded = routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_run_pause* updates
                
                # if text_run_pause is starting this frame...
                if text_run_pause.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_run_pause.frameNStart = frameN  # exact frame index
                    text_run_pause.tStart = t  # local t and not account for scr refresh
                    text_run_pause.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_run_pause, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_run_pause.started')
                    # update status
                    text_run_pause.status = STARTED
                    text_run_pause.setAutoDraw(True)
                
                # if text_run_pause is active this frame...
                if text_run_pause.status == STARTED:
                    # update params
                    pass
                
                # *text_relatedness_pause* updates
                
                # if text_relatedness_pause is starting this frame...
                if text_relatedness_pause.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_relatedness_pause.frameNStart = frameN  # exact frame index
                    text_relatedness_pause.tStart = t  # local t and not account for scr refresh
                    text_relatedness_pause.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_relatedness_pause, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_relatedness_pause.started')
                    # update status
                    text_relatedness_pause.status = STARTED
                    text_relatedness_pause.setAutoDraw(True)
                
                # if text_relatedness_pause is active this frame...
                if text_relatedness_pause.status == STARTED:
                    # update params
                    pass
                
                # *key_resp_next_run* updates
                waitOnFlip = False
                
                # if key_resp_next_run is starting this frame...
                if key_resp_next_run.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_next_run.frameNStart = frameN  # exact frame index
                    key_resp_next_run.tStart = t  # local t and not account for scr refresh
                    key_resp_next_run.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_next_run, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_next_run.started')
                    # update status
                    key_resp_next_run.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_next_run.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_next_run.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_next_run.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_next_run.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_next_run_allKeys.extend(theseKeys)
                    if len(_key_resp_next_run_allKeys):
                        key_resp_next_run.keys = _key_resp_next_run_allKeys[-1].name  # just the last key pressed
                        key_resp_next_run.rt = _key_resp_next_run_allKeys[-1].rt
                        key_resp_next_run.duration = _key_resp_next_run_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                # pause experiment here if requested
                if thisExp.status == PAUSED:
                    pauseExperiment(
                        thisExp=thisExp, 
                        win=win, 
                        timers=[routineTimer], 
                        playbackComponents=[]
                    )
                    # skip the frame we paused on
                    continue
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    between_run_pause.forceEnded = routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in between_run_pause.components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "between_run_pause" ---
            for thisComponent in between_run_pause.components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            # store stop times for between_run_pause
            between_run_pause.tStop = globalClock.getTime(format='float')
            between_run_pause.tStopRefresh = tThisFlipGlobal
            thisExp.addData('between_run_pause.stopped', between_run_pause.tStop)
            # check responses
            if key_resp_next_run.keys in ['', [], None]:  # No response was made
                key_resp_next_run.keys = None
            between_run_inst.addData('key_resp_next_run.keys',key_resp_next_run.keys)
            if key_resp_next_run.keys != None:  # we had a response
                between_run_inst.addData('key_resp_next_run.rt', key_resp_next_run.rt)
                between_run_inst.addData('key_resp_next_run.duration', key_resp_next_run.duration)
            # the Routine "between_run_pause" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed not_last repeats of 'between_run_inst'
        
    # completed 1.0 repeats of 'runs'
    
    
    # --- Prepare to start Routine "end_screen" ---
    # create an object to store info about Routine end_screen
    end_screen = data.Routine(
        name='end_screen',
        components=[text_end, key_end],
    )
    end_screen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_end_inst
    end_inst = 'Great job!!\n\nYou are done with this task.\nCall the experimenter to continue to the next task.'
    
    text_end.setText(end_inst)
    # create starting attributes for key_end
    key_end.keys = []
    key_end.rt = []
    _key_end_allKeys = []
    # store start times for end_screen
    end_screen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    end_screen.tStart = globalClock.getTime(format='float')
    end_screen.status = STARTED
    thisExp.addData('end_screen.started', end_screen.tStart)
    end_screen.maxDuration = None
    # keep track of which components have finished
    end_screenComponents = end_screen.components
    for thisComponent in end_screen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end_screen" ---
    end_screen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 15.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text_end* updates
        
        # if text_end is starting this frame...
        if text_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text_end.frameNStart = frameN  # exact frame index
            text_end.tStart = t  # local t and not account for scr refresh
            text_end.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text_end, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'text_end.started')
            # update status
            text_end.status = STARTED
            text_end.setAutoDraw(True)
        
        # if text_end is active this frame...
        if text_end.status == STARTED:
            # update params
            pass
        
        # if text_end is stopping this frame...
        if text_end.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > text_end.tStartRefresh + 15-frameTolerance:
                # keep track of stop time/frame for later
                text_end.tStop = t  # not accounting for scr refresh
                text_end.tStopRefresh = tThisFlipGlobal  # on global time
                text_end.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_end.stopped')
                # update status
                text_end.status = FINISHED
                text_end.setAutoDraw(False)
        
        # *key_end* updates
        waitOnFlip = False
        
        # if key_end is starting this frame...
        if key_end.status == NOT_STARTED and tThisFlip >= 1-frameTolerance:
            # keep track of start time/frame for later
            key_end.frameNStart = frameN  # exact frame index
            key_end.tStart = t  # local t and not account for scr refresh
            key_end.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_end, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_end.started')
            # update status
            key_end.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_end.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_end.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_end is stopping this frame...
        if key_end.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_end.tStartRefresh + 14-frameTolerance:
                # keep track of stop time/frame for later
                key_end.tStop = t  # not accounting for scr refresh
                key_end.tStopRefresh = tThisFlipGlobal  # on global time
                key_end.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_end.stopped')
                # update status
                key_end.status = FINISHED
                key_end.status = FINISHED
        if key_end.status == STARTED and not waitOnFlip:
            theseKeys = key_end.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_end_allKeys.extend(theseKeys)
            if len(_key_end_allKeys):
                key_end.keys = _key_end_allKeys[-1].name  # just the last key pressed
                key_end.rt = _key_end_allKeys[-1].rt
                key_end.duration = _key_end_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            end_screen.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end_screen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end_screen" ---
    for thisComponent in end_screen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for end_screen
    end_screen.tStop = globalClock.getTime(format='float')
    end_screen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('end_screen.stopped', end_screen.tStop)
    # check responses
    if key_end.keys in ['', [], None]:  # No response was made
        key_end.keys = None
    thisExp.addData('key_end.keys',key_end.keys)
    if key_end.keys != None:  # we had a response
        thisExp.addData('key_end.rt', key_end.rt)
        thisExp.addData('key_end.duration', key_end.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if end_screen.maxDurationReached:
        routineTimer.addTime(-end_screen.maxDuration)
    elif end_screen.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-15.000000)
    thisExp.nextEntry()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
