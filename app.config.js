export default ({ config }) => ({
  ...config,
  name: getAppName(),
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
    versionCode: 1
  },
});

const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';
const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.brel.PrintExpress.dev';
  }

  if (IS_PREVIEW) {
    return 'com.brel.PrintExpress.preview';
  }

  return 'com.brel.PrintExpress';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'PrintExpress (Dev)';
  }

  if (IS_PREVIEW) {
    return 'PrintExpress (Preview)';
  }

  return 'PrintExpress: Impression Express';
};
