#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2024.1.1),
    on Wed May  1 13:37:03 2024
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
psychopyVersion = '2024.1.1'
expName = 'SBL_retrieval'  # from the Builder filename that created this script
# information about this experiment
expInfo = {
    'participant': '',
    'session': '001',
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
_fullScr = False
_loggingLevel = logging.getLevel('warning')
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
    # override logging level
    _loggingLevel = logging.getLevel(
        prefs.piloting['pilotLoggingLevel']
    )

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
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version='',
        extraInfo=expInfo, runtimeInfo=None,
        originPath='/Users/nitzanlubi/Google Drive/Lab/schema_based_learning/retrieval_exp/SBL_retrieval.py',
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
    # this outputs to the screen, not a file
    logging.console.setLevel(_loggingLevel)
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log', level=_loggingLevel)
    
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
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=[1200, 720], fullscr=_fullScr, screen=0,
            winType='pyglet', allowStencil=False,
            monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height', 
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0,0,0]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.mouseVisible = True
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
    
    ioSession = '1'
    if 'session' in expInfo:
        ioSession = str(expInfo['session'])
    ioServer = io.launchHubServer(window=win, **ioConfig)
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    if deviceManager.getDevice('key_resp_start') is None:
        # initialise key_resp_start
        key_resp_start = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_start',
        )
    if deviceManager.getDevice('key_resp_context') is None:
        # initialise key_resp_context
        key_resp_context = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_context',
        )
    if deviceManager.getDevice('key_resp_scenes') is None:
        # initialise key_resp_scenes
        key_resp_scenes = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_scenes',
        )
    if deviceManager.getDevice('key_resp_run_rest') is None:
        # initialise key_resp_run_rest
        key_resp_run_rest = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_run_rest',
        )
    if deviceManager.getDevice('key_resp_end') is None:
        # initialise key_resp_end
        key_resp_end = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_end',
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
    
    # pause any playback components
    for comp in playbackComponents:
        comp.pause()
    # prevent components from auto-drawing
    win.stashAutoDraw()
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
        # flip the screen
        win.flip()
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    for comp in playbackComponents:
        comp.play()
    # restore auto-drawn components
    win.retrieveAutoDraw()
    # reset any timers
    for timer in timers:
        timer.reset()


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
    
    # --- Initialize components for Routine "subs_rand_vars" ---
    
    # --- Initialize components for Routine "ret_instruction_screen" ---
    text_instructions = visual.TextStim(win=win, name='text_instructions',
        text="In this task, you will see items (objects and animals) that you have seen in the previous task.\n\nDuring the presentation of each item, you will need to imagine the scene in which the item appeared in as much detail as possible.\n\nThen you will answer two questions: First, you will indicate the context with which the item appeared (Desert or Ocean). Second, you will select the name of the specific scene you imagined: Desert A, Ocean A, Desert B, or Ocean B. \n\nIf you do not remember the context and/or the scene, please select the 'Don't know' options.\n\nWhen you're ready to begin, press the 'SPACEBAR' key.",
        font='Open Sans',
        pos=(0, 0), height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_start = keyboard.Keyboard(deviceName='key_resp_start')
    
    # --- Initialize components for Routine "create_runs_stim_div" ---
    
    # --- Initialize components for Routine "item_imagine_scene" ---
    item_cue = visual.ImageStim(
        win=win,
        name='item_cue', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.2, 0.2),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    
    # --- Initialize components for Routine "blank500" ---
    text = visual.TextStim(win=win, name='text',
        text='+',
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    
    # --- Initialize components for Routine "select_context" ---
    text_context_headline = visual.TextStim(win=win, name='text_context_headline',
        text='Which Context?',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    text_ocean = visual.TextStim(win=win, name='text_ocean',
        text='',
        font='Open Sans',
        pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    text_desert = visual.TextStim(win=win, name='text_desert',
        text='',
        font='Open Sans',
        pos=[0,0], height=0.03, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    key_resp_context = keyboard.Keyboard(deviceName='key_resp_context')
    
    # --- Initialize components for Routine "scene_confidence" ---
    slider_confidence_scene = visual.Slider(win=win, name='slider_confidence_scene',
        startValue=None, size=(1.0, 0.1), pos=(0, 0), units=win.units,
        labels=('Very confident','Somewhat confident', 'Not confident'), ticks=(1, 2, 3), granularity=0.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.03,
        flip=False, ori=0.0, depth=0, readOnly=False)
    
    # --- Initialize components for Routine "select_scene_name" ---
    image_scene_options = visual.ImageStim(
        win=win,
        name='image_scene_options', 
        image='default.png', mask=None, anchor='center',
        ori=0.0, pos=(0, 0), size=(0.88, 0.5),
        color=[1,1,1], colorSpace='rgb', opacity=None,
        flipHoriz=False, flipVert=False,
        texRes=128.0, interpolate=True, depth=0.0)
    key_resp_scenes = keyboard.Keyboard(deviceName='key_resp_scenes')
    text_scene_headline = visual.TextStim(win=win, name='text_scene_headline',
        text='The context was an',
        font='Open Sans',
        pos=(0, 0.4), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-2.0);
    # Run 'Begin Experiment' code from code_get_context
    # 
    #if scene_cat == 'd':
    #    cat_label = 'Desert'
    #    scenes_labels = '
    #    
    
    # --- Initialize components for Routine "scene_confidence" ---
    slider_confidence_scene = visual.Slider(win=win, name='slider_confidence_scene',
        startValue=None, size=(1.0, 0.1), pos=(0, 0), units=win.units,
        labels=('Very confident','Somewhat confident', 'Not confident'), ticks=(1, 2, 3), granularity=0.0,
        style='rating', styleTweaks=(), opacity=None,
        labelColor='White', markerColor='Red', lineColor='White', colorSpace='rgb',
        font='Open Sans', labelHeight=0.03,
        flip=False, ori=0.0, depth=0, readOnly=False)
    
    # --- Initialize components for Routine "is_last" ---
    
    # --- Initialize components for Routine "rest_betwee_runs" ---
    text_run_rest = visual.TextStim(win=win, name='text_run_rest',
        text="Good Job! You can rest for a moment.\n\nWhen you're ready to continue, press the SPACEBAR key.",
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_run_rest = keyboard.Keyboard(deviceName='key_resp_run_rest')
    
    # --- Initialize components for Routine "ret_end_screen" ---
    text_end = visual.TextStim(win=win, name='text_end',
        text="You're done, thank you for the participation!\n\nYou can let the experimenter know.",
        font='Open Sans',
        pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    key_resp_end = keyboard.Keyboard(deviceName='key_resp_end')
    
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
    
    # --- Prepare to start Routine "subs_rand_vars" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('subs_rand_vars.started', globalClock.getTime(format='float'))
    # Run 'Begin Routine' code from code_rand_vars
    import pandas as pd
    
    df = pd.read_csv('counterbalanced_vars.csv')
    print(participant)
    
    # assign context keys
    if df.loc[int(participant),'cat_keys'] == 0:
        key_desert = '1'
        key_ocean = '2'
    else:
        key_desert = '2'
        key_ocean = '1'
    
    # assign categories color
    if df.loc[int(participant),'cat_colors'] == 0:
        color_desert = 'purple'
        color_ocean = 'pink'
    else:
        color_desert = 'pink'
        color_ocean = 'purple'
    
    # assign desert label key numbers:
    if df.loc[int(participant),'d_lbl_keys'] == 0:
        # '1'--> desert A; '2' --> desert B
        key_dA = '1'
        key_dB = '2'
    else: 
        # '1'--> desert B; '2' --> desert A
        key_dA = '2'
        key_dB = '1' 
    
    # assign ocean label key numbers:
    if df.loc[int(participant),'o_lbl_keys'] == 0:
        # '1'--> ocean A; '2' --> ocean B
        key_oA = '1'
        key_oB = '2'
    else: 
        # '1'--> ocean B; '2' --> ocean A
        key_oA = '2'
        key_oB = '1'   
    
    # Run 'Begin Routine' code from code_context_screen
    # create the text for select context screen based 
    #on participant's colors and keys
    
    #    key_desert = '2'
    #    key_ocean = '1'    
    #    color_desert = 'Purple'
    #    color_ocean = 'Pink'
    
    if key_desert ==1:
        context_desert_txt = '1. ' + 'Desert'
        pos_desert = (0,0.1)
        context_ocean_txt = '2. ' + 'Ocean'
        pos_ocean = (0,-0.1)
    else:
        context_desert_txt = '1. ' + 'Ocean'
        pos_ocean = (0,0.1)
        context_ocean_txt = '2. ' + 'Desert'
        pos_desert = (0,-0.1)
    # keep track of which components have finished
    subs_rand_varsComponents = []
    for thisComponent in subs_rand_varsComponents:
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
    
    # --- Run Routine "subs_rand_vars" ---
    routineForceEnded = not continueRoutine
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
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in subs_rand_varsComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "subs_rand_vars" ---
    for thisComponent in subs_rand_varsComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('subs_rand_vars.stopped', globalClock.getTime(format='float'))
    thisExp.nextEntry()
    # the Routine "subs_rand_vars" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "ret_instruction_screen" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ret_instruction_screen.started', globalClock.getTime(format='float'))
    key_resp_start.keys = []
    key_resp_start.rt = []
    _key_resp_start_allKeys = []
    # keep track of which components have finished
    ret_instruction_screenComponents = [text_instructions, key_resp_start]
    for thisComponent in ret_instruction_screenComponents:
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
    
    # --- Run Routine "ret_instruction_screen" ---
    routineForceEnded = not continueRoutine
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
        
        # *key_resp_start* updates
        waitOnFlip = False
        
        # if key_resp_start is starting this frame...
        if key_resp_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_start.frameNStart = frameN  # exact frame index
            key_resp_start.tStart = t  # local t and not account for scr refresh
            key_resp_start.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_start, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_start.started')
            # update status
            key_resp_start.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_start.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_start.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_start.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_start.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_start_allKeys.extend(theseKeys)
            if len(_key_resp_start_allKeys):
                key_resp_start.keys = _key_resp_start_allKeys[-1].name  # just the last key pressed
                key_resp_start.rt = _key_resp_start_allKeys[-1].rt
                key_resp_start.duration = _key_resp_start_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ret_instruction_screenComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ret_instruction_screen" ---
    for thisComponent in ret_instruction_screenComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ret_instruction_screen.stopped', globalClock.getTime(format='float'))
    # check responses
    if key_resp_start.keys in ['', [], None]:  # No response was made
        key_resp_start.keys = None
    thisExp.addData('key_resp_start.keys',key_resp_start.keys)
    if key_resp_start.keys != None:  # we had a response
        thisExp.addData('key_resp_start.rt', key_resp_start.rt)
        thisExp.addData('key_resp_start.duration', key_resp_start.duration)
    thisExp.nextEntry()
    # the Routine "ret_instruction_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "create_runs_stim_div" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('create_runs_stim_div.started', globalClock.getTime(format='float'))
    # Run 'Begin Routine' code from code_4
    # take the stimuli and divide them into 4 sets, one per run.
    import openpyxl
    import numpy as np
    
    # load with openpyxl
    wb = openpyxl.load_workbook('/Users/nitzanlubi/Google Drive/Lab/schema_based_learning/retrieval_exp/stimuli_list_new.xlsx')
    sheet = wb.active  # Assuming you want to work with the active sheet
    
    # Get the number of rows in the Excel file
    num_rows = sheet.max_row -1
    
    # Split the row numbers into four equal parts
    num_rows_per_run = num_rows / 4
    # Create a list of row numbers
    row_numbers = list(range(num_rows))
    # Shuffle the row numbers
    np.random.shuffle(row_numbers)
    
    # divide to 4 runs
    run_stim = np.array_split(row_numbers, 4)
    run_stim = [list(run) for run in run_stim]
    
    print(run_stim[0])
    print(run_stim[1])
    print(run_stim[2])
    print(run_stim[3])
    # keep track of which components have finished
    create_runs_stim_divComponents = []
    for thisComponent in create_runs_stim_divComponents:
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
    
    # --- Run Routine "create_runs_stim_div" ---
    routineForceEnded = not continueRoutine
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
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in create_runs_stim_divComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "create_runs_stim_div" ---
    for thisComponent in create_runs_stim_divComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('create_runs_stim_div.stopped', globalClock.getTime(format='float'))
    thisExp.nextEntry()
    # the Routine "create_runs_stim_div" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    runs = data.TrialHandler(nReps=1.0, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('runs_params.xlsx'),
        seed=None, name='runs')
    thisExp.addLoop(runs)  # add the loop to the experiment
    thisRun = runs.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisRun.rgb)
    if thisRun != None:
        for paramName in thisRun:
            globals()[paramName] = thisRun[paramName]
    
    for thisRun in runs:
        currentLoop = runs
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer], 
                playbackComponents=[]
        )
        # abbreviate parameter names if possible (e.g. rgb = thisRun.rgb)
        if thisRun != None:
            for paramName in thisRun:
                globals()[paramName] = thisRun[paramName]
        
        # set up handler to look after randomisation of conditions etc
        trials = data.TrialHandler(nReps=1.0, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=data.importConditions('stimuli_list_new.xlsx', selection=run_stim[run]),
            seed=1, name='trials')
        thisExp.addLoop(trials)  # add the loop to the experiment
        thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
        if thisTrial != None:
            for paramName in thisTrial:
                globals()[paramName] = thisTrial[paramName]
        
        for thisTrial in trials:
            currentLoop = trials
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
            if thisTrial != None:
                for paramName in thisTrial:
                    globals()[paramName] = thisTrial[paramName]
            
            # --- Prepare to start Routine "item_imagine_scene" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('item_imagine_scene.started', globalClock.getTime(format='float'))
            item_cue.setImage(item_stimulus)
            # keep track of which components have finished
            item_imagine_sceneComponents = [item_cue]
            for thisComponent in item_imagine_sceneComponents:
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
            
            # --- Run Routine "item_imagine_scene" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 1.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *item_cue* updates
                
                # if item_cue is starting this frame...
                if item_cue.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    item_cue.frameNStart = frameN  # exact frame index
                    item_cue.tStart = t  # local t and not account for scr refresh
                    item_cue.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(item_cue, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'item_cue.started')
                    # update status
                    item_cue.status = STARTED
                    item_cue.setAutoDraw(True)
                
                # if item_cue is active this frame...
                if item_cue.status == STARTED:
                    # update params
                    pass
                
                # if item_cue is stopping this frame...
                if item_cue.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > item_cue.tStartRefresh + 1-frameTolerance:
                        # keep track of stop time/frame for later
                        item_cue.tStop = t  # not accounting for scr refresh
                        item_cue.tStopRefresh = tThisFlipGlobal  # on global time
                        item_cue.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'item_cue.stopped')
                        # update status
                        item_cue.status = FINISHED
                        item_cue.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in item_imagine_sceneComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "item_imagine_scene" ---
            for thisComponent in item_imagine_sceneComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('item_imagine_scene.stopped', globalClock.getTime(format='float'))
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-1.000000)
            
            # --- Prepare to start Routine "blank500" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('blank500.started', globalClock.getTime(format='float'))
            # keep track of which components have finished
            blank500Components = [text]
            for thisComponent in blank500Components:
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
            
            # --- Run Routine "blank500" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 0.5:
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
                    if tThisFlipGlobal > text.tStartRefresh + 0.5-frameTolerance:
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
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in blank500Components:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "blank500" ---
            for thisComponent in blank500Components:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('blank500.stopped', globalClock.getTime(format='float'))
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-0.500000)
            
            # --- Prepare to start Routine "select_context" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('select_context.started', globalClock.getTime(format='float'))
            text_ocean.setColor(color_ocean, colorSpace='rgb')
            text_ocean.setPos(pos_ocean)
            text_ocean.setText(context_ocean_txt)
            text_desert.setColor(color_desert, colorSpace='rgb')
            text_desert.setPos(pos_desert)
            text_desert.setText(context_desert_txt)
            key_resp_context.keys = []
            key_resp_context.rt = []
            _key_resp_context_allKeys = []
            # keep track of which components have finished
            select_contextComponents = [text_context_headline, text_ocean, text_desert, key_resp_context]
            for thisComponent in select_contextComponents:
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
            
            # --- Run Routine "select_context" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 2.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_context_headline* updates
                
                # if text_context_headline is starting this frame...
                if text_context_headline.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_context_headline.frameNStart = frameN  # exact frame index
                    text_context_headline.tStart = t  # local t and not account for scr refresh
                    text_context_headline.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_context_headline, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_context_headline.started')
                    # update status
                    text_context_headline.status = STARTED
                    text_context_headline.setAutoDraw(True)
                
                # if text_context_headline is active this frame...
                if text_context_headline.status == STARTED:
                    # update params
                    pass
                
                # if text_context_headline is stopping this frame...
                if text_context_headline.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_context_headline.tStartRefresh + 2.0-frameTolerance:
                        # keep track of stop time/frame for later
                        text_context_headline.tStop = t  # not accounting for scr refresh
                        text_context_headline.tStopRefresh = tThisFlipGlobal  # on global time
                        text_context_headline.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_context_headline.stopped')
                        # update status
                        text_context_headline.status = FINISHED
                        text_context_headline.setAutoDraw(False)
                
                # *text_ocean* updates
                
                # if text_ocean is starting this frame...
                if text_ocean.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_ocean.frameNStart = frameN  # exact frame index
                    text_ocean.tStart = t  # local t and not account for scr refresh
                    text_ocean.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_ocean, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_ocean.started')
                    # update status
                    text_ocean.status = STARTED
                    text_ocean.setAutoDraw(True)
                
                # if text_ocean is active this frame...
                if text_ocean.status == STARTED:
                    # update params
                    pass
                
                # if text_ocean is stopping this frame...
                if text_ocean.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_ocean.tStartRefresh + 2.0-frameTolerance:
                        # keep track of stop time/frame for later
                        text_ocean.tStop = t  # not accounting for scr refresh
                        text_ocean.tStopRefresh = tThisFlipGlobal  # on global time
                        text_ocean.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_ocean.stopped')
                        # update status
                        text_ocean.status = FINISHED
                        text_ocean.setAutoDraw(False)
                
                # *text_desert* updates
                
                # if text_desert is starting this frame...
                if text_desert.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_desert.frameNStart = frameN  # exact frame index
                    text_desert.tStart = t  # local t and not account for scr refresh
                    text_desert.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_desert, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_desert.started')
                    # update status
                    text_desert.status = STARTED
                    text_desert.setAutoDraw(True)
                
                # if text_desert is active this frame...
                if text_desert.status == STARTED:
                    # update params
                    pass
                
                # if text_desert is stopping this frame...
                if text_desert.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_desert.tStartRefresh + 2.0-frameTolerance:
                        # keep track of stop time/frame for later
                        text_desert.tStop = t  # not accounting for scr refresh
                        text_desert.tStopRefresh = tThisFlipGlobal  # on global time
                        text_desert.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_desert.stopped')
                        # update status
                        text_desert.status = FINISHED
                        text_desert.setAutoDraw(False)
                
                # *key_resp_context* updates
                
                # if key_resp_context is starting this frame...
                if key_resp_context.status == NOT_STARTED and t >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_context.frameNStart = frameN  # exact frame index
                    key_resp_context.tStart = t  # local t and not account for scr refresh
                    key_resp_context.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_context, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.addData('key_resp_context.started', t)
                    # update status
                    key_resp_context.status = STARTED
                    # keyboard checking is just starting
                    key_resp_context.clock.reset()  # now t=0
                    key_resp_context.clearEvents(eventType='keyboard')
                
                # if key_resp_context is stopping this frame...
                if key_resp_context.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_context.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_context.tStop = t  # not accounting for scr refresh
                        key_resp_context.tStopRefresh = tThisFlipGlobal  # on global time
                        key_resp_context.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.addData('key_resp_context.stopped', t)
                        # update status
                        key_resp_context.status = FINISHED
                        key_resp_context.status = FINISHED
                if key_resp_context.status == STARTED:
                    theseKeys = key_resp_context.getKeys(keyList=['1','2','3'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_context_allKeys.extend(theseKeys)
                    if len(_key_resp_context_allKeys):
                        key_resp_context.keys = _key_resp_context_allKeys[-1].name  # just the last key pressed
                        key_resp_context.rt = _key_resp_context_allKeys[-1].rt
                        key_resp_context.duration = _key_resp_context_allKeys[-1].duration
                        # was this correct?
                        if (key_resp_context.keys == str(context_enc)) or (key_resp_context.keys == context_enc):
                            key_resp_context.corr = 1
                        else:
                            key_resp_context.corr = 0
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in select_contextComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "select_context" ---
            for thisComponent in select_contextComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('select_context.stopped', globalClock.getTime(format='float'))
            # check responses
            if key_resp_context.keys in ['', [], None]:  # No response was made
                key_resp_context.keys = None
                # was no response the correct answer?!
                if str(context_enc).lower() == 'none':
                   key_resp_context.corr = 1;  # correct non-response
                else:
                   key_resp_context.corr = 0;  # failed to respond (incorrectly)
            # store data for trials (TrialHandler)
            trials.addData('key_resp_context.keys',key_resp_context.keys)
            trials.addData('key_resp_context.corr', key_resp_context.corr)
            if key_resp_context.keys != None:  # we had a response
                trials.addData('key_resp_context.rt', key_resp_context.rt)
                trials.addData('key_resp_context.duration', key_resp_context.duration)
            # Run 'End Routine' code from code_2
            # select scene screen based on actual encoding context
            if scene_cat =='d': 
                scene_scr = 'stimuli/scene_label_desert.png'
            elif scene_cat =='o': 
                scene_scr = 'stimuli/scene_label_ocean.png'
            
            # for debugging:
            print(scene_scr)
            
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-2.000000)
            
            # --- Prepare to start Routine "scene_confidence" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('scene_confidence.started', globalClock.getTime(format='float'))
            slider_confidence_scene.reset()
            # keep track of which components have finished
            scene_confidenceComponents = [slider_confidence_scene]
            for thisComponent in scene_confidenceComponents:
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
            
            # --- Run Routine "scene_confidence" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 2.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *slider_confidence_scene* updates
                
                # if slider_confidence_scene is starting this frame...
                if slider_confidence_scene.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    slider_confidence_scene.frameNStart = frameN  # exact frame index
                    slider_confidence_scene.tStart = t  # local t and not account for scr refresh
                    slider_confidence_scene.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(slider_confidence_scene, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'slider_confidence_scene.started')
                    # update status
                    slider_confidence_scene.status = STARTED
                    slider_confidence_scene.setAutoDraw(True)
                
                # if slider_confidence_scene is active this frame...
                if slider_confidence_scene.status == STARTED:
                    # update params
                    pass
                
                # if slider_confidence_scene is stopping this frame...
                if slider_confidence_scene.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > slider_confidence_scene.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        slider_confidence_scene.tStop = t  # not accounting for scr refresh
                        slider_confidence_scene.tStopRefresh = tThisFlipGlobal  # on global time
                        slider_confidence_scene.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'slider_confidence_scene.stopped')
                        # update status
                        slider_confidence_scene.status = FINISHED
                        slider_confidence_scene.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in scene_confidenceComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "scene_confidence" ---
            for thisComponent in scene_confidenceComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('scene_confidence.stopped', globalClock.getTime(format='float'))
            trials.addData('slider_confidence_scene.response', slider_confidence_scene.getRating())
            trials.addData('slider_confidence_scene.rt', slider_confidence_scene.getRT())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-2.000000)
            
            # --- Prepare to start Routine "select_scene_name" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('select_scene_name.started', globalClock.getTime(format='float'))
            image_scene_options.setImage(scene_scr)
            key_resp_scenes.keys = []
            key_resp_scenes.rt = []
            _key_resp_scenes_allKeys = []
            # keep track of which components have finished
            select_scene_nameComponents = [image_scene_options, key_resp_scenes, text_scene_headline]
            for thisComponent in select_scene_nameComponents:
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
            
            # --- Run Routine "select_scene_name" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 2.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *image_scene_options* updates
                
                # if image_scene_options is starting this frame...
                if image_scene_options.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    image_scene_options.frameNStart = frameN  # exact frame index
                    image_scene_options.tStart = t  # local t and not account for scr refresh
                    image_scene_options.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(image_scene_options, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'image_scene_options.started')
                    # update status
                    image_scene_options.status = STARTED
                    image_scene_options.setAutoDraw(True)
                
                # if image_scene_options is active this frame...
                if image_scene_options.status == STARTED:
                    # update params
                    pass
                
                # if image_scene_options is stopping this frame...
                if image_scene_options.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > image_scene_options.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        image_scene_options.tStop = t  # not accounting for scr refresh
                        image_scene_options.tStopRefresh = tThisFlipGlobal  # on global time
                        image_scene_options.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'image_scene_options.stopped')
                        # update status
                        image_scene_options.status = FINISHED
                        image_scene_options.setAutoDraw(False)
                
                # *key_resp_scenes* updates
                waitOnFlip = False
                
                # if key_resp_scenes is starting this frame...
                if key_resp_scenes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_scenes.frameNStart = frameN  # exact frame index
                    key_resp_scenes.tStart = t  # local t and not account for scr refresh
                    key_resp_scenes.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_scenes, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_scenes.started')
                    # update status
                    key_resp_scenes.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_scenes.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_scenes.clearEvents, eventType='keyboard')  # clear events on next screen flip
                
                # if key_resp_scenes is stopping this frame...
                if key_resp_scenes.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > key_resp_scenes.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        key_resp_scenes.tStop = t  # not accounting for scr refresh
                        key_resp_scenes.tStopRefresh = tThisFlipGlobal  # on global time
                        key_resp_scenes.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'key_resp_scenes.stopped')
                        # update status
                        key_resp_scenes.status = FINISHED
                        key_resp_scenes.status = FINISHED
                if key_resp_scenes.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_scenes.getKeys(keyList=['1','2'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_scenes_allKeys.extend(theseKeys)
                    if len(_key_resp_scenes_allKeys):
                        key_resp_scenes.keys = _key_resp_scenes_allKeys[-1].name  # just the last key pressed
                        key_resp_scenes.rt = _key_resp_scenes_allKeys[-1].rt
                        key_resp_scenes.duration = _key_resp_scenes_allKeys[-1].duration
                        # was this correct?
                        if (key_resp_scenes.keys == str(scene_enc)) or (key_resp_scenes.keys == scene_enc):
                            key_resp_scenes.corr = 1
                        else:
                            key_resp_scenes.corr = 0
                
                # *text_scene_headline* updates
                
                # if text_scene_headline is starting this frame...
                if text_scene_headline.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_scene_headline.frameNStart = frameN  # exact frame index
                    text_scene_headline.tStart = t  # local t and not account for scr refresh
                    text_scene_headline.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_scene_headline, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_scene_headline.started')
                    # update status
                    text_scene_headline.status = STARTED
                    text_scene_headline.setAutoDraw(True)
                
                # if text_scene_headline is active this frame...
                if text_scene_headline.status == STARTED:
                    # update params
                    pass
                
                # if text_scene_headline is stopping this frame...
                if text_scene_headline.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > text_scene_headline.tStartRefresh + 2.0-frameTolerance:
                        # keep track of stop time/frame for later
                        text_scene_headline.tStop = t  # not accounting for scr refresh
                        text_scene_headline.tStopRefresh = tThisFlipGlobal  # on global time
                        text_scene_headline.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'text_scene_headline.stopped')
                        # update status
                        text_scene_headline.status = FINISHED
                        text_scene_headline.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in select_scene_nameComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "select_scene_name" ---
            for thisComponent in select_scene_nameComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('select_scene_name.stopped', globalClock.getTime(format='float'))
            # check responses
            if key_resp_scenes.keys in ['', [], None]:  # No response was made
                key_resp_scenes.keys = None
                # was no response the correct answer?!
                if str(scene_enc).lower() == 'none':
                   key_resp_scenes.corr = 1;  # correct non-response
                else:
                   key_resp_scenes.corr = 0;  # failed to respond (incorrectly)
            # store data for trials (TrialHandler)
            trials.addData('key_resp_scenes.keys',key_resp_scenes.keys)
            trials.addData('key_resp_scenes.corr', key_resp_scenes.corr)
            if key_resp_scenes.keys != None:  # we had a response
                trials.addData('key_resp_scenes.rt', key_resp_scenes.rt)
                trials.addData('key_resp_scenes.duration', key_resp_scenes.duration)
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-2.000000)
            
            # --- Prepare to start Routine "scene_confidence" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('scene_confidence.started', globalClock.getTime(format='float'))
            slider_confidence_scene.reset()
            # keep track of which components have finished
            scene_confidenceComponents = [slider_confidence_scene]
            for thisComponent in scene_confidenceComponents:
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
            
            # --- Run Routine "scene_confidence" ---
            routineForceEnded = not continueRoutine
            while continueRoutine and routineTimer.getTime() < 2.0:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *slider_confidence_scene* updates
                
                # if slider_confidence_scene is starting this frame...
                if slider_confidence_scene.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    slider_confidence_scene.frameNStart = frameN  # exact frame index
                    slider_confidence_scene.tStart = t  # local t and not account for scr refresh
                    slider_confidence_scene.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(slider_confidence_scene, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'slider_confidence_scene.started')
                    # update status
                    slider_confidence_scene.status = STARTED
                    slider_confidence_scene.setAutoDraw(True)
                
                # if slider_confidence_scene is active this frame...
                if slider_confidence_scene.status == STARTED:
                    # update params
                    pass
                
                # if slider_confidence_scene is stopping this frame...
                if slider_confidence_scene.status == STARTED:
                    # is it time to stop? (based on global clock, using actual start)
                    if tThisFlipGlobal > slider_confidence_scene.tStartRefresh + 2-frameTolerance:
                        # keep track of stop time/frame for later
                        slider_confidence_scene.tStop = t  # not accounting for scr refresh
                        slider_confidence_scene.tStopRefresh = tThisFlipGlobal  # on global time
                        slider_confidence_scene.frameNStop = frameN  # exact frame index
                        # add timestamp to datafile
                        thisExp.timestampOnFlip(win, 'slider_confidence_scene.stopped')
                        # update status
                        slider_confidence_scene.status = FINISHED
                        slider_confidence_scene.setAutoDraw(False)
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in scene_confidenceComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "scene_confidence" ---
            for thisComponent in scene_confidenceComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('scene_confidence.stopped', globalClock.getTime(format='float'))
            trials.addData('slider_confidence_scene.response', slider_confidence_scene.getRating())
            trials.addData('slider_confidence_scene.rt', slider_confidence_scene.getRT())
            # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
            if routineForceEnded:
                routineTimer.reset()
            else:
                routineTimer.addTime(-2.000000)
            thisExp.nextEntry()
            
            if thisSession is not None:
                # if running in a Session with a Liaison client, send data up to now
                thisSession.sendExperimentData()
        # completed 1.0 repeats of 'trials'
        
        
        # --- Prepare to start Routine "is_last" ---
        continueRoutine = True
        # update component parameters for each repeat
        thisExp.addData('is_last.started', globalClock.getTime(format='float'))
        # Run 'Begin Routine' code from code_islast
        if run == 3:
            last_run = 0
        else:
            last_run = 1
                
        # keep track of which components have finished
        is_lastComponents = []
        for thisComponent in is_lastComponents:
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
        
        # --- Run Routine "is_last" ---
        routineForceEnded = not continueRoutine
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
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in is_lastComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "is_last" ---
        for thisComponent in is_lastComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        thisExp.addData('is_last.stopped', globalClock.getTime(format='float'))
        # the Routine "is_last" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # set up handler to look after randomisation of conditions etc
        show_restScreen = data.TrialHandler(nReps=last_run, method='sequential', 
            extraInfo=expInfo, originPath=-1,
            trialList=[None],
            seed=None, name='show_restScreen')
        thisExp.addLoop(show_restScreen)  # add the loop to the experiment
        thisShow_restScreen = show_restScreen.trialList[0]  # so we can initialise stimuli with some values
        # abbreviate parameter names if possible (e.g. rgb = thisShow_restScreen.rgb)
        if thisShow_restScreen != None:
            for paramName in thisShow_restScreen:
                globals()[paramName] = thisShow_restScreen[paramName]
        
        for thisShow_restScreen in show_restScreen:
            currentLoop = show_restScreen
            thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer], 
                    playbackComponents=[]
            )
            # abbreviate parameter names if possible (e.g. rgb = thisShow_restScreen.rgb)
            if thisShow_restScreen != None:
                for paramName in thisShow_restScreen:
                    globals()[paramName] = thisShow_restScreen[paramName]
            
            # --- Prepare to start Routine "rest_betwee_runs" ---
            continueRoutine = True
            # update component parameters for each repeat
            thisExp.addData('rest_betwee_runs.started', globalClock.getTime(format='float'))
            key_resp_run_rest.keys = []
            key_resp_run_rest.rt = []
            _key_resp_run_rest_allKeys = []
            # keep track of which components have finished
            rest_betwee_runsComponents = [text_run_rest, key_resp_run_rest]
            for thisComponent in rest_betwee_runsComponents:
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
            
            # --- Run Routine "rest_betwee_runs" ---
            routineForceEnded = not continueRoutine
            while continueRoutine:
                # get current time
                t = routineTimer.getTime()
                tThisFlip = win.getFutureFlipTime(clock=routineTimer)
                tThisFlipGlobal = win.getFutureFlipTime(clock=None)
                frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
                # update/draw components on each frame
                
                # *text_run_rest* updates
                
                # if text_run_rest is starting this frame...
                if text_run_rest.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    text_run_rest.frameNStart = frameN  # exact frame index
                    text_run_rest.tStart = t  # local t and not account for scr refresh
                    text_run_rest.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(text_run_rest, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'text_run_rest.started')
                    # update status
                    text_run_rest.status = STARTED
                    text_run_rest.setAutoDraw(True)
                
                # if text_run_rest is active this frame...
                if text_run_rest.status == STARTED:
                    # update params
                    pass
                
                # *key_resp_run_rest* updates
                waitOnFlip = False
                
                # if key_resp_run_rest is starting this frame...
                if key_resp_run_rest.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                    # keep track of start time/frame for later
                    key_resp_run_rest.frameNStart = frameN  # exact frame index
                    key_resp_run_rest.tStart = t  # local t and not account for scr refresh
                    key_resp_run_rest.tStartRefresh = tThisFlipGlobal  # on global time
                    win.timeOnFlip(key_resp_run_rest, 'tStartRefresh')  # time at next scr refresh
                    # add timestamp to datafile
                    thisExp.timestampOnFlip(win, 'key_resp_run_rest.started')
                    # update status
                    key_resp_run_rest.status = STARTED
                    # keyboard checking is just starting
                    waitOnFlip = True
                    win.callOnFlip(key_resp_run_rest.clock.reset)  # t=0 on next screen flip
                    win.callOnFlip(key_resp_run_rest.clearEvents, eventType='keyboard')  # clear events on next screen flip
                if key_resp_run_rest.status == STARTED and not waitOnFlip:
                    theseKeys = key_resp_run_rest.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                    _key_resp_run_rest_allKeys.extend(theseKeys)
                    if len(_key_resp_run_rest_allKeys):
                        key_resp_run_rest.keys = _key_resp_run_rest_allKeys[-1].name  # just the last key pressed
                        key_resp_run_rest.rt = _key_resp_run_rest_allKeys[-1].rt
                        key_resp_run_rest.duration = _key_resp_run_rest_allKeys[-1].duration
                        # a response ends the routine
                        continueRoutine = False
                
                # check for quit (typically the Esc key)
                if defaultKeyboard.getKeys(keyList=["escape"]):
                    thisExp.status = FINISHED
                if thisExp.status == FINISHED or endExpNow:
                    endExperiment(thisExp, win=win)
                    return
                
                # check if all components have finished
                if not continueRoutine:  # a component has requested a forced-end of Routine
                    routineForceEnded = True
                    break
                continueRoutine = False  # will revert to True if at least one component still running
                for thisComponent in rest_betwee_runsComponents:
                    if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                        continueRoutine = True
                        break  # at least one component has not yet finished
                
                # refresh the screen
                if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                    win.flip()
            
            # --- Ending Routine "rest_betwee_runs" ---
            for thisComponent in rest_betwee_runsComponents:
                if hasattr(thisComponent, "setAutoDraw"):
                    thisComponent.setAutoDraw(False)
            thisExp.addData('rest_betwee_runs.stopped', globalClock.getTime(format='float'))
            # check responses
            if key_resp_run_rest.keys in ['', [], None]:  # No response was made
                key_resp_run_rest.keys = None
            show_restScreen.addData('key_resp_run_rest.keys',key_resp_run_rest.keys)
            if key_resp_run_rest.keys != None:  # we had a response
                show_restScreen.addData('key_resp_run_rest.rt', key_resp_run_rest.rt)
                show_restScreen.addData('key_resp_run_rest.duration', key_resp_run_rest.duration)
            # the Routine "rest_betwee_runs" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset()
        # completed last_run repeats of 'show_restScreen'
        
    # completed 1.0 repeats of 'runs'
    
    
    # --- Prepare to start Routine "ret_end_screen" ---
    continueRoutine = True
    # update component parameters for each repeat
    thisExp.addData('ret_end_screen.started', globalClock.getTime(format='float'))
    key_resp_end.keys = []
    key_resp_end.rt = []
    _key_resp_end_allKeys = []
    # keep track of which components have finished
    ret_end_screenComponents = [text_end, key_resp_end]
    for thisComponent in ret_end_screenComponents:
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
    
    # --- Run Routine "ret_end_screen" ---
    routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 20.0:
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
            if tThisFlipGlobal > text_end.tStartRefresh + 20-frameTolerance:
                # keep track of stop time/frame for later
                text_end.tStop = t  # not accounting for scr refresh
                text_end.tStopRefresh = tThisFlipGlobal  # on global time
                text_end.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'text_end.stopped')
                # update status
                text_end.status = FINISHED
                text_end.setAutoDraw(False)
        
        # *key_resp_end* updates
        waitOnFlip = False
        
        # if key_resp_end is starting this frame...
        if key_resp_end.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_end.frameNStart = frameN  # exact frame index
            key_resp_end.tStart = t  # local t and not account for scr refresh
            key_resp_end.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_end, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_end.started')
            # update status
            key_resp_end.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_end.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_end.clearEvents, eventType='keyboard')  # clear events on next screen flip
        
        # if key_resp_end is stopping this frame...
        if key_resp_end.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_end.tStartRefresh + 20-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_end.tStop = t  # not accounting for scr refresh
                key_resp_end.tStopRefresh = tThisFlipGlobal  # on global time
                key_resp_end.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'key_resp_end.stopped')
                # update status
                key_resp_end.status = FINISHED
                key_resp_end.status = FINISHED
        if key_resp_end.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_end.getKeys(keyList=['z'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_end_allKeys.extend(theseKeys)
            if len(_key_resp_end_allKeys):
                key_resp_end.keys = _key_resp_end_allKeys[-1].name  # just the last key pressed
                key_resp_end.rt = _key_resp_end_allKeys[-1].rt
                key_resp_end.duration = _key_resp_end_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in ret_end_screenComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "ret_end_screen" ---
    for thisComponent in ret_end_screenComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    thisExp.addData('ret_end_screen.stopped', globalClock.getTime(format='float'))
    # check responses
    if key_resp_end.keys in ['', [], None]:  # No response was made
        key_resp_end.keys = None
    thisExp.addData('key_resp_end.keys',key_resp_end.keys)
    if key_resp_end.keys != None:  # we had a response
        thisExp.addData('key_resp_end.rt', key_resp_end.rt)
        thisExp.addData('key_resp_end.duration', key_resp_end.duration)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if routineForceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-20.000000)
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
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # shut down eyetracker, if there is one
    if deviceManager.getDevice('eyetracker') is not None:
        deviceManager.removeDevice('eyetracker')
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
    # shut down eyetracker, if there is one
    if deviceManager.getDevice('eyetracker') is not None:
        deviceManager.removeDevice('eyetracker')
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
