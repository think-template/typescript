import * as ThinkJS from './node_modules/thinkjs';
import './src/extend/controller';
import './src/extend/logic';
import './src/extend/context';
import './src/extend/think';
import './src/extend/service';
import './src/extend/application';
import './src/extend/request';
import './src/extend/response';
import 'think-i18n';
import 'think-model';
import 'think-session';
import 'think-cache';
import 'think-websocket';
import 'think-view';

export var think = ThinkJS.think;