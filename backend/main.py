from flask import Flask, jsonify, request
from flask_cors import CORS
import numpy as np
import sympy as smp
import random
from pymoo.problems import get_problem
from pymoo.algorithms.moo.nsga2 import NSGA2
from pymoo.optimize import minimize
from pymoo.util.plotting import plot

app = Flask(__name__)
CORS(app)

def cross_in_tray(x_1, x_2):
    return smp.sin(x_1) * smp.sin(x_2) * smp.exp(-((x_1**2 + x_2**2) / 2))

def holder_table(x_1, x_2):
    return -1 * (np.abs(np.sin(x_1) * np.cos(x_2) * np.exp(np.abs(1 - (x_1**2 + x_2**2)**0.5))))

def levy_function_n13(x_1, x_2):
    term1 = (smp.sin(3 * np.pi * x_1))**2
    term2 = ((x_1 - 1)**2) * (1 + (smp.sin(3 * np.pi * x_2))**2)
    term3 = ((x_2 - 1)**2) * (1 + (smp.sin(2 * np.pi * x_2))**2)
    return term1 + term2 + term3

function_map = {
    'cross_in_tray': cross_in_tray,
    'holder_table': holder_table,
    'levy_n13': levy_function_n13
}

@app.route("/api/optimize/gradient_descent", methods=['POST'])
def optimize_gradient_descent():
    return optimize('gradient_descent')

@app.route("/api/optimize/steepest_gradient", methods=['POST'])
def optimize_steepest_gradient():
    return optimize('steepest_gradient')

@app.route("/api/optimize/pso", methods=['POST'])
def optimize_pso():
    return optimize('pso')

@app.route("/api/optimize/simulated_annealing", methods=['POST'])
def optimize_simulated_annealing():
    return optimize('simulated_annealing')

@app.route("/api/optimize/newton_raphson", methods=['POST'])
def optimize_newton_raphson():
    return optimize('newton_raphson')

def parse_user_function(function_str):
    try:
        x_1, x_2 = smp.symbols('x_1 x_2')
        user_function = smp.sympify(function_str)
        return user_function, x_1, x_2
    except Exception as e:
        raise ValueError(f"Error parsing function: {str(e)}")

