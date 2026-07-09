
# this code counterbalances conidtions for the retrieval task
import pandas as pd
import numpy as np
import itertools
from random import shuffle

exp_path = '/Users/nitzanlubi/Google Drive/Lab/schema_based_learning/retrieval_exp'
# Generate all possible combinations of four binary variables
combinations = list(itertools.product([0, 1], repeat=5))
# Repeat each combination three times
# combinations_repeated = combinations * 3 # if needed more than one repetition

# Generate participant numbers from 101 to 148
participants = list(range(101, 133))

# Shuffle the order of participant numbers
shuffle(participants)

# Create a DataFrame with combinations as columns
df = pd.DataFrame(combinations, columns=['enc_relatedness_keys','cat_keys', 'cat_colors', 'd_lbl_keys', 'o_lbl_keys'])
# Add Participant column
df['Participant'] = participants

# Shuffle the DataFrame rows
df = df.sample(frac=1).reset_index(drop=True)

# Reorder DataFrame rows according to increasing participant numbers
df = df.sort_values(by='Participant').reset_index(drop=True)

# place the participant column at the beginning of the DataFrame
cols = df.columns.tolist()
cols = cols[-1:] + cols[:-1]
df = df[cols]

# show correlation between variables
print(df.corr())

# Save DataFrame to Excel
df.to_excel(f"{exp_path}/counterbalanced_vars.xlsx", index=False)
