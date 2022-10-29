let data = [
    {
      name: 'Batman',
      age: '41'
    },
    {
      name: 'WonderWoman',
      age: '38'
    },
    {
      name: 'SuperMan',
      age: '43'
    },
    {
      name: 'Flash',
      age: '27'
    },
    {
      name: 'GreenLantern',
      age: '38'
    },
    {
      name: 'Red Tornado',
      age: '00'
    }
  ];
  
  const info = document.querySelector('#info');
  
  let details = data.map(function(item) {
    return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
  });
  
  info.innerHTML = details.join('\n'); 