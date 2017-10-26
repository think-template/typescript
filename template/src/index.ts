import * as ThinkJS from '../node_modules/thinkjs';
import './extend/controller';
import './extend/logic';
import './extend/context';
import './extend/think';
import './extend/service';
import './extend/application';
import './extend/request';
import './extend/response';
import 'think-i18n';
import 'think-model';
import 'think-session';
import 'think-cache';
import 'think-websocket';
import 'think-view';

export const think = ThinkJS.think;