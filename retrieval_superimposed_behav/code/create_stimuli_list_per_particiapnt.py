# this code randomize a. names into scenes, and b. items into scenes

import pandas as pd
import numpy as np
import random
# variables
subs = range(101,110)
stimuli_path = '/Users/nitzanlubi/Google Drive/Lab/schema_based_learning/encoding_exp/stimuli'
outpath = '/Users/nitzanlubi/Google Drive/Lab/schema_based_learning/encoding_exp/stimuli/stim_lists'

def pseudo_random_order(df, column):
    # Shuffle the DataFrame
    shuffled_df = df.sample(frac=1, random_state=None).reset_index(drop=True)
    
    # Function to swap rows
    def swap_rows(df, i, j):
        df.iloc[[i, j]] = df.iloc[[j, i]].values

    # Adjust to ensure no consecutive rows have the same 'scene_label'
    for i in range(len(shuffled_df) - 1):
        if shuffled_df.at[i, column] == shuffled_df.at[i + 1, column]:
            # Find the next row with a different 'scene_label'
            for j in range(i + 2, len(shuffled_df)):
                if shuffled_df.at[j, column] != shuffled_df.at[i, column]:
                    swap_rows(shuffled_df, i + 1, j)
                    break

    # Check if the condition is satisfied
    cond = True
    for i in range(len(shuffled_df) - 1):
        if shuffled_df.at[i, column] == shuffled_df.at[i + 1, column]: # repeat the function if the condition is not satisfied
            cond = False
            break
    if cond == False:
        return pseudo_random_order(df, column)
    else:
        return shuffled_df
# shuffle the df order randomly 

# insert scene variables
scenes = ['stimuli/scenes/scene_J1.png', 'stimuli/scenes/scene_J2.png', 'stimuli/scenes/scene_U1.png', 'stimuli/scenes/scene_U2.png'] # two forest scenes and two underwater scenes
scene_cat = ['Jungle', 'Jungle', 'Undersea', 'Undersea']

