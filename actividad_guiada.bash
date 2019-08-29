#!/bin/bash

git remote add origin git@github.com:DennisValdesFran/app-chuck.git

if [ $? -eq 0 ];then
	echo "El repo remoto se configuro de lujo."
	git remote -v
else
	echo $?
	git remote -v
fi
