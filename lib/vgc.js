#! /usr/bin/env node
import commandLineArgs from 'command-line-args';
import swig from 'swig';
import TemplateFactory from './TemplateFactory';
import config from './config/config';
import cliOptions from './config/cli-options';
import swigFilters from './config/swig-filters';
const cli = commandLineArgs(cliOptions);

swigFilters(swig);
const options = cli.parse().options;

/* ===============
 Ask for help
 =============== */
if (options.help) {
  console.warn('\x1b[33m%s\x1b[0m', 'cli help documents are still in progress, meanwhile please refer to readme file');
}

/* ===============
 Set the file extensions
 =============== */
if (options.html || options.style || options.all || options.script || options.test || options.path) {
  let configData = config.getConfigFile();
  configData.filesType.html = options.html ? options.html : configData.filesType.html;
  configData.filesType.style = options.style ? options.style : configData.filesType.style;
  configData.filesType.script = options.script ? options.script : configData.filesType.script;
  configData.filesType.actions = options.script ? options.script : configData.filesType.actions;
  configData.filesType.mutations = options.script ? options.script : configData.filesType.mutations;
  configData.filesType.getters = options.script ? options.script : configData.filesType.getters;
  configData.filesType.store = options.script ? options.script : configData.filesType.store;
  configData.filesType.test = options.script ? options.script : configData.filesType.test;
  configData.dest = options.dest ? options.dest : configData.dest
  configData.classExtension = options.classExtension ? options.classExtension : configData.classExtension

  config.updateConfigFile(configData);
}

TemplateFactory.createTemplateFor(options);
