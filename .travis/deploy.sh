#!/bin/bash

git config --global push.default matching
git remote add deploy ssh://$DEPLOY_USER@$IP:$PORT$DEPLOY_DIR
git push deploy master
