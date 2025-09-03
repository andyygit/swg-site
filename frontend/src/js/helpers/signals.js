let subscriber = null;

const createSignal = (value) => {
  let _value = value;
  const _subscribers = new Set();

  const unlink = (dep) => {
    _subscribers.delete(dep);
  };

  const read = () => {
    if (subscriber && !_subscribers.has(subscriber)) {
      _subscribers.add(subscriber);
      subscriber.link(unlink);
    }
    return _value;
  };

  const write = (valueOrFn) => {
    const newValue =
      typeof valueOrFn === 'function' ? valueOrFn(_value) : valueOrFn;
    if (newValue === _value) return;
    _value = newValue;
    for (const subscriber of [..._subscribers]) {
      subscriber.notify();
    }
  };

  return [read, write];
};

const createEffect = (cb) => {
  let _externalCleanup; // defined explicitly by user
  let _unlinkSubscriptions = new Set(); // track active signals (to unlink on re-run)

  const link = (unlink) => {
    _unlinkSubscriptions.add(unlink);
  };

  const execute = () => {
    dispose();
    subscriber = effectInstance;
    _externalCleanup = cb();
    subscriber = null;
  };

  const effectInstance = { notify: execute, link };

  const dispose = () => {
    for (const unlink of _unlinkSubscriptions) {
      unlink(effectInstance);
    }
    _unlinkSubscriptions.clear();

    if (typeof _externalCleanup === 'function') {
      _externalCleanup();
    }
  };

  execute();

  return dispose;
};

const createDerivedSignal = (cb) => {
  const [read, write] = createSignal();
  createEffect(() => write(cb()));
  return read;
};

export { createSignal, createEffect, createDerivedSignal };
