import pandas as pd
import numpy as np

def pseudo_random_order(df, column):
    # Shuffle the DataFrame
    shuffled_df = df.sample(frac=1, random_state=42).reset_index(drop=True)
    
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
    for i in range(len(shuffled_df) - 1):
        if shuffled_df.at[i, column] == shuffled_df.at[i + 1, column]:
            raise ValueError("Could not reorder to satisfy the condition.")

    return shuffled_df

# Example usage:
data = {'scene_label': ['A', 'B', 'A', 'C', 'C', 'D', 'D', 'A']}
df = pd.DataFrame(data)
ordered_df = pseudo_random_order(df, 'scene_label')
print(ordered_df)