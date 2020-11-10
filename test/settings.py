# -*- coding: utf-8 -*-

import cherrypy
import json
import os

try:
    with open('local/settings.json') as data:
        settings = json.loads(data.read())
except:
    settings = {}

## web root must begin with forward slash '/'
# WEB_ROOT = '/' + settings.get('web_root', '')
WEB_ROOT = '/'

TEST_LOCAL = True
DIST_DIR = 'dist'
STATIC_DIR = 'local'
DB_FILE = os.path.join(STATIC_DIR, 'local_testing.db')
TESTUSER = 'testuser'
ROOT_DIR = os.getcwd()


try:
    from local_settings import *
except ImportError as e:
    cherrypy.log("--- Couldn't import local_settings.py: ", str(e))