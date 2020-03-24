from flask import Flask
from flask import request, redirect, url_for, render_template

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
    return render_template('index.html')

@app.route("/bio")
def bio():
  return render_template("bio.html")

@app.route("/music")
def music():
  return render_template("music.html")

@app.route("/live")
def live():
  return render_template("live.html")

@app.route("/lyrics")
def lyrics():
  return render_template("lyrics.html")

@app.route("/media")
def media():
  return render_template("media.html")

@app.route("/contact")
def contact():
  return render_template("contact.html")

if __name__ == "__main__":
    app.run(debug=True)
