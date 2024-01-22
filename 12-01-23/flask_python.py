from flask import Flask
from flask import render_template

app=Flask(__name__)

@app.route("/welcome")

def welocme():



    return("welcome")

@app.route("/user/<name>")

def user(name):

    return name

@app.route("/contact/<name>")

def renderhtml(name):
    return render_template("home.html",name=name)


@app.route("/list")

def list():

    names=["anish","suthan","mathan","anish"]
    return render_template("home.html",user=names)











