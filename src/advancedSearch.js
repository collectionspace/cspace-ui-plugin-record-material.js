export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:materials_common/materialTermGroupList/materialTermGroup/termDisplayName',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:materials_common/materialTermGroupList/materialTermGroup/termName',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/materialTermGroupList/materialTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/materialTermGroupList/materialTermGroup/termFlag',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/materialCompositionGroupList/materialCompositionGroup/materialCompositionFamilyName',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/materialCompositionGroupList/materialCompositionGroup/materialCompositionClassName',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/materialCompositionGroupList/materialCompositionGroup/materialCompositionGenericName',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/typicalUses/typicalUse',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/materialTermAttributionContributingGroupList/materialTermAttributionContributingGroup/materialTermAttributionContributingOrganization',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/materialTermAttributionContributingGroupList/materialTermAttributionContributingGroup/materialTermAttributionContributingPerson',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
