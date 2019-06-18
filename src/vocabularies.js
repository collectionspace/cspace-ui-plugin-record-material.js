import { defineMessages } from 'react-intl';

export default {
  all: {
    messages: defineMessages({
      name: {
        id: 'vocab.material.all.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'All',
      },
      collectionName: {
        id: 'vocab.material.all.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'All Materials',
      },
      itemName: {
        id: 'vocab.material.all.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Material',
      },
    }),
    serviceConfig: {
      servicePath: '_ALL_',
    },
    type: 'all',
  },
  local: {
    messages: defineMessages({
      name: {
        id: 'vocab.material.local.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Local',
      },
      collectionName: {
        id: 'vocab.material.local.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Local Materials',
      },
      itemName: {
        id: 'vocab.material.local.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Local Material',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(material)',
    },
  },
};
