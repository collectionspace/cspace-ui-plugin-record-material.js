import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    HierarchyInput,
    OptionPickerInput,
    TextInput,
    TermPickerInput,
    URLInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
    DATA_TYPE_FLOAT,
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:materials_common',
          },
        },
      },
      'rel:relations-common-list': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/relation',
          },
        },
        'relation-list-item': {
          [config]: {
            view: {
              type: HierarchyInput,
              props: {
                messages: defineMessages({
                  parent: {
                    id: 'hierarchyInput.material.parent',
                    defaultMessage: 'Broader material',
                  },
                  children: {
                    id: 'hierarchyInput.material.children',
                    defaultMessage: 'Narrower materials',
                  },
                  siblings: {
                    id: 'hierarchyInput.material.siblings',
                    defaultMessage: 'Adjacent materials',
                  },
                }),
              },
            },
          },
        },
      },
      ...extensions.core.fields,
      'ns2:materials_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/material',
          },
        },
        csid: {
          [config]: {
            cloneable: false,
          },
        },
        inAuthority: {
          [config]: {
            cloneable: false,
          },
        },
        refName: {
          [config]: {
            cloneable: false,
          },
        },
        shortIdentifier: {
          [config]: {
            cloneable: false,
          },
        },
        materialTermGroupList: {
          [config]: {
            messages: defineMessages({
              required: {
                id: 'field.materials_common.materialTermGroupList.required',
                defaultMessage: 'At least one term display name is required. Please enter a value.',
              },
            }),
            required: true,
            view: {
              type: CompoundInput,
            },
          },
          materialTermGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.materialTermGroup.name',
                  defaultMessage: 'Term',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            termDisplayName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.termDisplayName.name',
                    defaultMessage: 'Display name',
                  },
                }),
                required: true,
                view: {
                  type: TextInput,
                },
              },
            },
            termName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.termName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.termType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'materialTermTypes',
                  },
                },
              },
            },
            termFlag: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.termFlag.fullName',
                    defaultMessage: 'Term flag',
                  },
                  name: {
                    id: 'field.materials_common.termFlag.name',
                    defaultMessage: 'Flag',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'materialtermflag',
                  },
                },
              },
            },
            historicalStatus: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.historicalStatus.name',
                    defaultMessage: 'Historical status',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'materialHistoricalStatuses',
                  },
                },
              },
            },
            termStatus: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.termStatus.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'materialTermStatuses',
                  },
                },
              },
            },
            termQualifier: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.termQualifier.name',
                    defaultMessage: 'Qualifier',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termLanguage: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.termLanguage.fullName',
                    defaultMessage: 'Term language',
                  },
                  name: {
                    id: 'field.materials_common.termLanguage.name',
                    defaultMessage: 'Language',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'languages',
                  },
                },
              },
            },
            termPrefForLang: {
              [config]: {
                dataType: DATA_TYPE_BOOL,
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.termPrefForLang.name',
                    defaultMessage: 'Preferred for lang',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            },
            termSource: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.termSource.name',
                    defaultMessage: 'Name',
                  },
                  fullName: {
                    id: 'field.materials_common.termSource.fullName',
                    defaultMessage: 'Source name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/shared,citation/worldcat',
                  },
                },
              },
            },
            termSourceDetail: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.termSourceDetail.name',
                    defaultMessage: 'Detail',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSourceID: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.termSourceID.name',
                    defaultMessage: 'ID',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSourceNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.termSourceNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        materialRecordTypes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialRecordType: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.materialRecordType.name',
                  defaultMessage: 'Material type',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'materialtype',
                },
              },
            },
          },
        },
        materialCompositionGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialCompositionGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.materialCompositionGroup.name',
                  defaultMessage: 'Composition',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            materialCompositionFamilyName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.materialCompositionFamilyName.name',
                    defaultMessage: 'Family name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/materialclassification',
                  },
                },
              },
            },
            materialCompositionClassName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.materialCompositionClassName.name',
                    defaultMessage: 'Class name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/materialclassification',
                  },
                },
              },
            },
            materialCompositionGenericName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.materialCompositionGenericName.name',
                    defaultMessage: 'Generic name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/materialclassification',
                  },
                },
              },
            },
          },
        },
        description: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.materials_common.description.name',
                defaultMessage: 'Description',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        typicalUses: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          typicalUse: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.typicalUse.name',
                  defaultMessage: 'Typical use',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'materialuse',
                },
              },
            },
          },
        },
        discontinued: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.materials_common.discontinued.name',
                defaultMessage: 'Discontinued',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'yesNoValues',
              },
            },
          },
        },
        discontinuedBy: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.materials_common.discontinuedBy.fullName',
                defaultMessage: 'Discontinued by',
              },
              name: {
                id: 'field.materials_common.discontinuedBy.name',
                defaultMessage: 'By',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'organization/local,organization/shared',
              },
            },
          },
        },
        discontinuedYear: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              fullName: {
                id: 'field.materials_common.discontinuedYear.fullName',
                defaultMessage: 'Discontinued year',
              },
              name: {
                id: 'field.materials_common.discontinuedYear.name',
                defaultMessage: 'Year',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        productionYear: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.materials_common.productionYear.name',
                defaultMessage: 'Production year',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        productionNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.materials_common.productionNote.name',
                defaultMessage: 'Production note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        materialProductionOrganizationGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialProductionOrganizationGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.materialProductionOrganizationGroup.name',
                  defaultMessage: 'Production organization',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            materialProductionOrganization: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialProductionOrganization.fullName',
                    defaultMessage: 'Production organization name',
                  },
                  name: {
                    id: 'field.materials_common.materialProductionOrganization.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'organization/local,organization/shared',
                  },
                },
              },
            },
            materialProductionOrganizationRole: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialProductionOrganizationRole.fullName',
                    defaultMessage: 'Production organization role',
                  },
                  name: {
                    id: 'field.materials_common.materialProductionOrganizationRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'materialproductionrole',
                  },
                },
              },
            },
          },
        },
        materialProductionPersonGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialProductionPersonGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.materialProductionPersonGroup.name',
                  defaultMessage: 'Production person',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            materialProductionPerson: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialProductionPerson.fullName',
                    defaultMessage: 'Production person name',
                  },
                  name: {
                    id: 'field.materials_common.materialProductionPerson.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared',
                  },
                },
              },
            },
            materialProductionPersonRole: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialProductionPersonRole.fullName',
                    defaultMessage: 'Production person role',
                  },
                  name: {
                    id: 'field.materials_common.materialProductionPersonRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'materialproductionrole',
                  },
                },
              },
            },
          },
        },
        materialProductionPlaceGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialProductionPlaceGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.materialProductionPlaceGroup.name',
                  defaultMessage: 'Production place',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            materialProductionPlace: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialProductionPlace.fullName',
                    defaultMessage: 'Production place name',
                  },
                  name: {
                    id: 'field.materials_common.materialProductionPlace.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/shared',
                  },
                },
              },
            },
            materialProductionPlaceRole: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialProductionPlaceRole.fullName',
                    defaultMessage: 'Production place role',
                  },
                  name: {
                    id: 'field.materials_common.materialProductionPlaceRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'materialproductionrole',
                  },
                },
              },
            },
          },
        },
        featuredApplicationGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          featuredApplicationGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.featuredApplicationGroup.name',
                  defaultMessage: 'Featured application',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            featuredApplication: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.featuredApplication.fullName',
                    defaultMessage: 'Featured application name',
                  },
                  name: {
                    id: 'field.materials_common.featuredApplication.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'work/local,work/shared',
                  },
                },
              },
            },
            featuredApplicationNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.featuredApplicationNote.fullName',
                    defaultMessage: 'Featured application note',
                  },
                  name: {
                    id: 'field.materials_common.featuredApplicationNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        materialCitationGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialCitationGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.materialCitationGroup.name',
                  defaultMessage: 'Citation',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            materialCitationSource: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.materialCitationSource.name',
                    defaultMessage: 'Citation',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/shared',
                  },
                },
              },
            },
            materialCitationSourceDetail: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialCitationSourceDetail.fullName',
                    defaultMessage: 'Citation source detail',
                  },
                  name: {
                    id: 'field.materials_common.materialCitationSourceDetail.name',
                    defaultMessage: 'Source detail',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        externalUrlGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          externalUrlGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.externalUrlGroup.name',
                  defaultMessage: 'External URL',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            externalUrl: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.externalUrl.fullName',
                    defaultMessage: 'External URL',
                  },
                  name: {
                    id: 'field.materials_common.externalUrl.name',
                    defaultMessage: 'URL',
                  },
                }),
                view: {
                  type: URLInput,
                },
              },
            },
            externalUrlNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.externalUrlNote.fullName',
                    defaultMessage: 'External URL note',
                  },
                  name: {
                    id: 'field.materials_common.externalUrlNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        additionalResourceGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          additionalResourceGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.additionalResourceGroup.name',
                  defaultMessage: 'External standard',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            additionalResource: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.additionalResource.fullName',
                    defaultMessage: 'External standard name',
                  },
                  name: {
                    id: 'field.materials_common.additionalResource.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'materialresource',
                  },
                },
              },
            },
            additionalResourceNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.additionalResourceNote.fullName',
                    defaultMessage: 'External standard note',
                  },
                  name: {
                    id: 'field.materials_common.additionalResourceNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        materialTermAttributionContributingGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialTermAttributionContributingGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.materialTermAttributionContributingGroup.name',
                  defaultMessage: 'Term creator',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            materialTermAttributionContributingOrganization: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialTermAttributionContributingOrganization.fullName',
                    defaultMessage: 'Term creator organization',
                  },
                  name: {
                    id: 'field.materials_common.materialTermAttributionContributingOrganization.name',
                    defaultMessage: 'Organization',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'organization/local,organization/shared',
                  },
                },
              },
            },
            materialTermAttributionContributingPerson: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialTermAttributionContributingPerson.fullName',
                    defaultMessage: 'Term creator contributor',
                  },
                  name: {
                    id: 'field.materials_common.materialTermAttributionContributingPerson.name',
                    defaultMessage: 'Contributor',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared',
                  },
                },
              },
            },
            materialTermAttributionContributingDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialTermAttributionContributingDate.fullName',
                    defaultMessage: 'Term creator date',
                  },
                  name: {
                    id: 'field.materials_common.materialTermAttributionContributingDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        materialTermAttributionEditingGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialTermAttributionEditingGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.materialTermAttributionEditingGroup.name',
                  defaultMessage: 'Term editor',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            materialTermAttributionEditingOrganization: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialTermAttributionEditingOrganization.fullName',
                    defaultMessage: 'Term editor organization',
                  },
                  name: {
                    id: 'field.materials_common.materialTermAttributionEditingOrganization.name',
                    defaultMessage: 'Organization',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'organization/local,organization/shared',
                  },
                },
              },
            },
            materialTermAttributionEditingPerson: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialTermAttributionEditingPerson.fullName',
                    defaultMessage: 'Term editor',
                  },
                  name: {
                    id: 'field.materials_common.materialTermAttributionEditingPerson.name',
                    defaultMessage: 'Editor',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared',
                  },
                },
              },
            },
            materialTermAttributionEditingNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialTermAttributionEditingNote.fullName',
                    defaultMessage: 'Term editor note',
                  },
                  name: {
                    id: 'field.materials_common.materialTermAttributionEditingNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            materialTermAttributionEditingDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.materialTermAttributionEditingDate.fullName',
                    defaultMessage: 'Term editor date',
                  },
                  name: {
                    id: 'field.materials_common.materialTermAttributionEditingDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        commonForm: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.materials_common.commonForm.name',
                defaultMessage: 'Common form',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'materialform',
              },
            },
          },
        },
        formTypeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          formTypeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.formTypeGroup.name',
                  defaultMessage: 'Form type',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            formType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.materials_common.formType.name',
                    defaultMessage: 'Form type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'materialformtype',
                  },
                },
              },
            },
          },
        },
        typicalSizeGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          typicalSizeGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.typicalSizeGroup.name',
                  defaultMessage: 'Typical size',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            typicalSize: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.typicalSize.fullName',
                    defaultMessage: 'Typical size',
                  },
                  name: {
                    id: 'field.materials_common.typicalSize.name',
                    defaultMessage: 'Size',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            typicalSizeDimensionGroupList: {
              [config]: {
                view: {
                  type: CompoundInput,
                },
              },
              typicalSizeDimensionGroup: {
                [config]: {
                  messages: defineMessages({
                    name: {
                      id: 'field.materials_common.typicalSizeDimensionGroup.name',
                      defaultMessage: 'Measurement',
                    },
                  }),
                  repeating: true,
                  view: {
                    type: CompoundInput,
                    props: {
                      tabular: true,
                    },
                  },
                },
                dimension: {
                  [config]: {
                    messages: defineMessages({
                      fullName: {
                        id: 'field.materials_common.dimension.fullName',
                        defaultMessage: 'Measurement dimension',
                      },
                      name: {
                        id: 'field.materials_common.dimension.name',
                        defaultMessage: 'Dimension',
                      },
                    }),
                    view: {
                      type: OptionPickerInput,
                      props: {
                        source: 'dimensions',
                      },
                    },
                  },
                },
                measurementUnit: {
                  [config]: {
                    messages: defineMessages({
                      fullName: {
                        id: 'field.materials_common.measurementUnit.fullName',
                        defaultMessage: 'Measurement unit',
                      },
                      name: {
                        id: 'field.materials_common.measurementUnit.name',
                        defaultMessage: 'Unit',
                      },
                    }),
                    view: {
                      type: OptionPickerInput,
                      props: {
                        source: 'measurementUnits',
                      },
                    },
                  },
                },
                value: {
                  [config]: {
                    dataType: DATA_TYPE_FLOAT,
                    messages: defineMessages({
                      fullName: {
                        id: 'field.materials_common.value.fullName',
                        defaultMessage: 'Measurement value',
                      },
                      name: {
                        id: 'field.materials_common.value.name',
                        defaultMessage: 'Value',
                      },
                    }),
                    view: {
                      type: TextInput,
                    },
                  },
                },
              },
            },
          },
        },
        formNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.materials_common.formNote.name',
                defaultMessage: 'Form note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        acousticalPropertyGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          acousticalPropertyGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.acousticalPropertyGroup.name',
                  defaultMessage: 'Acoustical property',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            acousticalPropertyType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.acousticalPropertyType.fullName',
                    defaultMessage: 'Acoustical property type',
                  },
                  name: {
                    id: 'field.materials_common.acousticalPropertyType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'acousticalproperties',
                  },
                },
              },
            },
            acousticalPropertyNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.acousticalPropertyNote.fullName',
                    defaultMessage: 'Acoustical property note',
                  },
                  name: {
                    id: 'field.materials_common.acousticalPropertyNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        durabilityPropertyGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          durabilityPropertyGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.durabilityPropertyGroup.name',
                  defaultMessage: 'Durability property',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            durabilityPropertyType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.durabilityPropertyType.fullName',
                    defaultMessage: 'Durability property type',
                  },
                  name: {
                    id: 'field.materials_common.durabilityPropertyType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'durabilityproperties',
                  },
                },
              },
            },
            durabilityPropertyNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.durabilityPropertyNote.fullName',
                    defaultMessage: 'Durability property note',
                  },
                  name: {
                    id: 'field.materials_common.durabilityPropertyNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        electricalPropertyGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          electricalPropertyGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.electricalPropertyGroup.name',
                  defaultMessage: 'Electrical property',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            electricalPropertyType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.electricalPropertyType.fullName',
                    defaultMessage: 'Electrical property type',
                  },
                  name: {
                    id: 'field.materials_common.electricalPropertyType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'electricalproperties',
                  },
                },
              },
            },
            electricalPropertyNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.electricalPropertyNote.fullName',
                    defaultMessage: 'Electrical property note',
                  },
                  name: {
                    id: 'field.materials_common.electricalPropertyNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        hygrothermalPropertyGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          hygrothermalPropertyGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.hygrothermalPropertyGroup.name',
                  defaultMessage: 'Hygro-thermal property',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            hygrothermalPropertyType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.hygrothermalPropertyType.fullName',
                    defaultMessage: 'Hygro-thermal property type',
                  },
                  name: {
                    id: 'field.materials_common.hygrothermalPropertyType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'hygrothermalproperties',
                  },
                },
              },
            },
            hygrothermalPropertyUnit: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.hygrothermalPropertyUnit.fullName',
                    defaultMessage: 'Hygro-thermal property unit',
                  },
                  name: {
                    id: 'field.materials_common.hygrothermalPropertyUnit.name',
                    defaultMessage: 'Unit',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'hygrothermalpropertyunits',
                  },
                },
              },
            },
            hygrothermalPropertyValue: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.hygrothermalPropertyValue.fullName',
                    defaultMessage: 'Hygro-thermal property value',
                  },
                  name: {
                    id: 'field.materials_common.hygrothermalPropertyValue.name',
                    defaultMessage: 'Value',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            hygrothermalPropertyNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.hygrothermalPropertyNote.fullName',
                    defaultMessage: 'Hygro-thermal property note',
                  },
                  name: {
                    id: 'field.materials_common.hygrothermalPropertyNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        mechanicalPropertyGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          mechanicalPropertyGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.mechanicalPropertyGroup.name',
                  defaultMessage: 'Mechanical property',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            mechanicalPropertyType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.mechanicalPropertyType.fullName',
                    defaultMessage: 'Mechanical property type',
                  },
                  name: {
                    id: 'field.materials_common.mechanicalPropertyType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'mechanicalproperties',
                  },
                },
              },
            },
            mechanicalPropertyUnit: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.mechanicalPropertyUnit.fullName',
                    defaultMessage: 'Mechanical property unit',
                  },
                  name: {
                    id: 'field.materials_common.mechanicalPropertyUnit.name',
                    defaultMessage: 'Unit',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'mechanicalpropertyunits',
                  },
                },
              },
            },
            mechanicalPropertyValue: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.mechanicalPropertyValue.fullName',
                    defaultMessage: 'Mechanical property value',
                  },
                  name: {
                    id: 'field.materials_common.mechanicalPropertyValue.name',
                    defaultMessage: 'Value',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            mechanicalPropertyNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.mechanicalPropertyNote.fullName',
                    defaultMessage: 'Mechanical property note',
                  },
                  name: {
                    id: 'field.materials_common.mechanicalPropertyNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        opticalPropertyGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          opticalPropertyGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.opticalPropertyGroup.name',
                  defaultMessage: 'Optical property',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            opticalPropertyType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.opticalPropertyType.fullName',
                    defaultMessage: 'Optical property type',
                  },
                  name: {
                    id: 'field.materials_common.opticalPropertyType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'opticalproperties',
                  },
                },
              },
            },
            opticalPropertyNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.opticalPropertyNote.fullName',
                    defaultMessage: 'Optical property note',
                  },
                  name: {
                    id: 'field.materials_common.opticalPropertyNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        sensorialPropertyGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          sensorialPropertyGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.sensorialPropertyGroup.name',
                  defaultMessage: 'Sensorial property',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            sensorialPropertyType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.sensorialPropertyType.fullName',
                    defaultMessage: 'Sensorial property type',
                  },
                  name: {
                    id: 'field.materials_common.sensorialPropertyType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'sensorialproperties',
                  },
                },
              },
            },
            sensorialPropertyNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.sensorialPropertyNote.fullName',
                    defaultMessage: 'Sensorial property note',
                  },
                  name: {
                    id: 'field.materials_common.sensorialPropertyNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        smartMaterialPropertyGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          smartMaterialPropertyGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.smartMaterialPropertyGroup.name',
                  defaultMessage: 'Smart material property',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            smartMaterialPropertyType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.smartMaterialPropertyType.fullName',
                    defaultMessage: 'Smart material property type',
                  },
                  name: {
                    id: 'field.materials_common.smartMaterialPropertyType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'smartmaterialproperties',
                  },
                },
              },
            },
            smartMaterialPropertyNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.smartMaterialPropertyNote.fullName',
                    defaultMessage: 'Smart material property note',
                  },
                  name: {
                    id: 'field.materials_common.smartMaterialPropertyNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        additionalPropertyGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          additionalPropertyGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.additionalPropertyGroup.name',
                  defaultMessage: 'Additional property',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            additionalPropertyType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.additionalPropertyType.fullName',
                    defaultMessage: 'Additional property type',
                  },
                  name: {
                    id: 'field.materials_common.additionalPropertyType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'additionalproperties',
                  },
                },
              },
            },
            additionalPropertyNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.additionalPropertyNote.fullName',
                    defaultMessage: 'Additional property note',
                  },
                  name: {
                    id: 'field.materials_common.additionalPropertyNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        propertyNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.materials_common.propertyNote.name',
                defaultMessage: 'Property note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        recycledContentGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          recycledContentGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.recycledContentGroup.name',
                  defaultMessage: 'Recycled content',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            recycledContent: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.recycledContent.fullName',
                    defaultMessage: 'Recycled content % - low',
                  },
                  name: {
                    id: 'field.materials_common.recycledContent.name',
                    defaultMessage: 'Content % - low',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            recycledContentHigh: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.recycledContentHigh.fullName',
                    defaultMessage: 'Recycled content % - high',
                  },
                  name: {
                    id: 'field.materials_common.recycledContentHigh.name',
                    defaultMessage: 'Content % - high',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            recycledContentQualifier: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.recycledContentQualifier.fullName',
                    defaultMessage: 'Recycled content qualifier',
                  },
                  name: {
                    id: 'field.materials_common.recycledContentQualifier.name',
                    defaultMessage: 'Qualifier',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'recycledcontentqualifiers',
                  },
                },
              },
            },
          },
        },
        lifecycleComponentGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          lifecycleComponentGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.lifecycleComponentGroup.name',
                  defaultMessage: 'Lifecycle component',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            lifecycleComponent: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.lifecycleComponent.fullName',
                    defaultMessage: 'Lifecycle component',
                  },
                  name: {
                    id: 'field.materials_common.lifecycleComponent.name',
                    defaultMessage: 'Component',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'lifecyclecomponents',
                  },
                },
              },
            },
            lifecycleComponentNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.lifecycleComponentNote.fullName',
                    defaultMessage: 'Lifecycle component note',
                  },
                  name: {
                    id: 'field.materials_common.lifecycleComponentNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        embodiedEnergyGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          embodiedEnergyGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.embodiedEnergyGroup.name',
                  defaultMessage: 'Embodied energy',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            embodiedEnergyValue: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.embodiedEnergyValue.fullName',
                    defaultMessage: 'Embodied energy value - low',
                  },
                  name: {
                    id: 'field.materials_common.embodiedEnergyValue.name',
                    defaultMessage: 'Value - low',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            embodiedEnergyValueHigh: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.embodiedEnergyValueHigh.fullName',
                    defaultMessage: 'Embodied energy value - high',
                  },
                  name: {
                    id: 'field.materials_common.embodiedEnergyValueHigh.name',
                    defaultMessage: 'Value - high',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            embodiedEnergyUnit: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.embodiedEnergyUnit.fullName',
                    defaultMessage: 'Embodied energy unit',
                  },
                  name: {
                    id: 'field.materials_common.embodiedEnergyUnit.name',
                    defaultMessage: 'Unit',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'energyunits',
                  },
                },
              },
            },
            embodiedEnergyNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.embodiedEnergyNote.fullName',
                    defaultMessage: 'Embodied energy note',
                  },
                  name: {
                    id: 'field.materials_common.embodiedEnergyNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        certificationCreditGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          certificationCreditGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.certificationCreditGroup.name',
                  defaultMessage: 'Certification credit',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            certificationProgram: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.certificationProgram.fullName',
                    defaultMessage: 'Certification credit program',
                  },
                  name: {
                    id: 'field.materials_common.certificationProgram.name',
                    defaultMessage: 'Program',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'ecologicalcertifications',
                  },
                },
              },
            },
            certificationCreditNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.certificationCreditNote.fullName',
                    defaultMessage: 'Certification credit note',
                  },
                  name: {
                    id: 'field.materials_common.certificationCreditNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        ecologyNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.materials_common.ecologyNote.name',
                defaultMessage: 'Material ecology note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        castingProcesses: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          castingProcess: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.castingProcess.name',
                  defaultMessage: 'Casting',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'castingprocesses',
                },
              },
            },
          },
        },
        joiningProcesses: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          joiningProcess: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.joiningProcess.name',
                  defaultMessage: 'Joining',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'joiningprocesses',
                },
              },
            },
          },
        },
        moldingProcesses: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          moldingProcess: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.moldingProcess.name',
                  defaultMessage: 'Molding',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'moldingprocesses',
                },
              },
            },
          },
        },
        surfacingProcesses: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          surfacingProcess: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.surfacingProcess.name',
                  defaultMessage: 'Surfacing',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'surfacingprocesses',
                },
              },
            },
          },
        },
        deformingProcesses: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          deformingProcess: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.deformingProcess.name',
                  defaultMessage: 'Deforming',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'deformingprocesses',
                },
              },
            },
          },
        },
        machiningProcesses: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          machiningProcess: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.machiningProcess.name',
                  defaultMessage: 'Machining',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'machiningprocesses',
                },
              },
            },
          },
        },
        rapidPrototypingProcesses: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          rapidPrototypingProcess: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.rapidPrototypingProcess.name',
                  defaultMessage: 'Rapid prototyping',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'rapidprototypingprocesses',
                },
              },
            },
          },
        },
        additionalProcessGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          additionalProcessGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.materials_common.additionalProcessGroup.name',
                  defaultMessage: 'Additional process',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            additionalProcess: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.additionalProcess.fullName',
                    defaultMessage: 'Additional process type',
                  },
                  name: {
                    id: 'field.materials_common.additionalProcess.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'additionalprocesses',
                  },
                },
              },
            },
            additionalProcessNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.materials_common.additionalProcessNote.fullName',
                    defaultMessage: 'Additional process note',
                  },
                  name: {
                    id: 'field.materials_common.additionalProcessNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        processNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.materials_common.processNote.name',
                defaultMessage: 'Process note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
    },
  };
};
