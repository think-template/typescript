export default (options: object, app: ThinkApplication) => {
  return (ctx: ThinkContext, next: () => void) => {
    return next();
  };
};
