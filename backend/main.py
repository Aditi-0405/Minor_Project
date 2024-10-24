from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np
import sympy as smp
import random

app = Flask(__name__)
CORS(app)

@app.route("/api/optimize", methods=['GET', 'POST'])
def optimize():
    x_1, x_2, η = smp.symbols('x_1 x_2 η', real=True)
    f = (smp.sin(x_1) * smp.sin(x_2) * smp.exp(-((x_1**2 + x_2**2) / 2)))

    dfdx_1 = smp.diff(f, x_1) 
    dfdx_2 = smp.diff(f, x_2) 

    Choose_Algorithm = "steepest gradient descent"  

    iterations = 100 
    for i in range(iterations):
        arr_fplot = np.array([])
        arr_Aplot = np.array([])
        arr_xplot = np.array([])

        if Choose_Algorithm == "steepest gradient descent":
            iteration = 0
            Stop = 0.01
            Amp_df = 0.1
            
            previous = np.array([[random.uniform(-10, 10), random.uniform(-10, 10)]])
            print("Initial Point equal", previous)

            while Amp_df > Stop:
                iteration += 1
                f_Value = float(f.subs({x_1: previous[0][0], x_2: previous[0][1]}))
                
                dx_1 = float(dfdx_1.subs({x_1: previous[0][0], x_2: previous[0][1]}))
                dx_2 = float(dfdx_2.subs({x_1: previous[0][0], x_2: previous[0][1]}))
                

                g_df = np.array([[dx_1], [dx_2]])
                Amp_df = np.linalg.norm(g_df)


                if iteration == 1:
                    η = 0.01


                current = previous - (η * g_df.T)

                arr_fplot = np.append(arr_fplot, f_Value)
                arr_Aplot = np.append(arr_Aplot, Amp_df)
                arr_xplot = np.append(arr_xplot, previous[0])
                previous = current

                print(f"Iteration: {iteration}, Current Point: {current}, Function Value: {f_Value}, Gradient Magnitude: {Amp_df}")

        else:
            print("You should choose an algorithm based on previous algorithms")

    results = {
        'final_point': current.tolist(),
        'final_value': f_Value,
        'iterations': iteration,
    }
    
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True, port=8080)
