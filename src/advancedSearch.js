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
      {
        op: OP_EQ,
        path: 'ns2:materials_common/commonForm',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/formTypeGroupList/formTypeGroup/formType',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/acousticalPropertyGroupList/acousticalPropertyGroup/acousticalPropertyType',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/durabilityPropertyGroupList/durabilityPropertyGroup/durabilityPropertyType',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/electricalPropertyGroupList/electricalPropertyGroup/electricalPropertyType',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/hygrothermalPropertyGroupList/hygrothermalPropertyGroup/hygrothermalPropertyType',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/mechanicalPropertyGroupList/mechanicalPropertyGroup/mechanicalPropertyType',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/opticalPropertyGroupList/opticalPropertyGroup/opticalPropertyType',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/sensorialPropertyGroupList/sensorialPropertyGroup/sensorialPropertyType',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/smartMaterialPropertyGroupList/smartMaterialPropertyGroup/smartMaterialPropertyType',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/additionalPropertyGroupList/additionalPropertyGroup/additionalPropertyType',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/recycledContentGroupList/recycledContentGroup/recycledContentQualifier',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/lifecycleComponentGroupList/lifecycleComponentGroup/lifecycleComponent',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/certificationCreditGroupList/certificationCreditGroup/certificationProgram',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/castingProcesses/castingProcess',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/joiningProcesses/joiningProcess',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/moldingProcesses/moldingProcess',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/surfacingProcesses/surfacingProcess',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/deformingProcesses/deformingProcess',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/machiningProcesses/machiningProcess',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/rapidPrototypingProcesses/rapidPrototypingProcess',
      },
      {
        op: OP_EQ,
        path: 'ns2:materials_common/additionalProcessGroupList/additionalProcessGroup/additionalProcess',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
