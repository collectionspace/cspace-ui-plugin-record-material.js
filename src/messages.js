import { defineMessages } from 'react-intl';

export default {
  record: defineMessages({
    name: {
      id: 'record.material.name',
      description: 'The name of the record type.',
      defaultMessage: 'Material',
    },
    collectionName: {
      id: 'record.material.collectionName',
      description: 'The name of a collection of records of the type.',
      defaultMessage: 'Materials',
    },
  }),
  panel: defineMessages({
    info: {
      id: 'panel.material.info',
      defaultMessage: 'Material Information',
    },
    form: {
      id: 'panel.material.form',
      defaultMessage: 'Form',
    },
    property: {
      id: 'panel.material.property',
      defaultMessage: 'Properties',
    },
    ecology: {
      id: 'panel.material.ecology',
      defaultMessage: 'Material Ecology',
    },
    process: {
      id: 'panel.material.process',
      defaultMessage: 'Process',
    },
    hierarchy: {
      id: 'panel.material.hierarchy',
      defaultMessage: 'Hierarchy',
    },
  }),
  inputTable: defineMessages({
    termSource: {
      id: 'inputTable.material.termSource',
      defaultMessage: 'Source',
    },
  }),
};
