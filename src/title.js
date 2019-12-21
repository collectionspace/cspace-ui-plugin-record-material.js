export default (configContext) => (data) => {
  const {
    deepGet,
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'materials_common');

  if (!common) {
    return '';
  }

  const displayName = deepGet(common, ['materialTermGroupList', 'materialTermGroup', 0, 'termDisplayName']);

  return displayName;
};
