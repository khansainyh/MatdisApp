from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

tasks = []

@app.route('/')
def index():
    sorted_tasks = sorted(tasks, key=lambda x: (x['type'] == 'normal', x['id']))
    return render_template('index.html'), tasks == sorted_tasks

@app.route('/add', methods=['POST'])
def add_task():
    task_name = request.form["task_name"]
    task_type = request.form["task_type"]
    tasks.append({
        "id": len(tasks),
        "name": task_name,
        "type": task_type,
        "done": False
    })
    return redirect(url_for("index"))

@app.route("/edit/<int:index>", methods=["POST"])
def edit_task(task_id):
    task_name = request.form["task_name"]
    task_type = request.form["task_type"]
    tasks.append({"name": task_name, "type": task_type, "done": False})
    return redirect(url_for("index"))

@app.route('/delete/<int:task_id>')
def delete_task(task_id):
    if 0 <= task_id < len(tasks):
        del tasks[task_id]
    return redirect(url_for("index"))

@app.route('/toggle/int:task_id')
def toggle_done(task_id):
    if 0 <= task_id < len(tasks):
        tasks[task_id]["done"] = not tasks[task_id]["done"]
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)