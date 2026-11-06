#!/bin/bash
# Ouvre l'application depuis ce Mac, et depuis l'iPhone s'il est sur le même Wi-Fi.
# Le serveur ne tourne que tant que cette fenêtre est ouverte : Ctrl+C pour l'arrêter.
cd "$(dirname "$0")"
PORT=8080
IP=$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || true)
echo "Sur ce Mac :      http://localhost:$PORT"
if [ -n "$IP" ]; then echo "Sur ton iPhone :  http://$IP:$PORT   (même Wi-Fi)"; fi
echo "Si macOS demande d'autoriser les connexions entrantes pour python3, accepte seulement si tu veux l'ouvrir depuis l'iPhone."
echo "Ctrl+C pour arrêter."
python3 -m http.server "$PORT" --bind 0.0.0.0
