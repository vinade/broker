Widgets = {}

let list = {};

Widgets.addGroup = function({
  name,
  ...options
}) {
  // @TODO alert unique name group
  list[name] = list[name] || options || {}
  list[name].name = name
  list[name].list = []
}

Widgets.add = function({name, group, ...options}) {
  // @TODO alert unique name  
  list[group].list.push({
    name: name,
    ...options
  })
}

Widgets.getGroups = () => list
Widgets.get = (group) => list[group] || {}

Widgets.addGroup({
  name: 'chart',
  description: 'bla bla',
  image: '/packages/gazzo_widgets-manager/img/chart.png'
})

Widgets.addGroup({
  name: 'metric',
  description: 'bla bla',
  image: '/packages/gazzo_widgets-manager/img/metric.png'
})

Widgets.addGroup({
  name: 'table',
  description: 'bla bla',
  image: '/packages/gazzo_widgets-manager/img/table.png'
})


export default Widgets