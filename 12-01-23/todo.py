from flask import Flask,render_template,request

app=Flask(__name__)
list=[]
@app.route("/list",methods=["GET","POST"])

def todo():

    
    if request.method =="POST":
        list.append(request.form["item"])

    return render_template ("todo1.html",item_name=list)

@app.route("/deltodo/<deltodo>",methods=["GET","POST"])
def delete(deltodo):
    
     if deltodo in list:
        list.remove(deltodo)

     return render_template ("todo1.html",item_name=list)

@app.route("/update/<v_index>",methods=["GET","POST"])
def uptatelist(v_index):
    if request.method=="POST":
        list[int(v_index)]=request.form["update_item"]
        return render_template("todo1.html",item_name=list)

    else:    
        value=list[int(v_index)]
    return render_template("update.html",value=value)




if __name__=="__main__":
    app.run(debug=True)