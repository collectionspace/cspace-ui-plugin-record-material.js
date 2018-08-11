import { defineMessages } from 'react-intl';

export default {
  materialTermStatuses: {
    values: [
      'provisional',
      'under review',
      'accepted',
      'rejected',
    ],
    messages: defineMessages({
      provisional: {
        id: 'option.materialTermStatuses.provisional',
        defaultMessage: 'provisional',
      },
      'under review': {
        id: 'option.materialTermStatuses.under review',
        defaultMessage: 'under review',
      },
      accepted: {
        id: 'option.materialTermStatuses.accepted',
        defaultMessage: 'accepted',
      },
      rejected: {
        id: 'option.materialTermStatuses.rejected',
        defaultMessage: 'rejected',
      },
    }),
  },
  materialTermTypes: {
    values: [
      'descriptor',
      'alternate descriptor',
      'used for term',
    ],
    messages: defineMessages({
      descriptor: {
        id: 'option.materialTermTypes.descriptor',
        defaultMessage: 'descriptor',
      },
      'alternate descriptor': {
        id: 'option.materialTermTypes.alternate descriptor',
        defaultMessage: 'alternate descriptor',
      },
      'used for term': {
        id: 'option.materialTermTypes.used for term',
        defaultMessage: 'used for term',
      },
    }),
  },
  materialHistoricalStatuses: {
    values: [
      'current',
      'historical',
      'both',
      'unknown',
    ],
    messages: defineMessages({
      current: {
        id: 'option.materialHistoricalStatuses.current',
        defaultMessage: 'current',
      },
      historical: {
        id: 'option.materialHistoricalStatuses.historical',
        defaultMessage: 'historical',
      },
      both: {
        id: 'option.materialHistoricalStatuses.both',
        defaultMessage: 'both',
      },
      unknown: {
        id: 'option.materialHistoricalStatuses.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
};
