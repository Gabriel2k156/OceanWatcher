from flask import Flask, render_template, jsonify
import random


app = Flask(__name__)

@app.route("/")
def homepage():
    return render_template("index.html")

# Rota da API

@app.route('/api/status', methods = ['GET'])
def dados():
    dados = {
        'plastico': [round(random.uniform(12,20),1) for _ in range(6)],
        'metal': [round(random.uniform(10,18),2) for _ in range(6)],
        'cigarro': [round(random.uniform(12,14),3) for _ in range(6)] 
    }
    return jsonify(dados)


if __name__ == "__main__":
    app.run(debug=True)
