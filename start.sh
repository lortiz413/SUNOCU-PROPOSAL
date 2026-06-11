#!/bin/bash

# Script para iniciar el servidor local y ver el dashboard de diseño
echo "================================================================"
echo "☕ Iniciando Servidor de Desarrollo para el Display de Café"
echo "================================================================"
echo "Puerto local: 8000"
echo "Abriendo http://localhost:8000 en tu navegador por defecto..."
echo "================================================================"

# Abre la URL en macOS
open "http://localhost:8000"

# Ejecuta el servidor HTTP de Python integrado
python3 -m http.server 8000