@app.route("/api/optimize/custom_function", methods=['POST'])
def optimize_custom_function():
    try:
        data = request.get_json()
        function_str = data.get('function', None)

        if not function_str:
            return jsonify({'error': 'Function string is required'}), 400

        f, x_1, x_2 = parse_user_function(function_str)
        dfdx_1 = smp.diff(f, x_1)
        dfdx_2 = smp.diff(f, x_2)

        iterations = 100
        results = []
        current = np.array([[random.uniform(-10, 10), random.uniform(-10, 10)]])

        iteration = 0
        Stop = 0.01
        Amp_df = 0.1
        η = 0.01

        while Amp_df > Stop and iteration < iterations:
            iteration += 1
            f_Value = float(f.subs({x_1: current[0][0], x_2: current[0][1]}))

            dx_1 = float(dfdx_1.subs({x_1: current[0][0], x_2: current[0][1]}))
            dx_2 = float(dfdx_2.subs({x_1: current[0][0], x_2: current[0][1]}))

            g_df = np.array([[dx_1], [dx_2]])
            Amp_df = np.linalg.norm(g_df)

            current = current - (η * g_df.T)

            results.append({
                'iteration': iteration,
                'current_point': current.tolist(),
                'function_value': f_Value,
                'gradient_magnitude': Amp_df
            })

        final_value = float(f.subs({x_1: current[0][0], x_2: current[0][1]}))
        final_point = current.tolist()

        results_summary = {
            'final_point': final_point,
            'final_value': final_value,
            'iterations': len(results),
        }

        return jsonify(results_summary)

    except ValueError as e:
        return jsonify({'error': str(e)}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def optimize(method):
    function_name = request.args.get('function', default='cross_in_tray', type=str)

    if function_name not in function_map:
        return jsonify({'error': 'Function not found!'}), 400

    x_1, x_2 = smp.symbols('x_1 x_2', real=True)

    f = function_map[function_name](x_1, x_2)
    dfdx_1 = smp.diff(f, x_1)
    dfdx_2 = smp.diff(f, x_2)

    hessian = smp.Matrix([[smp.diff(dfdx_1, x_1), smp.diff(dfdx_1, x_2)],
                           [smp.diff(dfdx_2, x_1), smp.diff(dfdx_2, x_2)]])
    
    iterations = 100
    results = []
    current = np.array([[random.uniform(-10, 10), random.uniform(-10, 10)]])
    
    try:
        if method == 'gradient_descent':
            iteration = 0
            Stop = 0.01
            Amp_df = 0.1

            while Amp_df > Stop and iteration < iterations:
                iteration += 1
                f_Value = float(f.subs({x_1: current[0][0], x_2: current[0][1]}))

                dx_1 = float(dfdx_1.subs({x_1: current[0][0], x_2: current[0][1]}))
                dx_2 = float(dfdx_2.subs({x_1: current[0][0], x_2: current[0][1]}))

                g_df = np.array([[dx_1], [dx_2]])
                Amp_df = np.linalg.norm(g_df)

                η = 0.01
                current = current - (η * g_df.T)

                results.append({
                    'iteration': iteration,
                    'current_point': current.tolist(),
                    'function_value': f_Value,
                    'gradient_magnitude': Amp_df
                })

        elif method == 'steepest_gradient':
            iteration = 0
            Stop = 0.01
            Amp_df = 0.1
            η = 0.01  

            while Amp_df > Stop and iteration < iterations:
                iteration += 1
                f_Value = float(f.subs({x_1: current[0][0], x_2: current[0][1]}))

                dx_1 = float(dfdx_1.subs({x_1: current[0][0], x_2: current[0][1]}))
                dx_2 = float(dfdx_2.subs({x_1: current[0][0], x_2: current[0][1]}))

                g_df = np.array([[dx_1], [dx_2]])
                Amp_df = np.linalg.norm(g_df)

                current = current - (η * g_df.T)

                results.append({
                    'iteration': iteration,
                    'current_point': current.tolist(),
                    'function_value': f_Value,
                    'gradient_magnitude': Amp_df
                })

        elif method == 'pso':
            swarm_size = 30
            inertia = 0.5
            cognitive_coeff = 1.5
            social_coeff = 1.5
            max_iterations = iterations

            particles = np.random.uniform(-10, 10, (swarm_size, 2))
            velocities = np.random.uniform(-1, 1, (swarm_size, 2))
            personal_best_positions = particles.copy()
            personal_best_values = np.full(swarm_size, np.inf)

            for iteration in range(max_iterations):
                for i in range(swarm_size):
                    f_Value = float(f.subs({x_1: particles[i][0], x_2: particles[i][1]}))

                    if f_Value < personal_best_values[i]:
                        personal_best_values[i] = f_Value
                        personal_best_positions[i] = particles[i]

                for i in range(swarm_size):
                    r1 = np.random.rand(2)
                    r2 = np.random.rand(2)
                    velocities[i] = (inertia * velocities[i] +
                                     cognitive_coeff * r1 * (personal_best_positions[i] - particles[i]) +
                                     social_coeff * r2 * (personal_best_positions[np.argmin(personal_best_values)] - particles[i]))
                    particles[i] += velocities[i]

                best_index = np.argmin(personal_best_values)
                results.append({
                    'iteration': iteration,
                    'best_position': personal_best_positions[best_index].tolist(),
                    'best_value': personal_best_values[best_index]
                })

        elif method == 'simulated_annealing':
            def objective_function(x):
                return float(f.subs({x_1: x[0], x_2: x[1]}))

            temp = 1000
            cooling_rate = 0.95
            current_solution = np.array([random.uniform(-10, 10), random.uniform(-10, 10)])
            current_value = objective_function(current_solution)

            while temp > 1:
                new_solution = current_solution + np.random.normal(0, 1, 2)
                new_value = objective_function(new_solution)

                if new_value < current_value or np.random.rand() < np.exp((current_value - new_value) / temp):
                    current_solution = new_solution
                    current_value = new_value

                results.append({
                    'current_solution': current_solution.tolist(),
                    'current_value': current_value,
                    'temperature': temp
                })

                temp *= cooling_rate

        final_value = float(f.subs({x_1: current[0][0], x_2: current[0][1]}))
        final_point = current.tolist()

        results_summary = {
            'final_point': final_point,
            'final_value': final_value,
            'iterations': len(results),
        }

        return jsonify(results_summary)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route("/api/optimize/moop/zdt1", methods=['POST'])
def optimize_moop_zdt1():
    return optimize_moop("zdt1")

@app.route("/api/optimize/moop/zdt2", methods=['POST'])
def optimize_moop_zdt2():
    return optimize_moop("zdt2")

@app.route("/api/optimize/moop/zdt3", methods=['POST'])
def optimize_moop_zdt3():
    return optimize_moop("zdt3")

@app.route("/api/optimize/moop/zdt4", methods=['POST'])
def optimize_moop_zdt4():
    return optimize_moop("zdt4")

def optimize_moop(problem_name):
    try:
        problem = get_problem(problem_name)

        algorithm = NSGA2(pop_size=100)

        res = minimize(problem, algorithm, ('n_gen', 100), verbose=True)

        plot(problem.pareto_front(), no_fill=True)

        return jsonify({
            'pareto_front': res.F.tolist(),
            'optimum_points': res.X.tolist()
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8080)
