import * as Think from 'thinkjs';
export default (options: object, app: Think.Application) => {
  return (ctx: Think.Context, next: () => void) => {
    return next();
  };
};
