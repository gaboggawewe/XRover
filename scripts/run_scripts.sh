#!/bin/bash

# Start mqtt.py in a new tmux session
tmux new-session -d -s mqtt_session 'python3 mqtt.py'

# Start motor.py in another new tmux session
tmux new-session -d -s motor_session 'python3 motor.py'

echo "Both scripts are running in separate tmux sessions."
echo "Use 'tmux attach -t mqtt_session' to view mqtt.py output."
echo "Use 'tmux attach -t motor_session' to view motor.py output."