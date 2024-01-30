#!make
SHELL := env PATH=./node_modules/.bin:$(PATH) /bin/bash -O extglob

.SILENT:
.PHONY: install build

default: build

node_modules:; npm install
install:; npm install
i: install

test: node_modules
	vitest

up: node_modules
	vite

build: node_modules
	vite build --base=/serranito-MenuIdiomas/
	copy docs/index.html docs/404.html

preview:
	vite preview