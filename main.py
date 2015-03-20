#!/usr/bin/env python

import json
import os
from webapp2 import RequestHandler
from webapp2 import WSGIApplication

class MainHandler(RequestHandler):
  def get(self):
    # self.response.out.headers['Content-Security-Policy'] = CS_POLICY + " referrer origin;"
    self.response.write('<html><head>')
    self.response.write('<title>Milkbone Server</title>')
    self.response.write('<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">')
    self.response.write('<meta name="viewport" content="width=device-width,initial-scale=1">')
    self.response.write('</head><body>')
    self.response.write('<h1>Meetup View</h1>')
    self.response.write('<p><a href="index.html">Actual Page</a></p>')
    self.response.write('</body></html>')

app = WSGIApplication([
  ('/', MainHandler),
], debug=True)
