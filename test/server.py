# -*- coding: utf-8 -*-

import cherrypy
import datetime
import json
import os
import sqlite3
import uuid

from settings import TEST_LOCAL, WEB_ROOT, DIST_DIR, DB_FILE, TESTUSER, STATIC_DIR, ROOT_DIR


def get_current_dir():
    return os.path.realpath(os.path.curdir)

def configure_cherrypy():
    root_dir = ROOT_DIR
    _cfg = {
        '/': {
            'tools.staticdir.dir': os.path.join(root_dir, DIST_DIR),
            'tools.staticdir.index': 'index.html',
            'tools.staticdir.on': True,
            'tools.encode.encoding':'utf-8',
            'tools.encode.on': True,
        },
        '/local': {
            'tools.staticdir.on': True,
            'tools.staticdir.dir': os.path.join(root_dir, STATIC_DIR)
        }
    }
    return _cfg

def error_page_404(status, message, traceback, version):
    cherrypy.log(status, message, traceback, version)
    return "Error %s - Sorry" % status

def error_page_500(status, message, traceback, version):
    cherrypy.log(status, message, traceback, version)
    return "Error %s - Sorry" % status

def apply_error_pages():
    cherrypy.config.update({'error_page.404': error_page_404})
    cherrypy.config.update({'error_page.500': error_page_500})

## TODO: only available after v 5.5.0
#@cherrypy.tools.register('before_finalize', priority=60)
def secureheaders():
    headers = cherrypy.response.headers
    headers['X-Frame-Options'] = 'DENY'
    headers['X-XSS-Protection'] = '1; mode=block'
    #headers['Content-Security-Policy'] = "default-src 'self' *.googleapis.com *.gstatic.com *.jquery.com *.bootstrapcdn.com *.cloudflare.com"
    headers['X-Content-Type-Options'] = "nosniff"
    headers['Strict-Transport-Security'] = "max-age=31536000; includeSubDomains"
    ## 'Server' header gets set in cherrypy/_cprequest.py
    # del headers['Server']

cherrypy.tools.secureheaders = cherrypy.Tool('before_finalize', secureheaders)



class Root(object):

    @cherrypy.expose
    def index(self, *args, **kwargs):
        path = os.path.join(ROOT_DIR, 'dist/index.html')
        with open(path, 'r', encoding="utf-8") as f:
            return f.readlines()

    @cherrypy.expose
    def default(self, *args, **kwargs):
        ## this is necessary for Vue SPAs
        ## https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
        return self.index(*args, **kwargs)

    @cherrypy.expose
    @cherrypy.tools.json_out()
    def show(self, **kwargs):
        data = {'name': 'Some JSON data'}
        return data


def main():
    root = Root()

    mount_tree = root

    cherrypy.log('start webserver')
    cherrypy.log('local testing mode:', str(TEST_LOCAL))
    cherrypy.log('current working dir: %s' % get_current_dir())

    cfg = {}
    cfg.update(configure_cherrypy())

    app = cherrypy.tree.mount(mount_tree, WEB_ROOT, config=cfg)
    cherrypy.config.update({
        'log.screen': True,
        'server.socket_host': '0.0.0.0',
        'server.socket_port': 8089,
        'tools.secureheaders.on': True,
        'tools.encode.encoding': 'utf-8',
        'tools.encode.on': True,
        # 'tools.sessions.on': True,
        'tools.encode.text_only': False, ## important; https://github.com/cherrypy/cherrypy/issues/1584
        #'engine.autoreload_on': True,
        ## for local testing open ports in windows firewall:
        ## netsh advfirewall firewall add rule name="TCP Port 4444" dir=in localport=4444 protocol=TCP action=allow
        'tools.proxy.base': '0.0.0.0',
        'tools.proxy.local': 'X-Forwarded-Host',
        'tools.proxy.on': False,
    })
    apply_error_pages()

    cherrypy.log('run')
    cherrypy.quickstart(app)


if __name__ == '__main__':
    main()
