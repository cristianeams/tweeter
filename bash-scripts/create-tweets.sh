#!/bin/bash

curl --header "Content-Type: application/x-www-form-urlencoded; charset=UTF-8" -d "text=<script>alert(\"$1\");</script>" --request POST localhost:8080/tweets

curl -X GET -i localhost:8080/