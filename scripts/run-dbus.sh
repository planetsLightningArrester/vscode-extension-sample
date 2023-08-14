#!/bin/bash
XDG_RUNTIME_DIR="/run/user/$(id -u)"
export XDG_RUNTIME_DIR
# only required once
if [[ ! -d "${XDG_RUNTIME_DIR}" ]]; then
  sudo mkdir -p "$XDG_RUNTIME_DIR" 
  sudo chmod 700 "$XDG_RUNTIME_DIR"
  sudo chown "$(id -un)":"$(id -gn)" "$XDG_RUNTIME_DIR"
fi
# only required once
if [[ ! -f "/run/dbus/system_bus_socket" ]]; then
  sudo mkdir -p /run/dbus
  sudo ln -sf "$XDG_RUNTIME_DIR/bus" /run/dbus/system_bus_socket
fi
export DBUS_SESSION_BUS_ADDRESS=unix:path="$XDG_RUNTIME_DIR"/bus
dbus-daemon --session --address="$DBUS_SESSION_BUS_ADDRESS" --nofork --nopidfile --syslog-only &
