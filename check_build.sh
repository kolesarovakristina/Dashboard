#!/usr/bin/env bash

################################################################################################
# Script for checking if project is in good condition.
# It will check javascript dependencies, syntax errors, etc.
# Dev guys: run this script before each commit for sure that your changes don't break project.
#
# Author: Jozef Orenic, 2018
################################################################################################

#  constant part!
RED='\033[1;31m'
BLUE='\033[1;34m'
GREEN='\033[1;32m'
NC='\033[0m' # No Color

printf "${BLUE}>>>>> PROJECT CHECKING...IF SOMETHING GOES WRONG, FIX IT BEFORE COMMIT AND PUSH TO BRANCH <<<<<\n${NC}" &&

# sequence of commands to perform project test
# comment/uncomment lines which are needed

printf "${BLUE}1/5 Cleaning project... \n${NC}" &&
rm -rf node_modules &&

printf "${BLUE}2/5 Installing dependencies... \n${NC}" &&
npm install &&

printf "${BLUE}3/5 Linting... \n${NC}" &&
#npm run lint &&

#printf "${BLUE}4/5 Unit tests... \n${NC}" &&
#npm test &&

printf "${BLUE}5/5 Building... \n${NC}" &&
npm run build &&

printf "${GREEN}>>>>> CHECKING SUCCESSFUL <<<<<\n${NC}" ||
(printf "${RED}>>>>> FAILED, PLEASE FIX ERRORS <<<<<\n${NC}" && exit -1)
