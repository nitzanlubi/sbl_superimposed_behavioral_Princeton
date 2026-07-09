import pandas as pd

path = '/Users/nitzanlubi/Google Drive/Lab/schema_based_learning/training_task'
subnum = '101'
df = pd.read_csv(path + '/stimuli/stim_lists/stimuli_list_sub_' + subnum + '_run_1.csv')
df = df[['scene_stimulus', 'scene_label']].drop_duplicates().reset_index(drop=True)

# find which scene contains the string 'J1'
ind = df['scene_stimulus'].str.contains('J1')

scene_J1 = df[df['scene_stimulus'].str.contains('J1')]['scene_stimulus'].values[0]
scebe_J1_lbl = df[df['scene_stimulus'].str.contains('J1')]['scene_label'].values[0]

# create a logical vector with 4 False cells
logical_vector = [False] * 4

# update the third cell to True
logical_vector[2] = True

# check whether all cells are True
all(logical_vector)


scene_J1 = df[df['scene_stimulus'].str.contains('J1')]['scene_stimulus'].values[0]
scebe_J1_lbl = df[df['scene_stimulus'].str.contains('J1')]['scene_label'].values[0]

df = pd.read_csv(path + '/stimuli/stim_lists/stimuli_list_sub_' + subnum + '_run_1.csv')
# randomly select 6 rows with sc congruency and 6 rows with si congruency
sc = df[df['congruency'] == 'sc'].sample(6)
si = df[df['congruency'] == 'si'].sample(6)
# unite the two dataframes
df1 = pd.concat([df[df['congruency'] == 'sc'].sample(6), df[df['congruency'] == 'si'].sample(6)]).reset_index(drop=True)

df1.to_csv(f"{path}/stimuli/stim_lists/stimuli_list_sub_101_training_task.csv")