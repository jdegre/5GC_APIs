#!/bin/sh
for i in ./*.yaml ;  do
    swagger-cli validate "$i"
done

