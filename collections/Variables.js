import SimpleSchema from 'simpl-schema'
Variables = new Meteor.Collection('Variables')
VariablesSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'name'
  },
  owner: {
    type: String,
    label: "Owner"
  },
  createAt: {
    type: Date,
    label: "Create At",
    autoValue: () => new Date()
  }
})

Variables.attachSchema(VariablesSchema)
export default Variables