for sub in subs:
    scene_names = ['Negvi', 'Tulon', 'Malbow', 'Somar'] # four madeup names
    random.shuffle(scene_names)
    df = pd.DataFrame(columns=['scene_stimulus','scene_cat','scene_label','item_stimulus','item_cat','item_type','congruency'])
    # shuffle the order of scene names and match them to the scenes


    df['scene_stimulus'] = scenes * 20
    df['scene_label'] = scene_names * 20
    df['scene_cat'] = scene_cat * 20

    # order the scenes by scene_cat and scene_label
    df = df.sort_values(by=['scene_cat', 'scene_stimulus']).reset_index(drop=True)
    # Define the items
    jungle_objects = ["stimuli/items/jungle_object_" + str(i) for i in range(1, 16)]
    jungle_animals = ["stimuli/items/jungle_animal_" + str(i) for i in range(1, 16)]
    sea_objects = ["stimuli/items/sea_object_" + str(i) for i in range(1, 16)]
    sea_animals = ["stimuli/items/sea_animal_" + str(i) for i in range(1, 16)]
    other_animals = ["stimuli/items/other_animal_" + str(i) for i in range(1, 11)]
    other_objects = ["stimuli/items/other_object_" + str(i) for i in range(1, 11)]    
    # Shuffle the items
    random.shuffle(jungle_objects)
    random.shuffle(jungle_animals)
    random.shuffle(sea_objects)
    random.shuffle(sea_animals)
    random.shuffle(other_animals)
    random.shuffle(other_objects)

    # Assign items for Schema-Congruent (SC) condition
    sc_jungle_objects = jungle_objects[:10]  # 5 per scene
    sc_jungle_animals = jungle_animals[:10]  # 5 per scene
    sc_sea_objects = sea_objects[:10]        # 5 per scene
    sc_sea_animals = sea_animals[:10]        # 5 per scene

    # Allocate to scenes
    sc_jungle_scene1 = sc_jungle_objects[:5] + sc_jungle_animals[:5]
    sc_jungle_scene2 = sc_jungle_objects[5:] + sc_jungle_animals[5:]
    sc_sea_scene1 = sc_sea_objects[:5] + sc_sea_animals[:5]
    sc_sea_scene2 = sc_sea_objects[5:] + sc_sea_animals[5:]

    # Assign remaining items for Schema-Incongruent (SI) condition
    remaining_nonsea_objects = jungle_objects[10:] + other_objects[:5]
    remaining_nonjungle_objects = sea_objects[10:] + other_objects[5:]
    remaining_nonsea_animals = jungle_animals[10:] +  other_animals[:5]
    remaining_nonjungle_animals = sea_animals[10:] + other_animals[5:]

    # Shuffle items
    random.shuffle(remaining_nonsea_objects)
    random.shuffle(remaining_nonjungle_objects)
    random.shuffle(remaining_nonsea_animals)
    random.shuffle(remaining_nonjungle_animals)

    # Allocate to scenes
    si_jungle_scene1 = remaining_nonjungle_objects[:5] + remaining_nonjungle_animals[:5]
    si_jungle_scene2 = remaining_nonjungle_objects[5:] + remaining_nonjungle_animals[5:]
    si_sea_scene1 = remaining_nonsea_objects[:5] + remaining_nonsea_animals[:5]
    si_sea_scene2 = remaining_nonsea_objects[5:] + remaining_nonsea_animals[5:]

    # insert the items into df accordingly
    df.loc[0:9,'item_stimulus'] = sc_jungle_scene1
    df.loc[0:9,'congruency'] = 'sc'
    df.loc[10:19,'item_stimulus'] = si_jungle_scene1
    df.loc[10:19,'congruency'] = 'si'
    df.loc[20:29,'item_stimulus'] = sc_jungle_scene2
    df.loc[20:29,'congruency'] = 'sc'
    df.loc[30:39,'item_stimulus'] = si_jungle_scene2
    df.loc[30:39,'congruency'] = 'si'
    df.loc[40:49,'item_stimulus'] = sc_sea_scene1
    df.loc[40:49,'congruency'] = 'sc'
    df.loc[50:59,'item_stimulus'] = si_sea_scene1
    df.loc[50:59,'congruency'] = 'si'
    df.loc[60:69,'item_stimulus'] = sc_sea_scene2
    df.loc[60:69,'congruency'] = 'sc'
    df.loc[70:79,'item_stimulus'] = si_sea_scene2

    df.loc[70:79,'congruency'] = 'si'

    # set 'item_cat' to Jungle, Undersea or Other
    df['item_cat'] = 'Other'
    df.loc[df['item_stimulus'].str.contains('jungle'), 'item_cat'] = 'Jungle'
    df.loc[df['item_stimulus'].str.contains('sea'), 'item_cat'] = 'Undersea'

    # add item type 'animal' if item is an animal, 'object' if object
    df['item_type'] = 'object'
    df.loc[df['item_stimulus'].str.contains('animal'), 'item_type'] = 'animal'

    # add to item_stim ".png" to match the stimuli file names
    df['item_stimulus'] = df['item_stimulus'] + '.png'

    # order the rows in a pseudo-random order such that two consecutive rows are not from the same scene
    for run in range(1, 4):
        ordered_df = pseudo_random_order(df, 'scene_label')
        print(sub, run)
        # save the df to a csv file with the subject number and run number
        ordered_df.to_csv(outpath + '/stimuli_list_sub_' + str(sub) + '_run_' + str(run) + '.csv', index=False)




# Output the results
print("Schema-Congruent (SC) Condition:")
print("Jungle Scene 1:", sc_jungle_scene1)
print("Jungle Scene 2:", sc_jungle_scene2)
print("Sea Scene 1:", sc_sea_scene1)
print("Sea Scene 2:", sc_sea_scene2)

print("\nSchema-Inconsistent (SI) Condition:")
print("Jungle Scene 1:", si_jungle_scene1)
print("Jungle Scene 2:", si_jungle_scene2)
print("Sea Scene 1:", si_sea_scene1)
print("Sea Scene 2:", si_sea_scene2)

stim_list = ["stimuli/stim_lists/stimuli_list_sub_" + str(subnum) + "_run_" + str(run) + ".csv"]

# get the unique scene_stimulus and their corresponding scene_label
x = df[['scene_stimulus', 'scene_label']].drop_duplicates().reset_index(drop=True)
#  leave in scene_stimulus only the two characters that represent the scene, before the .png
x['scene_stimulus'] = x['scene_stimulus'].str[-6:-4]
# create a dictionary with the scene_stimulus as the key and the scene_label as the value
scene_dict = dict(zip(x['scene_stimulus'], x['scene_label']))
# get the label of scene J1
scene_dict['J1']

# there's a string. I want to check whether it contains a substring
if 'J1' in scene_dict:
    print(scene_dict['J1'])
