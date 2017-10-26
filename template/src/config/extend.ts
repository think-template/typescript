import view from "think-view";
import model from "think-model";
import cache from "think-cache";
import session from "think-session";
import { think } from 'thinkjs';

module.exports = [
  view, // make application support view
  model(think.app),
  cache,
  session
];
