#!/usr/bin/env python

import os
from webapp2 import RequestHandler
from webapp2 import WSGIApplication

API_ORIGIN = "https://api.meetup.com"
DASHBOARD = os.path.join(API_ORIGIN, "dashboard")

class MainHandler(RequestHandler):
  def get(self):
    pass

class Dashboard(RequestHandler):
  def get(self):
    pass

app = WSGIApplication([
  ('/', MainHandler),
  ('/dashboard', Dashboard),
], debug=True)
