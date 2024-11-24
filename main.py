from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Task storage
tasks = []

@app.route('/')
def index():
    # Sort tasks by type (important tasks first)
    sorted_tasks = sorted(tasks, key=lambda x: (x['type'] != 'important', x['id']))
    return render_template('index.html', tasks=sorted_tasks)

@app.route('/add', methods=['POST'])
def add_task():
    task_name = request.form["task_name"]
    task_type = request.form["task_type"]
    tasks.append({
        "id": len(tasks),  # Unique ID for each task
        "name": task_name,
        "type": task_type,
        "done": False
    })
    return redirect(url_for("index"))

@app.route("/edit/<int:task_id>", methods=["POST"])
def edit_task(task_id):
    task_name = request.form["task_name"]
    task_type = request.form["task_type"]
    for task in tasks:
        if task["id"] == task_id:
            task["name"] = task_name
            task["type"] = task_type
            break
    return redirect(url_for("index"))

@app.route('/delete/<int:task_id>')
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task["id"] != task_id]
    return redirect(url_for("index"))

@app.route('/toggle/<int:task_id>')
def toggle_done(task_id):
    for task in tasks:
        if task["id"] == task_id:
            task["done"] = not task["done"]
            break
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
