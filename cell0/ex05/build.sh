#!/bin/bash

if [ $# -lt 1 ]
then
	echo 'No arguments supplied'
else
	for i in $@
	do
		mkdir ex"$i"
	done
fi
