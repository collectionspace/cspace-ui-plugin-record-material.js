import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="materialTermGroupList">
          <Field name="materialTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="termFlag" />
                <Field name="historicalStatus" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Field name="materialCompositionGroupList">
          <Field name="materialCompositionGroup">
            <Field name="materialCompositionFamilyName" />
            <Field name="materialCompositionClassName" />
            <Field name="materialCompositionGenericName" />
          </Field>
        </Field>

        <Row>
          <Field name="description" />

          <Col>
            <Field name="typicalUses">
              <Field name="typicalUse" />
            </Field>
          </Col>
        </Row>

        <InputTable name="discontinued">
          <Field name="discontinued" />
          <Field name="discontinuedBy" />
          <Field name="discontinuedYear" />
        </InputTable>

        <Row>
          <Field name="productionYear" />
          <Field name="productionNote" />
        </Row>

        <Field name="materialProductionOrganizationGroupList">
          <Field name="materialProductionOrganizationGroup">
            <Field name="materialProductionOrganization" />
            <Field name="materialProductionOrganizationRole" />
          </Field>
        </Field>

        <Field name="materialProductionPersonGroupList">
          <Field name="materialProductionPersonGroup">
            <Field name="materialProductionPerson" />
            <Field name="materialProductionPersonRole" />
          </Field>
        </Field>

        <Field name="materialProductionPlaceGroupList">
          <Field name="materialProductionPlaceGroup">
            <Field name="materialProductionPlace" />
            <Field name="materialProductionPlaceRole" />
          </Field>
        </Field>

        <Field name="featuredApplicationGroupList">
          <Field name="featuredApplicationGroup">
            <Field name="featuredApplication" />
            <Field name="featuredApplicationNote" />
          </Field>
        </Field>

        <Field name="materialCitationGroupList">
          <Field name="materialCitationGroup">
            <Field name="materialCitationSource" />
            <Field name="materialCitationSourceDetail" />
          </Field>
        </Field>

        <Field name="externalUrlGroupList">
          <Field name="externalUrlGroup">
            <Field name="externalUrl" />
            <Field name="externalUrlNote" />
          </Field>
        </Field>

        <Field name="additionalResourceGroupList">
          <Field name="additionalResourceGroup">
            <Field name="additionalResource" />
            <Field name="additionalResourceNote" />
          </Field>
        </Field>

        <Field name="materialTermAttributionContributingGroupList">
          <Field name="materialTermAttributionContributingGroup">
            <Field name="materialTermAttributionContributingOrganization" />
            <Field name="materialTermAttributionContributingPerson" />
            <Field name="materialTermAttributionContributingDate" />
          </Field>
        </Field>

        <Field name="materialTermAttributionEditingGroupList">
          <Field name="materialTermAttributionEditingGroup">
            <Field name="materialTermAttributionEditingOrganization" />
            <Field name="materialTermAttributionEditingPerson" />
            <Field name="materialTermAttributionEditingNote" />
            <Field name="materialTermAttributionEditingDate" />
          </Field>
        </Field>
      </Panel>

      <Panel name="form" collapsible collapsed>
        <Row>
          <Field name="commonForm" />

          <Col>
            <Field name="formTypeGroupList">
              <Field name="formTypeGroup">
                <Field name="formType" label="" embedded />
              </Field>
            </Field>
          </Col>
        </Row>

        <Field name="typicalSizeGroupList">
          <Field name="typicalSizeGroup">
            <Panel>
              <Row>
                <Field name="typicalSize" />
                <Col />
              </Row>

              <Field name="typicalSizeDimensionGroupList">
                <Field name="typicalSizeDimensionGroup">
                  <Field name="dimension" />
                  <Field name="measurementUnit" />
                  <Field name="value" />
                </Field>
              </Field>
            </Panel>
          </Field>
        </Field>

        <Field name="formNote" />
      </Panel>

      <Panel name="property" collapsible collapsed>
        <Field name="acousticalPropertyGroupList">
          <Field name="acousticalPropertyGroup">
            <Field name="acousticalPropertyType" />
            <Field name="acousticalPropertyNote" />
          </Field>
        </Field>

        <Field name="durabilityPropertyGroupList">
          <Field name="durabilityPropertyGroup">
            <Field name="durabilityPropertyType" />
            <Field name="durabilityPropertyNote" />
          </Field>
        </Field>

        <Field name="electricalPropertyGroupList">
          <Field name="electricalPropertyGroup">
            <Field name="electricalPropertyType" />
            <Field name="electricalPropertyNote" />
          </Field>
        </Field>

        <Field name="hygrothermalPropertyGroupList">
          <Field name="hygrothermalPropertyGroup">
            <Field name="hygrothermalPropertyType" />
            <Field name="hygrothermalPropertyNote" />
          </Field>
        </Field>

        <Field name="mechanicalPropertyGroupList">
          <Field name="mechanicalPropertyGroup">
            <Field name="mechanicalPropertyType" />
            <Field name="mechanicalPropertyNote" />
          </Field>
        </Field>

        <Field name="opticalPropertyGroupList">
          <Field name="opticalPropertyGroup">
            <Field name="opticalPropertyType" />
            <Field name="opticalPropertyNote" />
          </Field>
        </Field>

        <Field name="sensorialPropertyGroupList">
          <Field name="sensorialPropertyGroup">
            <Field name="sensorialPropertyType" />
            <Field name="sensorialPropertyNote" />
          </Field>
        </Field>

        <Field name="smartMaterialPropertyGroupList">
          <Field name="smartMaterialPropertyGroup">
            <Field name="smartMaterialPropertyType" />
            <Field name="smartMaterialPropertyNote" />
          </Field>
        </Field>

        <Field name="additionalPropertyGroupList">
          <Field name="additionalPropertyGroup">
            <Field name="additionalPropertyType" />
            <Field name="additionalPropertyNote" />
          </Field>
        </Field>

        <Field name="propertyNote" />
      </Panel>

      <Panel name="ecology" collapsible collapsed>
        <Field name="recycledContentGroupList">
          <Field name="recycledContentGroup">
            <Field name="recycledContent" />
            <Field name="recycledContentHigh" />
            <Field name="recycledContentQualifier" />
          </Field>
        </Field>

        <Field name="lifecycleComponentGroupList">
          <Field name="lifecycleComponentGroup">
            <Field name="lifecycleComponent" />
            <Field name="lifecycleComponentNote" />
          </Field>
        </Field>

        <Field name="embodiedEnergyGroupList">
          <Field name="embodiedEnergyGroup">
            <Field name="embodiedEnergyValue" />
            <Field name="embodiedEnergyValueHigh" />
            <Field name="embodiedEnergyUnit" />
            <Field name="embodiedEnergyNote" />
          </Field>
        </Field>

        <Field name="certificationCreditGroupList">
          <Field name="certificationCreditGroup">
            <Field name="certificationProgram" />
            <Field name="certificationCreditNote" />
          </Field>
        </Field>

        <Field name="ecologyNote" />
      </Panel>

      <Panel name="process" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="castingProcesses">
              <Field name="castingProcess" />
            </Field>

            <Field name="joiningProcesses">
              <Field name="joiningProcess" />
            </Field>

            <Field name="moldingProcesses">
              <Field name="moldingProcess" />
            </Field>

            <Field name="surfacingProcesses">
              <Field name="surfacingProcess" />
            </Field>
          </Col>

          <Col>
            <Field name="deformingProcesses">
              <Field name="deformingProcess" />
            </Field>

            <Field name="machiningProcesses">
              <Field name="machiningProcess" />
            </Field>

            <Field name="rapidPrototypingProcesses">
              <Field name="rapidPrototypingProcess" />
            </Field>
          </Col>
        </Cols>

        <Field name="additionalProcessGroupList">
          <Field name="additionalProcessGroup">
            <Field name="additionalProcess" />
            <Field name="additionalProcessNote" />
          </Field>
        </Field>

        <Field name="processNote" />
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.material.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
