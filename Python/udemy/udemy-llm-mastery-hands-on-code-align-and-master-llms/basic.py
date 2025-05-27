# import libraries
import os,sys 
import ipdb #for debugging, variations of pdb
from tqdm import tqdm
from datetime import datetime
import requests,zipfile,io

# Pytorch
import torch
import torch.nn as nn
from torch.nn import functional as F

# tokenizer
import sentencepiece as spm

# these improves performance for Ampere architecture
torch.backends.cuda.matmul.allow_tf32 = True
torch.backends.cudnn.allow_tf32 = True

# Empty GPU Cache Memory
torch.cuda.empty_cache()
