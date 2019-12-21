import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Field
        name="relation-list-item"
        subpath="rel:relations-common-list"
        showChildren={false}
        showSiblings={false}
      />

      <Row>
        <Field
          name="materialCompositionFamilyName"
          subpath={['ns2:materials_common', 'materialCompositionGroupList', 'materialCompositionGroup', 0]}
        />

        <Field
          name="materialCompositionClassName"
          subpath={['ns2:materials_common', 'materialCompositionGroupList', 'materialCompositionGroup', 0]}
        />

        <Field
          name="materialCompositionGenericName"
          subpath={['ns2:materials_common', 'materialCompositionGroupList', 'materialCompositionGroup', 0]}
        />
      </Row>

      <Field
        name="0"
        repeating={false}
        subpath={['ns2:materials_common', 'materialProductionOrganizationGroupList', 'materialProductionOrganizationGroup']}
        tabular={false}
      >
        <Field name="materialProductionOrganization" label={null} />
      </Field>
    </Field>
  );
};

export default (configContext) => ({
  disabled: true,
  messages: defineMessages({
    name: {
      id: 'form.material.mini.name',
      defaultMessage: 'Mini Template',
    },
  }),
  template: template(configContext),
});
