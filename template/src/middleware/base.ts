import * as Think from 'thinkjs';
export default (options: Object, app: Think.Application) => {
  return (ctx: Think.Context, next: Function) => {
    return next();
  };
};
