export default {
  serviceName: 'Materials',
  servicePath: 'materialauthorities',
  serviceType: 'authority',

  objectName: 'Materialitem',
  documentName: 'materials',

  quickAddData: values => ({
    document: {
      'ns2:materials_common': {
        '@xmlns:ns2': 'http://collectionspace.org/services/material',
        materialTermGroupList: {
          materialTermGroup: [
            {
              termDisplayName: values.displayName,
            },
          ],
        },
      },
    },
  }),
};
