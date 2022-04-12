#!/bin/bash

export PGUSER=oparc
export PGPASSWORD=oparc

sqitch revert oparc
sqitch deploy oparc