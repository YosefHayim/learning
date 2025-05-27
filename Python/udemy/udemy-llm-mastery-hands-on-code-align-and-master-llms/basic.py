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