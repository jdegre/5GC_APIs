#!/bin/sh
for i in ./*.yaml ;  do
    swagger-cli validate "$i"
    [ $? -eq 0 ] || exit 1
done

