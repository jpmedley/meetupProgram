#!/usr/bin/env python

from webapp2 import RequestHandler
from webapp2 import WSGIApplication

def MainHandler(RequestHandler):
  def get(self):
    pass

app = WSGIApplication([
  ('/'. MainHandler),
], debug=True)
