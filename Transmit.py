import requests
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
def get_power_grid_data():
    # Power grid data from API
    url = "https://greenhack.mymi.cz/api/v1/data/power-grid"
    headers = {
        "Authorization": "MAJIS"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception("Error getting power grid data: {}".format(response.status_code))

def get_sensor_data():
    url = "https://greenhack.mymi.cz/api/v1/data/sensors"
    headers = {
        "Authorization": "MAJIS"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception("Error getting sensor data: {}".format(response.status_code))

def observe_power_grid_movements():
    """Observes the movements in the power grid."""
    while True:
        data = get_power_grid_data()
        for movement in data["movements"]:
            print("Movement detected: {} at {}.".format(movement["type"], movement["timestamp"]))
        time.sleep(1)

def predict_future_movements():
    """Predicts the future movements in the power grid."""
    # Historical Data for LinReg
    data = get_power_grid_data()
    movements = data["movements"]

    df = pd.DataFrame(movements)
    df["timestamp"] = pd.to_datetime(df["timestamp"])

    # Meter data
    sensor_data = get_sensor_data()
    df["power_movements"] = sensor_data["power_movements"]

    # Plot the historical data
    plt.plot(df["timestamp"], df["power_usage"])
    plt.xlabel("Time")
    plt.ylabel("Power usage")
    plt.show()

    # LinReg Model
    model = LinearRegression()
    model.fit(df["timestamp"].values.reshape(-1, 1), df["power_usage"].values)

    # Make predictions
    future_timestamps = np.arange(df["timestamp"].max() + 1, df["timestamp"].max() + 60)
    future_power_usage = model.predict(future_timestamps.reshape(-1, 1))

    # Plot predictions
    plt.plot(future_timestamps, future_power_usage)
    plt.xlabel("Time")
    plt.ylabel("Power usage")
    plt.show()

if __name__ == "__main__":
    observe_power_grid_movements()
    predict_future_movements()
