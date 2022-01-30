from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/todo")
def get_all():
    return jsonify("hello")


@app.route("/todo", methods=['POST'])
def post_all():
    # to-do send item to the database
    print(request.get_json())
    return '', 204
