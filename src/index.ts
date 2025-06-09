#!/usr/bin/env node
import { program } from "commander";

program
  .name("cursor2claude")
  .description("Sync Cursor .mdc rules into Claude Code’s CLAUDE.md (stub)")
  .version("0.0.0-wip.0");

program.parse(process.argv);
